
-- Function to identify demo user
CREATE OR REPLACE FUNCTION public.is_demo_user(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = _user_id
      AND email = 'qubetest@tutamail.com'
  )
$$;

-- Block demo user from INSERT on all tables
CREATE POLICY "Demo user cannot insert conversations"
  ON public.conversations FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot delete conversations"
  ON public.conversations FOR DELETE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot update conversations"
  ON public.conversations FOR UPDATE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot insert messages"
  ON public.conversation_messages FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot insert errors"
  ON public.learning_errors FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot delete errors"
  ON public.learning_errors FOR DELETE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot update profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot insert profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot insert placement exam"
  ON public.user_placement_exams FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot update placement exam"
  ON public.user_placement_exams FOR UPDATE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot insert sessions"
  ON public.user_sessions FOR INSERT
  TO authenticated
  WITH CHECK (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot update sessions"
  ON public.user_sessions FOR UPDATE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));

CREATE POLICY "Demo user cannot delete sessions"
  ON public.user_sessions FOR DELETE
  TO authenticated
  USING (NOT is_demo_user(auth.uid()));
