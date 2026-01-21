import { useEffect, useRef } from 'react';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KaraokeVideoPlayerProps {
  videoId?: string;
  isPlaying: boolean;
  playerReady: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onReset: () => void;
  onPlayerReady: () => void;
  onPlayerStateChange: (isPlaying: boolean) => void;
  onPlayerError: (error: string) => void;
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string | HTMLElement, config: YouTubePlayerConfig) => YouTubePlayer;
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

export function KaraokeVideoPlayer({
  videoId,
  isPlaying,
  playerReady,
  onPlay,
  onPause,
  onStop,
  onReset,
  onPlayerReady,
  onPlayerStateChange,
  onPlayerError,
}: KaraokeVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const playerElementId = useRef(`youtube-player-${Date.now()}`);

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

  // Initialize player when videoId changes
  useEffect(() => {
    if (!videoId) return;

    const initPlayer = () => {
      if (!window.YT?.Player) {
        setTimeout(initPlayer, 100);
        return;
      }

      // Destroy existing player
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log('Player cleanup:', e);
        }
        playerRef.current = null;
      }

      // Create fresh container element
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        const playerDiv = document.createElement('div');
        playerDiv.id = playerElementId.current;
        playerDiv.style.width = '100%';
        playerDiv.style.height = '100%';
        containerRef.current.appendChild(playerDiv);
      }

      // Create new player
      try {
        playerRef.current = new window.YT.Player(playerElementId.current, {
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
              console.log('YouTube player ready');
              onPlayerReady();
            },
            onStateChange: (event) => {
              const playing = event.data === window.YT.PlayerState.PLAYING;
              const paused = event.data === window.YT.PlayerState.PAUSED;
              const ended = event.data === window.YT.PlayerState.ENDED;
              
              if (playing) {
                onPlayerStateChange(true);
              } else if (paused || ended) {
                onPlayerStateChange(false);
              }
            },
            onError: (event) => {
              console.error('YouTube player error:', event.data);
              const errorMessages: Record<number, string> = {
                2: 'ID de video inválido',
                5: 'Error del reproductor HTML5',
                100: 'Video no encontrado',
                101: 'Video no disponible para embeber',
                150: 'Video restringido',
              };
              onPlayerError(errorMessages[event.data] || 'Error al cargar el video');
            },
          },
        });
      } catch (err) {
        console.error('Error creating YouTube player:', err);
        onPlayerError('Error al inicializar el reproductor');
      }
    };

    initPlayer();

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log('Player cleanup on unmount:', e);
        }
        playerRef.current = null;
      }
    };
  }, [videoId, onPlayerReady, onPlayerStateChange, onPlayerError]);

  // Expose player controls
  useEffect(() => {
    const handlePlay = () => playerRef.current?.playVideo();
    const handlePause = () => playerRef.current?.pauseVideo();
    const handleStop = () => playerRef.current?.stopVideo();

    // Store references to the player methods on window for the hook to access
    (window as any).__karaokePlayer = {
      play: handlePlay,
      pause: handlePause,
      stop: handleStop,
      seekTo: (seconds: number) => playerRef.current?.seekTo(seconds, true),
      getCurrentTime: () => playerRef.current?.getCurrentTime() || 0,
    };

    return () => {
      delete (window as any).__karaokePlayer;
    };
  }, []);

  return (
    <div className="space-y-4">
      <div 
        ref={containerRef}
        className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center"
      >
        {!videoId && (
          <p className="text-muted-foreground">Selecciona una canción para comenzar</p>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {isPlaying ? (
          <Button variant="outline" size="sm" onClick={onPause} disabled={!playerReady}>
            <Pause className="h-4 w-4 mr-1" />
            Pausar
          </Button>
        ) : (
          <Button variant="default" size="sm" onClick={onPlay} disabled={!playerReady}>
            <Play className="h-4 w-4 mr-1" />
            Reproducir
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={onStop} disabled={!playerReady}>
          <Square className="h-4 w-4 mr-1" />
          Detener
        </Button>
        <Button variant="ghost" size="sm" onClick={onReset}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Reiniciar
        </Button>
      </div>
    </div>
  );
}
