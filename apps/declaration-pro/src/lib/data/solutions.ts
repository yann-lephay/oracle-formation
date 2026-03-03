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
    slug: "sage",
    name: "Sage",
    logo: "/logos/sage.png",
    tagline: "Suite comptable et paie de référence pour les PME françaises",
    description:
      "Sage est le leader français des logiciels de gestion comptable et de paie. Avec Sage 50, Sage 100 et Sage Business Cloud, l'éditeur couvre l'ensemble des besoins déclaratifs des entreprises : DSN, TVA, liasse fiscale, URSSAF. Utilisé par plus de 600 000 entreprises en France, Sage est la référence pour les PME et ETI qui cherchent un outil robuste et conforme à la réglementation française.",
    categories: ["dsn", "tva", "liasse-fiscale", "urssaf", "bilan-comptable"],
    rating: 4.3,
    reviewCount: 2450,
    priceRange: "À partir de 25 €/mois",
    pricingModel: "Abonnement mensuel par module",
    targetSize: "TPE, PME, ETI (1-500 salariés)",
    foundedYear: 1981,
    headquarters: "Paris, France",
    website: "https://sage.com/fr",
    affiliateUrl: "https://sage.com/fr",
    features: [
      "Comptabilité générale et analytique",
      "Paie et DSN automatique",
      "Déclaration de TVA (CA3/CA12)",
      "Liasse fiscale et EDI-TDFC",
      "Bilan et compte de résultat",
      "Export FEC",
      "Multi-sociétés",
      "Collaboration expert-comptable",
    ],
    pros: [
      "Leader français — référence du marché",
      "Couverture fonctionnelle exhaustive",
      "Conformité réglementaire garantie (mises à jour automatiques)",
      "Large réseau d'intégrateurs et de formateurs",
      "Intégrations natives avec les banques françaises",
    ],
    cons: [
      "Interface parfois datée sur Sage 100",
      "Courbe d'apprentissage importante",
      "Coût élevé pour les plus petites structures",
      "Support client inégal selon les formules",
    ],
    integrations: [
      "Banques françaises",
      "URSSAF",
      "Net-Entreprises",
      "impots.gouv.fr",
      "Silae",
      "PayFit",
      "Dext",
      "Stripe",
    ],
    metaTitle: "Avis Sage 2026 — Prix, Fonctionnalités, Déclarations",
    metaDescription:
      "Avis complet sur Sage : comptabilité, paie, DSN, TVA, liasse fiscale. Tarifs, avantages et inconvénients. Comparatif avec Cegid et Pennylane.",
    faq: [
      {
        question: "Quel est le prix de Sage Comptabilité ?",
        answer:
          "Sage propose plusieurs gammes : Sage Business Cloud Compta à partir de 25 €/mois pour les TPE, Sage 50 à partir de 40 €/mois pour les PME, et Sage 100 à partir de 90 €/mois pour les ETI. Les modules paie et DSN sont facturés séparément.",
      },
      {
        question: "Sage gère-t-il la DSN ?",
        answer:
          "Oui, Sage génère automatiquement la DSN mensuelle à partir des données de paie. Le module effectue les contrôles de cohérence et assure la télétransmission vers Net-Entreprises. Les signalements d'événements (arrêt maladie, fin de contrat) sont également gérés.",
      },
      {
        question: "Sage est-il adapté aux auto-entrepreneurs ?",
        answer:
          "Non, Sage cible principalement les TPE, PME et ETI. Pour les auto-entrepreneurs, des solutions comme Indy ou Pennylane sont plus adaptées et plus abordables.",
      },
    ],
  },
  {
    slug: "cegid",
    name: "Cegid",
    logo: "/logos/cegid.png",
    tagline: "ERP comptable cloud pour cabinets et entreprises",
    description:
      "Cegid est un éditeur français de solutions de gestion cloud spécialisé dans la comptabilité, la fiscalité et le conseil. Cegid Loop, sa plateforme cloud, offre une suite complète pour les cabinets d'expertise comptable et les entreprises : saisie automatisée, déclarations fiscales et sociales, liasse fiscale et collaboration en temps réel. Utilisé par plus de 75 000 cabinets et entreprises.",
    categories: ["dsn", "tva", "liasse-fiscale", "bilan-comptable"],
    rating: 4.2,
    reviewCount: 1680,
    priceRange: "À partir de 35 €/mois",
    pricingModel: "Abonnement mensuel par utilisateur",
    targetSize: "Cabinets comptables, PME, ETI",
    foundedYear: 1983,
    headquarters: "Lyon, France",
    website: "https://cegid.com",
    affiliateUrl: "https://cegid.com",
    features: [
      "Comptabilité cloud (Cegid Loop)",
      "Saisie automatisée par IA",
      "Déclaration TVA et télétransmission",
      "Liasse fiscale EDI-TDFC",
      "DSN et paie intégrées",
      "Révision collaborative",
      "Tableaux de bord et reporting",
      "Multi-dossiers et multi-cabinets",
    ],
    pros: [
      "Plateforme 100 % cloud — accessible partout",
      "Saisie automatisée par OCR et IA performante",
      "Référence pour les cabinets d'expertise comptable",
      "Conformité réglementaire française garantie",
      "Collaboration temps réel cabinet-client",
    ],
    cons: [
      "Tarification opaque, souvent sur devis pour les modules avancés",
      "Écosystème parfois fermé (intégrations tierces limitées)",
      "Migration depuis un autre outil complexe",
      "Interface dense pour les novices",
    ],
    integrations: [
      "Banques françaises",
      "Net-Entreprises",
      "impots.gouv.fr",
      "Dext",
      "Pennylane",
      "Silae",
      "PayFit",
    ],
    metaTitle: "Avis Cegid 2026 — Prix, Fonctionnalités, Déclarations",
    metaDescription:
      "Avis complet sur Cegid Loop : comptabilité cloud, TVA, liasse fiscale, DSN. Tarifs, avantages et inconvénients. Comparatif avec Sage.",
    faq: [
      {
        question: "Quel est le prix de Cegid Loop ?",
        answer:
          "Cegid Loop démarre à 35 €/mois par utilisateur pour la comptabilité de base. Les modules avancés (liasse fiscale, DSN, multi-dossiers) sont facturés en supplément. Contactez Cegid pour un devis personnalisé.",
      },
      {
        question: "Cegid est-il adapté aux petites entreprises ?",
        answer:
          "Cegid cible principalement les cabinets comptables et les PME/ETI. Pour les TPE et indépendants, des solutions comme Pennylane ou Indy sont plus accessibles.",
      },
      {
        question: "Peut-on migrer de Sage vers Cegid ?",
        answer:
          "Oui, Cegid propose des outils de migration et un accompagnement dédié. L'import du FEC (Fichier des Écritures Comptables) permet de récupérer l'historique comptable. Comptez 2 à 4 semaines pour une migration complète.",
      },
    ],
  },
  {
    slug: "pennylane",
    name: "Pennylane",
    logo: "/logos/pennylane.png",
    tagline: "La comptabilité collaborative et automatisée pour les entrepreneurs",
    description:
      "Pennylane est une plateforme française de comptabilité collaborative qui connecte les entrepreneurs à leur expert-comptable en temps réel. Avec sa synchronisation bancaire, son OCR intelligent et ses déclarations automatisées, Pennylane simplifie la gestion comptable et fiscale au quotidien. Soutenue par Sequoia et DST Global, Pennylane est la solution préférée des startups et PME modernes.",
    categories: ["tva", "liasse-fiscale", "bilan-comptable", "urssaf"],
    rating: 4.6,
    reviewCount: 1120,
    priceRange: "À partir de 14 €/mois",
    pricingModel: "Abonnement mensuel",
    targetSize: "Indépendants, TPE, PME (1-250 salariés)",
    foundedYear: 2020,
    headquarters: "Paris, France",
    website: "https://pennylane.com",
    affiliateUrl: "https://pennylane.com",
    features: [
      "Comptabilité automatisée (OCR + IA)",
      "Synchronisation bancaire temps réel",
      "Déclaration de TVA automatique",
      "Liasse fiscale et bilan",
      "Facturation intégrée",
      "Tableau de bord trésorerie",
      "Collaboration expert-comptable",
      "Application mobile",
    ],
    pros: [
      "Interface moderne et intuitive — la plus belle du marché",
      "Automatisation poussée (OCR, rapprochement bancaire, TVA)",
      "Collaboration temps réel avec l'expert-comptable",
      "Tarif accessible pour les TPE et indépendants",
      "Mises à jour réglementaires très réactives",
    ],
    cons: [
      "Pas de module paie/DSN intégré (partenariats)",
      "Fonctionnalités avancées en croissance",
      "Moins adapté aux ETI avec des besoins complexes",
      "Nécessite un expert-comptable partenaire pour certaines offres",
    ],
    integrations: [
      "Banques françaises (Qonto, Shine, BNP, SG…)",
      "Stripe",
      "GoCardless",
      "Dext",
      "PayFit",
      "Silae",
      "Shopify",
      "impots.gouv.fr",
    ],
    metaTitle: "Avis Pennylane 2026 — Prix, Fonctionnalités, Déclarations",
    metaDescription:
      "Avis complet sur Pennylane : comptabilité automatisée, TVA, liasse fiscale, bilan. Tarifs, avantages et inconvénients. Comparatif avec Indy.",
    faq: [
      {
        question: "Quel est le prix de Pennylane ?",
        answer:
          "Pennylane propose un plan Essentiel à 14 €/mois (comptabilité de base), un plan Pro à 49 €/mois (TVA, liasse fiscale, multi-utilisateurs) et un plan Business sur devis pour les PME avec des besoins avancés.",
      },
      {
        question: "Pennylane gère-t-il la déclaration de TVA ?",
        answer:
          "Oui, Pennylane calcule automatiquement la TVA à partir des écritures comptables et de la synchronisation bancaire. Le formulaire CA3 est pré-rempli et peut être télétransmis directement.",
      },
      {
        question: "Pennylane remplace-t-il l'expert-comptable ?",
        answer:
          "Non, Pennylane est conçu pour collaborer avec un expert-comptable. L'outil automatise la saisie et les déclarations, l'expert-comptable se concentre sur le conseil et la révision. Pennylane travaille avec un réseau de cabinets partenaires.",
      },
    ],
  },
  {
    slug: "indy",
    name: "Indy",
    logo: "/logos/indy.png",
    tagline: "Comptabilité automatisée pour les indépendants et professions libérales",
    description:
      "Indy (ex-Georges.tech) est un logiciel de comptabilité français conçu spécifiquement pour les indépendants, professions libérales et micro-entrepreneurs. Son IA catégorise automatiquement les transactions bancaires, génère la déclaration 2035 ou 2042-C-PRO et calcule les charges URSSAF. Solution idéale pour ceux qui veulent gérer leur comptabilité sans expert-comptable.",
    categories: ["tva", "urssaf", "bilan-comptable"],
    rating: 4.7,
    reviewCount: 3200,
    priceRange: "À partir de 0 € (offre gratuite)",
    pricingModel: "Freemium + abonnement mensuel",
    targetSize: "Indépendants, professions libérales, micro-entrepreneurs",
    foundedYear: 2016,
    headquarters: "Lyon, France",
    website: "https://indy.fr",
    affiliateUrl: "https://indy.fr",
    features: [
      "Catégorisation automatique des transactions par IA",
      "Synchronisation bancaire",
      "Déclaration 2035 et 2042-C-PRO",
      "Déclaration de TVA (CA3/CA12)",
      "Déclaration URSSAF auto-entrepreneur",
      "Calcul des charges sociales",
      "Facturation intégrée",
      "Pilotage de trésorerie",
    ],
    pros: [
      "Offre gratuite pour les micro-entrepreneurs",
      "IA de catégorisation très performante (95 % de précision)",
      "Spécialiste des professions libérales (BNC)",
      "Interface ultra-simple — pas besoin d'être comptable",
      "Support réactif et pédagogique",
    ],
    cons: [
      "Limité aux indépendants (pas de gestion multi-salariés)",
      "Pas de liasse fiscale complète pour les sociétés (IS)",
      "Intégrations tierces limitées",
      "Pas de module paie",
    ],
    integrations: [
      "Banques françaises (130+ banques)",
      "URSSAF",
      "impots.gouv.fr",
      "Stripe",
      "PayPal",
    ],
    metaTitle: "Avis Indy 2026 — Prix, Fonctionnalités, Déclarations",
    metaDescription:
      "Avis complet sur Indy (ex-Georges) : comptabilité automatisée pour indépendants, déclaration 2035, TVA, URSSAF. Gratuit pour micro-entrepreneurs.",
    faq: [
      {
        question: "Indy est-il vraiment gratuit ?",
        answer:
          "Oui, Indy propose une offre gratuite pour les micro-entrepreneurs avec synchronisation bancaire et déclaration URSSAF. Les plans payants (à partir de 22 €/mois) ajoutent la déclaration 2035, la TVA et les fonctionnalités avancées.",
      },
      {
        question: "Indy remplace-t-il l'expert-comptable ?",
        answer:
          "Pour les indépendants en BNC avec une activité simple, Indy peut remplacer l'expert-comptable grâce à son automatisation. Pour les activités complexes (SCI, holding, BIC), un expert-comptable reste recommandé.",
      },
      {
        question: "Indy gère-t-il les SAS et SARL ?",
        answer:
          "Indy a lancé une offre pour les sociétés (SAS, SARL, EURL) en 2025, mais elle reste limitée par rapport à Sage ou Cegid. Pour les sociétés avec salariés, Pennylane ou Sage sont plus adaptés.",
      },
    ],
  },
  {
    slug: "dext",
    name: "Dext",
    logo: "/logos/dext.png",
    tagline: "Collecte et pré-comptabilité automatisée des justificatifs",
    description:
      "Dext (ex-Receipt Bank) est une solution de collecte et de pré-comptabilité automatisée utilisée par plus de 1 million d'utilisateurs. Son OCR extrait les données des factures, tickets et relevés bancaires, puis les exporte vers le logiciel comptable. Dext est l'outil de référence des cabinets comptables pour automatiser la saisie et fiabiliser les déclarations.",
    categories: ["tva", "bilan-comptable"],
    rating: 4.4,
    reviewCount: 890,
    priceRange: "À partir de 18 €/mois",
    pricingModel: "Par utilisateur par mois",
    targetSize: "Cabinets comptables, TPE, PME",
    foundedYear: 2010,
    headquarters: "Londres, UK (bureaux Paris)",
    website: "https://dext.com/fr",
    affiliateUrl: "https://dext.com/fr",
    features: [
      "OCR intelligent (factures, tickets, relevés)",
      "Extraction automatique des données comptables",
      "Calcul automatique de la TVA",
      "Export vers Sage, Cegid, QuickBooks, Pennylane",
      "Collecte multi-canaux (photo, email, API)",
      "Rapprochement bancaire assisté",
      "Archivage légal des justificatifs",
      "Tableau de bord des flux",
    ],
    pros: [
      "OCR le plus fiable du marché (98 % de précision)",
      "Intégrations très larges (30+ logiciels comptables)",
      "Gain de temps considérable sur la saisie (80 %+)",
      "Archivage à valeur probante",
      "Multi-canaux de collecte pratiques",
    ],
    cons: [
      "Ne fait pas la comptabilité complète (pré-comptabilité uniquement)",
      "Nécessite un logiciel comptable en complément",
      "Tarif par utilisateur qui peut monter vite",
      "Interface en évolution (refonte en cours)",
    ],
    integrations: [
      "Sage",
      "Cegid",
      "Pennylane",
      "QuickBooks",
      "Xero",
      "ACD",
      "Agiris",
      "MyUnisoft",
    ],
    metaTitle: "Avis Dext 2026 — Prix, OCR, Intégrations Comptables",
    metaDescription:
      "Avis complet sur Dext (ex-Receipt Bank) : OCR, collecte automatisée, intégrations Sage/Cegid/Pennylane. Tarifs et comparatif 2026.",
    faq: [
      {
        question: "Quel est le prix de Dext ?",
        answer:
          "Dext propose des plans à partir de 18 €/mois par utilisateur pour les entreprises, et des offres cabinets avec tarification par dossier. Un essai gratuit de 14 jours est disponible.",
      },
      {
        question: "Dext remplace-t-il un logiciel comptable ?",
        answer:
          "Non, Dext est un outil de pré-comptabilité qui automatise la collecte et la saisie des justificatifs. Il s'intègre avec votre logiciel comptable (Sage, Cegid, Pennylane…) et y exporte les écritures.",
      },
      {
        question: "Dext fonctionne-t-il avec Pennylane ?",
        answer:
          "Oui, Dext dispose d'une intégration native avec Pennylane. Les justificatifs collectés par Dext sont automatiquement envoyés dans Pennylane avec les données extraites (montant, TVA, fournisseur).",
      },
    ],
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    logo: "/logos/quickbooks.png",
    tagline: "Comptabilité cloud internationale adaptée au marché français",
    description:
      "QuickBooks (Intuit) est une solution de comptabilité cloud utilisée par 7 millions d'entreprises dans le monde. La version française propose la comptabilité, la facturation, la déclaration de TVA et le suivi de trésorerie. Idéale pour les TPE et indépendants qui cherchent un outil simple et international avec une conformité française.",
    categories: ["tva", "bilan-comptable", "urssaf"],
    rating: 4.1,
    reviewCount: 750,
    priceRange: "À partir de 12 €/mois",
    pricingModel: "Abonnement mensuel",
    targetSize: "Indépendants, TPE, PME (1-50 salariés)",
    foundedYear: 1983,
    headquarters: "Mountain View, USA (version française)",
    website: "https://quickbooks.intuit.com/fr",
    affiliateUrl: "https://quickbooks.intuit.com/fr",
    features: [
      "Comptabilité cloud",
      "Facturation et devis",
      "Déclaration de TVA (CA3)",
      "Synchronisation bancaire",
      "Suivi de trésorerie",
      "Gestion des dépenses",
      "Rapports financiers",
      "Application mobile",
    ],
    pros: [
      "Interface très intuitive et moderne",
      "Tarif accessible pour les TPE",
      "Bon pour les entreprises internationales (multi-devises)",
      "Synchronisation bancaire fiable",
      "Marketplace d'applications riche",
    ],
    cons: [
      "Conformité française moins complète que Sage ou Cegid",
      "Pas de liasse fiscale intégrée",
      "Pas de DSN/paie",
      "Support en français limité",
      "Fonctionnalités fiscales françaises en retrait",
    ],
    integrations: [
      "Banques françaises",
      "Stripe",
      "PayPal",
      "Shopify",
      "Dext",
      "HubSpot",
      "Slack",
    ],
    metaTitle: "Avis QuickBooks 2026 — Prix, Fonctionnalités, TVA France",
    metaDescription:
      "Avis complet sur QuickBooks France : comptabilité cloud, TVA, facturation. Tarifs, avantages et inconvénients. Comparatif avec Pennylane.",
    faq: [
      {
        question: "QuickBooks est-il adapté au marché français ?",
        answer:
          "QuickBooks propose une version française avec TVA, FEC et facturation conforme. Cependant, pour la liasse fiscale et la DSN, il faut des outils complémentaires. Les solutions françaises (Sage, Pennylane) offrent une conformité plus complète.",
      },
      {
        question: "Quel est le prix de QuickBooks en France ?",
        answer:
          "QuickBooks démarre à 12 €/mois (plan Simple Start). Le plan Essentials est à 24 €/mois et le plan Plus à 36 €/mois. Un essai gratuit de 30 jours est proposé.",
      },
      {
        question: "QuickBooks gère-t-il la TVA française ?",
        answer:
          "Oui, QuickBooks calcule la TVA collectée et déductible et génère un récapitulatif pour la déclaration CA3. La télétransmission directe n'est pas intégrée — il faut reporter les montants sur impots.gouv.fr.",
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
