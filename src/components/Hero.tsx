"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { getAvailability } from "@/data/availability";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const { developer } = portfolioData;
  const availability = getAvailability();

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Meta Tag & Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {/* Status Badge linked to /status */}
          <Link
            href="/status"
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide shadow-sm border transition-all hover:scale-105 ${availability.badgeClass}`}
            title="Ver monitor de estado del estudio (/status)"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${availability.dotColor}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${availability.dotColor}`}></span>
            </span>
            <span>{availability.badge}</span>
          </Link>

          <span className="text-slate-600 hidden sm:inline">•</span>

          {/* Domain / Tag */}
          <span className="text-xs font-mono text-cyber-cyan tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyber-purple-light" />
            {developer.tag}
          </span>
        </motion.div>

        {/* Main Headline with Vibrant Cyber Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-[-0.03em] text-white leading-[1.06] max-w-5xl mb-8"
        >
          Construyo productos digitales que{" "}
          <span className="text-gradient-cyber font-black">
            se sienten diferentes.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          {developer.subtagline}
        </motion.p>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12"
        >
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mr-2">
            Core Stack:
          </span>
          {developer.coreTechnologies.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1 rounded-lg text-xs font-mono font-medium bg-obsidian-900 border border-slate-700/80 text-cyber-cyan hover:border-cyber-purple/60 hover:text-white transition-all shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#proyectos"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple via-purple-600 to-cyber-cyan text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center shadow-lg shadow-purple-900/40 hover:shadow-cyan-900/40"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-cyber-cyan/50 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <span>Trabajemos juntos</span>
            <ArrowRight className="w-4 h-4 text-cyber-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
