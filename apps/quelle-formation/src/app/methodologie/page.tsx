import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  BarChart3,
  Users,
  Shield,
  Target,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Notre Méthodologie",
  description:
    "Découvrez comment QuelleFormation.fr évalue et compare les organismes de formation professionnelle : critères objectifs, sources vérifiées, transparence totale.",
  alternates: {
    canonical: "https://quelleformationpro.fr/methodologie",
  },
};

const criteria = [
  {
    icon: BarChart3,
    title: "Prix et rapport qualité-prix",
    weight: "25 %",
    description:
      "Nous comparons le coût total de chaque formation (frais de scolarité, matériel, certifications) et analysons le rapport entre le prix payé et la qualité de l'enseignement, les ressources fournies et les résultats obtenus.",
  },
  {
    icon: BookOpen,
    title: "Catalogue et pédagogie",
    weight: "20 %",
    description:
      "Étendue du catalogue, formats proposés (présentiel, e-learning, hybride, bootcamp), qualité des contenus pédagogiques, actualisation des programmes et accompagnement (mentorat, coaching).",
  },
  {
    icon: Shield,
    title: "Certifications et reconnaissance",
    weight: "20 %",
    description:
      "Certification Qualiopi, titres inscrits au RNCP, reconnaissance par les entreprises, partenariats académiques. Nous vérifions chaque certification directement sur les bases officielles.",
  },
  {
    icon: Users,
    title: "Avis et satisfaction",
    weight: "15 %",
    description:
      "Note moyenne des anciens élèves, analyse qualitative des retours (points forts/faibles récurrents), taux de recommandation. Nous croisons plusieurs sources : Google, Trustpilot, Course Report, avis certifiés.",
  },
  {
    icon: Target,
    title: "Insertion professionnelle",
    weight: "10 %",
    description:
      "Taux d'insertion à 6 mois, accompagnement carrière (coaching, job dating, réseau alumni), partenariats entreprises pour les stages et l'emploi.",
  },
  {
    icon: Search,
    title: "Financement et accessibilité",
    weight: "10 %",
    description:
      "Éligibilité CPF, prise en charge OPCO ou France Travail, facilités de paiement, options de financement propres à l'organisme. Plus une formation est accessible financièrement, mieux elle est notée.",
  },
];

const sources = [
  "Sites officiels des organismes de formation",
  "Base France Compétences (certifications RNCP)",
  "Liste officielle Qualiopi (data.gouv.fr)",
  "Avis vérifiés : Google Business, Trustpilot, Course Report",
  "Rapports d'insertion professionnelle publiés par les organismes",
  "Enquêtes publiques (DARES, Cereq, France Travail)",
];

export default function MethodologiePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://quelleformationpro.fr" },
    { name: "Méthodologie", url: "https://quelleformationpro.fr/methodologie" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient">
        <div className="container-narrow mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full border border-border text-sm font-medium text-muted-foreground mb-4">
              Transparence totale
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight text-foreground">
              Notre méthodologie de comparaison
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              QuelleFormation.fr évalue chaque organisme de formation selon des critères
              objectifs et vérifiables. Aucun organisme ne peut payer pour améliorer son
              classement.
            </p>
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-6">
              Nos principes
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Indépendance",
                  text: "Nos classements ne sont pas influencés par les partenariats d'affiliation. Un organisme partenaire est évalué exactement comme les autres.",
                },
                {
                  title: "Objectivité",
                  text: "Chaque critère repose sur des données factuelles et vérifiables : prix publiés, certifications officielles, avis publics.",
                },
                {
                  title: "Transparence",
                  text: "Nous publions notre grille d'évaluation et nos sources. Vous pouvez vérifier chaque information par vous-même.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="glass-card p-6 space-y-2"
                >
                  <h3 className="font-bold font-heading text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Critères */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
              Les 6 critères d&apos;évaluation
            </h2>
            <p className="text-muted-foreground mb-8">
              Chaque organisme est évalué sur ces critères, pondérés selon leur importance
              pour les apprenants.
            </p>

            <div className="space-y-4">
              {criteria.map((c) => (
                <div
                  key={c.title}
                  className="glass-card p-6 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-bold font-heading text-foreground">{c.title}</h3>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        {c.weight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-6">
              Nos sources
            </h2>
            <ul className="space-y-3">
              {sources.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-8">
              Notre processus
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Collecte des données",
                  text: "Nous récupérons les informations publiques de chaque organisme : tarifs, programmes, certifications, avis. Les données sont mises à jour régulièrement.",
                },
                {
                  step: "2",
                  title: "Vérification",
                  text: "Chaque information est croisée avec au moins deux sources distinctes. Les certifications sont vérifiées sur les bases officielles (France Compétences, Qualiopi).",
                },
                {
                  step: "3",
                  title: "Évaluation",
                  text: "Nous appliquons notre grille de 6 critères pondérés. Chaque critère donne une note, agrégée en un score global sur 5.",
                },
                {
                  step: "4",
                  title: "Rédaction et publication",
                  text: "Les fiches, comparatifs et classements sont rédigés sur la base des données évaluées. Nous indiquons systématiquement la date de dernière mise à jour.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {s.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold font-heading text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Une question sur notre méthodologie ? Une information à corriger ?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@quelleformationpro.fr"
              className="btn-primary text-sm"
            >
              Nous contacter
            </a>
            <Link href="/" className="btn-secondary text-sm">
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
