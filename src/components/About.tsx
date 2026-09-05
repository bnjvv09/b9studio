"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Copy, Check, Sparkles, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const { developer, aboutCode } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(aboutCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar código", err);
    }
  };

  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient glow spots */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FILOSOFÍA & VISIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Sobre <span className="text-gradient-cyber">Mí</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-xl font-normal">
            Creando software con pasión, detalle y visión de producto.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
              {developer.aboutText[0]}
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {developer.aboutText[1]}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {developer.aboutText[2]}
            </p>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-obsidian-950 border border-cyan-500/30 text-sm text-cyan-200 font-medium shadow-lg">
              "{developer.aboutText[3]}"
            </div>

            <div className="flex items-center gap-3 pt-4 text-xs font-mono text-slate-400">
              <span className="text-white font-semibold">{developer.name}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-300">{developer.role}</span>
              <span className="text-slate-600">•</span>
              <span>{developer.location}</span>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 text-xs font-mono text-slate-200 hover:text-white transition-all group"
              >
                <span>Conocer filosofía, principios & timeline completa</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Custom Stylized Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-obsidian-950 border border-slate-700/80 overflow-hidden shadow-2xl hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-obsidian-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-3 font-mono text-xs text-slate-300 flex items-center gap-1.5 font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-cyber-cyan" />
                    developer.config.ts
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 border border-slate-700"
                  title="Copiar código"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-semibold">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[11px]">Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-loose text-slate-300 overflow-x-auto bg-[#070a12]">
                <div>
                  <span className="text-purple-400 font-bold">const</span>{" "}
                  <span className="text-cyan-300 font-bold">developer</span> = &#123;
                </div>
                <div className="pl-5">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">'Bnjvv09'</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-300">'Desarrollador Full-Stack'</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-cyan-300 font-medium">'Next.js'</span>,{" "}
                  <span className="text-cyan-300 font-medium">'React'</span>,{" "}
                  <span className="text-cyan-300 font-medium">'Supabase'</span>,{" "}
                  <span className="text-cyan-300 font-medium">'Tailwind'</span>],
                </div>
                <div className="pl-5">
                  <span className="text-slate-400">activeProject:</span>{" "}
                  <span className="text-pink-400 font-bold">'RecuerdoQR 💝'</span>,
                </div>
                <div className="pl-5">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-amber-300 font-medium">'Construyendo software listo para producción'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Status bar */}
              <div className="px-5 py-2.5 bg-obsidian-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">TypeScript 5.6</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyber-cyan">
                  <GitBranch className="w-3 h-3" />
                  <span>main</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

