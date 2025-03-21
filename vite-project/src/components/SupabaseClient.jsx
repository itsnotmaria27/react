import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://tvqrblbvigswvqvvytad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cXJibGJ2aWdzd3ZxdnZ5dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY2NTksImV4cCI6MjA1NzQzMjY1OX0.nuo-ugqfHbXSI_EfuCEOGCBE6Q-X5uG1ciEt2-pRJE8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;