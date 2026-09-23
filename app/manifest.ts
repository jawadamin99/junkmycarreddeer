import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Junk My Car Red Deer",
    short_name: "Junk My Car",
    description:
      "Cash offers and free vehicle towing across Red Deer and Central Alberta.",
    start_url: "/",
    display: "standalone",
    background_color: "#111214",
    theme_color: "#ed1c24",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}

