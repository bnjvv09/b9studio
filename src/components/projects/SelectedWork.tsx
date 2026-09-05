"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  QrCode,
  ArrowRight,
  Sparkles,
  Music,
  Heart,
  ShieldCheck,
  Lock,
  Clock,
  Smartphone,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const SelectedWork = () => {
  // Primary protagonist project
  const featured = projects[0];

  // Subtle cursor parallax on hover for the featured visual
  const visualRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 25 };
  const smoothX = useSpring(mouseX, { ...springConfig });
  const smoothY = useSpring(mouseY, { ...springConfig });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["3.5deg", "-3.5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-3.5deg", "3.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="proyectos" className="py-28 md:py-40 relative overflow-hidden">
      {/* Background ambient studio glow - subtle, integrated */}
      <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-purple-600/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-cyan-600/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. ENCABEZADO EDITORIAL ASIMÉTRICO */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-white/[0.07]"
          >
            {/* Left: Eyebrow + Main Headline */}
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.28em] text-cyan-400 uppercase block mb-4">
                PROYECTOS SELECCIONADOS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Productos que convierten ideas en experiencias.
              </h2>
            </div>

            {/* Right: Asymmetric Editorial Description */}
            <div className="max-w-md lg:pb-2">
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                Una selección de productos digitales, experiencias web y sistemas que he diseñado y construido de principio a fin.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. PROYECTO 01 — FEATURED PROJECT (RECUERDOQR) */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="group relative"
        >
          {/* Asymmetric Studio Layout: Text Content + Enormous Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Project Editorial Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-7 order-2 lg:order-1">
              
              {/* Project Top Meta */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    {featured.label}
                  </span>
                  <span className="text-slate-700">•</span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                    {featured.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
                  {featured.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-300 font-medium leading-snug mb-4 text-gradient-cyber">
                  {featured.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {featured.shortDescription}
                </p>
              </div>

              {/* Technologies Pills */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5 font-semibold">
                  Tecnologías clave:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-obsidian-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Creative Studio Metadata Line */}
              <div className="pt-2 text-[11px] font-mono text-slate-500 tracking-wide">
                {featured.metadata}
              </div>

              {/* CTA Button with smooth slide arrow */}
              <div className="pt-2">
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5 group/btn"
                >
                  <span>Ver caso de estudio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </div>

            {/* Right Column: Enormous Integrated Visual Mockup */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2 perspective-1000">
              <Link href={featured.href} className="block group/card">
                <motion.div
                  ref={visualRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="w-full rounded-[28px] bg-gradient-to-b from-[#0e1322] via-[#090d18] to-[#060810] border border-white/[0.08] group-hover/card:border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 relative overflow-hidden group-hover/card:shadow-cyan-500/10"
                >
                  {/* Subtle top reflection accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-40 group-hover/card:opacity-100 transition-opacity" />

                  {/* Browser Window Bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.07] mb-7">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-3 font-mono text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        recuerdoqr.cl
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      En Producción
                    </span>
                  </div>

                  {/* Mockup Canvas Composition */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Inset: Desktop Platform Card Preview */}
                    <div className="sm:col-span-7 flex flex-col justify-between space-y-4 p-5 rounded-2xl bg-black/50 border border-white/[0.06]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-semibold w-fit">
                        <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
                        <span>Regalo Digital Interactivo 💝</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        Plataforma e-commerce completa con checkout oficial en pesos chilenos y personalizador multimedia en tiempo real.
                      </p>

                      {/* Capabilities Matrix */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Music className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>Música</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Clock className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                          <span>Contador</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>PIN Secreto</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Mercado Pago</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Inset: Mobile Touch Screen Scanner Element */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/70 border border-white/[0.08] text-center shadow-lg relative overflow-hidden group-hover/card:border-cyan-500/30 transition-colors">
                      {/* Scan beam */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white p-2.5 shadow-xl mb-3 relative">
                        <QrCode className="w-full h-full text-black" />
                        <div className="absolute left-2 right-2 h-0.5 bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                        <Smartphone className="w-3 h-3 text-cyan-400" />
                        <span>Escanear sin apps</span>
                      </div>
                    </div>

                  </div>

                  {/* Studio Visual Footer Line */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Next.js 14 · React 18 · Supabase</span>
                    <span className="text-cyan-400 group-hover/card:translate-x-0.5 transition-transform">
                      Explorar caso de estudio →
                    </span>
                  </div>

                </motion.div>
              </Link>
            </div>

          </div>
        </motion.article>

        {/* 12. VIEW ALL PROJECTS — CTA EDITORIAL FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 md:mt-32 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">
              CATÁLOGO & ARCHIVO
            </span>
            <p className="text-sm text-slate-300 font-medium">
              Conoce el archivo completo de soluciones y desarrollos técnicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-mono transition-all duration-200 group"
            >
              <span>¿Tienes una idea? Hablemos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-400" />
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs font-mono transition-all duration-200 group"
            >
              <span>Explorar todos los proyectos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-400" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
