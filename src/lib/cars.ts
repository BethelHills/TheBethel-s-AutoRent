export interface Car {
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

export const ALL_CARS: Car[] = [
  { id: 1, name: 'Mustang GT', brand: 'Ford', type: 'Sports', transmission: 'Automatic', fuel: 'Petrol', seats: 4, pricePerDay: 189, rating: 4.9, reviewCount: 312, available: true, popular: true, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Los Angeles, CA', year: 2024, mileage: 'Unlimited', features: ['Bluetooth', 'GPS', 'Sport Mode'] },
  { id: 2, name: 'Model 3', brand: 'Tesla', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 145, rating: 4.8, reviewCount: 428, available: true, popular: true, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', location: 'San Francisco, CA', year: 2024, mileage: 'Unlimited', features: ['Autopilot', 'Supercharging', 'Premium Sound'] },
  { id: 3, name: 'Defender 110', brand: 'Land Rover', type: 'SUV', transmission: 'Automatic', fuel: 'Diesel', seats: 7, pricePerDay: 220, rating: 4.7, reviewCount: 189, available: true, popular: false, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Denver, CO', year: 2023, mileage: 'Unlimited', features: ['4WD', 'Roof Rails', 'Heated Seats'] },
  { id: 4, name: 'Civic Sport', brand: 'Honda', type: 'Sedan', transmission: 'Manual', fuel: 'Petrol', seats: 5, pricePerDay: 72, rating: 4.6, reviewCount: 567, available: true, popular: false, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Chicago, IL', year: 2023, mileage: '200 mi/day', features: ['Backup Camera', 'Apple CarPlay', 'Lane Assist'] },
  { id: 5, name: 'X5 xDrive', brand: 'BMW', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 265, rating: 4.9, reviewCount: 203, available: false, popular: true, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', location: 'New York, NY', year: 2024, mileage: 'Unlimited', features: ['Harman Kardon', 'Panoramic Roof', 'Heads-Up Display'] },
  { id: 6, name: 'Corolla Hybrid', brand: 'Toyota', type: 'Sedan', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 88, rating: 4.7, reviewCount: 734, available: true, popular: false, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', location: 'Seattle, WA', year: 2024, mileage: 'Unlimited', features: ['Toyota Safety Sense', 'Apple CarPlay', 'Adaptive Cruise'] },
  { id: 7, name: 'Porsche 911', brand: 'Porsche', type: 'Sports', transmission: 'Automatic', fuel: 'Petrol', seats: 4, pricePerDay: 425, rating: 5.0, reviewCount: 98, available: true, popular: true, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', location: 'Miami, FL', year: 2024, mileage: '150 mi/day', features: ['Sport Chrono', 'BOSE Sound', 'Sport Exhaust'] },
  { id: 8, name: 'RAV4 AWD', brand: 'Toyota', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 118, rating: 4.8, reviewCount: 621, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Austin, TX', year: 2024, mileage: 'Unlimited', features: ['AWD', 'Apple CarPlay', 'Wireless Charging'] },
  { id: 9, name: 'Sprinter Van', brand: 'Mercedes', type: 'Van', transmission: 'Automatic', fuel: 'Diesel', seats: 12, pricePerDay: 195, rating: 4.5, reviewCount: 143, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Las Vegas, NV', year: 2023, mileage: '300 mi/day', features: ['Rear Camera', 'Cruise Control', 'Cargo Space'] },
  { id: 10, name: 'Camaro SS', brand: 'Chevrolet', type: 'Sports', transmission: 'Manual', fuel: 'Petrol', seats: 4, pricePerDay: 210, rating: 4.8, reviewCount: 176, available: true, popular: true, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', location: 'Dallas, TX', year: 2024, mileage: '150 mi/day', features: ['Brembo Brakes', 'Launch Control', 'Heads-Up Display'] },
  { id: 11, name: 'A-Class Sedan', brand: 'Mercedes', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 135, rating: 4.7, reviewCount: 254, available: true, popular: false, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', location: 'Boston, MA', year: 2024, mileage: 'Unlimited', features: ['MBUX Infotainment', 'LED Lights', 'Wireless Charging'] },
  { id: 12, name: 'Wrangler 4xe', brand: 'Jeep', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 175, rating: 4.6, reviewCount: 312, available: true, popular: true, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Phoenix, AZ', year: 2024, mileage: 'Unlimited', features: ['4x4', 'Removable Doors', 'Off-Road Mode'] },
  { id: 13, name: 'Model Y', brand: 'Tesla', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 7, pricePerDay: 165, rating: 4.9, reviewCount: 489, available: true, popular: true, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', location: 'San Jose, CA', year: 2024, mileage: 'Unlimited', features: ['Autopilot', 'Full Self-Driving', 'Panoramic Glass Roof'] },
  { id: 14, name: 'Audi A4', brand: 'Audi', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 155, rating: 4.7, reviewCount: 298, available: true, popular: false, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', location: 'Portland, OR', year: 2024, mileage: 'Unlimited', features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound'] },
  { id: 15, name: 'F-150 Raptor', brand: 'Ford', type: 'Truck', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 245, rating: 4.8, reviewCount: 167, available: false, popular: true, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Houston, TX', year: 2024, mileage: '300 mi/day', features: ['Fox Shocks', 'Trail Control', 'Pro Power Onboard'] },
];

export const FEATURED_CARS = ALL_CARS.filter((c) => c.popular).slice(0, 4);
