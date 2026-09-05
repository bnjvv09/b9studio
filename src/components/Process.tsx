"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Process = () => {
  const { workProcess } = portfolioData;

  const getStepStyles = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          textNum: "text-purple-400 group-hover:text-purple-300",
          tagline: "text-purple-300",
          bullet: "text-purple-400",
          topLine: "from-transparent via-purple-400 to-transparent",
          hoverBorder: "hover:border-purple-500/50",
          glow: "from-purple-500/10",
        };
      case 1:
        return {
          textNum: "text-cyan-400 group-hover:text-cyan-300",
          tagline: "text-cyan-300",
          bullet: "text-cyan-400",
          topLine: "from-transparent via-cyan-400 to-transparent",
          hoverBorder: "hover:border-cyan-500/50",
          glow: "from-cyan-500/10",
        };
      case 2:
        return {
          textNum: "text-pink-400 group-hover:text-pink-300",
          tagline: "text-pink-300",
          bullet: "text-pink-400",
          topLine: "from-transparent via-pink-400 to-transparent",
          hoverBorder: "hover:border-pink-500/50",
          glow: "from-pink-500/10",
        };
      case 3:
        return {
          textNum: "text-emerald-400 group-hover:text-emerald-300",
          tagline: "text-emerald-300",
          bullet: "text-emerald-400",
          topLine: "from-transparent via-emerald-400 to-transparent",
          hoverBorder: "hover:border-emerald-500/50",
          glow: "from-emerald-500/10",
        };
      case 4:
      default:
        return {
          textNum: "text-amber-400 group-hover:text-amber-300",
          tagline: "text-amber-300",
          bullet: "text-amber-400",
          topLine: "from-transparent via-amber-400 to-transparent",
          hoverBorder: "hover:border-amber-500/50",
          glow: "from-amber-500/10",
        };
    }
  };

  return (
    <section id="proceso" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/30 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>METODOLOGÍA DE INGENIERÍA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Cómo <span className="text-gradient-cyber">Trabajo</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-xl font-normal">
            De una idea a un producto real. Proceso estructurado, transparente y ágil.
          </p>
        </div>

        {/* 5 Steps Grid with progressive reveal */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {workProcess.map((step, idx) => {
            const styles = getStepStyles(idx);

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`p-6 rounded-3xl bg-gradient-to-b ${styles.glow} to-obsidian-950 border border-slate-800 flex flex-col justify-between group ${styles.hoverBorder} transition-all duration-300 relative overflow-hidden shadow-xl`}
              >
                {/* Top Glowing Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${styles.topLine} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Step Number */}
                  <div className={`font-mono text-4xl font-black transition-colors mb-3 ${styles.textNum}`}>
                    {step.step}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className={`text-xs font-mono font-semibold mb-3 ${styles.tagline}`}>
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-slate-400 font-mono leading-tight flex items-start gap-1.5">
                      <span className={`font-bold ${styles.bullet}`}>•</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

