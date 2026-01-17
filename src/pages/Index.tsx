import { Header } from "@/components/Header";
import { LevelProgress } from "@/components/LevelProgress";
import { QuickStats } from "@/components/QuickStats";
import { TodayLesson } from "@/components/TodayLesson";
import { ModuleCard } from "@/components/ModuleCard";
import { DailyGoalWidget } from "@/components/DailyGoalWidget";
import { AITutorPreview } from "@/components/AITutorPreview";
import { BookOpen, MessageSquare, PenTool, GraduationCap, Lightbulb } from "lucide-react";

const modules = [
  {
    title: "Gramática",
    description: "19 categorías completas desde tiempos verbales hasta estructuras complejas",
    icon: BookOpen,
    progress: 45,
    color: "bg-level-b1",
  },
  {
    title: "Vocabulario",
    description: "Expande tu léxico con flashcards y ejercicios contextuales",
    icon: Lightbulb,
    progress: 62,
    color: "bg-level-a2",
  },
  {
    title: "Práctica",
    description: "Ejercicios interactivos adaptados a tu nivel actual",
    icon: PenTool,
    progress: 38,
    color: "bg-primary",
  },
  {
    title: "Conversación",
    description: "Practica con IA y mejora tu fluidez con feedback instantáneo",
    icon: MessageSquare,
    progress: 25,
    color: "bg-accent",
  },
  {
    title: "Tests",
    description: "Evalúa tu progreso con exámenes tipo certificación",
    icon: GraduationCap,
    progress: 15,
    color: "bg-level-c1",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            ¡Hola, estudiante! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Continúa tu camino hacia la fluidez en inglés
          </p>
        </div>

        {/* Level Progress */}
        <div className="mb-8 p-6 rounded-2xl bg-card border shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg">Tu progreso MCER</h2>
            <span className="text-sm text-muted-foreground">Nivel actual: <span className="font-semibold text-level-a2">A2</span></span>
          </div>
          <LevelProgress currentLevel="A2" progress={45} />
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
              <h2 className="font-display font-semibold text-lg mb-4">Lección de hoy</h2>
              <TodayLesson />
            </section>

            {/* AI Tutor */}
            <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Practica con IA</h2>
              <AITutorPreview />
            </section>

            {/* Modules Grid */}
            <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Módulos de aprendizaje</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module.title}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                    progress={module.progress}
                    color={module.color}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.35s' }}>
            {/* Daily Goal Widget */}
            <section>
              <h2 className="font-display font-semibold text-lg mb-4">Tu actividad</h2>
              <DailyGoalWidget
                currentStreak={7}
                bestStreak={14}
                todayMinutes={18}
                goalMinutes={20}
                weeklyProgress={[100, 100, 75, 100, 90, 50, 0]}
              />
            </section>

            {/* Quick Tips */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Consejo del día
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El <span className="font-medium text-foreground">Present Perfect</span> conecta el pasado con el presente. Úsalo cuando la acción tiene relevancia ahora: 
                <span className="italic text-primary"> "I have lost my keys"</span> (todavía no las encuentro).
              </p>
            </section>

            {/* Recent Errors */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Áreas a reforzar
              </h3>
              <div className="space-y-2">
                {[
                  { topic: "Phrasal verbs", count: 5 },
                  { topic: "Artículos (a/an/the)", count: 3 },
                  { topic: "Preposiciones de tiempo", count: 2 },
                ].map((item) => (
                  <div key={item.topic} className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                    <span className="text-sm font-medium">{item.topic}</span>
                    <span className="text-xs text-muted-foreground">{item.count} errores</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
