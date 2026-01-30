import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useSessionManager } from '@/hooks/useSessionManager';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  sessionValid: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionValid, setSessionValid] = useState(true);

  const { registerSession, removeSession, clearLocalSession, checkSession } = useSessionManager(user?.id);

  // Check if session is still valid periodically
  const validateSession = useCallback(async () => {
    if (!user) return;
    
    const isValid = await checkSession();
    if (!isValid && session) {
      // Session was kicked - sign out
      setSessionValid(false);
    }
  }, [user, session, checkSession]);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Register session when user changes (after sign in)
  useEffect(() => {
    if (user) {
      registerSession();
    }
  }, [user, registerSession]);

  // Periodic session validation
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      validateSession();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [user, validateSession]);

  const signUp = async (email: string, password: string, displayName?: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: displayName || email.split('@')[0]
        }
      }
    });

    // If signup successful, update the profile with display name
    if (!error && data.user && displayName) {
      setTimeout(async () => {
        await supabase
          .from('profiles')
          .update({ display_name: displayName })
          .eq('user_id', data.user!.id);
      }, 100);
    }

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (!error) {
      setSessionValid(true);
    }
    
    return { error };
  };

  const signOut = async () => {
    await removeSession();
    clearLocalSession();
    await supabase.auth.signOut();
    setSessionValid(true);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, sessionValid, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
