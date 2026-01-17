import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, Trophy, Target, ChevronRight, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Test {
  id: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  questions: number;
  duration: number;
  completed: boolean;
  score?: number;
}

interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

const availableTests: Test[] = [
  { id: "a1-grammar", title: "Test de Gramática A1", description: "Presente simple, pronombres, artículos", level: "A1", questions: 15, duration: 10, completed: false },
  { id: "a1-vocab", title: "Test de Vocabulario A1", description: "Familia, comida, colores, números", level: "A1", questions: 20, duration: 12, completed: false },
  { id: "a2-grammar", title: "Test de Gramática A2", description: "Pasado simple, futuro, comparativos", level: "A2", questions: 20, duration: 15, completed: false },
  { id: "a2-vocab", title: "Test de Vocabulario A2", description: "Viajes, trabajo, salud", level: "A2", questions: 25, duration: 15, completed: false },
  { id: "a2-placement", title: "Test de Nivel A2", description: "Evaluación completa del nivel A2", level: "A2", questions: 40, duration: 30, completed: false },
  { id: "b1-grammar", title: "Test de Gramática B1", description: "Present perfect, condicionales, pasiva", level: "B1", questions: 25, duration: 20, completed: false },
  { id: "b1-vocab", title: "Test de Vocabulario B1", description: "Emociones, tecnología, negocios", level: "B1", questions: 30, duration: 20, completed: false },
  { id: "b2-grammar", title: "Test de Gramática B2", description: "Condicionales avanzados, reported speech", level: "B2", questions: 30, duration: 25, completed: false },
];

const testQuestions: TestQuestion[] = [
  { id: "1", question: "She ___ to the gym three times a week.", options: ["go", "goes", "going", "gone"], correctAnswer: "goes" },
  { id: "2", question: "I ___ never ___ to Japan.", options: ["have / been", "has / been", "have / be", "was / being"], correctAnswer: "have / been" },
  { id: "3", question: "If I ___ you, I would apologize.", options: ["am", "was", "were", "be"], correctAnswer: "were" },
  { id: "4", question: "The meeting ___ cancelled yesterday.", options: ["is", "was", "were", "has been"], correctAnswer: "was" },
  { id: "5", question: "She asked me ___ I was from.", options: ["where", "what", "which", "who"], correctAnswer: "where" },
  { id: "6", question: "___ you mind opening the window?", options: ["Do", "Would", "Could", "Should"], correctAnswer: "Would" },
  { id: "7", question: "I'm looking forward ___ you again.", options: ["to see", "seeing", "to seeing", "see"], correctAnswer: "to seeing" },
  { id: "8", question: "This is the restaurant ___ we had dinner last week.", options: ["where", "which", "that", "what"], correctAnswer: "where" },
  { id: "9", question: "By the time he arrived, the movie ___.", options: ["started", "has started", "had started", "was starting"], correctAnswer: "had started" },
  { id: "10", question: "I wish I ___ more time to study.", options: ["have", "had", "has", "having"], correctAnswer: "had" },
];

export default function Tests() {
  const navigate = useNavigate();
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

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

  const handleStartTest = (test: Test) => {
    setSelectedTest(test);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setTimeRemaining(test.duration * 60);
  };

  const handleSelectAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [testQuestions[currentQuestion].id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    testQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / testQuestions.length) * 100);
  };

  const handleBack = () => {
    if (selectedTest) {
      setSelectedTest(null);
      setShowResults(false);
    } else {
      navigate("/");
    }
  };

  if (selectedTest && showResults) {
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
                  score >= 70 ? "bg-success/10" : "bg-warning/10"
                )}>
                  <Trophy className={cn(
                    "w-12 h-12",
                    score >= 70 ? "text-success" : "text-warning"
                  )} />
                </div>
                
                <h2 className="font-display font-bold text-2xl mb-2">
                  {score >= 70 ? "¡Excelente trabajo!" : "Sigue practicando"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Has completado el {selectedTest.title}
                </p>
                
                <div className="text-6xl font-display font-bold text-primary mb-4">
                  {score}%
                </div>
                
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-success">
                      {Object.values(answers).filter((a, i) => a === testQuestions[i]?.correctAnswer).length}
                    </p>
                    <p className="text-sm text-muted-foreground">Correctas</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-xl font-semibold text-destructive">
                      {testQuestions.length - Object.values(answers).filter((a, i) => a === testQuestions[i]?.correctAnswer).length}
                    </p>
                    <p className="text-sm text-muted-foreground">Incorrectas</p>
                  </div>
                </div>

                {/* Review answers */}
                <div className="text-left mb-8 space-y-3">
                  <h3 className="font-semibold">Revisión de respuestas:</h3>
                  {testQuestions.slice(0, 5).map((q, i) => {
                    const isCorrect = answers[q.id] === q.correctAnswer;
                    return (
                      <div key={q.id} className={cn(
                        "p-3 rounded-lg border",
                        isCorrect ? "bg-success/5 border-success/20" : "bg-destructive/5 border-destructive/20"
                      )}>
                        <p className="text-sm font-medium">{q.question}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-destructive" />
                          )}
                          <span className="text-sm">
                            Tu respuesta: <span className={isCorrect ? "text-success" : "text-destructive"}>{answers[q.id]}</span>
                            {!isCorrect && <span className="text-muted-foreground"> · Correcta: {q.correctAnswer}</span>}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={handleBack}>
                    Volver a tests
                  </Button>
                  <Button variant="hero" onClick={() => handleStartTest(selectedTest)}>
                    Repetir test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (selectedTest) {
    const question = testQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Salir del test
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{selectedTest.duration} min</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{selectedTest.title}</span>
                <span className="text-sm text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {testQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <Card>
              <CardContent className="p-8">
                <span className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4",
                  getLevelColor(selectedTest.level)
                )}>
                  {selectedTest.level}
                </span>
                
                <h2 className="font-display font-bold text-xl mb-6">
                  {question.question}
                </h2>
                
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left font-medium transition-all hover:border-primary hover:bg-primary/5",
                        answers[question.id] === option && "border-primary bg-primary/10"
                      )}
                      onClick={() => handleSelectAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  {currentQuestion < testQuestions.length - 1 ? (
                    <>
                      Siguiente
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "Finalizar test"
                  )}
                </Button>
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
            <div className="w-16 h-16 rounded-2xl bg-level-c1 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Tests y Evaluaciones
              </h1>
              <p className="text-muted-foreground">
                Evalúa tu progreso con exámenes tipo certificación
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Tests completados</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-success">0%</p>
                <p className="text-sm text-muted-foreground">Promedio</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Tests pendientes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tests List */}
        <div className="space-y-4">
          {availableTests.map((test) => (
            <Card 
              key={test.id} 
              className={cn(
                "hover:shadow-lg transition-all duration-300",
                test.completed && "opacity-80"
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      test.completed ? "bg-success/10" : getLevelColor(test.level)
                    )}>
                      {test.completed ? (
                        <Trophy className="w-6 h-6 text-success" />
                      ) : (
                        <span className="text-white font-bold">{test.level}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">
                        {test.title}
                        {test.completed && test.score && (
                          <span className="ml-2 text-success text-sm font-normal">
                            {test.score}%
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{test.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{test.questions} preguntas</span>
                        <span>·</span>
                        <span>{test.duration} min</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    variant={test.completed ? "outline" : "default"}
                    onClick={() => handleStartTest(test)}
                  >
                    {test.completed ? "Repetir" : "Comenzar"}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
