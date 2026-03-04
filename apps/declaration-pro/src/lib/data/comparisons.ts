export interface ComparisonCriterion {
  name: string;
  description: string;
  solution1Score: number;
  solution2Score: number;
  winner: 0 | 1 | 2;
  analysis: string;
}

export interface Comparison {
  slug: string;
  title: string;
  solution1: string;
  solution2: string;
  intro: string;
  verdict: string;
  metaTitle: string;
  metaDescription: string;
  criteria: ComparisonCriterion[];
  faq: { question: string; answer: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: "sage-vs-cegid",
    title: "Sage vs Cegid",
    solution1: "sage",
    solution2: "cegid",
    intro:
      "Sage et Cegid sont les deux leaders historiques de la comptabilité en France. Ce comparatif analyse en détail leurs différences pour vous aider à choisir le meilleur logiciel de déclaration pour votre entreprise en 2026.",
    verdict:
      "Sage convient mieux aux PME qui cherchent un outil de bureau robuste avec une couverture fonctionnelle exhaustive. Cegid est idéal pour les cabinets comptables et les entreprises qui veulent une solution 100 % cloud avec collaboration temps réel.",
    metaTitle: "Sage vs Cegid 2026 — Comparatif Logiciel Comptabilité",
    metaDescription:
      "Comparatif Sage vs Cegid : prix, fonctionnalités, déclarations fiscales, DSN. Quel logiciel comptable choisir pour votre entreprise en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 7,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Sage affiche des tarifs plus clairs avec des plans à partir de 25 €/mois. Cegid fonctionne souvent sur devis pour les modules avancés, ce qui rend la comparaison plus difficile.",
      },
      {
        name: "Cloud & Accessibilité",
        description: "Disponibilité cloud et accès multi-appareils",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Cegid Loop est nativement cloud avec une interface web moderne. Sage propose Business Cloud mais certaines gammes (Sage 100) restent hybrides. Cegid a une longueur d'avance sur le full cloud.",
      },
      {
        name: "Couverture déclarative",
        description: "Étendue des déclarations gérées",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Les deux solutions couvrent l'ensemble des déclarations : DSN, TVA, liasse fiscale, bilan. Sage excelle sur la paie, Cegid sur la collaboration cabinet-client.",
      },
      {
        name: "Écosystème & Intégrations",
        description: "Compatibilité avec les outils tiers",
        solution1Score: 8,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Sage bénéficie d'un écosystème plus ouvert avec de nombreuses intégrations tierces (Dext, PayFit, Stripe). Cegid est plus fermé mais offre une suite intégrée très cohérente.",
      },
      {
        name: "Collaboration expert-comptable",
        description: "Fonctionnalités de travail collaboratif",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Cegid est conçu pour la collaboration cabinet-client avec révision en temps réel, échanges intégrés et gestion multi-dossiers. Sage progresse mais reste en retrait sur ce point.",
      },
    ],
    faq: [
      {
        question: "Sage ou Cegid pour une PME de 50 salariés ?",
        answer:
          "Les deux conviennent. Sage 100 est recommandé si vous cherchez une suite bureau robuste avec paie intégrée. Cegid Loop est préférable si vous voulez du full cloud et une collaboration fluide avec votre expert-comptable.",
      },
      {
        question: "Peut-on migrer de Sage vers Cegid ?",
        answer:
          "Oui, Cegid propose des outils de migration depuis Sage. L'import du FEC permet de récupérer l'historique comptable. Comptez 2 à 6 semaines selon la complexité du dossier.",
      },
      {
        question: "Quel logiciel pour un cabinet comptable ?",
        answer:
          "Cegid est la référence pour les cabinets grâce à ses fonctionnalités multi-dossiers, sa révision collaborative et sa gestion intégrée du portefeuille clients. Sage est plus orienté entreprise.",
      },
    ],
  },
  {
    slug: "pennylane-vs-indy",
    title: "Pennylane vs Indy",
    solution1: "pennylane",
    solution2: "indy",
    intro:
      "Pennylane et Indy sont les deux néo-logiciels comptables français les plus populaires. Ce comparatif vous aide à choisir entre la solution collaborative pour PME et le spécialiste des indépendants.",
    verdict:
      "Indy est parfait pour les indépendants et professions libérales qui veulent gérer leur comptabilité seuls. Pennylane convient mieux aux TPE/PME qui collaborent avec un expert-comptable et ont besoin de fonctionnalités plus avancées.",
    metaTitle: "Pennylane vs Indy 2026 — Comparatif Comptabilité Automatisée",
    metaDescription:
      "Comparatif Pennylane vs Indy : prix, automatisation, déclarations, expert-comptable. Quel logiciel choisir pour votre activité en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Indy propose une offre gratuite pour les micro-entrepreneurs et des plans dès 22 €/mois. Pennylane démarre à 14 €/mois mais les fonctionnalités avancées nécessitent le plan Pro à 49 €/mois.",
      },
      {
        name: "Automatisation IA",
        description: "Qualité de la catégorisation et de l'automatisation",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Indy excelle avec une IA de catégorisation à 95 % de précision, optimisée pour les professions libérales. Pennylane offre une très bonne automatisation mais plus généraliste.",
      },
      {
        name: "Couverture fonctionnelle",
        description: "Étendue des fonctionnalités",
        solution1Score: 9,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Pennylane couvre la comptabilité complète (bilan, liasse fiscale, TVA, facturation, trésorerie). Indy se concentre sur les déclarations des indépendants (2035, 2042-C-PRO, TVA, URSSAF).",
      },
      {
        name: "Collaboration expert-comptable",
        description: "Fonctionnalités de travail avec un cabinet",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Pennylane est conçu pour la collaboration expert-comptable avec un réseau de cabinets partenaires. Indy est pensé pour que l'indépendant gère tout seul, sans expert-comptable.",
      },
      {
        name: "Simplicité d'utilisation",
        description: "Facilité de prise en main",
        solution1Score: 8,
        solution2Score: 10,
        winner: 2,
        analysis:
          "Indy est le logiciel le plus simple du marché : onboarding en 5 minutes, interface épurée, tout est automatisé. Pennylane est intuitif mais la richesse fonctionnelle implique une courbe d'apprentissage.",
      },
    ],
    faq: [
      {
        question: "Pennylane ou Indy pour un freelance ?",
        answer:
          "Pour un freelance en BNC avec une activité simple, Indy est idéal : gratuit ou 22 €/mois, sans expert-comptable. Si vous avez une activité plus complexe ou souhaitez un expert-comptable, Pennylane est recommandé.",
      },
      {
        question: "Peut-on passer d'Indy à Pennylane ?",
        answer:
          "Oui, la migration est possible en exportant votre FEC depuis Indy et en l'important dans Pennylane. Pennylane propose un accompagnement dédié pour la transition.",
      },
      {
        question: "Lequel gère le mieux la TVA ?",
        answer:
          "Les deux gèrent bien la TVA (CA3/CA12). Pennylane offre une télétransmission plus complète et intégrée. Indy simplifie le processus pour les indépendants avec un assistant pas-à-pas.",
      },
    ],
  },
  {
    slug: "quickbooks-vs-pennylane",
    title: "QuickBooks vs Pennylane",
    solution1: "quickbooks",
    solution2: "pennylane",
    intro:
      "QuickBooks et Pennylane sont deux solutions cloud de comptabilité qui ciblent les TPE et PME. Ce comparatif analyse leurs forces respectives pour le marché français en 2026.",
    verdict:
      "Pennylane est supérieur pour les entreprises françaises grâce à sa conformité réglementaire complète et sa collaboration expert-comptable. QuickBooks convient mieux aux entreprises internationales qui ont besoin d'une comptabilité multi-devises.",
    metaTitle: "QuickBooks vs Pennylane 2026 — Comparatif Comptabilité Cloud",
    metaDescription:
      "Comparatif QuickBooks vs Pennylane : prix, conformité française, TVA, déclarations. Quel logiciel cloud choisir en France en 2026 ?",
    criteria: [
      {
        name: "Conformité française",
        description: "Couverture des obligations fiscales françaises",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Pennylane couvre l'intégralité des obligations françaises (TVA, liasse fiscale, FEC, bilan). QuickBooks gère la TVA mais ne propose ni liasse fiscale ni DSN intégrée.",
      },
      {
        name: "Interface et ergonomie",
        description: "Facilité d'utilisation et design",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Les deux offrent des interfaces modernes. Pennylane a l'avantage d'un design pensé pour le marché français avec des termes comptables adaptés.",
      },
      {
        name: "International",
        description: "Gestion multi-devises et multi-pays",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "QuickBooks excelle à l'international avec le multi-devises, le multi-langue et la conformité dans 150+ pays. Pennylane est focalisé sur la France.",
      },
      {
        name: "Automatisation",
        description: "Niveau d'automatisation comptable",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Pennylane offre une automatisation supérieure avec OCR, rapprochement bancaire intelligent et pré-remplissage des déclarations fiscales. QuickBooks propose une bonne synchronisation bancaire mais moins d'IA.",
      },
      {
        name: "Tarification",
        description: "Rapport qualité-prix",
        solution1Score: 8,
        solution2Score: 7,
        winner: 1,
        analysis:
          "QuickBooks démarre à 12 €/mois contre 14 €/mois pour Pennylane. Mais le plan Pro de Pennylane à 49 €/mois inclut bien plus de fonctionnalités que le plan Plus de QuickBooks à 36 €/mois.",
      },
    ],
    faq: [
      {
        question: "QuickBooks ou Pennylane pour une TPE française ?",
        answer:
          "Pennylane est recommandé pour une TPE française grâce à sa conformité complète (TVA, liasse fiscale, FEC) et sa collaboration avec l'expert-comptable. QuickBooks est à privilégier si vous avez une activité internationale.",
      },
      {
        question: "QuickBooks gère-t-il la liasse fiscale ?",
        answer:
          "Non, QuickBooks ne propose pas la liasse fiscale ni la télétransmission EDI-TDFC. Pour la liasse fiscale, il faut un outil complémentaire ou passer par votre expert-comptable.",
      },
      {
        question: "Peut-on utiliser QuickBooks avec un expert-comptable français ?",
        answer:
          "Oui, QuickBooks permet de donner accès à un expert-comptable. Cependant, la plupart des cabinets français travaillent avec Sage, Cegid ou Pennylane et connaissent moins bien QuickBooks.",
      },
    ],
  },
  {
    slug: "sage-vs-quickbooks",
    title: "Sage vs QuickBooks",
    solution1: "sage",
    solution2: "quickbooks",
    intro:
      "Sage et QuickBooks sont deux poids lourds de la comptabilité professionnelle. Ce comparatif oppose le leader français au géant américain pour vous aider à faire le bon choix en 2026.",
    verdict:
      "Sage est incontournable pour les PME et ETI françaises qui ont besoin de la conformité réglementaire complète (DSN, liasse fiscale, URSSAF). QuickBooks est plus adapté aux TPE avec une activité simple ou internationale.",
    metaTitle: "Sage vs QuickBooks 2026 — Comparatif Comptabilité France",
    metaDescription:
      "Comparatif Sage vs QuickBooks : prix, conformité française, DSN, TVA, liasse fiscale. Quel logiciel comptable choisir en France en 2026 ?",
    criteria: [
      {
        name: "Conformité française",
        description: "Couverture réglementaire française",
        solution1Score: 10,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Sage couvre l'intégralité des obligations françaises : DSN, TVA, liasse fiscale, URSSAF, FEC, bilan. QuickBooks se limite à la TVA et au FEC — pas de liasse fiscale ni de DSN.",
      },
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "QuickBooks est nettement plus accessible (12-36 €/mois) que Sage (25-90 €/mois+). Pour une TPE avec des besoins simples, QuickBooks offre un meilleur rapport qualité-prix.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 10,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Sage propose une suite complète (comptabilité, paie, DSN, liasse fiscale, immobilisations). QuickBooks se concentre sur la comptabilité de base, la facturation et le suivi de trésorerie.",
      },
      {
        name: "Simplicité d'utilisation",
        description: "Facilité de prise en main",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "QuickBooks est beaucoup plus simple à prendre en main avec une interface intuitive. Sage nécessite une formation et une courbe d'apprentissage plus longue.",
      },
      {
        name: "Scalabilité",
        description: "Capacité à accompagner la croissance",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "Sage accompagne les entreprises de 1 à 500+ salariés avec des gammes adaptées (Sage 50, 100, X3). QuickBooks atteint ses limites au-delà de 50 salariés.",
      },
    ],
    faq: [
      {
        question: "Sage ou QuickBooks pour un artisan ?",
        answer:
          "Pour un artisan avec une activité simple, QuickBooks est plus adapté : plus simple, moins cher et suffisant pour la TVA et la facturation. Si l'artisan a des salariés et a besoin de la paie/DSN, Sage devient nécessaire.",
      },
      {
        question: "Peut-on migrer de QuickBooks vers Sage ?",
        answer:
          "Oui, la migration est possible via l'export FEC depuis QuickBooks et l'import dans Sage. Sage propose également des outils de migration assistée. Comptez 1 à 3 semaines.",
      },
      {
        question: "Quel logiciel pour la liasse fiscale ?",
        answer:
          "Sage intègre la liasse fiscale avec télétransmission EDI-TDFC. QuickBooks ne propose pas cette fonctionnalité — vous devrez utiliser un outil complémentaire ou passer par votre expert-comptable.",
      },
    ],
  },
];

const comparisonsBySlug = new Map(comparisons.map((c) => [c.slug, c]));

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisonsBySlug.get(slug);
}
