import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Méthodologie — Nos critères de notation",
  description:
    "Découvrez comment DeplacementPro.fr évalue et compare les solutions de déplacement professionnel : critères, pondération, sources.",
  alternates: { canonical: "https://deplacement-pro.fr/methodologie" },
};

export default function MethodologiePage() {
  const criteria = [
    {
      name: "Fonctionnalités",
      weight: "30 %",
      description:
        "Étendue du périmètre fonctionnel : réservation, gestion des dépenses, reporting, intégrations, application mobile.",
    },
    {
      name: "Tarification",
      weight: "20 %",
      description:
        "Transparence des prix, rapport qualité-prix, accessibilité pour les PME, existence d'une offre gratuite ou d'essai.",
    },
    {
      name: "Expérience utilisateur",
      weight: "20 %",
      description:
        "Facilité de prise en main, qualité de l'interface, temps de déploiement, accompagnement au changement.",
    },
    {
      name: "Intégrations",
      weight: "15 %",
      description:
        "Compatibilité avec les logiciels comptables (Sage, Cegid), les ERP (SAP, Oracle), les outils RH et les outils de productivité.",
    },
    {
      name: "Support & fiabilité",
      weight: "15 %",
      description:
        "Qualité du support client, disponibilité (24/7 ou heures ouvrées), SLA, localisation de l'équipe support.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Méthodologie", url: "/methodologie" },
            ])
          ),
        }}
      />

      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
            Notre méthodologie
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            DeplacementPro.fr évalue chaque solution selon 5 critères pondérés.
            Nos analyses sont indépendantes et mises à jour trimestriellement.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Critères d&apos;évaluation
            </h2>
            <div className="space-y-4">
              {criteria.map((c) => (
                <div key={c.name} className="card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{c.name}</h3>
                    <span className="font-mono text-sm font-bold text-primary">{c.weight}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold font-heading text-foreground mt-12 mb-4">
              Sources
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Tests pratiques des solutions par notre équipe</li>
              <li>• Avis clients vérifiés (G2, Capterra, Trustpilot)</li>
              <li>• Documentation officielle des éditeurs</li>
              <li>• Entretiens avec des travel managers et DAF</li>
              <li>• Données publiques (URSSAF, DGFIP, INSEE)</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-foreground mt-12 mb-4">
              Transparence
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DeplacementPro.fr est financé par des liens d&apos;affiliation. Lorsqu&apos;un
              visiteur souscrit à une solution via notre site, nous percevons une commission.
              Ce modèle n&apos;influence jamais nos évaluations : les notes et classements sont
              basés exclusivement sur nos critères objectifs. Tous les liens d&apos;affiliation
              portent la mention <code className="font-mono text-xs bg-muted px-1 rounded">rel=&quot;nofollow&quot;</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
