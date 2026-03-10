import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { villes, getVilleBySlug } from "@/lib/data/villes";
import { solutions } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const revalidate = false;
export function generateStaticParams() {
  return villes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};
  const url = `${seoConfig.siteUrl}/villes/${ville.slug}`;
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ville.metaTitle,
      description: ville.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function VillePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(ville.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Villes", url: "/villes" },
              { name: ville.name, url: `/villes/${ville.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="badge text-xs">Guide ville</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Déplacement professionnel à {ville.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{ville.description}</p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="section-padding !pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Population</p>
              <p className="font-mono font-bold text-foreground text-sm">{ville.population}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Nuitées pro/an</p>
              <p className="font-mono font-bold text-foreground text-sm">{ville.businessTravelers}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Hôtel 3★ moyen</p>
              <p className="font-mono font-bold text-foreground text-sm">{ville.avgHotelPrice}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Info clé</p>
              <p className="text-xs font-medium text-foreground">{ville.keyFacts[0]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding !pt-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {ville.sections.map((section) => (
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

      {/* Solutions recommandées */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Solutions recommandées pour {ville.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutions.slice(0, 3).map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 group bg-surface"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                    {sol.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1.5} />
                    <span className="font-mono text-sm font-semibold">{sol.rating}</span>
                  </div>
                </div>
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

      {/* Comparatifs */}
      {comparisons.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Comparatifs de solutions
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

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {ville.faq.map((item) => (
                <div key={item.question} className="card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
