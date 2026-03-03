import type { MetadataRoute } from "next";
import { categories } from "@/lib/data/categories";
import { solutions } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";
import { villes } from "@/lib/data/villes";
import { blogPosts } from "@/lib/data/blog";

const BASE_URL = "https://deplacementpro.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/methodologie`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solution/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE_URL}/comparer/${c.slug}`,
    lastModified: now,
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
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt,
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
    ...blogPages,
  ];
}
