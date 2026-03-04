import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { comparisons, getComparisonBySlug } from "@/lib/data/comparisons";
import { getSolutionBySlug } from "@/lib/data/solutions";
import {
  generateComparisonSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) return {};
  const url = `${seoConfig.siteUrl}/comparer/${comp.slug}`;
  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function ComparerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getComparisonBySlug(slug);
  if (!comp) notFound();

  const sol1 = getSolutionBySlug(comp.solution1);
  const sol2 = getSolutionBySlug(comp.solution2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateComparisonSchema(comp)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(comp.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Comparer", url: "/comparer" },
              { name: comp.title, url: `/comparer/${comp.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">Comparatif {new Date().getFullYear()}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {comp.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{comp.intro}</p>
          </div>
        </div>
      </section>

      {/* Overview cards */}
      {sol1 && sol2 && (
        <section className="section-padding !pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[sol1, sol2].map((sol) => (
                <div key={sol.slug} className="card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={sol.logo}
                      alt={`Logo ${sol.name}`}
                      width={48}
                      height={48}
                      className="rounded shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold font-heading text-foreground">{sol.name}</h3>
                    </div>
                    <span className="font-mono text-lg font-bold text-foreground">{sol.rating}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{sol.tagline}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-foreground">{sol.priceRange}</span>
                    <Link href={`/solution/${sol.slug}`} className="text-primary text-xs font-medium hover:underline">
                      Voir l&apos;avis complet
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Criteria */}
      <section className="section-padding !pt-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Comparaison critère par critère
          </h2>
          <div className="space-y-4">
            {comp.criteria.map((criterion) => (
              <div key={criterion.name} className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{criterion.name}</h3>
                  {criterion.winner === 1 && (
                    <span className="badge badge-success text-[10px]">{sol1?.name || comp.solution1}</span>
                  )}
                  {criterion.winner === 2 && (
                    <span className="badge badge-success text-[10px]">{sol2?.name || comp.solution2}</span>
                  )}
                  {criterion.winner === 0 && (
                    <span className="badge text-[10px]">Égalité</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{criterion.description}</p>

                {/* Score bars */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{sol1?.name || comp.solution1}</span>
                      <span className="font-mono font-medium text-foreground">{criterion.solution1Score}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded overflow-hidden">
                      <div
                        className="h-full bg-primary rounded"
                        style={{ width: `${criterion.solution1Score * 10}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{sol2?.name || comp.solution2}</span>
                      <span className="font-mono font-medium text-foreground">{criterion.solution2Score}/10</span>
                    </div>
                    <div className="h-2 bg-muted rounded overflow-hidden">
                      <div
                        className="h-full bg-accent rounded"
                        style={{ width: `${criterion.solution2Score * 10}%` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{criterion.analysis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Notre verdict
            </h2>
            <p className="text-muted-foreground leading-relaxed">{comp.verdict}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-3 max-w-3xl">
            {comp.faq.map((item) => (
              <div key={item.question} className="card p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
