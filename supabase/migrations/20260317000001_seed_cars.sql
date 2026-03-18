-- Optional: Seed cars with sample data from the app
-- Run after 20260317000000_create_autorent_tables.sql
-- Only run if cars table is empty

INSERT INTO cars (name, brand, type, price_per_day, transmission, fuel_type, seats, image, available, location) VALUES
  ('Mustang GT', 'Ford', 'Sports', 189, 'Automatic', 'Petrol', 4, 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', true, 'Los Angeles, CA'),
  ('Model 3', 'Tesla', 'Sedan', 145, 'Automatic', 'Electric', 5, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80', true, 'San Francisco, CA'),
  ('Defender 110', 'Land Rover', 'SUV', 220, 'Automatic', 'Diesel', 7, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', true, 'Denver, CO'),
  ('Civic Sport', 'Honda', 'Sedan', 72, 'Manual', 'Petrol', 5, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', true, 'Chicago, IL'),
  ('X5 xDrive', 'BMW', 'SUV', 265, 'Automatic', 'Petrol', 5, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', false, 'New York, NY'),
  ('Corolla Hybrid', 'Toyota', 'Sedan', 88, 'Automatic', 'Hybrid', 5, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', true, 'Seattle, WA'),
  ('Porsche 911', 'Porsche', 'Sports', 425, 'Automatic', 'Petrol', 4, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', true, 'Miami, FL'),
  ('RAV4 AWD', 'Toyota', 'SUV', 118, 'Automatic', 'Hybrid', 5, 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80', true, 'Austin, TX'),
  ('Sprinter Van', 'Mercedes', 'Van', 195, 'Automatic', 'Diesel', 12, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', true, 'Las Vegas, NV'),
  ('Camaro SS', 'Chevrolet', 'Sports', 210, 'Manual', 'Petrol', 4, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', true, 'Dallas, TX'),
  ('A-Class Sedan', 'Mercedes', 'Sedan', 135, 'Automatic', 'Petrol', 5, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', true, 'Boston, MA'),
  ('Wrangler 4xe', 'Jeep', 'SUV', 175, 'Automatic', 'Hybrid', 5, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', true, 'Phoenix, AZ'),
  ('Model Y', 'Tesla', 'SUV', 165, 'Automatic', 'Electric', 7, 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', true, 'San Jose, CA'),
  ('Audi A4', 'Audi', 'Sedan', 155, 'Automatic', 'Petrol', 5, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', true, 'Portland, OR'),
  ('F-150 Raptor', 'Ford', 'Truck', 245, 'Automatic', 'Petrol', 5, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', false, 'Houston, TX');
