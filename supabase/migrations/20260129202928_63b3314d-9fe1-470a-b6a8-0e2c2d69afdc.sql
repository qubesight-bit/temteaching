-- Create table to track user placement exam completion
CREATE TABLE public.user_placement_exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  assigned_level TEXT NOT NULL,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_placement_exams ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own placement exam" 
ON public.user_placement_exams 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own placement exam" 
ON public.user_placement_exams 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own placement exam" 
ON public.user_placement_exams 
FOR UPDATE 
USING (auth.uid() = user_id);