import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const DemoLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const autoLogin = async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email: "qubetest@tutamail.com",
        password: "@0ver$t0p2025",
      });
      if (error) {
        setError("Error al cargar la demo");
      } else {
        navigate("/");
      }
    };
    autoLogin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <>
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Cargando demo...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoLogin;
