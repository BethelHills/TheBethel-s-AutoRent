'use client';

import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { FEATURED_CARS } from '@/lib/cars';

const BENEFITS = [
  { icon: 'BoltIcon', title: 'Instant Booking', desc: 'Book in minutes with our streamlined process' },
  { icon: 'ShieldCheckIcon', title: 'Fully Insured', desc: 'Every rental includes comprehensive coverage' },
  { icon: 'ArrowPathIcon', title: 'Free Cancellation', desc: 'Cancel up to 24 hours before pickup' },
  { icon: 'MapPinIcon', title: 'Nationwide Locations', desc: 'Pick up from 50+ cities across the US' },
];

const TESTIMONIALS = [
  { name: 'Marcus W.', role: 'Weekend traveler', text: 'Smooth pickup at LAX, car was pristine. Will definitely use again!', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Sophia N.', role: 'Business trip', text: 'Best rental experience I\'ve had. The Tesla Model 3 was a dream.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: 'Derek J.', role: 'Family vacation', text: 'Great selection of SUVs. The Defender fit our whole family perfectly.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
];

export default function HomePageClient() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32">
          <div className="max-w-2xl">
            <p className="text-primary font-700 text-sm uppercase tracking-widest mb-4">Car Rental Made Simple</p>
            <h1 className="font-display font-800 text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Drive Your Dream
              <span className="text-primary"> Car Today</span>
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-xl">
              Browse hundreds of cars, book instantly, and hit the road. Transparent pricing, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/car-listing" className="btn-primary py-4 px-8 rounded-2xl text-base justify-center">
                Browse Cars
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <Link href="/car-listing#search" className="inline-flex items-center gap-2 py-4 px-8 border-2 border-white/40 text-white rounded-2xl font-700 hover:bg-white/10 transition-colors">
                <Icon name="MapPinIcon" size={20} />
                Search by Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section id="search" className="relative z-20 -mt-16 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-float p-6 border border-border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="MapPinIcon" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input type="text" placeholder="City or location" className="form-input pl-12" />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:w-80">
              <div>
                <label className="text-xs font-700 text-muted uppercase block mb-1">Pickup</label>
                <input type="date" className="form-input" />
              </div>
              <div>
                <label className="text-xs font-700 text-muted uppercase block mb-1">Return</label>
                <input type="date" className="form-input" />
              </div>
            </div>
            <Link href="/car-listing" className="btn-primary py-3.5 px-8 rounded-xl justify-center self-end lg:self-auto">
              Search
              <Icon name="MagnifyingGlassIcon" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary font-700 text-sm uppercase tracking-widest mb-2">Popular Picks</p>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">Featured Cars</h2>
            </div>
            <Link href="/car-listing" className="text-primary font-700 hover:text-primary-dark transition-colors hidden sm:flex items-center gap-1">
              View all
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CARS.map((car) => (
              <Link key={car.id} href={`/car-detail?carId=${car.id}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card-hover hover:border-primary/30 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <AppImage src={car.image} alt={car.name} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 badge badge-popular">Popular</span>
                  <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 rounded-xl">
                    <span className="font-700 text-foreground">${car.pricePerDay}</span>
                    <span className="text-muted text-sm">/day</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-700 text-primary uppercase">{car.brand}</p>
                  <h3 className="font-display font-700 text-lg text-foreground">{car.name}</h3>
                  <p className="text-sm text-muted mt-1">{car.type} · {car.location}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/car-listing" className="btn-outline">
              View All Cars
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted-light/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-primary font-700 text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">The AutoRent Advantage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-border text-center hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={b.icon as never} size={28} className="text-primary" />
                </div>
                <h3 className="font-display font-700 text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-muted text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-700 text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-border shadow-card">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width={16} height={16} viewBox="0 0 20 20" fill="#F59E0B">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted text-sm mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <AppImage src={t.avatar} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-700 text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center bg-accent rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-display font-800 text-3xl md:text-4xl text-white mb-4">Ready to Hit the Road?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Join thousands of satisfied renters. Book your perfect car in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/car-listing" className="btn-primary py-4 px-8 rounded-2xl justify-center bg-primary hover:bg-primary-dark text-white">
                Browse Cars
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              <Link href="/sign-up-login" className="inline-flex items-center justify-center gap-2 py-4 px-8 border-2 border-white/40 text-white rounded-2xl font-700 hover:bg-white/10 transition-colors">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
