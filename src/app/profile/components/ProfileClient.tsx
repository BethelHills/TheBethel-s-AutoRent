'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export default function ProfileClient() {
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
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display font-800 text-3xl text-foreground mb-8">My Profile</h1>
          <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-card space-y-6">
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
          </div>
          <div className="mt-8 flex gap-4">
            <Link href="/dashboard" className="btn-outline flex-1 justify-center">
              <Icon name="Squares2X2Icon" size={18} />
              Dashboard
            </Link>
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
      </main>
      <Footer />
    </div>
  );
}
