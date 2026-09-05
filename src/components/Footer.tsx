"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
  name: string;
  version: string;
  role: string;
  description: string;
  accent: string;
}

const BUILT_WITH_TECH: TechItem[] = [
  {
    name: "Next.js",
    version: "14.2",
    role: "Framework Full-Stack",
    description: "App Router, pre-renderizado híbrido SSR/SSG y Server Actions en el Edge.",
    accent: "from-cyan-500 to-blue-500 text-cyan-300",
  },
  {
    name: "TypeScript",
    version: "5.6",
    role: "Lenguaje Tipado",
    description: "Tipado estricto que garantiza código predecible y cero errores en producción.",
    accent: "from-blue-500 to-indigo-500 text-blue-300",
  },
  {
    name: "Tailwind CSS",
    version: "3.4",
    role: "Sistema de Diseño",
    description: "Estilos atómicos con cero sobrepeso de CSS y animaciones fluidas.",
    accent: "from-teal-400 to-cyan-500 text-cyan-200",
  },
  {
    name: "Supabase",
    version: "PostgreSQL",
    role: "Base de Datos Cloud",
    description: "Bases de datos relacionales en la nube, storage y seguridad RLS.",
    accent: "from-emerald-400 to-teal-500 text-emerald-300",
  },
  {
    name: "Framer Motion",
    version: "11.11",
    role: "Física de Animación",
    description: "Micro-interacciones táctiles, resortes elásticos y transiciones a 60fps.",
    accent: "from-purple-500 to-pink-500 text-pink-300",
  },
];

export const Footer = () => {
  const { developer } = portfolioData;
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-slate-800/80 py-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-24 bg-gradient-to-b from-purple-500/10 via-cyan-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Bar: Brand, Studio Links & Scroll to top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-cyan p-0.5 shadow-md">
              <div className="w-full h-full rounded-[10px] bg-obsidian-950 flex items-center justify-center font-mono font-black text-sm text-white">
                {developer.monogram}
              </div>
            </div>
            <div>
              <div className="font-bold text-base text-white">
                {developer.brand}
              </div>
              <div className="text-xs font-mono text-cyan-300">
                Estudio de Productos Digitales
              </div>
            </div>
          </div>

          {/* Quick Studio Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Inicio
            </Link>
            <Link href="/proyectos" className="hover:text-cyan-300 transition-colors">
              Proyectos
            </Link>
            <Link href="/lab" className="hover:text-cyan-300 transition-colors">
              Lab
            </Link>
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              Sobre mí
            </Link>
            <Link href="/status" className="hover:text-cyan-300 transition-colors">
              Status
            </Link>
            <Link href="/changelog" className="hover:text-cyan-300 transition-colors">
              Changelog
            </Link>
            <Link href="/#contacto" className="hover:text-cyan-300 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors group px-3 py-1.5 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-slate-700"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* 19. INTERACTIVE "BUILT WITH" SECTION */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] via-black to-white/[0.01] border border-white/[0.08] relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                CONSTRUIDO CON
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-normal">
                Pasa el cursor sobre cada tecnología para ver su rol en la arquitectura:
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
              STACK LISTO PARA PRODUCCIÓN
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {BUILT_WITH_TECH.map((tech) => {
              const isHovered = activeTech?.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                  className="relative"
                >
                  <button
                    type="button"
                    onFocus={() => setActiveTech(tech)}
                    onBlur={() => setActiveTech(null)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border flex items-center gap-2 ${
                      isHovered
                        ? "bg-white/[0.12] border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-105"
                        : "bg-white/[0.03] border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{tech.name}</span>
                  </button>

                  {/* Animated Popover Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-xl bg-[#0b0f19] border border-cyan-500/40 shadow-2xl shadow-black/90 z-30 pointer-events-none"
                      >
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                          <span className={`text-xs font-mono font-bold ${tech.accent}`}>
                            {tech.name} {tech.version}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {tech.role}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
                          {tech.description}
                        </p>
                        {/* Triangle arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0b0f19]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{developer.brand}</span> — Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">
              Privacidad
            </Link>
            <span>•</span>
            <Link href="/terminos" className="hover:text-slate-300 transition-colors">
              Términos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
