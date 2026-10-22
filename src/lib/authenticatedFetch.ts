import { supabase } from '@/integrations/supabase/client';

/** Send protected requests with the user's session, never the public API key. */
export async function authenticatedFetch(url: string, init: RequestInit): Promise<Response> {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session?.access_token) {
    throw new Error('Please sign in again to continue your conversation.');
  }

  const send = (token: string) => {
    const headers = new Headers(init.headers);
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('apikey', import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
    return fetch(url, { ...init, headers });
  };

  const response = await send(data.session.access_token);
  if (response.status !== 401) return response;

  const refreshed = await supabase.auth.refreshSession();
  if (refreshed.error || !refreshed.data.session?.access_token) {
    throw new Error('Your session has expired. Please sign in again.');
  }
  return send(refreshed.data.session.access_token);
}