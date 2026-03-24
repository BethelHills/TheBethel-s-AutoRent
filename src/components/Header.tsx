'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { getSession, clearSession } from '@/lib/auth-client';
import BrandLogo from '@/components/BrandLogo';
import Icon from '@/components/ui/AppIcon';
import {
  isBrowseCarsPath,
  isHowItWorksPath,
  isContactPath,
  isMemberHubPath,
  isAuthPath,
} from '@/lib/nav-active';

interface HeaderProps {
  variant?: 'solid' | 'transparent';
}

const navInactive = 'text-sm font-600 text-white/90 hover:text-primary transition-colors';
const navActive =
  'text-sm font-700 text-primary bg-primary/15 ring-1 ring-primary/25 rounded-lg px-2.5 py-1.5 -mx-0.5 transition-colors';

const mobileRow = 'py-3 px-3 min-h-[44px] flex items-center rounded-xl transition-colors';
const mobileInactive = `${mobileRow} text-white/90 hover:bg-white/10 active:bg-white/10`;
const mobileActive = `${mobileRow} text-primary font-700 bg-white/10 border-l-2 border-primary pl-[10px]`;

export default function Header({ variant = 'solid' }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const syncAuth = useCallback(() => {
    setLoggedIn(getSession() !== null);
  }, []);

  useEffect(() => {
    syncAuth();
    const onAuthChange = () => syncAuth();
    window.addEventListener('storage', onAuthChange);
    window.addEventListener('autorent-auth-changed', onAuthChange);
    return () => {
      window.removeEventListener('storage', onAuthChange);
      window.removeEventListener('autorent-auth-changed', onAuthChange);
    };
  }, [syncAuth]);

  useEffect(() => {
    if (variant !== 'transparent') return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [variant]);
  const isSolid = variant === 'solid' || (variant === 'transparent' && scrolled);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    clearSession();
    closeMenu();
    router.refresh();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isSolid
            ? 'bg-accent/95 backdrop-blur-md border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.12)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4">
          <div className="flex min-h-[44px] items-center justify-between gap-3 sm:gap-4">
            <BrandLogo variant="onDark" size="md" className="min-w-0 shrink-0 select-none" />

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Main">
              <Link
                href="/car-listing"
                className={isBrowseCarsPath(pathname) ? navActive : navInactive}
                aria-current={isBrowseCarsPath(pathname) ? 'page' : undefined}
              >
                Browse Cars
              </Link>
              <Link
                href="/#search"
                className={isHowItWorksPath(pathname) ? navActive : navInactive}
                aria-current={isHowItWorksPath(pathname) ? 'page' : undefined}
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className={isContactPath(pathname) ? navActive : navInactive}
                aria-current={isContactPath(pathname) ? 'page' : undefined}
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <Link
                href="/dashboard"
                className={isMemberHubPath(pathname) ? navActive : navInactive}
                aria-current={isMemberHubPath(pathname) ? 'page' : undefined}
              >
                Dashboard
              </Link>
              {loggedIn ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className={`text-sm font-600 rounded-lg px-2.5 py-1.5 text-white/90 hover:text-primary hover:bg-white/5 transition-colors`}
                >
                  Log out
                </button>
              ) : (
                <>
                  <Link
                    href="/sign-up-login"
                    className={isAuthPath(pathname) ? navActive : navInactive}
                    aria-current={isAuthPath(pathname) ? 'page' : undefined}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up-login"
                    className={`px-4 py-2 text-sm font-700 rounded-xl transition-colors ${
                      isAuthPath(pathname)
                        ? 'bg-primary-dark text-white ring-2 ring-primary ring-offset-2 ring-offset-accent'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile: menu toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl text-white hover:bg-white/10 border border-white/15 -mr-1"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              {mobileMenuOpen ? <Icon name="XMarkIcon" size={24} /> : <Icon name="Bars3Icon" size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-over panel */}
      <div
        id="mobile-nav-menu"
        className={`fixed inset-0 z-[100] md:hidden transition-[visibility] duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible delay-300'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <div
          className={`absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col bg-accent shadow-2xl transition-transform duration-300 ease-out border-l border-white/10 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-display font-800 text-sm tracking-wide">Menu</span>
            <button
              type="button"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl text-white hover:bg-white/10"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <Icon name="XMarkIcon" size={22} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-4 flex flex-col" aria-label="Mobile">
            <Link
              href="/car-listing"
              className={isBrowseCarsPath(pathname) ? mobileActive : mobileInactive}
              onClick={closeMenu}
              aria-current={isBrowseCarsPath(pathname) ? 'page' : undefined}
            >
              Browse Cars
            </Link>
            <Link
              href="/#search"
              className={isHowItWorksPath(pathname) ? mobileActive : mobileInactive}
              onClick={closeMenu}
              aria-current={isHowItWorksPath(pathname) ? 'page' : undefined}
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className={isContactPath(pathname) ? mobileActive : mobileInactive}
              onClick={closeMenu}
              aria-current={isContactPath(pathname) ? 'page' : undefined}
            >
              Contact
            </Link>
            <div className="my-3 h-px bg-white/15 mx-3" />
            <Link
              href="/dashboard"
              className={isMemberHubPath(pathname) ? mobileActive : mobileInactive}
              onClick={closeMenu}
              aria-current={isMemberHubPath(pathname) ? 'page' : undefined}
            >
              Dashboard
            </Link>
            {loggedIn ? (
              <button
                type="button"
                className={`${mobileInactive} text-left w-full border-0 bg-transparent cursor-pointer`}
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  href="/sign-up-login"
                  className={isAuthPath(pathname) ? mobileActive : mobileInactive}
                  onClick={closeMenu}
                  aria-current={isAuthPath(pathname) ? 'page' : undefined}
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up-login"
                  className={`mx-3 mt-2 flex items-center justify-center min-h-[48px] rounded-xl text-sm font-700 transition-colors ${
                    isAuthPath(pathname)
                      ? 'bg-primary-dark text-white ring-2 ring-primary ring-offset-2 ring-offset-accent'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
