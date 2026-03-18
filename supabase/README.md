# Supabase Database Setup

## Schema Overview

| Table | Description |
|-------|-------------|
| **users** | id, full_name, email, password, phone, role |
| **cars** | id, name, brand, type, price_per_day, transmission, fuel_type, seats, image, available, location |
| **bookings** | id, user_id, car_id, pickup_date, return_date, pickup_location, return_location, total_price, payment_status, booking_status |
| **payments** | id, booking_id, user_id, amount, method, transaction_id, status |

## How to Apply Migrations

### Option 1: Supabase Dashboard

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Open **SQL Editor**
4. Copy the contents of `migrations/20260317000000_create_autorent_tables.sql`
5. Paste and run the SQL

### Option 2: Supabase CLI

```bash
# Install Supabase CLI if needed
npm install -g supabase

# Link to your project (first time only)
supabase link --project-ref YOUR_PROJECT_REF

# Apply migrations
supabase db push
```

### Option 3: Run migration file directly

```bash
supabase db execute -f supabase/migrations/20260317000000_create_autorent_tables.sql
```

## Seed Data (Optional)

After creating tables, you can seed sample cars by running a separate SQL script or using the Supabase client in your app.
