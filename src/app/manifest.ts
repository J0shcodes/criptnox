import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Criptnox",
    short_name: "Criptnox",
    description:
      "A mobile-first PWA that delivers instant crypto price alerts via notifications. Monitor Bitcoin, Ethereum, and altcoins with customizable alert conditions.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/assets/images/criptnox_logo_2.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/images/criptnox_logo_3.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/assets/images/criptnox_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["finance", "productivity"],
  };
}
