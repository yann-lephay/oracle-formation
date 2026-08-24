import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Monitor,
  CreditCard,
  Receipt,
  BarChart3,
  CheckCircle2,
  Building2,
  Building,
  Landmark,
  Rocket,
  Briefcase,
  Heart,
  Scale,
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { solutions, getSolutionCountByCategory } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";
import { glossaryTerms } from "@/lib/data/glossaire";
import { personas } from "@/lib/data/personas";
import { villes } from "@/lib/data/villes";
import { integrations } from "@/lib/data/integrations";
import { solutions as solutionsList } from "@/lib/data/solutions";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structured-data";
import { SearchBar, type SearchItem } from "@/components/SearchBar";

const editorialSolutions = solutions;
const editorialReasons: Record<string, string> = {
  navan: "Notre premier choix général quand il faut réunir réservation, paiement et dépenses dans un même parcours.",
  travelperk: "Notre alternative prioritaire pour une équipe qui veut d'abord cadrer et assouplir la réservation de voyages.",
  mooncard: "Notre choix spécialisé quand l'avance de frais et le contrôle des cartes passent avant la réservation.",
  spendesk: "À privilégier lorsque les validations d'achats et la gestion globale des dépenses dominent le besoin voyage.",
  "sap-concur": "À réserver aux organisations qui acceptent davantage de complexité pour un cadre groupe et ERP.",
  expensya: "Notre option la plus ciblée lorsque le problème principal reste la collecte et le traitement des notes de frais.",
};

const searchItems: SearchItem[] = [
  ...editorialSolutions.map((s) => ({ label: s.name, href: `/solution/${s.slug}`, type: "Solutions" })),
  ...categories.map((c) => ({ label: c.name, href: `/${c.slug}`, type: "Catégories" })),
  ...guides.map((g) => ({ label: g.shortTitle, href: `/guides/${g.slug}`, type: "Guides" })),
  ...glossaryTerms.map((t) => ({ label: t.term, href: `/glossaire/${t.slug}`, type: "Glossaire" })),
  ...personas.map((p) => ({ label: p.name, href: `/pour/${p.slug}`, type: "Profils" })),
  ...villes.map((v) => ({ label: v.name, href: `/villes/${v.slug}`, type: "Villes" })),
  ...integrations.map((i) => {
    const sol = solutionsList.find((s) => s.slug === i.solutionSlug);
    return { label: `${sol?.name ?? i.solutionSlug} + ${i.toolName}`, href: `/integrations/${i.slug}`, type: "Intégrations" };
  }),
];

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Monitor,
  CreditCard,
  Receipt,
};

const decisionPaths = [
  {
    title: "Réserver et assister les voyageurs",
    question: "Vous devez centraliser trains, vols, hôtels et assistance.",
    answer: "Comparez d'abord les agences de voyages d'affaires (TMC) : couverture, support, règles de voyage et modèle de facturation.",
    href: "/tmc",
    icon: Globe,
  },
  {
    title: "Donner de l'autonomie pour réserver",
    question: "Les collaborateurs réservent eux-mêmes, dans un cadre défini.",
    answer: "Examinez les outils de réservation autonome (self-booking tools) : inventaire, exceptions, approbation et adoption réelle.",
    href: "/self-booking-tool",
    icon: Monitor,
  },
  {
    title: "Payer sans avance personnelle",
    question: "Le problème principal est le moyen de paiement et le contrôle des plafonds.",
    answer: "Une carte de paiement d'entreprise (carte corporate) peut suffire ; vérifiez qui porte la responsabilité et comment les justificatifs sont rapprochés.",
    href: "/carte-corporate",
    icon: CreditCard,
  },
  {
    title: "Justifier et rembourser les frais",
    question: "Vous perdez du temps entre reçu, validation et comptabilité.",
    answer: "Comparez les outils de notes de frais : collecte, règles, export et correction des erreurs.",
    href: "/notes-de-frais",
    icon: Receipt,
  },
] as const;

const personaIconMap: Record<string, React.ElementType> = {
  Building2,
  Building,
  Landmark,
  Rocket,
  Briefcase,
  Monitor,
  Heart,
  Scale,
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="badge badge-accent">
              Méthode de choix par besoin
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight tracking-tight text-foreground" data-speakable>
              Choisir une solution de{" "}
              <span className="text-primary">déplacement professionnel</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Commencez par le problème à résoudre : réserver, payer, justifier ou contrôler.
              Comparez ensuite les <strong className="text-foreground">6 solutions référencées</strong> dans le bon périmètre.
            </p>

            <SearchBar items={searchItems} />

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                4 besoins distingués
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                Limites et contre-cas visibles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                Sources datées sur les règles sensibles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section-padding !pt-0 !pb-16 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: String(solutions.length), label: "Solutions référencées", icon: BarChart3 },
              { value: String(categories.length), label: "Besoins principaux", icon: Globe },
              { value: String(comparisons.length), label: "Comparatifs par paire", icon: Monitor },
              { value: String(guides.length), label: "Guides pratiques", icon: Receipt },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-2xl md:text-3xl font-extrabold font-heading text-foreground font-mono">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DECISION PATH ============ */}
      <section className="section-padding !pt-0" aria-labelledby="decision-path-title">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 id="decision-path-title" className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Quel problème doit disparaître en premier ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Une plateforme tout-en-un n&apos;est pas automatiquement le bon choix. Isolez le maillon qui bloque aujourd&apos;hui ; vous verrez ensuite si un second module est réellement nécessaire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decisionPaths.map((path) => (
              <Link key={path.href} href={path.href} className="card p-6 group">
                <path.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-foreground mb-2">{path.question}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{path.answer}</p>
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Examiner ce besoin
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATÉGORIES ============ */}
      <section className="section-padding !pt-0" id="categories">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Approfondir par type de solution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              TMC, self-booking, cartes corporate, notes de frais — trouvez la solution adaptée à votre besoin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="card p-5 group"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {cat.shortName}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="badge text-[10px]">
                      {getSolutionCountByCategory(cat.slug)} solutions
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ANNUAIRE DES FICHES ============ */}
      <section className="section-padding bg-muted" id="solutions">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Notre sélection de solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre parti pris privilégie d&apos;abord les solutions qui couvrent le parcours le plus large, puis les spécialistes. Cet ordre général change si votre problème prioritaire est seulement la carte, l&apos;achat ou la note de frais.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {editorialSolutions.map((sol, index) => (
              <li key={sol.slug}>
              <Link
                href={`/solution/${sol.slug}`}
                className="card p-4 block text-sm font-semibold font-heading text-foreground hover:text-primary transition-colors bg-surface"
              >
                <span className="mr-2 text-primary">{index + 1}.</span>{sol.name}
                <span className="mt-2 block text-xs font-normal leading-5 text-muted-foreground">{editorialReasons[sol.slug]}</span>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ GUIDES ============ */}
      <section className="section-padding bg-muted" id="guides">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Guides pratiques & réglementaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Barèmes, modèles et bonnes pratiques pour gérer vos déplacements professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-5 group bg-surface"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-[10px]">{guide.category}</span>
                  <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
                </div>
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                  {guide.shortTitle}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROFILS ============ */}
      <section className="section-padding" id="profils">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Solutions par profil d&apos;entreprise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              PME, ETI, grands comptes et jeunes entreprises : trouvez les solutions adaptées à votre type d&apos;entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((persona) => {
              const PIcon = personaIconMap[persona.icon] || Building2;
              return (
                <Link
                  key={persona.slug}
                  href={`/pour/${persona.slug}`}
                  className="card p-5 group"
                >
                  <PIcon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {persona.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {persona.employeeRange}
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

      {/* ============ SEO TEXT ============ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Une méthode simple avant de choisir un outil
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Commencez par cartographier le trajet réel d&apos;une dépense : demande, réservation,
              paiement, justificatif, validation puis export comptable. Le premier point où
              l&apos;information est ressaisie, attendue ou impossible à corriger définit le besoin
              prioritaire. Cette méthode évite d&apos;acheter une suite complète pour résoudre un seul maillon.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Que vous cherchiez une{" "}
              <Link href="/tmc" className="text-primary hover:underline">
                TMC nouvelle génération
              </Link>
              , une{" "}
              <Link href="/carte-corporate" className="text-primary hover:underline">
                carte corporate
              </Link>{" "}
              ou un{" "}
              <Link href="/notes-de-frais" className="text-primary hover:underline">
                logiciel de notes de frais
              </Link>
              , comparez ensuite le coût total, la capacité à gérer les exceptions, les intégrations
              nécessaires et le propriétaire interne du processus. Une petite équipe avec peu de
              voyages peut conserver un processus simple ; plusieurs entités ou niveaux de validation
              justifient plus souvent un outil structuré.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
