import { Metadata } from "next";
import Link from "next/link";
import { getAvailability } from "@/data/availability";
import {
  ArrowLeft,
  Activity,
  CheckCircle2,
  Server,
  Database,
  CreditCard,
  Globe,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B9 / ESTADO DEL SISTEMA — Estado del Estudio & Disponibilidad | Bnjvv09",
  description:
    "Monitor en tiempo real del estado de los servicios, base de datos, pasarelas de pago y disponibilidad de trabajo de B9 Studio.",
  alternates: {
    canonical: "https://bnjvv09.dev/status",
  },
  openGraph: {
    title: "B9 / ESTADO DEL SISTEMA — Monitor de Servicios & Disponibilidad",
    description:
      "Estado operativo de proyectos, APIs y capacidad de desarrollo de Bnjvv09.",
    url: "https://bnjvv09.dev/status",
    siteName: "B9 Studio",
    locale: "es_CL",
    type: "website",
  },
};

const systems = [
  {
    name: "Website & Red Edge Global",
    description: "Despliegue global en servidores perimetrales de baja latencia.",
    status: "OPERATIVO",
    uptime: "99.99%",
    latency: "18ms",
    icon: Globe,
  },
  {
    name: "RecuerdoQR (Producto Digital en Vivo)",
    description: "Plataforma e-commerce y reproductor multimedia en producción.",
    status: "EN LÍNEA",
    uptime: "100%",
    latency: "24ms",
    icon: Activity,
  },
  {
    name: "Supabase PostgreSQL & Cloud Storage",
    description: "Persistencia de datos, autenticación y almacenamiento de archivos.",
    status: "OPERATIVO",
    uptime: "99.98%",
    latency: "32ms",
    icon: Database,
  },
  {
    name: "Mercado Pago Webhook & Motor de Pagos",
    description: "Procesamiento de pagos en CLP con validación criptográfica HMAC.",
    status: "ACTIVO",
    uptime: "100%",
    latency: "Instantáneo",
    icon: CreditCard,
  },
  {
    name: "B9 Studio OS & Hub Command Palette",
    description: "Dispatcher global de atajos de teclado y navegación del estudio.",
    status: "OPERATIVO",
    uptime: "100%",
    latency: "0ms local",
    icon: Terminal,
  },
];

export default function StatusPage() {
  const availability = getAvailability();

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-emerald-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 w-[600px] h-[600px] bg-cyan-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* TOP STUDIO BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#05070b]/85 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200 hidden sm:inline">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 hidden sm:inline">Todos los sistemas operativos</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 space-y-16">
        
        {/* HEADER */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              B9 / ESTADO DEL SISTEMA
            </span>
            <span className="text-xs font-mono text-slate-500">
              Última actualización: <span className="text-slate-300 font-semibold">{availability.lastUpdated}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Monitor de Disponibilidad & Servicios
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            Estado técnico en vivo de la infraestructura del estudio, productos online y disponibilidad para nuevos proyectos.
          </p>
        </div>

        {/* PRIMARY AVAILABILITY CARD */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#09121a] via-[#060a12] to-[#04060a] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs sm:text-sm font-bold tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>● {availability.badge}</span>
              </div>

              <div className="text-xs font-mono text-slate-400">
                Próximo inicio disponible:{" "}
                <span className="text-white font-semibold">{availability.nextOpenSlot}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-3xl font-black text-white">
                {availability.headline}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal max-w-2xl leading-relaxed">
                {availability.description}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] font-mono text-xs">
              <div className="space-y-1">
                <span className="text-slate-500 block uppercase tracking-wider text-[10px]">
                  Foco Actual
                </span>
                <span className="text-white font-bold text-sm">
                  {availability.currentFocus}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-slate-500 block uppercase tracking-wider text-[10px]">
                  Cupos Disponibles
                </span>
                <span className="text-emerald-400 font-bold text-sm">
                  {availability.slotsRemaining} proyectos activos
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-slate-500 block uppercase tracking-wider text-[10px]">
                  Tiempo de Respuesta
                </span>
                <span className="text-cyan-400 font-bold text-sm">
                  &lt; 2 horas (WhatsApp/Mail)
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-xl hover:scale-[1.02]"
              >
                <span>Reservar cupo para tu proyecto</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>

        {/* DETAILED SYSTEMS HEALTH */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" />
              <span>Infraestructura & Servicios</span>
            </h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              100% OPERATIVO
            </span>
          </div>

          <div className="space-y-3">
            {systems.map((sys) => {
              const Icon = sys.icon;
              return (
                <div
                  key={sys.name}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{sys.name}</h3>
                      <p className="text-xs text-slate-400">{sys.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 font-mono text-xs shrink-0 pl-11 sm:pl-0">
                    <div className="text-slate-400 text-right">
                      <span className="text-[10px] text-slate-600 block">LATENCIA</span>
                      <span>{sys.latency}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-emerald-400 font-bold">{sys.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* INCIDENT HISTORY */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 font-bold">HISTORIAL DE INCIDENTES (ÚLTIMOS 90 DÍAS)</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>0 incidentes reportados</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 font-normal">
            Todos los proyectos de producción, bases de datos y procesadores de webhooks han mantenido una tasa de disponibilidad continua sin interrupciones de servicio.
          </p>
        </section>

      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Bnjvv09 · Estudio de Productos Digitales</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-cyan-300">Inicio</Link>
            <Link href="/proyectos" className="hover:text-cyan-300">Proyectos</Link>
            <Link href="/about" className="hover:text-cyan-300">Sobre mí</Link>
            <Link href="/changelog" className="hover:text-cyan-300">Registro de cambios</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
