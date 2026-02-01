import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface UseElevenLabsTTSOptions {
  voiceId?: string;
}

export function useElevenLabsTTS(options: UseElevenLabsTTSOptions = {}) {
  const { voiceId = "BAdH0bMfq6VleQGLXj38" } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrlRef = useRef<string | null>(null);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = null;
    }
  }, []);

  const speak = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Clean text: remove repeated words like "score score score" from empty values
    // and ensure we have meaningful content to speak
    let cleanText = text
      .replace(/\b(\w+)(\s+\1){3,}\b/gi, '') // Remove words repeated 4+ times in a row
      .replace(/\s{2,}/g, ' ') // Normalize multiple spaces
      .trim();

    // If cleaning removed all content, don't speak
    if (!cleanText) return;

    // Stop any currently playing audio
    stopAudio();

    setIsLoading(true);

    try {
      // Call edge function directly with fetch for binary response
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text, voiceId }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `TTS request failed: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      currentUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        currentUrlRef.current = null;
      };
      audio.onerror = () => {
        setIsPlaying(false);
        toast({
          variant: "destructive",
          title: "Audio Error",
          description: "Failed to play audio. Please try again.",
        });
      };

      await audio.play();
    } catch (error) {
      console.error("TTS Error:", error);
      toast({
        variant: "destructive",
        title: "Voice Error",
        description: error instanceof Error ? error.message : "Failed to generate speech",
      });
    } finally {
      setIsLoading(false);
    }
  }, [voiceId, stopAudio]);

  return {
    speak,
    stopAudio,
    isLoading,
    isPlaying,
  };
}
