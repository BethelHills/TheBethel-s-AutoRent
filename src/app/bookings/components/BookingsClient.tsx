'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const MOCK_BOOKINGS = [
  { id: 'AR-X7K2M', carId: 1, pickup: 'Los Angeles (LAX)', return: 'Los Angeles (LAX)', pickupDate: '2026-03-20', returnDate: '2026-03-25', days: 5, total: 963, status: 'confirmed' },
  { id: 'AR-P9N4L', carId: 2, pickup: 'San Francisco (SFO)', return: 'San Francisco (SFO)', pickupDate: '2026-02-15', returnDate: '2026-02-17', days: 2, total: 308, status: 'completed' },
  { id: 'AR-Q2R8T', carId: 3, pickup: 'Denver (DIA)', return: 'Denver (DIA)', pickupDate: '2026-04-01', returnDate: '2026-04-05', days: 4, total: 878, status: 'pending' },
];

const STATUS_COLORS: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-muted-light text-muted',
  pending: 'bg-amber-100 text-amber-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function BookingsClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display font-800 text-3xl text-foreground">My Bookings</h1>
            <Link href="/dashboard" className="text-sm font-600 text-primary hover:underline">
              ← Dashboard
            </Link>
          </div>
          <div className="space-y-6">
            {MOCK_BOOKINGS.map((booking) => {
              const car = ALL_CARS.find((c) => c.id === booking.carId) || ALL_CARS[0];
              return (
                <div key={booking.id} className="bg-white rounded-2xl border border-border p-6 shadow-card">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden bg-muted-light shrink-0">
                      <AppImage src={car.image} alt={car.name} width={128} height={96} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-700 text-foreground">{car.brand} {car.name}</span>
                        <span className={`badge ${STATUS_COLORS[booking.status] || 'bg-muted-light'}`}>
                          {booking.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted mb-1">#{booking.id}</p>
                      <p className="text-sm text-muted">{booking.pickup} → {booking.return}</p>
                      <p className="text-sm text-muted">{booking.pickupDate} to {booking.returnDate} ({booking.days} days)</p>
                      <p className="font-700 text-foreground mt-1">${booking.total}</p>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <Link href={`/booking-status/${booking.id}`} className="btn-outline py-2 px-4 text-sm rounded-xl">
                        Track Status
                      </Link>
                      <button type="button" className="btn-outline py-2 px-4 text-sm rounded-xl border-red-200 text-red-600 hover:border-red-400">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
