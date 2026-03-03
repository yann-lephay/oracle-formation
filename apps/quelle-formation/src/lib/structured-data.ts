/**
 * JSON-LD Structured Data generators for SEO
 */

import { seoConfig } from "./seo-config";

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.defaultDescription,
        logo: `${seoConfig.siteUrl}/logo.png`,
    };
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.defaultDescription,
        potentialAction: {
            "@type": "SearchAction",
            target: `${seoConfig.siteUrl}/formation/{search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };
}

export function generateCourseSchema(params: {
    name: string;
    description: string;
    provider: string;
    providerUrl: string;
    url: string;
    price?: string;
    duration?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: params.name,
        description: params.description,
        provider: {
            "@type": "Organization",
            name: params.provider,
            url: params.providerUrl,
        },
        url: params.url,
        ...(params.price && {
            offers: {
                "@type": "Offer",
                price: params.price,
                priceCurrency: "EUR",
            },
        }),
        ...(params.duration && {
            timeRequired: params.duration,
        }),
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateArticleSchema(params: {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    updatedAt: string;
    author: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: params.title,
        description: params.description,
        url: params.url,
        datePublished: params.publishedAt,
        dateModified: params.updatedAt,
        author: {
            "@type": "Organization",
            name: params.author,
            url: seoConfig.siteUrl,
        },
        publisher: {
            "@type": "Organization",
            name: seoConfig.siteName,
            url: seoConfig.siteUrl,
        },
    };
}

export function generateComparisonSchema(params: {
    name: string;
    description: string;
    url: string;
    items: { name: string; rating: number }[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: params.name,
        description: params.description,
        url: params.url,
        itemListElement: params.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.rating && {
                item: {
                    "@type": "EducationalOrganization",
                    name: item.name,
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: item.rating,
                        bestRating: 5,
                    },
                },
            }),
        })),
    };
}
