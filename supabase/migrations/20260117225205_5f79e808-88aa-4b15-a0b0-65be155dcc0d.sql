-- Create table for tracking user learning errors
CREATE TABLE public.learning_errors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
  level TEXT NOT NULL,
  phase TEXT NOT NULL CHECK (phase IN ('SPEAK', 'LISTEN', 'PRACTICE', 'CONVERSATION')),
  question_text TEXT NOT NULL,
  user_response TEXT NOT NULL,
  correct_response TEXT NOT NULL,
  error_type TEXT NOT NULL,
  recommendation TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.learning_errors ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own errors"
ON public.learning_errors
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own errors"
ON public.learning_errors
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own errors"
ON public.learning_errors
FOR DELETE
USING (auth.uid() = user_id);

-- Index for faster queries
CREATE INDEX idx_learning_errors_user_id ON public.learning_errors(user_id);
CREATE INDEX idx_learning_errors_level ON public.learning_errors(level);
CREATE INDEX idx_learning_errors_created_at ON public.learning_errors(created_at DESC);