import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Languages, Loader2, BookOpen, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface GrammarPoint {
  label: string;
  value: string;
  explanation: string;
}

interface GrammarResponse {
  spanish: string;
  english: string;
  pronunciation: string;
  grammarSummary: string;
  grammarPoints?: GrammarPoint[];
  notes?: string;
}

export default function SpanishCoach() {
  const navigate = useNavigate();
  const [spanishText, setSpanishText] = useState("");
  const [level, setLevel] = useState<CEFRLevel>("A2");
  const [result, setResult] = useState<GrammarResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!spanishText.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke<GrammarResponse>(
        "spanish-grammar-coach",
        {
          body: {
            text: spanishText.trim(),
            level,
          },
        },
      );

      if (error) {
        console.error("Spanish grammar coach error:", error);
        setError("There was a problem analyzing the sentence. Please try again.");
        return;
      }

      if (!data) {
        setError("Empty response from grammar coach.");
        return;
      }

      setResult(data);
    } catch (err) {
      console.error("Spanish grammar coach exception:", err);
      setError("Connection error. Please check your internet and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 max-w-3xl">
        {/* Back Button & Title */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="flex items-center gap-3 mb-2">
            <Languages className="w-7 h-7 text-primary" />
            <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Spanish → English Grammar Coach
            </h1>
          </div>
          <p className="text-muted-foreground">
            Write a sentence in Spanish and get a natural English translation,
            pronunciation guide, and a clear explanation of the grammar behind it.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Input form */}
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Spanish sentence
                </label>
                <Textarea
                  placeholder="Escribe aquí tu frase en español..."
                  value={spanishText}
                  onChange={(e) => setSpanishText(e.target.value)}
                  rows={3}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Example: <span className="italic">"Yo trabajo todos los días."</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 justify-between">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your current level
                  </label>
                  <Select value={level} onValueChange={(v) => setLevel(v as CEFRLevel)}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A1">A1 - Beginner</SelectItem>
                      <SelectItem value="A2">A2 - Elementary</SelectItem>
                      <SelectItem value="B1">B1 - Intermediate</SelectItem>
                      <SelectItem value="B2">B2 - Upper Intermediate</SelectItem>
                      <SelectItem value="C1">C1 - Advanced</SelectItem>
                      <SelectItem value="C2">C2 - Proficiency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !spanishText.trim()}
                  className="inline-flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Translate & explain
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Error message */}
            {error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="space-y-4">
                <div className="rounded-xl border bg-muted/40 p-4">
                  <h2 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-primary" />
                    Translation
                  </h2>
                  <p className="text-sm text-muted-foreground mb-1">
                    Spanish:
                  </p>
                  <p className="text-sm font-medium mb-3">
                    {result.spanish}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    English:
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {result.english}
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/40 p-4">
                  <h2 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Pronunciation
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {result.pronunciation}
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/40 p-4 space-y-3">
                  <h2 className="font-display font-semibold text-lg mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Grammar explanation
                  </h2>
                  <p className="text-sm font-medium text-foreground">
                    {result.grammarSummary}
                  </p>

                  {result.grammarPoints && result.grammarPoints.length > 0 && (
                    <ul className="mt-2 space-y-2 text-sm">
                      {result.grammarPoints.map((point, idx) => (
                        <li key={idx} className="rounded-lg bg-background border px-3 py-2">
                          <div className="font-semibold">
                            {point.label}:{" "}
                            <span className="font-normal text-primary">
                              {point.value}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {point.explanation}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {result.notes && (
                    <div className="mt-3 rounded-lg bg-primary/5 border border-primary/20 px-3 py-2 text-sm text-primary">
                      {result.notes}
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

