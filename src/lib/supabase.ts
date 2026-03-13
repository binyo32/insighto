import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://poaqsovvnwqxxsmhbbnu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvYXFzb3Z2bndxeHhzbWhiYm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2ODU2NjAsImV4cCI6MjA4ODI2MTY2MH0.5qoGCMcK13utdVXihVY6hb9SjlgMpUbvvpaIB_O1h7s'
);
