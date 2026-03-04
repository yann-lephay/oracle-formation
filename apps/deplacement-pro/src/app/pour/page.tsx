import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Building,
  Landmark,
  Rocket,
  Briefcase,
  Monitor,
  Heart,
  Scale,
  Users,
} from "lucide-react";
import { personas } from "@/lib/data/personas";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Building,
  Landmark,
  Rocket,
  Briefcase,
  Monitor,
  Heart,
  Scale,
};

export const metadata: Metadata = {
  title: "Solutions par profil d'entreprise — DeplacementPro.fr",
  description:
    "Trouvez la solution de déplacement professionnel adaptée à votre profil : PME, ETI, grands comptes, startups, cabinets de conseil, ESN, associations, secteur public.",
  alternates: { canonical: `${seoConfig.siteUrl}/pour` },
};

export default function PersonasListingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Solutions par profil", url: "/pour" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">
              <Users className="w-3.5 h-3.5 inline -mt-0.5 mr-1" strokeWidth={1.5} />
              {personas.length} profils
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Solutions par profil d&apos;entreprise
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              PME, ETI, grands comptes, startups, cabinets de conseil…
              Chaque type d&apos;entreprise a des besoins spécifiques en matière de déplacements professionnels.
              Trouvez les solutions adaptées à votre profil.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((persona) => {
              const Icon = iconMap[persona.icon] || Building2;
              return (
                <Link
                  key={persona.slug}
                  href={`/pour/${persona.slug}`}
                  className="card p-5 group"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <h2 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {persona.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mb-2">
                    {persona.employeeRange}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {persona.description}
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir les solutions
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
