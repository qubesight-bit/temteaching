import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface InteractiveLevelSelectorProps {
  selectedLevel: CEFRLevel;
  onLevelSelect: (level: CEFRLevel) => void;
  currentUserLevel?: CEFRLevel;
}

const levels: { id: CEFRLevel; label: string; description: string }[] = [
  { id: "A1", label: "Beginner", description: "Basic phrases and vocabulary" },
  { id: "A2", label: "Elementary", description: "Simple everyday situations" },
  { id: "B1", label: "Intermediate", description: "Main points of clear texts" },
  { id: "B2", label: "Upper-Intermediate", description: "Complex texts and discussions" },
  { id: "C1", label: "Advanced", description: "Demanding, longer texts" },
  { id: "C2", label: "Mastery", description: "Near-native proficiency" },
];

const getLevelColor = (level: string): string => {
  const colors: Record<string, string> = {
    A1: "bg-level-a1",
    A2: "bg-level-a2",
    B1: "bg-level-b1",
    B2: "bg-level-b2",
    C1: "bg-level-c1",
    C2: "bg-purple-600",
  };
  return colors[level] || "bg-primary";
};

const getLevelBorderColor = (level: string): string => {
  const colors: Record<string, string> = {
    A1: "border-level-a1 ring-level-a1/30",
    A2: "border-level-a2 ring-level-a2/30",
    B1: "border-level-b1 ring-level-b1/30",
    B2: "border-level-b2 ring-level-b2/30",
    C1: "border-level-c1 ring-level-c1/30",
    C2: "border-purple-600 ring-purple-600/30",
  };
  return colors[level] || "border-primary";
};

export function InteractiveLevelSelector({ 
  selectedLevel, 
  onLevelSelect,
  currentUserLevel = "A1"
}: InteractiveLevelSelectorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          Click on any level to explore its topics and exercises
        </p>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
          Your level: <span className="font-semibold text-foreground">{currentUserLevel}</span>
        </span>
      </div>
      
      {/* Level Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.id;
          
          return (
            <button
              key={level.id}
              onClick={() => onLevelSelect(level.id)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200",
                "hover:scale-105 hover:shadow-lg cursor-pointer",
                isSelected 
                  ? `${getLevelBorderColor(level.id)} ring-4 shadow-md` 
                  : "border-border hover:border-muted-foreground/50"
              )}
            >
              {/* Level Badge */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 transition-transform",
                  getLevelColor(level.id),
                  isSelected && "scale-110"
                )}
              >
                {level.id}
              </div>
              
              {/* Label */}
              <span className={cn(
                "text-xs font-medium text-center",
                isSelected ? "text-foreground" : "text-muted-foreground"
              )}>
                {level.label}
              </span>
              
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Selected Level Info */}
      <div className="mt-4 p-4 rounded-xl bg-secondary/50 border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <span className={cn(
                "px-2 py-0.5 rounded text-white text-sm",
                getLevelColor(selectedLevel)
              )}>
                {selectedLevel}
              </span>
              {levels.find(l => l.id === selectedLevel)?.label}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {levels.find(l => l.id === selectedLevel)?.description}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
