"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Globe2,
  MapPin,
  Clock,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_TYPES = [
  { id: "Desarrollo Web a Medida", label: "Desarrollo Web a Medida" },
  { id: "E-Commerce & Pagos", label: "E-Commerce & Pagos" },
  { id: "Web App / SaaS", label: "Web App / SaaS" },
  { id: "Mantención & Actualizaciones Web", label: "Mantención & Actualizaciones Web" },
  { id: "Optimización & UI/UX", label: "Optimización & UI/UX" },
];

const BUDGET_RANGES = [
  { id: "Menos de $350.000 CLP", label: "< $350K CLP" },
  { id: "$350.000 - $600.000 CLP", label: "$350K - $600K CLP" },
  { id: "$600.000 - $1.200.000 CLP", label: "$600K - $1.2M CLP" },
  { id: "Más de $1.200.000 CLP", label: "+$1.2M CLP (SaaS / Empresa)" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const { developer } = portfolioData;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipoProyecto: PROJECT_TYPES[0].id,
    presupuesto: BUDGET_RANGES[1].id,
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Por favor completa al menos tu nombre y correo electrónico.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      const text = [
        `*Nuevo Proyecto / Propuesta Técnica — Bnjvv09.dev*`,
        `• *Nombre:* ${formData.nombre}`,
        `• *Email:* ${formData.email}`,
        `• *Tipo de Proyecto:* ${formData.tipoProyecto}`,
        `• *Presupuesto Estimado:* ${formData.presupuesto}`,
        `• *Detalles:* ${formData.mensaje.trim() || "Sin detalles adicionales"}`,
      ].join("\n");

      const encoded = encodeURIComponent(text);
      const url = `https://wa.me/56944302556?text=${encoded}`;

      // Open WhatsApp
      window.open(url, "_blank");

      setStatus("success");
    }, 650);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      tipoProyecto: PROJECT_TYPES[0].id,
      presupuesto: BUDGET_RANGES[1].id,
      mensaje: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contacto"
      className="py-28 md:py-40 relative overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              CONTACTO & CONVERSIÓN
            </span>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponibilidad Inmediata
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
            ¿Qué vamos a <span className="text-gradient-cyber">construir?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Cuéntame sobre tu proyecto o idea de negocio. Analizo tus requerimientos para diseñar una solución técnica limpia, moderna y enfocada en resultados reales.
          </p>

          {/* Location & Real Channels */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chile 🇨🇱</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Disponible a todo el mundo</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Respuesta &lt; 24h</span>
            </div>
          </div>

          {/* Quick Direct Links */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={developer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-white font-mono text-xs font-semibold transition-all group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Directo (+56 9 4430 2556)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={`mailto:${developer.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white font-mono text-xs font-semibold transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{developer.email}</span>
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50" />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-10 text-center space-y-6 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    ¡Solicitud Preparada con Éxito!
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Hemos formateado los datos técnicos de tu proyecto y abierto WhatsApp para iniciar la conversación directamente.
                  </p>
                </div>

                {/* Brief recap box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-left text-xs font-mono space-y-1.5 text-slate-300">
                  <p><span className="text-slate-500">Cliente:</span> {formData.nombre} ({formData.email})</p>
                  <p><span className="text-slate-500">Tipo:</span> {formData.tipoProyecto}</p>
                  <p><span className="text-slate-500">Presupuesto:</span> {formData.presupuesto}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-all shadow-lg"
                  >
                    <span>Reabrir WhatsApp</span>
                    <MessageCircle className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Nueva consulta</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Visual Project Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-semibold">
                    1. ¿Qué tipo de proyecto deseas construir? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {PROJECT_TYPES.map((pt) => {
                      const isSelected = formData.tipoProyecto === pt.id;
                      return (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, tipoProyecto: pt.id })}
                          className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all duration-200 ${
                            isSelected
                              ? "bg-cyan-500/10 border-cyan-400 text-white shadow-sm shadow-cyan-500/20"
                              : "bg-white/[0.02] border-white/[0.07] text-slate-400 hover:border-white/20 hover:text-slate-200"
                          }`}
                        >
                          <span className="font-semibold block">{pt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Visual Budget Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 font-semibold">
                    2. Rango de inversión o presupuesto aproximado *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {BUDGET_RANGES.map((bg) => {
                      const isSelected = formData.presupuesto === bg.id;
                      return (
                        <button
                          key={bg.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, presupuesto: bg.id })}
                          className={`p-3 rounded-xl border text-center text-xs font-mono transition-all duration-200 ${
                            isSelected
                              ? "bg-purple-500/15 border-purple-400 text-white shadow-sm shadow-purple-500/20"
                              : "bg-white/[0.02] border-white/[0.07] text-slate-400 hover:border-white/20 hover:text-slate-200"
                          }`}
                        >
                          {bg.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                      Tu Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ej: Carolina Morales"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                      Tu Correo Electrónico *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                    Descripción de la idea o requerimiento
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Cuéntame brevemente tus metas, funcionalidades que imaginas o fecha tentativa de lanzamiento..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors resize-none font-sans"
                  />
                </div>

                {/* Error Banner if validation fails */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl bg-white text-black font-bold text-sm tracking-tight text-center shadow-xl hover:bg-slate-200 transition-all duration-200 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2 text-xs font-mono">
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Preparando propuesta técnica...
                    </span>
                  ) : (
                    <>
                      <span>Iniciar un proyecto</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
