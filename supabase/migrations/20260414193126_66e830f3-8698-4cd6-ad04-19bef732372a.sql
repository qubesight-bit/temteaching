-- Drop the overly permissive UPDATE policy that lets users modify session_token
DROP POLICY IF EXISTS "Users can update their own sessions" ON public.user_sessions;

-- Create a restrictive UPDATE policy that only allows updating last_active_at and device_info
CREATE POLICY "Users can update own session activity"
ON public.user_sessions
FOR UPDATE
TO public
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Revoke direct column-level UPDATE on session_token to prevent token fixation
REVOKE UPDATE (session_token) ON public.user_sessions FROM authenticated;
REVOKE UPDATE (session_token) ON public.user_sessions FROM anon;