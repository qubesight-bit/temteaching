import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { curriculumData, Skill, CEFRLevel } from "@/data/curriculumData";
import { getExercisesBySkillId, Exercise } from "@/data/exercisesData";
import { getAdvancedExercisesBySkillId } from "@/data/exercisesDataAdvanced";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, Volume2, 
  BookOpen, Dumbbell, Trophy, Target, Lightbulb, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

type LessonStep = "overview" | "exercises" | "complete";

// Get exercises from the database or generate fallback
const getExercisesForSkill = (skill: Skill, level: CEFRLevel, categoryType: string): Exercise[] => {
  // Try to get exercises from database
  let exercises = getExercisesBySkillId(skill.id, categoryType);
  
  // If no exercises in main data, try advanced data
  if (exercises.length === 0) {
    exercises = getAdvancedExercisesBySkillId(skill.id, level);
  }
  
  // If still no exercises, generate basic ones
  if (exercises.length === 0) {
    exercises = skill.subSkills.map((subSkill, index) => ({
      id: `gen-${index}`,
      type: 'multiple-choice' as const,
      question: `Practice: ${subSkill.title}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option A",
      explanation: `This is related to ${skill.title} - ${subSkill.title}`,
      difficulty: 1 as const,
      tags: [categoryType]
    }));
  }
  
  return exercises;
};

const generateGrammarExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  const grammarExercises: Record<string, GeneratedExercise[]> = {
    "Verbo To Be": [
      {
        id: `gram-${index}`,
        type: 'multiple-choice',
        question: "She ___ a teacher.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "is",
        explanation: "Usamos 'is' con tercera persona singular (she, he, it)."
      },
      {
        id: `gram-${index}`,
        type: 'multiple-choice',
        question: "They ___ from Spain.",
        options: ["am", "is", "are", "be"],
        correctAnswer: "are",
        explanation: "Usamos 'are' con 'they' (plural)."
      }
    ],
    "Present Simple": [
      {
        id: `gram-${index}`,
        type: 'multiple-choice',
        question: "He ___ to work every day.",
        options: ["go", "goes", "going", "went"],
        correctAnswer: "goes",
        explanation: "En tercera persona singular añadimos -s/-es al verbo."
      }
    ],
    "default": [
      {
        id: `gram-${index}`,
        type: 'true-false',
        question: `¿Es correcto decir que "${skillTitle}" se utiliza en el nivel ${level}?`,
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        explanation: `Sí, "${skillTitle}" es un tema importante del nivel ${level}.`
      }
    ]
  };

  const exerciseSet = grammarExercises[skillTitle] || grammarExercises["default"];
  return exerciseSet[index % exerciseSet.length];
};

const generateVocabularyExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  const vocabExercises: Record<string, GeneratedExercise[]> = {
    "Números y colores": [
      {
        id: `vocab-${index}`,
        type: 'multiple-choice',
        question: "¿Cómo se dice 'rojo' en inglés?",
        options: ["Blue", "Red", "Green", "Yellow"],
        correctAnswer: "Red",
        explanation: "'Red' significa rojo en inglés."
      },
      {
        id: `vocab-${index}`,
        type: 'multiple-choice',
        question: "What number comes after 'twelve'?",
        options: ["Eleven", "Thirteen", "Fourteen", "Ten"],
        correctAnswer: "Thirteen",
        explanation: "Después de 'twelve' (12) viene 'thirteen' (13)."
      }
    ],
    "Familia y personas": [
      {
        id: `vocab-${index}`,
        type: 'multiple-choice',
        question: "My mother's mother is my ___.",
        options: ["aunt", "grandmother", "sister", "cousin"],
        correctAnswer: "grandmother",
        explanation: "'Grandmother' es la madre de tu madre o padre."
      }
    ],
    "default": [
      {
        id: `vocab-${index}`,
        type: 'multiple-choice',
        question: `¿Qué categoría de vocabulario incluye "${subSkillTitle}"?`,
        options: [skillTitle, "Animales", "Deportes", "Tecnología"],
        correctAnswer: skillTitle,
        explanation: `"${subSkillTitle}" pertenece a la categoría de ${skillTitle}.`
      }
    ]
  };

  const exerciseSet = vocabExercises[skillTitle] || vocabExercises["default"];
  return exerciseSet[index % exerciseSet.length];
};

const generateSpeakingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `speak-${index}`,
    type: 'multiple-choice',
    question: `Para "${subSkillTitle}", ¿cuál es la expresión más apropiada?`,
    options: [
      "Could you please help me?",
      "Give me that!",
      "I want now!",
      "You must do this!"
    ],
    correctAnswer: "Could you please help me?",
    explanation: "Las expresiones corteses y formales son más apropiadas en contextos sociales."
  };
};

const generateListeningExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `listen-${index}`,
    type: 'true-false',
    question: `En comprensión auditiva de nivel ${level}, es importante poder identificar "${subSkillTitle}".`,
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: `La habilidad de identificar "${subSkillTitle}" es fundamental para la comprensión auditiva en el nivel ${level}.`
  };
};

const generateReadingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `read-${index}`,
    type: 'multiple-choice',
    question: `Al leer textos sobre "${subSkillTitle}", ¿qué estrategia es más útil?`,
    options: [
      "Leer palabra por palabra",
      "Buscar palabras clave y contexto",
      "Ignorar las palabras desconocidas",
      "Solo mirar las imágenes"
    ],
    correctAnswer: "Buscar palabras clave y contexto",
    explanation: "Identificar palabras clave y usar el contexto ayuda a comprender mejor el texto."
  };
};

const generateWritingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `write-${index}`,
    type: 'multiple-choice',
    question: `Para escribir sobre "${subSkillTitle}", ¿qué es esencial incluir?`,
    options: [
      "Solo palabras simples",
      "Estructura clara y vocabulario apropiado",
      "Muchas palabras complicadas",
      "Textos muy largos siempre"
    ],
    correctAnswer: "Estructura clara y vocabulario apropiado",
    explanation: "Una buena escritura combina estructura clara con vocabulario adecuado al nivel."
  };
};

const generateGenericExercise = (title: string, description: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `gen-${index}`,
    type: 'true-false',
    question: `El tema "${title}" es relevante para estudiantes de nivel ${level}.`,
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: `Sí, "${title}" forma parte del currículo del nivel ${level}.`
  };
};

const levelColors: Record<CEFRLevel, string> = {
  A1: "bg-level-a1",
  A2: "bg-level-a2",
  B1: "bg-level-b1",
  B2: "bg-level-b2",
  C1: "bg-level-c1",
  C2: "bg-level-c2",
};

const levelLabels: Record<CEFRLevel, string> = {
  A1: "Novato",
  A2: "Aprendiz",
  B1: "Aventurero",
  B2: "Guerrero",
  C1: "Maestro",
  C2: "Leyenda",
};

export default function SkillLesson() {
  const navigate = useNavigate();
  const { level, categoryId, skillId } = useParams();
  const [currentStep, setCurrentStep] = useState<LessonStep>("overview");
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [completedSubSkills, setCompletedSubSkills] = useState<Set<string>>(new Set());

  // Find the skill from curriculum data
  const { skill, category, levelData } = useMemo(() => {
    const lvlData = curriculumData.find(l => l.level === level);
    if (!lvlData) return { skill: null, category: null, levelData: null };
    
    const cat = lvlData.categories.find(c => c.id === categoryId);
    if (!cat) return { skill: null, category: null, levelData: lvlData };
    
    const sk = cat.skills.find(s => s.id === skillId);
    return { skill: sk, category: cat, levelData: lvlData };
  }, [level, categoryId, skillId]);

  // Generate exercises based on the skill
  const exercises = useMemo(() => {
    if (!skill || !categoryId) return [];
    return generateExercises(skill, level as CEFRLevel, categoryId);
  }, [skill, level, categoryId]);

  const currentExerciseData = exercises[currentExercise];
  const isCorrect = selectedAnswer === currentExerciseData?.correctAnswer;

  useEffect(() => {
    if (!skill) {
      navigate("/");
    }
  }, [skill, navigate]);

  if (!skill || !category || !levelData) {
    return null;
  }

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === currentExerciseData.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      toast({
        title: "¡Correcto! 🎉",
        description: "¡Excelente trabajo, aventurero!",
      });
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNextExercise = () => {
    // Mark subSkill as completed
    if (skill.subSkills[currentExercise]) {
      setCompletedSubSkills(prev => new Set([...prev, skill.subSkills[currentExercise].id]));
    }

    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCurrentStep("complete");
    }
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  if (currentStep === "complete") {
    const percentage = Math.round((score.correct / exercises.length) * 100);
    const xpEarned = 25 + (score.correct * 10);
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden">
              <div className={cn("p-6 text-white", levelColors[level as CEFRLevel])}>
                <div className="flex items-center justify-center gap-3">
                  <Trophy className="w-8 h-8" />
                  <h2 className="font-display font-bold text-2xl">¡Misión Completada!</h2>
                </div>
              </div>
              
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-success fill-success" />
                </div>
                
                <h3 className="font-display font-bold text-xl mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Has completado esta habilidad del nivel {level}
                </p>
                
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-success">{score.correct}</p>
                    <p className="text-sm text-muted-foreground">Correctas</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-destructive">{score.incorrect}</p>
                    <p className="text-sm text-muted-foreground">Incorrectas</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground">Precisión</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <p className="text-lg font-bold">+{xpEarned} XP ganados</p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => navigate("/")}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Button>
                  <Button variant="hero" onClick={() => navigate("/curriculum")}>
                    Continuar Aventura
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>

          {/* Skill Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg",
              levelColors[level as CEFRLevel]
            )}>
              {level}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-display font-bold text-2xl">{skill.title}</h1>
                <Badge variant="outline" className={cn(
                  "text-xs",
                  levelColors[level as CEFRLevel].replace('bg-', 'border-').replace('bg-', 'text-')
                )}>
                  {levelLabels[level as CEFRLevel]}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{category.title} • {skill.description}</p>
            </div>
          </div>

          {/* Step Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                currentStep === "overview" 
                  ? "bg-primary text-white" 
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
              onClick={() => setCurrentStep("overview")}
            >
              <BookOpen className="w-4 h-4" />
              Vista General
            </button>
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                currentStep === "exercises" 
                  ? "bg-primary text-white" 
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
              onClick={() => setCurrentStep("exercises")}
            >
              <Dumbbell className="w-4 h-4" />
              Práctica
            </button>
          </div>

          {/* Content */}
          {currentStep === "overview" && (
            <Card>
              <CardContent className="p-8">
                {/* Skill Overview */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Objetivos de Aprendizaje</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Al completar esta lección dominarás {skill.subSkills.length} sub-habilidades clave.
                  </p>
                </div>

                {/* SubSkills */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    <h3 className="font-display font-semibold text-lg">Contenido a Practicar</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.subSkills.map((subSkill, index) => (
                      <div
                        key={subSkill.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border transition-colors hover:bg-secondary"
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                          completedSubSkills.has(subSkill.id) 
                            ? "bg-success text-white" 
                            : "bg-muted text-muted-foreground"
                        )}>
                          {completedSubSkills.has(subSkill.id) ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <span className={cn(
                          "font-medium",
                          completedSubSkills.has(subSkill.id) && "text-success"
                        )}>
                          {subSkill.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Exercises Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setCurrentStep("exercises");
                    setCurrentExercise(0);
                    setScore({ correct: 0, incorrect: 0 });
                    setSelectedAnswer(null);
                    setShowExplanation(false);
                  }}
                >
                  <Dumbbell className="w-5 h-5 mr-2" />
                  Comenzar Práctica
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === "exercises" && currentExerciseData && (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Ejercicio {currentExercise + 1} de {exercises.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {score.correct} correctas • {score.incorrect} incorrectas
                  </span>
                </div>
                <Progress 
                  value={((currentExercise + 1) / exercises.length) * 100} 
                  className="h-2"
                />
              </div>

              <Card>
                <CardContent className="p-8">
                  {/* Current SubSkill Context */}
                  {skill.subSkills[currentExercise] && (
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {skill.subSkills[currentExercise]?.title || `Ejercicio ${currentExercise + 1}`}
                      </Badge>
                    </div>
                  )}

                  {/* Question */}
                  <h2 className="font-display font-bold text-xl mb-6">
                    {currentExerciseData.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentExerciseData.options.map((option) => {
                      const isSelected = selectedAnswer === option;
                      const isCorrectOption = option === currentExerciseData.correctAnswer;
                      
                      return (
                        <button
                          key={option}
                          className={cn(
                            "w-full p-4 rounded-xl border-2 text-left font-medium transition-all",
                            !showExplanation && "hover:border-primary hover:bg-primary/5",
                            !showExplanation && isSelected && "border-primary bg-primary/10",
                            showExplanation && isCorrectOption && "border-success bg-success/10 text-success",
                            showExplanation && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive"
                          )}
                          onClick={() => handleSelectAnswer(option)}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {showExplanation && isCorrectOption && (
                              <CheckCircle2 className="w-5 h-5 text-success" />
                            )}
                            {showExplanation && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 text-destructive" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showExplanation && (
                    <div className={cn(
                      "mt-6 p-4 rounded-xl",
                      isCorrect ? "bg-success/10 border border-success/20" : "bg-warning/10 border border-warning/20"
                    )}>
                      <p className="font-medium mb-1">
                        {isCorrect ? "¡Correcto! 🎉" : `Respuesta correcta: ${currentExerciseData.correctAnswer}`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {currentExerciseData.explanation}
                      </p>
                    </div>
                  )}

                  {/* Next Button */}
                  {showExplanation && (
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full mt-6"
                      onClick={handleNextExercise}
                    >
                      {currentExercise < exercises.length - 1 ? (
                        <>
                          Siguiente ejercicio
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Ver resultados
                          <Trophy className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
