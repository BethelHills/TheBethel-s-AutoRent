/**
 * Database types for TheBethel's AutoRent
 * Matches Supabase schema in supabase/migrations/
 */

export type UserRole = 'customer' | 'admin';

export interface DatabaseUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  phone: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface DatabaseCar {
  id: string;
  name: string;
  brand: string;
  type: string;
  price_per_day: number;
  transmission: string;
  fuel_type: string;
  seats: number;
  image: string | null;
  available: boolean;
  location: string | null;
  created_at: string;
  updated_at: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface DatabaseBooking {
  id: string;
  user_id: string;
  car_id: string;
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  return_location: string;
  total_price: number;
  payment_status: PaymentStatus;
  booking_status: BookingStatus;
  created_at: string;
  updated_at: string;
}

export type PaymentTransactionStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface DatabasePayment {
  id: string;
  booking_id: string;
  user_id: string;
  amount: number;
  method: string;
  transaction_id: string | null;
  status: PaymentTransactionStatus;
  created_at: string;
  updated_at: string;
}

export interface InsertUser {
  full_name: string;
  email: string;
  password: string;
  phone?: string | null;
  role?: UserRole;
}

export interface InsertCar {
  name: string;
  brand: string;
  type: string;
  price_per_day: number;
  transmission: string;
  fuel_type: string;
  seats: number;
  image?: string | null;
  available?: boolean;
  location?: string | null;
}

export interface InsertBooking {
  user_id: string;
  car_id: string;
  pickup_date: string;
  return_date: string;
  pickup_location: string;
  return_location: string;
  total_price: number;
  payment_status?: PaymentStatus;
  booking_status?: BookingStatus;
}

export interface InsertPayment {
  booking_id: string;
  user_id: string;
  amount: number;
  method: string;
  transaction_id?: string | null;
  status?: PaymentTransactionStatus;
}
