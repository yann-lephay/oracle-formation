export interface Secteur {
  slug: string;
  name: string;
  description: string;
  icon: string;
  challenges: string[];
  specificNeeds: string[];
  recommendedSolutions: { slug: string; reason: string }[];
  relevantGuides: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const secteurs: Secteur[] = [
  {
    slug: "btp",
    name: "BTP & Construction",
    description:
      "Dans le BTP, les déplacements professionnels sont quotidiens : chantiers, visites clients, formations sécurité. Les contraintes spécifiques (véhicules utilitaires, zones rurales, horaires décalés) nécessitent des solutions adaptées.",
    icon: "HardHat",
    challenges: [
      "Déplacements fréquents vers des chantiers en zone rurale ou périurbaine",
      "Utilisation intensive de véhicules utilitaires et personnels",
      "Gestion des indemnités de grand déplacement (IGD) pour les chantiers éloignés",
      "Conformité URSSAF pour les remboursements de frais kilométriques",
      "Suivi des coûts carburant et péages par chantier",
    ],
    specificNeeds: [
      "Suivi kilométrique automatisé par chantier/projet",
      "Gestion des indemnités de grand déplacement conformes URSSAF",
      "Cartes carburant avec imputation par projet",
      "Gestion de flotte de véhicules utilitaires",
      "Application mobile fonctionnant en zone à faible couverture réseau",
    ],
    recommendedSolutions: [
      { slug: "mooncard", reason: "Cartes de paiement avec catégorisation automatique par chantier et TVA optimisée" },
      { slug: "sap-concur", reason: "Solution robuste pour les grandes entreprises du BTP avec gestion de flotte intégrée" },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "urssaf-deplacement", "indemnites-repas-2026"],
    metaTitle: "Déplacements Professionnels BTP 2026 — Solutions & Gestion",
    metaDescription:
      "Gestion des déplacements professionnels dans le BTP : indemnités chantier, barème kilométrique, véhicules utilitaires. Solutions adaptées au secteur construction.",
    faq: [
      {
        question: "Comment gérer les indemnités de grand déplacement dans le BTP ?",
        answer: "Les IGD (Indemnités de Grand Déplacement) s'appliquent quand le salarié ne peut pas rentrer chez lui. Dans le BTP, c'est fréquent pour les chantiers éloignés. Les barèmes URSSAF 2026 : repas 20,70 €/repas, hébergement 55,10-74,30 €/nuit selon la ville. Au-delà de 3 mois, réduction de 15 %.",
      },
      {
        question: "Quel logiciel de notes de frais pour le BTP ?",
        answer: "Les solutions avec application mobile offline sont essentielles (chantiers sans réseau). Mooncard (carte de paiement) et Expensya (scan de justificatifs) sont adaptés. Pour les grandes entreprises, SAP Concur offre la gestion de flotte intégrée.",
      },
      {
        question: "Comment optimiser les coûts de déplacement chantier ?",
        answer: "Centralisez les réservations, utilisez des cartes carburant avec suivi par chantier, appliquez le barème kilométrique URSSAF au lieu de rembourser au réel, et regroupez les déplacements sur les chantiers proches.",
      },
    ],
  },
  {
    slug: "conseil",
    name: "Cabinets de conseil",
    description:
      "Les consultants voyagent en moyenne 3-4 jours par semaine chez leurs clients. Le voyage d'affaires est un poste de coût majeur (15-25 % du chiffre d'affaires) et un levier de satisfaction collaborateur clé dans un secteur en tension sur les talents.",
    icon: "Briefcase",
    challenges: [
      "Volume élevé de déplacements (3-4 jours/semaine par consultant)",
      "Coût des voyages représentant 15-25 % du CA",
      "Nécessité de refacturer les frais clients avec précision",
      "Attraction et rétention des talents via la politique voyage",
      "Conformité avec les politiques voyage des clients (Big Four)",
    ],
    specificNeeds: [
      "Imputation des frais par mission/client pour refacturation",
      "Politique voyage flexible (classe business pour les associés, économique pour les juniors)",
      "Intégration avec les ERP et outils de staffing",
      "Reporting détaillé par mission, consultant et client",
      "Self-booking tool rapide pour les réservations de dernière minute",
    ],
    recommendedSolutions: [
      { slug: "navan", reason: "Self-booking intuitif avec politique voyage intégrée, idéal pour l'autonomie des consultants" },
      { slug: "travelperk", reason: "Flexibilité d'annulation (FlexiPerk) cruciale pour les missions qui changent fréquemment" },
      { slug: "sap-concur", reason: "Solution enterprise avec refacturation par projet et intégration ERP" },
    ],
    relevantGuides: ["politique-voyage-modele", "indemnites-repas-2026", "tva-deplacement-professionnel"],
    metaTitle: "Voyage d'Affaires Cabinet de Conseil 2026 — Solutions & Optimisation",
    metaDescription:
      "Gestion des voyages d'affaires en cabinet de conseil : refacturation client, politique voyage, outils de self-booking. Solutions optimisées pour consultants.",
    faq: [
      {
        question: "Comment refacturer les frais de déplacement aux clients ?",
        answer: "Utilisez un outil avec imputation par mission (Navan, SAP Concur). Chaque dépense est taguée avec le code client/mission. Le reporting permet de générer des états de refacturation précis. Prévoyez une marge de 5-10 % sur les frais refacturés.",
      },
      {
        question: "Quelle politique voyage pour un cabinet de conseil ?",
        answer: "Policy type : train en 2nde classe (1ère si > 2h), avion en éco (business si > 6h ou grade senior), hôtel 3 étoiles (4 étoiles pour les associés), plafond repas 25-30 €. Adaptez la policy au grade du consultant et aux contraintes client.",
      },
      {
        question: "Comment réduire les coûts de déplacement en conseil ?",
        answer: "Réservez à l'avance (les consultants réservent souvent au dernier moment → +40 % de surcoût), négociez des tarifs corporate avec les hôtels et compagnies aériennes, utilisez un SBT avec comparateur intégré, et encouragez le télétravail client quand c'est possible.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Forces de vente & Commerciaux terrain",
    description:
      "Les commerciaux terrain parcourent en moyenne 25 000 à 40 000 km/an. La gestion de leurs déplacements combine suivi kilométrique, notes de frais quotidiennes et optimisation des tournées. Un enjeu de productivité et de conformité URSSAF.",
    icon: "Car",
    challenges: [
      "Volume kilométrique élevé (25 000-40 000 km/an par commercial)",
      "Notes de frais quotidiennes (repas, carburant, péages)",
      "Optimisation des tournées et des itinéraires",
      "Conformité URSSAF sur les indemnités kilométriques",
      "Suivi des coûts par secteur géographique et par client",
    ],
    specificNeeds: [
      "Application mobile avec suivi GPS des trajets",
      "Calcul automatique des indemnités kilométriques au barème fiscal",
      "Carte carburant avec catégorisation automatique",
      "Optimisation des tournées (routing)",
      "Reporting par commercial, secteur et client",
    ],
    recommendedSolutions: [
      { slug: "mooncard", reason: "Carte de paiement avec catégorisation automatique des dépenses et TVA optimisée" },
      { slug: "expensya", reason: "Application mobile de scan de justificatifs avec suivi kilométrique intégré" },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "urssaf-deplacement", "plafond-indemnites-kilometriques", "note-de-frais-obligations"],
    metaTitle: "Déplacements Commerciaux Terrain 2026 — Gestion & Optimisation",
    metaDescription:
      "Gestion des déplacements commerciaux terrain : suivi kilométrique, notes de frais, optimisation tournées. Solutions pour les forces de vente en 2026.",
    faq: [
      {
        question: "Comment suivre les kilomètres des commerciaux ?",
        answer: "Utilisez une application mobile avec tracking GPS (Expensya, Mooncard). Le commercial lance le suivi en début de trajet, l'app calcule la distance et applique automatiquement le barème kilométrique. Alternative : relevé des compteurs de véhicule avec carnet de bord.",
      },
      {
        question: "Véhicule de fonction ou indemnités kilométriques ?",
        answer: "En dessous de 20 000 km/an, les indemnités kilométriques sont souvent plus avantageuses (pas d'avantage en nature). Au-delà, le véhicule de fonction devient rentable. Évaluez le coût total (barème IK vs TCO véhicule + avantage en nature).",
      },
      {
        question: "Comment optimiser les tournées commerciales ?",
        answer: "Utilisez un logiciel d'optimisation de tournées (Nomadia, Opti-Time) qui calcule l'itinéraire optimal en fonction des rendez-vous, de la géographie et des horaires. Économie potentielle : 15-20 % de kilomètres et 1-2 rendez-vous supplémentaires par jour.",
      },
    ],
  },
];

const secteursBySlug = new Map(secteurs.map((s) => [s.slug, s]));

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return secteursBySlug.get(slug);
}
