import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { grammarCategories, GrammarCategory, GrammarTopic } from "@/data/grammarData";
import { ChevronDown, ChevronRight, Check, Lock, Play, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Grammar() {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getCategoryProgress = (category: GrammarCategory) => {
    const completed = category.topics.filter(t => t.completed).length;
    return Math.round((completed / category.topics.length) * 100);
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      A1: "bg-level-a1",
      A2: "bg-level-a2",
      B1: "bg-level-b1",
      B2: "bg-level-b2",
      C1: "bg-level-c1",
    };
    return colors[level] || "bg-primary";
  };

  const handleStartTopic = (categoryId: string, topicId: string) => {
    navigate(`/lesson/grammar/${categoryId}/${topicId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Back Button & Title */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-level-b1 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Gramática
              </h1>
              <p className="text-muted-foreground">
                19 categorías completas desde tiempos verbales hasta estructuras complejas
              </p>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Progreso general</h3>
              <span className="text-sm text-muted-foreground">0% completado</span>
            </div>
            <Progress value={0} className="h-3" />
          </CardContent>
        </Card>

        {/* Grammar Categories */}
        <div className="space-y-4">
          {grammarCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            const progress = getCategoryProgress(category);
            
            return (
              <Card key={category.id} className="overflow-hidden">
                {/* Category Header */}
                <button
                  className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium">{progress}%</p>
                      <p className="text-xs text-muted-foreground">{category.topics.length} temas</p>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Topics List */}
                {isExpanded && (
                  <div className="border-t">
                    {category.topics.map((topic, index) => (
                      <TopicRow
                        key={topic.id}
                        topic={topic}
                        index={index}
                        onStart={() => handleStartTopic(category.id, topic.id)}
                        getLevelColor={getLevelColor}
                      />
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}

interface TopicRowProps {
  topic: GrammarTopic;
  index: number;
  onStart: () => void;
  getLevelColor: (level: string) => string;
}

function TopicRow({ topic, index, onStart, getLevelColor }: TopicRowProps) {
  const isLocked = !topic.completed && index > 0;
  
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b last:border-b-0 transition-colors",
        isLocked ? "opacity-60" : "hover:bg-secondary/30"
      )}
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
            {topic.completed && (
              <span className="text-xs text-success">Completado</span>
            )}
          </div>
        </div>
      </div>

      <Button
        variant={topic.completed ? "outline" : "default"}
        size="sm"
        disabled={isLocked}
        onClick={onStart}
      >
        {topic.completed ? (
          "Repasar"
        ) : (
          <>
            <Play className="w-4 h-4 mr-1" />
            Empezar
          </>
        )}
      </Button>
    </div>
  );
}
