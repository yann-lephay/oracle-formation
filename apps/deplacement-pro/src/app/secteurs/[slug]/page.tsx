import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowLeft,
  HardHat,
  Briefcase,
  Car,
  Target,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { secteurs, getSecteurBySlug } from "@/lib/data/secteurs";
import { getSolutionBySlug } from "@/lib/data/solutions";
import { getGuideBySlug } from "@/lib/data/guides";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

const iconMap: Record<string, React.ElementType> = {
  HardHat, Briefcase, Car, Target,
};

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const secteur = getSecteurBySlug(slug);
  if (!secteur) return {};
  const url = `${seoConfig.siteUrl}/secteurs/${secteur.slug}`;
  return {
    title: secteur.metaTitle,
    description: secteur.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: secteur.metaTitle,
      description: secteur.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function SecteurPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const secteur = getSecteurBySlug(slug);
  if (!secteur) notFound();

  const Icon = iconMap[secteur.icon] || Target;

  const recommendedSolutions = secteur.recommendedSolutions
    .map((r) => {
      const sol = getSolutionBySlug(r.slug);
      return sol ? { ...sol, reason: r.reason } : null;
    })
    .filter(Boolean);

  const relevantGuides = secteur.relevantGuides
    .map((s) => getGuideBySlug(s))
    .filter(Boolean);

  const otherSecteurs = secteurs.filter((s) => s.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(secteur.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Secteurs", url: "/secteurs" },
              { name: secteur.name, url: `/secteurs/${secteur.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/secteurs"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
              Tous les secteurs
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="badge">Secteur</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {secteur.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {secteur.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Enjeux spécifiques
          </h2>
          <div className="max-w-3xl space-y-3">
            {secteur.challenges.map((challenge) => (
              <div key={challenge} className="card p-4 flex items-start gap-3">
                <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific needs */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Besoins spécifiques
          </h2>
          <div className="max-w-3xl space-y-3">
            {secteur.specificNeeds.map((need) => (
              <div key={need} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground">{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended solutions */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Solutions recommandées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {recommendedSolutions.map((sol) => sol && (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                    {sol.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{sol.rating}/5</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {(sol as { reason: string }).reason}
                </p>
                <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Voir l&apos;avis complet
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant guides */}
      {relevantGuides.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Guides utiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relevantGuides.map((guide) => guide && (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card p-5 group"
                >
                  <span className="badge text-[10px] mb-2">{guide.category}</span>
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {guide.shortTitle}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{guide.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-3 max-w-3xl">
            {secteur.faq.map((item) => (
              <div key={item.question} className="card p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other secteurs */}
      {otherSecteurs.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Autres secteurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherSecteurs.map((s) => {
                const SIcon = iconMap[s.icon] || Target;
                return (
                  <Link key={s.slug} href={`/secteurs/${s.slug}`} className="card p-5 group">
                    <div className="flex items-center gap-2 mb-2">
                      <SIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {s.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{s.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-foreground" id="devis">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold font-heading text-background mb-4">
              Trouvez la solution adaptée à votre secteur
            </h2>
            <p className="text-background/60">
              Comparez les outils et demandez un devis personnalisé.
            </p>
          </div>
          <DevisForm />
        </div>
      </section>
    </>
  );
}
