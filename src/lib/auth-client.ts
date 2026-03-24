/** Client-only session flag for mock auth (until real Supabase auth is wired). */
export const AUTH_STORAGE_KEY = 'autorent_session';

export type AuthSession = { email: string; loggedInAt: string };

export function getSession(): AuthSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function setSession(email: string): void {
  const data: AuthSession = {
    email,
    loggedInAt: new Date().toISOString(),
  };
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent('autorent-auth-changed'));
}

export function clearSession(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('autorent-auth-changed'));
}

export function isLoggedIn(): boolean {
  return getSession() !== null;
}
