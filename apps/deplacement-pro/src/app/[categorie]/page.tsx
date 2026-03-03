import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Star } from "lucide-react";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getSolutionsByCategory } from "@/lib/data/solutions";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

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
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: `${seoConfig.siteUrl}/${cat.slug}` },
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
              <p className="text-xs text-muted-foreground mb-1">Prix moyen</p>
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
            Les meilleures solutions {cat.shortName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sols.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 flex flex-col group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Image
                    src={sol.logo}
                    alt={`Logo ${sol.name}`}
                    width={40}
                    height={40}
                    className="rounded shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {sol.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1.5} />
                        <span className="font-mono text-sm font-semibold">{sol.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{sol.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-mono text-sm text-foreground">{sol.priceRange}</span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1">
                    Voir l&apos;avis
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* FAQ */}
      {(() => {
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
    </>
  );
}
