"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Check, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const { services } = portfolioData;

  const getServiceColorConfig = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
          number: "text-purple-400 group-hover:text-purple-300",
          borderHover: "hover:border-purple-500/50 hover:shadow-purple-500/10",
          topLine: "from-transparent via-purple-400 to-transparent",
          checkBg: "bg-purple-500/15 border-purple-500/30 text-purple-300",
          glow: "from-purple-500/10",
        };
      case 1:
        return {
          badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          number: "text-cyan-400 group-hover:text-cyan-300",
          borderHover: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
          topLine: "from-transparent via-cyan-400 to-transparent",
          checkBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
          glow: "from-cyan-500/10",
        };
      case 2:
        return {
          badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          number: "text-emerald-400 group-hover:text-emerald-300",
          borderHover: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
          topLine: "from-transparent via-emerald-400 to-transparent",
          checkBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
          glow: "from-emerald-500/10",
        };
      case 3:
      default:
        return {
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          number: "text-amber-400 group-hover:text-amber-300",
          borderHover: "hover:border-amber-500/50 hover:shadow-amber-500/10",
          topLine: "from-transparent via-amber-400 to-transparent",
          checkBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
          glow: "from-amber-500/10",
        };
    }
  };

  return (
    <section id="servicios" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background cyber ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>SOLUCIONES DIGITALES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Servicios <span className="text-gradient-cyber">Profesionales</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 max-w-2xl font-normal">
            Transformo ideas en herramientas digitales listas para vender, fidelizar usuarios y automatizar procesos.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const config = getServiceColorConfig(idx);

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-b ${config.glow} to-obsidian-950 border border-slate-800 ${config.borderHover} transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl`}
              >
                {/* Subtle top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.topLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Header: Number & Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-3xl font-black transition-colors ${config.number}`}>
                      {service.number}
                    </span>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all shadow-inner"
                      title={`Ver detalles de ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <Link href={`/servicios/${service.slug}`} className="block group/title">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover/title:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${config.checkBg}`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Dual Actions */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-obsidian-900 border border-slate-800 text-slate-300 group-hover:text-white group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 hover:bg-slate-200 shadow-sm active:scale-[0.99]"
                    >
                      <span>Ver detalles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/56944302556?text=Hola%20Bnjvv09,%20me%20gustar%C3%ADa%20consultar%20por%20el%20servicio%20de%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-white/[0.08] hover:border-cyan-500/40 active:scale-[0.99]"
                    >
                      <span>Cotizar</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CALLOUT BANNER: MANTENCIÓN, ACTUALIZACIONES & MEJORAS PARA WEBS Y TIENDAS EXISTENTES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#130e06] via-[#090d16] to-[#05070d] border border-amber-500/30 hover:border-amber-400/50 transition-all shadow-2xl relative overflow-hidden group"
        >
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/15 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>SOPORTE PARA WEBS & TIENDAS EXISTENTES</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                ¿Ya tienes una web o tienda online y necesitas actualizarla o agregarle cosas?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                No solamente construyo plataformas desde cero. También realizo <strong>mantenimiento técnico, actualización de productos y catálogos, y desarrollo de nuevas secciones</strong> para páginas que ya están operando.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>Subida y edición de productos, stock y precios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Diseño y adición de nuevas secciones y páginas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Optimización de velocidad y Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>Resolución de errores y soporte de pagos</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <a
                href="https://wa.me/56944302556?text=Hola%20Bnjvv09,%20tengo%20una%20web/tienda%20online%20y%20me%20gustar%C3%ADa%20cotizar%20mantenci%C3%B3n%20y%20agregarle%20cosas."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-all shadow-xl hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Cotizar mantención o mejoras</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/servicios/mantenimiento-actualizaciones"
                className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-amber-400/40 text-xs sm:text-sm font-mono transition-all text-center"
              >
                <span>Ver detalles del servicio →</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

