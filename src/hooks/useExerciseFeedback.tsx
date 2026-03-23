import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

interface IncorrectAnswer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

interface ExerciseFeedbackData {
  exerciseType: string;
  exerciseTitle: string;
  level: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: IncorrectAnswer[];
}

export function useExerciseFeedback() {
  const { user } = useAuth();

  const sendFeedbackToTeacher = async (data: ExerciseFeedbackData) => {
    try {
      // Get student info
      let studentName = "Anonymous Student";
      let studentEmail = "unknown@email.com";

      if (user) {
        studentEmail = user.email || "unknown@email.com";
        
        // Try to get display name from profiles
        const { data: profile } = await supabase
          .from('profiles')
          .select('display_name')
          .eq('user_id', user.id)
          .single();
        
        if (profile?.display_name) {
          studentName = profile.display_name;
        } else {
          studentName = user.email?.split('@')[0] || "Student";
        }
      }

      console.log("Sending exercise results email...");

      const { data: responseData, error } = await supabase.functions.invoke('send-exercise-feedback', {
        body: {
          studentName,
          studentEmail,
          exerciseType: data.exerciseType,
          exerciseTitle: data.exerciseTitle,
          level: data.level,
          score: data.score,
          totalQuestions: data.totalQuestions,
          correctAnswers: data.correctAnswers,
          incorrectAnswers: data.incorrectAnswers,
          completedAt: new Date().toISOString(),
        },
      });

      if (error) {
        console.error("Error sending feedback:", error);
        toast({
          title: "Results email could not be sent",
          description: "We could not send your results email this time.",
          variant: "destructive",
        });
        return { success: false, error };
      }

      console.log("Exercise results email sent successfully:", responseData);
      toast({
        title: "Results email sent",
        description: "We sent your results to your registered email.",
      });
      return { success: true, data: responseData };
    } catch (error) {
      console.error("Error in sendFeedbackToTeacher:", error);
      toast({
        title: "Results email could not be sent",
        description: "Please try again in your next session.",
        variant: "destructive",
      });
      return { success: false, error };
    }
  };

  const sendExerciseResultEmail = sendFeedbackToTeacher;

  return { sendFeedbackToTeacher, sendExerciseResultEmail };
}
