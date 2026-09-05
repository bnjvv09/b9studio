"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { portfolioData, StatItem } from "@/data/portfolioData";
import { motion, useInView } from "framer-motion";

const AnimatedStatNumber = ({ stat }: { stat: StatItem }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    if (!isInView) return;

    const end = stat.numericValue;
    const duration = 1200;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Eased progress (ease-out quad)
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, stat.numericValue]);

  useEffect(() => {
    animate();
  }, [animate]);

  const formattedNumber =
    stat.prefix === "0"
      ? String(isInView ? count : 0).padStart(2, "0")
      : isInView
      ? count
      : 0;

  // Valor final estático para lectores de pantalla
  const ariaLabel = `${stat.prefix && stat.prefix !== "0" ? stat.prefix : ""}${stat.numericValue}${stat.suffix || ""} ${stat.label}`;

  return (
    <span
      ref={ref}
      aria-label={ariaLabel}
      className={`font-mono text-3xl sm:text-4xl md:text-5xl font-black tracking-tight flex items-baseline ${stat.color || "text-white"}`}
    >
      <span aria-hidden="true">
        {stat.prefix && stat.prefix !== "0" ? stat.prefix : ""}
        {formattedNumber}
        {stat.suffix}
      </span>
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-obsidian-950/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col group ${idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""}`}
            >
              <AnimatedStatNumber stat={stat} />
              <span className="text-xs sm:text-sm text-slate-400 mt-2 font-medium group-hover:text-slate-200 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
