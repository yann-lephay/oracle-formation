import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/lib/data/glossaire";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Glossaire Déplacement Pro — A à Z",
  description:
    "Glossaire complet du voyage d'affaires : TMC, GDS, NDC, per diem, duty of care, carte corporate. Toutes les définitions pour comprendre le déplacement professionnel.",
  alternates: { canonical: `${seoConfig.siteUrl}/glossaire` },
  openGraph: {
    title: "Glossaire Déplacement Pro — A à Z",
    description:
      "Glossaire complet du voyage d'affaires : TMC, GDS, NDC, per diem, duty of care, carte corporate.",
    url: `${seoConfig.siteUrl}/glossaire`,
    type: "website",
  },
};

const categoryOrder = ["Voyages", "Gestion", "Technologie", "Réglementation", "Tendances"];

export default function GlossairePage() {
  const termsByCategory = categoryOrder
    .map((cat) => ({
      category: cat,
      terms: glossaryTerms.filter((t) => t.category === cat),
    }))
    .filter((group) => group.terms.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Glossaire", url: "/glossaire" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">
              <BookOpen className="w-3.5 h-3.5 inline -mt-0.5 mr-1" strokeWidth={1.5} />
              {glossaryTerms.length} définitions
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Glossaire du déplacement professionnel
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              TMC, GDS, NDC, per diem, duty of care… Retrouvez toutes les définitions clés
              pour comprendre le vocabulaire du voyage d&apos;affaires et de la gestion des dépenses professionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Terms by category */}
      {termsByCategory.map((group) => (
        <section key={group.category} className="section-padding !pb-4">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold font-heading text-foreground mb-4">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {group.terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/glossaire/${term.slug}`}
                  className="card p-5 group"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                    {term.term}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
                    {term.definition}
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire la définition
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
