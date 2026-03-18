import type { Metadata } from 'next';
import CarListingClient from './components/CarListingClient';

export const metadata: Metadata = {
  title: 'Car Listing – TheBethel\'s AutoRent',
  description: 'Browse and rent cars',
};

export default function CarListingPage() {
  return <CarListingClient />;
}
