"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Clock,
  GitBranch,
  Terminal,
  Activity,
  ArrowRight,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const CHANGELOG_ITEMS = [
  {
    date: "Septiembre 2026",
    title: "RecuerdoQR — Optimización de Personalizador & Audio",
    status: "EN PROCESO",
    tag: "v2.4",
    desc: "Refactorización del personalizador multimedia para reducir tiempos de render en smartphones y sincronizar la reproducción de audio.",
  },
  {
    date: "Agosto 2026",
    title: "Checkout Automatizado con Mercado Pago CLP",
    status: "COMPLETADO",
    tag: "Pagos",
    desc: "Integración de Webhooks criptográficos para confirmación instantánea de órdenes en moneda local chilena.",
  },
  {
    date: "Agosto 2026",
    title: "Bóveda de Seguridad con PIN Secreto",
    status: "COMPLETADO",
    tag: "Seguridad",
    desc: "Mecanismo de privacidad de 4 dígitos con teclado virtual para resguardar mensajes y recuerdos privados.",
  },
];

export const NowBuilding = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
                ESTADO DEL ESTUDIO & CONSTRUYENDO AHORA
              </span>
              <span className="text-slate-700">•</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SPRINT ACTIVO
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              Qué se está construyendo <span className="text-gradient-cyber">hoy.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Transparencia en tiempo real sobre los desarrollos activos, sprints de producto y próximas actualizaciones técnicas.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          
          {/* Main Card: RecuerdoQR Live Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 space-y-6 transition-all duration-300 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-white block">
                    RecuerdoQR
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Sprint de Rendimiento & Audio
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                En Producción
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Refactorización del personalizador multimedia en tiempo real
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Optimizando la carga diferida de canciones y fotos para asegurar que el escaneo del código QR sea sub-segundo en smartphones 4G.
              </p>
            </div>

            {/* Tech pills & details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Última act.: Septiembre 2026</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5 text-purple-400" />
                  <span>v2.4.0-prod</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {["Next.js 14", "React 18", "Supabase", "Mercado Pago SDK", "TypeScript"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.07] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://recuerdo-qr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-all"
              >
                <span>Visitar recuerdoqr.cl</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/proyectos/recuerdoqr"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all"
              >
                <span>Ver caso de estudio →</span>
              </Link>
            </div>
          </motion.div>

          {/* Secondary Card: Lab & Client Sprints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">
                      Laboratorio & Nuevos Proyectos
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Disponibilidad para Clientes
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full font-medium">
                  Abierto
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                Arquitecturas web preparadas para conversión
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Actualmente reservando disponibilidad para 2 nuevos proyectos de desarrollo web o e-commerce con entrega en Septiembre / Octubre.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Próximos Entregables:
              </span>
              <ul className="text-xs font-mono text-slate-300 space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Landing pages corporativas ultrarrápidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Sistemas de pago Mercado Pago automatizados</span>
                </li>
              </ul>
            </div>

            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs font-mono transition-all group"
            >
              <span>Reservar un cupo de desarrollo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-400" />
            </Link>
          </motion.div>

        </div>

        {/* Live Changelog Timeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/[0.06]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Changelog del Estudio
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Registro público de iteraciones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHANGELOG_ITEMS.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">{item.date}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      item.status === "COMPLETADO"
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-cyan-400 bg-cyan-500/10"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
