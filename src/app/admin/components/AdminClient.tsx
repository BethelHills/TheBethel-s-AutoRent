'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const TABS = ['Overview', 'Cars', 'Bookings', 'Payments', 'Users', 'Availability'] as const;

const MOCK_STATS = [
  { label: 'Total Bookings', value: '1,247', change: '+12%' },
  { label: 'Revenue', value: '$186,420', change: '+8%' },
  { label: 'Active Cars', value: '24', change: '—' },
  { label: 'Users', value: '892', change: '+23%' },
];

const MOCK_BOOKINGS = [
  { id: 'AR-X7K2M', carId: 1, customer: 'john@example.com', pickup: 'Los Angeles (LAX)', return: 'Los Angeles (LAX)', pickupDate: '2026-03-20', returnDate: '2026-03-25', days: 5, total: 963, status: 'confirmed' },
  { id: 'AR-P9N4L', carId: 2, customer: 'jane@example.com', pickup: 'San Francisco (SFO)', return: 'San Francisco (SFO)', pickupDate: '2026-02-15', returnDate: '2026-02-17', days: 2, total: 308, status: 'completed' },
  { id: 'AR-Q2R8T', carId: 3, customer: 'mike@example.com', pickup: 'Denver (DIA)', return: 'Denver (DIA)', pickupDate: '2026-04-01', returnDate: '2026-04-05', days: 4, total: 878, status: 'pending' },
  { id: 'AR-M3K9P', carId: 5, customer: 'sarah@example.com', pickup: 'New York (JFK)', return: 'New York (JFK)', pickupDate: '2026-01-10', returnDate: '2026-01-12', days: 2, total: 530, status: 'cancelled' },
  { id: 'AR-B4L1Q', carId: 7, customer: 'david@example.com', pickup: 'Miami (MIA)', return: 'Miami (MIA)', pickupDate: '2026-05-10', returnDate: '2026-05-15', days: 5, total: 2125, status: 'confirmed' },
];

const MOCK_PAYMENTS = [
  { id: 'PAY-001', bookingId: 'AR-X7K2M', customer: 'john@example.com', amount: 963, date: '2026-03-15', method: 'Visa •••• 4242', status: 'completed' },
  { id: 'PAY-002', bookingId: 'AR-P9N4L', customer: 'jane@example.com', amount: 308, date: '2026-02-10', method: 'Visa •••• 4242', status: 'completed' },
  { id: 'PAY-003', bookingId: 'AR-Q2R8T', customer: 'mike@example.com', amount: 878, date: '2026-03-18', method: 'Mastercard •••• 5555', status: 'pending' },
  { id: 'PAY-004', bookingId: 'AR-B4L1Q', customer: 'david@example.com', amount: 2125, date: '2026-04-20', method: 'Amex •••• 1005', status: 'completed' },
];

const MOCK_USERS = [
  { id: 'U001', name: 'John Doe', email: 'john@example.com', phone: '+1 555-123-4567', bookings: 3, joined: '2025-01-15' },
  { id: 'U002', name: 'Jane Smith', email: 'jane@example.com', phone: '+1 555-234-5678', bookings: 5, joined: '2025-02-20' },
  { id: 'U003', name: 'Mike Johnson', email: 'mike@example.com', phone: '+1 555-345-6789', bookings: 2, joined: '2025-03-10' },
  { id: 'U004', name: 'Sarah Williams', email: 'sarah@example.com', phone: '+1 555-456-7890', bookings: 1, joined: '2025-04-05' },
  { id: 'U005', name: 'David Brown', email: 'david@example.com', phone: '+1 555-567-8901', bookings: 4, joined: '2025-05-12' },
];

const BOOKING_STATUS_COLORS: Record<string, string> = {
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-muted-light text-muted',
  pending: 'bg-amber-100 text-amber-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function AdminClient() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Overview');

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display font-800 text-3xl text-foreground">Admin Dashboard</h1>
            <Link href="/" className="text-sm font-600 text-muted hover:text-foreground">
              ← Back to site
            </Link>
          </div>

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

          {activeTab === 'Overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_STATS.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-border p-6 shadow-card">
                    <p className="text-sm text-muted font-600 mb-1">{stat.label}</p>
                    <p className="font-display font-800 text-2xl text-foreground">{stat.value}</p>
                    {stat.change !== '—' && (
                      <p className="text-sm text-green-600 font-600 mt-1">{stat.change} vs last month</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-border p-6 shadow-card">
                <h2 className="font-display font-700 text-lg text-foreground mb-4">Recent Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 font-700">ID</th>
                        <th className="text-left py-3 font-700">Car</th>
                        <th className="text-left py-3 font-700">Customer</th>
                        <th className="text-left py-3 font-700">Dates</th>
                        <th className="text-left py-3 font-700">Total</th>
                        <th className="text-left py-3 font-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['AR-X7K2M', 'AR-P9N4L', 'AR-Q2R8T'].map((id, i) => (
                        <tr key={id} className="border-b border-border last:border-0">
                          <td className="py-3 font-600">{id}</td>
                          <td className="py-3">{ALL_CARS[i]?.brand} {ALL_CARS[i]?.name}</td>
                          <td className="py-3">customer@email.com</td>
                          <td className="py-3">Mar 20 – Mar 25</td>
                          <td className="py-3 font-600">$963</td>
                          <td className="py-3"><span className="badge badge-available">Confirmed</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Cars' && (
            <div className="bg-white rounded-2xl border border-border p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-700 text-lg">All Cars</h2>
                <button type="button" className="btn-primary py-2 px-4 rounded-xl text-sm">
                  <Icon name="PlusIcon" size={16} />
                  Add Car
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ALL_CARS.map((car) => (
                  <div key={car.id} className="border border-border rounded-xl p-4">
                    <p className="font-700 text-foreground">{car.brand} {car.name}</p>
                    <p className="text-sm text-muted">{car.type} · ${car.pricePerDay}/day</p>
                    <div className="flex gap-2 mt-3">
                      <button type="button" className="btn-outline py-1.5 px-3 text-xs rounded-lg">Edit</button>
                      <button type="button" className="text-red-600 text-xs font-600 hover:underline">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Bookings' && (
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="font-display font-700 text-lg">Manage Bookings</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by ID or customer..."
                    className="form-input max-w-xs py-2 text-sm"
                  />
                  <select className="form-input max-w-[140px] py-2 text-sm">
                    <option value="">All status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted-light/50">
                      <th className="text-left py-3 px-6 font-700">ID</th>
                      <th className="text-left py-3 px-6 font-700">Car</th>
                      <th className="text-left py-3 px-6 font-700">Customer</th>
                      <th className="text-left py-3 px-6 font-700">Dates</th>
                      <th className="text-left py-3 px-6 font-700">Total</th>
                      <th className="text-left py-3 px-6 font-700">Status</th>
                      <th className="text-left py-3 px-6 font-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_BOOKINGS.map((booking) => {
                      const car = ALL_CARS.find((c) => c.id === booking.carId) || ALL_CARS[0];
                      return (
                        <tr key={booking.id} className="border-b border-border last:border-0 hover:bg-muted-light/30">
                          <td className="py-4 px-6 font-600">{booking.id}</td>
                          <td className="py-4 px-6">{car.brand} {car.name}</td>
                          <td className="py-4 px-6">{booking.customer}</td>
                          <td className="py-4 px-6">{booking.pickupDate} – {booking.returnDate}</td>
                          <td className="py-4 px-6 font-600">${booking.total}</td>
                          <td className="py-4 px-6">
                            <span className={`badge ${BOOKING_STATUS_COLORS[booking.status] || 'bg-muted-light'}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex gap-2">
                              <Link href={`/booking-status/${booking.id}`} className="text-primary text-xs font-600 hover:underline">View</Link>
                              <button type="button" className="text-muted text-xs font-600 hover:text-foreground">Edit</button>
                              {booking.status !== 'cancelled' && (
                                <button type="button" className="text-red-600 text-xs font-600 hover:underline">Cancel</button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Payments' && (
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="font-display font-700 text-lg">Manage Payments</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by ID..."
                    className="form-input max-w-xs py-2 text-sm"
                  />
                  <select className="form-input max-w-[140px] py-2 text-sm">
                    <option value="">All status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted-light/50">
                      <th className="text-left py-3 px-6 font-700">Payment ID</th>
                      <th className="text-left py-3 px-6 font-700">Booking</th>
                      <th className="text-left py-3 px-6 font-700">Customer</th>
                      <th className="text-left py-3 px-6 font-700">Amount</th>
                      <th className="text-left py-3 px-6 font-700">Date</th>
                      <th className="text-left py-3 px-6 font-700">Method</th>
                      <th className="text-left py-3 px-6 font-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_PAYMENTS.map((payment) => (
                      <tr key={payment.id} className="border-b border-border last:border-0 hover:bg-muted-light/30">
                        <td className="py-4 px-6 font-600">{payment.id}</td>
                        <td className="py-4 px-6">{payment.bookingId}</td>
                        <td className="py-4 px-6">{payment.customer}</td>
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
            </div>
          )}

          {activeTab === 'Users' && (
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="font-display font-700 text-lg">Manage Users</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="form-input max-w-xs py-2 text-sm"
                  />
                  <button type="button" className="btn-primary py-2 px-4 rounded-xl text-sm">
                    <Icon name="PlusIcon" size={16} />
                    Add User
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted-light/50">
                      <th className="text-left py-3 px-6 font-700">ID</th>
                      <th className="text-left py-3 px-6 font-700">Name</th>
                      <th className="text-left py-3 px-6 font-700">Email</th>
                      <th className="text-left py-3 px-6 font-700">Phone</th>
                      <th className="text-left py-3 px-6 font-700">Bookings</th>
                      <th className="text-left py-3 px-6 font-700">Joined</th>
                      <th className="text-left py-3 px-6 font-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_USERS.map((user) => (
                      <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted-light/30">
                        <td className="py-4 px-6 font-600">{user.id}</td>
                        <td className="py-4 px-6">{user.name}</td>
                        <td className="py-4 px-6">{user.email}</td>
                        <td className="py-4 px-6">{user.phone}</td>
                        <td className="py-4 px-6">{user.bookings}</td>
                        <td className="py-4 px-6">{user.joined}</td>
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            <button type="button" className="text-primary text-xs font-600 hover:underline">View</button>
                            <button type="button" className="text-muted text-xs font-600 hover:text-foreground">Edit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Availability' && (
            <div className="bg-white rounded-2xl border border-border p-12 shadow-card text-center">
              <Icon name="CogIcon" size={48} className="text-muted mx-auto mb-4" />
              <h2 className="font-display font-700 text-xl text-foreground mb-2">Availability Management</h2>
              <p className="text-muted">Connect a database (e.g. Supabase) to manage car availability and blocked dates.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
