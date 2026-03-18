import type { Metadata } from 'next';
import FavoritesClient from './components/FavoritesClient';

export const metadata: Metadata = {
  title: 'My Favorites – TheBethel\'s AutoRent',
  description: 'Your saved cars',
};

export default function FavoritesPage() {
  return <FavoritesClient />;
}
