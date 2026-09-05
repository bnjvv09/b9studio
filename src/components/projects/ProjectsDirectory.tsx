"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  QrCode,
  ShieldCheck,
  Music,
  Lock,
  Clock,
  Heart,
  Code2,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsDirectoryProps {
  initialProjects: ProjectItem[];
}

const FILTER_CATEGORIES = [
  { id: "ALL", label: "TODOS" },
  { id: "PRODUCTOS DIGITALES", label: "PRODUCTOS DIGITALES" },
  { id: "DESARROLLO WEB", label: "DESARROLLO WEB" },
  { id: "E-COMMERCE", label: "E-COMMERCE" },
  { id: "EXPERIENCIAS", label: "EXPERIENCIAS" },
];

export const ProjectsDirectory = ({ initialProjects }: ProjectsDirectoryProps) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = initialProjects.filter((project) => {
    if (activeFilter === "ALL") return true;
    return project.categories?.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Studio Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200 hidden sm:inline">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <Link
            href="/#contacto"
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all"
          >
            Iniciar proyecto
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase block mb-3">
            PROYECTOS SELECCIONADOS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
            Productos, experiencias y sistemas digitales.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Una selección de productos digitales, experiencias interactivas y sistemas web que he diseñado y construido con enfoque en producto, arquitectura y conversión.
          </p>
        </div>

        {/* Elegant Category Filters */}
        <div className="mb-14 pb-4 border-b border-white/[0.06] overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-black"
                      : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBadge"
                      className="absolute inset-0 bg-white rounded-xl shadow-lg shadow-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Editorial Project Listings */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden group"
              >
                {/* Background glow accent */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/[0.12] transition-colors" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                    <div>
                      {/* Meta header line */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                          {project.number}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          {project.category}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="text-xs font-mono text-slate-500">
                          {project.year}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {project.status}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                        {project.title}
                      </h2>

                      <p className="text-base sm:text-lg text-slate-300 font-medium leading-snug mb-4 text-gradient-cyber">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Technologies pills */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5 font-semibold">
                        Stack tecnológico:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5 group/btn"
                      >
                        <span>Ver caso de estudio</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs sm:text-sm font-medium transition-all"
                      >
                        <span>Visitar {project.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Enormous Visual Preview */}
                  <div className="lg:col-span-6 w-full order-1 lg:order-2">
                    <Link href={project.href} className="block group/canvas">
                      <div className="rounded-2xl bg-black/60 border border-white/[0.08] group-hover/canvas:border-cyan-500/30 p-6 sm:p-8 space-y-5 transition-all duration-300">
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            recuerdoqr.cl
                          </span>
                        </div>

                        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-5">
                          <div className="w-20 h-20 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-lg relative">
                            <QrCode className="w-full h-full text-black" />
                            <div className="absolute left-1 right-1 h-0.5 bg-cyan-400 animate-pulse" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-semibold">
                              <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
                              <span>Regalo Digital</span>
                            </div>
                            <p className="text-xs text-slate-300 font-mono">
                              Escaneo con cámara nativa sin aplicaciones
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 text-xs font-mono text-slate-400 pt-2">
                          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <Music className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Música</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <Clock className="w-3.5 h-3.5 text-pink-400" />
                            <span>Contador</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <Lock className="w-3.5 h-3.5 text-amber-400" />
                            <span>PIN Secreto</span>
                          </div>
                          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Mercado Pago</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {/* Studio Lab / WIP Note */}
          <div className="p-8 sm:p-10 rounded-2xl border border-dashed border-white/[0.09] bg-white/[0.01] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 flex items-center gap-2">
                  <span>En desarrollo activo & laboratorio</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                    EN DESARROLLO
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-2xl">
                  Actualmente diseñando e implementando nuevos productos digitales y herramientas web. Si buscas construir un sistema a medida con arquitectura moderna, podemos comenzar hoy.
                </p>
              </div>
            </div>

            <Link
              href="/#contacto"
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs font-mono font-medium transition-all whitespace-nowrap self-start sm:self-auto"
            >
              Cotizar un proyecto
            </Link>
          </div>
        </div>

        {/* Bottom Studio Strategic CTA Banner */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-[#0b101c] to-purple-950/20 border border-white/[0.08] text-center space-y-6">
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block">
            ¿TIENES UNA IDEA EN MENTE?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
            Hablemos sobre tu próximo producto o solución digital.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            Te ayudo a transformar requerimientos complejos en interfaces limpias, código robusto y experiencias de usuario sobresalientes.
          </p>
          <div className="pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02] shadow-xl"
            >
              <span>¿Tienes una idea? Hablemos →</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Estudio de Productos Digitales</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
