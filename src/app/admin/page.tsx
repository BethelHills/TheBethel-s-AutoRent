import type { Metadata } from 'next';
import AdminClient from './components/AdminClient';

export const metadata: Metadata = {
  title: 'Admin Dashboard – TheBethel\'s AutoRent',
  description: 'Manage cars, bookings, and users',
};

export default function AdminPage() {
  return <AdminClient />;
}
