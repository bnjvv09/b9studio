import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bnjvv09 — Estudio de Productos Digitales & Desarrollo Web",
    short_name: "Bnjvv09",
    description:
      "Desarrollo web a medida, e-commerce con pagos en CLP y productos digitales modernos.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070a",
    theme_color: "#05070a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
