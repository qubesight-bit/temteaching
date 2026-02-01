import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Lock, Play, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import { GrammarTopic } from "@/data/grammarData";
import { getGrammarExercisesByCategory } from "@/data/grammarExercisesExpanded";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface TopicRowWithLevelsProps {
  topic: GrammarTopic;
  index: number;
  onStartPractice: (category: string, level: CEFRLevel) => void;
  getLevelColor: (level: string) => string;
}

// Get exercise count for a topic at a specific level using the topic's exerciseCategory
function getExerciseCountForTopicLevel(exerciseCategory: string, level: CEFRLevel): number {
  const exercises = getGrammarExercisesByCategory(level, exerciseCategory);
  return exercises.length;
}

// Check which levels have exercises for this topic
function getAvailableLevels(exerciseCategory: string): { level: CEFRLevel; count: number }[] {
  const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const available: { level: CEFRLevel; count: number }[] = [];
  
  for (const level of levels) {
    const count = getExerciseCountForTopicLevel(exerciseCategory, level);
    if (count > 0) {
      available.push({ level, count });
    }
  }
  
  return available;
}

export function TopicRowWithLevels({ 
  topic, 
  index, 
  onStartPractice, 
  getLevelColor 
}: TopicRowWithLevelsProps) {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(topic.level);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // All topics are freely accessible - no locking
  const isLocked = false;
  const availableLevels = getAvailableLevels(topic.exerciseCategory);
  const currentExerciseCount = getExerciseCountForTopicLevel(topic.exerciseCategory, selectedLevel);
  
  // Get total exercises across all levels for this topic
  const totalExercises = availableLevels.reduce((sum, l) => sum + l.count, 0);
  
  const handleStartPractice = () => {
    onStartPractice(topic.exerciseCategory, selectedLevel);
  };

  return (
    <div
      className={cn(
        "border-b last:border-b-0 transition-colors",
        isLocked ? "opacity-60" : ""
      )}
    >
      {/* Main Topic Row */}
      <div 
        className={cn(
          "flex items-center justify-between p-4 cursor-pointer",
          !isLocked && "hover:bg-secondary/30"
        )}
        onClick={() => !isLocked && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              topic.completed
                ? "bg-success text-white"
                : isLocked
                ? "bg-secondary text-muted-foreground"
                : "bg-primary/10 text-primary"
            )}
          >
            {topic.completed ? (
              <Check className="w-5 h-5" />
            ) : isLocked ? (
              <Lock className="w-4 h-4" />
            ) : (
              <span className="text-sm font-bold">{index + 1}</span>
            )}
          </div>
          
          <div>
            <h4 className="font-medium">{topic.title}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium text-white",
                  getLevelColor(topic.level)
                )}
              >
                {topic.level}
              </span>
              {totalExercises > 0 && (
                <span className="text-xs text-muted-foreground">
                  {totalExercises} exercises across {availableLevels.length} level{availableLevels.length > 1 ? 's' : ''}
                </span>
              )}
              {topic.completed && (
                <span className="text-xs text-success">Completed</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isLocked && (
            <Button
              variant={isExpanded ? "secondary" : "default"}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              <Dumbbell className="w-4 h-4 mr-1" />
              Practice
            </Button>
          )}
        </div>
      </div>

      {/* Expanded Level Selection */}
      {isExpanded && !isLocked && (
        <div className="px-4 pb-4 pt-2 bg-secondary/20 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            Choose a level to practice <strong>{topic.title}</strong> exercises:
          </p>
          
          {/* Level Buttons */}
          <div className="grid grid-cols-6 gap-2 mb-4">
            {(["A1", "A2", "B1", "B2", "C1", "C2"] as CEFRLevel[]).map((level) => {
              const levelData = availableLevels.find(l => l.level === level);
              const hasExercises = levelData && levelData.count > 0;
              const isSelected = selectedLevel === level;
              
              return (
                <button
                  key={level}
                  onClick={() => hasExercises && setSelectedLevel(level)}
                  disabled={!hasExercises}
                  className={cn(
                    "flex flex-col items-center gap-1 p-3 rounded-lg border-2 transition-all",
                    isSelected && hasExercises
                      ? "border-primary bg-primary/10"
                      : hasExercises
                      ? "border-border hover:border-primary/50 hover:bg-secondary/50"
                      : "border-border/50 opacity-40 cursor-not-allowed"
                  )}
                >
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded text-xs font-bold text-white",
                      getLevelColor(level)
                    )}
                  >
                    {level}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {hasExercises ? `${levelData.count} ex.` : "0 ex."}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Start Practice Button */}
          {currentExerciseCount > 0 ? (
            <Button 
              onClick={handleStartPractice} 
              className="w-full gap-2"
            >
              <Play className="w-4 h-4" />
              Start {currentExerciseCount} {selectedLevel} Exercises
            </Button>
          ) : (
            <p className="text-center text-sm text-muted-foreground py-2">
              No exercises available for {selectedLevel} level in this topic.
              <br />
              Try a different level.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
