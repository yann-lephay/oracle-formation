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
  evidenceSafe?: boolean;
  decisionCriteria?: string[];
  counterCase?: string;
  sources?: { label: string; url: string; date: string }[];
}

export const categories: Categorie[] = [
  {
    slug: "tmc",
    name: "Travel Management Company (TMC)",
    shortName: "TMC",
    description:
      "Une TMC organise la réservation et l'assistance ; un self-booking tool donne de l'autonomie dans un cadre ; une plateforme intégrée rapproche voyage et dépense. Le bon choix dépend du service attendu, pas d'un pourcentage d'économies générique.",
    icon: "Globe",
    metaTitle: "TMC, SBT ou plateforme intégrée : choisir en 2026",
    metaDescription:
      "Distinguez TMC, self-booking tool et plateforme intégrée. Comparez assistance, inventaire, modifications, reporting et coût complet.",
    keywords: [
      "TMC",
      "travel management company",
      "gestion voyage entreprise",
      "agence voyage entreprise",
    ],
    intro:
      "Une TMC gagne quand les voyages sont fréquents, complexes ou exposés aux changements et que l'assistance humaine compte. Un self-booking tool gagne quand les collaborateurs réservent des trajets simples dans une politique claire. Une plateforme intégrée gagne si la réservation doit alimenter paiement, justificatifs et reporting — à condition que ce parcours soit démontré sur l'offre vendue.",
    useCases: [
      "Centraliser les réservations train, avion, hôtel",
      "Appliquer la politique voyage de l'entreprise",
      "Gérer les modifications, annulations et urgences hors horaires",
      "Comparer le coût complet et la restitution des données",
    ],
    targetAudience: "Équipes dont le volume, les changements ou le besoin d'assistance justifient un service géré",
    priceRange: "Devis à comparer sur un périmètre commun",
    evidenceSafe: true,
    decisionCriteria: [
      "Frais de réservation, abonnement, assistance et options incluses dans le même devis",
      "Inventaire réellement accessible sur les trajets utilisés par l'entreprise",
      "Traitement des modifications, annulations, urgences et voyageurs hors horaires",
      "Données exportables, intégrations démontrées et conditions de sortie",
    ],
    counterCase:
      "Une petite équipe qui réserve peu de trajets simples peut préférer un outil léger ou une réservation directe encadrée : une TMC complète ajouterait du coût et du processus sans service décisif.",
    sources: [
      { label: "SAP Concur — Concur Travel", url: "https://www.concur.fr/products/concur-travel", date: "30 août 2026" },
      { label: "Perk — passage de TravelPerk à Perk", url: "https://www.perk.com/press-release/travelperk-rebrands-to-perk-the-intelligent-platform-powering-real-work/", date: "30 août 2026" },
    ],
  },
  {
    slug: "self-booking-tool",
    name: "Self-Booking Tool (SBT)",
    shortName: "Self-Booking Tool",
    description:
      "Les outils de self-booking permettent aux collaborateurs de réserver eux-mêmes leurs déplacements tout en respectant la politique voyage de l'entreprise.",
    icon: "Monitor",
    metaTitle: "Meilleur Self-Booking Tool 2026",
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
      "Carte nominative, carte logée, carte virtuelle et plateforme de spend management ne répondent pas au même besoin. Le paiement peut être mieux encadré et documenté ; il ne rend pas la TVA déductible par lui-même.",
    icon: "CreditCard",
    metaTitle: "Carte corporate : choisir le bon périmètre en 2026",
    metaDescription:
      "Comparez carte nominative, logée, virtuelle et spend management. Vérifiez règles, justificatifs, export comptable et coût complet.",
    keywords: [
      "carte corporate",
      "carte entreprise",
      "carte bancaire professionnelle",
      "carte paiement entreprise",
    ],
    intro:
      "Une carte nominative gagne pour les dépenses récurrentes d'un collaborateur ; une carte virtuelle pour un achat, un projet ou un abonnement isolé ; une carte logée pour centraliser un type de dépense ; une plateforme de spend management si l'entreprise a aussi besoin de demandes, budgets, justificatifs et exports. L'outil peut extraire et préparer la TVA, mais l'entreprise reste responsable de vérifier le justificatif et le droit à déduction.",
    useCases: [
      "Éliminer les avances de frais",
      "Catégoriser automatiquement les dépenses",
      "Définir des plafonds par collaborateur",
      "Préparer les données de TVA sans décider de leur déductibilité",
    ],
    targetAudience: "TPE, PME et ETI",
    priceRange: "Tarif à comparer selon cartes, utilisateurs et modules",
    evidenceSafe: true,
    decisionCriteria: [
      "Type de carte, porteur, plafond, restrictions et responsabilité en cas d'usage anormal",
      "Collecte du justificatif et contrôle des informations avant export comptable",
      "Frais de carte, utilisateurs, change, retraits, options et accompagnement",
      "Workflow de demande, validation, suspension et clôture réellement nécessaire",
    ],
    counterCase:
      "Une entreprise qui cherche seulement un moyen de paiement n'a pas forcément besoin d'une plateforme complète ; inversement, une carte seule ne remplace pas un processus d'achat ou de validation.",
    sources: [
      { label: "Impots.gouv.fr — conditions de déduction de la TVA", url: "https://www.impots.gouv.fr/professionnel/questions/comment-deduire-la-tva-sur-mes-achats", date: "30 août 2026" },
      { label: "Spendesk — cartes d'entreprise", url: "https://www.spendesk.com/fr/product/cards/", date: "30 août 2026" },
    ],
  },
  {
    slug: "notes-de-frais",
    name: "Gestion des Notes de Frais",
    shortName: "Notes de Frais",
    description:
      "Les solutions de gestion des notes de frais automatisent la collecte, la validation et le remboursement des dépenses professionnelles.",
    icon: "Receipt",
    metaTitle: "Logiciel Notes de Frais 2026",
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
