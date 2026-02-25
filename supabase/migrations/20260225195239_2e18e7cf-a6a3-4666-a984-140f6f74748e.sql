
-- Create progress rows for all existing users who don't have one yet
INSERT INTO public.user_progress (user_id)
SELECT id FROM auth.users
WHERE id NOT IN (SELECT user_id FROM public.user_progress)
ON CONFLICT (user_id) DO NOTHING;
