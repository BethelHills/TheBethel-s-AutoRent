'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const STEPS = [
  { id: 'confirmed', label: 'Booking Confirmed', desc: 'Payment received, booking is confirmed' },
  { id: 'preparing', label: 'Car Prepared', desc: 'Your car is being prepared for pickup' },
  { id: 'ready', label: 'Ready for Pickup', desc: 'Car is ready at the pickup location' },
  { id: 'active', label: 'Rental Active', desc: 'You have picked up the car' },
  { id: 'completed', label: 'Completed', desc: 'Car returned, rental complete' },
];

export default function BookingStatusClient({ id }: { id: string }) {
  const car = ALL_CARS[0];
  const currentStep = 2;

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/bookings" className="text-sm text-muted hover:text-foreground mb-6 inline-flex items-center gap-1">
            <Icon name="ChevronLeftIcon" size={14} />
            Back to bookings
          </Link>
          <h1 className="font-display font-800 text-3xl text-foreground mb-2">Booking #{id}</h1>
          <p className="text-muted mb-8">Track your rental status</p>

          <div className="bg-white rounded-2xl border border-border p-6 shadow-card mb-8">
            <div className="flex gap-4 mb-6">
              <div className="w-24 h-16 rounded-xl overflow-hidden bg-muted-light shrink-0">
                <AppImage src={car.image} alt={car.name} width={96} height={64} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-700 text-foreground">{car.brand} {car.name}</p>
                <p className="text-sm text-muted">Los Angeles (LAX) → Los Angeles (LAX)</p>
                <p className="text-sm text-muted">Mar 20, 2026 – Mar 25, 2026 (5 days)</p>
              </div>
            </div>

            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <div key={step.id} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    i < currentStep ? 'bg-green-100 text-green-600' : i === currentStep ? 'bg-primary text-white' : 'bg-muted-light text-muted'
                  }`}>
                    {i < currentStep ? <Icon name="CheckIcon" size={18} /> : i + 1}
                  </div>
                  <div>
                    <p className={`font-700 ${i <= currentStep ? 'text-foreground' : 'text-muted'}`}>{step.label}</p>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted">
            Questions? <Link href="/#search" className="text-primary hover:underline">Contact support</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
