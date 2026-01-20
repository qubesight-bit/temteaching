import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { SynchronizedLyrics, KaraokeScore, YouTubeSearchResult } from '@/lib/karaoke/types';
import { getLocalLyrics, createFallbackLyrics } from '@/lib/karaoke/lyricsDatabase';
import { calculateLineScore, calculateSessionScore } from '@/lib/karaoke/scoringService';
import { AudioRecorder, createAudioUrl, revokeAudioUrl } from '@/lib/karaoke/audioRecorder';

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: YouTubePlayerConfig) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
        BUFFERING: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerConfig {
  videoId: string;
  playerVars?: {
    autoplay?: number;
    controls?: number;
    modestbranding?: number;
    rel?: number;
    showinfo?: number;
    origin?: string;
  };
  events?: {
    onReady?: (event: { target: YouTubePlayer }) => void;
    onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
    onError?: (event: { data: number }) => void;
  };
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

export function useKaraokePlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<YouTubeSearchResult[]>([]);
  const [currentVideo, setCurrentVideo] = useState<YouTubeSearchResult | null>(null);
  const [lyrics, setLyrics] = useState<SynchronizedLyrics | null>(null);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [sessionScore, setSessionScore] = useState<KaraokeScore>({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });
  const [lineScores, setLineScores] = useState<KaraokeScore[]>([]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  const playerRef = useRef<YouTubePlayer | null>(null);
  const audioRecorderRef = useRef<AudioRecorder | null>(null);
  const syncIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT?.Player) {
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube IFrame API ready');
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      if (userAudioUrl) {
        revokeAudioUrl(userAudioUrl);
      }
    };
  }, [userAudioUrl]);

  const searchSongs = useCallback(async (query: string, artist: string = '') => {
    if (!query.trim()) {
      setError('Please enter a song name');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('youtube-search', {
        body: { query, artist, maxResults: 12 },
      });

      if (fnError) {
        throw fnError;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setSearchResults(data.videos || []);
      console.log('Search results:', data.videos?.length);
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Error searching for songs');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectVideo = useCallback((video: YouTubeSearchResult) => {
    setCurrentVideo(video);
    setCurrentLineIndex(0);
    setLineScores([]);
    setSessionScore({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });

    // Extract song info from title
    const titleParts = video.snippet.title.split('-');
    const artist = titleParts.length > 1 ? titleParts[0].trim() : '';
    const title = titleParts.length > 1 ? titleParts[1].trim() : video.snippet.title;

    // Try to get local lyrics, fallback to generated
    const localLyrics = getLocalLyrics(title, artist);
    if (localLyrics) {
      setLyrics(localLyrics);
    } else {
      setLyrics(createFallbackLyrics(title, artist));
    }

    // Load YouTube player
    loadPlayer(video.id.videoId);
  }, []);

  const loadPlayer = useCallback((videoId: string) => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }

    // Wait for YT API to be ready
    const initPlayer = () => {
      if (!window.YT?.Player) {
        setTimeout(initPlayer, 100);
        return;
      }

      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            console.log('Player ready');
            setPlayerReady(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startLyricsSync();
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              stopLyricsSync();
            }
          },
          onError: (event) => {
            console.error('YouTube player error:', event.data);
            setError('Error loading video');
          },
        },
      });
    };

    initPlayer();
  }, []);

  const startLyricsSync = useCallback(() => {
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
    }

    syncIntervalRef.current = setInterval(() => {
      if (playerRef.current && lyrics) {
        const currentTime = playerRef.current.getCurrentTime();

        const newLineIndex = lyrics.lyrics.findIndex((line, index) => {
          const nextLine = lyrics.lyrics[index + 1];
          return line.startTime <= currentTime && (!nextLine || nextLine.startTime > currentTime);
        });

        if (newLineIndex !== -1 && newLineIndex !== currentLineIndex) {
          setCurrentLineIndex(newLineIndex);

          // Calculate score for this line
          const lineScore = calculateLineScore(
            newLineIndex,
            currentTime,
            lyrics.lyrics[newLineIndex].startTime,
            isRecording
          );

          setLineScores((prev) => {
            const newScores = [...prev, lineScore];
            setSessionScore(calculateSessionScore(newScores));
            return newScores;
          });
        }
      }
    }, 100);
  }, [lyrics, currentLineIndex, isRecording]);

  const stopLyricsSync = useCallback(() => {
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    playerRef.current?.playVideo();
  }, []);

  const pause = useCallback(() => {
    playerRef.current?.pauseVideo();
  }, []);

  const stop = useCallback(() => {
    playerRef.current?.stopVideo();
    setCurrentLineIndex(0);
    stopLyricsSync();
  }, [stopLyricsSync]);

  const seekTo = useCallback((seconds: number) => {
    playerRef.current?.seekTo(seconds, true);
  }, []);

  const startRecording = useCallback(async () => {
    if (!audioRecorderRef.current) {
      audioRecorderRef.current = new AudioRecorder();
    }

    const started = await audioRecorderRef.current.start();
    if (started) {
      setIsRecording(true);
      // Clear previous recording
      if (userAudioUrl) {
        revokeAudioUrl(userAudioUrl);
        setUserAudioUrl(null);
      }
    } else {
      setError('Could not access microphone');
    }
  }, [userAudioUrl]);

  const stopRecording = useCallback(async () => {
    if (audioRecorderRef.current) {
      const audioBlob = await audioRecorderRef.current.stop();
      setIsRecording(false);

      if (audioBlob) {
        const url = createAudioUrl(audioBlob);
        setUserAudioUrl(url);
      }
    }
  }, []);

  const toggleRecording = useCallback(async () => {
    if (isRecording) {
      await stopRecording();
    } else {
      await startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  const resetSession = useCallback(() => {
    setCurrentLineIndex(0);
    setLineScores([]);
    setSessionScore({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });
    if (userAudioUrl) {
      revokeAudioUrl(userAudioUrl);
      setUserAudioUrl(null);
    }
    stop();
  }, [stop, userAudioUrl]);

  return {
    // State
    isLoading,
    error,
    searchResults,
    currentVideo,
    lyrics,
    currentLineIndex,
    isPlaying,
    isRecording,
    userAudioUrl,
    sessionScore,
    lineScores,
    showTranslation,
    playerReady,

    // Actions
    searchSongs,
    selectVideo,
    play,
    pause,
    stop,
    seekTo,
    toggleRecording,
    resetSession,
    setShowTranslation,
    setError,
  };
}
