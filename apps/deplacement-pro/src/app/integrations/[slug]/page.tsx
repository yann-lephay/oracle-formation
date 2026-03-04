import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Puzzle,
  CheckCircle2,
  Zap,
  Settings,
} from "lucide-react";
import {
  integrations,
  getIntegrationBySlug,
  getIntegrationsBySolution,
} from "@/lib/data/integrations";
import { getSolutionBySlug } from "@/lib/data/solutions";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) return {};
  const url = `${seoConfig.siteUrl}/integrations/${integration.slug}`;
  return {
    title: integration.metaTitle,
    description: integration.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: integration.metaTitle,
      description: integration.metaDescription,
      url,
      type: "website",
    },
  };
}

const levelLabels: Record<string, string> = {
  native: "Intégration native",
  api: "Intégration API",
  connecteur: "Connecteur tiers",
};

const levelColors: Record<string, string> = {
  native: "text-green-700 bg-green-50 border-green-200",
  api: "text-blue-700 bg-blue-50 border-blue-200",
  connecteur: "text-amber-700 bg-amber-50 border-amber-200",
};

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) notFound();

  const solution = getSolutionBySlug(integration.solutionSlug);
  const relatedIntegrations = getIntegrationsBySolution(
    integration.solutionSlug
  ).filter((i) => i.slug !== integration.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(integration.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Intégrations", url: "/integrations" },
              {
                name: integration.title,
                url: `/integrations/${integration.slug}`,
              },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
              Intégrations
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="badge">
                <Puzzle
                  className="w-3 h-3 inline -mt-0.5 mr-1"
                  strokeWidth={1.5}
                />
                Intégration
              </span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded border ${levelColors[integration.integrationLevel]}`}
              >
                {levelLabels[integration.integrationLevel]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {integration.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Découvrez comment intégrer{" "}
              <strong className="text-foreground">
                {solution?.name ?? integration.solutionSlug}
              </strong>{" "}
              avec{" "}
              <strong className="text-foreground">
                {integration.toolName}
              </strong>{" "}
              pour automatiser vos flux de données.
            </p>
          </div>
        </div>
      </section>

      {/* Key info cards */}
      <section className="section-padding !pt-0 !pb-8 -mt-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-5 text-center">
              <Puzzle
                className="w-5 h-5 text-primary mx-auto mb-2"
                strokeWidth={1.5}
              />
              <p className="text-sm font-semibold text-foreground">
                {levelLabels[integration.integrationLevel]}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Type de connexion
              </p>
            </div>
            <div className="card p-5 text-center">
              <Zap
                className="w-5 h-5 text-primary mx-auto mb-2"
                strokeWidth={1.5}
              />
              <p className="text-sm font-semibold text-foreground">
                {integration.features.length} fonctionnalités
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Capacités de l&apos;intégration
              </p>
            </div>
            <div className="card p-5 text-center">
              <Settings
                className="w-5 h-5 text-primary mx-auto mb-2"
                strokeWidth={1.5}
              />
              <p className="text-sm font-semibold text-foreground">
                {integration.setupSteps.length} étapes
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Configuration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Comment fonctionne l&apos;intégration {integration.title} ?
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {integration.description
                .split(". ")
                .reduce((paragraphs: string[], sentence, i, arr) => {
                  const pIdx = Math.floor(
                    i / Math.ceil(arr.length / 2)
                  );
                  if (!paragraphs[pIdx]) paragraphs[pIdx] = "";
                  paragraphs[pIdx] +=
                    sentence + (i < arr.length - 1 ? ". " : "");
                  return paragraphs;
                }, [])
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Fonctionnalités clés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
            {integration.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <CheckCircle2
                  className="w-4 h-4 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup steps */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Mise en place étape par étape
          </h2>
          <div className="space-y-3 max-w-3xl">
            {integration.setupSteps.map((step, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-muted-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-3 max-w-3xl">
            {integration.faq.map((item) => (
              <div key={item.question} className="card p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related integrations + solution link */}
      {relatedIntegrations.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Autres intégrations {solution?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedIntegrations.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/integrations/${rel.slug}`}
                  className="card p-5 group"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                    {rel.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded border ${levelColors[rel.integrationLevel]}`}
                    >
                      {levelLabels[rel.integrationLevel]}
                    </span>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Voir
                      <ArrowRight
                        className="w-3.5 h-3.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {solution && (
              <div className="mt-6">
                <Link
                  href={`/solution/${solution.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                >
                  Voir l&apos;avis complet {solution.name}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA DevisForm */}
      <section className="section-padding bg-muted" id="devis">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
