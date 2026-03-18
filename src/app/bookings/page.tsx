import type { Metadata } from 'next';
import BookingsClient from './components/BookingsClient';

export const metadata: Metadata = {
  title: 'My Bookings – TheBethel\'s AutoRent',
  description: 'View your booking history and status',
};

export default function BookingsPage() {
  return <BookingsClient />;
}
