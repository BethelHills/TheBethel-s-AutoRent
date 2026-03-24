'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

export default function PaymentClient() {
  const searchParams = useSearchParams();
  const carId = parseInt(searchParams.get('carId') || '1', 10);
  const days = parseInt(searchParams.get('days') || '1', 10);
  const total = parseFloat(searchParams.get('total') || '0');
  const pickup = searchParams.get('pickup') || '';
  const returnLoc = searchParams.get('return') || '';
  const pickupDate = searchParams.get('pickupDate') || '';
  const returnDate = searchParams.get('returnDate') || '';

  const car = ALL_CARS.find((c) => c.id === carId) || ALL_CARS[0];
  const [status, setStatus] = useState<'form' | 'processing' | 'success' | 'error'>('form');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <Header variant="solid" />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} className="text-green-600" />
            </div>
            <h1 className="font-display font-800 text-3xl text-foreground mb-4">Booking Confirmed!</h1>
            <p className="text-muted mb-8">
              Thank you for your booking. A confirmation email has been sent to your inbox.
            </p>
            <div className="bg-muted-light rounded-2xl p-6 text-left mb-8">
              <p className="font-700 text-foreground mb-2">{car.year} {car.brand} {car.name}</p>
              <p className="text-sm text-muted">{pickup} → {returnLoc}</p>
              <p className="text-sm text-muted mt-1">{pickupDate} to {returnDate} ({days} days)</p>
              <p className="font-700 text-foreground mt-1">Total: ${total}</p>
              <p className="text-xs text-muted mt-2">Booking ID: #AR-{Date.now().toString(36).toUpperCase()}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bookings" className="btn-primary justify-center">
                View My Bookings
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link href="/car-listing" className="btn-outline justify-center">
                Browse More Cars
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-800 text-3xl text-foreground mb-8">Secure Payment</h1>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="LockClosedIcon" size={24} className="text-primary" />
                  <span className="font-700 text-foreground">Your payment is secure</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-700 text-muted uppercase block mb-2">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                      placeholder="4242 4242 4242 4242"
                      className="form-input"
                      maxLength={19}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Expiry</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="MM/YY"
                        className="form-input"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">CVC</label>
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="123"
                        className="form-input"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-700 text-muted uppercase block mb-2">Name on Card</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === 'processing'}
                  className="w-full btn-primary justify-center py-4 mt-6 rounded-2xl disabled:opacity-70"
                >
                  {status === 'processing' ? (
                    <>Processing... <span className="animate-pulse">...</span></>
                  ) : (
                    <>Pay ${total} <Icon name="LockClosedIcon" size={18} /></>
                  )}
                </button>
                <p className="text-xs text-muted mt-3 leading-relaxed">
                  Secure payment powered by Stripe. Your payment information is encrypted and never stored on our
                  servers.
                </p>
              </form>
            </div>
            <div className="lg:w-80 shrink-0">
              <div className="bg-white rounded-3xl border border-border p-6 shadow-card">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-14 rounded-xl overflow-hidden bg-muted-light">
                    <AppImage src={car.image} alt={car.name} width={80} height={56} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-700 text-foreground">{car.brand} {car.name}</p>
                    <p className="text-sm text-muted">{days} days</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted">Pickup</span>
                    <span className="font-600">{pickup}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted">Return</span>
                    <span className="font-600">{returnLoc}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-700">Total</span>
                    <span className="font-display font-800 text-xl">${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
