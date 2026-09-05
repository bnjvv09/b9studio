"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getSupabaseAdminClient, isSupabaseConfigured, DbPricingPlan } from "@/lib/supabase";
import { portfolioData, PricingItem } from "@/data/portfolioData";

const ADMIN_COOKIE_NAME = "b9_admin_session";
const DEFAULT_ADMIN_PASSWORD = "b9admin2026";

function getExpectedAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
}

// Convierte un plan estático de portfolioData al formato de base de datos
function mapStaticToDb(staticPlan: PricingItem, index: number): DbPricingPlan {
  const ids = ["landing-page", "ecommerce", "web-app", "mantenimiento"];
  return {
    id: ids[index] || `plan-${index + 1}`,
    title: staticPlan.title,
    price: staticPlan.price,
    delivery_time: staticPlan.deliveryTime,
    description: staticPlan.description,
    features: staticPlan.features,
    badge: staticPlan.badge,
    order_index: index + 1,
  };
}

/**
 * Obtiene los planes de precios desde Supabase con fallback garantizado a portfolioData.
 */
export async function getPricingPlans(): Promise<{
  plans: DbPricingPlan[];
  isFromDb: boolean;
}> {
  const fallbackPlans = portfolioData.pricing.map(mapStaticToDb);

  if (!isSupabaseConfigured()) {
    return { plans: fallbackPlans, isFromDb: false };
  }

  try {
    const supabase = getSupabaseAdminClient();
    if (!supabase) {
      return { plans: fallbackPlans, isFromDb: false };
    }

    const { data, error } = await supabase
      .from("pricing_plans")
      .select("*")
      .order("order_index", { ascending: true });

    if (error || !data || data.length === 0) {
      return { plans: fallbackPlans, isFromDb: false };
    }

    // Mapear asegurando que features sea array
    const mapped = data.map((row: any) => ({
      ...row,
      features: Array.isArray(row.features)
        ? row.features
        : typeof row.features === "string"
        ? JSON.parse(row.features)
        : [],
    }));

    return { plans: mapped, isFromDb: true };
  } catch (err) {
    console.error("Error al obtener planes de Supabase:", err);
    return { plans: fallbackPlans, isFromDb: false };
  }
}

/**
 * Autentica al administrador verificando la contraseña.
 */
export async function loginAdmin(password: string): Promise<{
  success: boolean;
  error?: string;
}> {
  const expectedPassword = getExpectedAdminPassword();

  if (!password || password !== expectedPassword) {
    return { success: false, error: "Contraseña incorrecta" };
  }

  // Guardar cookie de sesión segura (válida por 7 días)
  const cookieStore = cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "authenticated_session_token_b9", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: true };
}

/**
 * Comprueba si la sesión de administrador está activa.
 */
export async function checkAdminAuth(): Promise<boolean> {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(ADMIN_COOKIE_NAME);
  return Boolean(sessionCookie && sessionCookie.value === "authenticated_session_token_b9");
}

/**
 * Cierra la sesión de administrador.
 */
export async function logoutAdmin(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

/**
 * Actualiza un plan de precios en Supabase y revalida la caché de la página principal.
 */
export async function updatePricingPlan(plan: DbPricingPlan): Promise<{
  success: boolean;
  error?: string;
}> {
  const isAuth = await checkAdminAuth();
  if (!isAuth) {
    return { success: false, error: "No autorizado. Inicia sesión como administrador." };
  }

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error:
        "Supabase no está configurado en las variables de entorno (NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY).",
    };
  }

  try {
    const supabase = getSupabaseAdminClient();
    if (!supabase) {
      return { success: false, error: "No se pudo inicializar la conexión con Supabase." };
    }

    const { error } = await supabase
      .from("pricing_plans")
      .upsert({
        id: plan.id,
        title: plan.title,
        price: plan.price,
        delivery_time: plan.delivery_time,
        description: plan.description,
        features: plan.features,
        badge: plan.badge,
        order_index: plan.order_index,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error("Error al actualizar plan en Supabase:", error);
      return { success: false, error: error.message };
    }

    // Refrescar caché de la página principal y del panel
    revalidatePath("/");
    revalidatePath("/admin");

    return { success: true };
  } catch (err: any) {
    console.error("Error inesperado:", err);
    return { success: false, error: err.message || "Error al conectar con la base de datos." };
  }
}
