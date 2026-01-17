import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "@/hooks/useAppState";
import Index from "./pages/Index";
import Grammar from "./pages/Grammar";
import Vocabulary from "./pages/Vocabulary";
import Practice from "./pages/Practice";
import Conversation from "./pages/Conversation";
import Tests from "./pages/Tests";
import Lesson from "./pages/Lesson";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppStateProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/lesson/:type/:categoryId/:topicId" element={<Lesson />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppStateProvider>
  </QueryClientProvider>
);

export default App;
