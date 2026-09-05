"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const IntroQuote = () => {
  const { introQuote } = portfolioData;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Editorial Sub-tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-[0.25em] text-cyber-cyan uppercase font-semibold mb-6 bg-cyan-500/10 border border-cyan-500/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyber-purple-light" />
          <span>{introQuote.tag}</span>
        </motion.div>

        {/* Statement Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          De la idea al código listo para{" "}
          <span className="text-gradient-cyber font-black">
            producción.
          </span>
        </motion.h2>

        {/* Animated decorative line */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
            className="h-px w-[100px] bg-gradient-to-r from-transparent via-purple-400 to-cyan-400"
          />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="h-px w-[100px] bg-gradient-to-l from-transparent via-purple-400 to-cyan-400"
          />
        </div>

      </div>
    </section>
  );
};

