import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Sparkles, Mic, MicOff, Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const scenarios = [
  { id: "cafe", title: "En el café", description: "Practica ordenar en una cafetería", icon: "☕", level: "A1" },
  { id: "travel", title: "En el aeropuerto", description: "Vocabulario de viajes", icon: "✈️", level: "A2" },
  { id: "work", title: "Reunión de trabajo", description: "Inglés profesional", icon: "💼", level: "B1" },
  { id: "debate", title: "Debate académico", description: "Argumentación avanzada", icon: "🎓", level: "B2" },
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/conversation-chat`;

async function streamChat({
  messages,
  scenario,
  userLevel,
  onDelta,
  onDone,
  onError,
}: {
  messages: { role: "user" | "assistant"; content: string }[];
  scenario: string;
  userLevel: string;
  onDelta: (deltaText: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  try {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages, scenario, userLevel }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({ error: "Failed to start stream" }));
      if (resp.status === 429) {
        onError("Rate limit exceeded. Please wait a moment and try again.");
        return;
      }
      if (resp.status === 402) {
        onError("AI credits exhausted. Please try again later.");
        return;
      }
      onError(errorData.error || "Failed to get AI response");
      return;
    }

    if (!resp.body) {
      onError("No response body");
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    // Final flush
    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { /* ignore */ }
      }
    }

    onDone();
  } catch (error) {
    console.error("Stream error:", error);
    onError(error instanceof Error ? error.message : "Connection error");
  }
}

export default function Conversation() {
  const navigate = useNavigate();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getUserLevel = () => {
    const saved = localStorage.getItem('settings');
    if (saved) {
      const settings = JSON.parse(saved);
      return settings.level || "A2";
    }
    return "A2";
  };

  const handleStartScenario = async (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setIsLoading(true);
    
    // Get initial greeting from AI
    const initialMessages: Message[] = [];
    setMessages(initialMessages);
    
    let assistantContent = "";
    
    await streamChat({
      messages: [],
      scenario: scenarioId,
      userLevel: getUserLevel(),
      onDelta: (chunk) => {
        assistantContent += chunk;
        setMessages([{
          id: "greeting",
          role: "assistant",
          content: assistantContent,
        }]);
      },
      onDone: () => {
        setIsLoading(false);
      },
      onError: (error) => {
        setIsLoading(false);
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
        // Fallback greeting
        const fallbackGreetings: Record<string, string> = {
          cafe: "Welcome to English Café! ☕ I'll be your waiter today. What can I get for you?",
          travel: "Good morning! Welcome to the check-in desk. May I see your passport and boarding pass, please?",
          work: "Good morning, everyone. Let's begin our weekly meeting. Would you like to start with your project update?",
          debate: "Today's topic is: 'Should social media be regulated by governments?' What's your opening argument?",
        };
        setMessages([{
          id: "greeting",
          role: "assistant",
          content: fallbackGreetings[scenarioId] || "Hello! Let's practice English together.",
        }]);
      },
    });
  };

  const handleSend = async () => {
    if (!input.trim() || !selectedScenario || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";
    
    await streamChat({
      messages: newMessages.map(m => ({ role: m.role, content: m.content })),
      scenario: selectedScenario,
      userLevel: getUserLevel(),
      onDelta: (chunk) => {
        assistantContent += chunk;
        setMessages([
          ...newMessages,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: assistantContent,
          },
        ]);
      },
      onDone: () => {
        setIsLoading(false);
      },
      onError: (error) => {
        setIsLoading(false);
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
      },
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const speakText = (text: string) => {
    // Remove markdown formatting for speech
    const cleanText = text.replace(/\*\*.*?\*\*/g, '').replace(/💡.*$/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  const handleBack = () => {
    if (selectedScenario) {
      setSelectedScenario(null);
      setMessages([]);
    } else {
      navigate("/");
    }
  };

  if (selectedScenario) {
    const scenario = scenarios.find(s => s.id === selectedScenario);
    
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 container py-4 flex flex-col max-h-[calc(100vh-4rem)]">
          {/* Chat Header */}
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display font-semibold">{scenario?.title}</h2>
                <p className="text-sm text-muted-foreground">AI Tutor · {scenario?.level} · Powered by AI</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <Card className="flex-1 overflow-hidden">
            <CardContent className="p-4 h-full overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.role === "user" && "justify-end"
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-info flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={cn(
                      "max-w-[80%] space-y-2",
                      message.role === "user" && "text-right"
                    )}>
                      <div
                        className={cn(
                          "inline-block p-4 rounded-2xl",
                          message.role === "assistant"
                            ? "bg-secondary rounded-tl-sm"
                            : "bg-primary text-white rounded-tr-sm"
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        {message.role === "assistant" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 mt-2 opacity-60 hover:opacity-100"
                            onClick={() => speakText(message.content)}
                          >
                            <Volume2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && messages.length === 0 && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-info flex items-center justify-center flex-shrink-0">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                      <p className="text-muted-foreground">Thinking...</p>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
          </Card>

          {/* Input */}
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className={cn(isRecording && "bg-destructive text-white")}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>
            <Input
              placeholder="Escribe tu mensaje en inglés..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              variant="hero" 
              size="icon" 
              onClick={handleSend} 
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Back Button & Title */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Dashboard
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-info flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Conversación con IA
              </h1>
              <p className="text-muted-foreground">
                Practica con tu tutor virtual 24/7 con corrección instantánea impulsada por IA
              </p>
            </div>
          </div>
        </div>

        {/* Scenario Selection */}
        <h2 className="font-display font-semibold text-lg mb-4">Elige un escenario</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {scenarios.map((scenario) => (
            <Card
              key={scenario.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => handleStartScenario(scenario.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {scenario.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                        {scenario.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {scenario.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {scenario.description}
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      Comenzar conversación
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-display font-semibold mb-4">💡 Consejos para practicar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Intenta escribir oraciones completas, no solo palabras sueltas</li>
              <li>• No te preocupes por los errores, el tutor IA te corregirá amablemente</li>
              <li>• Usa el botón de audio para escuchar la pronunciación correcta</li>
              <li>• Practica al menos 10 minutos al día para mejorar tu fluidez</li>
              <li>• La IA se adapta a tu nivel configurado en Ajustes</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
