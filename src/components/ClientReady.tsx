"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Coins,
  ArrowRight,
  MessageCircle,
  FileCheck,
  Workflow,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const CLIENT_PILLARS = [
  {
    step: "01",
    title: "¿Qué podemos construir juntos?",
    description:
      "Sitios web corporativos, landing pages de alta conversión, tiendas online con pasarelas de pago (Mercado Pago en CLP), web apps SaaS y experiencias interactivas con códigos QR.",
    badge: "Soluciones a Medida",
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
  },
  {
    step: "02",
    title: "¿Cómo es el flujo de trabajo?",
    description:
      "Comunicación directa 1-a-1 sin intermediarios. Trabajo con metodología ágil: recibes un enlace de previsualización privado para revisar avances cada 48 a 72 horas.",
    badge: "Transparencia Total",
    icon: <Workflow className="w-5 h-5 text-purple-400" />,
  },
  {
    step: "03",
    title: "Inversión y plazos referenciales",
    description:
      "Proyectos web desde $180.000 CLP (3 a 7 días). E-commerce y sistemas desde $350.000 a $600.000+ CLP (1 a 3 semanas). Estructura de pago 50% inicial y 50% contra entrega final.",
    badge: "Sin Costos Ocultos",
    icon: <Coins className="w-5 h-5 text-emerald-400" />,
  },
  {
    step: "04",
    title: "¿Qué necesito de ti para comenzar?",
    description:
      "Una breve descripción de tu negocio o idea, qué objetivo buscas alcanzar y cualquier material que tengas (logos o textos). Si no tienes textos listos, te asesoro en la redacción.",
    badge: "Cero Complicaciones",
    icon: <FileCheck className="w-5 h-5 text-amber-400" />,
  },
  {
    step: "05",
    title: "Propiedad del código y garantía",
    description:
      "El 100% de la propiedad intelectual del código fuente te pertenece. Incluyo 30 días de garantía y soporte técnico gratuito post-lanzamiento para resolver cualquier eventualidad.",
    badge: "Seguridad Jurídica",
    icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
  },
];

export const ClientReady = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              CLIENT GUIDE & CONTRATACIÓN
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              FAQ & PROCESO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08] mb-6">
            Todo lo que necesitas saber antes de contratarme.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Claridad desde el primer contacto: plazos exactos, qué puedes esperar de mí y cómo transformamos tu inversión en un activo digital que genera valor.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {CLIENT_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <span className="text-2xl font-mono font-black text-slate-600">
                    {pillar.step}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full font-medium">
                    {pillar.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Estándar de calidad garantizado</span>
              </div>
            </motion.div>
          ))}

          {/* Quick Contact Box as 6th card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-950/30 via-obsidian-950 to-purple-950/30 border border-cyan-500/30 flex flex-col justify-between space-y-6 shadow-2xl"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2 font-bold">
                PASO SIGUIENTE
              </span>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Podemos revisar tu idea por WhatsApp o videollamada sin ningún compromiso. Te entregaré un estimado de viabilidad y cronograma en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="https://wa.me/56944302556?text=Hola%20Bnjvv09,%20tengo%20un%20proyecto%20en%20mente%20y%20quiero%20conversar%20sobre%20plazos%20y%20presupuesto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar por WhatsApp</span>
              </a>

              <Link
                href="/#contacto"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-mono flex items-center justify-center gap-2 transition-all"
              >
                <span>Ir al formulario</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
