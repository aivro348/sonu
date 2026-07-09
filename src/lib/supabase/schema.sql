-- Run this in your Supabase SQL Editor

-- 1. Users Table (Extends Supabase Auth)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  dob DATE,
  blood_type TEXT,
  height TEXT,
  weight TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Medical Info Table
CREATE TABLE public.medical_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  conditions TEXT[],
  allergies TEXT[],
  medications TEXT[],
  notes TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Emergency Contacts Table
CREATE TABLE public.emergency_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  relation TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT
);

-- 4. Cards (QR/NFC mapping) Table
CREATE TABLE public.cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  uuid UUID DEFAULT gen_random_uuid() UNIQUE NOT NULL, -- The unique ID for the public URL
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'lost', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Scan Logs Table
CREATE TABLE public.scan_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  card_id UUID REFERENCES public.cards(id) ON DELETE CASCADE NOT NULL,
  scanned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  ip_address TEXT,
  location TEXT
);

-- Setup Row Level Security (RLS)

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scan_logs ENABLE ROW LEVEL SECURITY;

-- Policies for Authenticated Users (They can manage their own data)
CREATE POLICY "Users can manage their own profile" ON public.users FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users can manage their medical info" ON public.medical_info FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their contacts" ON public.emergency_contacts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their cards" ON public.cards FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view their scan logs" ON public.scan_logs FOR SELECT USING (EXISTS (SELECT 1 FROM public.cards WHERE cards.id = scan_logs.card_id AND cards.user_id = auth.uid()));

-- Policy for Public Access (Read-Only via the unique card UUID)
-- We will handle this securely via a server action or edge function that bypasses RLS using the service_role key, 
-- or we can create a secure view. For now, public access directly to tables is DENIED.
