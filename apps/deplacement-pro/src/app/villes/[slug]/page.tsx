import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { villes, getVilleBySlug } from "@/lib/data/villes";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

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
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: `${seoConfig.siteUrl}/villes/${ville.slug}` },
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
              { name: "Villes", url: "/#villes" },
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
