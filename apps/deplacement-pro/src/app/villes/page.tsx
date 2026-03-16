import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { villes } from "@/lib/data/villes";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Déplacements Pro par Ville 2026",
  description:
    "Guides pratiques pour vos déplacements professionnels dans 28 villes françaises : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
  alternates: { canonical: `${seoConfig.siteUrl}/villes` },
  openGraph: {
    title: "Déplacements Pro par Ville 2026",
    description:
      "Guides pratiques pour vos déplacements professionnels dans 28 villes françaises.",
    url: `${seoConfig.siteUrl}/villes`,
    type: "website",
  },
};

export default function VillesListingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Villes", url: "/villes" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">
              <MapPin className="w-3.5 h-3.5 inline -mt-0.5 mr-1" strokeWidth={1.5} />
              {villes.length} villes
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Déplacements professionnels par ville
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Transports, hébergement, quartiers d&apos;affaires, budget — retrouvez nos guides
              pratiques pour organiser vos déplacements professionnels dans les principales villes françaises.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {villes.map((ville) => (
              <Link
                key={ville.slug}
                href={`/villes/${ville.slug}`}
                className="card p-5 group"
              >
                <MapPin className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h2 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                  {ville.name}
                </h2>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{ville.population.split("(")[0].trim()}</span>
                  <span>•</span>
                  <span>{ville.avgHotelPrice}</span>
                </div>
                <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Voir le guide
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
