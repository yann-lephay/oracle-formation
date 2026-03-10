import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Building2,
  Building,
  Landmark,
  Rocket,
  Briefcase,
  Monitor,
  Heart,
  Scale,
  ArrowRight,
  Users,
  Plane,
  Wallet,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { personas, getPersonaBySlug } from "@/lib/data/personas";
import { categories } from "@/lib/data/categories";
import { solutions } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

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

export const revalidate = false;
export function generateStaticParams() {
  return personas.map((p) => ({ segment: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>;
}): Promise<Metadata> {
  const { segment } = await params;
  const persona = getPersonaBySlug(segment);
  if (!persona) return {};
  const url = `${seoConfig.siteUrl}/pour/${persona.slug}`;
  return {
    title: persona.metaTitle,
    description: persona.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: persona.metaTitle,
      description: persona.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function PersonaPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment } = await params;
  const persona = getPersonaBySlug(segment);
  if (!persona) notFound();

  const Icon = iconMap[persona.icon] || Building2;

  const recCategories = categories.filter((c) =>
    persona.recommendedCategories.includes(c.slug)
  );
  const recSolutions = persona.recommendedSolutions
    .map((rs) => {
      const sol = solutions.find((s) => s.slug === rs.slug);
      return sol ? { ...sol, reason: rs.reason } : null;
    })
    .filter(Boolean) as (typeof solutions[number] & { reason: string })[];
  const recComparisons = comparisons.filter((c) =>
    persona.relevantComparisons.includes(c.slug)
  );
  const recGuides = guides.filter((g) =>
    persona.relevantGuides.includes(g.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(persona.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Solutions par profil", url: "/pour" },
              { name: persona.name, url: `/pour/${persona.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="badge text-xs">Profil entreprise</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Déplacements professionnels pour {persona.name}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {persona.description}
            </p>
          </div>
        </div>
      </section>

      {/* Métriques */}
      <section className="section-padding !pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-4 text-center">
              <Users className="w-4 h-4 text-primary mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground mb-1">Effectif</p>
              <p className="font-mono font-bold text-foreground text-sm">
                {persona.employeeRange}
              </p>
            </div>
            <div className="card p-4 text-center">
              <Plane className="w-4 h-4 text-primary mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground mb-1">Fréquence</p>
              <p className="font-mono font-bold text-foreground text-sm">
                {persona.travelFrequency}
              </p>
            </div>
            <div className="card p-4 text-center">
              <Wallet className="w-4 h-4 text-primary mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground mb-1">Budget annuel</p>
              <p className="font-mono font-bold text-foreground text-sm">
                {persona.annualBudget}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Défis */}
      <section className="section-padding !pt-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <h2 className="text-xl font-bold font-heading text-foreground">
                Défis spécifiques
              </h2>
            </div>
            <ul className="space-y-3">
              {persona.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="card p-4 text-sm text-muted-foreground"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Catégories recommandées */}
      {recCategories.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Catégories recommandées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="card p-5 group bg-surface"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {cat.shortName}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explorer
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions recommandées */}
      {recSolutions.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Solutions recommandées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solution/${sol.slug}`}
                  className="card p-5 group"
                >
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-1">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {sol.reason}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {sol.priceRange}
                    </span>
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
      )}

      {/* Comparaisons pertinentes */}
      {recComparisons.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Comparatifs pertinents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recComparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparer/${comp.slug}`}
                  className="card p-5 group bg-surface"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {comp.intro.slice(0, 120)}…
                  </p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire le comparatif
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides pertinents */}
      {recGuides.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Guides utiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card p-5 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge text-[10px]">{guide.category}</span>
                    <span className="text-xs text-muted-foreground">
                      {guide.readingTime}
                    </span>
                  </div>
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm">
                    {guide.shortTitle}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conseils budget */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <h2 className="text-xl font-bold font-heading text-foreground">
                Conseils pour optimiser votre budget
              </h2>
            </div>
            <ul className="space-y-3">
              {persona.budgetTips.map((tip) => (
                <li key={tip} className="card p-4 text-sm text-muted-foreground bg-surface">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {persona.faq.map((item) => (
                <div key={item.question} className="card p-5">
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Devis */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-3">
              Trouvez la solution adaptée à votre {persona.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recevez des propositions personnalisées de plusieurs éditeurs en
              une seule demande. Gratuit et sans engagement.
            </p>
          </div>
          <DevisForm />
        </div>
      </section>
    </>
  );
}
