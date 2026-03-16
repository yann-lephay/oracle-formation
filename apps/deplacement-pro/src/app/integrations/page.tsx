import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Puzzle } from "lucide-react";
import { integrations } from "@/lib/data/integrations";
import { solutions } from "@/lib/data/solutions";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Intégrations — Outils Compatibles",
  description:
    "Découvrez comment les solutions de déplacement professionnel s'intègrent avec Sage, Cegid, Pennylane, SAP, Workday, Slack et Xero. Guides de configuration détaillés.",
  alternates: { canonical: `${seoConfig.siteUrl}/integrations` },
  openGraph: {
    title: "Intégrations — Outils Compatibles",
    description:
      "Découvrez comment les solutions de déplacement professionnel s'intègrent avec vos outils.",
    url: `${seoConfig.siteUrl}/integrations`,
    type: "website",
  },
};

const levelLabels: Record<string, string> = {
  native: "Native",
  api: "API",
  connecteur: "Connecteur",
};

const levelColors: Record<string, string> = {
  native: "text-green-700 bg-green-50 border-green-200",
  api: "text-blue-700 bg-blue-50 border-blue-200",
  connecteur: "text-amber-700 bg-amber-50 border-amber-200",
};

export default function IntegrationsPage() {
  const solutionOrder = solutions.map((s) => s.slug);

  const integrationsBySolution = solutionOrder
    .map((slug) => {
      const solution = solutions.find((s) => s.slug === slug);
      return {
        solution: solution!,
        items: integrations.filter((i) => i.solutionSlug === slug),
      };
    })
    .filter((group) => group.items.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Intégrations", url: "/integrations" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="badge mb-4">
              <Puzzle
                className="w-3.5 h-3.5 inline -mt-0.5 mr-1"
                strokeWidth={1.5}
              />
              {integrations.length} intégrations
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              Intégrations des solutions de déplacement professionnel
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Sage, Cegid, Pennylane, SAP, Workday, Slack, Xero… Découvrez
              comment chaque solution s&apos;intègre avec vos outils comptables,
              RH et ERP. Guides de configuration étape par étape.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations by solution */}
      {integrationsBySolution.map((group) => (
        <section key={group.solution.slug} className="section-padding !pb-4">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold font-heading text-foreground mb-4">
              {group.solution.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {group.items.map((integration) => (
                <Link
                  key={integration.slug}
                  href={`/integrations/${integration.slug}`}
                  className="card p-5 group"
                >
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {integration.description.slice(0, 120)}…
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded border ${levelColors[integration.integrationLevel]}`}
                    >
                      {levelLabels[integration.integrationLevel]}
                    </span>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Voir le guide
                      <ArrowRight
                        className="w-3.5 h-3.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
