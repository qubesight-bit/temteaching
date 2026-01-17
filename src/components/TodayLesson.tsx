import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, PlayCircle, Star } from "lucide-react";

export function TodayLesson() {
  return (
    <Card variant="interactive" className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left - Lesson Info */}
          <div className="flex-1 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full level-a2 text-white text-xs font-semibold">
                A2
              </span>
              <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                Gramática
              </span>
            </div>
            
            <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
              Present Perfect vs Past Simple
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Aprende cuándo usar cada tiempo verbal con ejemplos prácticos y ejercicios contextualizados.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>15 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span>+50 XP</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="group/btn">
              <PlayCircle className="w-5 h-5" />
              Comenzar lección
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
          
          {/* Right - Visual */}
          <div className="md:w-72 h-48 md:h-auto relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 animate-float">
                  <span className="text-3xl">📚</span>
                </div>
                <p className="text-sm font-medium text-white/80">Lección recomendada</p>
                <p className="text-xs text-white/60 mt-1">Basada en tu progreso</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
