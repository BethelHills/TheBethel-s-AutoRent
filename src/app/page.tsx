import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePageClient from './components/HomePageClient';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="transparent" />
      <HomePageClient />
      <Footer />
    </div>
  );
}
