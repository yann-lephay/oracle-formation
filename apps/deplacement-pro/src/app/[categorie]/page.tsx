import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getSolutionsByCategory } from "@/lib/data/solutions";
import { guides } from "@/lib/data/guides";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { SourceCitations } from "@/components/SourceCitations";

export const revalidate = false;
export function generateStaticParams() {
  return categories.map((c) => ({ categorie: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorie: string }>;
}): Promise<Metadata> {
  const { categorie } = await params;
  const cat = getCategoryBySlug(categorie);
  if (!cat) return {};
  const url = `${seoConfig.siteUrl}/${cat.slug}`;
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function CategoriePage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;
  const cat = getCategoryBySlug(categorie);
  if (!cat) notFound();

  const sols = getSolutionsByCategory(cat.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: cat.shortName, url: `/${cat.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">{sols.length} solutions comparées</div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {cat.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {cat.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Infos */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="card p-4">
              <p className="text-xs text-muted-foreground mb-1">{cat.evidenceSafe ? "Coût à établir" : "Prix moyen"}</p>
              <p className="font-mono font-bold text-foreground">{cat.priceRange}</p>
            </div>
            <div className="card p-4">
              <p className="text-xs text-muted-foreground mb-1">Cible</p>
              <p className="text-sm font-medium text-foreground">{cat.targetAudience}</p>
            </div>
            <div className="card p-4">
              <p className="text-xs text-muted-foreground mb-1">Cas d&apos;usage</p>
              <p className="text-sm text-foreground">{cat.useCases[0]}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Solutions {cat.shortName} à examiner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sols.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 flex flex-col group"
              >
                <div className="flex items-start gap-3 mb-3">
                  {sol.logo && <Image
                    src={sol.logo}
                    alt={`Logo ${sol.name}`}
                    width={40}
                    height={40}
                    className="rounded shrink-0"
                    unoptimized
                  />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {sol.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {cat.evidenceSafe ? "Périmètre et conditions à confirmer sur l'offre retenue" : sol.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-mono text-sm text-foreground">
                    {cat.evidenceSafe ? "Tarif à vérifier" : sol.priceRange}
                  </span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1">
                    Voir l&apos;analyse
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {cat.decisionCriteria && cat.counterCase && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">Ce qui doit départager les offres</h2>
              <ul className="space-y-3">
                {cat.decisionCriteria.map((criterion) => (
                  <li key={criterion} className="card p-4 text-sm text-muted-foreground">{criterion}</li>
                ))}
              </ul>
            </div>
            <div className="card p-5 h-fit">
              <h2 className="font-bold font-heading text-foreground mb-3">Le contre-cas</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.counterCase}</p>
            </div>
          </div>
        </section>
      )}

      {/* Use cases */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Cas d&apos;usage
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
            {cat.useCases.map((uc) => (
              <li key={uc} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                {uc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related guides */}
      {(() => {
        const guidesByCategory: Record<string, string[]> = {
          tmc: ["politique-voyage-modele", "bareme-kilometrique-2026"],
          "self-booking-tool": ["politique-voyage-modele", "bareme-kilometrique-2026"],
          "carte-corporate": ["indemnites-repas-2026", "bareme-kilometrique-2026"],
          "notes-de-frais": ["indemnites-repas-2026", "bareme-kilometrique-2026", "politique-voyage-modele"],
        };
        const relevantSlugs = guidesByCategory[cat.slug] || [];
        const relevantGuides = relevantSlugs
          .map((s) => guides.find((g) => g.slug === s))
          .filter(Boolean) as typeof guides;
        if (relevantGuides.length === 0) return null;
        return (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                Guides pratiques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relevantGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="card p-5 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge text-[10px]">{guide.category}</span>
                      <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
                    </div>
                    <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                      {guide.shortTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* FAQ */}
      {(() => {
        if (cat.evidenceSafe) return null;
        const allFaq = sols.flatMap((s) => s.faq);
        if (allFaq.length === 0) return null;
        return (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                Questions fréquentes
              </h2>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateFAQSchema(allFaq)),
                }}
              />
              <div className="space-y-4 max-w-3xl">
                {allFaq.map((item) => (
                  <div key={item.question} className="card p-5">
                    <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {cat.sources && (
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <SourceCitations sources={cat.sources} />
        </div>
      )}
    </>
  );
}
