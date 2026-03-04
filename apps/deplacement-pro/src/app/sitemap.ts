import type { MetadataRoute } from "next";
import { categories } from "@/lib/data/categories";
import { solutions } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";
import { villes } from "@/lib/data/villes";
import { blogPosts } from "@/lib/data/blog";
import { personas } from "@/lib/data/personas";
import { integrations } from "@/lib/data/integrations";
import { glossaryTerms } from "@/lib/data/glossaire";

const BASE_URL = "https://deplacement-pro.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastBuild = "2026-03-04";

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastBuild, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/methodologie`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: lastBuild, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/confidentialite`, lastModified: lastBuild, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/blog`, lastModified: lastBuild, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/comparer`, lastModified: lastBuild, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pour`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/villes`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/integrations`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/glossaire`, lastModified: lastBuild, changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: lastBuild,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solution/${s.slug}`,
    lastModified: lastBuild,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE_URL}/comparer/${c.slug}`,
    lastModified: lastBuild,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: g.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const villePages: MetadataRoute.Sitemap = villes.map((v) => ({
    url: `${BASE_URL}/villes/${v.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const personaPages: MetadataRoute.Sitemap = personas.map((p) => ({
    url: `${BASE_URL}/pour/${p.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const glossairePages: MetadataRoute.Sitemap = glossaryTerms.map((t) => ({
    url: `${BASE_URL}/glossaire/${t.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const integrationPages: MetadataRoute.Sitemap = integrations.map((i) => ({
    url: `${BASE_URL}/integrations/${i.slug}`,
    lastModified: lastBuild,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...solutionPages,
    ...comparisonPages,
    ...guidePages,
    ...villePages,
    ...personaPages,
    ...blogPages,
    ...integrationPages,
    ...glossairePages,
  ];
}
