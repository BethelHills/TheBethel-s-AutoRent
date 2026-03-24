'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import {
  ALL_CARS,
  type Car,
  type PopularCategory,
  carMatchesPopularCategory,
  estimatedBookings,
  getPopularRentalScore,
  getPopularTypeLabel,
} from '@/lib/cars';

const CATEGORIES: { id: PopularCategory; label: string }[] = [
  { id: 'all', label: 'All picks' },
  { id: 'economy', label: 'Economy' },
  { id: 'suv', label: 'SUVs' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'van', label: 'Vans / Group' },
  { id: 'electric', label: 'Electric' },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"
            fill={star <= Math.round(rating) ? '#F59E0B' : '#E5E7EB'}
          />
        </svg>
      ))}
    </div>
  );
}

function PopularCarCard({ car }: { car: Car }) {
  const bookings = estimatedBookings(car);
  const typeLabel = getPopularTypeLabel(car);
  const eco =
    car.fuel === 'Electric' || car.fuel === 'Hybrid';
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-border shadow-card card-lift flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted-light shrink-0">
        <AppImage
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover img-zoom"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="badge bg-primary/95 text-white text-[10px] font-800 uppercase tracking-wide">
            Top pick
          </span>
          {car.available ? (
            <span className="badge badge-available">Available now</span>
          ) : (
            <span className="badge badge-unavailable">Booked</span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm">
          <span className="font-display font-800 text-lg text-foreground">${car.pricePerDay}</span>
          <span className="text-xs text-muted font-medium">/day</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-700 text-primary uppercase tracking-wider">{car.brand}</p>
        <h3 className="font-display font-800 text-lg text-foreground leading-tight mt-0.5 mb-1">
          {car.brand} {car.name}
        </h3>
        <p className="text-xs font-600 text-muted mb-1">{typeLabel}</p>
        {eco ? (
          <p className="text-[11px] text-emerald-700 font-600 mb-3">Modern &amp; eco-friendly</p>
        ) : (
          <span className="mb-2 block" aria-hidden />
        )}

        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <StarRating rating={car.rating} />
              <span className="text-sm font-700 text-foreground">{car.rating.toFixed(1)}</span>
            </div>
            <p className="text-[11px] text-muted mt-0.5">{car.reviewCount} reviews · ~{bookings} bookings</p>
          </div>
        </div>

        <Link
          href={`/car-detail?carId=${car.id}`}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-700 font-display transition-colors ${
            car.available
              ? 'bg-primary text-white hover:bg-primary-dark shadow-primary'
              : 'bg-muted-light text-muted cursor-not-allowed pointer-events-none'
          }`}
          aria-disabled={!car.available}
        >
          {car.available ? (
            <>
              Book Now
              <Icon name="ArrowRightIcon" size={16} />
            </>
          ) : (
            'Unavailable'
          )}
        </Link>
      </div>
    </article>
  );
}

export default function PopularRentalsClient() {
  const [category, setCategory] = useState<PopularCategory>('all');

  const ranked = useMemo(() => {
    return ALL_CARS.filter((c) => c.available)
      .filter((c) => carMatchesPopularCategory(c, category))
      .sort((a, b) => getPopularRentalScore(b) - getPopularRentalScore(a));
  }, [category]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F7F6F3_0%,#FAFAF8_45%,#F3F2EE_100%)]">
      <Header variant="solid" />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted/60">/</span>
            <span className="text-foreground font-600">Popular Rentals</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
              Popular rentals
            </h1>
            <p className="text-muted text-[15px] sm:text-base leading-relaxed mb-4">
              Cars guests choose most often: ranked by{' '}
              <strong className="text-foreground font-700">booking demand</strong>,{' '}
              <strong className="text-foreground font-700">guest ratings</strong>, and{' '}
              <strong className="text-foreground font-700">availability right now</strong>. Browse by
              category—economy, SUVs, luxury, vans, and electric.
            </p>
            <p className="text-sm text-muted">
              Modern, efficient options include hybrids and EVs—great for eco-conscious trips.
            </p>
          </header>

          <div className="mb-4">
            <p className="text-xs font-700 uppercase tracking-wider text-muted mb-3">Browse by category</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  className={`min-h-[40px] px-4 rounded-xl text-sm font-700 transition-colors ${
                    category === c.id
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-white border border-border text-foreground hover:border-primary/40'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted mb-8">
            Showing {ranked.length} vehicle{ranked.length === 1 ? '' : 's'} · Available only
          </p>

          {ranked.length === 0 ? (
            <div className="rounded-2xl border border-border bg-white p-10 text-center text-muted">
              No cars in this category right now. Try another tab or{' '}
              <Link href="/car-listing" className="text-primary font-700 hover:underline">
                browse all cars
              </Link>
              .
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {ranked.map((car) => (
                <PopularCarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
