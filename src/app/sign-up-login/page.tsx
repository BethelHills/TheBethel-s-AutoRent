import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sign In – TheBethel\'s AutoRent',
  description: 'Sign in or create an account',
};

export default function SignUpLoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-display font-800 text-3xl text-foreground mb-4">
            Sign In
          </h1>
          <p className="text-muted mb-8">
            Sign in or create an account to save your bookings and preferences.
          </p>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <p className="text-muted text-sm mb-6">
              Authentication coming soon. Return to browse cars.
            </p>
            <Link
              href="/car-listing"
              className="btn-primary justify-center w-full py-3 rounded-xl"
            >
              Back to Car Listing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
