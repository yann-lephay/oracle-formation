import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { solutions } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import {
  generateGuideSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const url = `${seoConfig.siteUrl}/guides/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateGuideSchema(guide)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(guide.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Guides", url: "/guides" },
              { name: guide.shortTitle, url: `/guides/${guide.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge text-xs">{guide.category}</span>
              <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
              <span className="text-xs text-muted-foreground">
                Mis à jour le {new Date(guide.updatedAt).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {guide.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {guide.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold font-heading text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {guide.faq.map((item) => (
                <div key={item.question} className="card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions liées */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Solutions recommandées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutions.slice(0, 3).map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 group"
              >
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-1">
                  {sol.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{sol.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{sol.priceRange}</span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir l&apos;avis
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatifs liés */}
      {comparisons.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Comparatifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparisons.slice(0, 3).map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparer/${comp.slug}`}
                  className="card p-5 text-center group"
                >
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2">
                    {comp.title}
                  </h3>
                  <span className="text-xs text-primary font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Lire le comparatif
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres guides */}
      {(() => {
        const otherGuides = guides.filter((g) => g.slug !== guide.slug);
        if (otherGuides.length === 0) return null;
        return (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                Autres guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherGuides.slice(0, 3).map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="card p-5 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge text-[10px]">{g.category}</span>
                      <span className="text-xs text-muted-foreground">{g.readingTime}</span>
                    </div>
                    <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm">
                      {g.shortTitle}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}
