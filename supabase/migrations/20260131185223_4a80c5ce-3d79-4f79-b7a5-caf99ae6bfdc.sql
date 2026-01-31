-- Allow admins to view all user sessions
CREATE POLICY "Admins can view all sessions" 
ON public.user_sessions 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'));

-- Allow admins to delete any user session
CREATE POLICY "Admins can delete any session" 
ON public.user_sessions 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'));