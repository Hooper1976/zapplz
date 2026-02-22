-- SQL für das Chat-System
-- Kopiere dies in deinen Supabase SQL Editor und drücke RUN!

CREATE TABLE IF NOT EXISTS public.messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_id uuid REFERENCES auth.users NOT NULL,
  receiver_id uuid REFERENCES auth.users NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS deaktivieren für den einfachen Start
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
