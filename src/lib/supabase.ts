import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface DbPricingPlan {
  id: string;
  title: string;
  price: string;
  delivery_time: string;
  description: string;
  features: string[];
  badge?: string;
  order_index: number;
  updated_at?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let clientInstance: SupabaseClient | null = null;
let adminInstance: SupabaseClient | null = null;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && (supabaseAnonKey || supabaseServiceKey));
};

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return getSupabaseAdminClient();
  }

  if (!clientInstance) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }

  return clientInstance;
};

export const getSupabaseAdminClient = (): SupabaseClient | null => {
  const key = supabaseServiceKey || supabaseAnonKey;
  if (!supabaseUrl || !key) return null;

  if (!adminInstance) {
    adminInstance = createClient(supabaseUrl, key, {
      auth: { persistSession: false },
    });
  }

  return adminInstance;
};
