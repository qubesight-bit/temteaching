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

      console.log("Sending exercise feedback to teacher...");

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
        return { success: false, error };
      }

      console.log("Feedback sent successfully:", responseData);
      return { success: true, data: responseData };
    } catch (error) {
      console.error("Error in sendFeedbackToTeacher:", error);
      return { success: false, error };
    }
  };

  return { sendFeedbackToTeacher };
}
