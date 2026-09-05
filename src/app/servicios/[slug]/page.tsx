import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, ServiceDetail } from "@/data/services";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Terminal,
  ShieldCheck,
} from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Bnjvv09",
    };
  }

  const title = `${service.title} — Servicios de Desarrollo | Bnjvv09`;
  const description = service.description;
  const url = `https://bnjvv09.dev/servicios/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Bnjvv09 — Estudio de Productos Digitales",
      locale: "es_CL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hola Bnjvv09, estoy interesado en cotizar el servicio de *${service.title}* para mi proyecto.`
  );
  const whatsappUrl = `https://wa.me/56944302556?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Studio Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/#servicios"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Todos los servicios</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200 hidden sm:inline">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cotizar</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Service Hero */}
        <section className="mb-20 sm:mb-28">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${service.badgeColor}`}>
              SERVICIO {service.number}
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {service.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-gradient-cyber font-bold tracking-tight mb-6 max-w-3xl leading-snug">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal mb-8">
            {service.description}
          </p>

          {/* Reference Meta Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Inversión Referencial
                </span>
                <span className="text-sm font-mono font-bold text-white">
                  {service.priceStartingAt}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Tiempo Estimado
                </span>
                <span className="text-sm font-mono font-bold text-white">
                  {service.deliveryTime}
                </span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-slate-200 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Consultar por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 text-xs sm:text-sm font-medium transition-all"
            >
              <span>Completar formulario de proyecto</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
              QUÉ INCLUYE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Entregables del Proyecto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-200 leading-relaxed font-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20 sm:mb-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08]">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase block mb-2">
              VENTAJAS COMPETITIVAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Por Qué Elegir Este Servicio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/[0.05] flex items-start gap-3"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Stepper */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-2">
              METODOLOGÍA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Cómo Trabajamos Juntos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-black text-cyan-400 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 sm:mb-28">
          <div className="p-8 rounded-3xl bg-black/50 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                TECNOLOGÍAS PRINCIPALES
              </span>
              <p className="text-sm text-slate-200">
                Construido con herramientas de estándar internacional.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20 sm:mb-28">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-2">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Dudas Habituales
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion CTA Footer Banner */}
        <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-[#0b101c] to-purple-950/20 border border-white/[0.08] text-center space-y-6">
          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block">
            COTIZA TU PROYECTO
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
            Comencemos a trabajar en tu {service.title}.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            Hablemos sobre los detalles de tu idea y te entregaré una propuesta técnica a medida con plazos y cotización formal.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02] shadow-xl"
            >
              <span>Contactar por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs sm:text-sm font-medium transition-all"
            >
              <span>Formulario de contacto</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </section>
      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Estudio de Productos Digitales</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
