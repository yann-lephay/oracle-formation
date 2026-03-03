import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Claude-Web", "PerplexityBot", "Google-Extended"],
        disallow: "/",
      },
    ],
    sitemap: "https://deplacementpro.fr/sitemap.xml",
  };
}
