"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Pricing = () => {
  const { pricing } = portfolioData;

  const getPlanStyles = (idx: number, isPopular: boolean) => {
    if (isPopular) {
      return {
        cardBorder: "border-transparent bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-obsidian-950 shadow-glow-mixed",
        badge: "bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-md",
        priceColor: "text-gradient-cyber",
        button: "bg-gradient-to-r from-cyber-purple via-purple-600 to-cyber-cyan text-white hover:scale-[1.02] shadow-lg shadow-purple-900/40",
        checkColor: "text-cyan-400",
      };
    }

    switch (idx) {
      case 0:
        return {
          cardBorder: "border-slate-800 hover:border-cyan-500/40 bg-gradient-to-b from-cyan-500/5 to-obsidian-950",
          badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
          priceColor: "text-cyan-300",
          button: "bg-obsidian-900 hover:bg-white text-slate-200 hover:text-black border border-slate-800 hover:border-white",
          checkColor: "text-cyan-400",
        };
      case 2:
        return {
          cardBorder: "border-slate-800 hover:border-emerald-500/40 bg-gradient-to-b from-emerald-500/5 to-obsidian-950",
          badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          priceColor: "text-emerald-300",
          button: "bg-obsidian-900 hover:bg-white text-slate-200 hover:text-black border border-slate-800 hover:border-white",
          checkColor: "text-emerald-400",
        };
      case 3:
      default:
        return {
          cardBorder: "border-slate-800 hover:border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-obsidian-950",
          badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          priceColor: "text-amber-300",
          button: "bg-obsidian-900 hover:bg-white text-slate-200 hover:text-black border border-slate-800 hover:border-white",
          checkColor: "text-amber-400",
        };
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INVERSIÓN REFERENCIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ¿Qué <span className="text-gradient-cyber">Necesitas?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-xl font-normal">
            Rango de inversión referencial según la complejidad técnica y el alcance de tu proyecto.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((plan, idx) => {
            const isPopular = idx === 1;
            const styles = getPlanStyles(idx, isPopular);

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${styles.cardBorder}`}
              >
                {/* Popular banner or top badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Solución
                    </span>
                    {plan.badge && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${styles.badge} flex items-center gap-1`}>
                        {isPopular && <Zap className="w-2.5 h-2.5 fill-current" />}
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {plan.title}
                  </h3>
                  
                  {/* Price and delivery */}
                  <div className="mb-4 pb-4 border-b border-slate-800">
                    <div className={`text-2xl font-black font-mono tracking-tight ${styles.priceColor}`}>
                      {plan.price}
                    </div>
                    <span className="text-xs font-mono text-slate-400 mt-1 block">
                      Entrega estimada: {plan.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${styles.checkColor}`} />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={`https://wa.me/56944302556?text=Hola%20Bnjvv09,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20plan%20${encodeURIComponent(plan.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99] ${styles.button}`}
                >
                  <span>Solicitar cotización</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

