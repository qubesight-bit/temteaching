import { Play, Pause, Square, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KaraokeVideoPlayerProps {
  isPlaying: boolean;
  playerReady: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onReset: () => void;
}

export function KaraokeVideoPlayer({
  isPlaying,
  playerReady,
  onPlay,
  onPause,
  onStop,
  onReset,
}: KaraokeVideoPlayerProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
        <div id="youtube-player" className="w-full h-full" />
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
