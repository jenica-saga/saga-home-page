import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saga AI",
    short_name: "Saga",
    description: "AI-powered agents for healthcare operations",
    start_url: "/",
    display: "browser",
    background_color: "#f5f0ea",
    theme_color: "#2b7a78",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
