'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const TABS = [
  { id: 'Active Bookings' as const, label: 'Active', icon: 'CalendarIcon' as const },
  { id: 'Past Bookings' as const, label: 'History', icon: 'ArrowPathIcon' as const },
  { id: 'Profile' as const, label: 'Profile', icon: 'UserCircleIcon' as const },
  { id: 'Payment History' as const, label: 'Payments', icon: 'CreditCardIcon' as const },
];

const MOCK_ACTIVE_BOOKINGS = [
  { id: 'AR-X7K2M', carId: 1, pickup: 'Los Angeles (LAX)', return: 'Los Angeles (LAX)', pickupDate: '2026-03-20', returnDate: '2026-03-25', days: 5, total: 963, status: 'confirmed' as const },
  { id: 'AR-Q2R8T', carId: 3, pickup: 'Denver (DIA)', return: 'Denver (DIA)', pickupDate: '2026-04-01', returnDate: '2026-04-05', days: 4, total: 878, status: 'pending' as const },
];

const MOCK_PAST_BOOKINGS = [
  { id: 'AR-P9N4L', carId: 2, pickup: 'San Francisco (SFO)', return: 'San Francisco (SFO)', pickupDate: '2026-02-15', returnDate: '2026-02-17', days: 2, total: 308, status: 'completed' as const },
  { id: 'AR-M3K9P', carId: 5, pickup: 'New York (JFK)', return: 'New York (JFK)', pickupDate: '2026-01-10', returnDate: '2026-01-12', days: 2, total: 530, status: 'cancelled' as const },
];

const MOCK_PAYMENTS = [
  { id: 'PAY-001', bookingId: 'AR-X7K2M', amount: 963, date: '2026-03-15', method: 'Visa •••• 4242', status: 'completed' as const },
  { id: 'PAY-002', bookingId: 'AR-P9N4L', amount: 308, date: '2026-02-10', method: 'Visa •••• 4242', status: 'completed' as const },
  { id: 'PAY-003', bookingId: 'AR-Q2R8T', amount: 878, date: '2026-03-18', method: 'Mastercard •••• 5555', status: 'pending' as const },
];

const STATUS_STYLE: Record<string, string> = {
  confirmed: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80',
  completed: 'bg-slate-100 text-slate-700 ring-1 ring-slate-200/80',
  pending: 'bg-amber-50 text-amber-900 ring-1 ring-amber-200/80',
  cancelled: 'bg-red-50 text-red-800 ring-1 ring-red-200/80',
};

function formatStatus(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('Active Bookings');
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
  });

  const stats = useMemo(() => {
    const completedSpend = MOCK_PAYMENTS.filter((p) => p.status === 'completed').reduce((a, p) => a + p.amount, 0);
    return {
      activeCount: MOCK_ACTIVE_BOOKINGS.length,
      pastCount: MOCK_PAST_BOOKINGS.length,
      lifetimeSpend: completedSpend,
      pendingPayment: MOCK_PAYMENTS.find((p) => p.status === 'pending'),
    };
  }, []);

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const initials = `${profile.firstName[0] ?? ''}${profile.lastName[0] ?? ''}`.toUpperCase();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F7F6F3_0%,#FAFAF8_40%,#F3F2EE_100%)]">
      <Header variant="solid" />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Icon name="ChevronRightIcon" size={12} className="text-muted shrink-0" />
            <span className="text-foreground font-600">Dashboard</span>
          </nav>

          {/* Welcome + quick actions */}
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-accent text-white shadow-premium mb-8 lg:mb-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(232,89,12,0.35),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\'%3E%3Cpath d=\'M0 40h40v1H0zM0 0h1v40H0z\'/%3E%3C/g%3E%3C/svg%3E')]" />
            <div className="relative px-6 py-8 sm:px-10 sm:py-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="text-white/70 text-sm font-600 uppercase tracking-widest mb-2">Member dashboard</p>
                <h1 className="font-display font-800 text-3xl sm:text-4xl tracking-tight mb-2">
                  {greeting}, {profile.firstName}
                </h1>
                <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed">
                  Manage reservations, update your profile, and review payments in one place. Reference prefix{' '}
                  <span className="font-mono text-white/90">AR-</span> on all bookings.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-600 backdrop-blur-sm border border-white/10">
                    <Icon name="ShieldCheckIcon" size={14} />
                    Verified email
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/30 px-3 py-1 text-xs font-600 border border-primary/40">
                    Gold tier
                  </span>
                  <span className="text-white/50 text-xs self-center">Member since Jan 2025</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/car-listing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-700 text-white shadow-primary hover:bg-primary-dark transition-colors"
                >
                  <Icon name="PlusIcon" size={18} />
                  New rental
                </Link>
                <a
                  href="mailto:support@thebethelsautorent.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-600 text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name="PaperAirplaneIcon" size={18} />
                  Support
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 lg:mb-10">
            {[
              {
                label: 'Active trips',
                value: String(stats.activeCount),
                sub: 'Current reservations',
                icon: 'CalendarIcon' as const,
              },
              {
                label: 'Completed',
                value: String(stats.pastCount),
                sub: 'Past rentals',
                icon: 'CheckCircleIcon' as const,
              },
              {
                label: 'Lifetime spend',
                value: `$${stats.lifetimeSpend.toLocaleString()}`,
                sub: 'Settled charges',
                icon: 'CreditCardIcon' as const,
              },
              {
                label: stats.pendingPayment ? 'Payment pending' : 'All clear',
                value: stats.pendingPayment ? `$${stats.pendingPayment.amount}` : '—',
                sub: stats.pendingPayment ? `Ref ${stats.pendingPayment.bookingId}` : 'No open invoices',
                icon: 'BoltIcon' as const,
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/80 bg-white p-4 sm:p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-card transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-700 uppercase tracking-wider text-muted">{s.label}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={s.icon} size={18} />
                  </span>
                </div>
                <p className="font-display font-800 text-2xl sm:text-3xl text-foreground tracking-tight">{s.value}</p>
                <p className="text-xs text-muted mt-1 leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Side nav — desktop */}
            <aside className="lg:w-56 shrink-0">
              <p className="text-xs font-700 uppercase tracking-widest text-muted mb-3 hidden lg:block">Menu</p>
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 scrollbar-hide">
                {TABS.map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-700 transition-all whitespace-nowrap lg:whitespace-normal border ${
                        active
                          ? 'bg-white border-primary/30 text-foreground shadow-sm ring-1 ring-primary/20'
                          : 'bg-white/60 border-transparent text-muted hover:border-border hover:bg-white hover:text-foreground'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                          active ? 'bg-primary text-white' : 'bg-muted-light text-muted'
                        }`}
                      >
                        <Icon name={tab.icon} size={18} />
                      </span>
                      <span className="hidden sm:inline lg:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {activeTab === 'Active Bookings' && (
                <div className="space-y-5">
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="font-display font-800 text-xl text-foreground">Active reservations</h2>
                      <p className="text-sm text-muted mt-1">Pickup instructions are sent 24h before your start date.</p>
                    </div>
                  </div>
                  {MOCK_ACTIVE_BOOKINGS.length === 0 ? (
                    <EmptyState
                      title="No active bookings"
                      desc="Browse our fleet and lock in your next trip."
                      actionHref="/car-listing"
                      actionLabel="Browse cars"
                    />
                  ) : (
                    MOCK_ACTIVE_BOOKINGS.map((booking) => {
                      const car = ALL_CARS.find((c) => c.id === booking.carId) || ALL_CARS[0];
                      return (
                        <BookingCard
                          key={booking.id}
                          booking={booking}
                          car={car}
                          variant="active"
                        />
                      );
                    })
                  )}
                </div>
              )}

              {activeTab === 'Past Bookings' && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display font-800 text-xl text-foreground">Trip history</h2>
                    <p className="text-sm text-muted mt-1">Completed and cancelled rentals for your records.</p>
                  </div>
                  {MOCK_PAST_BOOKINGS.length === 0 ? (
                    <EmptyState title="No past bookings" desc="Your history will appear here after your first rental." />
                  ) : (
                    MOCK_PAST_BOOKINGS.map((booking) => {
                      const car = ALL_CARS.find((c) => c.id === booking.carId) || ALL_CARS[0];
                      return (
                        <BookingCard
                          key={booking.id}
                          booking={booking}
                          car={car}
                          variant="past"
                        />
                      );
                    })
                  )}
                </div>
              )}

              {activeTab === 'Profile' && (
                <div>
                  <h2 className="font-display font-800 text-xl text-foreground mb-1">Account & profile</h2>
                  <p className="text-sm text-muted mb-6">Details used for contracts and driver verification.</p>
                  <div className="grid lg:grid-cols-[220px_1fr] gap-8">
                    <div className="rounded-3xl border border-border/80 bg-white p-6 shadow-sm text-center lg:text-left">
                      <div className="mx-auto lg:mx-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl font-display font-800 text-white shadow-primary mb-4">
                        {initials}
                      </div>
                      <p className="font-display font-800 text-lg text-foreground">
                        {profile.firstName} {profile.lastName}
                      </p>
                      <p className="text-sm text-muted mt-1 break-all">{profile.email}</p>
                      <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-muted">
                        <p className="flex items-center justify-center lg:justify-start gap-2">
                          <Icon name="ShieldCheckIcon" size={14} className="text-emerald-600 shrink-0" />
                          Identity on file
                        </p>
                        <p className="flex items-center justify-center lg:justify-start gap-2">
                          <Icon name="CreditCardIcon" size={14} className="text-primary shrink-0" />
                          Card on file ending 4242
                        </p>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-white p-6 md:p-8 shadow-sm space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">First name</label>
                          <input
                            type="text"
                            value={profile.firstName}
                            onChange={(e) => setProfile((p) => ({ ...p, firstName: e.target.value }))}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">Last name</label>
                          <input
                            type="text"
                            value={profile.lastName}
                            onChange={(e) => setProfile((p) => ({ ...p, lastName: e.target.value }))}
                            className="form-input"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                      <button type="button" className="btn-primary">
                        Save changes
                        <Icon name="CheckIcon" size={18} />
                      </button>
                      <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
                        <Link href="/bookings" className="btn-outline flex-1 justify-center py-3 rounded-2xl">
                          <Icon name="CalendarIcon" size={18} />
                          All bookings
                        </Link>
                        <Link href="/favorites" className="btn-outline flex-1 justify-center py-3 rounded-2xl">
                          <Icon name="BoltIcon" size={18} />
                          Favorites
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Payment History' && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                    <div>
                      <h2 className="font-display font-800 text-xl text-foreground">Payments & receipts</h2>
                      <p className="text-sm text-muted mt-1">Charges appear when a booking is confirmed or extended.</p>
                    </div>
                    <button
                      type="button"
                      className="text-sm font-700 text-primary hover:text-primary-dark self-start sm:self-auto"
                    >
                      Export CSV (coming soon)
                    </button>
                  </div>
                  <div className="rounded-3xl border border-border/80 bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[640px]">
                        <thead>
                          <tr className="bg-[#FAFAF8] border-b border-border text-left">
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Transaction</th>
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Booking</th>
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Amount</th>
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Date</th>
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Method</th>
                            <th className="py-4 px-5 font-700 text-foreground text-xs uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MOCK_PAYMENTS.map((payment, i) => (
                            <tr
                              key={payment.id}
                              className={`border-b border-border/80 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-muted-light/30'}`}
                            >
                              <td className="py-4 px-5">
                                <span className="font-mono text-xs font-600 text-foreground">{payment.id}</span>
                              </td>
                              <td className="py-4 px-5 font-mono text-xs">{payment.bookingId}</td>
                              <td className="py-4 px-5 font-display font-800">${payment.amount.toLocaleString()}</td>
                              <td className="py-4 px-5 text-muted">{payment.date}</td>
                              <td className="py-4 px-5 text-muted">{payment.method}</td>
                              <td className="py-4 px-5">
                                <span
                                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-700 ${
                                    payment.status === 'completed'
                                      ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80'
                                      : 'bg-amber-50 text-amber-900 ring-1 ring-amber-200/80'
                                  }`}
                                >
                                  {formatStatus(payment.status)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function BookingCard({
  booking,
  car,
  variant,
}: {
  booking: (typeof MOCK_ACTIVE_BOOKINGS)[number];
  car: (typeof ALL_CARS)[number];
  variant: 'active' | 'past';
}) {
  return (
    <article className="group relative rounded-3xl border border-border/80 bg-white shadow-sm overflow-hidden transition-all hover:shadow-card hover:border-primary/20">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-dark opacity-90" />
      <div className="p-5 sm:p-6 pl-6 sm:pl-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-44 aspect-[16/10] lg:aspect-auto lg:h-32 rounded-2xl overflow-hidden bg-muted-light ring-1 ring-black/5 shrink-0">
            <AppImage src={car.image} alt={`${car.brand} ${car.name}`} width={176} height={128} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-xs font-mono text-muted mb-1">{booking.id}</p>
                <h3 className="font-display font-800 text-lg text-foreground">
                  {car.brand} {car.name}
                </h3>
                <p className="text-sm text-muted mt-0.5">{car.year} · {car.type}</p>
              </div>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-700 ${STATUS_STYLE[booking.status] ?? 'bg-muted-light text-muted'}`}>
                {formatStatus(booking.status)}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2 text-muted">
                <Icon name="MapPinIcon" size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="text-foreground font-600">Pickup</span> · {booking.pickup}
                  <br />
                  <span className="text-foreground font-600">Return</span> · {booking.return}
                </span>
              </div>
              <div className="flex items-start gap-2 text-muted">
                <Icon name="CalendarIcon" size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {booking.pickupDate} → {booking.returnDate}
                  <span className="text-foreground font-600"> · {booking.days} days</span>
                </span>
              </div>
            </div>
            {variant === 'active' && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted mb-1">
                  <span>Trip window</span>
                  <span>Scheduled</span>
                </div>
                <div className="h-2 rounded-full bg-muted-light overflow-hidden">
                  <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary to-primary-light" />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row lg:flex-col justify-between lg:items-end gap-4 lg:border-l lg:border-border/80 lg:pl-6 pt-2 lg:pt-0 border-t border-border/80 lg:border-t-0">
            <div className="text-left lg:text-right">
              <p className="text-xs uppercase tracking-wider text-muted font-700">Total</p>
              <p className="font-display font-800 text-2xl text-foreground">${booking.total.toLocaleString()}</p>
              <p className="text-xs text-muted mt-0.5">Incl. taxes & fees</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {variant === 'active' ? (
                <>
                  <Link
                    href={`/booking-status/${booking.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-700 text-white hover:bg-primary transition-colors"
                  >
                    Track status
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                  <button
                    type="button"
                    className="rounded-xl border border-red-200 bg-red-50/80 px-4 py-2.5 text-sm font-700 text-red-700 hover:bg-red-100 transition-colors"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <Link
                  href={`/car-detail?carId=${car.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-700 text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Rent again
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptyState({
  title,
  desc,
  actionHref,
  actionLabel,
}: {
  title: string;
  desc: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-white/80 px-8 py-14 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted-light">
        <Icon name="CalendarIcon" size={28} className="text-muted" />
      </div>
      <h3 className="font-display font-800 text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted text-sm max-w-sm mx-auto mb-6">{desc}</p>
      {actionHref && actionLabel && (
        <Link href={actionHref} className="btn-primary inline-flex">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
