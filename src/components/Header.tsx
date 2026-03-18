'use client';

import Link from 'next/link';

interface HeaderProps {
  variant?: 'solid' | 'transparent';
}

export default function Header({ variant = 'solid' }: HeaderProps) {
  const isSolid = variant === 'solid';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-accent shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <Link href="/car-listing" className="flex items-center gap-2">
            <span className="font-display font-800 text-xl text-white">
              TheBethel&apos;s AutoRent
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/car-listing"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              Browse Cars
            </Link>
            <Link
              href="/car-listing"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/car-listing"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/car-listing"
              className="text-sm font-600 text-white/90 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/car-listing"
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
