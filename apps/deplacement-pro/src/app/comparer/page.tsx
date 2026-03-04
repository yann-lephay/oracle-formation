import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { comparisons } from "@/lib/data/comparisons";
import { getSolutionBySlug } from "@/lib/data/solutions";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Comparatifs — Solutions de Déplacement Professionnel 2026",
  description:
    "Comparatifs détaillés des solutions de déplacement professionnel : Navan vs TravelPerk, Mooncard vs Spendesk, SAP Concur vs Expensya. Prix, fonctionnalités, verdict.",
  alternates: { canonical: `${seoConfig.siteUrl}/comparer` },
  openGraph: {
    title: "Comparatifs — Solutions de Déplacement Professionnel 2026",
    description:
      "Comparatifs détaillés des solutions de déplacement professionnel.",
    url: `${seoConfig.siteUrl}/comparer`,
    type: "website",
  },
};

export default function ComparerIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Comparatifs", url: "/comparer" },
            ])
          ),
        }}
      />

      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">{comparisons.length} comparatifs</div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Comparatifs tête-à-tête
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Des analyses détaillées pour vous aider à choisir entre deux solutions
              de déplacement professionnel. Prix, fonctionnalités, support — tous les
              critères passés au crible.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((comp) => {
              const sol1 = getSolutionBySlug(comp.solution1);
              const sol2 = getSolutionBySlug(comp.solution2);
              return (
                <Link
                  key={comp.slug}
                  href={`/comparer/${comp.slug}`}
                  className="card p-5 text-center group"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {sol1?.name ?? comp.solution1}
                    </span>
                    <span className="text-xs text-muted-foreground">vs</span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {sol2?.name ?? comp.solution2}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                    {comp.intro.slice(0, 120)}…
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Lire le comparatif
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
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
