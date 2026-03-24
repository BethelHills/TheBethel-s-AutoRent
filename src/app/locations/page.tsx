import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { getLocationStats } from '@/lib/cars';

export const metadata: Metadata = {
  title: 'Pickup Locations – TheBethels AutoRent',
  description:
    'Cities and metro areas where TheBethels AutoRent offers vehicles. Browse cars by location.',
  openGraph: {
    title: 'Pickup Locations – TheBethels AutoRent',
    description: 'Find rental cars near you across our service areas.',
  },
};

export default function LocationsPage() {
  const stats = getLocationStats();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F7F6F3_0%,#FAFAF8_45%,#F3F2EE_100%)]">
      <Header variant="solid" />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted/60">/</span>
            <span className="text-foreground font-600">Locations</span>
          </nav>

          <header className="mb-10 max-w-2xl">
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
              Locations
            </h1>
            <p className="text-muted text-[15px] sm:text-base leading-relaxed">
              We operate in major cities across the U.S. Pick a location to browse vehicles available for pickup
              in that area. Availability and pricing may vary by market.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {stats.map(({ location, count }) => (
              <Link
                key={location}
                href={`/car-listing?location=${encodeURIComponent(location)}`}
                className="group bg-white rounded-2xl border border-border p-5 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name="MapPinIcon" size={22} />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display font-800 text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                      {location}
                    </h2>
                    <p className="text-sm text-muted mt-1">
                      {count} vehicle{count === 1 ? '' : 's'} available
                    </p>
                  </div>
                </div>
                <span className="text-sm font-700 text-primary flex items-center gap-1 mt-auto pt-1">
                  Browse cars
                  <Icon name="ArrowRightIcon" size={16} />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted">
            Don&apos;t see your city?{' '}
            <Link href="/contact" className="text-primary font-700 hover:underline">
              Contact us
            </Link>{' '}
            — we&apos;re expanding to new areas.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
