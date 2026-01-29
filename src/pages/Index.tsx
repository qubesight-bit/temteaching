import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { InteractiveLevelSelector } from "@/components/InteractiveLevelSelector";
import { LevelTopicsPreview } from "@/components/LevelTopicsPreview";
import { QuickStats } from "@/components/QuickStats";
import { TodayLesson } from "@/components/TodayLesson";
import { ModuleCard } from "@/components/ModuleCard";
import { DailyGoalWidget } from "@/components/DailyGoalWidget";
import { AITutorPreview } from "@/components/AITutorPreview";
import { PlacementExamModal } from "@/components/PlacementExamModal";
import { BookOpen, MessageSquare, PenTool, GraduationCap, Lightbulb, Map, Library, Music, Sparkles } from "lucide-react";
import { useAppState } from "@/hooks/useAppState";
import { useAuth } from "@/contexts/AuthContext";
import { usePlacementExam } from "@/hooks/usePlacementExam";
import { supabase } from "@/integrations/supabase/client";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

const modules = [
  {
    title: "CEFR Curriculum",
    description: "Your complete learning path with all skills by level",
    icon: Map,
    progress: 0,
    color: "bg-primary",
    path: "/curriculum",
  },
  {
    title: "Article Library",
    description: "Complete textbook-style explanations for each grammar topic",
    icon: Library,
    progress: 0,
    color: "bg-level-b2",
    path: "/articles",
  },
  {
    title: "Grammar",
    description: "19 complete categories from verb tenses to complex structures",
    icon: BookOpen,
    progress: 0,
    color: "bg-level-b1",
    path: "/grammar",
  },
  {
    title: "Vocabulary",
    description: "Expand your lexicon with flashcards and contextual exercises",
    icon: Lightbulb,
    progress: 0,
    color: "bg-level-a2",
    path: "/vocabulary",
  },
  {
    title: "Practice",
    description: "Interactive exercises adapted to your current level",
    icon: PenTool,
    progress: 0,
    color: "bg-level-a1",
    path: "/practice",
  },
  {
    title: "Conversation",
    description: "Practice with AI and improve your fluency with instant feedback",
    icon: MessageSquare,
    progress: 0,
    color: "bg-accent",
    path: "/conversation",
  },
  {
    title: "Tests",
    description: "Evaluate your progress with certification-style exams",
    icon: GraduationCap,
    progress: 0,
    color: "bg-level-c1",
    path: "/tests",
  },
  {
    title: "Educational Karaoke",
    description: "Learn English by singing your favorite songs with synchronized lyrics",
    icon: Music,
    progress: 0,
    color: "bg-accent",
    path: "/karaoke",
  },
  {
    title: "Custom Exams",
    description: "Generate specific exams by choosing the topic and level you want to practice",
    icon: Sparkles,
    progress: 0,
    color: "bg-primary",
    path: "/custom-exam",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { userProgress } = useAppState();
  const { user } = useAuth();
  const { needsPlacementExam, loading: placementLoading, markPlacementComplete } = usePlacementExam();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(
    (userProgress.currentLevel as CEFRLevel) || "A1"
  );

  const handlePlacementComplete = (level: string) => {
    markPlacementComplete();
    setSelectedLevel(level as CEFRLevel);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('display_name')
          .eq('user_id', user.id)
          .single();
        
        if (data?.display_name) {
          setDisplayName(data.display_name);
        }
      }
    };
    fetchProfile();
  }, [user]);

  // Get greeting name: profile name > email username > "learner"
  const getGreetingName = () => {
    if (displayName) return displayName;
    if (user?.email) return user.email.split('@')[0];
    return "learner";
  };

  return (
    <AppLayout>
      {/* Placement Exam Modal - Mandatory for new users */}
      <PlacementExamModal 
        open={needsPlacementExam && !placementLoading && !!user} 
        onComplete={handlePlacementComplete} 
      />
      
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Hello, {getGreetingName()}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Continue your path to English fluency
          </p>
        </div>

        {/* Interactive Level Selector */}
        <div className="mb-6 p-6 rounded-2xl bg-card border shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg">Explore CEFR Levels</h2>
          </div>
          <InteractiveLevelSelector 
            selectedLevel={selectedLevel}
            onLevelSelect={setSelectedLevel}
            currentUserLevel={userProgress.currentLevel as CEFRLevel}
          />
        </div>

        {/* Level Topics Preview */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <LevelTopicsPreview level={selectedLevel} />
        </div>

        {/* Quick Stats */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <QuickStats />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Lesson */}
            <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Today's Lesson</h2>
              <TodayLesson />
            </section>

            {/* AI Tutor */}
            <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Practice with AI</h2>
              <AITutorPreview />
            </section>

            {/* Modules Grid */}
            <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Learning Modules</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module.title}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                    progress={module.progress}
                    color={module.color}
                    onClick={() => navigate(module.path)}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.35s' }}>
            {/* Daily Goal Widget */}
            <section>
              <h2 className="font-display font-semibold text-lg mb-4">Your Activity</h2>
            <DailyGoalWidget
                currentStreak={0}
                bestStreak={0}
                todayMinutes={0}
                goalMinutes={20}
                weeklyProgress={[0, 0, 0, 0, 0, 0, 0]}
              />
            </section>

            {/* Quick Tips */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Tip of the Day
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <span className="font-medium text-foreground">Present Perfect</span> connects the past with the present. Use it when the action has relevance now: 
                <span className="italic text-primary"> "I have lost my keys"</span> (I still can't find them).
              </p>
            </section>

            {/* Recent Errors */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Areas to Improve
              </h3>
              <div className="space-y-2">
                {[
                  { topic: "Phrasal verbs", count: 5 },
                  { topic: "Articles (a/an/the)", count: 3 },
                  { topic: "Time prepositions", count: 2 },
                ].map((item) => (
                  <div key={item.topic} className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                    <span className="text-sm font-medium">{item.topic}</span>
                    <span className="text-xs text-muted-foreground">{item.count} errors</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
