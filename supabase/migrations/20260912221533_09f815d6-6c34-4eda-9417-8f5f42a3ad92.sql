CREATE TABLE public.exercise_completions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name text,
  student_email text,
  exercise_type text NOT NULL,
  exercise_title text NOT NULL,
  level text,
  score integer NOT NULL DEFAULT 0,
  total_questions integer NOT NULL DEFAULT 0,
  correct_answers integer NOT NULL DEFAULT 0,
  curriculum_overall_percent integer,
  curriculum_level_percent integer,
  completed_subskills integer,
  total_subskills integer,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX idx_exercise_completions_user ON public.exercise_completions(user_id, created_at DESC);
CREATE INDEX idx_exercise_completions_created ON public.exercise_completions(created_at DESC);

GRANT SELECT, INSERT ON public.exercise_completions TO authenticated;
GRANT ALL ON public.exercise_completions TO service_role;

ALTER TABLE public.exercise_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own completions"
ON public.exercise_completions FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id AND NOT public.is_demo_user(auth.uid()));

CREATE POLICY "Users can view their own completions"
ON public.exercise_completions FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all completions"
ON public.exercise_completions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));