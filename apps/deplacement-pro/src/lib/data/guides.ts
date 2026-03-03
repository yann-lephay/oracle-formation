export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  sections: {
    title: string;
    content: string;
  }[];
  faq: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    slug: "bareme-kilometrique-2026",
    title: "Barème kilométrique 2026 — Indemnités et calcul",
    shortTitle: "Barème kilométrique 2026",
    description:
      "Le guide complet du barème kilométrique 2026 : tableau officiel, méthode de calcul, véhicules électriques et exemples concrets pour optimiser vos remboursements.",
    category: "réglementaire",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-01",
    readingTime: "8 min",
    metaTitle: "Barème Kilométrique 2026 — Tableau Officiel & Calcul",
    metaDescription:
      "Barème kilométrique 2026 officiel : tableau complet, calcul des indemnités, majoration véhicules électriques (+20 %). Guide pratique avec exemples.",
    sections: [
      {
        title: "Qu'est-ce que le barème kilométrique ?",
        content:
          "Le barème kilométrique est un outil fiscal publié chaque année par l'administration française. Il permet aux salariés et aux entreprises de calculer le montant des indemnités kilométriques versées lorsqu'un collaborateur utilise son véhicule personnel pour ses déplacements professionnels. Ce barème prend en compte la puissance fiscale du véhicule et la distance parcourue.",
      },
      {
        title: "Barème kilométrique 2026 — Tableau officiel",
        content:
          "Le barème 2026 a été publié au Journal Officiel. Il est revalorisé de 1,8 % par rapport à 2025 pour tenir compte de l'inflation. Exemple pour un véhicule de 5 CV fiscaux : jusqu'à 5 000 km → 0,636 €/km ; de 5 001 à 20 000 km → 0,357 €/km + 1 395 € ; au-delà de 20 000 km → 0,427 €/km. Majoration de 20 % pour les véhicules 100 % électriques.",
      },
      {
        title: "Comment calculer ses indemnités kilométriques ?",
        content:
          "Le calcul est simple : identifiez la puissance fiscale de votre véhicule sur la carte grise (case P.6), mesurez la distance aller-retour du trajet professionnel, puis appliquez le barème correspondant. Pour un salarié avec un véhicule 5 CV qui parcourt 12 000 km professionnels en 2026 : (12 000 × 0,357) + 1 395 = 5 679 €.",
      },
      {
        title: "Véhicules électriques : majoration de 20 %",
        content:
          "Depuis 2021, les véhicules 100 % électriques bénéficient d'une majoration de 20 % du barème kilométrique. En 2026, cette majoration est maintenue. Exemple : pour un véhicule électrique de 5 CV parcourant 12 000 km, l'indemnité passe de 5 679 € à 6 815 € (+20 %).",
      },
      {
        title: "Automatiser le calcul avec un logiciel",
        content:
          "Des solutions comme Expensya, SAP Concur ou Mooncard intègrent le barème kilométrique officiel et calculent automatiquement les indemnités. Le collaborateur renseigne son trajet (ou utilise le GPS), et le logiciel applique le bon taux. Avantage : conformité garantie, zéro erreur de calcul, gain de temps pour le service comptable.",
      },
    ],
    faq: [
      {
        question: "Le barème kilométrique 2026 a-t-il augmenté ?",
        answer:
          "Oui, le barème 2026 est revalorisé de 1,8 % par rapport à 2025 pour tenir compte de l'inflation sur les coûts automobiles (carburant, entretien, assurance).",
      },
      {
        question: "La majoration pour véhicules électriques s'applique-t-elle en 2026 ?",
        answer:
          "Oui, la majoration de 20 % pour les véhicules 100 % électriques est maintenue en 2026. Elle ne s'applique pas aux véhicules hybrides.",
      },
      {
        question: "Un employeur est-il obligé d'utiliser le barème fiscal ?",
        answer:
          "Non, l'employeur peut choisir de rembourser les frais kilométriques au réel (avec justificatifs) ou au forfait (barème). Mais le barème fiscal fixe le plafond d'exonération de cotisations sociales.",
      },
    ],
  },
  {
    slug: "indemnites-repas-2026",
    title: "Indemnités repas 2026 — Barèmes URSSAF et gestion",
    shortTitle: "Indemnités repas 2026",
    description:
      "Le guide complet des indemnités de repas 2026 : barèmes URSSAF, panier repas, restaurant, grand déplacement. Calcul, exonération et automatisation.",
    category: "réglementaire",
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-01",
    readingTime: "6 min",
    metaTitle: "Indemnités Repas 2026 — Barèmes URSSAF & Calcul",
    metaDescription:
      "Indemnités repas 2026 : barèmes URSSAF mis à jour, panier repas, restaurant, grand déplacement. Guide pratique avec exemples et automatisation.",
    sections: [
      {
        title: "Les différents types d'indemnités repas",
        content:
          "L'URSSAF distingue trois situations pour les frais de repas en déplacement professionnel : le repas sur le lieu de travail (panier repas), le repas hors des locaux mais sans déplacement (restaurant à proximité) et le repas en grand déplacement (hors du domicile). Chaque situation a son propre plafond d'exonération.",
      },
      {
        title: "Barèmes URSSAF 2026",
        content:
          "Les plafonds d'exonération 2026 sont les suivants : panier repas (sur le lieu de travail) → 7,30 € ; repas hors des locaux → 10,10 € ; repas en grand déplacement (restaurant) → 20,70 €. Ces montants sont exonérés de cotisations sociales. Au-delà, la fraction excédentaire est soumise à charges.",
      },
      {
        title: "Grand déplacement : indemnités hébergement + repas",
        content:
          "En cas de grand déplacement (impossibilité de regagner le domicile), l'entreprise peut verser des indemnités forfaitaires couvrant les repas (2 × 20,70 € = 41,40 €/jour) et l'hébergement (Paris et grandes villes : 74,30 €/nuit ; autres villes : 55,10 €/nuit). Ces forfaits sont exonérés si le salarié ne peut pas rentrer chez lui.",
      },
      {
        title: "Automatiser la gestion des indemnités",
        content:
          "Les logiciels de notes de frais comme Expensya ou SAP Concur intègrent les barèmes URSSAF et appliquent automatiquement les bons plafonds. Ils alertent le manager en cas de dépassement et facilitent le contrôle URSSAF en cas de vérification.",
      },
    ],
    faq: [
      {
        question: "Quel est le montant du panier repas en 2026 ?",
        answer:
          "Le panier repas (repas pris sur le lieu de travail) est plafonné à 7,30 € en 2026, exonéré de cotisations sociales URSSAF.",
      },
      {
        question: "Quelle est l'indemnité repas en grand déplacement en 2026 ?",
        answer:
          "L'indemnité repas en grand déplacement est de 20,70 € par repas en 2026, soit 41,40 € par jour (2 repas). Ce montant est exonéré de cotisations sociales.",
      },
      {
        question: "L'employeur peut-il verser plus que le barème URSSAF ?",
        answer:
          "Oui, mais la fraction excédentaire est soumise aux cotisations sociales. Par exemple, si l'entreprise verse 25 € pour un repas en déplacement, seuls 20,70 € sont exonérés, les 4,30 € restants sont soumis à charges.",
      },
    ],
  },
  {
    slug: "politique-voyage-modele",
    title: "Politique voyage entreprise — Modèle et bonnes pratiques 2026",
    shortTitle: "Politique voyage modèle",
    description:
      "Modèle de politique voyage d'entreprise prêt à l'emploi. Classes de transport, hébergement, validation, outils de réservation. Guide complet avec template.",
    category: "pratique",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-01",
    readingTime: "10 min",
    metaTitle: "Politique Voyage Entreprise 2026 — Modèle & Template Gratuit",
    metaDescription:
      "Modèle de politique voyage entreprise 2026 : classes de transport, hébergement, validation, outils. Template gratuit prêt à l'emploi.",
    sections: [
      {
        title: "Pourquoi une politique voyage ?",
        content:
          "Une politique voyage (ou travel policy) définit les règles de déplacement professionnel de l'entreprise : modes de transport autorisés, classes de service, plafonds d'hébergement, circuit de validation. Objectif : maîtriser les coûts (15-30 % d'économies potentielles), assurer l'équité entre collaborateurs et simplifier la gestion administrative.",
      },
      {
        title: "Les fondamentaux à inclure",
        content:
          "Toute politique voyage doit couvrir : 1) Les modes de transport (train vs avion selon la distance, classe économique par défaut) ; 2) L'hébergement (plafonds par ville, catégorie d'hôtel) ; 3) Les repas (barèmes URSSAF) ; 4) Le circuit de validation (pré-approbation, seuils) ; 5) Les outils de réservation (TMC/SBT imposé) ; 6) Les exceptions et dérogations.",
      },
      {
        title: "Modèle type — Classes de transport",
        content:
          "Train : classe économique par défaut, 1ère classe autorisée pour les trajets > 2h. Avion : économie par défaut, business pour les vols > 6h. Voiture de location : catégorie B/C maximum. Taxi/VTC : autorisé si pas de transport en commun raisonnable. Véhicule personnel : remboursement au barème kilométrique si accord préalable du manager.",
      },
      {
        title: "Modèle type — Hébergement",
        content:
          "Plafonds recommandés 2026 : Paris → 160 €/nuit maximum ; Lyon, Marseille, Bordeaux → 130 €/nuit ; Autres villes → 110 €/nuit. Hôtels 3 étoiles maximum sauf dérogation. Réservation via la TMC/SBT de l'entreprise obligatoire. Airbnb autorisé si moins cher que l'hôtel équivalent.",
      },
      {
        title: "Circuit de validation",
        content:
          "Circuit recommandé : déplacements < 500 € → validation manager N+1 automatique sous 24h ; déplacements 500-2 000 € → validation manager N+1 requise avant réservation ; déplacements > 2 000 € → validation N+1 + direction. Les TMC comme Navan et TravelPerk permettent d'intégrer ces règles directement dans l'outil de réservation.",
      },
      {
        title: "Intégrer la politique dans un outil",
        content:
          "Les TMC modernes (Navan, TravelPerk) permettent de paramétrer la politique voyage directement dans l'outil de réservation. Le collaborateur ne voit que les options conformes, les exceptions sont signalées et soumises à validation. Résultat : un taux de conformité de 90 %+ contre 50-60 % sans outil.",
      },
    ],
    faq: [
      {
        question: "Une politique voyage est-elle obligatoire ?",
        answer:
          "Non, la politique voyage n'est pas une obligation légale. Mais elle est fortement recommandée pour les entreprises de plus de 20 salariés ayant des déplacements réguliers. Sans politique, les dépenses sont souvent 20-30 % plus élevées.",
      },
      {
        question: "À quelle fréquence mettre à jour la politique voyage ?",
        answer:
          "Il est recommandé de réviser la politique voyage au moins une fois par an, idéalement en début d'exercice fiscal. Les barèmes URSSAF et les tarifs hôteliers évoluent chaque année.",
      },
      {
        question: "Comment faire accepter la politique voyage par les collaborateurs ?",
        answer:
          "Communiquez sur le pourquoi (maîtrise des coûts, équité), impliquez les représentants du personnel dans la rédaction, prévoyez des exceptions raisonnables et utilisez un outil de self-booking qui simplifie le respect de la politique.",
      },
    ],
  },
];

const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string): Guide | undefined {
  return guidesBySlug.get(slug);
}
