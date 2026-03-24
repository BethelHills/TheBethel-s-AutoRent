'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsent,
} from '@/lib/cookie-consent';

function nowConsent(analytics: boolean): CookieConsent {
  return {
    v: 1,
    essential: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
}

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(true);

  useEffect(() => {
    setMounted(true);
    const existing = getCookieConsent();
    setOpen(existing === null);
    if (existing) setAnalyticsOn(existing.analytics);
  }, []);

  const dismiss = useCallback((consent: CookieConsent) => {
    setCookieConsent(consent);
    setOpen(false);
    setPrefsOpen(false);
  }, []);

  const handleAccept = useCallback(() => {
    dismiss(nowConsent(true));
  }, [dismiss]);

  const handleSavePreferences = useCallback(() => {
    dismiss(nowConsent(analyticsOn));
  }, [analyticsOn, dismiss]);

  if (!mounted || !open) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-5 md:p-6 pointer-events-none"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="pointer-events-auto max-w-4xl mx-auto rounded-2xl border border-white/10 bg-accent/98 backdrop-blur-xl shadow-[0_-8px_40px_rgba(0,0,0,0.2)] text-white overflow-hidden">
        <div className="p-5 sm:p-6 md:p-7">
          <h2 id="cookie-consent-title" className="sr-only">
            Cookie consent
          </h2>
          <p id="cookie-consent-desc" className="text-sm sm:text-[15px] text-white/85 leading-relaxed mb-5">
            We use cookies to improve your experience and analyze traffic. By using this site, you agree to our
            use of cookies.{' '}
            <Link href="/privacy" className="text-primary-light font-600 underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </Link>
          </p>

          {prefsOpen && (
            <div className="mb-5 p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <p className="text-xs font-700 uppercase tracking-wider text-white/60">Preferences</p>
              <label className="flex items-start gap-3 cursor-default">
                <input type="checkbox" checked disabled className="mt-1 rounded border-white/30" />
                <span>
                  <span className="font-600 text-white">Essential</span>
                  <span className="block text-sm text-white/65">Required for the site to work (session, security).</span>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsOn}
                  onChange={(e) => setAnalyticsOn(e.target.checked)}
                  className="mt-1 rounded border-white/30 text-primary focus:ring-primary"
                />
                <span>
                  <span className="font-600 text-white">Analytics &amp; performance</span>
                  <span className="block text-sm text-white/65">
                    Helps us understand usage so we can improve the product.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-3">
            <button
              type="button"
              onClick={() => setPrefsOpen((p) => !p)}
              className="w-full sm:w-auto min-h-[44px] px-5 rounded-xl text-sm font-700 border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              {prefsOpen ? 'Hide preferences' : 'Manage Preferences'}
            </button>
            <div className="flex flex-col sm:flex-row gap-3 sm:ml-auto sm:flex-1 sm:justify-end">
              {prefsOpen && (
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto min-h-[44px] px-5 rounded-xl text-sm font-700 bg-white/10 text-white hover:bg-white/15 transition-colors border border-white/15"
                >
                  Save preferences
                </button>
              )}
              <button
                type="button"
                onClick={handleAccept}
                className="w-full sm:w-auto min-h-[44px] px-6 rounded-xl text-sm font-700 bg-primary text-white hover:bg-primary-dark transition-colors shadow-primary"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
