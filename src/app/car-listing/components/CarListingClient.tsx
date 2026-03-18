'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// ─── Data ───────────────────────────────────────────────────────────────────

interface Car {
  id: number;
  name: string;
  brand: string;
  type: string;
  transmission: string;
  fuel: string;
  seats: number;
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  available: boolean;
  popular: boolean;
  image: string;
  location: string;
  year: number;
  mileage: string;
  features: string[];
}

const ALL_CARS: Car[] = [
  {
    id: 1,
    name: 'Mustang GT',
    brand: 'Ford',
    type: 'Sports',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    pricePerDay: 189,
    rating: 4.9,
    reviewCount: 312,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    location: 'Los Angeles, CA',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Bluetooth', 'GPS', 'Sport Mode'],
  },
  {
    id: 2,
    name: 'Model 3',
    brand: 'Tesla',
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 5,
    pricePerDay: 145,
    rating: 4.8,
    reviewCount: 428,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    location: 'San Francisco, CA',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Autopilot', 'Supercharging', 'Premium Sound'],
  },
  {
    id: 3,
    name: 'Defender 110',
    brand: 'Land Rover',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 7,
    pricePerDay: 220,
    rating: 4.7,
    reviewCount: 189,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    location: 'Denver, CO',
    year: 2023,
    mileage: 'Unlimited',
    features: ['4WD', 'Roof Rails', 'Heated Seats'],
  },
  {
    id: 4,
    name: 'Civic Sport',
    brand: 'Honda',
    type: 'Sedan',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    pricePerDay: 72,
    rating: 4.6,
    reviewCount: 567,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    location: 'Chicago, IL',
    year: 2023,
    mileage: '200 mi/day',
    features: ['Backup Camera', 'Apple CarPlay', 'Lane Assist'],
  },
  {
    id: 5,
    name: 'X5 xDrive',
    brand: 'BMW',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    pricePerDay: 265,
    rating: 4.9,
    reviewCount: 203,
    available: false,
    popular: true,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    location: 'New York, NY',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Harman Kardon', 'Panoramic Roof', 'Heads-Up Display'],
  },
  {
    id: 6,
    name: 'Corolla Hybrid',
    brand: 'Toyota',
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    seats: 5,
    pricePerDay: 88,
    rating: 4.7,
    reviewCount: 734,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    location: 'Seattle, WA',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Toyota Safety Sense', 'Apple CarPlay', 'Adaptive Cruise'],
  },
  {
    id: 7,
    name: 'Porsche 911',
    brand: 'Porsche',
    type: 'Sports',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    pricePerDay: 425,
    rating: 5.0,
    reviewCount: 98,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    location: 'Miami, FL',
    year: 2024,
    mileage: '150 mi/day',
    features: ['Sport Chrono', 'BOSE Sound', 'Sport Exhaust'],
  },
  {
    id: 8,
    name: 'RAV4 AWD',
    brand: 'Toyota',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    seats: 5,
    pricePerDay: 118,
    rating: 4.8,
    reviewCount: 621,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80',
    location: 'Austin, TX',
    year: 2024,
    mileage: 'Unlimited',
    features: ['AWD', 'Apple CarPlay', 'Wireless Charging'],
  },
  {
    id: 9,
    name: 'Sprinter Van',
    brand: 'Mercedes',
    type: 'Van',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 12,
    pricePerDay: 195,
    rating: 4.5,
    reviewCount: 143,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    location: 'Las Vegas, NV',
    year: 2023,
    mileage: '300 mi/day',
    features: ['Rear Camera', 'Cruise Control', 'Cargo Space'],
  },
  {
    id: 10,
    name: 'Camaro SS',
    brand: 'Chevrolet',
    type: 'Sports',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 4,
    pricePerDay: 210,
    rating: 4.8,
    reviewCount: 176,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    location: 'Dallas, TX',
    year: 2024,
    mileage: '150 mi/day',
    features: ['Brembo Brakes', 'Launch Control', 'Heads-Up Display'],
  },
  {
    id: 11,
    name: 'A-Class Sedan',
    brand: 'Mercedes',
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    pricePerDay: 135,
    rating: 4.7,
    reviewCount: 254,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    location: 'Boston, MA',
    year: 2024,
    mileage: 'Unlimited',
    features: ['MBUX Infotainment', 'LED Lights', 'Wireless Charging'],
  },
  {
    id: 12,
    name: 'Wrangler 4xe',
    brand: 'Jeep',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    seats: 5,
    pricePerDay: 175,
    rating: 4.6,
    reviewCount: 312,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    location: 'Phoenix, AZ',
    year: 2024,
    mileage: 'Unlimited',
    features: ['4x4', 'Removable Doors', 'Off-Road Mode'],
  },
  {
    id: 13,
    name: 'Model Y',
    brand: 'Tesla',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 7,
    pricePerDay: 165,
    rating: 4.9,
    reviewCount: 489,
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    location: 'San Jose, CA',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Autopilot', 'Full Self-Driving', 'Panoramic Glass Roof'],
  },
  {
    id: 14,
    name: 'Audi A4',
    brand: 'Audi',
    type: 'Sedan',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    pricePerDay: 155,
    rating: 4.7,
    reviewCount: 298,
    available: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    location: 'Portland, OR',
    year: 2024,
    mileage: 'Unlimited',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound'],
  },
  {
    id: 15,
    name: 'F-150 Raptor',
    brand: 'Ford',
    type: 'Truck',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    pricePerDay: 245,
    rating: 4.8,
    reviewCount: 167,
    available: false,
    popular: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    location: 'Houston, TX',
    year: 2024,
    mileage: '300 mi/day',
    features: ['Fox Shocks', 'Trail Control', 'Pro Power Onboard'],
  },
];

const BRANDS = ['Ford', 'Tesla', 'Land Rover', 'Honda', 'BMW', 'Toyota', 'Porsche', 'Mercedes', 'Chevrolet', 'Jeep', 'Audi'];
const TYPES = ['Sedan', 'SUV', 'Sports', 'Van', 'Truck'];
const FUELS = ['Petrol', 'Electric', 'Diesel', 'Hybrid'];
const TRANSMISSIONS = ['Automatic', 'Manual'];

// ─── Components ─────────────────────────────────────────────────────────────

const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 12 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={size} height={size} viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z"
            fill={star <= Math.round(rating) ? '#F59E0B' : '#E5E7EB'}
          />
        </svg>
      ))}
    </div>
  );
};

const CarCard: React.FC<{ car: Car; index: number }> = ({ car, index }) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden card-lift border border-border reveal-item"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted-light">
        <AppImage
          src={car.image}
          alt={`${car.brand} ${car.name} rental car`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover img-zoom"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {car.popular && (
            <span className="badge badge-popular">Popular</span>
          )}
          <span className={`badge ${car.available ? 'badge-available' : 'badge-unavailable'}`}>
            {car.available ? 'Available' : 'Booked'}
          </span>
        </div>
        {/* Favorite */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? '#E8590C' : 'none'} stroke={isFav ? '#E8590C' : '#6B7280'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm">
          <span className="font-display font-800 text-lg text-foreground">${car.pricePerDay}</span>
          <span className="text-xs text-muted font-medium">/day</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs font-700 text-primary uppercase tracking-wider mb-0.5">{car.brand}</p>
            <h3 className="font-display font-700 text-lg text-foreground leading-tight">{car.name}</h3>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <StarRating rating={car.rating} />
            </div>
            <p className="text-xs text-muted mt-0.5">{car.rating} ({car.reviewCount})</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mb-4">
          <Icon name="MapPinIcon" size={13} className="text-muted" />
          <span className="text-xs text-muted font-medium">{car.location}</span>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {[
            { icon: 'UserGroupIcon', label: `${car.seats} seats` },
            { icon: 'CogIcon', label: car.transmission },
            { icon: 'BoltIcon', label: car.fuel },
          ].map((spec) => (
            <span key={spec.label} className="spec-tag">
              <Icon name={spec.icon as never} size={12} />
              {spec.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/car-detail"
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-700 font-display transition-all duration-300 ${
            car.available
              ? 'bg-foreground text-white hover:bg-primary'
              : 'bg-muted-light text-muted cursor-not-allowed'
          }`}
        >
          {car.available ? (
            <>
              View Details
              <Icon name="ArrowRightIcon" size={15} />
            </>
          ) : (
            'Not Available'
          )}
        </Link>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CarListingClient() {
  const [searchLocation, setSearchLocation] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState(500);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Filter logic
  const filteredCars = ALL_CARS.filter((car) => {
    if (car.pricePerDay > priceRange) return false;
    if (availableOnly && !car.available) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(car.type)) return false;
    if (selectedFuels.length > 0 && !selectedFuels.includes(car.fuel)) return false;
    if (selectedTransmissions.length > 0 && !selectedTransmissions.includes(car.transmission)) return false;
    if (searchLocation && !car.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay;
    if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  // Update active filter chips
  useEffect(() => {
    const filters: string[] = [];
    if (priceRange < 500) filters.push(`Max $${priceRange}/day`);
    if (availableOnly) filters.push('Available Only');
    selectedBrands.forEach((b) => filters.push(b));
    selectedTypes.forEach((t) => filters.push(t));
    selectedFuels.forEach((f) => filters.push(f));
    selectedTransmissions.forEach((t) => filters.push(t));
    setActiveFilters(filters);
  }, [priceRange, availableOnly, selectedBrands, selectedTypes, selectedFuels, selectedTransmissions]);

  const toggleFilter = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const clearAllFilters = () => {
    setPriceRange(500);
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedFuels([]);
    setSelectedTransmissions([]);
    setAvailableOnly(false);
  };

  // Scroll reveal
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
    const items = document.querySelectorAll('.reveal-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filteredCars]);

  // Sidebar filter panel (shared between desktop and mobile)
  const FilterPanel = () => (
    <div className="space-y-7">
      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-700 text-sm text-foreground">Price per Day</h3>
          <span className="text-sm font-700 text-primary">Up to ${priceRange}</span>
        </div>
        <input
          type="range"
          min={40}
          max={500}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
          aria-label="Maximum price per day"
        />
        <div className="flex justify-between text-xs text-muted mt-1">
          <span>$40</span>
          <span>$500</span>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-display font-700 text-sm text-foreground mb-3">Availability</h3>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(e) => setAvailableOnly(e.target.checked)}
            className="filter-checkbox"
            aria-label="Show available cars only"
          />
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            Available only
          </span>
        </label>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-display font-700 text-sm text-foreground mb-3">Brand</h3>
        <div className="space-y-2.5">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
                className="filter-checkbox"
                aria-label={`Filter by ${brand}`}
              />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <h3 className="font-display font-700 text-sm text-foreground mb-3">Car Type</h3>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-700 transition-all duration-200 ${
                selectedTypes.includes(type)
                  ? 'bg-foreground text-white'
                  : 'bg-muted-light text-muted hover:bg-border hover:text-foreground'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel */}
      <div>
        <h3 className="font-display font-700 text-sm text-foreground mb-3">Fuel Type</h3>
        <div className="space-y-2.5">
          {FUELS.map((fuel) => (
            <label key={fuel} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedFuels.includes(fuel)}
                onChange={() => toggleFilter(selectedFuels, setSelectedFuels, fuel)}
                className="filter-checkbox"
                aria-label={`Filter by ${fuel} fuel`}
              />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {fuel}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div>
        <h3 className="font-display font-700 text-sm text-foreground mb-3">Transmission</h3>
        <div className="flex gap-2">
          {TRANSMISSIONS.map((t) => (
            <button
              key={t}
              onClick={() => toggleFilter(selectedTransmissions, setSelectedTransmissions, t)}
              className={`flex-1 py-2 rounded-xl text-xs font-700 transition-all duration-200 ${
                selectedTransmissions.includes(t)
                  ? 'bg-foreground text-white'
                  : 'bg-muted-light text-muted hover:text-foreground'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {activeFilters.length > 0 && (
        <button
          onClick={clearAllFilters}
          className="w-full py-2.5 border border-border rounded-xl text-sm font-700 text-muted hover:text-foreground hover:border-foreground transition-all"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />

      {/* Page Header */}
      <section className="pt-28 pb-10 px-6 md:px-10 bg-accent grid-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-primary font-700 text-xs uppercase tracking-widest mb-3">
            {filteredCars.length} cars available
          </p>
          <h1 className="font-display font-800 text-4xl md:text-5xl text-white mb-4 leading-tight">
            Find Your Perfect
            <span className="text-primary"> Drive</span>
          </h1>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mt-6">
            <div className="flex-1 relative">
              <Icon name="MapPinIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search by city or location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 font-medium text-sm outline-none focus:border-primary focus:bg-white/15 transition-all"
              />
            </div>
            <button className="btn-primary py-3.5 px-6 rounded-2xl shrink-0">
              <Icon name="MagnifyingGlassIcon" size={18} />
              Search
            </button>
          </div>

          {/* Active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map((f) => (
                <span key={f} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-700 px-3 py-1.5 rounded-full border border-white/20">
                  {f}
                  <button
                    onClick={() => {
                      // Remove specific filter
                      if (f.startsWith('Max $')) setPriceRange(500);
                      else if (f === 'Available Only') setAvailableOnly(false);
                      else if (BRANDS.includes(f)) setSelectedBrands((p) => p.filter((x) => x !== f));
                      else if (TYPES.includes(f)) setSelectedTypes((p) => p.filter((x) => x !== f));
                      else if (FUELS.includes(f)) setSelectedFuels((p) => p.filter((x) => x !== f));
                      else setSelectedTransmissions((p) => p.filter((x) => x !== f));
                    }}
                    className="hover:text-primary transition-colors"
                    aria-label={`Remove ${f} filter`}
                  >
                    <Icon name="XMarkIcon" size={12} />
                  </button>
                </span>
              ))}
              <button
                onClick={clearAllFilters}
                className="text-white/60 text-xs font-600 hover:text-white transition-colors px-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky-sidebar bg-white rounded-3xl border border-border p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-700 text-base text-foreground">Filters</h2>
                {activeFilters.length > 0 && (
                  <span className="bg-primary text-white text-xs font-700 w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </div>
              <FilterPanel />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Sort + Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted font-medium">
                <span className="font-700 text-foreground">{filteredCars.length}</span> results found
              </p>
              <div className="flex items-center gap-3">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-600 text-foreground pr-8 outline-none cursor-pointer hover:border-foreground transition-colors"
                    aria-label="Sort cars by"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <Icon name="ChevronDownIcon" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-600 hover:border-foreground transition-colors"
                >
                  <Icon name="AdjustmentsHorizontalIcon" size={16} />
                  Filters
                  {activeFilters.length > 0 && (
                    <span className="bg-primary text-white text-xs font-700 w-5 h-5 rounded-full flex items-center justify-center">
                      {activeFilters.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Car Grid */}
            {filteredCars.length > 0 ? (
              <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car, index) => (
                  <CarCard key={car.id} car={car} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="w-16 h-16 bg-muted-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MagnifyingGlassIcon" size={28} className="text-muted" />
                </div>
                <h3 className="font-display font-700 text-xl text-foreground mb-2">No cars found</h3>
                <p className="text-muted text-sm mb-6">Try adjusting your filters or search location</p>
                <button onClick={clearAllFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}

            {/* Load More */}
            {filteredCars.length > 0 && (
              <div className="text-center mt-12">
                <button className="btn-outline">
                  Load More Cars
                  <Icon name="ArrowDownIcon" size={15} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-all duration-400 ${
          filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-float transition-transform duration-400 overflow-y-auto ${
            filterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-700 text-lg">Filters</h2>
              <button
                onClick={() => setFilterOpen(false)}
                className="w-9 h-9 rounded-full bg-muted-light flex items-center justify-center hover:bg-border transition-colors"
                aria-label="Close filters"
              >
                <Icon name="XMarkIcon" size={18} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full btn-primary mt-6 justify-center"
            >
              Show {filteredCars.length} Results
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
