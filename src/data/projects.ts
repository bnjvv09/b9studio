export interface ProjectHowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectFeatureItem {
  name: string;
  description: string;
  icon: string;
}

export interface ProjectTechGroup {
  category: "FRONTEND" | "BACKEND" | "PAGOS" | "GENERACIÓN";
  items: string[];
}

export interface ProjectExperienceFlowItem {
  step: string;
  title: string;
  icon: string;
  subtitle: string;
}

export interface ProjectGalleryModule {
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  image?: string;
}

export interface ProjectCaseStudyData {
  overview: {
    title: string;
    statement: string;
    details: string;
  };
  challenge: {
    title: string;
    statement: string;
    details: string;
    points: string[];
  };
  solution: {
    title: string;
    statement: string;
    details: string;
    highlights: string[];
  };
  howItWorks: {
    title: string;
    steps: ProjectHowItWorksStep[];
  };
  features: {
    title: string;
    items: ProjectFeatureItem[];
  };
  technology: {
    title: string;
    groups: ProjectTechGroup[];
  };
  experience: {
    title: string;
    statement: string;
    flow: ProjectExperienceFlowItem[];
  };
  gallery: {
    title: string;
    modules: ProjectGalleryModule[];
  };
  nextStep: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
  // Backwards compatibility aliases
  problem: {
    title: string;
    statement: string;
    details: string;
  };
  result: {
    title: string;
    statement: string;
    details: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

export interface ProjectItem {
  slug: string;
  number: string;
  label: string;
  category: string;
  categories: string[];
  name: string;
  title: string;
  projectNumber: string;
  badge: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  year: string;
  demoUrl: string;
  href: string;
  metadata: string;
  type: string;
  status: string;
  technologies: string[];
  featuresList: string[];
  caseStudy: ProjectCaseStudyData;
}

// Extensible Studio Projects Catalog
export const projects: ProjectItem[] = [
  {
    slug: "recuerdoqr",
    number: "01",
    label: "01 — PRODUCTO DESTACADO",
    category: "PRODUCTO DIGITAL",
    categories: ["PRODUCTOS DIGITALES", "DESARROLLO WEB", "E-COMMERCE", "EXPERIENCIAS"],
    name: "RecuerdoQR 💝",
    title: "RecuerdoQR",
    projectNumber: "CASO DE ESTUDIO / 01",
    badge: "PRODUCTO DESTACADO",
    subtitle: "Una experiencia digital que comienza con un código QR.",
    shortDescription:
      "Plataforma e-commerce y creador multimedia que transforma el acto de regalar en una experiencia interactiva accesible al instante desde cualquier smartphone sin descargar aplicaciones.",
    description:
      "RecuerdoQR es una plataforma e-commerce completa con personalizador multimedia en tiempo real, bóveda protegida con PIN de seguridad, contadores dinámicos y pasarela de pago oficial con Mercado Pago.",
    year: "2026",
    demoUrl: "https://recuerdo-qr.vercel.app/",
    href: "/proyectos/recuerdoqr",
    metadata: "2026 · PRODUCTO DIGITAL · NEXT.JS · REACT · SUPABASE · MERCADO PAGO",
    type: "E-Commerce + Experiencia Digital",
    status: "En Producción",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Mercado Pago",
    ],
    featuresList: [
      "Música sincronizada",
      "Contadores en tiempo real",
      "Mensajes interactivos",
      "Galerías fotográficas",
      "Bóveda con PIN de 4 dígitos",
      "100% Personalizable a tu gusto",
      "Ilustraciones y personajes",
      "Checkout Mercado Pago en CLP",
      "Motor vectorial de QR",
    ],
    caseStudy: {
      overview: {
        title: "01 — VISIÓN GENERAL",
        statement:
          "Una plataforma e-commerce que convierte regalos físicos en experiencias interactivas y memorables.",
        details:
          "RecuerdoQR nació para cerrar la brecha entre el regalo físico y el contenido digital. Permite a los usuarios diseñar dedicatorias interactivas, personalizarlas con fotos, cartas y canciones, y entregarlas mediante un código QR exclusivo que se activa al instante al ser escaneado.",
      },
      challenge: {
        title: "02 — EL DESAFÍO",
        statement:
          "Los obsequios digitales tradicionales suelen reducirse a PDFs planos o mensajes estáticos sin emoción.",
        details:
          "El reto consistió en diseñar una experiencia sensorial completa que no exigiera al destinatario instalar aplicaciones ni registrarse, garantizando al mismo tiempo privacidad estricta mediante PIN y una tasa de carga inmediata en redes móviles.",
        points: [
          "Eliminar la fricción de descarga de apps para el destinatario",
          "Garantizar privacidad absoluta en mensajes íntimos con PIN numérico",
          "Integrar pagos automatizados en moneda local chilena (CLP)",
          "Lograr una arquitectura web con carga sub-segundo en smartphones",
        ],
      },
      solution: {
        title: "03 — LA SOLUCIÓN",
        statement:
          "Una arquitectura web moderna centrada en la emoción del destinatario y la simplicidad del creador.",
        details:
          "Desarrollamos una Progressive Web Application con Next.js y React conectada a Supabase para almacenamiento seguro en tiempo real, combinada con un motor vectorial que genera códigos QR de ultra-alta fidelidad listos para impresión física o envío digital.",
        highlights: [
          "Personalizador visual en tiempo real con previsualización móvil",
          "Bóveda de seguridad con teclado numérico integrado para PIN de 4 dígitos",
          "Reproductor de audio interactivo con sincronización de banda sonora",
          "Flujo de checkout seguro con webhooks automáticos de Mercado Pago",
        ],
      },
      howItWorks: {
        title: "04 — CÓMO FUNCIONA",
        steps: [
          {
            number: "01",
            title: "Compra & Activación",
            description:
              "El usuario adquiere la experiencia a través de Mercado Pago en CLP con confirmación instantánea.",
          },
          {
            number: "02",
            title: "Personalización",
            description:
              "Carga fotos, canciones, dedicatorias, personaliza la experiencia a su gusto y define su PIN secreto de 4 dígitos.",
          },
          {
            number: "03",
            title: "Generación del QR",
            description:
              "El motor vectorial compila un código QR nítido listo para imprimir en tarjetas o compartir digitalmente.",
          },
          {
            number: "04",
            title: "Escaneo sin Apps",
            description:
              "El destinatario enfoca la cámara nativa de cualquier smartphone iOS o Android sin instalaciones.",
          },
        ],
      },
      features: {
        title: "05 — CARACTERÍSTICAS TÉCNICAS",
        items: [
          {
            name: "Bóveda con PIN de 4 Dígitos",
            description: "Teclado numérico táctil en pantalla para proteger la privacidad de la experiencia.",
            icon: "Lock",
          },
          {
            name: "Música en Segundo Plano",
            description: "Reproducción sincronizada de canciones especiales mediante Web Audio API.",
            icon: "Music",
          },
          {
            name: "Contador en Tiempo Real",
            description: "Cálculo preciso de días, horas y segundos compartidos en directo.",
            icon: "Clock",
          },
          {
            name: "Galería Fotográfica Táctil",
            description: "Carrusel adaptativo para dispositivos móviles con visualización de alta calidad.",
            icon: "ImageIcon",
          },
          {
            name: "Checkout Oficial Mercado Pago",
            description: "Cobros en pesos chilenos (CLP) con tarjetas de débito, crédito y Webpay Plus.",
            icon: "CreditCard",
          },
          {
            name: "QR Vectorial Dinámico",
            description: "Renderizado en tiempo real exportable a 300 DPI para impresión en tarjetas físicas.",
            icon: "QrCode",
          },
        ],
      },
      technology: {
        title: "06 — ARQUITECTURA & TECNOLOGÍAS",
        groups: [
          {
            category: "FRONTEND",
            items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
          },
          {
            category: "BACKEND",
            items: ["Supabase", "PostgreSQL", "Next.js Server Actions", "Edge Functions"],
          },
          {
            category: "PAGOS",
            items: ["Mercado Pago SDK", "Webhooks HMAC Criptográficos", "Moneda CLP"],
          },
          {
            category: "GENERACIÓN",
            items: ["Motor de QR Vectorial", "SVG to PNG Canvas", "Web Audio API"],
          },
        ],
      },
      experience: {
        title: "07 — FLUJO DE EXPERIENCIA",
        statement:
          "Diseñado para que cada interacción se sienta mágica, fluida y sin barreras técnicas.",
        flow: [
          {
            step: "01",
            title: "Escaneo Físico",
            icon: "QrCode",
            subtitle: "La cámara nativa del teléfono detecta el código QR instantáneamente.",
          },
          {
            step: "02",
            title: "Desbloqueo de Bóveda",
            icon: "Lock",
            subtitle: "Ingreso del PIN numérico secreto para acceder a la carta.",
          },
          {
            step: "03",
            title: "Música & Emoción",
            icon: "Music",
            subtitle: "Comienza a sonar la canción elegida mientras se despliega el contador.",
          },
          {
            step: "04",
            title: "Recuerdo Permanente",
            icon: "Heart",
            subtitle: "Página web privada disponible para siempre en la nube.",
          },
        ],
      },
      gallery: {
        title: "08 — MÓDULOS DE LA EXPERIENCIA",
        modules: [
          {
            title: "Experiencia Móvil Interactiva",
            subtitle: "Diseño optimizado para pantallas táctiles con música en segundo plano",
            tag: "UX Móvil",
            color: "from-purple-500/20 via-cyan-500/15 to-transparent",
          },
          {
            title: "Bóveda con PIN Secreto",
            subtitle: "Teclado numérico y seguridad de acceso para proteger cartas privadas",
            tag: "Seguridad",
            color: "from-pink-500/20 via-purple-500/15 to-transparent",
          },
          {
            title: "Personalizador Multimedia",
            subtitle: "Carga dinámica de dedicatorias, fotografías y selección de canciones",
            tag: "Personalizador",
            color: "from-cyan-500/20 via-blue-500/15 to-transparent",
          },
          {
            title: "Motor de Generación de QR",
            subtitle: "Exportación vectorial en alta fidelidad lista para tarjetas físicas",
            tag: "Motor QR",
            color: "from-emerald-500/20 via-teal-500/15 to-transparent",
          },
        ],
      },
      nextStep: {
        title: "¿Quieres construir algo parecido?",
        subtitle:
          "Si tienes una idea para un producto digital, e-commerce o experiencia interactiva, puedo ayudarte a diseñarla y programarla desde cero con altos estándares técnicos.",
        ctaText: "Iniciar un proyecto",
        ctaHref: "/#contacto",
      },
      // Aliases
      problem: {
        title: "02 — EL DESAFÍO",
        statement:
          "Los obsequios digitales tradicionales suelen reducirse a PDFs planos o mensajes estáticos sin emoción.",
        details:
          "El reto consistió en diseñar una experiencia sensorial completa que no exigiera al destinatario instalar aplicaciones ni registrarse, garantizando al mismo tiempo privacidad estricta mediante PIN y una tasa de carga inmediata en redes móviles.",
      },
      result: {
        title: "03 — LA SOLUCIÓN",
        statement:
          "Una arquitectura web moderna centrada en la emoción del destinatario y la simplicidad del creador.",
        details:
          "Desarrollamos una Progressive Web Application con Next.js y React conectada a Supabase para almacenamiento seguro en tiempo real, combinada con un motor vectorial que genera códigos QR de ultra-alta fidelidad listos para impresión física o envío digital.",
      },
      cta: {
        title: "¿Quieres construir algo parecido?",
        subtitle:
          "Si tienes una idea para un producto digital, e-commerce o experiencia interactiva, puedo ayudarte a diseñarla y programarla desde cero con altos estándares técnicos.",
      },
    },
  },
];
