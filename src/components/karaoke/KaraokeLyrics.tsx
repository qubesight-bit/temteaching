import { useRef, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { SynchronizedLyrics } from '@/lib/karaoke/types';
import { cn } from '@/lib/utils';

interface KaraokeLyricsProps {
  lyrics: SynchronizedLyrics;
  currentLineIndex: number;
  showTranslation: boolean;
  onToggleTranslation: (show: boolean) => void;
  onLineClick: (startTime: number) => void;
}

export function KaraokeLyrics({
  lyrics,
  currentLineIndex,
  showTranslation,
  onToggleTranslation,
  onLineClick,
}: KaraokeLyricsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active line
  useEffect(() => {
    if (activeLineRef.current && scrollContainerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLineIndex]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{lyrics.title} - {lyrics.artist}</h3>
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-muted-foreground" />
          <Switch
            id="show-translation"
            checked={showTranslation}
            onCheckedChange={onToggleTranslation}
          />
          <Label htmlFor="show-translation" className="text-sm">
            Translation
          </Label>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="h-[300px] overflow-y-auto rounded-lg bg-muted/50 p-4 space-y-2"
      >
        {lyrics.lyrics.map((line, index) => (
          <div
            key={line.id}
            ref={index === currentLineIndex ? activeLineRef : null}
            onClick={() => onLineClick(line.startTime)}
            className={cn(
              'py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-muted',
              index === currentLineIndex
                ? 'bg-primary/20 border-l-4 border-primary text-lg font-semibold scale-[1.02] shadow-md'
                : 'opacity-60 text-base',
              index < currentLineIndex && 'opacity-40'
            )}
          >
            <p className={cn(
              'transition-all',
              index === currentLineIndex && 'text-primary'
            )}>
              {line.text}
            </p>
            {showTranslation && line.translation && (
              <p className="text-sm text-muted-foreground mt-1 italic">
                {line.translation}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium">Vocabulary:</span>
        {lyrics.vocabulary.map((word) => (
          <span
            key={word}
            className="text-xs bg-secondary px-2 py-1 rounded-full"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}