import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = 'https://gmrxubfxmgkeyhzneyqb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtcnh1YmZ4bWdrZXloem5leXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MjM1MTcsImV4cCI6MjA3MjQ5OTUxN30.WybdZ9jLDeEeb3n-Hpn6ZpNbQ9vVhg3MCe9FRTk4NlQ';
 
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
