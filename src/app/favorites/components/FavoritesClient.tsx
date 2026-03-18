'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { FEATURED_CARS } from '@/lib/cars';

export default function FavoritesClient() {
  const [favorites, setFavorites] = useState<number[]>([1, 2, 7]);
  const cars = FEATURED_CARS.filter((c) => favorites.includes(c.id));

  const removeFavorite = (id: number) => {
    setFavorites((f) => f.filter((x) => x !== id));
  };

  if (cars.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header variant="solid" />
        <main className="pt-24 pb-16 px-6 text-center">
          <div className="w-20 h-20 bg-muted-light rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="BoltIcon" size={40} className="text-muted" />
          </div>
          <h1 className="font-display font-800 text-2xl text-foreground mb-2">No favorites yet</h1>
          <p className="text-muted mb-8">Save cars you like by clicking the heart icon on any car card.</p>
          <Link href="/car-listing" className="btn-primary">
            Browse Cars
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display font-800 text-3xl text-foreground mb-8">My Favorites</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl border border-border overflow-hidden shadow-card group">
                <div className="relative aspect-[16/10]">
                  <AppImage src={car.image} alt={car.name} fill sizes="33vw" className="object-cover" />
                  <button
                    type="button"
                    onClick={() => removeFavorite(car.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs font-700 text-primary uppercase">{car.brand}</p>
                  <h2 className="font-display font-700 text-lg text-foreground">{car.name}</h2>
                  <p className="text-sm text-muted mt-1">${car.pricePerDay}/day</p>
                  <Link href={`/car-detail?carId=${car.id}`} className="btn-primary w-full justify-center mt-4 py-2.5 rounded-xl text-sm">
                    View Details
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
