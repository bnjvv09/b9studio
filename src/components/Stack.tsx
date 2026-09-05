"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Blocks,
  FileCode,
  Database,
  Cpu,
  Cloud,
  GitBranch,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Shield,
  KeyRound,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export const Stack = () => {
  const { techStack } = portfolioData;

  const getStackIcon = (iconName: string) => {
    switch (iconName) {
      case "Blocks":
        return <Blocks className="w-5 h-5 text-cyan-400" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-orange-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case "KeyRound":
        return <KeyRound className="w-5 h-5 text-amber-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "FRONTEND":
        return {
          badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          topLine: "via-cyan-400",
          borderHover: "hover:border-cyan-500/40",
          glow: "from-cyan-500/10",
        };
      case "BACKEND":
        return {
          badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
          topLine: "via-purple-400",
          borderHover: "hover:border-purple-500/40",
          glow: "from-purple-500/10",
        };
      case "DEPLOYMENT":
        return {
          badge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
          topLine: "via-sky-400",
          borderHover: "hover:border-sky-500/40",
          glow: "from-sky-500/10",
        };
      case "PAGOS":
        return {
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          topLine: "via-amber-400",
          borderHover: "hover:border-amber-500/40",
          glow: "from-amber-500/10",
        };
      default:
        return {
          badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          topLine: "via-cyan-400",
          borderHover: "hover:border-cyan-500/40",
          glow: "from-cyan-500/10",
        };
    }
  };

  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glow spots */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ESPECIALIZACIÓN TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tecnologías & <span className="text-gradient-cyber">Herramientas</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-xl font-normal">
            El stack que utilizo para construir soluciones robustas, mantenibles y de alto rendimiento.
          </p>
        </div>

        {/* 4 Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((category, catIdx) => {
            const styles = getCategoryStyles(category.category);

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-b ${styles.glow} to-obsidian-950 border border-slate-800 ${styles.borderHover} transition-all duration-300 relative overflow-hidden group shadow-xl`}
              >
                {/* Top Glowing Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${styles.topLine} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                  <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border tracking-wider uppercase ${styles.badge}`}>
                    {category.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {category.items.length} Tecnologías
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 hover:border-slate-700 hover:bg-obsidian-850 transition-all group/item shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover/item:scale-110 group-hover/item:border-slate-700 transition-all shadow-inner">
                        {getStackIcon(item.icon)}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover/item:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {item.description}
                      </p>
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

