export interface Solution {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  categories: string[];
  rating: number;
  reviewCount: number;
  priceRange: string;
  pricingModel: string;
  targetSize: string;
  foundedYear: number;
  headquarters: string;
  website: string;
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  integrations: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "navan",
    name: "Navan",
    logo: "/logos/navan.png",
    tagline: "TMC tout-en-un : voyages, notes de frais, cartes corporate",
    description:
      "Navan (ex-TripActions) est une plateforme de gestion des voyages et dépenses d'entreprise qui combine TMC, self-booking et carte corporate. Utilisée par plus de 10 000 entreprises dans le monde, elle propose une expérience utilisateur proche du grand public avec un inventaire exhaustif (trains, vols, hôtels, voitures).",
    categories: ["tmc", "self-booking-tool"],
    rating: 4.6,
    reviewCount: 1240,
    priceRange: "Sur devis",
    pricingModel: "Par réservation + abonnement plateforme",
    targetSize: "PME, ETI, Grands comptes (50+ voyageurs)",
    foundedYear: 2015,
    headquarters: "Palo Alto, USA (bureaux Paris)",
    website: "https://navan.com",
    affiliateUrl: "https://navan.com",
    features: [
      "Réservation train, avion, hôtel, voiture",
      "Politique voyage intégrée",
      "Carte corporate Navan",
      "Gestion des notes de frais",
      "Reporting temps réel",
      "Application mobile",
      "Assistance 24/7",
      "Programme de fidélité voyageur",
    ],
    pros: [
      "Interface moderne et intuitive",
      "Inventaire très large (GDS + NDC + contenu direct)",
      "Carte corporate intégrée",
      "Support réactif 24/7",
      "Programme de récompenses pour les voyageurs économes",
    ],
    cons: [
      "Tarification opaque, sur devis uniquement",
      "Mieux adapté aux entreprises de 50+ voyageurs",
      "Certaines fonctionnalités avancées en supplément",
    ],
    integrations: [
      "SAP",
      "Oracle",
      "NetSuite",
      "Slack",
      "Microsoft Teams",
      "BambooHR",
      "Workday",
    ],
    metaTitle: "Avis Navan 2026 — Prix & Alternatives",
    metaDescription:
      "Avis complet sur Navan (ex-TripActions) : tarifs, fonctionnalités, avantages et inconvénients. Comparatif avec TravelPerk et SAP Concur.",
    faq: [
      {
        question: "Quel est le prix de Navan ?",
        answer:
          "Navan fonctionne sur devis personnalisé. Le tarif dépend du nombre de voyageurs, du volume de réservations et des modules choisis (TMC, carte, notes de frais). Comptez en moyenne 10-20 € par réservation.",
      },
      {
        question: "Navan est-il adapté aux PME ?",
        answer:
          "Oui, Navan propose une offre pour les PME à partir de 50 voyageurs. Pour les plus petites structures, TravelPerk peut être une alternative plus accessible.",
      },
      {
        question: "Navan propose-t-il une carte corporate ?",
        answer:
          "Oui, Navan intègre sa propre carte corporate avec plafonds configurables, catégorisation automatique des dépenses et réconciliation en temps réel.",
      },
    ],
  },
  {
    slug: "travelperk",
    name: "TravelPerk",
    logo: "/logos/travelperk.png",
    tagline: "Plateforme de voyage d'affaires flexible et transparente",
    description:
      "TravelPerk est une plateforme de gestion des voyages d'affaires basée à Barcelone. Elle se distingue par sa tarification transparente, son programme FlexiPerk (annulation gratuite) et le plus grand inventaire de voyages au monde. Idéale pour les PME et ETI européennes.",
    categories: ["tmc", "self-booking-tool"],
    rating: 4.5,
    reviewCount: 980,
    priceRange: "À partir de 0 € (offre gratuite)",
    pricingModel: "Freemium + plans payants par utilisateur",
    targetSize: "TPE, PME, ETI (à partir de 10 voyageurs)",
    foundedYear: 2015,
    headquarters: "Barcelone, Espagne (bureaux Paris)",
    website: "https://travelperk.com",
    affiliateUrl: "https://travelperk.com",
    features: [
      "Réservation train, avion, hôtel, voiture",
      "FlexiPerk — annulation flexible",
      "GreenPerk — compensation carbone",
      "Politique voyage configurable",
      "Reporting et analytics",
      "Application mobile",
      "Intégrations comptables",
      "API ouverte",
    ],
    pros: [
      "Tarification transparente avec offre gratuite",
      "FlexiPerk : annulation jusqu'à 2h avant le départ",
      "GreenPerk : compensation carbone intégrée",
      "Interface très intuitive",
      "Plus grand inventaire mondial",
    ],
    cons: [
      "Pas de carte corporate intégrée",
      "Support premium payant",
      "Gestion des notes de frais limitée (partenariats)",
    ],
    integrations: [
      "Xero",
      "QuickBooks",
      "Sage",
      "Slack",
      "BambooHR",
      "Personio",
      "Expensify",
    ],
    metaTitle: "Avis TravelPerk 2026 — Prix & Avis",
    metaDescription:
      "Avis complet sur TravelPerk : tarifs transparents, FlexiPerk, GreenPerk. Comparatif avec Navan et SAP Concur. Guide 2026.",
    faq: [
      {
        question: "TravelPerk est-il gratuit ?",
        answer:
          "Oui, TravelPerk propose une offre gratuite pour les petites équipes avec accès à l'inventaire complet. Les plans payants (à partir de 99 €/mois) ajoutent la politique voyage, le reporting avancé et FlexiPerk.",
      },
      {
        question: "Qu'est-ce que FlexiPerk ?",
        answer:
          "FlexiPerk est un programme d'annulation flexible qui permet d'annuler n'importe quelle réservation jusqu'à 2 heures avant le départ avec un remboursement minimum de 80 %.",
      },
      {
        question: "TravelPerk fonctionne-t-il en France ?",
        answer:
          "Oui, TravelPerk a un bureau à Paris et propose l'inventaire SNCF complet, ainsi que tous les vols, hôtels et locations de voiture en France et dans le monde.",
      },
    ],
  },
  {
    slug: "mooncard",
    name: "Mooncard",
    logo: "/logos/mooncard.png",
    tagline: "Carte corporate et gestion automatisée des dépenses",
    description:
      "Mooncard est une solution française de carte corporate qui automatise la gestion des dépenses professionnelles. Chaque paiement est automatiquement catégorisé, le justificatif est dématérialisé et la TVA est récupérée. Solution 100 % française, conforme RGPD.",
    categories: ["carte-corporate", "notes-de-frais"],
    rating: 4.4,
    reviewCount: 650,
    priceRange: "À partir de 4 €/carte/mois",
    pricingModel: "Par carte active par mois",
    targetSize: "TPE, PME, ETI",
    foundedYear: 2016,
    headquarters: "Paris, France",
    website: "https://mooncard.co",
    affiliateUrl: "https://mooncard.co",
    features: [
      "Carte Visa corporate physique et virtuelle",
      "Catégorisation automatique des dépenses",
      "OCR et dématérialisation des justificatifs",
      "Récupération automatique de la TVA",
      "Plafonds et règles par collaborateur",
      "Export comptable automatique",
      "Application mobile",
      "Tableau de bord en temps réel",
    ],
    pros: [
      "Solution 100 % française, conforme RGPD",
      "Supprime les avances de frais et notes de frais",
      "Récupération automatique de la TVA",
      "Intégration comptable native",
      "Bon rapport qualité-prix",
    ],
    cons: [
      "Pas de module voyage intégré",
      "Fonctionnalités de reporting moins avancées que les TMC",
      "Pas de programme de fidélité",
    ],
    integrations: [
      "Sage",
      "Cegid",
      "QuickBooks",
      "Xero",
      "Silae",
      "ACD",
      "Pennylane",
    ],
    metaTitle: "Avis Mooncard 2026 — Prix & Avis",
    metaDescription:
      "Avis complet sur Mooncard : carte corporate française, tarifs, OCR, récupération TVA. Comparatif avec Spendesk. Guide 2026.",
    faq: [
      {
        question: "Combien coûte Mooncard ?",
        answer:
          "Mooncard propose des plans à partir de 4 €/carte/mois. Le tarif varie selon le nombre de cartes, les fonctionnalités choisies et le volume de transactions.",
      },
      {
        question: "Mooncard est-il adapté aux TPE ?",
        answer:
          "Oui, Mooncard propose une offre adaptée aux TPE dès 1 carte. L'absence de frais cachés et la simplicité d'utilisation en font une solution accessible pour les petites structures.",
      },
      {
        question: "Comment fonctionne la récupération de TVA ?",
        answer:
          "Mooncard identifie automatiquement la TVA sur chaque transaction grâce à la catégorisation automatique et à l'OCR des justificatifs. Les montants sont exportés directement vers votre logiciel comptable.",
      },
    ],
  },
  {
    slug: "spendesk",
    name: "Spendesk",
    logo: "/logos/spendesk.png",
    tagline: "Plateforme de gestion des dépenses entreprise tout-en-un",
    description:
      "Spendesk est une plateforme française de gestion des dépenses qui combine cartes corporate, validation des achats, notes de frais et pré-comptabilité. Utilisée par plus de 4 000 entreprises en Europe, elle s'adresse aux PME et ETI qui souhaitent centraliser et contrôler leurs dépenses.",
    categories: ["carte-corporate", "notes-de-frais"],
    rating: 4.5,
    reviewCount: 870,
    priceRange: "Sur devis",
    pricingModel: "Par utilisateur par mois",
    targetSize: "PME et ETI (20-1000 salariés)",
    foundedYear: 2016,
    headquarters: "Paris, France",
    website: "https://spendesk.com",
    affiliateUrl: "https://spendesk.com",
    features: [
      "Cartes virtuelles et physiques",
      "Workflow de validation des achats",
      "Gestion des notes de frais",
      "Gestion des factures fournisseurs",
      "Pré-comptabilité automatisée",
      "Budgets par équipe",
      "Application mobile",
      "Reporting avancé",
    ],
    pros: [
      "Périmètre fonctionnel très large (cartes + factures + NDF)",
      "Workflow de validation personnalisable",
      "Pré-comptabilité intégrée",
      "Interface moderne et intuitive",
      "Support client en français",
    ],
    cons: [
      "Tarification sur devis uniquement",
      "Moins adapté aux TPE (< 20 salariés)",
      "Pas de module voyage intégré",
    ],
    integrations: [
      "Sage",
      "Cegid",
      "NetSuite",
      "Xero",
      "QuickBooks",
      "Datev",
      "Slack",
    ],
    metaTitle: "Avis Spendesk 2026 — Prix & Avis",
    metaDescription:
      "Avis complet sur Spendesk : cartes corporate, gestion des dépenses, pré-comptabilité. Comparatif avec Mooncard. Guide 2026.",
    faq: [
      {
        question: "Quel est le prix de Spendesk ?",
        answer:
          "Spendesk fonctionne sur devis personnalisé. Le tarif dépend du nombre d'utilisateurs et des modules choisis. Comptez en moyenne 8-15 €/utilisateur/mois.",
      },
      {
        question: "Spendesk est-il adapté aux PME ?",
        answer:
          "Oui, Spendesk cible principalement les PME et ETI de 20 à 1 000 salariés. La plateforme est conçue pour centraliser toutes les dépenses d'entreprise en un seul endroit.",
      },
      {
        question: "Quelle est la différence entre Spendesk et Mooncard ?",
        answer:
          "Spendesk offre un périmètre plus large (cartes + factures fournisseurs + workflow d'achat) tandis que Mooncard se concentre sur la carte corporate et l'automatisation comptable. Mooncard est plus accessible en prix, Spendesk plus complet.",
      },
    ],
  },
  {
    slug: "sap-concur",
    name: "SAP Concur",
    logo: "/logos/sap-concur.png",
    tagline: "Leader mondial de la gestion des voyages et frais professionnels",
    description:
      "SAP Concur est le leader mondial de la gestion intégrée des voyages et des frais professionnels. Utilisé par plus de 46 000 entreprises, il offre une suite complète : Concur Travel (réservation), Concur Expense (notes de frais) et Concur Invoice (factures). Solution de référence pour les grandes entreprises.",
    categories: ["tmc", "notes-de-frais"],
    rating: 4.1,
    reviewCount: 2100,
    priceRange: "À partir de 8 €/utilisateur/mois",
    pricingModel: "Par utilisateur par mois + modules",
    targetSize: "ETI et Grands comptes (200+ salariés)",
    foundedYear: 1993,
    headquarters: "Bellevue, USA (filiale SAP)",
    website: "https://concur.com",
    affiliateUrl: "https://concur.com",
    features: [
      "Concur Travel — réservation de voyages",
      "Concur Expense — gestion des notes de frais",
      "Concur Invoice — gestion des factures",
      "OCR et scanning des justificatifs",
      "Politique voyage configurable",
      "Reporting et analytics avancés",
      "Intégration ERP (SAP, Oracle)",
      "Conformité et audit trail",
    ],
    pros: [
      "Suite la plus complète du marché",
      "Intégration native avec SAP et les ERP",
      "Couverture mondiale (190 pays)",
      "Conformité et audit trail robustes",
      "Réseau de fournisseurs très large",
    ],
    cons: [
      "Interface vieillissante par rapport aux néo-TMC",
      "Mise en place complexe (3-6 mois)",
      "Coût élevé pour les PME",
      "Support client parfois lent",
    ],
    integrations: [
      "SAP S/4HANA",
      "Oracle",
      "Microsoft Dynamics",
      "Workday",
      "Salesforce",
      "ServiceNow",
    ],
    metaTitle: "Avis SAP Concur 2026 — Prix & Avis",
    metaDescription:
      "Avis complet sur SAP Concur : Travel, Expense, Invoice. Tarifs, déploiement, avantages et inconvénients. Comparatif avec Expensya et Navan.",
    faq: [
      {
        question: "Quel est le prix de SAP Concur ?",
        answer:
          "SAP Concur propose des plans à partir de 8 €/utilisateur/mois pour Concur Expense. Concur Travel et Invoice sont facturés séparément. Les tarifs varient selon le nombre d'utilisateurs et les modules choisis.",
      },
      {
        question: "SAP Concur est-il adapté aux PME ?",
        answer:
          "SAP Concur propose une offre PME (Concur Standard), mais le rapport coût/complexité est souvent moins favorable que des solutions comme Expensya ou Mooncard pour les entreprises de moins de 200 salariés.",
      },
      {
        question: "Combien de temps prend le déploiement de SAP Concur ?",
        answer:
          "Le déploiement de SAP Concur prend en moyenne 3 à 6 mois pour une ETI, en fonction de la complexité de l'intégration ERP et du nombre de modules choisis.",
      },
    ],
  },
  {
    slug: "expensya",
    name: "Expensya",
    logo: "/logos/expensya.png",
    tagline: "Gestion des notes de frais simple et intelligente",
    description:
      "Expensya est une solution franco-tunisienne de gestion des notes de frais qui mise sur la simplicité et l'intelligence artificielle. Son OCR avancé reconnaît automatiquement les justificatifs, et ses règles de politique de dépenses automatisent les contrôles de conformité. Solution accessible dès 4,99 €/mois.",
    categories: ["notes-de-frais"],
    rating: 4.3,
    reviewCount: 520,
    priceRange: "À partir de 4,99 €/utilisateur/mois",
    pricingModel: "Par utilisateur par mois",
    targetSize: "TPE, PME, ETI",
    foundedYear: 2014,
    headquarters: "Paris, France / Tunis, Tunisie",
    website: "https://expensya.com",
    affiliateUrl: "https://expensya.com",
    features: [
      "OCR intelligent (justificatifs)",
      "Politique de dépenses configurable",
      "Workflow de validation",
      "Indemnités kilométriques automatiques",
      "Export comptable multi-format",
      "Gestion multi-devises",
      "Application mobile",
      "Carte Expensya (option)",
    ],
    pros: [
      "OCR très performant",
      "Tarif accessible dès 4,99 €/mois",
      "Calcul automatique des indemnités kilométriques",
      "Interface simple et rapide à prendre en main",
      "Support en français réactif",
    ],
    cons: [
      "Périmètre limité aux notes de frais (pas de carte intégrée de base)",
      "Reporting moins avancé que SAP Concur",
      "Intégrations ERP limitées par rapport à Concur",
    ],
    integrations: [
      "Sage",
      "Cegid",
      "QuickBooks",
      "Xero",
      "Silae",
      "Pennylane",
      "Dynamics 365",
    ],
    metaTitle: "Avis Expensya 2026 — Prix & Avis",
    metaDescription:
      "Avis complet sur Expensya : OCR intelligent, indemnités kilométriques, tarifs. Comparatif avec SAP Concur. Guide notes de frais 2026.",
    faq: [
      {
        question: "Combien coûte Expensya ?",
        answer:
          "Expensya propose des plans à partir de 4,99 €/utilisateur/mois (plan Starter). Les plans Professional et Enterprise ajoutent des fonctionnalités avancées (workflow multi-niveaux, intégrations ERP, carte).",
      },
      {
        question: "Expensya gère-t-il les indemnités kilométriques ?",
        answer:
          "Oui, Expensya calcule automatiquement les indemnités kilométriques selon le barème fiscal en vigueur (2026). Il suffit de renseigner le trajet, Expensya applique le bon taux.",
      },
      {
        question: "Quelle est la différence entre Expensya et SAP Concur ?",
        answer:
          "Expensya est plus simple, plus rapide à déployer et plus accessible en prix. SAP Concur offre un périmètre plus large (voyages + factures + notes de frais) et une meilleure intégration avec les ERP SAP.",
      },
    ],
  },
];

const solutionsBySlug = new Map(solutions.map((s) => [s.slug, s]));

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutionsBySlug.get(slug);
}

export function getSolutionsByCategory(categorySlug: string): Solution[] {
  return solutions.filter((s) => s.categories.includes(categorySlug));
}

export function getSolutionCountByCategory(categorySlug: string): number {
  return solutions.filter((s) => s.categories.includes(categorySlug)).length;
}
