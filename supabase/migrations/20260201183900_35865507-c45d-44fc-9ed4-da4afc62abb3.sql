-- Update existing unapproved users to be approved
UPDATE public.profiles SET is_approved = true WHERE is_approved = false;

-- Change the default value for is_approved to true for new users
ALTER TABLE public.profiles ALTER COLUMN is_approved SET DEFAULT true;