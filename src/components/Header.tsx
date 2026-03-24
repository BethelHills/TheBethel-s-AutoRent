'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSession, clearSession } from '@/lib/auth-client';
import BrandLogo from '@/components/BrandLogo';

interface HeaderProps {
  variant?: 'solid' | 'transparent';
}

export default function Header({ variant = 'solid' }: HeaderProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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

  const handleLogout = () => {
    clearSession();
    router.refresh();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isSolid
          ? 'bg-accent/95 backdrop-blur-md border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.12)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <BrandLogo variant="onDark" size="md" className="shrink-0" />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/car-listing"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              Browse Cars
            </Link>
            <Link
              href="/#search"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors hidden sm:inline"
            >
              Dashboard
            </Link>
            {loggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  href="/sign-up-login"
                  className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up-login"
                  className="px-4 py-2 bg-primary text-white text-sm font-700 rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
