import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bnjvv09 — Estudio de Productos Digitales";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06080d",
          padding: "80px",
          color: "#f8fafc",
          position: "relative",
        }}
      >
        {/* Ambient background glow simulation */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.15)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(147, 51, 234, 0.15)",
            filter: "blur(120px)",
          }}
        />

        {/* Top Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #7928ca, #00f0ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              B9
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#ffffff", letterSpacing: "-0.5px" }}>
              bnjvv09<span style={{ color: "#22d3ee" }}>.dev</span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(6, 182, 212, 0.1)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              color: "#22d3ee",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Estudio de Productos Digitales
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#22d3ee",
              textTransform: "uppercase",
            }}
          >
            Proyectos Seleccionados & Arquitectura
          </div>
          <div
            style={{
              fontSize: "58px",
              fontWeight: "900",
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
              color: "#ffffff",
            }}
          >
            Productos que convierten ideas en experiencias digitales.
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#94a3b8",
              lineHeight: "1.4",
            }}
          >
            Desarrollo Full-Stack, arquitecturas web de alto rendimiento y productos digitales interactivos.
          </div>
        </div>

        {/* Bottom Studio Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            fontSize: "15px",
            color: "#64748b",
          }}
        >
          <span>Desde Chile · Disponible para todo el mundo</span>
          <span>Next.js · React · TypeScript · Supabase · Mercado Pago</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
