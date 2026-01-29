import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export function usePlacementExam() {
  const { user, loading: authLoading } = useAuth();
  const [needsPlacementExam, setNeedsPlacementExam] = useState(false);
  const [loading, setLoading] = useState(true);
  const [placementCompleted, setPlacementCompleted] = useState(false);

  useEffect(() => {
    const checkPlacementStatus = async () => {
      if (!user) {
        setLoading(false);
        setNeedsPlacementExam(false);
        return;
      }

      try {
        // Check if user has completed placement exam
        const { data, error } = await supabase
          .from('user_placement_exams')
          .select('id, assigned_level')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error checking placement status:', error);
          setNeedsPlacementExam(false);
        } else {
          // User needs placement exam if no record exists
          setNeedsPlacementExam(!data);
          setPlacementCompleted(!!data);
        }
      } catch (error) {
        console.error('Error checking placement status:', error);
        setNeedsPlacementExam(false);
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      checkPlacementStatus();
    }
  }, [user, authLoading]);

  const markPlacementComplete = () => {
    setNeedsPlacementExam(false);
    setPlacementCompleted(true);
  };

  return {
    needsPlacementExam,
    loading: loading || authLoading,
    placementCompleted,
    markPlacementComplete,
  };
}
