import type { Metadata } from 'next';
import { Suspense } from 'react';
import CarListingClient from './components/CarListingClient';

export const metadata: Metadata = {
  title: 'Car Listing – TheBethel\'s AutoRent',
  description: 'Browse and rent cars',
};

export default function CarListingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CarListingClient />
    </Suspense>
  );
}
