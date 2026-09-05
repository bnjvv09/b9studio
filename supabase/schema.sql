-- ==============================================================================
-- B9 STUDIO - ESQUEMA DE BASE DE DATOS PARA SUPABASE
-- Tabla de planes de precios administrables en tiempo real
-- ==============================================================================

-- 1. Crear la tabla de planes
CREATE TABLE IF NOT EXISTS pricing_plans (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  price TEXT NOT NULL,
  delivery_time TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  badge TEXT,
  order_index INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar seguridad por filas (Row Level Security)
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;

-- 3. Política: Lectura pública para cualquier visitante de la web
DROP POLICY IF EXISTS "Lectura publica de precios" ON pricing_plans;
CREATE POLICY "Lectura publica de precios" ON pricing_plans
  FOR SELECT
  USING (true);

-- 4. Política: Modificación permitida con clave anónima o autenticada
DROP POLICY IF EXISTS "Actualizacion de precios" ON pricing_plans;
CREATE POLICY "Actualizacion de precios" ON pricing_plans
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 5. Insertar los datos iniciales de B9 Studio
INSERT INTO pricing_plans (id, title, price, delivery_time, description, features, badge, order_index)
VALUES 
  (
    'landing-page',
    'Landing Page',
    'Desde $180.000 CLP',
    '5 - 7 días hábiles',
    'Ideal para presentar tu negocio, marca personal o producto con un diseño memorable y máxima conversión.',
    '[
      "Diseño UI/UX exclusivo (sin plantillas)",
      "100% adaptable a móviles y tablets",
      "Optimización SEO y Core Web Vitals 95+",
      "Formulario de contacto conectado a WhatsApp",
      "Despliegue y configuración de dominio"
    ]'::jsonb,
    'Esencial',
    1
  ),
  (
    'ecommerce',
    'E-Commerce',
    'Desde $350.000 CLP',
    '10 - 15 días hábiles',
    'Plataforma de ventas online con cobros automatizados en pesos chilenos y confirmación de pedidos instantánea.',
    '[
      "Checkout automatizado con Mercado Pago",
      "Confirmación de órdenes vía Webhook",
      "Catálogo administrable de productos",
      "Panel de pedidos y transacciones",
      "Comprobantes digitales y notificaciones"
    ]'::jsonb,
    'Más Solicitado',
    2
  ),
  (
    'web-app',
    'Web App',
    'Desde $480.000 CLP',
    '15 - 20 días hábiles',
    'Aplicación web a medida con base de datos en Supabase, sistema de usuarios y lógica de negocio específica.',
    '[
      "Base de datos en la nube con Supabase",
      "Sistema de autenticación y roles",
      "Lógica backend y Server Actions",
      "Panel de control y reportes",
      "Arquitectura escalable y mantenible"
    ]'::jsonb,
    'Avanzado',
    3
  ),
  (
    'mantenimiento',
    'Mantención & Mejoras',
    'Desde $60.000 CLP',
    '24 - 48 hrs hábiles',
    'Para tiendas o páginas web existentes que necesitan nuevo contenido, productos, páginas o resolver fallos.',
    '[
      "Carga y actualización de productos y precios",
      "Diseño de nuevas secciones y landing pages",
      "Resolución de fallos y optimización de velocidad",
      "Soporte directo prioritario por WhatsApp",
      "Modalidad mensual o por requerimiento"
    ]'::jsonb,
    'Continuo',
    4
  )
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  price = EXCLUDED.price,
  delivery_time = EXCLUDED.delivery_time,
  description = EXCLUDED.description,
  features = EXCLUDED.features,
  badge = EXCLUDED.badge,
  order_index = EXCLUDED.order_index,
  updated_at = timezone('utc'::text, now());
