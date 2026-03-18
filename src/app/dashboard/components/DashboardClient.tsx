'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const TABS = ['Active Bookings', 'Past Bookings', 'Profile', 'Payment History'] as const;

const MOCK_ACTIVE_BOOKINGS = [
  { id: 'AR-X7K2M', carId: 1, pickup: 'Los Angeles (LAX)', return: 'Los Angeles (LAX)', pickupDate: '2026-03-20', returnDate: '2026-03-25', days: 5, total: 963, status: 'confirmed' },
  { id: 'AR-Q2R8T', carId: 3, pickup: 'Denver (DIA)', return: 'Denver (DIA)', pickupDate: '2026-04-01', returnDate: '2026-04-05', days: 4, total: 878, status: 'pending' },
];

const MOCK_PAST_BOOKINGS = [
  { id: 'AR-P9N4L', carId: 2, pickup: 'San Francisco (SFO)', return: 'San Francisco (SFO)', pickupDate: '2026-02-15', returnDate: '2026-02-17', days: 2, total: 308, status: 'completed' },
  { id: 'AR-M3K9P', carId: 5, pickup: 'New York (JFK)', return: 'New York (JFK)', pickupDate: '2026-01-10', returnDate: '2026-01-12', days: 2, total: 530, status: 'cancelled' },
];

const MOCK_PAYMENTS = [
  { id: 'PAY-001', bookingId: 'AR-X7K2M', amount: 963, date: '2026-03-15', method: 'Visa •••• 4242', status: 'completed' },
  { id: 'PAY-002', bookingId: 'AR-P9N4L', amount: 308, date: '2026-02-10', method: 'Visa •••• 4242', status: 'completed' },
  { id: 'PAY-003', bookingId: 'AR-Q2R8T', amount: 878, date: '2026-03-18', method: 'Mastercard •••• 5555', status: 'pending' },
];

const STATUS_COLORS: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-muted-light text-muted',
  pending: 'bg-amber-100 text-amber-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Active Bookings');
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-800 text-3xl text-foreground mb-8">My Dashboard</h1>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl font-700 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab ? 'bg-primary text-white' : 'bg-muted-light text-muted hover:bg-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Active Bookings' && (
            <div className="space-y-6">
              {MOCK_ACTIVE_BOOKINGS.length === 0 ? (
                <div className="bg-white rounded-2xl border border-border p-12 shadow-card text-center">
                  <Icon name="CalendarIcon" size={48} className="text-muted mx-auto mb-4" />
                  <h2 className="font-display font-700 text-xl text-foreground mb-2">No active bookings</h2>
                  <p className="text-muted mb-6">Book a car to get started.</p>
                  <Link href="/car-listing" className="btn-primary">Browse Cars</Link>
                </div>
              ) : (
                MOCK_ACTIVE_BOOKINGS.map((booking) => {
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
                })
              )}
            </div>
          )}

          {activeTab === 'Past Bookings' && (
            <div className="space-y-6">
              {MOCK_PAST_BOOKINGS.length === 0 ? (
                <div className="bg-white rounded-2xl border border-border p-12 shadow-card text-center">
                  <Icon name="CalendarIcon" size={48} className="text-muted mx-auto mb-4" />
                  <h2 className="font-display font-700 text-xl text-foreground mb-2">No past bookings</h2>
                  <p className="text-muted">Your completed and cancelled bookings will appear here.</p>
                </div>
              ) : (
                MOCK_PAST_BOOKINGS.map((booking) => {
                  const car = ALL_CARS.find((c) => c.id === booking.carId) || ALL_CARS[0];
                  return (
                    <div key={booking.id} className="bg-white rounded-2xl border border-border p-6 shadow-card opacity-90">
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
                          <Link href={`/car-detail?carId=${car.id}`} className="btn-outline py-2 px-4 text-sm rounded-xl">
                            Rent Again
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {activeTab === 'Profile' && (
            <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-card space-y-6">
              <h2 className="font-display font-700 text-lg text-foreground">Profile Settings</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-700 text-muted uppercase block mb-2">First Name</label>
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => setProfile((p) => ({ ...p, firstName: e.target.value }))}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs font-700 text-muted uppercase block mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profile.lastName}
                    onChange={(e) => setProfile((p) => ({ ...p, lastName: e.target.value }))}
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-700 text-muted uppercase block mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs font-700 text-muted uppercase block mb-2">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                  className="form-input"
                />
              </div>
              <button type="button" className="btn-primary">
                Save Changes
                <Icon name="CheckIcon" size={18} />
              </button>
              <div className="pt-6 border-t border-border flex gap-4">
                <Link href="/bookings" className="btn-outline flex-1 justify-center">
                  <Icon name="CalendarIcon" size={18} />
                  All Bookings
                </Link>
                <Link href="/favorites" className="btn-outline flex-1 justify-center">
                  <Icon name="BoltIcon" size={18} />
                  Favorites
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'Payment History' && (
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-700 text-lg text-foreground">Payment History</h2>
                <p className="text-sm text-muted mt-1">All your payment transactions</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted-light/50">
                      <th className="text-left py-3 px-6 font-700">ID</th>
                      <th className="text-left py-3 px-6 font-700">Booking</th>
                      <th className="text-left py-3 px-6 font-700">Amount</th>
                      <th className="text-left py-3 px-6 font-700">Date</th>
                      <th className="text-left py-3 px-6 font-700">Method</th>
                      <th className="text-left py-3 px-6 font-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_PAYMENTS.map((payment) => (
                      <tr key={payment.id} className="border-b border-border last:border-0">
                        <td className="py-4 px-6 font-600">{payment.id}</td>
                        <td className="py-4 px-6">{payment.bookingId}</td>
                        <td className="py-4 px-6 font-600">${payment.amount}</td>
                        <td className="py-4 px-6">{payment.date}</td>
                        <td className="py-4 px-6">{payment.method}</td>
                        <td className="py-4 px-6">
                          <span className={`badge ${payment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {MOCK_PAYMENTS.length === 0 && (
                <div className="p-12 text-center text-muted">
                  <Icon name="CreditCardIcon" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No payments yet</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
