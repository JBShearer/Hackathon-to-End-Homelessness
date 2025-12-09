import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if credentials are configured
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not configured. Some features will be limited.')
}

// Create Supabase client
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && 
         supabaseAnonKey && 
         supabaseUrl !== 'https://placeholder.supabase.co' &&
         supabaseAnonKey !== 'placeholder-key'
}

// Export configured status for debugging
export const SUPABASE_CONFIGURED = isSupabaseConfigured()

if (SUPABASE_CONFIGURED) {
  console.log('✅ Supabase client initialized successfully')
} else {
  console.log('ℹ️ Running without Supabase backend')
}
