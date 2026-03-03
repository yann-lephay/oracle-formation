export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: {
    title: string;
    content: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "optimiser-budget-deplacement-pro-2026",
    title: "Comment optimiser son budget déplacement professionnel en 2026",
    excerpt:
      "Les déplacements professionnels représentent le 2e poste de dépenses des entreprises après les salaires. Voici 7 leviers concrets pour réduire la facture de 20 à 35 % sans sacrifier le confort des collaborateurs.",
    content: "",
    author: "Rédaction DeplacementPro",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-01",
    readingTime: "7 min",
    category: "Gestion",
    metaTitle: "Optimiser son Budget Déplacement Pro 2026 — 7 Leviers",
    metaDescription:
      "7 leviers concrets pour réduire votre budget déplacement professionnel de 20-35 % en 2026 : TMC, politique voyage, carte corporate, réservation anticipée.",
    keywords: [
      "budget déplacement professionnel",
      "réduire coûts voyage affaires",
      "optimisation frais déplacement",
      "travel management",
    ],
    sections: [
      {
        title: "Le déplacement pro, un poste sous-optimisé",
        content:
          "Les déplacements professionnels représentent en moyenne 10 à 15 % des charges d'exploitation d'une PME/ETI, soit le 2e poste de dépenses après les salaires. Pourtant, 60 % des entreprises françaises n'ont pas de politique voyage formalisée, et 40 % ne savent pas combien elles dépensent réellement en déplacements. En 2026, avec l'inflation des tarifs aériens (+8 %) et hôteliers (+5 %), optimiser ce poste est devenu stratégique.",
      },
      {
        title: "1. Mettre en place une politique voyage",
        content:
          "Une politique voyage claire (classes de transport, plafonds d'hébergement, circuit de validation) permet de réduire les dépenses de 15 à 25 %. L'essentiel : définir des règles simples, les intégrer dans un outil de réservation et prévoir des exceptions raisonnables. Voir notre guide complet sur la politique voyage modèle.",
      },
      {
        title: "2. Adopter une TMC ou un Self-Booking Tool",
        content:
          "Les TMC nouvelle génération (Navan, TravelPerk) négocient des tarifs corporate 10-20 % inférieurs aux prix publics. Leur algorithme trouve les meilleurs prix en combinant GDS, NDC et contenu direct. Le self-booking permet en plus de réduire les frais de gestion de 5-10 € par réservation.",
      },
      {
        title: "3. Réserver à l'avance",
        content:
          "Les données des TMC montrent que les réservations effectuées 14+ jours à l'avance sont en moyenne 30 % moins chères que les réservations de dernière minute. Pour les trajets réguliers, configurez des alertes de prix dans votre outil de réservation.",
      },
      {
        title: "4. Privilégier le train pour les courts trajets",
        content:
          "Pour les trajets < 4h en TGV, le train est souvent moins cher que l'avion (surtout en anticipé), plus rapide porte-à-porte et 30 fois moins émetteur de CO₂. Certaines TMC proposent un « rail first » qui suggère automatiquement le train quand il est pertinent.",
      },
      {
        title: "5. Déployer des cartes corporate",
        content:
          "Les cartes corporate (Mooncard, Spendesk) éliminent les avances de frais et les notes de frais manuelles. Résultat : gain de temps (2h/mois par collaborateur), meilleure visibilité sur les dépenses et récupération automatique de la TVA.",
      },
      {
        title: "6. Automatiser les notes de frais",
        content:
          "Un logiciel de notes de frais (Expensya, SAP Concur) avec OCR réduit le temps de traitement de 80 %. Le ROI est immédiat : le coût moyen d'une note de frais manuelle est estimé à 53 € (étude HRS), contre 5-10 € avec un outil automatisé.",
      },
      {
        title: "7. Analyser et piloter avec des KPIs",
        content:
          "Les TMC fournissent des tableaux de bord avec des KPIs clés : coût moyen par trajet, taux de conformité à la politique voyage, délai moyen de réservation, part train vs avion. Analysez ces données trimestriellement pour identifier les leviers d'optimisation restants.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
