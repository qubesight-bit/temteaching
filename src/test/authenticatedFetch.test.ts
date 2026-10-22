import { afterEach, describe, expect, it, vi } from 'vitest';
const auth = vi.hoisted(() => ({ getSession: vi.fn(), refreshSession: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: { auth } }));
import { authenticatedFetch } from '@/lib/authenticatedFetch';

afterEach(() => { vi.resetAllMocks(); vi.unstubAllGlobals(); });

describe('protected conversation requests', () => {
  it('uses the signed-in user token for authorization', async () => {
    auth.getSession.mockResolvedValue({ data: { session: { access_token: 'user-session-token' } }, error: null });
    const fetcher = vi.fn().mockResolvedValue(new Response('ok'));
    vi.stubGlobal('fetch', fetcher);
    await authenticatedFetch('/conversation', { method: 'POST', body: '{}' });
    expect(new Headers(fetcher.mock.calls[0][1].headers).get('Authorization')).toBe('Bearer user-session-token');
  });

  it('never sends a signed-out request', async () => {
    auth.getSession.mockResolvedValue({ data: { session: null }, error: null });
    const fetcher = vi.fn();
    vi.stubGlobal('fetch', fetcher);
    await expect(authenticatedFetch('/conversation', {})).rejects.toThrow('Please sign in');
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('refreshes a rejected session and retries once with the new token', async () => {
    auth.getSession.mockResolvedValue({ data: { session: { access_token: 'old-token' } }, error: null });
    auth.refreshSession.mockResolvedValue({ data: { session: { access_token: 'new-token' } }, error: null });
    const fetcher = vi.fn().mockResolvedValueOnce(new Response('', { status: 401 })).mockResolvedValueOnce(new Response('ok'));
    vi.stubGlobal('fetch', fetcher);
    expect((await authenticatedFetch('/conversation', {})).status).toBe(200);
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(new Headers(fetcher.mock.calls[1][1].headers).get('Authorization')).toBe('Bearer new-token');
  });
});