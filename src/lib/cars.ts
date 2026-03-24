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
  { id: 5, name: 'X5 xDrive', brand: 'BMW', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 265, rating: 4.9, reviewCount: 203, available: true, popular: true, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', location: 'New York, NY', year: 2024, mileage: 'Unlimited', features: ['Harman Kardon', 'Panoramic Roof', 'Heads-Up Display'] },
  { id: 6, name: 'Corolla Hybrid', brand: 'Toyota', type: 'Sedan', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 88, rating: 4.7, reviewCount: 734, available: true, popular: false, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', location: 'Seattle, WA', year: 2024, mileage: 'Unlimited', features: ['Toyota Safety Sense', 'Apple CarPlay', 'Adaptive Cruise'] },
  { id: 7, name: 'Porsche 911', brand: 'Porsche', type: 'Sports', transmission: 'Automatic', fuel: 'Petrol', seats: 4, pricePerDay: 425, rating: 5.0, reviewCount: 98, available: true, popular: true, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', location: 'Miami, FL', year: 2024, mileage: '150 mi/day', features: ['Sport Chrono', 'BOSE Sound', 'Sport Exhaust'] },
  { id: 8, name: 'RAV4 AWD', brand: 'Toyota', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 118, rating: 4.8, reviewCount: 621, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Austin, TX', year: 2024, mileage: 'Unlimited', features: ['AWD', 'Apple CarPlay', 'Wireless Charging'] },
  { id: 9, name: 'Sprinter Van', brand: 'Mercedes', type: 'Van', transmission: 'Automatic', fuel: 'Diesel', seats: 12, pricePerDay: 195, rating: 4.5, reviewCount: 143, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Las Vegas, NV', year: 2023, mileage: '300 mi/day', features: ['Rear Camera', 'Cruise Control', 'Cargo Space'] },
  { id: 10, name: 'Camaro SS', brand: 'Chevrolet', type: 'Sports', transmission: 'Manual', fuel: 'Petrol', seats: 4, pricePerDay: 210, rating: 4.8, reviewCount: 176, available: true, popular: true, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', location: 'Dallas, TX', year: 2024, mileage: '150 mi/day', features: ['Brembo Brakes', 'Launch Control', 'Heads-Up Display'] },
  { id: 11, name: 'A-Class Sedan', brand: 'Mercedes', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 135, rating: 4.7, reviewCount: 254, available: true, popular: false, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', location: 'Boston, MA', year: 2024, mileage: 'Unlimited', features: ['MBUX Infotainment', 'LED Lights', 'Wireless Charging'] },
  { id: 12, name: 'Wrangler 4xe', brand: 'Jeep', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 175, rating: 4.6, reviewCount: 312, available: true, popular: true, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Phoenix, AZ', year: 2024, mileage: 'Unlimited', features: ['4x4', 'Removable Doors', 'Off-Road Mode'] },
  { id: 13, name: 'Model Y', brand: 'Tesla', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 7, pricePerDay: 165, rating: 4.9, reviewCount: 489, available: true, popular: true, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', location: 'San Jose, CA', year: 2024, mileage: 'Unlimited', features: ['Autopilot', 'Full Self-Driving', 'Panoramic Glass Roof'] },
  { id: 14, name: 'Audi A4', brand: 'Audi', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 155, rating: 4.7, reviewCount: 298, available: true, popular: false, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', location: 'Portland, OR', year: 2024, mileage: 'Unlimited', features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound'] },
  { id: 15, name: 'F-150 Raptor', brand: 'Ford', type: 'Truck', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 245, rating: 4.8, reviewCount: 167, available: true, popular: true, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Houston, TX', year: 2024, mileage: '300 mi/day', features: ['Fox Shocks', 'Trail Control', 'Pro Power Onboard'] },
  { id: 16, name: 'RX 350', brand: 'Lexus', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 198, rating: 4.8, reviewCount: 412, available: true, popular: true, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Atlanta, GA', year: 2024, mileage: 'Unlimited', features: ['Mark Levinson', 'Panoramic Roof', 'Safety System+'] },
  { id: 17, name: 'Altima SR', brand: 'Nissan', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 79, rating: 4.5, reviewCount: 523, available: true, popular: false, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', location: 'Nashville, TN', year: 2023, mileage: 'Unlimited', features: ['ProPilot Assist', 'Apple CarPlay', 'Remote Start'] },
  { id: 18, name: 'CX-5 Turbo', brand: 'Mazda', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 112, rating: 4.7, reviewCount: 389, available: true, popular: false, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Denver, CO', year: 2024, mileage: 'Unlimited', features: ['AWD', 'Bose Audio', 'Heads-Up Display'] },
  { id: 19, name: 'XC90 Recharge', brand: 'Volvo', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 7, pricePerDay: 235, rating: 4.9, reviewCount: 201, available: true, popular: true, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Minneapolis, MN', year: 2024, mileage: 'Unlimited', features: ['Pilot Assist', 'Bowers & Wilkins', 'Air Suspension'] },
  { id: 20, name: 'Silverado 1500', brand: 'Chevrolet', type: 'Truck', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 185, rating: 4.6, reviewCount: 276, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Phoenix, AZ', year: 2024, mileage: '300 mi/day', features: ['MultiPro Tailgate', '4WD', 'Trailering Package'] },
  { id: 21, name: 'Outback Wilderness', brand: 'Subaru', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 128, rating: 4.7, reviewCount: 334, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Portland, OR', year: 2024, mileage: 'Unlimited', features: ['AWD', 'X-Mode', 'Roof Rack'] },
  { id: 22, name: 'Charger R/T', brand: 'Dodge', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 135, rating: 4.6, reviewCount: 445, available: true, popular: false, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Detroit, MI', year: 2023, mileage: '200 mi/day', features: ['Hemi V8', 'Sport Mode', 'Heated Seats'] },
  { id: 23, name: 'ES 300h', brand: 'Lexus', type: 'Sedan', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 142, rating: 4.8, reviewCount: 298, available: true, popular: false, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', location: 'San Diego, CA', year: 2024, mileage: 'Unlimited', features: ['Hybrid Synergy', 'Mark Levinson', 'Sunroof'] },
  { id: 24, name: 'Leaf EV', brand: 'Nissan', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 95, rating: 4.4, reviewCount: 612, available: true, popular: false, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', location: 'Seattle, WA', year: 2024, mileage: 'Unlimited', features: ['ProPilot', 'DC Fast Charge', 'Eco Mode'] },
  { id: 25, name: 'GV70', brand: 'Genesis', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 168, rating: 4.8, reviewCount: 187, available: true, popular: true, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Los Angeles, CA', year: 2024, mileage: 'Unlimited', features: ['Lexicon Audio', 'AWD', 'Highway Assist'] },
  { id: 26, name: 'Bronco Sport', brand: 'Ford', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 125, rating: 4.6, reviewCount: 401, available: true, popular: false, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Salt Lake City, UT', year: 2024, mileage: 'Unlimited', features: ['4x4', 'Terrain Management', 'SYNC 4'] },
  { id: 27, name: 'Macan S', brand: 'Porsche', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 295, rating: 4.9, reviewCount: 156, available: true, popular: true, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', location: 'Miami, FL', year: 2024, mileage: '150 mi/day', features: ['Sport Chrono', 'BOSE', 'PASM'] },
  { id: 28, name: 'Highlander Hybrid', brand: 'Toyota', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 8, pricePerDay: 132, rating: 4.7, reviewCount: 512, available: true, popular: true, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Orlando, FL', year: 2024, mileage: 'Unlimited', features: ['Third Row', 'Toyota Safety Sense', 'AWD'] },
  { id: 29, name: 'Sienna XLE', brand: 'Toyota', type: 'Van', transmission: 'Automatic', fuel: 'Hybrid', seats: 8, pricePerDay: 142, rating: 4.8, reviewCount: 423, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'San Francisco, CA', year: 2024, mileage: 'Unlimited', features: ['Sliding Doors', 'Captain Chairs', 'AWD'] },
  { id: 30, name: 'i4 M50', brand: 'BMW', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 198, rating: 4.9, reviewCount: 221, available: true, popular: true, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', location: 'San Jose, CA', year: 2024, mileage: 'Unlimited', features: ['M Performance', 'iDrive 8', 'Fast Charging'] },
  { id: 31, name: 'Elantra SEL', brand: 'Hyundai', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 69, rating: 4.5, reviewCount: 412, available: true, popular: false, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', location: 'Los Angeles, CA', year: 2024, mileage: 'Unlimited', features: ['SmartSense', 'Apple CarPlay', 'Heated Seats'] },
  { id: 32, name: 'Telluride SX', brand: 'Kia', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 8, pricePerDay: 138, rating: 4.8, reviewCount: 501, available: true, popular: true, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Los Angeles, CA', year: 2024, mileage: 'Unlimited', features: ['Third Row', 'Harman Kardon', 'Highway Drive Assist'] },
  { id: 33, name: 'Golf GTI', brand: 'Volkswagen', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 92, rating: 4.7, reviewCount: 288, available: true, popular: false, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', location: 'Chicago, IL', year: 2024, mileage: 'Unlimited', features: ['Digital Cockpit', 'Sport Suspension', 'LED Lights'] },
  { id: 34, name: 'Palisade', brand: 'Hyundai', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 8, pricePerDay: 148, rating: 4.7, reviewCount: 356, available: true, popular: true, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Chicago, IL', year: 2024, mileage: 'Unlimited', features: ['Captain Chairs', 'Highway Assist', 'Sunroof'] },
  { id: 35, name: 'Accord Hybrid', brand: 'Honda', type: 'Sedan', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 98, rating: 4.8, reviewCount: 602, available: true, popular: true, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', location: 'Houston, TX', year: 2024, mileage: 'Unlimited', features: ['Honda Sensing', 'Wireless CarPlay', 'Leather'] },
  { id: 36, name: 'Tucson Hybrid', brand: 'Hyundai', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 108, rating: 4.6, reviewCount: 334, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Houston, TX', year: 2024, mileage: 'Unlimited', features: ['AWD', 'Bluelink', 'Smart Cruise'] },
  { id: 37, name: 'Model S Plaid', brand: 'Tesla', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 225, rating: 4.9, reviewCount: 312, available: true, popular: true, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', location: 'San Francisco, CA', year: 2024, mileage: 'Unlimited', features: ['Tri Motor', 'Yoke Wheel', 'Premium Interior'] },
  { id: 38, name: 'ID.4 Pro', brand: 'Volkswagen', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 122, rating: 4.5, reviewCount: 267, available: true, popular: false, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', location: 'San Francisco, CA', year: 2024, mileage: 'Unlimited', features: ['Heat Pump', 'ID.Light', 'Travel Assist'] },
  { id: 39, name: 'Escalade Sport', brand: 'Cadillac', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 7, pricePerDay: 285, rating: 4.8, reviewCount: 144, available: true, popular: true, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Miami, FL', year: 2024, mileage: 'Unlimited', features: ['Super Cruise', 'AKG Audio', 'Air Ride'] },
  { id: 40, name: 'MDX Type S', brand: 'Acura', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 7, pricePerDay: 188, rating: 4.7, reviewCount: 198, available: true, popular: false, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Miami, FL', year: 2024, mileage: 'Unlimited', features: ['SH-AWD', 'ELS Studio', 'Massage Seats'] },
  { id: 41, name: 'Frontier Pro-4X', brand: 'Nissan', type: 'Truck', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 142, rating: 4.5, reviewCount: 221, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Denver, CO', year: 2024, mileage: '300 mi/day', features: ['4WD', 'ProPilot', 'Bed Step'] },
  { id: 42, name: 'Compass 4xe', brand: 'Jeep', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 118, rating: 4.4, reviewCount: 187, available: true, popular: false, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Denver, CO', year: 2024, mileage: 'Unlimited', features: ['4x4', 'Uconnect', 'Sunroof'] },
  { id: 43, name: 'Bolt EUV', brand: 'Chevrolet', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 89, rating: 4.3, reviewCount: 445, available: true, popular: false, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', location: 'Seattle, WA', year: 2024, mileage: 'Unlimited', features: ['Super Cruise', 'One Pedal', 'DC Fast Charge'] },
  { id: 44, name: 'Sorento Hybrid', brand: 'Kia', type: 'SUV', transmission: 'Automatic', fuel: 'Hybrid', seats: 7, pricePerDay: 124, rating: 4.6, reviewCount: 298, available: true, popular: true, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Seattle, WA', year: 2024, mileage: 'Unlimited', features: ['Third Row', 'Highway Assist', 'AWD'] },
  { id: 45, name: 'R1S', brand: 'Rivian', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 7, pricePerDay: 265, rating: 4.8, reviewCount: 176, available: true, popular: true, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', location: 'Austin, TX', year: 2024, mileage: 'Unlimited', features: ['Quad Motor', 'Camp Kitchen', 'Air Suspension'] },
  { id: 46, name: 'Santa Fe', brand: 'Hyundai', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 114, rating: 4.6, reviewCount: 367, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Austin, TX', year: 2024, mileage: 'Unlimited', features: ['HTRAC AWD', 'Bluelink', 'Safe Exit'] },
  { id: 47, name: 'Navigator L', brand: 'Lincoln', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 8, pricePerDay: 275, rating: 4.7, reviewCount: 112, available: true, popular: false, image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', location: 'Dallas, TX', year: 2024, mileage: 'Unlimited', features: ['Revel Audio', 'Air Glide', 'BlueCruise'] },
  { id: 48, name: 'Camry XLE Hybrid', brand: 'Toyota', type: 'Sedan', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 125, rating: 4.8, reviewCount: 589, available: true, popular: true, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', location: 'Dallas, TX', year: 2024, mileage: 'Unlimited', features: ['Toyota Safety Sense', 'Premium Audio', 'HUD'] },
  { id: 49, name: 'Carnival SX', brand: 'Kia', type: 'Van', transmission: 'Automatic', fuel: 'Petrol', seats: 8, pricePerDay: 138, rating: 4.7, reviewCount: 312, available: true, popular: true, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Atlanta, GA', year: 2024, mileage: 'Unlimited', features: ['VIP Lounge', 'Dual Screens', 'Smart Power Doors'] },
  { id: 50, name: 'GV80', brand: 'Genesis', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 7, pricePerDay: 208, rating: 4.8, reviewCount: 167, available: true, popular: true, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', location: 'Atlanta, GA', year: 2024, mileage: 'Unlimited', features: ['Lexicon', 'Road Preview', 'Ergo Motion'] },
  { id: 51, name: 'Ioniq 6', brand: 'Hyundai', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 112, rating: 4.6, reviewCount: 234, available: true, popular: false, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80', location: 'Boston, MA', year: 2024, mileage: 'Unlimited', features: ['Ultra-Fast Charge', 'V2L', 'Highway Assist'] },
  { id: 52, name: 'Q5 Premium', brand: 'Audi', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 168, rating: 4.7, reviewCount: 289, available: true, popular: true, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', location: 'Boston, MA', year: 2024, mileage: 'Unlimited', features: ['Quattro', 'Virtual Cockpit', 'Matrix LED'] },
  { id: 53, name: 'Grand Cherokee', brand: 'Jeep', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 152, rating: 4.6, reviewCount: 401, available: true, popular: true, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', location: 'Phoenix, AZ', year: 2024, mileage: 'Unlimited', features: ['Quadra-Lift', 'Night Vision', 'McIntosh Audio'] },
  { id: 54, name: 'Lyriq Tech', brand: 'Cadillac', type: 'SUV', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 188, rating: 4.5, reviewCount: 156, available: true, popular: false, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', location: 'Phoenix, AZ', year: 2024, mileage: 'Unlimited', features: ['Super Cruise', 'AKG', 'Glass Roof'] },
  { id: 55, name: 'Forester Sport', brand: 'Subaru', type: 'SUV', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 108, rating: 4.7, reviewCount: 378, available: true, popular: false, image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', location: 'Portland, OR', year: 2024, mileage: 'Unlimited', features: ['Symmetrical AWD', 'EyeSight', 'X-Mode'] },
  { id: 56, name: 'Lucid Air', brand: 'Lucid', type: 'Sedan', transmission: 'Automatic', fuel: 'Electric', seats: 5, pricePerDay: 315, rating: 4.9, reviewCount: 98, available: true, popular: true, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', location: 'Las Vegas, NV', year: 2024, mileage: 'Unlimited', features: ['DreamDrive', 'Glass Canopy', '900V Architecture'] },
  { id: 57, name: 'Pacifica Hybrid', brand: 'Chrysler', type: 'Van', transmission: 'Automatic', fuel: 'Hybrid', seats: 7, pricePerDay: 128, rating: 4.5, reviewCount: 267, available: true, popular: false, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Las Vegas, NV', year: 2024, mileage: 'Unlimited', features: ['Stow n Go', 'Uconnect Theater', 'Hands-Free Doors'] },
  { id: 58, name: 'Maverick XLT', brand: 'Ford', type: 'Truck', transmission: 'Automatic', fuel: 'Hybrid', seats: 5, pricePerDay: 88, rating: 4.6, reviewCount: 412, available: true, popular: true, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', location: 'Nashville, TN', year: 2024, mileage: 'Unlimited', features: ['FlexBed', 'AWD', 'SYNC 4'] },
  { id: 59, name: 'Integra A-Spec', brand: 'Acura', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 108, rating: 4.7, reviewCount: 198, available: true, popular: false, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', location: 'Nashville, TN', year: 2024, mileage: 'Unlimited', features: ['ELS Audio', 'A-Spec Trim', 'Wireless CarPlay'] },
  { id: 60, name: 'GT-Line', brand: 'Kia', type: 'Sedan', transmission: 'Automatic', fuel: 'Petrol', seats: 5, pricePerDay: 76, rating: 4.5, reviewCount: 523, available: true, popular: false, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', location: 'Orlando, FL', year: 2024, mileage: 'Unlimited', features: ['Sport Styling', 'Smart Key', 'Lane Keep'] },
];

export const FEATURED_CARS = ALL_CARS.filter((c) => c.popular).slice(0, 4);

/** Alphabetical list of unique pickup / rental cities from the fleet. */
export function getUniqueLocations(): string[] {
  return [...new Set(ALL_CARS.map((c) => c.location))].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' }),
  );
}

/** Location + number of vehicles (for Locations page). */
export function getLocationStats(): { location: string; count: number }[] {
  const map = new Map<string, number>();
  for (const c of ALL_CARS) {
    map.set(c.location, (map.get(c.location) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([location, count]) => ({ location, count }))
    .sort((a, b) => a.location.localeCompare(b.location, undefined, { sensitivity: 'base' }));
}

/** Popular Rentals filter tabs */
export type PopularCategory = 'all' | 'economy' | 'suv' | 'luxury' | 'van' | 'electric';

/** Estimated booking volume for ranking (higher = more in demand). */
export function estimatedBookings(car: Car): number {
  return Math.round(car.reviewCount * 1.08 + (car.popular ? 220 : 0) + car.id * 3);
}

/** Sort score: favors high bookings, strong ratings, availability. */
export function getPopularRentalScore(car: Car): number {
  return estimatedBookings(car) * car.rating + (car.available ? 120 : -400);
}

export function carMatchesPopularCategory(car: Car, cat: PopularCategory): boolean {
  if (cat === 'all') return true;
  if (cat === 'electric') return car.fuel === 'Electric';
  if (cat === 'suv') return car.type === 'SUV';
  if (cat === 'van') return car.type === 'Van';
  if (cat === 'luxury') {
    return (
      car.pricePerDay >= 190 ||
      car.type === 'Sports' ||
      (['Porsche', 'Mercedes', 'Lexus', 'Genesis'].includes(car.brand) && car.pricePerDay >= 125)
    );
  }
  if (cat === 'economy') {
    return car.pricePerDay <= 118 && !['Sports', 'Van', 'Truck'].includes(car.type);
  }
  return true;
}

/** Short label for card (SUV, Sedan, Luxury, Van / Group, Electric, …). */
export function getPopularTypeLabel(car: Car): string {
  if (car.type === 'Van') return 'Van / Group';
  if (car.fuel === 'Electric') return `${car.type} · Electric`;
  if (car.pricePerDay >= 200 || car.type === 'Sports') return 'Luxury';
  return car.type;
}
