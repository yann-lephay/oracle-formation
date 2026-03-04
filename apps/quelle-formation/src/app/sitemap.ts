import type { MetadataRoute } from "next";
import { domaines } from "@/lib/data/domaines";
import { topVilles } from "@/lib/data/villes";
import { organismes } from "@/lib/data/organismes";
import { comparisons } from "@/lib/data/comparisons";
import { blogArticles } from "@/lib/data/blog";

const BASE_URL = "https://quelleformationpro.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${BASE_URL}/formations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/organismes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/comparer`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/methodologie`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE_URL}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ];

    // formation/[domaine]
    const domainePages: MetadataRoute.Sitemap = domaines.map((d) => ({
        url: `${BASE_URL}/formation/${d.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // formation/[domaine]/[ville]
    const villePages: MetadataRoute.Sitemap = domaines.flatMap((d) =>
        topVilles.map((v) => ({
            url: `${BASE_URL}/formation/${d.slug}/${v.slug}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }))
    );

    // organisme/[slug]
    const organismePages: MetadataRoute.Sitemap = organismes.map((o) => ({
        url: `${BASE_URL}/organisme/${o.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // comparer/[slug]
    const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
        url: `${BASE_URL}/comparer/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // blog + blog/[slug]
    const blogPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
        ...blogArticles.map((a) => ({
            url: `${BASE_URL}/blog/${a.slug}`,
            lastModified: new Date(a.updatedAt),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];

    return [
        ...staticPages,
        ...domainePages,
        ...villePages,
        ...organismePages,
        ...comparisonPages,
        ...blogPages,
    ];
}
