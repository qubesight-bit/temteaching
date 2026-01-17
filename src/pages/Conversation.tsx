import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Sparkles, Mic, MicOff, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  correction?: {
    original: string;
    corrected: string;
    explanation: string;
  };
}

const scenarios = [
  { id: "cafe", title: "En el café", description: "Practica ordenar en una cafetería", icon: "☕", level: "A1" },
  { id: "travel", title: "En el aeropuerto", description: "Vocabulario de viajes", icon: "✈️", level: "A2" },
  { id: "work", title: "Reunión de trabajo", description: "Inglés profesional", icon: "💼", level: "B1" },
  { id: "debate", title: "Debate académico", description: "Argumentación avanzada", icon: "🎓", level: "B2" },
];

const aiResponses: Record<string, { greeting: string; corrections: Record<string, { corrected: string; explanation: string }> }> = {
  cafe: {
    greeting: "Welcome to English Café! ☕ I'll be your waiter today. What can I get for you?",
    corrections: {
      "i want coffee": { corrected: "I would like a coffee, please.", explanation: "'I would like' es más educado que 'I want' cuando ordenas algo." },
      "i want a coffee": { corrected: "I would like a coffee, please.", explanation: "'I would like' es más educado que 'I want' cuando ordenas algo." },
      "give me": { corrected: "Could I have...", explanation: "'Could I have' es más cortés que 'give me'." },
    }
  },
  travel: {
    greeting: "Good morning! Welcome to the check-in desk. May I see your passport and boarding pass, please?",
    corrections: {
      "where is": { corrected: "Where is...?", explanation: "Recuerda usar entonación ascendente para preguntas." },
      "i go to": { corrected: "I'm going to / I'm flying to", explanation: "Usa Present Continuous para viajes planeados." },
    }
  },
  work: {
    greeting: "Good morning, everyone. Let's begin our weekly meeting. Would you like to start with your project update?",
    corrections: {
      "i think we must": { corrected: "I think we should / I suggest we", explanation: "'Should' es más adecuado para sugerencias profesionales." },
      "we can maybe": { corrected: "We could perhaps / We might consider", explanation: "Usa modales más formales en reuniones de trabajo." },
    }
  },
  debate: {
    greeting: "Today's topic is: 'Should social media be regulated by governments?' What's your opening argument?",
    corrections: {
      "i think is": { corrected: "I think it is / I believe", explanation: "No olvides el sujeto 'it' en inglés." },
      "is obvious that": { corrected: "It is obvious that / Evidently", explanation: "El sujeto 'it' es necesario en estructuras impersonales." },
    }
  },
};

export default function Conversation() {
  const navigate = useNavigate();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleStartScenario = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    const scenario = aiResponses[scenarioId];
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: scenario.greeting,
      },
    ]);
  };

  const checkForCorrections = (text: string, scenarioId: string) => {
    const scenario = aiResponses[scenarioId];
    const lowerText = text.toLowerCase();
    
    for (const [trigger, correction] of Object.entries(scenario.corrections)) {
      if (lowerText.includes(trigger)) {
        return {
          original: text,
          corrected: correction.corrected,
          explanation: correction.explanation,
        };
      }
    }
    return null;
  };

  const generateAIResponse = (userMessage: string) => {
    const responses = [
      "That's a great point! Could you tell me more about that?",
      "Interesting! How would you handle a situation where...?",
      "I see. And what about...?",
      "Perfect! Your English is improving. Let's try something more challenging.",
      "Good job! Remember to use the present perfect when talking about experiences.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = () => {
    if (!input.trim() || !selectedScenario) return;

    const correction = checkForCorrections(input, selectedScenario);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      correction: correction || undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: correction 
          ? `💡 Good try! A more natural way to say that would be: "${correction.corrected}"\n\n${generateAIResponse(input)}`
          : generateAIResponse(input),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
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
                <p className="text-sm text-muted-foreground">AI Tutor · {scenario?.level}</p>
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
                      
                      {message.correction && (
                        <div className="bg-warning/10 border border-warning/20 rounded-xl p-3 text-left">
                          <p className="text-sm font-medium text-warning mb-1">💡 Sugerencia:</p>
                          <p className="text-sm">
                            <span className="line-through text-muted-foreground">{message.correction.original}</span>
                            {" → "}
                            <span className="text-success font-medium">{message.correction.corrected}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{message.correction.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
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
            />
            <Button variant="hero" size="icon" onClick={handleSend} disabled={!input.trim()}>
              <Send className="w-5 h-5" />
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
                Practica con tu tutor virtual 24/7 con corrección instantánea
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
              <li>• No te preocupes por los errores, el tutor te corregirá amablemente</li>
              <li>• Usa el botón de audio para escuchar la pronunciación correcta</li>
              <li>• Practica al menos 10 minutos al día para mejorar tu fluidez</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
