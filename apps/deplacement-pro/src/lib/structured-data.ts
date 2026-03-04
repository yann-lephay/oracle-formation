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
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/deplacement-pro-logo.png`,
    description: seoConfig.description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@deplacement-pro.fr",
      contactType: "customer service",
      availableLanguage: "French",
    },
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
    ...(solution.priceRange !== "Sur devis" && {
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: solution.priceRange,
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: solution.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: solution.reviewCount,
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
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.intro,
    url: `${seoConfig.siteUrl}/comparer/${comparison.slug}`,
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
  };
}

export function generateGuideSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    url: `${seoConfig.siteUrl}/guides/${guide.slug}`,
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
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
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
    url: `${seoConfig.siteUrl}/blog/${post.slug}`,
  };
}
