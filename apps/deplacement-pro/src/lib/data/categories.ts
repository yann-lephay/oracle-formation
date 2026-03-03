export interface Categorie {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  useCases: string[];
  targetAudience: string;
  priceRange: string;
}

export const categories: Categorie[] = [
  {
    slug: "tmc",
    name: "Travel Management Company (TMC)",
    shortName: "TMC",
    description:
      "Les TMC nouvelle génération combinent plateforme de réservation, négociation tarifaire et accompagnement humain pour optimiser vos déplacements professionnels.",
    icon: "Globe",
    metaTitle: "Meilleure TMC 2026 — Comparatif Travel Management Company",
    metaDescription:
      "Comparez les meilleures TMC en France : Navan, TravelPerk, SAP Concur. Tarifs, fonctionnalités, avis clients. Guide complet pour choisir votre TMC.",
    keywords: [
      "TMC",
      "travel management company",
      "gestion voyage entreprise",
      "agence voyage entreprise",
    ],
    intro:
      "Les Travel Management Companies (TMC) centralisent la réservation, le suivi et l'optimisation des voyages d'affaires. Elles permettent aux entreprises de réduire leurs coûts de déplacement de 15 à 30 % tout en simplifiant la gestion administrative.",
    useCases: [
      "Centraliser les réservations train, avion, hôtel",
      "Appliquer la politique voyage de l'entreprise",
      "Négocier des tarifs corporate",
      "Suivre les dépenses en temps réel",
    ],
    targetAudience: "PME et ETI avec plus de 50 déplacements par an",
    priceRange: "5 € – 25 € / réservation",
  },
  {
    slug: "self-booking-tool",
    name: "Self-Booking Tool (SBT)",
    shortName: "Self-Booking Tool",
    description:
      "Les outils de self-booking permettent aux collaborateurs de réserver eux-mêmes leurs déplacements tout en respectant la politique voyage de l'entreprise.",
    icon: "Monitor",
    metaTitle: "Meilleur Self-Booking Tool 2026 — Comparatif SBT entreprise",
    metaDescription:
      "Comparez les meilleurs outils de self-booking pour entreprise. Navan, TravelPerk : fonctionnalités, prix, intégrations. Guide complet SBT 2026.",
    keywords: [
      "self-booking tool",
      "SBT",
      "réservation voyage entreprise",
      "outil réservation déplacement",
    ],
    intro:
      "Les Self-Booking Tools (SBT) offrent aux collaborateurs une autonomie encadrée pour réserver leurs déplacements. L'entreprise garde le contrôle via des règles de politique voyage intégrées, tout en réduisant la charge du service travel.",
    useCases: [
      "Donner de l'autonomie aux collaborateurs",
      "Appliquer automatiquement la politique voyage",
      "Réduire le temps de traitement des réservations",
      "Comparer les offres en temps réel",
    ],
    targetAudience: "Entreprises de 20 à 500 salariés",
    priceRange: "0 € – 15 € / utilisateur / mois",
  },
  {
    slug: "carte-corporate",
    name: "Carte Corporate & Paiement",
    shortName: "Carte Corporate",
    description:
      "Les cartes corporate nouvelle génération offrent des plafonds personnalisés, une catégorisation automatique des dépenses et une visibilité en temps réel sur les frais professionnels.",
    icon: "CreditCard",
    metaTitle: "Meilleure Carte Corporate 2026 — Comparatif Cartes Entreprise",
    metaDescription:
      "Comparez les meilleures cartes corporate : Mooncard, Spendesk. Plafonds, cashback, intégration comptable. Guide complet cartes entreprise 2026.",
    keywords: [
      "carte corporate",
      "carte entreprise",
      "carte bancaire professionnelle",
      "carte paiement entreprise",
    ],
    intro:
      "Les cartes corporate nouvelle génération remplacent les notes de frais manuelles par un suivi automatisé des dépenses. Chaque transaction est catégorisée, les justificatifs sont dématérialisés et les managers valident en un clic.",
    useCases: [
      "Éliminer les avances de frais",
      "Catégoriser automatiquement les dépenses",
      "Définir des plafonds par collaborateur",
      "Récupérer la TVA automatiquement",
    ],
    targetAudience: "TPE, PME et ETI",
    priceRange: "0 € – 9 € / carte / mois",
  },
  {
    slug: "notes-de-frais",
    name: "Gestion des Notes de Frais",
    shortName: "Notes de Frais",
    description:
      "Les solutions de gestion des notes de frais automatisent la collecte, la validation et le remboursement des dépenses professionnelles.",
    icon: "Receipt",
    metaTitle: "Meilleur Logiciel Notes de Frais 2026 — Comparatif & Avis",
    metaDescription:
      "Comparez les meilleurs logiciels de notes de frais : SAP Concur, Expensya. OCR, validation automatique, export comptable. Guide complet 2026.",
    keywords: [
      "notes de frais",
      "logiciel notes de frais",
      "gestion frais professionnels",
      "remboursement frais",
    ],
    intro:
      "Les logiciels de gestion des notes de frais automatisent tout le cycle : scan OCR du justificatif, contrôle de conformité, validation manager et export comptable. Résultat : jusqu'à 80 % de temps gagné et zéro ressaisie.",
    useCases: [
      "Scanner les justificatifs par OCR",
      "Automatiser les contrôles de conformité",
      "Accélérer les remboursements",
      "Exporter vers le logiciel comptable",
    ],
    targetAudience: "Toutes tailles d'entreprise",
    priceRange: "4 € – 12 € / utilisateur / mois",
  },
];

const categoriesBySlug = new Map(categories.map((c) => [c.slug, c]));

export function getCategoryBySlug(slug: string): Categorie | undefined {
  return categoriesBySlug.get(slug);
}
