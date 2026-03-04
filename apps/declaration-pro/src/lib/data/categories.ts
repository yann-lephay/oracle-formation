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
    slug: "dsn",
    name: "Déclaration Sociale Nominative (DSN)",
    shortName: "DSN",
    description:
      "La DSN remplace toutes les déclarations sociales périodiques. Les logiciels de paie et comptabilité automatisent sa génération et son envoi mensuel à Net-Entreprises.",
    icon: "FileText",
    metaTitle: "Meilleur Logiciel DSN 2026 — Comparatif Déclaration Sociale Nominative",
    metaDescription:
      "Comparez les meilleurs logiciels DSN en France : Sage, Cegid, Pennylane, Silae. Tarifs, fonctionnalités, conformité. Guide complet DSN 2026.",
    keywords: [
      "DSN",
      "déclaration sociale nominative",
      "logiciel DSN",
      "déclaration sociale",
      "Net-Entreprises",
    ],
    intro:
      "La Déclaration Sociale Nominative (DSN) est obligatoire pour toutes les entreprises depuis 2017. Elle remplace plus de 30 déclarations sociales en un flux mensuel unique transmis à Net-Entreprises. Les logiciels de paie modernes automatisent entièrement ce processus : génération, contrôle de cohérence et télétransmission.",
    useCases: [
      "Générer la DSN mensuelle automatiquement depuis la paie",
      "Contrôler la cohérence des données avant envoi",
      "Gérer les signalements d'événements (arrêt maladie, fin de contrat)",
      "Archiver les DSN pour le contrôle URSSAF",
    ],
    targetAudience: "Toutes les entreprises avec salariés",
    priceRange: "25 € – 90 € / mois",
  },
  {
    slug: "tva",
    name: "Déclaration de TVA",
    shortName: "TVA",
    description:
      "Les logiciels de comptabilité automatisent le calcul et la télédéclaration de TVA (CA3 mensuelle ou CA12 annuelle) directement vers le portail impots.gouv.fr.",
    icon: "Calculator",
    metaTitle: "Meilleur Logiciel Déclaration TVA 2026 — Comparatif & Avis",
    metaDescription:
      "Comparez les meilleurs logiciels de déclaration de TVA : Pennylane, QuickBooks, Indy. CA3, CA12, autoliquidation. Guide complet TVA 2026.",
    keywords: [
      "déclaration TVA",
      "logiciel TVA",
      "CA3",
      "CA12",
      "télédéclaration TVA",
    ],
    intro:
      "La déclaration de TVA est une obligation fiscale pour la majorité des entreprises françaises. Les logiciels de comptabilité modernes automatisent le calcul de la TVA collectée et déductible, pré-remplissent le formulaire CA3 (mensuel) ou CA12 (annuel) et assurent la télétransmission via EDI ou EFI directement sur impots.gouv.fr.",
    useCases: [
      "Calculer automatiquement la TVA collectée et déductible",
      "Pré-remplir les formulaires CA3 et CA12",
      "Gérer les régimes spéciaux (franchise, réel simplifié)",
      "Télédéclarer directement sur impots.gouv.fr",
    ],
    targetAudience: "Toutes les entreprises assujetties à la TVA",
    priceRange: "9 € – 60 € / mois",
  },
  {
    slug: "liasse-fiscale",
    name: "Liasse Fiscale",
    shortName: "Liasse Fiscale",
    description:
      "La liasse fiscale regroupe les tableaux comptables et fiscaux obligatoires (bilan, compte de résultat, annexes). Les logiciels automatisent sa génération et sa télétransmission.",
    icon: "FileStack",
    metaTitle: "Meilleur Logiciel Liasse Fiscale 2026 — Comparatif & Télétransmission",
    metaDescription:
      "Comparez les meilleurs logiciels de liasse fiscale : Sage, Cegid, Pennylane. Génération automatique, EDI-TDFC, télétransmission. Guide 2026.",
    keywords: [
      "liasse fiscale",
      "logiciel liasse fiscale",
      "EDI-TDFC",
      "bilan comptable",
      "déclaration de résultat",
    ],
    intro:
      "La liasse fiscale est l'ensemble des documents comptables et fiscaux que chaque entreprise doit déposer annuellement auprès de l'administration fiscale. Elle comprend le bilan, le compte de résultat et les annexes (tableaux 2050 à 2059). Les logiciels comptables génèrent automatiquement ces formulaires et les transmettent par EDI-TDFC.",
    useCases: [
      "Générer automatiquement les formulaires 2050 à 2059",
      "Contrôler la cohérence inter-tableaux",
      "Télétransmettre par EDI-TDFC",
      "Archiver les liasses pour le contrôle fiscal",
    ],
    targetAudience: "Entreprises soumises à l'IS ou à l'IR (BIC/BNC)",
    priceRange: "30 € – 120 € / mois",
  },
  {
    slug: "urssaf",
    name: "Déclarations URSSAF & Charges Sociales",
    shortName: "URSSAF",
    description:
      "Les logiciels de paie et comptabilité automatisent le calcul des cotisations sociales, la génération des déclarations URSSAF et le paiement des charges via le portail URSSAF.",
    icon: "Shield",
    metaTitle: "Meilleur Logiciel URSSAF 2026 — Comparatif Déclarations Sociales",
    metaDescription:
      "Comparez les meilleurs logiciels pour vos déclarations URSSAF : cotisations, DSN, auto-entrepreneur. Sage, Indy, Pennylane. Guide 2026.",
    keywords: [
      "URSSAF",
      "cotisations sociales",
      "déclaration URSSAF",
      "charges sociales",
      "logiciel URSSAF",
    ],
    intro:
      "Les déclarations URSSAF englobent le calcul et le paiement des cotisations sociales (maladie, retraite, chômage, CSG/CRDS). Pour les employeurs, la DSN a remplacé la plupart des déclarations. Pour les indépendants et auto-entrepreneurs, la déclaration de chiffre d'affaires reste obligatoire. Les logiciels modernes automatisent ces processus et minimisent les risques d'erreur.",
    useCases: [
      "Calculer automatiquement les cotisations sociales",
      "Déclarer le chiffre d'affaires (auto-entrepreneur)",
      "Gérer les taux de cotisation par salarié",
      "Suivre les échéances et éviter les pénalités de retard",
    ],
    targetAudience: "Employeurs, indépendants et auto-entrepreneurs",
    priceRange: "0 € – 50 € / mois",
  },
  {
    slug: "bilan-comptable",
    name: "Bilan Comptable & Clôture",
    shortName: "Bilan Comptable",
    description:
      "Les logiciels de comptabilité automatisent les écritures de clôture, la génération du bilan et du compte de résultat, et facilitent la révision avec l'expert-comptable.",
    icon: "BarChart3",
    metaTitle: "Meilleur Logiciel Bilan Comptable 2026 — Comparatif & Clôture",
    metaDescription:
      "Comparez les meilleurs logiciels pour votre bilan comptable : clôture automatisée, révision collaborative, export expert-comptable. Guide 2026.",
    keywords: [
      "bilan comptable",
      "clôture comptable",
      "logiciel comptabilité",
      "compte de résultat",
      "révision comptable",
    ],
    intro:
      "Le bilan comptable est le document de synthèse qui présente la situation financière de l'entreprise à la clôture de l'exercice. Les logiciels de comptabilité modernes automatisent les écritures de clôture (amortissements, provisions, régularisations), génèrent le bilan et le compte de résultat, et permettent une collaboration fluide avec l'expert-comptable pour la révision.",
    useCases: [
      "Automatiser les écritures de clôture annuelle",
      "Générer le bilan et le compte de résultat",
      "Collaborer avec l'expert-comptable sur la révision",
      "Exporter les données au format FEC (Fichier des Écritures Comptables)",
    ],
    targetAudience: "Toutes les entreprises soumises à obligations comptables",
    priceRange: "19 € – 100 € / mois",
  },
];

const categoriesBySlug = new Map(categories.map((c) => [c.slug, c]));

export function getCategoryBySlug(slug: string): Categorie | undefined {
  return categoriesBySlug.get(slug);
}
