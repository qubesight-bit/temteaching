import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

const practiceQuestions: Question[] = [
  {
    id: "1",
    question: "She ___ to the gym every Monday.",
    options: ["go", "goes", "going", "went"],
    correctAnswer: "goes",
    explanation: "With 'she' (third person singular) we use 'goes' in Present Simple.",
    category: "Present Simple"
  },
  {
    id: "2",
    question: "I ___ never ___ sushi before.",
    options: ["have / eaten", "has / eaten", "have / eat", "did / eat"],
    correctAnswer: "have / eaten",
    explanation: "We use Present Perfect for life experiences: have + past participle.",
    category: "Present Perfect"
  },
  {
    id: "3",
    question: "If I ___ rich, I ___ travel the world.",
    options: ["am / will", "was / would", "were / would", "be / would"],
    correctAnswer: "were / would",
    explanation: "In Second Conditional we use 'were' for all persons and 'would' for the result.",
    category: "Conditionals"
  },
  {
    id: "4",
    question: "She ___ working when I arrived.",
    options: ["is", "was", "were", "has been"],
    correctAnswer: "was",
    explanation: "Past Continuous for an action in progress interrupted by another past action.",
    category: "Past Continuous"
  },
  {
    id: "5",
    question: "___ you help me with this, please?",
    options: ["Can", "Could", "Should", "Must"],
    correctAnswer: "Could",
    explanation: "'Could' is more polite than 'can' for making requests.",
    category: "Modal Verbs"
  },
  {
    id: "6",
    question: "I enjoy ___ to music while working.",
    options: ["listen", "to listen", "listening", "listened"],
    correctAnswer: "listening",
    explanation: "The verb 'enjoy' is followed by a gerund (-ing).",
    category: "Gerunds & Infinitives"
  },
  {
    id: "7",
    question: "The book ___ by millions of people.",
    options: ["reads", "is reading", "has read", "is read"],
    correctAnswer: "is read",
    explanation: "Passive voice in present: is + past participle.",
    category: "Passive Voice"
  },
  {
    id: "8",
    question: "I have a meeting ___ 3 PM ___ Friday.",
    options: ["at / on", "on / at", "in / on", "at / in"],
    correctAnswer: "at / on",
    explanation: "'At' for specific times, 'on' for days of the week.",
    category: "Prepositions"
  },
  {
    id: "9",
    question: "Please ___ the TV. I want to watch the news.",
    options: ["turn on", "turn off", "turn up", "turn down"],
    correctAnswer: "turn on",
    explanation: "'Turn on' means to switch on a device.",
    category: "Phrasal Verbs"
  },
  {
    id: "10",
    question: "You ___ smoke here. It's prohibited.",
    options: ["mustn't", "don't have to", "shouldn't", "needn't"],
    correctAnswer: "mustn't",
    explanation: "'Mustn't' expresses prohibition, something that is not allowed.",
    category: "Modal Verbs"
  },
];

export default function Practice() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = practiceQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / practiceQuestions.length) * 100;

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      toast({
        title: "Correct! 🎉",
        description: "Excellent work",
      });
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = Math.round((score.correct / practiceQuestions.length) * 100);
    
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
                
                <h2 className="font-display font-bold text-2xl mb-2">
                  Practice complete!
                </h2>
                <p className="text-muted-foreground mb-6">
                  You have finished this practice session
                </p>
                
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-success">{score.correct}</p>
                    <p className="text-sm text-muted-foreground">Correct</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-destructive">{score.incorrect}</p>
                    <p className="text-sm text-muted-foreground">Incorrect</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={() => navigate("/")}>
                    Back to home
                  </Button>
                  <Button variant="hero" onClick={handleRestart}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Practice again
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
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Exit
            </Button>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Exercise {currentQuestionIndex + 1} of {practiceQuestions.length}</span>
              <span className="text-sm text-muted-foreground">
                {score.correct} correct
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card>
            <CardContent className="p-8">
              {/* Category Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {currentQuestion.category}
              </span>
              
              {/* Question */}
              <h2 className="font-display font-bold text-2xl mb-8">
                {currentQuestion.question}
              </h2>
              
              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  
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
                    {isCorrect ? "Correct!" : "Correct answer: " + currentQuestion.correctAnswer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex < practiceQuestions.length - 1 ? (
                    <>
                      Next question
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "View results"
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
