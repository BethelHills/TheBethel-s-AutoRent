import type { Metadata } from 'next';
import CarDetailClient from './components/CarDetailClient';

export const metadata: Metadata = {
  title: 'Car Detail – TheBethel\'s AutoRent',
  description: 'View car details and book your rental',
};

export default function CarDetailPage() {
  return <CarDetailClient />;
}
