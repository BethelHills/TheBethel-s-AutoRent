/**
 * Client-side cookie consent storage (localStorage).
 * Use `getCookieConsent()` before loading analytics or non-essential scripts.
 */
export const COOKIE_CONSENT_KEY = 'autorent-cookie-consent';

export type CookieConsent = {
  v: 1;
  essential: true;
  analytics: boolean;
  decidedAt: string;
};

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed?.v !== 1 || parsed.essential !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: CookieConsent): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent('autorent-cookie-consent-changed', { detail: consent }));
  } catch {
    /* ignore quota / private mode */
  }
}

export function clearCookieConsent(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.dispatchEvent(new CustomEvent('autorent-cookie-consent-changed', { detail: null }));
  } catch {
    /* ignore */
  }
}

/** Whether the user has made any consent choice (banner dismissed). */
export function hasConsentDecision(): boolean {
  return getCookieConsent() !== null;
}

/** Analytics / measurement scripts may run only when true. */
export function analyticsAllowed(): boolean {
  return getCookieConsent()?.analytics === true;
}
