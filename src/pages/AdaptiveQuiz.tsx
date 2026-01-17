import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Brain, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { getAdaptiveQuestions, QuizQuestion } from "@/data/quizData";
import { useGamification } from "@/hooks/useGamification";
import { useAdaptiveLearning } from "@/hooks/useAdaptiveLearning";

export default function AdaptiveQuiz() {
  const navigate = useNavigate();
  const { addXP, completedQuiz } = useGamification();
  const { profile, recordPerformance } = useAdaptiveLearning();
  
  const [selectedLevel, setSelectedLevel] = useState<"A1" | "A2" | "B1" | "B2" | "C1" | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [sessionPerformance, setSessionPerformance] = useState(75);

  const startQuiz = (level: "A1" | "A2" | "B1" | "B2" | "C1") => {
    setSelectedLevel(level);
    const adaptiveQuestions = getAdaptiveQuestions(level, sessionPerformance, 10);
    setQuestions(adaptiveQuestions);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      setSessionPerformance(prev => Math.min(100, prev + 5));
      addXP(10, 'quiz');
      toast({ title: "¡Correcto! 🎉", description: "+10 XP" });
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setSessionPerformance(prev => Math.max(0, prev - 10));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const accuracy = Math.round((score.correct / questions.length) * 100);
      completedQuiz(accuracy);
      recordPerformance(currentQuestion.category, accuracy, 5, questions.length);
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsComplete(false);
    setSelectedLevel(null);
  };

  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <Button variant="ghost" size="sm" className="mb-6" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />Volver
          </Button>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl">Quizzes Adaptativos</h1>
              <p className="text-muted-foreground">+2000 ejercicios con dificultad que se adapta a ti</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">IA Adaptativa</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                La dificultad se ajusta automáticamente según tu rendimiento. Si contestas bien, las preguntas serán más difíciles. Si te equivocas, te ayudaremos a reforzar.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-secondary/50">
                <p className="text-xs text-muted-foreground">Nivel de dificultad actual: <span className="font-bold text-primary">{profile.adaptiveDifficulty}/5</span></p>
              </div>
            </CardContent>
          </Card>

          <h2 className="font-display font-semibold text-lg mb-4">Selecciona tu nivel</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(["A1", "A2", "B1", "B2", "C1"] as const).map((level) => (
              <Card key={level} className="cursor-pointer hover:shadow-lg transition-all" onClick={() => startQuiz(level)}>
                <CardContent className="p-6 text-center">
                  <div className={cn("w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl", `bg-level-${level.toLowerCase()}`)}>
                    {level}
                  </div>
                  <h3 className="font-semibold mb-2">{level === "A1" ? "Principiante" : level === "A2" ? "Elemental" : level === "B1" ? "Intermedio" : level === "B2" ? "Intermedio Alto" : "Avanzado"}</h3>
                  <Button variant="outline" size="sm" className="w-full">Comenzar Quiz</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score.correct / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">¡Quiz completado!</h2>
                <div className="flex items-center justify-center gap-8 my-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-success">{score.correct}</p>
                    <p className="text-sm text-muted-foreground">Correctas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-destructive">{score.incorrect}</p>
                    <p className="text-sm text-muted-foreground">Incorrectas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground">Precisión</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => navigate("/")}>Volver al inicio</Button>
                  <Button variant="hero" onClick={handleRestart}><RotateCcw className="w-4 h-4 mr-2" />Otro quiz</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" size="sm" onClick={handleRestart}><ArrowLeft className="w-4 h-4 mr-2" />Salir</Button>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
              <span className="text-sm text-muted-foreground">{score.correct} correctas</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <Card>
            <CardContent className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{currentQuestion?.category}</span>
              <h2 className="font-display font-bold text-2xl mb-8">{currentQuestion?.question}</h2>
              <div className="space-y-3">
                {currentQuestion?.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  return (
                    <button key={option} className={cn("w-full p-4 rounded-xl border-2 text-left font-medium transition-all", !showExplanation && "hover:border-primary hover:bg-primary/5", showExplanation && isCorrectOption && "border-success bg-success/10 text-success", showExplanation && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive")} onClick={() => handleSelectAnswer(option)} disabled={showExplanation}>
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showExplanation && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success" />}
                        {showExplanation && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {showExplanation && (
                <>
                  <div className={cn("mt-6 p-4 rounded-xl", isCorrect ? "bg-success/10 border border-success/20" : "bg-warning/10 border border-warning/20")}>
                    <p className="font-medium mb-1">{isCorrect ? "¡Correcto!" : "Respuesta correcta: " + currentQuestion.correctAnswer}</p>
                    <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                  </div>
                  <Button variant="hero" size="lg" className="w-full mt-6" onClick={handleNextQuestion}>
                    {currentQuestionIndex < questions.length - 1 ? <>Siguiente<ArrowRight className="w-4 h-4 ml-2" /></> : "Ver resultados"}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
