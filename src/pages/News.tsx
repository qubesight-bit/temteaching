import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, BookOpen, Volume2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { newsArticles, NewsArticle } from "@/data/newsData";
import { useGamification } from "@/hooks/useGamification";
import { toast } from "@/hooks/use-toast";

export default function News() {
  const navigate = useNavigate();
  const { addXP } = useGamification();
  const [selectedLevel, setSelectedLevel] = useState<"A1" | "A2" | "B1" | "B2" | "C1" | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const filteredArticles = selectedLevel ? newsArticles.filter(a => a.level === selectedLevel) : newsArticles;

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const handleCheckAnswers = () => {
    if (!selectedArticle) return;
    const correct = selectedArticle.questions.filter((q, i) => answers[i] === q.correctAnswer).length;
    const xp = correct * 15;
    addXP(xp, 'news');
    setShowResults(true);
    toast({ title: `${correct}/${selectedArticle.questions.length} correctas`, description: `+${xp} XP ganados` });
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8 max-w-4xl">
          <Button variant="ghost" size="sm" className="mb-6" onClick={() => { setSelectedArticle(null); setShowQuiz(false); setAnswers({}); setShowResults(false); }}>
            <ArrowLeft className="w-4 h-4 mr-2" />Volver a noticias
          </Button>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={cn("px-2 py-1 rounded-full text-xs font-medium text-white", `bg-level-${selectedArticle.level.toLowerCase()}`)}>{selectedArticle.level}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" />{selectedArticle.readTime} min</span>
              </div>
              <h1 className="font-display font-bold text-2xl mb-2">{selectedArticle.title}</h1>
              <p className="text-muted-foreground mb-4">{selectedArticle.titleEs}</p>
              
              <div className="flex gap-2 mb-6">
                <Button variant="outline" size="sm" onClick={() => speakText(selectedArticle.content)}>
                  <Volume2 className="w-4 h-4 mr-2" />Escuchar
                </Button>
              </div>

              <div className="prose prose-sm max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/50">
                <h3 className="font-semibold mb-3">📚 Vocabulario clave</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedArticle.vocabulary.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-background">
                      <p className="font-medium">{item.word}</p>
                      <p className="text-sm text-muted-foreground">{item.definitionEs}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {!showQuiz ? (
            <Button variant="hero" size="lg" className="w-full" onClick={() => setShowQuiz(true)}>
              <BookOpen className="w-4 h-4 mr-2" />Comprobar comprensión
            </Button>
          ) : (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Preguntas de comprensión</h3>
                <div className="space-y-6">
                  {selectedArticle.questions.map((q, i) => (
                    <div key={i}>
                      <p className="font-medium mb-3">{i + 1}. {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt) => (
                          <button key={opt} className={cn("w-full p-3 rounded-lg border text-left transition-all", answers[i] === opt && "border-primary bg-primary/10", showResults && opt === q.correctAnswer && "border-success bg-success/10", showResults && answers[i] === opt && opt !== q.correctAnswer && "border-destructive bg-destructive/10")} onClick={() => !showResults && setAnswers(prev => ({ ...prev, [i]: opt }))} disabled={showResults}>
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {showResults && opt === q.correctAnswer && <CheckCircle2 className="w-4 h-4 text-success" />}
                            </div>
                          </button>
                        ))}
                      </div>
                      {showResults && answers[i] !== q.correctAnswer && (
                        <p className="text-sm text-muted-foreground mt-2">{q.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
                {!showResults && (
                  <Button variant="hero" size="lg" className="w-full mt-6" onClick={handleCheckAnswers} disabled={Object.keys(answers).length < selectedArticle.questions.length}>
                    Comprobar respuestas
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Button variant="ghost" size="sm" className="mb-6" onClick={() => navigate("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />Volver
        </Button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-info to-primary flex items-center justify-center text-3xl">📰</div>
          <div>
            <h1 className="font-display font-bold text-3xl">Global News</h1>
            <p className="text-muted-foreground">Noticias adaptadas a tu nivel para practicar lectura</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          <Button variant={selectedLevel === null ? "default" : "outline"} size="sm" onClick={() => setSelectedLevel(null)}>Todos</Button>
          {(["A1", "A2", "B1", "B2", "C1"] as const).map((level) => (
            <Button key={level} variant={selectedLevel === level ? "default" : "outline"} size="sm" onClick={() => setSelectedLevel(level)}>{level}</Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-all overflow-hidden" onClick={() => setSelectedArticle(article)}>
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">📰</div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium text-white", `bg-level-${article.level.toLowerCase()}`)}>{article.level}</span>
                  <span className="text-xs text-muted-foreground">{article.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} min</span>
                </div>
                <h3 className="font-display font-semibold mb-1 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
