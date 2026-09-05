import { Metadata } from "next";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { getAvailability } from "@/data/availability";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Compass,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Zap,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bnjvv09 — Desarrollador Independiente · Creador de Productos · Diseñador Digital",
  description:
    "Conoce la filosofía, principios de ingeniería, trayectoria y productos que construye Bnjvv09 desde Chile.",
  alternates: {
    canonical: "https://bnjvv09.dev/about",
  },
  openGraph: {
    title: "Bnjvv09 — Desarrollador Independiente · Creador de Productos · Diseñador Digital",
    description:
      "Filosofía de trabajo, principios, stack técnico y visión de producto de Bnjvv09.",
    url: "https://bnjvv09.dev/about",
    siteName: "Bnjvv09 Studio",
    locale: "es_CL",
    type: "profile",
  },
};

const principles = [
  {
    number: "01",
    title: "Lanzar rápido, pulir obsesivamente",
    description:
      "Una idea no validada en producción vale cero. Lanzo rápido para comprobar su valor en el mundo real, pero pulo cada micro-interacción, espaciado y transición hasta que se sienta impecable.",
  },
  {
    number: "02",
    title: "El diseño es cómo funciona",
    description:
      "El diseño visual no es decoración cosmética. Es cómo se siente el flujo, cómo responde un botón al tacto, cuán rápido carga la página y cómo se guía la atención del usuario sin confusión.",
  },
  {
    number: "03",
    title: "Simplicidad sobre sofisticación innecesaria",
    description:
      "Prefiero arquitecturas comprensibles, código tipado y componentes modulares antes que soluciones sobre-complejas. La simplicidad escala mejor y genera menos incidencias técnicas.",
  },
  {
    number: "04",
    title: "Responsabilidad total: de la base de datos al píxel",
    description:
      "Asumo la responsabilidad integral del producto: desde el modelado en PostgreSQL y webhooks de pago hasta la estética tipográfica y la optimización de Core Web Vitals.",
  },
];

const productTypes = [
  {
    icon: Sparkles,
    tag: "EXPERIENCIAS MEMORABLES",
    title: "Productos Digitales Sensoriales",
    description:
      "Plataformas interactivas que conectan el mundo físico con el digital. Ejemplo: RecuerdoQR, donde un código QR se convierte en una cápsula multimedia con música sincronizada, bóveda con PIN y cartas personalizadas.",
  },
  {
    icon: Zap,
    tag: "E-COMMERCE & TRANSACCIONAL",
    title: "Sistemas de Venta con Checkout Instantáneo",
    description:
      "Tiendas online y embudos de pago optimizados para alta conversión con Mercado Pago en pesos chilenos (CLP), confirmación inmediata vía Webhook HMAC y cero pasos innecesarios.",
  },
  {
    icon: Layers,
    tag: "HERRAMIENTAS & SAAS",
    title: "Micro-SaaS y Paneles Dinámicos",
    description:
      "Aplicaciones web con autenticación segura, bases de datos reactivas en Supabase y Server Actions para interactuar sin tiempos de espera perceptibles.",
  },
  {
    icon: Cpu,
    tag: "LAB & SISTEMAS",
    title: "Interfaces Experimentales & Prototipos",
    description:
      "Exploraciones con Canvas, sincronización en tiempo real (Lua de Roblox a paneles web), controladores para IA y componentes interactivos avanzados.",
  },
];

const timeline = [
  {
    year: "2026",
    badge: "ACTUALIDAD",
    title: "Fundación de B9 Studio & Lanzamiento de RecuerdoQR",
    description:
      "Lanzamiento comercial de RecuerdoQR en producción con checkout en CLP y personalizador dinámico. Consolidación de B9 Studio como estudio independiente enfocado en software de alta fidelidad.",
  },
  {
    year: "2025",
    badge: "EVOLUCIÓN",
    title: "Next.js App Router, Supabase & Webhooks",
    description:
      "Especialización profunda en el ecosistema Next.js 14, arquitecturas serverless en Edge, modelado relacional en Supabase e integración de pasarelas de pago criptográficas.",
  },
  {
    year: "2023 - 2024",
    badge: "FUNDAMENTOS",
    title: "TypeScript Riguroso, React & Sistemas de Diseño",
    description:
      "Transición a desarrollo web profesional de ciclo completo. Dominio de TypeScript para garantizar código predecible, arquitectura de componentes modulares y Tailwind CSS.",
  },
  {
    year: "2020 - 2022",
    badge: "ORÍGENES",
    title: "Primeros Pasos en Scripting & Entornos Virtuales",
    description:
      "Descubrimiento de la programación a través de la creación de experiencias interactivas y scripts en Lua para Roblox. Aprendizaje de lógica condicional, bucles de eventos y optimización de memoria.",
  },
];

const techContext = [
  {
    name: "Next.js 14 & React 18",
    role: "Framework Principal",
    why: "Permite renderizar en el servidor (SSR/SSG), ejecutar Server Actions sin crear APIs intermedias y servir páginas estáticas con velocidad Edge.",
  },
  {
    name: "TypeScript 5",
    role: "Lenguaje Principal",
    why: "No concibo escribir código en producción sin tipado estricto. Previene el 90% de los errores en tiempo de compilación y documenta el sistema automáticamente.",
  },
  {
    name: "Tailwind CSS & Framer Motion",
    role: "Estilos & Fisiología Visual",
    why: "Tailwind entrega diseño atómico sin CSS innecesario. Framer Motion aporta física de resortes elásticos para que cada interacción se sienta viva.",
  },
  {
    name: "Supabase (PostgreSQL)",
    role: "Persistencia & Backend Cloud",
    why: "Entrega la robustez de PostgreSQL con políticas de seguridad a nivel de fila (RLS), autenticación de usuarios y almacenamiento seguro de archivos.",
  },
  {
    name: "Mercado Pago SDK",
    role: "Infraestructura Transaccional",
    why: "Permite cobrar en moneda local (CLP) con tarjetas de débito, crédito y Webpay Plus, confirmando pagos de forma automática mediante webhooks HMAC.",
  },
];

export default function AboutPage() {
  const { developer } = portfolioData;
  const availability = getAvailability();

  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      {/* Background ambient glow spots */}
      <div className="absolute top-20 left-1/4 w-[700px] h-[700px] bg-purple-600/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40rem] right-1/4 w-[600px] h-[600px] bg-cyan-600/[0.07] rounded-full blur-[160px] pointer-events-none" />

      {/* TOP STUDIO BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#05070c]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-purple via-purple-600 to-cyber-cyan flex items-center justify-center font-mono font-bold text-xs text-white shadow-md shadow-purple-500/30">
              {developer.monogram}
            </div>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/proyectos"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors hidden sm:inline"
            >
              Proyectos
            </Link>
            <Link
              href="/lab"
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors hidden sm:inline"
            >
              Lab
            </Link>
            <Link
              href="/status"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold">ESTADO</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 space-y-24 sm:space-y-32">
        
        {/* 1. FOUNDER HERO PRESENTATION */}
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FUNDADOR & CREADOR DE PRODUCTOS</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              {developer.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gradient-cyber font-bold tracking-tight">
              Desarrollador Independiente · Creador de Productos · Diseñador Digital
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
              <span>Ubicación:</span>
              <span className="text-white font-semibold">Chile 🇨🇱</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
              <span>Estudio:</span>
              <span className="text-cyan-400 font-semibold">B9 Digital Studio</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{availability.badge}</span>
            </span>
          </div>

          {/* Intro Statement Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a0e1a] via-[#06080f] to-[#04060a] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              <p className="text-xl sm:text-2xl font-semibold text-white">
                No me considero simplemente un desarrollador que escribe líneas de código para cumplir un ticket.
              </p>
              <p>
                Me considero un <strong>creador de productos</strong>. Me apasiona tomar una idea abstracta, moldear su interfaz hasta que se sienta intuitiva y emocionante, conectar su infraestructura de base de datos y pagos, y lanzarla al mundo real para que las personas la utilicen y la recuerden.
              </p>
              <p className="text-cyan-300 font-medium pt-2">
                Combino la sensibilidad visual de un diseñador de producto con el rigor técnico y la arquitectura de un ingeniero full-stack.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FILOSOFÍA DE TRABAJO */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-pink-400 uppercase">
              01 — MANIFIESTO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Filosofía de Trabajo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Diseño con Propósito Humano</span>
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                Cada botón, cada margen y cada micro-animación debe tener una razón de existir. No diseño para rellenar espacio en pantalla; diseño para reducir la carga cognitiva del usuario y hacer que la experiencia se sienta natural.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Velocidad sin Concesiones</span>
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                La velocidad es una característica de diseño. Un sitio web que tarda 3 segundos en cargar rompe la magia. Optimizo imágenes, elimino scripts innecesarios y garantizo 0 Cumulative Layout Shift en cada proyecto.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-pink-500/30 transition-all space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-pink-400" />
                <span>Certeza Transaccional</span>
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                Cuando hay dinero o datos personales en juego, el software no puede fallar. Implemento webhooks criptográficos con verificación HMAC, control estricto de tipos en TypeScript y políticas de seguridad RLS.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Memoria & Emoción</span>
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                El software más valioso es aquel que las personas recuerdan con aprecio. Ya sea un regalo multimedia como RecuerdoQR o una tienda virtual para un negocio familiar, busco que la experiencia deje una huella positiva.
              </p>
            </div>
          </div>
        </section>

        {/* 3. QUÉ TIPO DE PRODUCTOS ME GUSTA CONSTRUIR */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              02 — FOCO DE PRODUCTOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Qué tipo de productos me gusta construir
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal">
              No acepto cualquier encargo; me concentro en proyectos donde la experiencia de usuario y la solidez técnica marcan la diferencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productTypes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 space-y-4 group shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {item.tag}
                    </span>
                    <Icon className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. TECNOLOGÍAS CON CONTEXTO */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-purple-400 uppercase">
              03 — STACK CONTEXTUAL
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Tecnologías y por qué las elijo
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal">
              No utilizo herramientas por moda. Cada elemento de mi stack está seleccionado para maximizar velocidad, predictibilidad y mantenibilidad a largo plazo.
            </p>
          </div>

          <div className="space-y-4">
            {techContext.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white">{tech.name}</h3>
                    <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                      {tech.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-normal leading-relaxed">
                    {tech.why}
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 hidden md:block" />
              </div>
            ))}
          </div>
        </section>

        {/* 5. COSAS QUE ESTOY CONSTRUYENDO ACTIVAMENTE */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-amber-400 uppercase">
              04 — CONSTRUYENDO AHORA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Qué estoy construyendo hoy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-950/20 via-black to-purple-950/20 border border-pink-500/20 space-y-3">
              <span className="text-xs font-mono text-pink-400 font-bold">01 · PRODUCTO INSIGNIA</span>
              <h3 className="text-lg font-bold text-white">RecuerdoQR</h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Ampliando catálogo de temáticas, optimizando el generador vectorial y preparando la integración para nuevos métodos de pago.
              </p>
              <Link
                href="/proyectos/recuerdoqr"
                className="inline-flex items-center gap-1 text-xs font-mono text-pink-400 hover:text-pink-300 pt-1"
              >
                <span>Ver caso de estudio</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-black to-blue-950/20 border border-cyan-500/20 space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-bold">02 · LABORATORIO</span>
              <h3 className="text-lg font-bold text-white">B9 Lab</h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Desarrollando micro-interfaces, componentes táctiles de Dynamic Island y experimentos de sincronización en tiempo real.
              </p>
              <Link
                href="/lab"
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1"
              >
                <span>Explorar Lab</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 via-black to-teal-950/20 border border-emerald-500/20 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold">03 · FREELANCE SELECCIONADO</span>
              <h3 className="text-lg font-bold text-white">Proyectos a Medida</h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Colaborando con emprendedores y marcas que buscan rediseñar su presencia web o construir su tienda e-commerce desde cero.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 pt-1"
              >
                <span>Iniciar conversación</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. PRINCIPIOS DE INGENIERÍA & DISEÑO */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-emerald-400 uppercase">
              05 — PRINCIPIOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Principios que guían mis decisiones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-cyan-400/80">
                    {item.number}
                  </span>
                  <Terminal className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. TIMELINE DE TRAYECTORIA */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              06 — TRAYECTORIA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Timeline de Evolución
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal">
              El camino desde los primeros scripts interactivos hasta el desarrollo de productos digitales en producción.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
            {timeline.map((item, idx) => (
              <div key={item.year} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#05070c] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-base font-mono font-bold text-white">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-200">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CONTACTO & COLABORACIÓN DIRECTA */}
        <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-[#070b14] to-purple-950/20 border border-white/[0.08] text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block">
              07 — CONSTRUYAMOS ALGO ÚNICO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              ¿Tienes una idea que quieras convertir en realidad?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Estoy disponible para colaborar en proyectos seleccionados de desarrollo web, tiendas online y aplicaciones a medida con altos estándares técnicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all hover:bg-slate-200 hover:scale-[1.02] shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar mensaje</span>
            </Link>

            <a
              href={developer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-mono transition-all"
            >
              <span>WhatsApp Directo (+56 9 4430 2556)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09 · Estudio de Productos Digitales</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/proyectos" className="hover:text-cyan-300">Proyectos</Link>
            <Link href="/lab" className="hover:text-cyan-300">Lab</Link>
            <Link href="/status" className="hover:text-cyan-300">Estado</Link>
            <Link href="/changelog" className="hover:text-cyan-300">Registro de cambios</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
