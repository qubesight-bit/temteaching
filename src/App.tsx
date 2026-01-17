import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "@/hooks/useAppState";
import { GamificationProvider } from "@/hooks/useGamification";
import { AdaptiveLearningProvider } from "@/hooks/useAdaptiveLearning";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Grammar from "./pages/Grammar";
import Vocabulary from "./pages/Vocabulary";
import Practice from "./pages/Practice";
import Conversation from "./pages/Conversation";
import ConversationHistory from "./pages/ConversationHistory";
import ConversationDetail from "./pages/ConversationDetail";
import Tests from "./pages/Tests";
import Lesson from "./pages/Lesson";
import Settings from "./pages/Settings";
import AdaptiveQuiz from "./pages/AdaptiveQuiz";
import News from "./pages/News";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppStateProvider>
        <GamificationProvider>
          <AdaptiveLearningProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/grammar" element={<Grammar />} />
                  <Route path="/vocabulary" element={<Vocabulary />} />
                  <Route path="/practice" element={<Practice />} />
                  <Route path="/conversation" element={<Conversation />} />
                  <Route path="/conversation/history" element={<ConversationHistory />} />
                  <Route path="/conversation/history/:id" element={<ConversationDetail />} />
                  <Route path="/tests" element={<Tests />} />
                  <Route path="/lesson/:type/:categoryId/:topicId" element={<Lesson />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/adaptive-quiz" element={<AdaptiveQuiz />} />
                  <Route path="/news" element={<News />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AdaptiveLearningProvider>
        </GamificationProvider>
      </AppStateProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
