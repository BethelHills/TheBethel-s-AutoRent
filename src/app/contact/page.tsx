import type { Metadata } from 'next';
import ContactClient from './components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us – TheBethels AutoRent',
  description: 'Reach TheBethels AutoRent for bookings, billing, and support. Email, phone, and office details.',
};

export default function ContactPage() {
  return <ContactClient />;
}
