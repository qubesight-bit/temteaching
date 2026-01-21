import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, 
  CheckCircle2, XCircle, Headphones, Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface ComprehensionQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface ArticleAudioQuizProps {
  articleTitle: string;
  articleContent: string;
  questions?: ComprehensionQuestion[];
  onComplete?: (score: number, total: number) => void;
}

// Generate comprehension questions from article content
const generateQuestionsFromContent = (title: string, content: string): ComprehensionQuestion[] => {
  // Default questions based on general comprehension
  const defaultQuestions: ComprehensionQuestion[] = [
    {
      question: `What is the main topic of this article?`,
      options: [
        title,
        "General vocabulary",
        "Speaking practice",
        "Writing exercises"
      ],
      correctAnswer: title,
      explanation: `The article is about "${title}".`
    },
    {
      question: "After listening to this article, what should you focus on?",
      options: [
        "Understanding the key concepts and rules",
        "Memorizing every word exactly",
        "Speaking very fast",
        "Ignoring the examples"
      ],
      correctAnswer: "Understanding the key concepts and rules",
      explanation: "The most important thing is to understand the concepts and rules explained in the article."
    },
    {
      question: "What is recommended for practicing what you learned?",
      options: [
        "Do the practice exercises",
        "Skip the examples",
        "Only read without listening",
        "Avoid making mistakes"
      ],
      correctAnswer: "Do the practice exercises",
      explanation: "Practice exercises help reinforce what you've learned from the article."
    },
    {
      question: "Why is it important to review common mistakes?",
      options: [
        "To avoid making the same errors",
        "To feel bad about mistakes",
        "Common mistakes are not important",
        "Only experts need to review mistakes"
      ],
      correctAnswer: "To avoid making the same errors",
      explanation: "Reviewing common mistakes helps you recognize and avoid similar errors in your own learning."
    },
    {
      question: "What is the best approach when you don't understand something?",
      options: [
        "Listen again and review the examples",
        "Give up immediately",
        "Skip to the next article",
        "Ignore it completely"
      ],
      correctAnswer: "Listen again and review the examples",
      explanation: "Listening again and reviewing examples helps clarify difficult concepts."
    }
  ];

  return defaultQuestions;
};

export function ArticleAudioQuiz({ 
  articleTitle, 
  articleContent, 
  questions,
  onComplete 
}: ArticleAudioQuizProps) {
  const [phase, setPhase] = useState<"listen" | "quiz" | "results">("listen");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(0.85);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { answer: string; correct: boolean }>>({});
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const contentLength = useRef(0);
  const spokenLength = useRef(0);

  // Get questions - either provided or generated
  const quizQuestions = questions || generateQuestionsFromContent(articleTitle, articleContent);

  const startAudio = () => {
    if (!('speechSynthesis' in window)) {
      toast({
        title: "Audio not supported",
        description: "Your browser doesn't support text-to-speech.",
        variant: "destructive"
      });
      return;
    }

    window.speechSynthesis.cancel();
    
    const textToSpeak = `${articleTitle}. ${articleContent}`;
    contentLength.current = textToSpeak.length;
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = playbackRate;
    
    utterance.onboundary = (event) => {
      spokenLength.current = event.charIndex;
      const progressPercent = (event.charIndex / contentLength.current) * 100;
      setProgress(progressPercent);
    };
    
    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      toast({
        title: "🎧 Listening Complete!",
        description: "Now answer the comprehension questions.",
      });
    };
    
    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    } else {
      startAudio();
    }
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setProgress(0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Note: Web Speech API doesn't support muting directly
    // We simulate by pausing
    if (!isMuted && isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const changeSpeed = () => {
    const speeds = [0.7, 0.85, 1, 1.15];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackRate(speeds[nextIndex]);
    
    if (isPlaying) {
      stopAudio();
      toast({
        title: "Speed changed",
        description: `Playback speed: ${speeds[nextIndex]}x. Press play to continue.`,
      });
    }
  };

  const startQuiz = () => {
    stopAudio();
    setPhase("quiz");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers({});
  };

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === quizQuestions[currentQuestionIndex].correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: { answer, correct: isCorrect }
    }));
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setPhase("results");
      onComplete?.(score, quizQuestions.length);
    }
  };

  const restartQuiz = () => {
    setPhase("listen");
    setProgress(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers({});
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const percentage = quizQuestions.length > 0 ? Math.round((score / quizQuestions.length) * 100) : 0;

  return (
    <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-primary" />
          Listening Comprehension
        </CardTitle>
      </CardHeader>
      <CardContent>
        {phase === "listen" && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Listen to the article carefully. After listening, you'll answer comprehension questions.
            </p>
            
            {/* Audio Player Controls */}
            <div className="p-6 rounded-xl bg-card border-2">
              <div className="flex items-center gap-4 mb-4">
                <Button
                  size="lg"
                  variant={isPlaying ? "secondary" : "default"}
                  onClick={togglePlayPause}
                  className="h-14 w-14 rounded-full"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={stopAudio}
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={changeSpeed}
                  className="min-w-[60px]"
                >
                  {playbackRate}x
                </Button>
              </div>
              
              <Progress value={progress} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground text-center">
                {Math.round(progress)}% complete
              </p>
            </div>
            
            {/* Article Preview */}
            <div className="p-4 rounded-lg bg-muted/50 max-h-48 overflow-y-auto">
              <h4 className="font-semibold mb-2">{articleTitle}</h4>
              <p className="text-sm text-muted-foreground line-clamp-4">
                {articleContent.slice(0, 300)}...
              </p>
            </div>
            
            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              onClick={startQuiz}
            >
              Start Comprehension Quiz
            </Button>
          </div>
        )}

        {phase === "quiz" && currentQuestion && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                Score: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
              </span>
            </div>
            <Progress 
              value={((currentQuestionIndex + 1) / quizQuestions.length) * 100} 
              className="h-2"
            />
            
            {/* Question */}
            <div className="p-4 rounded-xl bg-muted/50">
              <p className="font-medium text-lg">{currentQuestion.question}</p>
            </div>
            
            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const showCorrect = showExplanation && isCorrect;
                const showIncorrect = showExplanation && isSelected && !isCorrect;
                
                return (
                  <button
                    key={index}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left transition-all",
                      !showExplanation && "hover:border-primary hover:bg-primary/5",
                      !showExplanation && isSelected && "border-primary bg-primary/10",
                      showCorrect && "border-success bg-success/10",
                      showIncorrect && "border-destructive bg-destructive/10"
                    )}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={showExplanation}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Explanation */}
            {showExplanation && (
              <div className={cn(
                "p-4 rounded-xl border",
                selectedAnswer === currentQuestion.correctAnswer
                  ? "bg-success/10 border-success/30"
                  : "bg-warning/10 border-warning/30"
              )}>
                <p className="text-sm">
                  <span className="font-semibold">
                    {selectedAnswer === currentQuestion.correctAnswer ? "✅ Correct!" : "❌ Not quite."}
                  </span>
                  {" "}{currentQuestion.explanation}
                </p>
              </div>
            )}
            
            {/* Next Button */}
            {showExplanation && (
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < quizQuestions.length - 1 
                  ? "Next Question" 
                  : "View Results"}
              </Button>
            )}
          </div>
        )}

        {phase === "results" && (
          <div className="space-y-6 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Trophy className={cn(
                "w-16 h-16 mx-auto mb-4",
                percentage >= 80 ? "text-warning" : percentage >= 60 ? "text-primary" : "text-muted-foreground"
              )} />
              <h3 className="text-2xl font-bold mb-2">
                {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!"}
              </h3>
              <p className="text-4xl font-bold text-primary mb-2">
                {score}/{quizQuestions.length}
              </p>
              <p className="text-muted-foreground">
                {percentage}% correct answers
              </p>
            </div>
            
            {/* Answer Summary */}
            <div className="space-y-2 text-left">
              {quizQuestions.map((q, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-3 rounded-lg border flex items-center gap-3",
                    answers[index]?.correct ? "bg-success/10" : "bg-destructive/10"
                  )}
                >
                  {answers[index]?.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  )}
                  <span className="text-sm truncate">{q.question}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={restartQuiz}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Listen Again
              </Button>
              <Button 
                variant="default" 
                size="lg" 
                className="flex-1"
                onClick={() => setPhase("listen")}
              >
                Continue Reading
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
