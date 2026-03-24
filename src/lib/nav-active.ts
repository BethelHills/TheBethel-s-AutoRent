/**
 * Central rules for which pathname counts as "current" for main nav items.
 */
export function isBrowseCarsPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === '/car-listing' || pathname.startsWith('/car-detail');
}

export function isHowItWorksPath(pathname: string | null): boolean {
  return pathname === '/';
}

export function isContactPath(pathname: string | null): boolean {
  return pathname === '/contact';
}

export function isPrivacyPath(pathname: string | null): boolean {
  return pathname === '/privacy';
}

export function isTermsPath(pathname: string | null): boolean {
  return pathname === '/terms';
}

export function isRefundPolicyPath(pathname: string | null): boolean {
  return pathname === '/refund-policy';
}

export function isHelpCenterPath(pathname: string | null): boolean {
  return pathname === '/help-center';
}

export function isFaqPath(pathname: string | null): boolean {
  return pathname === '/faq';
}

export function isDashboardPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === '/dashboard' || pathname.startsWith('/dashboard/');
}

/** Highlight "Dashboard" in nav when user is in member / account flows. */
export function isMemberHubPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    isDashboardPath(pathname) ||
    pathname === '/bookings' ||
    pathname === '/profile' ||
    pathname === '/favorites' ||
    pathname === '/payment' ||
    pathname.startsWith('/booking-status/') ||
    pathname === '/booking'
  );
}

export function isAuthPath(pathname: string | null): boolean {
  return pathname === '/sign-up-login';
}
