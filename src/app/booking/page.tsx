import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingClient from './components/BookingClient';

export const metadata: Metadata = {
  title: 'Complete Booking – TheBethel\'s AutoRent',
  description: 'Select locations, dates, and enter your details to complete your car rental',
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingClient />
    </Suspense>
  );
}
