'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'solid' | 'transparent';
}

export default function Header({ variant = 'solid' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  useEffect(() => {
    if (variant !== 'transparent') return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [variant]);
  const isSolid = variant === 'solid' || (variant === 'transparent' && scrolled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-accent shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" aria-label="TheBethel's AutoRent - Home">
            {imgError ? (
              <span className="font-display font-800 text-lg sm:text-xl text-white">TheBethel&apos;s AutoRent</span>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/thebethelsautorent.logo.png"
                  alt="TheBethel's AutoRent"
                  className="h-10 w-auto min-w-[100px] sm:h-12 md:h-14 object-contain object-left block"
                  width={180}
                  height={120}
                  loading="eager"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              </>
            )}
          </Link>
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
              href="/#search"
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
          </div>
        </div>
      </div>
    </header>
  );
}
