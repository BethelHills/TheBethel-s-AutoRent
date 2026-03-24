import type { Metadata } from 'next';
import PopularRentalsClient from './components/PopularRentalsClient';

export const metadata: Metadata = {
  title: 'Popular Rentals – TheBethels AutoRent',
  description:
    'Top-rated, most-booked cars available now: economy, SUVs, luxury, vans, and electric. Book with confidence.',
  openGraph: {
    title: 'Popular Rentals – TheBethels AutoRent',
    description: 'Highest demand, best ratings, available today—economy through electric.',
  },
};

export default function PopularRentalsPage() {
  return <PopularRentalsClient />;
}
