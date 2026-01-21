import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight, Check, Lock, BookOpen, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { 
  curriculumData, 
  CEFRLevel, 
  LevelCurriculum,
  SkillCategory,
  Skill,
  getLevelProgress,
  getCategoryProgress,
  getSkillProgress
} from "@/data/curriculumData";

const levelColors: Record<CEFRLevel, string> = {
  A1: "level-a1",
  A2: "level-a2",
  B1: "level-b1",
  B2: "level-b2",
  C1: "level-c1",
  C2: "level-c2",
};

const levelTextColors: Record<CEFRLevel, string> = {
  A1: "level-a1-text",
  A2: "level-a2-text",
  B1: "level-b1-text",
  B2: "level-b2-text",
  C1: "level-c1-text",
  C2: "level-c2-text",
};

export default function Curriculum() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>("A1");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSkills, setExpandedSkills] = useState<string[]>([]);
  const [completedSkills, setCompletedSkills] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("curriculum-progress");
    if (saved) {
      setCompletedSkills(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("curriculum-progress", JSON.stringify(completedSkills));
  }, [completedSkills]);

  const currentLevelData = curriculumData.find(l => l.level === selectedLevel)!;
  const levelProgress = getLevelProgress(selectedLevel, completedSkills);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSkill = (skillId: string) => {
    setExpandedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const toggleSubSkill = (subSkillId: string) => {
    setCompletedSkills(prev =>
      prev.includes(subSkillId)
        ? prev.filter(id => id !== subSkillId)
        : [...prev, subSkillId]
    );
  };

  const isLevelUnlocked = (level: CEFRLevel): boolean => {
    const levelIndex = curriculumData.findIndex(l => l.level === level);
    if (levelIndex === 0) return true;
    const previousLevel = curriculumData[levelIndex - 1].level;
    return getLevelProgress(previousLevel, completedSkills) >= 80;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white p-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-display font-bold">CEFR Curriculum</h1>
            <p className="text-white/80 text-sm">Your structured learning path</p>
          </div>
        </div>

        {/* Level selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {curriculumData.map((level) => {
            const unlocked = isLevelUnlocked(level.level);
            const progress = getLevelProgress(level.level, completedSkills);
            
            return (
              <button
                key={level.level}
                onClick={() => unlocked && setSelectedLevel(level.level)}
                disabled={!unlocked}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition-all",
                  selectedLevel === level.level
                    ? `${levelColors[level.level]} text-white shadow-lg scale-105`
                    : unlocked
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-white/10 text-white/50 cursor-not-allowed"
                )}
              >
                <div className="text-sm">{level.level}</div>
                <div className="text-xs opacity-80">
                  {unlocked ? `${progress}%` : <Lock className="w-3 h-3 inline" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level Overview */}
      <div className="p-4 space-y-4">
        <Card className="border-2" style={{ borderColor: `hsl(var(--${levelColors[selectedLevel].replace('level-', 'level-')}))` }}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <Badge className={cn(levelColors[selectedLevel], "text-white mb-2")}>
                  {selectedLevel} - {currentLevelData.title}
                </Badge>
                <CardTitle className="text-lg">{currentLevelData.description}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-secondary rounded-lg">
                <Target className={cn("w-5 h-5 mx-auto mb-1", levelTextColors[selectedLevel])} />
                <p className="text-xs text-muted-foreground">Vocabulary</p>
                <p className="font-semibold text-sm">{currentLevelData.targetVocabulary}</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <Clock className={cn("w-5 h-5 mx-auto mb-1", levelTextColors[selectedLevel])} />
                <p className="text-xs text-muted-foreground">Estimated hours</p>
                <p className="font-semibold text-sm">{currentLevelData.estimatedHours}h</p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <BookOpen className={cn("w-5 h-5 mx-auto mb-1", levelTextColors[selectedLevel])} />
                <p className="text-xs text-muted-foreground">Categories</p>
                <p className="font-semibold text-sm">{currentLevelData.categories.length}</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Level progress</span>
                <span className={cn("font-semibold", levelTextColors[selectedLevel])}>{levelProgress}%</span>
              </div>
              <Progress value={levelProgress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="space-y-3">
          {currentLevelData.categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              level={selectedLevel}
              isExpanded={expandedCategories.includes(category.id)}
              onToggle={() => toggleCategory(category.id)}
              expandedSkills={expandedSkills}
              onToggleSkill={toggleSkill}
              completedSkills={completedSkills}
              onToggleSubSkill={toggleSubSkill}
              currentLevelData={currentLevelData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: SkillCategory;
  level: CEFRLevel;
  isExpanded: boolean;
  onToggle: () => void;
  expandedSkills: string[];
  onToggleSkill: (skillId: string) => void;
  completedSkills: string[];
  onToggleSubSkill: (subSkillId: string) => void;
  currentLevelData: LevelCurriculum;
}

function CategoryCard({
  category,
  level,
  isExpanded,
  onToggle,
  expandedSkills,
  onToggleSkill,
  completedSkills,
  onToggleSubSkill,
  currentLevelData,
}: CategoryCardProps) {
  const progress = getCategoryProgress(category.id, completedSkills, currentLevelData);

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <Card className="overflow-hidden">
        <CollapsibleTrigger className="w-full">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <CardTitle className="text-base">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={levelTextColors[level]}>
                  {progress}%
                </Badge>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </div>
            <Progress value={progress} className="h-1.5 mt-2" />
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="pt-0 space-y-2">
            {category.skills.map((skill) => (
              <SkillRow
                key={skill.id}
                skill={skill}
                level={level}
                isExpanded={expandedSkills.includes(skill.id)}
                onToggle={() => onToggleSkill(skill.id)}
                completedSkills={completedSkills}
                onToggleSubSkill={onToggleSubSkill}
                currentLevelData={currentLevelData}
              />
            ))}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

interface SkillRowProps {
  skill: Skill;
  level: CEFRLevel;
  isExpanded: boolean;
  onToggle: () => void;
  completedSkills: string[];
  onToggleSubSkill: (subSkillId: string) => void;
  currentLevelData: LevelCurriculum;
}

function SkillRow({
  skill,
  level,
  isExpanded,
  onToggle,
  completedSkills,
  onToggleSubSkill,
  currentLevelData,
}: SkillRowProps) {
  const progress = getSkillProgress(skill.id, completedSkills, currentLevelData);
  const isComplete = progress === 100;

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <div className={cn(
        "rounded-lg border p-3 transition-colors",
        isComplete ? "bg-success/10 border-success/30" : "bg-secondary/50"
      )}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                isComplete
                  ? "bg-success text-white"
                  : `${levelColors[level]} text-white opacity-70`
              )}>
                {isComplete ? <Check className="w-4 h-4" /> : `${progress}%`}
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">{skill.title}</p>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </div>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="mt-3 pl-9 space-y-2">
            {skill.subSkills.map((subSkill) => {
              const isChecked = completedSkills.includes(subSkill.id);
              return (
                <button
                  key={subSkill.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSubSkill(subSkill.id);
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 p-2 rounded-md text-left transition-colors",
                    isChecked
                      ? "bg-success/20 text-success-foreground"
                      : "bg-background hover:bg-secondary"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                    isChecked
                      ? "bg-success border-success text-white"
                      : "border-muted-foreground/30"
                  )}>
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                  <span className={cn(
                    "text-sm",
                    isChecked && "line-through opacity-70"
                  )}>
                    {subSkill.title}
                  </span>
                </button>
              );
            })}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
