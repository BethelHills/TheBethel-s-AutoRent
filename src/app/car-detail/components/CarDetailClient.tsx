'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { ALL_CARS } from '@/lib/cars';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface SimilarCar {
  id: number;
  name: string;
  brand: string;
  pricePerDay: number;
  image: string;
  type: string;
}

// ─── Mock Data (extended details for car 1) ───────────────────────────────────

const CAR_DETAILS: Record<number, Partial<{
  name: string;
  description: string;
  images: string[];
  engineSize: string;
  horsepower: number;
  acceleration: string;
  topSpeed: string;
  fuelEconomy: string;
  doors: number;
  pricePerWeek: number;
  deposit: number;
  pickupAddress: string;
  features: string[];
  included: string[];
  notIncluded: string[];
}>> = {
  1: {
    name: 'Mustang GT Convertible',
    description: 'Experience the iconic American muscle car in its most thrilling form. The 2024 Ford Mustang GT Convertible combines raw power with open-air freedom. With a 5.0L V8 engine producing 450 horsepower and a responsive 10-speed automatic transmission, every drive is an event. Available at our LAX pickup location.',
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=1200&q=85',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85',
    ],
    engineSize: '5.0L V8',
    horsepower: 450,
    acceleration: '4.2s 0-60',
    topSpeed: '155 mph',
    fuelEconomy: '15 / 24 mpg',
    doors: 2,
    pricePerWeek: 1150,
    deposit: 500,
    pickupAddress: '1234 Sunset Blvd, Los Angeles, CA 90028',
    features: ['Apple CarPlay & Android Auto', 'B&O Premium Sound System', 'Adaptive Cruise Control', 'Lane Keep Assist', 'Blind Spot Monitoring', 'Reverse Camera', 'Heated & Cooled Seats', 'Convertible Soft Top', 'Sport+ Drive Mode', 'Track Apps'],
    included: ['Unlimited mileage', 'Roadside assistance 24/7', 'Basic insurance coverage', 'Second driver (free)', 'Full tank of fuel'],
    notIncluded: ['GPS navigation (add $8/day)', 'Child seat (add $10/day)', 'Premium insurance (add $25/day)'],
  },
};

function getCarForDetail(carId: number) {
  const base = ALL_CARS.find((c) => c.id === carId) || ALL_CARS[0];
  const details = CAR_DETAILS[base.id] || {};
  return {
    ...base,
    name: details.name || base.name,
    description: details.description || 'Premium rental vehicle in excellent condition.',
    images: details.images || [base.image, base.image, base.image],
    engineSize: details.engineSize || '—',
    horsepower: details.horsepower ?? 0,
    acceleration: details.acceleration || '—',
    topSpeed: details.topSpeed || '—',
    fuelEconomy: details.fuelEconomy || '—',
    doors: details.doors ?? 4,
    pricePerWeek: details.pricePerWeek ?? base.pricePerDay * 7,
    deposit: details.deposit ?? 500,
    pickupAddress: details.pickupAddress || '—',
    features: details.features || base.features,
    included: details.included || ['Unlimited mileage', 'Basic insurance', '24/7 support'],
    notIncluded: details.notIncluded || ['GPS (add-on)', 'Child seat (add-on)'],
  };
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Marcus Williams',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b4db813e-1773125103630.png',
    rating: 5,
    date: 'February 28, 2026',
    comment:
      'Absolutely incredible experience. The Mustang GT was in pristine condition, pickup was seamless at LAX, and the car performed flawlessly on PCH. AutoRent made the entire process effortless.',
    verified: true,
  },
  {
    id: 2,
    name: 'Sophia Nakamura',
    avatar: 'https://images.unsplash.com/photo-1723834084217-bb6c36701cc4',
    rating: 5,
    date: 'January 15, 2026',
    comment:
      'Rented for a weekend trip to Santa Barbara. The convertible top made the drive unforgettable. Car was spotless and had a full tank. Will definitely rent again.',
    verified: true,
  },
  {
    id: 3,
    name: 'Derek Johnson',
    avatar: 'https://images.unsplash.com/photo-1691118715233-dbb8248506ba',
    rating: 4,
    date: 'December 20, 2025',
    comment:
      'Great car, powerful and comfortable. Minor issue with the GPS setup but the support team resolved it immediately. Overall a fantastic rental experience.',
    verified: true,
  },
];

const SIMILAR_CARS: SimilarCar[] = [
  {
    id: 2,
    name: 'Porsche 911',
    brand: 'Porsche',
    pricePerDay: 425,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    type: 'Sports',
  },
  {
    id: 3,
    name: 'BMW M4',
    brand: 'BMW',
    pricePerDay: 295,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80',
    type: 'Sports',
  },
  {
    id: 4,
    name: 'Chevrolet Camaro',
    brand: 'Chevrolet',
    pricePerDay: 155,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    type: 'Sports',
  },
];

// ─── Sub-Components ──────────────────────────────────────────────────────────

const StarRating: React.FC<{
  rating: number;
  size?: number;
  interactive?: boolean;
  onRate?: (r: number) => void;
}> = ({ rating, size = 16, interactive = false, onRate }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => interactive && onRate && onRate(star)}
        className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}
        aria-label={`${star} star`}
      >
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"
            fill={star <= Math.round(rating) ? '#F59E0B' : '#E5E7EB'}
          />
        </svg>
      </button>
    ))}
  </div>
);

const AvailabilityCalendar: React.FC<{
  selectedStart: number | null;
  selectedEnd: number | null;
  onSelect: (day: number) => void;
}> = ({ selectedStart, selectedEnd, onSelect }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const bookedDays = [5, 6, 7, 15, 16, 17, 28, 29];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-display font-700 text-sm">{MONTHS[month]} {year}</h4>
        <div className="flex gap-2">
          <button type="button" className="w-7 h-7 rounded-lg bg-muted-light flex items-center justify-center hover:bg-border transition-colors" aria-label="Previous month">
            <Icon name="ChevronLeftIcon" size={14} />
          </button>
          <button type="button" className="w-7 h-7 rounded-lg bg-muted-light flex items-center justify-center hover:bg-border transition-colors" aria-label="Next month">
            <Icon name="ChevronRightIcon" size={14} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs font-700 text-muted py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isBooked = bookedDays.includes(day);
          const isPast = day < today.getDate();
          const isStart = selectedStart === day;
          const isEnd = selectedEnd === day;
          const isInRange = selectedStart && selectedEnd && day > selectedStart && day < selectedEnd;
          return (
            <button
              key={day}
              type="button"
              disabled={isBooked || isPast}
              onClick={() => onSelect(day)}
              className={`calendar-day text-sm font-600 ${
                isStart || isEnd ? 'selected' : ''
              } ${isInRange ? 'in-range' : ''} ${
                isBooked ? 'disabled line-through' : ''
              } ${isPast ? 'disabled opacity-30' : ''}`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-muted-light border border-border line-through text-center text-[8px] leading-3">X</div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CarDetailClient() {
  const searchParams = useSearchParams();
  const carId = parseInt(searchParams.get('carId') || '1', 10);
  const CAR = getCarForDetail(carId);
  const [activeImage, setActiveImage] = useState(0);
  const [isFav, setIsFav] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reviews'>('overview');
  const [pickupDate, setPickupDate] = useState<number | null>(null);
  const [returnDate, setReturnDate] = useState<number | null>(null);
  const [calendarSelectingEnd, setCalendarSelectingEnd] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('Los Angeles (LAX)');
  const [returnLocation, setReturnLocation] = useState('Los Angeles (LAX)');
  const [userRating, setUserRating] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleCalendarSelect = (day: number) => {
    if (!pickupDate || calendarSelectingEnd) {
      if (!pickupDate) {
        setPickupDate(day);
        setCalendarSelectingEnd(true);
      } else {
        if (day > pickupDate) {
          setReturnDate(day);
          setCalendarSelectingEnd(false);
        } else {
          setPickupDate(day);
        }
      }
    } else {
      setPickupDate(day);
      setReturnDate(null);
      setCalendarSelectingEnd(true);
    }
  };

  const rentalDays = pickupDate && returnDate ? returnDate - pickupDate : 1;
  const totalPrice = rentalDays * CAR.pricePerDay;
  const today = new Date();
  const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formatDate = (day: number | null) =>
    day ? `${MONTHS_SHORT[today.getMonth()]} ${day}, ${today.getFullYear()}` : '— Select —';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 pb-4">
          <nav className="flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <Link href="/car-listing" className="hover:text-foreground transition-colors">Cars</Link>
            <Icon name="ChevronRightIcon" size={14} />
            <span className="text-foreground font-600">{CAR.brand} {CAR.name}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="flex flex-col xl:flex-row gap-10">
            {/* Left: Main Content */}
            <div className="flex-1 min-w-0">
              {/* Title + Actions */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 reveal-item">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-available">Available Now</span>
                    <span className="badge badge-popular">Top Pick</span>
                  </div>
                  <h1 className="font-display font-800 text-3xl md:text-4xl text-foreground leading-tight">
                    {CAR.year} {CAR.brand} {CAR.name}
                  </h1>
                  <div className="flex items-center gap-3 mt-2">
                    <StarRating rating={CAR.rating} size={16} />
                    <span className="text-sm font-700 text-foreground">{CAR.rating}</span>
                    <span className="text-sm text-muted">({CAR.reviewCount} reviews)</span>
                    <span className="text-border">·</span>
                    <div className="flex items-center gap-1 text-sm text-muted">
                      <Icon name="MapPinIcon" size={14} />
                      {CAR.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsFav(!isFav)}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isFav ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted hover:border-foreground hover:text-foreground'
                    }`}
                    aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <button type="button" className="w-10 h-10 rounded-full border border-border text-muted flex items-center justify-center hover:border-foreground hover:text-foreground transition-all" aria-label="Share this car">
                    <Icon name="ShareIcon" size={16} />
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="reveal-item mb-8">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-muted-light mb-3">
                  <AppImage
                    src={CAR.images[activeImage]}
                    alt={`${CAR.brand} ${CAR.name} - view ${activeImage + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover transition-all duration-500"
                    priority
                  />
                  <button
                    type="button"
                    onClick={() => setActiveImage((p) => Math.max(0, p - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <Icon name="ChevronLeftIcon" size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage((p) => Math.min(CAR.images.length - 1, p + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <Icon name="ChevronRightIcon" size={18} />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-700 px-3 py-1.5 rounded-full">
                    {activeImage + 1} / {CAR.images.length}
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {CAR.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`gallery-thumb shrink-0 w-20 h-14 ${activeImage === i ? 'active' : ''}`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <AppImage
                        src={img}
                        alt={`${CAR.name} thumbnail ${i + 1}`}
                        width={80}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="reveal-item mb-8">
                <div className="flex items-center gap-1 border-b border-border mb-6">
                  {(['overview', 'specs', 'reviews'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`tab-underline px-5 py-3 text-sm font-700 capitalize transition-colors duration-200 ${
                        activeTab === tab ? 'active text-foreground' : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {tab === 'reviews' ? `Reviews (${CAR.reviewCount})` : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-display font-700 text-xl text-foreground mb-3">About This Car</h2>
                      <p className="text-muted leading-relaxed">{CAR.description}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-700 text-base text-foreground mb-4">Quick Specs</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { icon: 'CogIcon', label: 'Transmission', value: CAR.transmission },
                          { icon: 'BoltIcon', label: 'Fuel', value: CAR.fuel },
                          { icon: 'UserGroupIcon', label: 'Seats', value: `${CAR.seats} passengers` },
                          { icon: 'CalendarIcon', label: 'Year', value: String(CAR.year) },
                        ].map((item) => (
                          <div key={item.label} className="bg-muted-light rounded-2xl p-4">
                            <Icon name={item.icon as never} size={20} className="text-primary mb-2" />
                            <p className="text-xs text-muted font-600 mb-0.5">{item.label}</p>
                            <p className="text-sm font-700 text-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-700 text-base text-foreground mb-4">Features & Amenities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {CAR.features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon name="CheckIcon" size={11} className="text-primary" />
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-2xl p-5">
                        <h3 className="font-display font-700 text-sm text-green-800 mb-3 flex items-center gap-2">
                          <Icon name="CheckCircleIcon" size={16} className="text-green-600" />
                          Included
                        </h3>
                        <ul className="space-y-2">
                          {CAR.included.map((item) => (
                            <li key={item} className="text-sm text-green-700 flex items-start gap-2">
                              <Icon name="CheckIcon" size={13} className="text-green-500 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-2xl p-5">
                        <h3 className="font-display font-700 text-sm text-orange-800 mb-3 flex items-center gap-2">
                          <Icon name="PlusCircleIcon" size={16} className="text-orange-600" />
                          Optional Add-ons
                        </h3>
                        <ul className="space-y-2">
                          {CAR.notIncluded.map((item) => (
                            <li key={item} className="text-sm text-orange-700 flex items-start gap-2">
                              <Icon name="PlusIcon" size={13} className="text-orange-500 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Specs Tab */}
                {activeTab === 'specs' && (
                  <div className="space-y-6">
                    <h2 className="font-display font-700 text-xl text-foreground">Full Specifications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { label: 'Brand', value: CAR.brand },
                        { label: 'Model', value: CAR.name },
                        { label: 'Year', value: String(CAR.year) },
                        { label: 'Type', value: CAR.type },
                        { label: 'Engine', value: CAR.engineSize },
                        { label: 'Horsepower', value: `${CAR.horsepower} HP` },
                        { label: '0-60 mph', value: CAR.acceleration },
                        { label: 'Top Speed', value: CAR.topSpeed },
                        { label: 'Transmission', value: CAR.transmission },
                        { label: 'Fuel Type', value: CAR.fuel },
                        { label: 'Fuel Economy', value: CAR.fuelEconomy },
                        { label: 'Seats', value: `${CAR.seats} passengers` },
                        { label: 'Doors', value: String(CAR.doors) },
                        { label: 'Pickup Location', value: CAR.location },
                      ].map((spec) => (
                        <div key={spec.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                          <span className="text-sm text-muted font-600">{spec.label}</span>
                          <span className="text-sm font-700 text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-8 p-6 bg-muted-light rounded-2xl">
                      <div className="text-center">
                        <div className="font-display font-800 text-6xl text-foreground leading-none mb-2">{CAR.rating}</div>
                        <StarRating rating={CAR.rating} size={20} />
                        <p className="text-sm text-muted mt-2">{CAR.reviewCount} reviews</p>
                      </div>
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 7 : star === 2 ? 2 : 1;
                          return (
                            <div key={star} className="flex items-center gap-3">
                              <span className="text-xs font-700 text-muted w-4">{star}</span>
                              <div className="flex-1 bg-border rounded-full h-2 overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full transition-all duration-700"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted w-8">{pct}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-5">
                      {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white border border-border rounded-2xl p-5">
                          <div className="flex items-start gap-4 mb-3">
                            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                              <AppImage
                                src={review.avatar}
                                alt={`${review.name} profile photo`}
                                width={44}
                                height={44}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-display font-700 text-sm text-foreground">{review.name}</span>
                                {review.verified && (
                                  <span className="text-xs text-green-600 font-700 flex items-center gap-1">
                                    <Icon name="CheckBadgeIcon" size={13} />
                                    Verified
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-0.5">
                                <StarRating rating={review.rating} size={13} />
                                <span className="text-xs text-muted">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted leading-relaxed">{review.comment}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted-light rounded-2xl p-6">
                      <h3 className="font-display font-700 text-base text-foreground mb-4">Leave a Review</h3>
                      <div className="mb-4">
                        <p className="text-sm text-muted mb-2">Your rating</p>
                        <StarRating rating={userRating} size={28} interactive onRate={setUserRating} />
                      </div>
                      <textarea
                        placeholder="Share your experience with this car..."
                        rows={4}
                        className="form-input resize-none mb-4"
                        aria-label="Your review"
                      />
                      <button type="button" className="btn-primary">
                        Submit Review
                        <Icon name="PaperAirplaneIcon" size={15} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Availability Calendar */}
              <div className="reveal-item bg-white border border-border rounded-3xl p-6 mb-8">
                <h2 className="font-display font-700 text-lg text-foreground mb-5">Availability Calendar</h2>
                <AvailabilityCalendar
                  selectedStart={pickupDate}
                  selectedEnd={returnDate}
                  onSelect={handleCalendarSelect}
                />
                {pickupDate && (
                  <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/20 text-sm text-foreground font-600">
                    {returnDate
                      ? `${formatDate(pickupDate)} → ${formatDate(returnDate)} (${rentalDays} days)`
                      : `Pickup: ${formatDate(pickupDate)} — Select return date`}
                  </div>
                )}
              </div>

              {/* Similar Cars */}
              <div className="reveal-item">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-display font-700 text-xl text-foreground">Similar Cars</h2>
                  <Link href="/car-listing" className="text-sm font-700 text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                    View all
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SIMILAR_CARS.map((car) => (
                    <Link href="/car-detail" key={car.id} className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors card-lift">
                      <div className="aspect-[16/10] overflow-hidden bg-muted-light">
                        <AppImage
                          src={car.image}
                          alt={`${car.brand} ${car.name} similar car`}
                          width={300}
                          height={188}
                          className="w-full h-full object-cover img-zoom"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-700 text-primary uppercase tracking-wider mb-0.5">{car.brand}</p>
                        <p className="font-display font-700 text-sm text-foreground">{car.name}</p>
                        <p className="text-sm font-700 text-foreground mt-1">${car.pricePerDay}<span className="text-xs text-muted font-500">/day</span></p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Booking Sidebar */}
            <div className="xl:w-96 shrink-0">
              <div className="sticky-sidebar">
                <div className="bg-white border border-border rounded-3xl p-6 shadow-card overflow-hidden">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display font-800 text-4xl text-foreground">${CAR.pricePerDay}</span>
                    <span className="text-muted font-600">/day</span>
                    <span className="ml-auto text-sm text-muted font-600">${CAR.pricePerWeek}/week</span>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <label className="text-xs font-700 text-muted uppercase tracking-wider mb-1.5 block">Pickup Location</label>
                      <div className="relative">
                        <Icon name="MapPinIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                        <select
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="form-input pl-9 appearance-none cursor-pointer"
                          aria-label="Select pickup location"
                        >
                          <option>Los Angeles (LAX)</option>
                          <option>Los Angeles (Downtown)</option>
                          <option>Burbank Airport</option>
                          <option>Long Beach Airport</option>
                        </select>
                        <Icon name="ChevronDownIcon" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-700 text-muted uppercase tracking-wider mb-1.5 block">Return Location</label>
                      <div className="relative">
                        <Icon name="MapPinIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <select
                          value={returnLocation}
                          onChange={(e) => setReturnLocation(e.target.value)}
                          className="form-input pl-9 appearance-none cursor-pointer"
                          aria-label="Select return location"
                        >
                          <option>Los Angeles (LAX)</option>
                          <option>Los Angeles (Downtown)</option>
                          <option>Burbank Airport</option>
                          <option>Long Beach Airport</option>
                        </select>
                        <Icon name="ChevronDownIcon" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 min-w-0">
                    <div className="min-w-0 overflow-hidden">
                      <label className="text-xs font-700 text-muted uppercase tracking-wider mb-1.5 block">Pickup</label>
                      <button
                        type="button"
                        onClick={() => { setCalendarSelectingEnd(false); setPickupDate(null); setReturnDate(null); }}
                        className="form-input w-full max-w-full text-left text-sm font-600 flex items-center gap-2 min-w-0"
                      >
                        <Icon name="CalendarIcon" size={15} className="text-primary shrink-0" />
                        <span className="truncate">{pickupDate ? formatDate(pickupDate) : 'Select'}</span>
                      </button>
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <label className="text-xs font-700 text-muted uppercase tracking-wider mb-1.5 block">Return</label>
                      <button type="button" className="form-input w-full max-w-full text-left text-sm font-600 flex items-center gap-2 min-w-0">
                        <Icon name="CalendarIcon" size={15} className="text-muted shrink-0" />
                        <span className="truncate">{returnDate ? formatDate(returnDate) : 'Select'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Discount code"
                        className="form-input text-sm flex-1"
                        aria-label="Enter discount code"
                      />
                      <button type="button" className="px-4 py-2.5 bg-muted-light rounded-xl text-sm font-700 hover:bg-border transition-colors shrink-0">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="bg-muted-light rounded-2xl p-4 mb-5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted font-600">${CAR.pricePerDay}/day × {rentalDays} {rentalDays === 1 ? 'day' : 'days'}</span>
                      <span className="font-700 text-foreground">${CAR.pricePerDay * rentalDays}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted font-600">Service fee</span>
                      <span className="font-700 text-foreground">$18</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted font-600">Insurance (basic)</span>
                      <span className="font-700 text-green-600">Included</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between">
                      <span className="font-display font-700 text-foreground">Total</span>
                      <span className="font-display font-800 text-lg text-foreground">${totalPrice + 18}</span>
                    </div>
                    <p className="text-xs text-muted">+ ${CAR.deposit} refundable deposit</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowBookingModal(true)}
                    className="w-full btn-primary justify-center py-4 text-base rounded-2xl mb-3"
                  >
                    Book Now
                    <Icon name="ArrowRightIcon" size={18} />
                  </button>
                  <Link
                    href="/sign-up-login"
                    className="w-full btn-outline justify-center py-3 text-sm rounded-2xl">
                    Sign in to save progress
                  </Link>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    {[
                      { icon: 'ShieldCheckIcon', label: 'Insured' },
                      { icon: 'LockClosedIcon', label: 'Secure Pay' },
                      { icon: 'ArrowPathIcon', label: 'Free Cancel' },
                    ].map((t) => (
                      <div key={t.label} className="flex flex-col items-center gap-1">
                        <Icon name={t.icon as never} size={18} className="text-primary" />
                        <span className="text-[10px] font-700 text-muted uppercase tracking-wider">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-white border border-border rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="UserCircleIcon" size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-700 text-sm text-foreground">AutoRent LA</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted">⭐ 4.98 · 1,240 rentals</span>
                      </div>
                    </div>
                    <button type="button" className="ml-auto btn-outline py-2 px-4 text-xs rounded-xl">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowBookingModal(false)}
            onKeyDown={(e) => e.key === 'Escape' && setShowBookingModal(false)}
            role="button"
            tabIndex={0}
            aria-label="Close modal"
          />
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-float animate-fade-slide-up">
            <button
              type="button"
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted-light flex items-center justify-center hover:bg-border transition-colors"
              aria-label="Close booking modal"
            >
              <Icon name="XMarkIcon" size={18} />
            </button>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
              <Icon name="TruckIcon" size={28} className="text-primary" />
            </div>
            <h2 className="font-display font-800 text-2xl text-foreground mb-2">Confirm Your Booking</h2>
            <p className="text-muted text-sm mb-6">You&apos;re one step away from your {CAR.year} {CAR.brand} {CAR.name}</p>
            <div className="bg-muted-light rounded-2xl p-4 mb-6 space-y-3">
              {[
                { label: 'Car', value: `${CAR.year} ${CAR.brand} ${CAR.name}` },
                { label: 'Pickup', value: `${formatDate(pickupDate)} · ${pickupLocation}` },
                { label: 'Return', value: `${formatDate(returnDate)} · ${returnLocation}` },
                { label: 'Duration', value: `${rentalDays} ${rentalDays === 1 ? 'day' : 'days'}` },
                { label: 'Total', value: `$${totalPrice + 18}` },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-muted font-600">{item.label}</span>
                  <span className="font-700 text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            <Link
              href={`/booking?carId=${CAR.id}`}
              className="w-full btn-primary justify-center py-4 text-base rounded-2xl block text-center"
            >
              Proceed to Booking
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
            <p className="text-center text-xs text-muted mt-3">
              Free cancellation up to 24 hours before pickup
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
