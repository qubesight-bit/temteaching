-- Drop the existing permissive admin INSERT policy
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;

-- Recreate as a proper admin-only INSERT policy
CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));