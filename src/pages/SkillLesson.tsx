import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { curriculumData, Skill, CEFRLevel } from "@/data/curriculumData";
import { getExercisesBySkillId, Exercise } from "@/data/exercisesData";
import { getAdvancedExercisesBySkillId } from "@/data/exercisesDataAdvanced";
import { getImageExercisesForSkill } from "@/data/imageVocabularyData";
import { getArticleForExercise } from "@/data/articlesData";
import { getCurriculumArticleById, searchCurriculumArticles } from "@/data/curriculumArticles";
import { 
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, Volume2, 
  BookOpen, Dumbbell, Trophy, Target, Lightbulb, Star, Image, FileText, ExternalLink
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
  
  // For vocabulary, also add image exercises
  if (categoryType.includes('vocab')) {
    const imageExercises = getImageExercisesForSkill(skill.id, level);
    exercises = [...exercises, ...imageExercises];
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

// Type alias for generated exercises (same as Exercise)
type GeneratedExercise = Exercise;

const generateGrammarExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `gram-${index}`,
    type: 'multiple-choice',
    question: `Practice "${subSkillTitle}": She ___ a teacher.`,
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: `We use 'is' with third person singular (she, he, it) - related to ${skillTitle}.`,
    difficulty: 1,
    tags: ["grammar", level.toLowerCase()]
  };
};

const generateVocabularyExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `vocab-${index}`,
    type: 'multiple-choice',
    question: `Vocabulary practice for "${subSkillTitle}":`,
    options: [skillTitle, "Animals", "Sports", "Technology"],
    correctAnswer: skillTitle,
    explanation: `"${subSkillTitle}" belongs to the ${skillTitle} category.`,
    difficulty: 1,
    tags: ["vocabulary", level.toLowerCase()]
  };
};

const generateSpeakingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `speak-${index}`,
    type: 'multiple-choice',
    question: `For "${subSkillTitle}", which expression is most appropriate?`,
    options: ["Could you please help me?", "Give me that!", "I want now!", "You must do this!"],
    correctAnswer: "Could you please help me?",
    explanation: "Polite and formal expressions are more appropriate in social contexts.",
    difficulty: 1,
    tags: ["speaking", level.toLowerCase()]
  };
};

const generateListeningExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `listen-${index}`,
    type: 'true-false',
    question: `In ${level} listening comprehension, it's important to identify "${subSkillTitle}".`,
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: `Identifying "${subSkillTitle}" is fundamental for listening at ${level} level.`,
    difficulty: 1,
    tags: ["listening", level.toLowerCase()]
  };
};

const generateReadingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `read-${index}`,
    type: 'multiple-choice',
    question: `When reading texts about "${subSkillTitle}", which strategy is most useful?`,
    options: ["Read word by word", "Look for keywords and context", "Ignore unknown words", "Only look at images"],
    correctAnswer: "Look for keywords and context",
    explanation: "Identifying keywords and using context helps better understand the text.",
    difficulty: 1,
    tags: ["reading", level.toLowerCase()]
  };
};

const generateWritingExercise = (subSkillTitle: string, skillTitle: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `write-${index}`,
    type: 'multiple-choice',
    question: `To write about "${subSkillTitle}", what is essential to include?`,
    options: ["Only simple words", "Clear structure and appropriate vocabulary", "Many complicated words", "Always very long texts"],
    correctAnswer: "Clear structure and appropriate vocabulary",
    explanation: "Good writing combines clear structure with vocabulary appropriate to the level.",
    difficulty: 1,
    tags: ["writing", level.toLowerCase()]
  };
};

const generateGenericExercise = (title: string, description: string, level: CEFRLevel, index: number): GeneratedExercise => {
  return {
    id: `gen-${index}`,
    type: 'true-false',
    question: `The topic "${title}" is relevant for ${level} level students.`,
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: `Yes, "${title}" is part of the ${level} curriculum.`,
    difficulty: 1,
    tags: ["general", level.toLowerCase()]
  };
};

// Helper function to get PRE-exercise teaching explanation (without giving the answer)
const getPreExerciseTeaching = (exercise: Exercise): string => {
  const tags = exercise.tags || [];
  
  // Image-match exercises
  if (exercise.type === 'image-match') {
    if (tags.includes('word-to-image')) {
      return "🖼️ EJERCICIO VISUAL: Mira la palabra en inglés y selecciona la imagen que la representa.\n\n👉 Piensa en el significado de la palabra\n👉 Visualiza el objeto en tu mente\n👉 Selecciona la imagen correcta";
    }
    return "🖼️ EJERCICIO VISUAL: Observa la imagen con atención.\n\n👉 ¿Qué objeto, animal o concepto representa?\n👉 Piensa en cómo se dice en inglés\n👉 Selecciona la palabra correcta entre las opciones";
  }
  
  // TO BE verb explanations
  if (tags.includes('to-be')) {
    if (tags.includes('affirmative')) {
      return "🔤 REGLA: El verbo TO BE cambia según el sujeto:\n• I → am (Yo soy/estoy)\n• He/She/It → is (Él/Ella es/está)\n• You/We/They → are (Tú/Nosotros/Ellos son/están)\n\n👉 Identifica el SUJETO de la oración y elige la forma correcta.";
    }
    if (tags.includes('negative')) {
      return "🔤 REGLA: Negativo con TO BE:\n• I am not (I'm not)\n• He/She/It is not (isn't)\n• You/We/They are not (aren't)\n\n👉 Primero identifica el sujeto, luego añade 'not' después del verbo.";
    }
    if (tags.includes('questions')) {
      return "🔤 REGLA: Preguntas con TO BE - invierte el orden:\n• Am I...? / Is he/she...? / Are you/we/they...?\n\n👉 En preguntas, el verbo TO BE va ANTES del sujeto.";
    }
    return "🔤 REGLA: TO BE = ser/estar en inglés\n• I → am\n• He/She/It → is\n• You/We/They → are\n\n👉 Mira quién hace la acción (el sujeto) para elegir la forma correcta.";
  }
  
  // Present Simple explanations
  if (tags.includes('present-simple')) {
    if (tags.includes('third-person')) {
      return "🔤 REGLA: Present Simple con HE/SHE/IT:\n• Añade -S al verbo: work→works, play→plays\n• Verbos en -ch, -sh, -ss, -x, -o: añade -ES: watch→watches\n• Verbos en consonante+Y: cambia Y por -IES: study→studies\n\n👉 ¿El sujeto es he/she/it? Entonces el verbo necesita -S/-ES.";
    }
    if (tags.includes('negative')) {
      return "🔤 REGLA: Negativo en Present Simple:\n• I/You/We/They + don't + verbo base\n• He/She/It + doesn't + verbo base\n\n⚠️ ¡El verbo vuelve a su forma BASE! (She doesn't LIKE, no 'likes')";
    }
    if (tags.includes('questions')) {
      return "🔤 REGLA: Preguntas en Present Simple:\n• Do + I/you/we/they + verbo base?\n• Does + he/she/it + verbo base?\n\n👉 Después de DO/DOES el verbo siempre va en forma base (sin -s).";
    }
    return "🔤 REGLA: Present Simple = acciones habituales/rutinas\n• I/You/We/They + verbo base\n• He/She/It + verbo + S/ES\n\n👉 Identifica si el sujeto es singular (he/she/it) o plural.";
  }
  
  // Present Continuous
  if (tags.includes('present-continuous')) {
    return "🔤 REGLA: Present Continuous = acción ahora mismo\nEstructura: AM/IS/ARE + verbo-ING\n• I am working\n• She is reading\n• They are playing\n\n👉 Busca palabras clave: now, right now, at the moment, look!";
  }
  
  // Vocabulary - by specific category
  if (tags.includes('food')) {
    return "🍎 VOCABULARIO - COMIDA:\n• Frutas: apple, banana, orange...\n• Bebidas: water, milk, coffee...\n• Comidas: bread, cheese, pizza...\n\n👉 Observa la imagen y piensa en qué categoría de comida pertenece.";
  }
  if (tags.includes('animals')) {
    return "🐾 VOCABULARIO - ANIMALES:\n• Mascotas: dog, cat, bird...\n• Granja: cow, pig, horse...\n• Salvajes: lion, elephant, bear...\n\n👉 ¿Es un animal doméstico, de granja o salvaje?";
  }
  if (tags.includes('family')) {
    return "👨‍👩‍👧 VOCABULARIO - FAMILIA:\n• Padres: mother, father\n• Hermanos: sister, brother\n• Abuelos: grandmother, grandfather\n\n👉 Piensa en la relación familiar que representa.";
  }
  if (tags.includes('clothes')) {
    return "👕 VOCABULARIO - ROPA:\n• Arriba: shirt, dress, hat\n• Abajo: pants, shoes\n• Accesorios: glasses, hat\n\n👉 ¿Qué parte del cuerpo cubre esta prenda?";
  }
  if (tags.includes('body')) {
    return "🫀 VOCABULARIO - CUERPO:\n• Cabeza: head, eye, ear, nose, mouth\n• Extremidades: hand, foot\n• Órganos: heart\n\n👉 Identifica qué parte del cuerpo representa la imagen.";
  }
  if (tags.includes('colors')) {
    return "🎨 VOCABULARIO - COLORES:\n• Primarios: red, blue, yellow\n• Secundarios: green, orange, purple\n• Neutros: black, white, brown\n\n👉 Observa el color y recuerda su nombre en inglés.";
  }
  if (tags.includes('numbers')) {
    return "🔢 VOCABULARIO - NÚMEROS:\n• 1-5: one, two, three, four, five\n• 6-10: six, seven, eight, nine, ten\n\n👉 Cuenta mentalmente y selecciona el número correcto.";
  }
  if (tags.includes('weather')) {
    return "🌤️ VOCABULARIO - CLIMA:\n• Soleado: sun, hot\n• Lluvioso: rain, cloud\n• Frío: snow, wind\n\n👉 ¿Qué condición climática representa?";
  }
  if (tags.includes('professions')) {
    return "👨‍⚕️ VOCABULARIO - PROFESIONES:\n• Salud: doctor, nurse\n• Educación: teacher\n• Servicios: police, firefighter, chef\n\n👉 ¿Qué trabajo realiza esta persona?";
  }
  if (tags.includes('sports')) {
    return "⚽ VOCABULARIO - DEPORTES:\n• Con pelota: soccer, basketball, tennis\n• Acuáticos: swimming\n• Atletismo: running\n\n👉 ¿Qué deporte o actividad representa?";
  }
  
  // General vocabulary
  if (tags.includes('vocabulary')) {
    return "📚 VOCABULARIO: Lee la pregunta con atención.\n\n👉 Piensa en la categoría temática\n👉 Relaciona las palabras con imágenes mentales\n👉 Descarta las opciones que claramente no encajan";
  }
  
  // Articles
  if (tags.includes('articles')) {
    return "🔤 REGLA: Artículos A/AN/THE:\n• A + consonante: a book, a car\n• AN + vocal: an apple, an egg\n• THE = específico/único: the sun, the book (que ya conocemos)\n\n👉 ¿Empieza con sonido vocal? Usa AN. ¿Es específico? Usa THE.";
  }
  
  // Possessives
  if (tags.includes('possessive')) {
    return "🔤 REGLA: Posesivos:\n• My (mi), Your (tu), His (de él), Her (de ella)\n• Its (de ello), Our (nuestro), Their (de ellos)\n\n👉 Identifica QUIÉN es el dueño para elegir el posesivo correcto.";
  }
  
  // Default grammar
  if (tags.includes('grammar')) {
    return "🔤 GRAMÁTICA: Analiza la oración paso a paso:\n1. Identifica el SUJETO (¿quién?)\n2. Identifica el TIEMPO verbal (¿cuándo?)\n3. Aplica la regla correspondiente\n\n👉 Lee todas las opciones antes de decidir.";
  }
  
  return "📖 CONSEJO: Lee la oración completa, identifica qué tipo de palabra falta (verbo, sustantivo, adjetivo) y piensa en el contexto.";
};

// Helper function for detailed post-answer explanation
const getDetailedExplanation = (exercise: Exercise): string => {
  const tags = exercise.tags || [];
  
  if (tags.includes('to-be')) {
    return "Recuerda: I→am, he/she/it→is, you/we/they→are. En preguntas se invierte el orden. En negativo añadimos 'not'.";
  }
  if (tags.includes('present-simple')) {
    return "En Present Simple: con he/she/it añade -s/-es. En negativo/pregunta usa do/does + verbo base (sin -s).";
  }
  if (tags.includes('present-continuous')) {
    return "Present Continuous = am/is/are + verbo-ING. Se usa para acciones en progreso ahora mismo.";
  }
  if (tags.includes('vocabulary')) {
    return "Asocia las palabras con imágenes y contextos reales. La práctica constante es clave.";
  }
  
  return "Practica identificando el patrón gramatical. Con repetición, estas reglas se vuelven automáticas.";
};

// Generate exercises based on category type
const generateExercises = (skill: Skill, level: CEFRLevel, categoryId: string): Exercise[] => {
  // First try to get from exercise database
  const dbExercises = getExercisesForSkill(skill, level, categoryId);
  if (dbExercises.length > 0) {
    return dbExercises;
  }
  
  // Fallback: generate exercises based on category
  const categoryType = categoryId.includes('gram') ? 'grammar' 
    : categoryId.includes('vocab') ? 'vocabulary'
    : categoryId.includes('speak') ? 'speaking'
    : categoryId.includes('listen') ? 'listening'
    : categoryId.includes('read') ? 'reading'
    : categoryId.includes('writ') ? 'writing'
    : 'general';
  
  return skill.subSkills.map((subSkill, index) => {
    switch (categoryType) {
      case 'grammar':
        return generateGrammarExercise(subSkill.title, skill.title, level, index);
      case 'vocabulary':
        return generateVocabularyExercise(subSkill.title, skill.title, level, index);
      case 'speaking':
        return generateSpeakingExercise(subSkill.title, skill.title, level, index);
      case 'listening':
        return generateListeningExercise(subSkill.title, skill.title, level, index);
      case 'reading':
        return generateReadingExercise(subSkill.title, skill.title, level, index);
      case 'writing':
        return generateWritingExercise(subSkill.title, skill.title, level, index);
      default:
        return generateGenericExercise(skill.title, subSkill.title, level, index);
    }
  });
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

                  {/* Pre-Exercise Teaching - Regla gramatical SIN dar la respuesta */}
                  {!showExplanation && (
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-primary mb-2">
                            📚 Antes de responder, recuerda:
                          </h3>
                          <div className="text-sm text-foreground leading-relaxed whitespace-pre-line bg-background/50 rounded-lg p-3 border">
                            {getPreExerciseTeaching(currentExerciseData)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Question with image for image-match type */}
                  <div className="mb-6">
                    {currentExerciseData.type === 'image-match' && currentExerciseData.imageUrl && (
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 flex items-center justify-center mb-4 shadow-lg">
                          <span className="text-7xl">{currentExerciseData.imageUrl}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Image className="w-3 h-3 mr-1" />
                          Ejercicio Visual
                        </Badge>
                      </div>
                    )}
                    <h2 className="font-display font-bold text-xl text-center">
                      {currentExerciseData.question}
                    </h2>
                  </div>

                  {/* Audio button and Article link */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => speakText(currentExerciseData.question)}
                      className="text-xs"
                    >
                      <Volume2 className="w-4 h-4 mr-1" />
                      Escuchar pregunta
                    </Button>
                    {(() => {
                      const relatedArticle = getArticleForExercise(currentExerciseData.tags || []);
                      if (relatedArticle) {
                        return (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/articles/${relatedArticle.id}`)}
                            className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                          >
                            <FileText className="w-4 h-4 mr-1" />
                            Leer artículo completo
                          </Button>
                        );
                      }
                      return null;
                    })()}
                  </div>

                  {/* Options - Grid for image-match, List for others */}
                  {currentExerciseData.type === 'image-match' && currentExerciseData.tags?.includes('word-to-image') ? (
                    // Emoji grid for word-to-image exercises
                    <div className="grid grid-cols-2 gap-3">
                      {currentExerciseData.options.map((option) => {
                        const isSelected = selectedAnswer === option;
                        const isCorrectOption = option === currentExerciseData.correctAnswer;
                        
                        return (
                          <button
                            key={option}
                            className={cn(
                              "p-6 rounded-xl border-2 font-medium transition-all flex flex-col items-center justify-center gap-2",
                              !showExplanation && "hover:border-primary hover:bg-primary/5 hover:scale-105",
                              !showExplanation && isSelected && "border-primary bg-primary/10 scale-105",
                              showExplanation && isCorrectOption && "border-success bg-success/10",
                              showExplanation && isSelected && !isCorrect && "border-destructive bg-destructive/10"
                            )}
                            onClick={() => handleSelectAnswer(option)}
                            disabled={showExplanation}
                          >
                            <span className="text-5xl">{option}</span>
                            {showExplanation && isCorrectOption && (
                              <CheckCircle2 className="w-5 h-5 text-success" />
                            )}
                            {showExplanation && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 text-destructive" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    // Standard list for other exercises
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
                  )}

                  {/* Post-Answer Explanation - DESPUÉS de responder */}
                  {showExplanation && (
                    <div className={cn(
                      "mt-6 p-4 rounded-xl",
                      isCorrect ? "bg-success/10 border border-success/20" : "bg-warning/10 border border-warning/20"
                    )}>
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                          isCorrect ? "bg-success/20" : "bg-warning/20"
                        )}>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-success" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-warning" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold mb-2">
                            {isCorrect ? "¡Excelente! 🎉" : `La respuesta correcta es: "${currentExerciseData.correctAnswer}"`}
                          </p>
                          
                          {/* English explanation */}
                          <div className="mb-3">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                              📚 Explicación en inglés:
                            </p>
                            <p className="text-sm text-foreground">
                              {currentExerciseData.explanation}
                            </p>
                          </div>
                          
                          {/* Spanish explanation */}
                          {currentExerciseData.explanationSpanish && (
                            <div className="pt-2 border-t border-border/50">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                                🇪🇸 Explicación en español:
                              </p>
                              <p className="text-sm text-foreground">
                                {currentExerciseData.explanationSpanish}
                              </p>
                            </div>
                          )}

                          {/* Why this answer works */}
                          <div className="mt-3 pt-2 border-t border-border/50">
                            <p className="text-xs font-medium text-primary mb-1">
                              🎯 ¿Por qué esta es la respuesta correcta?
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {getDetailedExplanation(currentExerciseData)}
                            </p>
                          </div>
                        </div>
                      </div>
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
