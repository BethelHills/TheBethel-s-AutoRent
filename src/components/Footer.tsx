import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-accent text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <BrandLogo variant="onDark" size="sm" href={null} />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Find your perfect ride. Quality cars, transparent pricing, and seamless booking.
            </p>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Popular Rentals
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/car-listing" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Terms of Service
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
