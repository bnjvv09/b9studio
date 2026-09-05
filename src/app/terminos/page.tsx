import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Bnjvv09 — Estudio de Productos Digitales",
  description:
    "Términos de servicio, propiedad intelectual y condiciones de contratación para proyectos de desarrollo de software y aplicaciones web en Chile.",
  alternates: {
    canonical: "https://bnjvv09.dev/terminos",
  },
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Studio Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a inicio</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              B9
            </span>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-200">
              bnjvv09<span className="text-cyan-400">.dev</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <FileText className="w-4 h-4" />
          <span>CONDICIONES DE CONTRATACIÓN · CHILE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-xs font-mono text-slate-500 mb-12">
          Última actualización: Septiembre de 2026 · Servicios Profesionales de Desarrollo de Software
        </p>

        <div className="space-y-10 text-sm text-slate-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              1. Alcance y Objeto de los Servicios
            </h2>
            <p>
              Los presentes términos regulan la prestación de servicios independientes de diseño, arquitectura, programación de software y desarrollo web por parte de <strong>Bnjvv09</strong> en beneficio del cliente contratante. Las especificaciones técnicas, entregables y cronogramas particulares se detallarán en cada propuesta técnica formal aprobada por ambas partes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              2. Esquema de Pagos y Facturación
            </h2>
            <p>
              Salvo acuerdo expreso en contrario, las condiciones estándar de pago para proyectos independientes son:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>50% de anticipo:</strong> Requerido para reservar disponibilidad técnica e iniciar la fase de arquitectura y diseño.</li>
              <li><strong>50% contra entrega:</strong> Liquidado una vez completadas las pruebas, validado el funcionamiento y previo a la entrega final de accesos de producción o repositorios.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              3. Propiedad Intelectual
            </h2>
            <p>
              Una vez cancelado el 100% del valor total acordado, el cliente adquiere la <strong>plena titularidad y derechos patrimoniales sobre el código fuente</strong> desarrollado específicamente para su proyecto. Bnjvv09 se reserva únicamente el derecho de exhibir el resultado visual como parte de su catálogo profesional de proyectos, salvo pacto de confidencialidad estricto (NDA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              4. Garantía Técnica Post-Lanzamiento
            </h2>
            <p>
              Cada desarrollo incluye un período de <strong>30 días corridos de garantía técnica</strong> a partir del despliegue en producción. Durante este período, se corregirán de forma prioritaria y sin costo adicional cualesquiera errores, bugs o desviaciones respecto a las funcionalidades originalmente acordadas en la propuesta técnica.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              5. Confidencialidad
            </h2>
            <p>
              Ambas partes se comprometen a resguardar la estricta confidencialidad de cualquier material comercial, credenciales de acceso, datos de usuarios o información técnica estratégica intercambiada durante la ejecución de los servicios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono">
              6. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Cualquier controversia derivada de la interpretación o ejecución de estos términos se regirá conforme a las leyes vigentes en la República de Chile, sometiéndose las partes a la competencia de los tribunales ordinarios de justicia.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs font-mono text-slate-600">
        <p>© {new Date().getFullYear()} Bnjvv09 · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
