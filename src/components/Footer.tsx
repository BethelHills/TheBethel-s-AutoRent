'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/BrandLogo';
import {
  isBrowseCarsPath,
  isContactPath,
  isPrivacyPath,
  isRefundPolicyPath,
  isTermsPath,
} from '@/lib/nav-active';

const footerMuted = 'text-white/70 hover:text-primary transition-colors text-sm';
const footerActive = 'text-primary font-700 border-l-2 border-primary pl-3 -ml-px text-sm';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-accent text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <BrandLogo variant="onDark" size="sm" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Find your perfect ride. Quality cars, transparent pricing, and seamless booking.
            </p>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/car-listing"
                  className={`block ${isBrowseCarsPath(pathname) ? footerActive : footerMuted}`}
                  aria-current={isBrowseCarsPath(pathname) ? 'page' : undefined}
                >
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className={`block ${footerMuted}`}>
                  Popular Rentals
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className={`block ${footerMuted}`}>
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/car-listing" className={`block ${footerMuted}`}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block ${isContactPath(pathname) ? footerActive : footerMuted}`}
                  aria-current={isContactPath(pathname) ? 'page' : undefined}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className={`block ${footerMuted}`}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className={`block ${isPrivacyPath(pathname) ? footerActive : footerMuted}`}
                  aria-current={isPrivacyPath(pathname) ? 'page' : undefined}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`block ${isTermsPath(pathname) ? footerActive : footerMuted}`}
                  aria-current={isTermsPath(pathname) ? 'page' : undefined}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className={`block ${isRefundPolicyPath(pathname) ? footerActive : footerMuted}`}
                  aria-current={isRefundPolicyPath(pathname) ? 'page' : undefined}
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} TheBethels AutoRent. All rights reserved.</p>
          <p className="text-white/60 text-sm">Built by BCodeStack</p>
        </div>
      </div>
    </footer>
  );
}
