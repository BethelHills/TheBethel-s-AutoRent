import type { Metadata } from 'next';
import ProfileClient from './components/ProfileClient';

export const metadata: Metadata = {
  title: 'My Profile – TheBethel\'s AutoRent',
  description: 'Manage your profile and preferences',
};

export default function ProfilePage() {
  return <ProfileClient />;
}
