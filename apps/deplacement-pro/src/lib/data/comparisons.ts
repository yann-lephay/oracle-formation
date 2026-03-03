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
    slug: "navan-vs-travelperk",
    title: "Navan vs TravelPerk",
    solution1: "navan",
    solution2: "travelperk",
    intro:
      "Navan et TravelPerk sont les deux leaders européens de la gestion des voyages d'affaires. Ce comparatif analyse en détail leurs différences pour vous aider à choisir la meilleure TMC pour votre entreprise en 2026.",
    verdict:
      "TravelPerk est idéal pour les PME grâce à son offre gratuite et sa tarification transparente. Navan convient mieux aux ETI et grands comptes qui recherchent une solution tout-en-un (TMC + carte + notes de frais).",
    metaTitle: "Navan vs TravelPerk 2026 — Comparatif Détaillé TMC",
    metaDescription:
      "Comparatif Navan vs TravelPerk : prix, fonctionnalités, inventaire, support. Quelle TMC choisir pour votre entreprise en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk propose une offre gratuite et une tarification transparente. Navan fonctionne uniquement sur devis, ce qui rend la comparaison difficile pour les PME.",
      },
      {
        name: "Inventaire",
        description: "Étendue du catalogue de voyages",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Les deux plateformes proposent un inventaire très large incluant GDS, NDC et contenu direct. TravelPerk revendique le plus grand inventaire mondial, Navan offre une couverture équivalente.",
      },
      {
        name: "Fonctionnalités",
        description: "Périmètre fonctionnel global",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Navan intègre TMC + carte corporate + notes de frais en une seule plateforme. TravelPerk se concentre sur le voyage et s'appuie sur des partenaires pour les dépenses.",
      },
      {
        name: "Expérience utilisateur",
        description: "Facilité d'utilisation et interface",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk est légèrement plus intuitif avec une interface épurée. Navan offre une UX très bonne également, mais la richesse fonctionnelle peut complexifier la prise en main.",
      },
      {
        name: "RSE & Durabilité",
        description: "Engagement environnemental",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk se distingue avec GreenPerk, son programme de compensation carbone intégré. Navan propose des options de durabilité, mais moins structurées.",
      },
    ],
    faq: [
      {
        question: "Quelle est la principale différence entre Navan et TravelPerk ?",
        answer:
          "Navan est une solution tout-en-un (TMC + carte corporate + notes de frais) tandis que TravelPerk se concentre sur la réservation de voyages avec des partenariats pour la gestion des dépenses. TravelPerk est plus accessible en prix avec une offre gratuite.",
      },
      {
        question: "Quelle TMC choisir pour une PME ?",
        answer:
          "Pour une PME de moins de 50 voyageurs, TravelPerk est généralement recommandé grâce à son offre gratuite et sa tarification transparente. Navan est plus adapté aux entreprises de 50+ voyageurs.",
      },
      {
        question: "Peut-on utiliser Navan et TravelPerk pour les trains SNCF ?",
        answer:
          "Oui, les deux plateformes intègrent l'inventaire SNCF complet (TGV, Intercités, TER) et permettent de réserver des billets de train directement depuis leur interface.",
      },
    ],
  },
  {
    slug: "mooncard-vs-spendesk",
    title: "Mooncard vs Spendesk",
    solution1: "mooncard",
    solution2: "spendesk",
    intro:
      "Mooncard et Spendesk sont les deux leaders français de la carte corporate nouvelle génération. Ce comparatif détaille leurs différences pour vous aider à choisir la solution la plus adaptée à votre entreprise.",
    verdict:
      "Mooncard est idéal pour les TPE/PME qui cherchent une carte corporate simple et abordable. Spendesk convient mieux aux PME/ETI qui veulent centraliser cartes, factures et workflow d'achat en une seule plateforme.",
    metaTitle: "Mooncard vs Spendesk 2026 — Comparatif Carte Corporate",
    metaDescription:
      "Comparatif Mooncard vs Spendesk : tarifs, cartes, fonctionnalités, intégrations. Quelle carte corporate choisir en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 9,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Mooncard affiche des tarifs clairs à partir de 4 €/carte/mois. Spendesk fonctionne sur devis, ce qui complique la comparaison pour les petites structures.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue des fonctionnalités",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk offre un périmètre plus large : cartes + factures fournisseurs + workflow d'achat + pré-comptabilité. Mooncard se concentre sur la carte et l'automatisation comptable.",
      },
      {
        name: "Simplicité",
        description: "Rapidité de mise en place et prise en main",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Mooncard est opérationnel en quelques jours avec une prise en main quasi immédiate. Spendesk nécessite un paramétrage plus poussé des workflows et des budgets.",
      },
      {
        name: "Intégrations comptables",
        description: "Compatibilité avec les logiciels comptables français",
        solution1Score: 9,
        solution2Score: 8,
        winner: 1,
        analysis:
          "Mooncard excelle sur les intégrations avec les logiciels comptables français (Sage, Cegid, ACD). Spendesk offre une bonne couverture mais avec un focus plus européen.",
      },
      {
        name: "Scalabilité",
        description: "Capacité à accompagner la croissance",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk est mieux armé pour accompagner les entreprises en croissance grâce à ses budgets par équipe, ses workflows multi-niveaux et sa gestion des entités juridiques multiples.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre Mooncard et Spendesk ?",
        answer:
          "Mooncard se concentre sur la carte corporate et l'automatisation comptable (plus simple, plus abordable). Spendesk offre un périmètre plus large incluant la gestion des factures fournisseurs et les workflows d'achat (plus complet, tarif sur devis).",
      },
      {
        question: "Quelle solution pour une TPE de 5 salariés ?",
        answer:
          "Pour une TPE, Mooncard est généralement plus adapté grâce à ses tarifs accessibles (dès 4 €/carte/mois) et sa simplicité de mise en place. Spendesk cible plutôt les entreprises à partir de 20 salariés.",
      },
      {
        question: "Ces solutions remplacent-elles les notes de frais ?",
        answer:
          "Oui, les deux solutions éliminent la majorité des notes de frais en fournissant des cartes corporate avec catégorisation automatique. Les dépenses restantes (avances personnelles) peuvent être gérées via le module notes de frais de chaque solution.",
      },
    ],
  },
  {
    slug: "sap-concur-vs-expensya",
    title: "SAP Concur vs Expensya",
    solution1: "sap-concur",
    solution2: "expensya",
    intro:
      "SAP Concur et Expensya sont deux solutions de gestion des notes de frais aux profils très différents. Ce comparatif vous aide à choisir entre le leader mondial et l'alternative française agile.",
    verdict:
      "Expensya est idéal pour les PME qui cherchent une solution simple, rapide à déployer et abordable. SAP Concur convient aux ETI et grands comptes qui ont besoin d'une suite complète (voyages + frais + factures) et d'une intégration ERP profonde.",
    metaTitle: "SAP Concur vs Expensya 2026 — Comparatif Notes de Frais",
    metaDescription:
      "Comparatif SAP Concur vs Expensya : prix, OCR, intégrations, déploiement. Quel logiciel de notes de frais choisir en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya démarre à 4,99 €/utilisateur/mois. SAP Concur est nettement plus cher, surtout pour les PME, avec un coût total souvent 3 à 5 fois supérieur.",
      },
      {
        name: "OCR & IA",
        description: "Qualité de la reconnaissance des justificatifs",
        solution1Score: 7,
        solution2Score: 8,
        winner: 2,
        analysis:
          "Expensya propose un OCR très performant avec une reconnaissance quasi instantanée. SAP Concur a amélioré son OCR mais reste légèrement en retrait sur la vitesse et la précision.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 10,
        solution2Score: 6,
        winner: 1,
        analysis:
          "SAP Concur offre la suite la plus complète du marché (Travel + Expense + Invoice). Expensya se concentre sur les notes de frais avec une carte en option.",
      },
      {
        name: "Déploiement",
        description: "Rapidité de mise en service",
        solution1Score: 4,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya peut être déployé en quelques jours. SAP Concur nécessite généralement 3 à 6 mois de mise en place avec un intégrateur.",
      },
      {
        name: "Intégrations ERP",
        description: "Compatibilité avec les systèmes d'entreprise",
        solution1Score: 10,
        solution2Score: 7,
        winner: 1,
        analysis:
          "SAP Concur excelle sur les intégrations ERP, notamment avec SAP S/4HANA. Expensya offre de bonnes intégrations avec les logiciels comptables mais moins de profondeur sur les ERP.",
      },
    ],
    faq: [
      {
        question: "SAP Concur ou Expensya pour une PME ?",
        answer:
          "Pour une PME, Expensya est généralement recommandé : plus simple, plus rapide à déployer et 3 à 5 fois moins cher. SAP Concur est surdimensionné pour la plupart des PME.",
      },
      {
        question: "SAP Concur est-il encore pertinent en 2026 ?",
        answer:
          "Oui, SAP Concur reste le leader mondial et la référence pour les ETI et grands comptes, surtout ceux dans l'écosystème SAP. Mais les néo-solutions (Expensya, Spendesk) grignotent des parts de marché sur le segment PME.",
      },
      {
        question: "Peut-on migrer de SAP Concur vers Expensya ?",
        answer:
          "Oui, la migration est possible. Expensya propose un accompagnement dédié pour les entreprises qui souhaitent quitter SAP Concur. La migration prend généralement 2 à 4 semaines.",
      },
    ],
  },
];

const comparisonsBySlug = new Map(comparisons.map((c) => [c.slug, c]));

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisonsBySlug.get(slug);
}
