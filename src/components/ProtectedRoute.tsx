import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireApproval?: boolean;
}

export function ProtectedRoute({ children, requireApproval = true }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [checkingApproval, setCheckingApproval] = useState(true);

  useEffect(() => {
    const checkApproval = async () => {
      if (!user) {
        setCheckingApproval(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('is_approved')
          .eq('user_id', user.id)
          .single();

        if (error) {
          console.error('Error checking approval:', error);
          setIsApproved(false);
        } else {
          setIsApproved(data?.is_approved ?? false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsApproved(false);
      } finally {
        setCheckingApproval(false);
      }
    };

    if (user) {
      checkApproval();
    } else {
      setCheckingApproval(false);
    }
  }, [user]);

  if (loading || checkingApproval) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Note: Session management is handled by admin panel - no automatic device limits

  // If approval is required and user is not approved, redirect to pending page
  if (requireApproval && !isApproved) {
    return <Navigate to="/pending-approval" replace />;
  }

  return <>{children}</>;
}
