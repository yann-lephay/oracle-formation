export interface Solution {
  slug: string;
  name: string;
  logo?: string;
  tagline: string;
  description: string;
  categories: string[];
  priceRange: string;
  pricingModel: string;
  targetSize: string;
  foundedYear?: number;
  headquarters?: string;
  website: string;
  affiliateUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  integrations?: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
  verdict?: string;
  sources?: { label: string; url: string; date: string }[];
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
    name: "Perk (ex-TravelPerk)",
    tagline: "Voyage et dépenses réunis dans une même plateforme",
    description:
      "TravelPerk est devenu Perk en novembre 2025. L'offre réunit désormais la réservation de voyages et la gestion des dépenses. Cette fiche conserve l'ancien nom dans son URL pour répondre aux recherches historiques, mais juge le produit et son périmètre actuel.",
    categories: ["tmc", "self-booking-tool"],
    priceRange: "Tarif à vérifier selon le périmètre",
    pricingModel: "Voyage et dépenses, selon l'offre retenue",
    targetSize: "Équipes qui veulent relier voyage et dépenses",
    website: "https://www.perk.com/fr/",
    affiliateUrl: "https://www.perk.com/fr/",
    features: [
      "Réservation train, avion, hôtel, voiture",
      "Règles de politique voyage",
      "Gestion des dépenses et factures",
      "Cartes et paiements professionnels",
      "Reporting voyage et dépenses",
    ],
    pros: [
      "Parcours voyage et dépenses dans une même offre",
      "Choix cohérent si les deux périmètres doivent partager règles et données",
      "Ancien nom TravelPerk encore identifiable pour les équipes en migration",
    ],
    cons: [
      "Périmètre exact, assistance et conditions de modification à vérifier au devis",
      "Surdimensionné si le besoin se limite à quelques réservations simples",
      "Le changement de marque ne prouve pas à lui seul la qualité des intégrations existantes",
    ],
    metaTitle: "Perk (ex-TravelPerk) : analyse 2026",
    metaDescription:
      "TravelPerk est devenu Perk. Analyse du nouveau périmètre voyage et dépenses, du bon cas d'usage et des points à vérifier au devis.",
    faq: [
      {
        question: "TravelPerk s'appelle-t-il toujours TravelPerk ?",
        answer:
          "Non. TravelPerk a annoncé son passage à la marque Perk en novembre 2025. L'ancien nom reste utile pour retrouver le produit et comprendre les migrations en cours.",
      },
      {
        question: "Quel est le périmètre actuel de Perk ?",
        answer:
          "Perk présente aujourd'hui une plateforme qui réunit voyage et dépenses. Il faut néanmoins faire préciser au devis les modules, l'assistance et les conditions de modification incluses.",
      },
      {
        question: "Perk est-il le meilleur choix pour toutes les PME ?",
        answer:
          "Non. Perk a du sens si voyage et dépenses doivent fonctionner ensemble. Pour quelques réservations simples, un outil plus léger ou un cadre de réservation directe peut suffire.",
      },
    ],
    verdict:
      "Perk gagne quand voyage et dépenses doivent partager règles, paiements et reporting. Pour une petite équipe qui réserve peu, ce périmètre peut ajouter plus de processus que de valeur.",
    sources: [
      { label: "Perk — TravelPerk devient Perk", url: "https://www.perk.com/fr/press-release/travelperk-devient-perk-la-plateforme-intelligente-qui-propulse-le-vrai-travail/", date: "30 août 2026" },
      { label: "Perk — présentation de la plateforme", url: "https://www.perk.com/welcome-perk/", date: "30 août 2026" },
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
    name: "Medius Expense (ex-Expensya)",
    tagline: "Gestion des notes de frais désormais portée par Medius",
    description:
      "Expensya devient Medius Expense. L'éditeur précise que le produit ne change pas du seul fait de cette transition de marque. Cette fiche conserve l'ancien nom dans son URL, mais évalue le produit actuel et les conditions de migration à vérifier.",
    categories: ["notes-de-frais"],
    priceRange: "Tarif à vérifier auprès de Medius",
    pricingModel: "Abonnement selon utilisateurs et périmètre",
    targetSize: "Équipes qui veulent encadrer et contrôler les dépenses",
    website: "https://www.medius.com/solutions/expense/",
    affiliateUrl: "https://www.medius.com/solutions/expense/",
    features: [
      "Capture et traitement des dépenses",
      "Règles de politique de dépenses",
      "Circuit de validation",
      "Remboursement et visibilité sur les dépenses",
    ],
    pros: [
      "Périmètre centré sur la dépense collaborateur",
      "Continuité annoncée du produit pendant le changement de marque",
      "À retenir si la gestion des dépenses prime sur la réservation voyage",
    ],
    cons: [
      "Prix, modules et accompagnement à confirmer au devis",
      "La transition d'application doit être préparée par les clients existants",
      "Ce n'est pas un substitut automatique à une suite voyage complète",
    ],
    metaTitle: "Medius Expense (ex-Expensya) : analyse 2026",
    metaDescription:
      "Expensya devient Medius Expense. Analyse du périmètre actuel, de la transition et des points à vérifier avant de choisir.",
    faq: [
      {
        question: "Expensya est-il devenu Medius Expense ?",
        answer:
          "Oui. L'éditeur annonce le passage de la marque Expensya à Medius Expense et précise que les fonctionnalités du produit ne changent pas du seul fait de cette transition.",
      },
      {
        question: "Quel est le prix de Medius Expense ?",
        answer:
          "Le tarif doit être vérifié auprès de Medius selon le nombre d'utilisateurs, les modules et l'accompagnement retenus. Cette fiche ne reprend pas l'ancien prix Expensya comme un prix actuel.",
      },
      {
        question: "Quand choisir Medius Expense plutôt qu'une suite voyage ?",
        answer:
          "Medius Expense est à examiner quand le besoin principal est d'encadrer, traiter et rembourser les dépenses. Une suite voyage reste plus cohérente si la réservation et l'assistance sont le cœur du besoin.",
      },
    ],
    verdict:
      "Medius Expense gagne pour un besoin centré sur la dépense collaborateur. Il perd face à une suite voyage intégrée quand réservation, assistance et dépense doivent former un seul parcours.",
    sources: [
      { label: "Medius — Expensya devient Medius Expense", url: "https://help.expensya.com/l/en/article/yfn65x0xoj-expensya-is-becoming-medius-expense", date: "30 août 2026" },
      { label: "Medius — solution Expense", url: "https://www.medius.com/solutions/expense/", date: "30 août 2026" },
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
