import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms, getGlossaryTermBySlug } from "@/lib/data/glossaire";
import { getSolutionBySlug } from "@/lib/data/solutions";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateGlossarySchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) return {};
  return {
    title: term.metaTitle,
    description: term.metaDescription,
    alternates: { canonical: `${seoConfig.siteUrl}/glossaire/${term.slug}` },
  };
}

export default async function GlossaireTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);
  if (!term) notFound();

  const relatedTerms = term.relatedTerms
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter(Boolean);

  const relatedSolutions = (term.relatedSolutions || [])
    .map((slug) => getSolutionBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateGlossarySchema(term)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(term.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Glossaire", url: "/glossaire" },
              { name: term.term, url: `/glossaire/${term.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
              Glossaire
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">
                <BookOpen className="w-3 h-3 inline -mt-0.5 mr-1" strokeWidth={1.5} />
                {term.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {term.term}
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {term.definition}
            </p>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Comprendre {term.acronym ? `le ${term.acronym}` : term.term.toLowerCase()} en détail
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {term.longDescription.split(". ").reduce((paragraphs: string[], sentence, i, arr) => {
                const pIdx = Math.floor(i / Math.ceil(arr.length / 3));
                if (!paragraphs[pIdx]) paragraphs[pIdx] = "";
                paragraphs[pIdx] += sentence + (i < arr.length - 1 ? ". " : "");
                return paragraphs;
              }, []).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      {relatedSolutions.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Solutions associées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedSolutions.map((sol) => sol && (
                <Link
                  key={sol.slug}
                  href={`/solution/${sol.slug}`}
                  className="card p-5 group bg-surface"
                >
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-1">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{sol.tagline}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-foreground">{sol.priceRange}</span>
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
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-3 max-w-3xl">
            {term.faq.map((item) => (
              <div key={item.question} className="card p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related terms */}
      {relatedTerms.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Termes associés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTerms.map((related) => related && (
                <Link
                  key={related.slug}
                  href={`/glossaire/${related.slug}`}
                  className="card p-5 group bg-surface"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                    {related.term}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {related.definition}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
