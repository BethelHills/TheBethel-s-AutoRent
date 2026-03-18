'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

const LOCATIONS = ['Los Angeles (LAX)', 'Los Angeles (Downtown)', 'San Francisco (SFO)', 'San Diego (SAN)', 'New York (JFK)', 'Chicago (ORD)', 'Miami (MIA)'];

export default function BookingClient() {
  const searchParams = useSearchParams();
  const carId = parseInt(searchParams.get('carId') || '1', 10);
  const car = ALL_CARS.find((c) => c.id === carId) || ALL_CARS[0];

  const [step, setStep] = useState(1);
  const [pickupLocation, setPickupLocation] = useState('Los Angeles (LAX)');
  const [returnLocation, setReturnLocation] = useState('Los Angeles (LAX)');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [driver, setDriver] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    licenseCountry: 'US',
  });

  const days = pickupDate && returnDate ? Math.max(1, Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24))) : 1;
  const subtotal = days * car.pricePerDay;
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const serviceFee = 18;
  const total = subtotal - discount + serviceFee;

  const canProceedStep1 = pickupLocation && returnLocation && pickupDate && returnDate && new Date(returnDate) > new Date(pickupDate);
  const canProceedStep2 = driver.firstName && driver.lastName && driver.email && driver.phone && driver.licenseNumber;

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <Link href="/car-listing" className="hover:text-foreground">Cars</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <Link href="/car-detail" className="hover:text-foreground">Car Details</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-600">Booking</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Form */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-border p-6 md:p-8 shadow-card overflow-hidden">
                <div className="flex gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-700 text-sm transition-colors ${step === 1 ? 'bg-primary text-white' : 'bg-muted-light text-muted'}`}
                  >
                    1. Location & Dates
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-700 text-sm transition-colors ${step === 2 ? 'bg-primary text-white' : 'bg-muted-light text-muted'}`}
                  >
                    2. Driver Details
                  </button>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Pickup Location</label>
                      <div className="relative">
                        <Icon name="MapPinIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                        <select
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="form-input pl-11"
                        >
                          {LOCATIONS.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Return Location</label>
                      <div className="relative">
                        <Icon name="MapPinIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                        <select
                          value={returnLocation}
                          onChange={(e) => setReturnLocation(e.target.value)}
                          className="form-input pl-11"
                        >
                          {LOCATIONS.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
                      <div className="min-w-0 overflow-hidden">
                        <label className="text-xs font-700 text-muted uppercase block mb-2">Pickup Date</label>
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="form-input w-full max-w-full min-w-0"
                        />
                      </div>
                      <div className="min-w-0 overflow-hidden">
                        <label className="text-xs font-700 text-muted uppercase block mb-2">Return Date</label>
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          min={pickupDate || new Date().toISOString().split('T')[0]}
                          className="form-input w-full max-w-full min-w-0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Discount Code</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          placeholder="Enter code"
                          className="form-input flex-1"
                        />
                        <button
                          type="button"
                          onClick={() => setDiscountApplied(true)}
                          className="px-4 py-2.5 bg-muted-light rounded-xl font-700 hover:bg-border transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {discountApplied && <p className="text-green-600 text-sm mt-1">10% discount applied!</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!canProceedStep1}
                      className="btn-primary py-3.5 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Driver Details
                      <Icon name="ArrowRightIcon" size={18} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-700 text-muted uppercase block mb-2">First Name</label>
                        <input
                          type="text"
                          value={driver.firstName}
                          onChange={(e) => setDriver((d) => ({ ...d, firstName: e.target.value }))}
                          placeholder="John"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-700 text-muted uppercase block mb-2">Last Name</label>
                        <input
                          type="text"
                          value={driver.lastName}
                          onChange={(e) => setDriver((d) => ({ ...d, lastName: e.target.value }))}
                          placeholder="Doe"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Email</label>
                      <input
                        type="email"
                        value={driver.email}
                        onChange={(e) => setDriver((d) => ({ ...d, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Phone</label>
                      <input
                        type="tel"
                        value={driver.phone}
                        onChange={(e) => setDriver((d) => ({ ...d, phone: e.target.value }))}
                        placeholder="+1 (555) 000-0000"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">Driver License Number</label>
                      <input
                        type="text"
                        value={driver.licenseNumber}
                        onChange={(e) => setDriver((d) => ({ ...d, licenseNumber: e.target.value }))}
                        placeholder="D1234567"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase block mb-2">License Country</label>
                      <select
                        value={driver.licenseCountry}
                        onChange={(e) => setDriver((d) => ({ ...d, licenseCountry: e.target.value }))}
                        className="form-input"
                      >
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline">
                        Back
                      </button>
                      <Link
                        href={`/payment?carId=${car.id}&days=${days}&total=${total}&pickup=${encodeURIComponent(pickupLocation)}&return=${encodeURIComponent(returnLocation)}&pickupDate=${pickupDate}&returnDate=${returnDate}`}
                        className={`btn-primary py-3.5 px-6 rounded-xl ${!canProceedStep2 ? 'pointer-events-none opacity-50' : ''}`}
                      >
                        Proceed to Payment
                        <Icon name="LockClosedIcon" size={18} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:w-96 shrink-0">
              <div className="sticky-sidebar bg-white rounded-3xl border border-border p-6 shadow-card">
                <div className="flex gap-4 mb-6">
                  <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-muted-light">
                    <AppImage src={car.image} alt={car.name} width={96} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-700 text-primary text-sm">{car.brand}</p>
                    <p className="font-display font-700 text-foreground">{car.name}</p>
                    <p className="text-sm text-muted">{car.type}</p>
                  </div>
                </div>
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">${car.pricePerDay}/day × {days} days</span>
                    <span className="font-700">${subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount (10%)</span>
                      <span className="font-700">-${discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Service fee</span>
                    <span className="font-700">${serviceFee}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-700 text-foreground">Total</span>
                    <span className="font-display font-800 text-lg">${total}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted">
                  <Icon name="ShieldCheckIcon" size={14} />
                  Secure payment · Free cancellation up to 24h before
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
