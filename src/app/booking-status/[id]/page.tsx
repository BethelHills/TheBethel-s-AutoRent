import type { Metadata } from 'next';
import BookingStatusClient from './components/BookingStatusClient';

export const metadata: Metadata = {
  title: 'Booking Status – TheBethel\'s AutoRent',
  description: 'Track your booking status',
};

export default async function BookingStatusPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <BookingStatusClient id={id} />;
}
