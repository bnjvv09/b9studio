export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  priceStartingAt: string;
  deliveryTime: string;
  technologies: string[];
  deliverables: string[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: ServiceFaq[];
  accentColor: string;
  badgeColor: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "desarrollo-web",
    number: "01",
    title: "Desarrollo Web a Medida",
    tagline: "Sitios web corporativos, landing pages de alta conversión y portafolios de impacto internacional.",
    description:
      "Diseño y desarrollo sitios web profesionales desde cero, sin plantillas genéricas. Cada proyecto se construye con arquitectura moderna Next.js para asegurar tiempos de carga ultra-rápidos, posicionamiento SEO orgánico y una estética editorial que cautiva a tus clientes.",
    category: "DESARROLLO WEB",
    priceStartingAt: "Desde $180.000 CLP",
    deliveryTime: "3 a 7 días hábiles",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Diseño 100% responsivo y adaptativo para todos los dispositivos",
      "Optimización Core Web Vitals (Puntuación 95+ en PageSpeed)",
      "SEO técnico completo (Meta tags, OpenGraph, Sitemap XML, Schema)",
      "Animaciones y micro-interacciones suaves que enriquecen la UX",
      "Integración de formulario de contacto con redirección a WhatsApp y Email",
      "Configuración de hosting ultra-rápido en Vercel con certificado SSL gratuito",
    ],
    benefits: [
      "Transmite máxima autoridad y confianza a tus visitantes",
      "Carga instantánea en smartphones, incluso con conexiones móviles 4G",
      "Estructura orientada a transformar visitantes en clientes reales",
      "Código limpio y escalable sin costos recurrentes ocultos",
    ],
    process: [
      {
        step: "01",
        title: "Reunión & Alcance",
        description: "Definimos tus objetivos, público objetivo, contenido y estructura clave.",
      },
      {
        step: "02",
        title: "Diseño & Wireframes",
        description: "Construyo la dirección estética y la jerarquía visual de la página.",
      },
      {
        step: "03",
        title: "Desarrollo & Animación",
        description: "Programación en Next.js con TypeScript, animaciones y buenas prácticas.",
      },
      {
        step: "04",
        title: "Optimización & Lanzamiento",
        description: "Auditoría SEO, pruebas móviles, configuración de dominio y entrega final.",
      },
    ],
    faqs: [
      {
        question: "¿Incluye el dominio y el hosting?",
        answer:
          "Te asesoro para registrar tu dominio en NIC Chile (.cl) o internacional (.com). La web se despliega en infraestructura de nivel mundial en Vercel con SSL gratuito de por vida.",
      },
      {
        question: "¿Puedo actualizar el contenido más adelante?",
        answer:
          "Sí, el código se entrega modular y estructurado. Si necesitas autogestión frecuente, podemos vincular un CMS headless o panel de administración.",
      },
      {
        question: "¿Cómo es el pago?",
        answer:
          "Se realiza en dos partes: 50% al iniciar el proyecto tras aprobar la propuesta técnica y 50% contra entrega y satisfacción antes del lanzamiento.",
      },
    ],
    accentColor: "from-purple-500/20 via-cyan-500/10 to-transparent",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
  {
    slug: "ecommerce",
    number: "02",
    title: "E-Commerce & Pagos",
    tagline: "Tiendas online y venta de productos digitales con integración oficial de Mercado Pago en Chile.",
    description:
      "Plataformas de comercio electrónico diseñadas para maximizar conversiones y automatizar cobros. Integro la pasarela de pagos oficial de Mercado Pago en pesos chilenos (CLP) con confirmación instantánea vía Webhooks y entrega automática.",
    category: "E-COMMERCE & CHECKOUT",
    priceStartingAt: "Desde $350.000 CLP",
    deliveryTime: "1 a 2 semanas",
    technologies: ["Next.js 14", "React 18", "Supabase", "PostgreSQL", "Mercado Pago SDK", "Tailwind CSS"],
    deliverables: [
      "Catálogo dinámico de productos físicos o digitales",
      "Checkout transparente y seguro con Mercado Pago (Tarjetas de crédito, débito y Webpay)",
      "Sistema de Webhooks automáticos para confirmación instantánea de órdenes",
      "Notificaciones automáticas por correo y generación de enlaces de descarga o acceso",
      "Base de datos en Supabase con encriptación de datos y Row Level Security",
      "Diseño optimizado para compras rápidas con un clic desde smartphones",
    ],
    benefits: [
      "Vende las 24 horas del día de forma 100% automatizada",
      "Sin comisiones mensuales fijas de plataformas intermediarias",
      "Tu dinero ingresa directamente a tu cuenta bancaria o Mercado Pago",
      "Experiencia de compra fluida que reduce el abandono del carrito",
    ],
    process: [
      {
        step: "01",
        title: "Modelado de Productos",
        description: "Estructuración de variantes, precios, inventario y reglas de compra.",
      },
      {
        step: "02",
        title: "Integración de Pasarela",
        description: "Configuración de credenciales de producción y Webhooks en Mercado Pago.",
      },
      {
        step: "03",
        title: "Base de Datos & Seguridad",
        description: "Setup de Supabase PostgreSQL con tablas protegidas y auditoría de transacciones.",
      },
      {
        step: "04",
        title: "Testing de Pagos & Salida a Producción",
        description: "Simulación de compras reales en sandbox y paso a producción verificado.",
      },
    ],
    faqs: [
      {
        question: "¿Qué comisión cobra la pasarela?",
        answer:
          "Mercado Pago cobra una tarifa por transacción exitosa regulada en Chile (aprox. 3.19% + IVA). No existen pagos mensuales ocultos para ti.",
      },
      {
        question: "¿Puedo vender productos digitales o descargas?",
        answer:
          "Sí, como en RecuerdoQR, el sistema puede liberar accesos, generar códigos o enviar contenido digital de forma automática una vez aprobado el pago.",
      },
      {
        question: "¿Cómo recibo las ventas?",
        answer:
          "Cada pago acreditado se refleja inmediatamente en tu cuenta de Mercado Pago Chile, listo para ser transferido a tu banco.",
      },
    ],
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    slug: "web-apps",
    number: "03",
    title: "Web Apps & Sistemas SaaS",
    tagline: "Plataformas web complejas con autenticación segura, bases de datos en tiempo real y paneles administrativos.",
    description:
      "Desarrollo de software web a medida para startups, empresas y creadores que necesitan lógica de negocio avanzada. Desde herramientas internas de automatización hasta productos SaaS de suscripción con arquitecturas robustas y escalables.",
    category: "SOFTWARE & SAAS",
    priceStartingAt: "Desde $600.000 CLP",
    deliveryTime: "2 a 4 semanas",
    technologies: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "RESTful APIs"],
    deliverables: [
      "Autenticación segura (Email/Password, Magic Link o proveedores Google/GitHub)",
      "Base de datos relacional PostgreSQL con políticas de seguridad RLS",
      "Panel de administración con tablas de datos, filtros y exportación",
      "Endpoints API RESTful documentados y protegidos por token",
      "Sincronización en tiempo real (Realtime WebSockets) para datos dinámicos",
      "Código estructurado con TypeScript para mantenimiento sencillo y alta confiabilidad",
    ],
    benefits: [
      "Digitaliza y automatiza tareas manuales que consumen tiempo en tu negocio",
      "Arquitectura preparada para escalar de 10 a miles de usuarios sin reescribir código",
      "Control y propiedad total sobre el código fuente y las bases de datos",
      "Soporte técnico directo durante y después de la implementación",
    ],
    process: [
      {
        step: "01",
        title: "Especificación Funcional",
        description: "Diseño del flujo de usuarios, entidades de datos y lógica del sistema.",
      },
      {
        step: "02",
        title: "Diseño de Base de Datos & API",
        description: "Esquema relacional en PostgreSQL y definición de endpoints seguros.",
      },
      {
        step: "03",
        title: "Desarrollo Frontend & Backend",
        description: "Implementación en Next.js con componentes modulares y estados en tiempo real.",
      },
      {
        step: "04",
        title: "Pruebas de Carga & Despliegue",
        description: "Testing exhaustivo, auditoría de seguridad y capacitación de uso.",
      },
    ],
    faqs: [
      {
        question: "¿El código fuente me pertenecerá?",
        answer:
          "Completamente. Al liquidar el proyecto se te transfiere el repositorio privado en GitHub con todos los derechos de propiedad intelectual.",
      },
      {
        question: "¿Cuánto cuesta el mantenimiento?",
        answer:
          "Gracias a la infraestructura serverless de Supabase y Vercel, los costos fijos iniciales suelen ser $0 USD hasta que el producto alcance un alto volumen de usuarios.",
      },
    ],
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    slug: "mantenimiento-actualizaciones",
    number: "04",
    title: "Mantención, Actualizaciones & Evolución Web",
    tagline: "Mantén tu tienda online o sitio web siempre rápido, actualizado y con nuevo contenido sin complicaciones técnicas.",
    description:
      "Si ya cuentas con una página web o tienda online y necesitas agregar nuevos productos, cambiar precios, diseñar nuevas secciones, actualizar banners o solucionar fallos técnicos, me encargo de mantener tu plataforma operando al 100% de forma ágil y segura.",
    category: "SOPORTE & MEJORAS",
    priceStartingAt: "Desde $60.000 CLP",
    deliveryTime: "24 a 48 hrs hábiles",
    technologies: ["Next.js", "React", "Shopify / WooCommerce", "Mercado Pago", "Supabase", "Tailwind CSS"],
    deliverables: [
      "Actualización de productos, stock, precios, banners y ofertas en tiendas online",
      "Diseño y programación de nuevas secciones, páginas de aterrizaje o formularios",
      "Optimización de velocidad de carga y auditoría de Core Web Vitals",
      "Corrección de errores de código, enlaces rotos y fallas en pasarelas de pago",
      "Respaldos periódicos de base de datos y parches de seguridad",
      "Soporte directo prioritario por WhatsApp con tiempos de respuesta reducidos",
    ],
    benefits: [
      "Ahorras tiempo valioso para concentrarte en vender y operar tu negocio",
      "Tu sitio web nunca queda obsoleto ni con información desactualizada",
      "Atención técnica personalizada sin agencias intermedias ni costos sorpresa",
      "Disponibilidad tanto en planes mensuales como por requerimientos puntuales",
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico & Requerimientos",
        description: "Revisamos los cambios, contenidos o nuevas secciones que necesitas implementar en tu web.",
      },
      {
        step: "02",
        title: "Entorno de Prueba",
        description: "Preparamos los cambios en un entorno seguro sin interrumpir las visitas de tus clientes.",
      },
      {
        step: "03",
        title: "Implementación & Pruebas",
        description: "Subimos los nuevos productos, programamos las secciones y verificamos en móvil y escritorio.",
      },
      {
        step: "04",
        title: "Publicación & Reporte",
        description: "Desplegamos en vivo y te entregamos confirmación de todo lo actualizado.",
      },
    ],
    faqs: [
      {
        question: "¿Pueden atender sitios que no fueron creados por ti?",
        answer:
          "Sí, realizo mantenimiento y mejoras en sitios construidos con Next.js, React, HTML/JS, Shopify, WooCommerce o WordPress, previa revisión técnica del código.",
      },
      {
        question: "¿Cómo es la modalidad de pago?",
        answer:
          "Puedes contratar una bolsa de requerimientos puntuales (para tareas específicas de 1 vez) o un plan mensual de acompañamiento continuo.",
      },
      {
        question: "¿Con qué rapidez se aplican los cambios?",
        answer:
          "Para cambios de contenido habituales (productos, textos, banners), el tiempo estándar de entrega es de 24 a 48 horas hábiles.",
      },
    ],
    accentColor: "from-amber-500/20 via-cyan-500/10 to-transparent",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
];
