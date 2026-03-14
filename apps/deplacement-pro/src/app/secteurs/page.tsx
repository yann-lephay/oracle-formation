import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, HardHat, Briefcase, Car, Target } from "lucide-react";
import { secteurs } from "@/lib/data/secteurs";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

const iconMap: Record<string, React.ElementType> = {
  HardHat, Briefcase, Car, Target,
};

export const metadata: Metadata = {
  title: "Déplacements Pro par Secteur 2026 — BTP, Conseil",
  description:
    "Solutions de gestion des déplacements professionnels adaptées à votre secteur : BTP, cabinets de conseil, forces de vente. Enjeux et outils recommandés.",
  alternates: { canonical: `${seoConfig.siteUrl}/secteurs` },
  openGraph: {
    title: "Déplacements pro par secteur — DeplacementPro.fr",
    description: "Solutions adaptées par secteur d'activité.",
    url: `${seoConfig.siteUrl}/secteurs`,
    type: "website",
  },
};

export default function SecteursIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Secteurs", url: "/secteurs" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground">Accueil</Link>
              <span>/</span>
              <span className="text-foreground">Secteurs</span>
            </nav>

            <span className="badge mb-4">
              {secteurs.length} secteurs
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Déplacements professionnels par secteur
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BTP, conseil, forces de vente : chaque secteur a ses contraintes spécifiques en matière de déplacements professionnels. Découvrez les solutions adaptées.
            </p>
          </div>
        </div>
      </section>

      {/* Secteurs grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secteurs.map((secteur) => {
              const Icon = iconMap[secteur.icon] || Target;
              return (
                <Link
                  key={secteur.slug}
                  href={`/secteurs/${secteur.slug}`}
                  className="card p-6 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {secteur.name}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {secteur.description}
                  </p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir les solutions
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
