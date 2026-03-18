import type { Metadata } from 'next';
import DashboardClient from './components/DashboardClient';

export const metadata: Metadata = {
  title: 'My Dashboard – TheBethel\'s AutoRent',
  description: 'Manage your bookings, profile, and payment history',
};

export default function DashboardPage() {
  return <DashboardClient />;
}
