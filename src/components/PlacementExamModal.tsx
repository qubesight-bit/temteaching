import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  placementExamSections, 
  getAllPlacementQuestions, 
  calculatePlacementLevel,
  PlacementQuestion 
} from "@/data/placementExamData";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useAppState } from "@/hooks/useAppState";
import { CheckCircle2, ArrowRight, ArrowLeft, GraduationCap, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PlacementExamModalProps {
  open: boolean;
  onComplete: (level: string) => void;
}

export function PlacementExamModal({ open, onComplete }: PlacementExamModalProps) {
  const { user } = useAuth();
  const { setUserProgress } = useAppState();
  const { toast } = useToast();
  
  const [started, setStarted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<{ score: number; level: string } | null>(null);

  const allQuestions = getAllPlacementQuestions();
  const currentSection = placementExamSections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  
  // Calculate overall progress
  const questionsBeforeCurrentSection = placementExamSections
    .slice(0, currentSectionIndex)
    .reduce((acc, section) => acc + section.questions.length, 0);
  const totalAnswered = questionsBeforeCurrentSection + currentQuestionIndex;
  const progressPercentage = (totalAnswered / allQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    if (currentQuestion) {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < placementExamSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      const prevSection = placementExamSections[currentSectionIndex - 1];
      setCurrentQuestionIndex(prevSection.questions.length - 1);
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    
    setIsSubmitting(true);
    
    // Calculate score
    let score = 0;
    allQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    
    const assignedLevel = calculatePlacementLevel(score, allQuestions.length);
    
    try {
      // Save to database
      const { error } = await supabase
        .from('user_placement_exams')
        .insert({
          user_id: user.id,
          score,
          total_questions: allQuestions.length,
          assigned_level: assignedLevel,
          answers: answers
        });
      
      if (error) throw error;
      
      // Update profile with the assigned level
      await supabase
        .from('profiles')
        .update({ current_level: assignedLevel })
        .eq('user_id', user.id);
      
      // Update local state
      setUserProgress({ currentLevel: assignedLevel as any });
      
      setResult({ score, level: assignedLevel });
      setCompleted(true);
      
      toast({
        title: "Placement Complete!",
        description: `You've been placed at level ${assignedLevel}`,
      });
      
    } catch (error) {
      console.error('Error saving placement exam:', error);
      toast({
        title: "Error",
        description: "Failed to save your results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (result) {
      onComplete(result.level);
    }
  };

  const isFirstQuestion = currentSectionIndex === 0 && currentQuestionIndex === 0;
  const isLastQuestion = 
    currentSectionIndex === placementExamSections.length - 1 && 
    currentQuestionIndex === currentSection.questions.length - 1;

  if (completed && result) {
    return (
      <Dialog open={open} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-lg [&>button]:hidden" onPointerDownOutside={(e) => e.preventDefault()}>
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
            
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl">Placement Complete!</DialogTitle>
              <DialogDescription className="text-base mt-2">
                Based on your performance, we've determined your English level.
              </DialogDescription>
            </DialogHeader>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Your Level</p>
              <div className="text-5xl font-bold text-primary mb-2">{result.level}</div>
              <p className="text-sm text-muted-foreground">
                Score: {result.score} / {allQuestions.length} ({Math.round((result.score / allQuestions.length) * 100)}%)
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Your curriculum has been personalized to start at level {result.level}. 
              You can always change this in Settings.
            </p>
            
            <Button onClick={handleClose} className="w-full" size="lg">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-2xl max-h-[90vh] overflow-y-auto [&>button]:hidden" 
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {!started ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl">Placement Test 2025</DialogTitle>
              <DialogDescription className="text-base mt-2">
                The Placement Test is designed to assess your English language proficiency 
                to determine the appropriate course level for your learning needs.
              </DialogDescription>
            </DialogHeader>
            
            <Card className="p-4 mb-6 text-left bg-secondary/50">
              <h4 className="font-semibold mb-2">What to expect:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {allQuestions.length} multiple-choice questions</li>
                <li>• 4 sections covering different grammar topics</li>
                <li>• Takes approximately 15-20 minutes</li>
                <li>• You can navigate back and forth between questions</li>
              </ul>
            </Card>
            
            <p className="text-sm text-muted-foreground mb-6">
              Please complete this test to unlock your personalized learning path.
            </p>
            
            <Button onClick={() => setStarted(true)} className="w-full" size="lg">
              Begin Placement Test
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="font-normal">
                  Section {currentSectionIndex + 1} of {placementExamSections.length}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Question {totalAnswered + 1} of {allQuestions.length}
                </span>
              </div>
              <DialogTitle className="text-lg">{currentSection.title}</DialogTitle>
              <DialogDescription>{currentSection.description}</DialogDescription>
            </DialogHeader>
            
            <Progress value={progressPercentage} className="h-2 mb-4" />
            
            <Card className="p-6">
              <p className="text-lg font-medium mb-6">{currentQuestion?.question}</p>
              
              <RadioGroup
                value={answers[currentQuestion?.id || ""] || ""}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {currentQuestion?.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                      answers[currentQuestion.id] === option
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                    onClick={() => handleAnswer(option)}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer font-normal"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>
            
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion?.id || ""] || isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : isLastQuestion ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Submit Test
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
