
CREATE OR REPLACE FUNCTION public.set_profile_email_from_auth()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  SELECT email INTO NEW.email FROM auth.users WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_set_email_insert ON public.profiles;
CREATE TRIGGER profiles_set_email_insert
BEFORE INSERT ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_profile_email_from_auth();

DROP TRIGGER IF EXISTS profiles_set_email_update ON public.profiles;
CREATE TRIGGER profiles_set_email_update
BEFORE UPDATE OF email, user_id ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_profile_email_from_auth();

-- Backfill any mismatched emails
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.user_id = u.id
  AND (p.email IS DISTINCT FROM u.email);
