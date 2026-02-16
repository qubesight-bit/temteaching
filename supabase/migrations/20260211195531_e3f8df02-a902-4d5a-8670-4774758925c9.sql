
-- Enable pg_net extension for HTTP requests from database
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create a trigger function that sends signup notification via edge function
CREATE OR REPLACE FUNCTION public.notify_admin_new_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  _supabase_url text;
  _anon_key text;
BEGIN
  -- Get Supabase URL and anon key from vault or hardcode project URL
  _supabase_url := 'https://rnmnpubprzqykqneckne.supabase.co';
  _anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubW5wdWJwcnpxeWtxbmVja25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MTQ3OTUsImV4cCI6MjA4NDE5MDc5NX0.WfJI-HR6BTssfIFdsplf97xGKyVSnfwpXzBXydWkUms';

  -- Send HTTP request to edge function using pg_net
  PERFORM net.http_post(
    url := _supabase_url || '/functions/v1/send-signup-notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || _anon_key
    ),
    body := jsonb_build_object(
      'userEmail', NEW.email,
      'displayName', COALESCE(NEW.display_name, split_part(NEW.email, '@', 1)),
      'signupTime', NEW.created_at::text,
      'adminUrl', 'https://temteaching.lovable.app/admin/users'
    )
  );

  RETURN NEW;
END;
$$;

-- Create trigger on profiles table for new inserts
CREATE TRIGGER on_new_profile_notify_admin
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.notify_admin_new_signup();
