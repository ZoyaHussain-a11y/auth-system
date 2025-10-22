// lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';


if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.SUPABASE_URL) {
throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL in .env.local');
}


// ONLY import this from server-side code (server components, API routes)
export const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);