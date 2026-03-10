import { seoConfig } from "./seo-config";
import type { Solution } from "./data/solutions";
import type { Comparison } from "./data/comparisons";
import type { Guide } from "./data/guides";
import type { BlogPost } from "./data/blog";
import type { GlossaryTerm } from "./data/glossaire";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
    inLanguage: seoConfig.language,
    isPartOf: { "@id": `${seoConfig.siteUrl}/#organization` },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${seoConfig.siteUrl}${seoConfig.logo}`,
      width: 512,
      height: 512,
    },
    description: seoConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@deplacement-pro.fr",
      contactType: "customer service",
      availableLanguage: "French",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
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

export function generateSolutionSchema(solution: Solution) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: solution.name,
    description: solution.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${seoConfig.siteUrl}/solution/${solution.slug}`,
    ...(solution.logo && {
      image: `${seoConfig.siteUrl}${solution.logo}`,
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: solution.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: solution.reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: solution.priceRange,
      category: solution.pricingModel,
    },
  };
}

export function generateFAQSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${seoConfig.siteUrl}${item.url}`,
    })),
  };
}

export function generateComparisonSchema(comparison: Comparison) {
  const ogImageUrl = `${seoConfig.siteUrl}${seoConfig.ogImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.intro,
    url: `${seoConfig.siteUrl}/comparer/${comparison.slug}`,
    datePublished: "2026-03-01",
    dateModified: "2026-03-04",
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
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

export function generateGuideSchema(guide: Guide) {
  const ogImageUrl = `${seoConfig.siteUrl}${seoConfig.ogImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    url: `${seoConfig.siteUrl}/guides/${guide.slug}`,
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
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

export function generateGlossarySchema(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `${seoConfig.siteUrl}/glossaire/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire du déplacement professionnel",
      url: `${seoConfig.siteUrl}/glossaire`,
    },
  };
}

export function generateBlogPostSchema(post: BlogPost) {
  const ogImageUrl = `${seoConfig.siteUrl}${seoConfig.ogImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
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
    url: `${seoConfig.siteUrl}/blog/${post.slug}`,
  };
}
