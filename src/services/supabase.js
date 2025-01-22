import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://valznnsuakmplrlcmdve.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbHpubnN1YWttcGxybGNtZHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0OTE5MjAsImV4cCI6MjA1MzA2NzkyMH0.edEg2CPxfmnbG6BQJNHg_9wSeFV5xeMOh8BWJQNbEv8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
