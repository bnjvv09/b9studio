"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  Save,
  CheckCircle2,
  AlertCircle,
  LogOut,
  ExternalLink,
  Sparkles,
  Plus,
  Trash2,
  Database,
  RefreshCw,
} from "lucide-react";
import { DbPricingPlan } from "@/lib/supabase";
import { loginAdmin, logoutAdmin, updatePricingPlan } from "@/actions/pricing";

interface AdminClientProps {
  initialAuth: boolean;
  initialPlans: DbPricingPlan[];
  isFromDb: boolean;
}

export default function AdminClient({
  initialAuth,
  initialPlans,
  isFromDb,
}: AdminClientProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [plans, setPlans] = useState<DbPricingPlan[]>(initialPlans);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    id: string;
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Manejador de Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    try {
      const res = await loginAdmin(password);
      if (res.success) {
        setIsAuthenticated(true);
        router.refresh();
      } else {
        setLoginError(res.error || "Contraseña inválida");
      }
    } catch {
      setLoginError("Error al iniciar sesión. Inténtalo de nuevo.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Manejador de Logout
  const handleLogout = async () => {
    await logoutAdmin();
    setIsAuthenticated(false);
    router.refresh();
  };

  // Actualizar un campo de un plan localmente
  const handlePlanChange = (
    id: string,
    field: keyof DbPricingPlan,
    value: any
  ) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === id ? { ...plan, [field]: value } : plan))
    );
  };

  // Agregar una característica a un plan
  const handleAddFeature = (planId: string) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === planId
          ? { ...plan, features: [...plan.features, "Nueva característica"] }
          : plan
      )
    );
  };

  // Actualizar una característica de un plan
  const handleFeatureChange = (
    planId: string,
    index: number,
    newValue: string
  ) => {
    setPlans((prev) =>
      prev.map((plan) => {
        if (plan.id !== planId) return plan;
        const newFeatures = [...plan.features];
        newFeatures[index] = newValue;
        return { ...plan, features: newFeatures };
      })
    );
  };

  // Eliminar una característica de un plan
  const handleRemoveFeature = (planId: string, index: number) => {
    setPlans((prev) =>
      prev.map((plan) => {
        if (plan.id !== planId) return plan;
        return {
          ...plan,
          features: plan.features.filter((_, i) => i !== index),
        };
      })
    );
  };

  // Guardar un plan específico en Supabase
  const handleSavePlan = async (plan: DbPricingPlan) => {
    setSavingId(plan.id);
    setFeedback(null);

    try {
      const res = await updatePricingPlan(plan);
      if (res.success) {
        setFeedback({
          id: plan.id,
          type: "success",
          message: "¡Precio y datos guardados correctamente en Supabase!",
        });
        setTimeout(() => setFeedback(null), 4000);
      } else {
        setFeedback({
          id: plan.id,
          type: "error",
          message: res.error || "No se pudo guardar el plan.",
        });
      }
    } catch {
      setFeedback({
        id: plan.id,
        type: "error",
        message: "Error de conexión con el servidor.",
      });
    } finally {
      setSavingId(null);
    }
  };

  // VISTA: Formulario de inicio de sesión
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo y Encabezado */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 shadow-lg shadow-cyan-500/10">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              B9 Studio — Administrador
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Ingresa tu contraseña para editar los precios del sitio
            </p>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleLogin}
            className="p-7 rounded-3xl bg-[#090d16] border border-white/10 shadow-2xl space-y-5"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                Contraseña de Acceso
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduce tu contraseña..."
                  className="w-full px-4 py-3.5 pl-11 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors font-mono"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 px-5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm tracking-tight hover:bg-slate-200 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <span>Ingresar al Panel</span>
              )}
            </button>

            <div className="pt-2 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver al sitio web</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // VISTA: Panel de Administración autenticado
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#05070a]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-sm flex items-center justify-center">
              B9
            </span>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                Panel de Administración
              </h1>
              <span className="text-[11px] font-mono text-slate-400">
                Gestión de Precios & Planes
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Ver Web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300 hover:text-rose-200 transition-all flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Banner de Estado de Base de Datos */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${
                isFromDb ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>
                  {isFromDb
                    ? "Conectado en vivo con Supabase"
                    : "Modo Local / Fallback Activo"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {isFromDb
                  ? "Cualquier cambio que guardes se reflejará al instante en la web."
                  : "Configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en tu .env.local para sincronizar con la nube."}
              </p>
            </div>
          </div>

          <Link
            href="/supabase/schema.sql"
            target="_blank"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors underline"
          >
            Ver Script SQL
          </Link>
        </div>

        {/* Header de la sección */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planes de Servicio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Modifica precios y tiempos de entrega
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Edita los valores en pesos chilenos (CLP) y haz clic en "Guardar
            cambios" para actualizar la web.
          </p>
        </div>

        {/* Grilla de Planes Editables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {plans.map((plan) => {
            const isSaving = savingId === plan.id;
            const currentFeedback =
              feedback?.id === plan.id ? feedback : null;

            return (
              <div
                key={plan.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-cyan-500/30 transition-all shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Encabezado del Plan */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Identificador: {plan.id}
                      </span>
                      <input
                        type="text"
                        value={plan.title}
                        onChange={(e) =>
                          handlePlanChange(plan.id, "title", e.target.value)
                        }
                        className="text-lg font-black text-white bg-transparent border-b border-dashed border-white/20 focus:border-cyan-400 focus:outline-none w-full mt-0.5"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        Insignia
                      </label>
                      <input
                        type="text"
                        value={plan.badge || ""}
                        onChange={(e) =>
                          handlePlanChange(plan.id, "badge", e.target.value)
                        }
                        placeholder="Ej: Esencial"
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-cyan-300 focus:border-cyan-400 focus:outline-none text-center"
                      />
                    </div>
                  </div>

                  {/* Precios y Plazos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                        Precio Visible *
                      </label>
                      <input
                        type="text"
                        required
                        value={plan.price}
                        onChange={(e) =>
                          handlePlanChange(plan.id, "price", e.target.value)
                        }
                        placeholder="Desde $180.000 CLP"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                        Tiempo de Entrega *
                      </label>
                      <input
                        type="text"
                        required
                        value={plan.delivery_time}
                        onChange={(e) =>
                          handlePlanChange(
                            plan.id,
                            "delivery_time",
                            e.target.value
                          )
                        }
                        placeholder="5 - 7 días hábiles"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-white text-sm font-mono"
                      />
                    </div>
                  </div>

                  {/* Descripción */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Descripción del Servicio
                    </label>
                    <textarea
                      rows={2}
                      value={plan.description}
                      onChange={(e) =>
                        handlePlanChange(plan.id, "description", e.target.value)
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-slate-300 text-xs leading-relaxed resize-none"
                    />
                  </div>

                  {/* Lista de Características */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Características incluidas ({plan.features.length})
                      </label>
                      <button
                        type="button"
                        onClick={() => handleAddFeature(plan.id)}
                        className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Agregar viñeta</span>
                      </button>
                    </div>

                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={feat}
                            onChange={(e) =>
                              handleFeatureChange(
                                plan.id,
                                fIdx,
                                e.target.value
                              )
                            }
                            className="flex-1 px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveFeature(plan.id, fIdx)
                            }
                            className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                            title="Eliminar"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notificación y Botón de Guardar */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  {currentFeedback && (
                    <div
                      className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 ${
                        currentFeedback.type === "success"
                          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                          : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                      }`}
                    >
                      {currentFeedback.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span>{currentFeedback.message}</span>
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={() => handleSavePlan(plan)}
                    className="w-full py-3 px-4 rounded-xl bg-white text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-md active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Guardando en Supabase...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Guardar cambios de {plan.title}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
