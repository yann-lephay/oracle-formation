import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { guides } from "@/lib/data/guides";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Guides — Barèmes & Réglementation",
  description:
    "Guides pratiques pour gérer vos déplacements professionnels : barème kilométrique 2026, indemnités repas, politique voyage modèle. Conseils et réglementation.",
  alternates: { canonical: `${seoConfig.siteUrl}/guides` },
  openGraph: {
    title: "Guides — Barèmes & Réglementation",
    description:
      "Guides pratiques pour gérer vos déplacements professionnels : barèmes, modèles, réglementation.",
    url: `${seoConfig.siteUrl}/guides`,
    type: "website",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Guides", url: "/guides" },
            ])
          ),
        }}
      />

      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">
              <BookOpen className="w-3.5 h-3.5 inline -mt-0.5 mr-1" strokeWidth={1.5} />
              {guides.length} guides
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Guides pratiques & réglementaires
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Barèmes officiels, modèles de politique voyage, indemnités repas…
              Retrouvez nos guides pour gérer vos déplacements professionnels en toute conformité.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-5 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-[10px]">{guide.category}</span>
                  <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
                </div>
                <h2 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                  {guide.shortTitle}
                </h2>
                <p className="text-xs text-muted-foreground line-clamp-3 flex-1">
                  {guide.description}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Mis à jour le {new Date(guide.updatedAt).toLocaleDateString("fr-FR")}
                  </span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
