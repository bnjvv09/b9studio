export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  color?: string;
}

import {
  projects,
  type ProjectItem,
  type ProjectCaseStudyData,
  type ProjectHowItWorksStep,
  type ProjectFeatureItem,
  type ProjectTechGroup,
  type ProjectExperienceFlowItem,
  type ProjectGalleryModule,
} from "./projects";

export {
  projects,
  type ProjectItem,
  type ProjectCaseStudyData,
  type ProjectHowItWorksStep,
  type ProjectFeatureItem,
  type ProjectTechGroup,
  type ProjectExperienceFlowItem,
  type ProjectGalleryModule,
};

export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  gradient: string;
  accentColor: string;
}

export interface PricingItem {
  title: string;
  price: string;
  deliveryTime: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  color: string;
}

export interface StackCategory {
  category: "FRONTEND" | "BACKEND" | "DEPLOYMENT" | "PAGOS";
  items: {
    name: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

import {
  studioAvailability,
  getAvailability,
  type AvailabilityStatus,
  type AvailabilityConfig,
} from "./availability";

export {
  studioAvailability,
  getAvailability,
  type AvailabilityStatus,
  type AvailabilityConfig,
};

export const portfolioData = {
  developer: {
    name: "Bnjvv09",
    brand: "Bnjvv09",
    monogram: "B9",
    role: "Desarrollador Full-Stack & Creador Digital",
    statusBadge: studioAvailability.badge,
    statusText: studioAvailability.headline,
    tag: "Bnjvv09.dev",
    tagline: "Construyo productos digitales que se sienten diferentes.",
    subtagline:
      "Desarrollo webs, tiendas online y experiencias interactivas con diseño moderno, rendimiento y sistemas automatizados.",
    coreTechnologies: ["Next.js", "React", "TypeScript", "Supabase"],
    location: "Chile 🇨🇱",
    whatsappUrl:
      "https://wa.me/56944302556?text=Hola%20Bnjvv09,%20vi%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto",
    email: "contacto.bnjvv09@gmail.com",
    aboutText: [
      "No me interesa simplemente hacer páginas web.",
      "Me interesa construir productos que la gente quiera utilizar, compartir y recordar.",
      "Desarrollo desde la interfaz hasta la lógica del servidor, bases de datos, pagos y despliegue.",
      "Es difícil encontrar un error en tu código cuando lo estás buscando, pero es mucho más difícil encontrarlo cuando asumes que tu código está libre de errores.",
    ],
  },

  navigation: [
    { label: "Inicio", href: "/#hero" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Lab", href: "/lab" },
    { label: "Sobre mí", href: "/about" },
    { label: "Contacto", href: "/#contacto" },
  ] as NavItem[],

  // Exact real statistics
  stats: [
    { value: "01", numericValue: 1, prefix: "0", label: "Producto Insignia en Producción", color: "text-cyber-cyan" },
    { value: "+10", numericValue: 10, prefix: "+", label: "Experiencias creadas en RecuerdoQR", color: "text-cyber-purple-light" },
    { value: "100%", numericValue: 100, suffix: "%", label: "Personalizable a tu gusto", color: "text-cyber-pink" },
    { value: "24/7", numericValue: 24, suffix: "/7", label: "Disponibilidad en la nube", color: "text-emerald-400" },
  ] as StatItem[],

  introQuote: {
    tag: "EXPERIENCIAS DIGITALES ÚNICAS",
    headline: "De la idea al código listo para producción.",
  },

  // Extensible Projects collection
  projects: projects,

  // Central featured showcase for Home preview
  featuredProject: projects[0],

  // 4 Services with checklists & vibrant accents
  services: [
    {
      slug: "desarrollo-web",
      number: "01",
      title: "Desarrollo Web a Medida",
      description:
        "Sitios web corporativos y portafolios de alto impacto visual diseñados desde cero con Next.js y React para convertir visitantes en clientes.",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
      features: [
        "Landing pages de alta conversión",
        "Diseño 100% responsivo y adaptativo",
        "Optimización SEO técnica & Core Web Vitals 95+",
        "Micro-interacciones y animaciones suaves",
        "Código limpio, mantenible y escalable",
      ],
      gradient: "from-purple-500/20 via-cyan-500/10 to-transparent",
      accentColor: "text-cyber-purple-light",
    },
    {
      slug: "ecommerce",
      number: "02",
      title: "E-Commerce & Pagos",
      description:
        "Tiendas online modernas con pasarelas de pago automatizadas en CLP, confirmación instantánea de órdenes mediante Webhooks.",
      technologies: ["Mercado Pago API", "Webhooks HMAC", "Supabase", "Next.js"],
      features: [
        "Integración oficial de Mercado Pago y Webpay Plus",
        "Webhooks criptográficos para confirmación en tiempo real",
        "Checkout optimizado para alta tasa de conversión",
        "Catálogos dinámicos y panel de control",
        "Trazabilidad de pagos y notificaciones automáticas",
      ],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      accentColor: "text-cyber-cyan",
    },
    {
      slug: "web-apps",
      number: "03",
      title: "Aplicaciones Web",
      description:
        "Sistemas web dinámicos con bases de datos en la nube en Supabase, autenticación segura y lógica de servidor rápida.",
      technologies: ["Supabase", "Next.js Server Actions", "TypeScript", "React"],
      features: [
        "Base de datos en la nube con Supabase",
        "Autenticación segura de usuarios",
        "Server Actions para interacciones ultrarrápidas",
        "Paneles de administración intuitivos",
        "Arquitectura modular lista para escalar",
      ],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accentColor: "text-emerald-400",
    },
    {
      slug: "mantenimiento-actualizaciones",
      number: "04",
      title: "Mantención & Actualizaciones Web",
      description:
        "Soporte técnico continuo para sitios y tiendas online existentes: subida de productos, cambio de precios, banners, nuevas secciones y optimización.",
      technologies: ["Next.js", "React", "Shopify / WooCommerce", "Mercado Pago", "Tailwind CSS"],
      features: [
        "Actualización de productos, precios y banners",
        "Diseño y adición de nuevas secciones y páginas",
        "Optimización de velocidad y Core Web Vitals",
        "Resolución de errores y soporte de pasarelas de pago",
        "Atención prioritaria y directa vía WhatsApp",
      ],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      accentColor: "text-amber-400",
    },
  ] as ServiceItem[],

  // Configurable pricing references
  pricing: [
    {
      title: "Landing Page",
      price: "Desde $180.000 CLP",
      deliveryTime: "5 - 7 días hábiles",
      description:
        "Ideal para presentar tu negocio, marca personal o producto con un diseño memorable y máxima conversión.",
      features: [
        "Diseño UI/UX exclusivo (sin plantillas)",
        "100% adaptable a móviles y tablets",
        "Optimización SEO y Core Web Vitals 95+",
        "Formulario de contacto conectado a WhatsApp",
        "Despliegue y configuración de dominio",
      ],
      badge: "Esencial",
    },
    {
      title: "E-Commerce",
      price: "Desde $350.000 CLP",
      deliveryTime: "10 - 15 días hábiles",
      description:
        "Plataforma de ventas online con cobros automatizados en pesos chilenos y confirmación de pedidos instantánea.",
      features: [
        "Checkout automatizado con Mercado Pago",
        "Confirmación de órdenes vía Webhook",
        "Catálogo administrable de productos",
        "Panel de pedidos y transacciones",
        "Comprobantes digitales y notificaciones",
      ],
      badge: "Más Solicitado",
    },
    {
      title: "Web App",
      price: "Desde $480.000 CLP",
      deliveryTime: "15 - 20 días hábiles",
      description:
        "Aplicación web a medida con base de datos en Supabase, sistema de usuarios y lógica de negocio específica.",
      features: [
        "Base de datos en la nube con Supabase",
        "Sistema de autenticación y roles",
        "Lógica backend y Server Actions",
        "Panel de control y reportes",
        "Arquitectura escalable y mantenible",
      ],
      badge: "Avanzado",
    },
    {
      title: "Mantención & Mejoras",
      price: "Desde $60.000 CLP",
      deliveryTime: "24 - 48 hrs hábiles",
      description:
        "Para tiendas o páginas web existentes que necesitan nuevo contenido, productos, páginas o resolver fallos.",
      features: [
        "Carga y actualización de productos y precios",
        "Diseño de nuevas secciones y landing pages",
        "Resolución de fallos y optimización de velocidad",
        "Soporte directo prioritario por WhatsApp",
        "Modalidad mensual o por requerimiento",
      ],
      badge: "Continuo",
    },
  ] as PricingItem[],

  // 5 Steps of Work Process
  workProcess: [
    {
      step: "01",
      title: "IDEA",
      tagline: "Entendemos qué quieres construir.",
      description:
        "Analizamos a fondo los objetivos de tu negocio, el público objetivo y definimos el alcance técnico y cronograma con total claridad.",
      deliverables: ["Definición de requerimientos", "Presupuesto y plazos acordados", "Estructura inicial de páginas y flujos"],
      color: "text-cyber-purple-light",
    },
    {
      step: "02",
      title: "DISEÑO",
      tagline: "Creamos la experiencia visual.",
      description:
        "Diseñamos una interfaz moderna, limpia y atractiva centrada en la experiencia del usuario y optimizada para convertir visitantes en clientes.",
      deliverables: ["Prototipos en alta fidelidad", "Sistema de diseño y tipografía", "Microinteracciones planificadas"],
      color: "text-cyber-cyan",
    },
    {
      step: "03",
      title: "DESARROLLO",
      tagline: "Construyo frontend, backend, base de datos y sistemas.",
      description:
        "Escribo código limpio, tipado y modular en Next.js con TypeScript, integrando bases de datos Supabase, pasarelas de pago y APIs.",
      deliverables: ["Frontend reactivo y ultra veloz", "Lógica backend y base de datos Supabase", "Integración de pagos en CLP"],
      color: "text-cyber-pink",
    },
    {
      step: "04",
      title: "LANZAMIENTO",
      tagline: "Deploy, dominio, pagos y optimización.",
      description:
        "Auditoría técnica de rendimiento, configuración de dominio DNS, certificados SSL, SEO técnico y despliegue continuo en Vercel.",
      deliverables: ["Despliegue en Vercel Edge", "Puntuación 95+ en Google Lighthouse", "Sitemap XML e indexación en Google"],
      color: "text-emerald-400",
    },
    {
      step: "05",
      title: "SOPORTE",
      tagline: "Mejoras, mantenimiento y evolución del producto.",
      description:
        "Acompañamiento post-lanzamiento para asegurar estabilidad técnica, resolver dudas y planificar nuevas características para tu producto.",
      deliverables: ["Garantía de soporte técnico", "Documentación del sistema", "Evolución y escalabilidad del software"],
      color: "text-cyan-300",
    },
  ] as ProcessStep[],

  // Stack in 4 categories - Real Verified Technologies & Security Standards
  techStack: [
    {
      category: "FRONTEND",
      items: [
        { name: "Next.js 14", description: "App Router, SSR, SSG y Server Actions de alto rendimiento", icon: "Blocks", color: "text-cyber-cyan" },
        { name: "React 18 & TypeScript", description: "Arquitectura modular y tipado estricto para código seguro y predecible", icon: "FileCode", color: "text-blue-400" },
        { name: "Bóveda con PIN", description: "Control de acceso numérico privado para resguardo de cartas confidenciales", icon: "Lock", color: "text-pink-400" },
        { name: "Certificado SSL / HTTPS", description: "Navegación segura con candado y cifrado TLS de 256 bits en tránsito", icon: "ShieldCheck", color: "text-cyan-300" },
      ],
    },
    {
      category: "BACKEND",
      items: [
        { name: "Supabase (PostgreSQL)", description: "Base de datos en la nube y almacenamiento seguro de archivos multimedia", icon: "Database", color: "text-emerald-400" },
        { name: "Row Level Security (RLS)", description: "Políticas de aislamiento en base de datos para blindar el acceso a los datos", icon: "ShieldCheck", color: "text-emerald-400" },
        { name: "Server Actions Seguras", description: "Ejecución de lógica en el servidor sin exponer claves de API al cliente", icon: "Cpu", color: "text-purple-400" },
        { name: "Hashes & UUIDs Criptográficos", description: "Identificadores no predecibles que impiden adivinar URLs ajenas", icon: "Lock", color: "text-teal-400" },
      ],
    },
    {
      category: "DEPLOYMENT",
      items: [
        { name: "Vercel Edge Network", description: "Despliegue global serverless con CDN de ultra baja latencia", icon: "Cloud", color: "text-sky-400" },
        { name: "Protección DDoS & WAF", description: "Defensa perimetral automatizada contra ataques de red y tráfico malicioso", icon: "Shield", color: "text-emerald-400" },
        { name: "Variables Cifradas", description: "Gestión segura de credenciales y secretos de producción en la nube", icon: "KeyRound", color: "text-amber-400" },
        { name: "Git & CI/CD", description: "Control de versiones, compilación estricta y pruebas antes de publicar", icon: "GitBranch", color: "text-orange-400" },
      ],
    },
    {
      category: "PAGOS",
      items: [
        { name: "Mercado Pago & Webpay", description: "Pasarela oficial con cobros en pesos chilenos (CLP) y tarjetas bancarias", icon: "CreditCard", color: "text-amber-400" },
        { name: "Norma Bancaria PCI-DSS", description: "Certificación internacional de máxima seguridad para transacciones", icon: "ShieldCheck", color: "text-emerald-400" },
        { name: "Webhooks HMAC SHA-256", description: "Verificación criptográfica para evitar compras falsas o duplicadas", icon: "Lock", color: "text-cyan-400" },
        { name: "Checkout 100% Cifrado", description: "Procesamiento seguro sin almacenar datos sensibles de tarjetas", icon: "CheckCircle2", color: "text-emerald-400" },
      ],
    },
  ] as StackCategory[],

  // Currently / Now building
  nowBuilding: {
    tag: "NOW BUILDING",
    subtag: "Building ideas into reality.",
    items: [
      "Construyendo RecuerdoQR",
      "Desarrollando productos propios",
      "Abierto a nuevos proyectos freelance",
    ],
  },

  // Exact code representation for About Me
  aboutCode: `const developer = {
  name: 'Bnjvv09',
  role: 'Desarrollador Full-Stack',
  stack: ['Next.js', 'React', 'Supabase', 'Tailwind'],
  activeProject: 'RecuerdoQR',
  status: 'Construyendo software listo para producción'
};`,
};
