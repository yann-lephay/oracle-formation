/**
 * JSON-LD Structured Data generators for SEO
 */

import { seoConfig } from "./seo-config";

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${seoConfig.siteUrl}/#organization`,
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.defaultDescription,
        logo: {
            "@type": "ImageObject",
            url: `${seoConfig.siteUrl}${seoConfig.logo}`,
            width: 512,
            height: 512,
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: "French",
            url: seoConfig.siteUrl,
        },
        areaServed: {
            "@type": "Country",
            name: "France",
        },
    };
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.defaultDescription,
        inLanguage: seoConfig.language,
        isPartOf: { "@id": `${seoConfig.siteUrl}/#organization` },
    };
}

// ============================================
// WEB PAGE (primaryImageOfPage for Google Discover)
// ============================================
export function generateWebPageSchema(url: string, imageUrl?: string) {
    const ogImageUrl = imageUrl ?? `${seoConfig.siteUrl}${seoConfig.ogImage}`;
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        primaryImageOfPage: {
            "@type": "ImageObject",
            contentUrl: ogImageUrl,
            url: ogImageUrl,
            width: 1200,
            height: 630,
        },
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [
                "h1",
                ".verdict",
                ".verdict-detail",
                ".faq-answer",
                "[data-speakable]",
            ],
        },
        isPartOf: { "@id": `${seoConfig.siteUrl}/#website` },
        inLanguage: seoConfig.language,
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
    imageUrl?: string;
}) {
    const ogImageUrl = params.imageUrl ?? `${seoConfig.siteUrl}${seoConfig.ogImage}`;
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: params.title,
        description: params.description,
        url: params.url,
        image: {
            "@type": "ImageObject",
            url: ogImageUrl,
            width: 1200,
            height: 630,
        },
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
            logo: {
                "@type": "ImageObject",
                url: `${seoConfig.siteUrl}${seoConfig.logo}`,
            },
        },
    };
}

export function generateOrganismeSchema(org: {
    name: string;
    url: string;
    description: string;
    rating: number;
    reviewCount: number;
    logoPath?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: org.name,
        url: org.url,
        description: org.description,
        ...(org.logoPath && {
            image: `${seoConfig.siteUrl}${org.logoPath}`,
        }),
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: org.rating,
            bestRating: 5,
            ratingCount: org.reviewCount,
        },
    };
}

export function generateComparisonSchema(params: {
    name: string;
    description: string;
    url: string;
    items: { name: string; rating: number; ratingCount: number }[];
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
                        ratingCount: item.ratingCount,
                    },
                },
            }),
        })),
    };
}

export function generateGuideSchema(params: {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    updatedAt: string;
    imageUrl?: string;
}) {
    const ogImageUrl = params.imageUrl ?? `${seoConfig.siteUrl}${seoConfig.ogImage}`;
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: params.title,
        description: params.description,
        url: params.url,
        image: {
            "@type": "ImageObject",
            url: ogImageUrl,
            width: 1200,
            height: 630,
        },
        datePublished: params.publishedAt,
        dateModified: params.updatedAt,
        author: {
            "@type": "Organization",
            name: seoConfig.siteName,
            url: seoConfig.siteUrl,
        },
        publisher: {
            "@type": "Organization",
            name: seoConfig.siteName,
            url: seoConfig.siteUrl,
            logo: {
                "@type": "ImageObject",
                url: `${seoConfig.siteUrl}${seoConfig.logo}`,
            },
        },
    };
}

export function generateGlossarySchema(params: {
    term: string;
    definition: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: params.term,
        description: params.definition,
        url: params.url,
        inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "Glossaire de la formation professionnelle",
            url: `${seoConfig.siteUrl}/glossaire`,
        },
    };
}

export function generateItemListSchema(params: {
    name: string;
    description: string;
    url: string;
    items: { name: string; url: string }[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: params.name,
        description: params.description,
        url: params.url,
        numberOfItems: params.items.length,
        itemListElement: params.items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };
}
