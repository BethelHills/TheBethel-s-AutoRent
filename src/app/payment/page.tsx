import type { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentClient from './components/PaymentClient';

export const metadata: Metadata = {
  title: 'Payment – TheBethel\'s AutoRent',
  description: 'Secure payment for your car rental',
};

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentClient />
    </Suspense>
  );
}
