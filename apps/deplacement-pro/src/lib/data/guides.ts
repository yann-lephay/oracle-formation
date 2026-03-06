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
  {
    slug: "tva-deplacement-professionnel",
    title: "TVA et déplacements professionnels — Guide 2026",
    shortTitle: "TVA déplacements pro",
    description:
      "Comment récupérer la TVA sur les déplacements professionnels en 2026 ? Taux applicables par type de frais, justificatifs nécessaires et erreurs courantes.",
    category: "réglementaire",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-01",
    readingTime: "8 min",
    metaTitle: "TVA Déplacements Professionnels 2026 — Récupération & Taux",
    metaDescription:
      "Comment récupérer la TVA sur les déplacements professionnels en 2026 ? Taux par type de frais, justificatifs, cas pratiques et erreurs courantes.",
    sections: [
      {
        title: "Quels frais de déplacement sont soumis à TVA ?",
        content:
          "La plupart des frais de déplacement professionnel sont soumis à la TVA, mais tous ne sont pas récupérables. Les frais d'hébergement (hôtel) : TVA à 10 % mais NON déductible pour les entreprises (sauf hébergement de tiers). Les frais de restauration : TVA à 10 %, déductible si le repas est un frais professionnel justifié. Les transports : TVA à 10 % (train, avion domestique), déductible. La location de véhicule : TVA à 20 %, déductible pour les véhicules utilitaires uniquement. Le carburant : TVA à 20 %, déductible à 80 % pour l'essence et 100 % pour le gazole et l'électricité.",
      },
      {
        title: "Taux de TVA applicables en 2026",
        content:
          "Train et transports en commun : 10 %. Avion domestique : 10 %. Avion international : 0 % (exonéré). Hôtellerie : 10 % (non déductible). Restauration : 10 % (déductible). Location de voiture : 20 %. Carburant essence : 20 % (déductible à 80 %). Carburant gazole : 20 % (déductible à 100 %). Péages autoroutiers : 20 % (déductible). Parking : 20 % (déductible).",
      },
      {
        title: "Justificatifs nécessaires pour la déduction",
        content:
          "Pour récupérer la TVA, vous devez disposer d'une facture originale mentionnant : le nom et le numéro de TVA du fournisseur, la date, le montant HT, le taux et le montant de TVA, et le montant TTC. Les tickets de caisse ne suffisent pas — demandez systématiquement une facture. Pour les notes de frais, la facture doit être au nom de l'entreprise (pas du salarié). Les solutions comme Mooncard ou Expensya capturent automatiquement les factures et extraient la TVA.",
      },
      {
        title: "Cas pratiques par mode de transport",
        content:
          "Billet de train Paris-Lyon (SNCF) : prix TTC 89 €, TVA 10 % = 8,09 € récupérables. Nuit d'hôtel à Bordeaux : prix TTC 130 €, TVA 10 % = 11,82 € MAIS non déductible (hébergement salarié). Déjeuner client au restaurant : prix TTC 45 €, TVA 10 % = 4,09 € récupérables. Plein d'essence (véhicule de service) : prix TTC 80 €, TVA 20 % = 13,33 €, déductible à 80 % = 10,67 € récupérables.",
      },
      {
        title: "Erreurs courantes à éviter",
        content:
          "1) Tenter de récupérer la TVA sur l'hébergement des salariés (non déductible). 2) Ne pas demander de facture au nom de l'entreprise. 3) Oublier la TVA sur les péages et parkings (souvent négligée). 4) Ne pas distinguer essence et gazole (taux de déduction différents). 5) Confondre TVA collectée et TVA déductible. Les logiciels de gestion des notes de frais appliquent automatiquement les bonnes règles.",
      },
    ],
    faq: [
      {
        question: "Peut-on récupérer la TVA sur les hôtels ?",
        answer:
          "Non, la TVA sur l'hébergement des salariés en déplacement n'est pas déductible en France. C'est une exception notable. Elle est déductible uniquement pour l'hébergement de tiers (clients, fournisseurs invités par l'entreprise).",
      },
      {
        question: "La TVA sur les billets d'avion est-elle récupérable ?",
        answer:
          "Pour les vols domestiques, la TVA à 10 % est déductible. Pour les vols internationaux, ils sont exonérés de TVA (taux 0 %), donc il n'y a rien à récupérer.",
      },
      {
        question: "Comment récupérer la TVA sur l'essence en 2026 ?",
        answer:
          "La TVA sur l'essence est déductible à 80 % en 2026 pour les véhicules de tourisme (et 100 % pour les véhicules utilitaires). Le gazole et l'électricité sont déductibles à 100 %. Conservez toutes les factures de carburant.",
      },
    ],
  },
  {
    slug: "note-de-frais-obligations",
    title: "Notes de frais — Obligations légales de l'employeur 2026",
    shortTitle: "Notes de frais obligations",
    description:
      "Quelles sont les obligations légales de l'employeur en matière de notes de frais ? Remboursement, délais, justificatifs et contrôle URSSAF.",
    category: "réglementaire",
    publishedAt: "2026-02-20",
    updatedAt: "2026-03-01",
    readingTime: "7 min",
    metaTitle: "Notes de Frais — Obligations Légales 2026 & Bonnes Pratiques",
    metaDescription:
      "Obligations légales employeur sur les notes de frais 2026 : remboursement, délais, justificatifs, contrôle URSSAF. Guide complet avec bonnes pratiques.",
    sections: [
      {
        title: "L'obligation de remboursement des frais professionnels",
        content:
          "L'employeur est tenu de rembourser les frais engagés par le salarié dans le cadre de son activité professionnelle (article L.3261-1 du Code du travail). Ce remboursement peut se faire au réel (sur justificatifs) ou au forfait (barèmes URSSAF). En cas de refus de remboursement, le salarié peut saisir le conseil de prud'hommes. Le non-remboursement constitue un manquement aux obligations contractuelles de l'employeur.",
      },
      {
        title: "Délais de remboursement",
        content:
          "La loi ne fixe pas de délai précis pour le remboursement des notes de frais. Cependant, la jurisprudence considère qu'un délai raisonnable est d'un mois maximum. En pratique, la plupart des entreprises remboursent sous 15 à 30 jours suivant la soumission de la note de frais. Un délai excessif peut être requalifié en retenue sur salaire, ce qui est illégal.",
      },
      {
        title: "Justificatifs obligatoires",
        content:
          "L'employeur doit conserver les justificatifs de notes de frais pendant 3 ans (prescription sociale) ou 6 ans (en cas de contrôle fiscal). Les justificatifs acceptés : factures originales, tickets de caisse, reçus de carte bancaire, billets de transport. Depuis 2017, les justificatifs dématérialisés (photos, scans) ont la même valeur probante que les originaux papier, à condition de respecter les normes de l'AFNOR (NF Z42-026).",
      },
      {
        title: "Contrôle URSSAF et risques",
        content:
          "L'URSSAF peut contrôler les remboursements de frais professionnels et requalifier en avantage en nature les montants qui dépassent les barèmes ou ne sont pas justifiés. En cas de redressement : les sommes sont soumises à cotisations sociales (environ 45 % de charges patronales). Pour se prémunir : respectez les barèmes URSSAF, conservez tous les justificatifs, et utilisez un logiciel de notes de frais conforme.",
      },
      {
        title: "Automatiser pour se conformer",
        content:
          "Les logiciels de notes de frais (Expensya, SAP Concur, Mooncard, Spendesk) automatisent le respect des obligations : capture des justificatifs avec OCR, vérification des barèmes URSSAF, archivage légal conforme AFNOR, piste d'audit complète. Le coût (5-15 €/utilisateur/mois) est largement compensé par la réduction du risque URSSAF et le gain de temps.",
      },
    ],
    faq: [
      {
        question: "Un employeur peut-il refuser de rembourser une note de frais ?",
        answer:
          "L'employeur peut refuser si les frais ne sont pas professionnels, ne respectent pas la politique de l'entreprise ou ne sont pas justifiés. Mais il ne peut pas refuser le remboursement de frais professionnels légitimes et justifiés.",
      },
      {
        question: "Combien de temps conserver les justificatifs de notes de frais ?",
        answer:
          "3 ans minimum (prescription sociale URSSAF). 6 ans recommandé (prescription fiscale). 10 ans pour les documents comptables. En pratique, conservez tout pendant 6 ans pour être tranquille.",
      },
      {
        question: "Les photos de justificatifs sont-elles acceptées par l'URSSAF ?",
        answer:
          "Oui, depuis 2017, les justificatifs dématérialisés ont la même valeur probante que les originaux papier, à condition d'utiliser un système d'archivage conforme à la norme AFNOR NF Z42-026.",
      },
    ],
  },
  {
    slug: "urssaf-deplacement",
    title: "URSSAF et déplacements professionnels — Règles 2026",
    shortTitle: "URSSAF déplacements",
    description:
      "Les règles URSSAF pour les déplacements professionnels en 2026 : exonérations, barèmes, grand déplacement et contrôles. Guide pratique pour les employeurs.",
    category: "réglementaire",
    publishedAt: "2026-02-25",
    updatedAt: "2026-03-01",
    readingTime: "9 min",
    metaTitle: "URSSAF Déplacements Professionnels 2026 — Règles & Exonérations",
    metaDescription:
      "Règles URSSAF pour les déplacements professionnels 2026 : barèmes d'exonération, grand déplacement, petit déplacement, contrôles. Guide complet employeur.",
    sections: [
      {
        title: "Petit déplacement vs grand déplacement",
        content:
          "L'URSSAF distingue deux situations : le petit déplacement (le salarié peut rentrer chez lui le soir) et le grand déplacement (le salarié est contraint de dormir hors de son domicile). Les barèmes d'exonération sont différents. En petit déplacement, seuls les repas sont indemnisés. En grand déplacement, l'employeur peut verser des indemnités forfaitaires couvrant repas, hébergement et frais accessoires, exonérées de cotisations sociales.",
      },
      {
        title: "Barèmes d'exonération petit déplacement 2026",
        content:
          "Repas sur le lieu de travail (panier repas) : 7,30 €. Repas hors des locaux (contrainte de déplacement) : 10,10 €. Repas au restaurant (déplacement loin du lieu de travail) : 20,70 €. Ces montants sont exonérés de cotisations sociales. Au-delà, la fraction excédentaire est soumise à charges. L'employeur peut verser moins ou plus, mais l'exonération est plafonnée à ces montants.",
      },
      {
        title: "Barèmes d'exonération grand déplacement 2026",
        content:
          "En métropole : repas 20,70 €/repas (41,40 €/jour pour 2 repas), hébergement Paris et grandes villes 74,30 €/nuit, autres villes 55,10 €/nuit. Outre-mer : repas et hébergement majorés (voir barèmes spécifiques). Étranger : barèmes par pays publiés par l'URSSAF. Au-delà de 3 mois de déplacement continu, les indemnités sont réduites de 15 %, puis de 30 % après 24 mois.",
      },
      {
        title: "Indemnités kilométriques et véhicule personnel",
        content:
          "Lorsque le salarié utilise son véhicule personnel pour des déplacements professionnels, l'employeur peut rembourser au barème kilométrique fiscal (voir notre guide dédié). Ces indemnités sont exonérées de cotisations URSSAF tant qu'elles ne dépassent pas le barème officiel. Le salarié doit fournir la carte grise du véhicule et un état détaillé des trajets. Les véhicules électriques bénéficient d'une majoration de 20 %.",
      },
      {
        title: "Contrôle URSSAF : ce que vérifient les inspecteurs",
        content:
          "Lors d'un contrôle, l'URSSAF vérifie : 1) La réalité du déplacement professionnel (preuves de mission). 2) Le respect des barèmes d'exonération. 3) La conservation des justificatifs (factures, billets). 4) La cohérence entre les remboursements et l'activité du salarié. En cas de redressement, les sommes sont requalifiées en salaire et soumises à cotisations + majorations. La prescription est de 3 ans.",
      },
    ],
    faq: [
      {
        question: "Les indemnités de grand déplacement sont-elles imposables ?",
        answer:
          "Non, les indemnités de grand déplacement exonérées de cotisations URSSAF sont également exonérées d'impôt sur le revenu pour le salarié, dans la limite des barèmes officiels.",
      },
      {
        question: "Comment prouver un grand déplacement ?",
        answer:
          "Le grand déplacement est justifié si le salarié ne peut pas rentrer chez lui (distance domicile > 50 km ou temps de trajet > 1h30). L'employeur doit pouvoir fournir l'ordre de mission, les réservations et les justificatifs de frais.",
      },
      {
        question: "Les indemnités forfaitaires sont-elles obligatoires ?",
        answer:
          "Non. L'employeur peut choisir de rembourser au réel (sur justificatifs) plutôt qu'au forfait. Le forfait URSSAF fixe le plafond d'exonération, pas le montant obligatoire de remboursement.",
      },
    ],
  },
  {
    slug: "plafond-indemnites-kilometriques",
    title: "Plafonds indemnités kilométriques 2026 — Barème fiscal",
    shortTitle: "Plafond IK 2026",
    description:
      "Plafonds et barème des indemnités kilométriques 2026 : tableau officiel, calcul, plafond URSSAF et impact fiscal pour les entreprises.",
    category: "réglementaire",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-05",
    readingTime: "6 min",
    metaTitle: "Plafond Indemnités Kilométriques 2026 — Barème Officiel",
    metaDescription:
      "Plafonds indemnités kilométriques 2026 : barème fiscal officiel, calcul, exonération URSSAF, véhicules électriques (+20 %). Tableau complet.",
    sections: [
      {
        title: "Le barème kilométrique fiscal 2026",
        content:
          "Le barème kilométrique 2026, revalorisé de 1,8 % par rapport à 2025, fixe le montant des indemnités kilométriques exonérées de cotisations sociales et d'impôt. Il s'applique lorsqu'un salarié utilise son véhicule personnel pour des déplacements professionnels. Le montant dépend de deux facteurs : la puissance fiscale du véhicule (en CV) et la distance annuelle parcourue.",
      },
      {
        title: "Tableau du barème 2026 — Automobiles",
        content:
          "Pour un véhicule de 5 CV (le plus courant) : jusqu'à 5 000 km → 0,636 €/km ; de 5 001 à 20 000 km → (distance × 0,357) + 1 395 € ; au-delà de 20 000 km → 0,427 €/km. Pour un véhicule de 7 CV et plus : jusqu'à 5 000 km → 0,697 €/km ; de 5 001 à 20 000 km → (distance × 0,394) + 1 515 € ; au-delà de 20 000 km → 0,470 €/km.",
      },
      {
        title: "Majoration véhicules électriques",
        content:
          "Les véhicules 100 % électriques bénéficient d'une majoration de 20 % du barème kilométrique. Exemple pour un véhicule électrique de 5 CV parcourant 12 000 km : calcul standard = (12 000 × 0,357) + 1 395 = 5 679 €. Avec majoration : 5 679 × 1,20 = 6 815 €. Cette majoration ne s'applique PAS aux véhicules hybrides. Elle est en vigueur depuis 2021 et maintenue en 2026.",
      },
      {
        title: "Plafond URSSAF et implications",
        content:
          "Le barème kilométrique fiscal sert de plafond d'exonération URSSAF. Si l'employeur rembourse plus que le barème, la fraction excédentaire est soumise à cotisations sociales. Si l'employeur rembourse moins, le salarié ne peut pas déduire la différence de ses impôts. En pratique, la quasi-totalité des entreprises appliquent le barème fiscal comme base de remboursement.",
      },
      {
        title: "Barème deux-roues motorisés et vélos",
        content:
          "Des barèmes spécifiques existent pour les deux-roues motorisés (scooters, motos) et les vélos. Pour un scooter de 50 cm³ : 0,315 €/km (jusqu'à 3 000 km). Le forfait mobilités durables permet de rembourser jusqu'à 700 €/an pour les trajets domicile-travail en vélo ou covoiturage, exonéré de cotisations et d'impôt.",
      },
    ],
    faq: [
      {
        question: "Le barème kilométrique 2026 a-t-il augmenté ?",
        answer:
          "Oui, le barème 2026 est revalorisé de 1,8 % par rapport à 2025, en ligne avec l'inflation des coûts automobiles.",
      },
      {
        question: "Le barème s'applique-t-il aux trajets domicile-travail ?",
        answer:
          "Le barème kilométrique s'applique aux déplacements professionnels (missions). Pour les trajets domicile-travail, l'employeur doit prendre en charge 50 % de l'abonnement transport public. Le remboursement kilométrique domicile-travail est une option, pas une obligation.",
      },
      {
        question: "Un salarié peut-il utiliser le barème pour ses impôts ?",
        answer:
          "Oui. Le salarié peut choisir de déduire ses frais réels (dont les frais kilométriques au barème) au lieu de la déduction forfaitaire de 10 %. C'est intéressant si ses frais réels dépassent 10 % de son salaire.",
      },
    ],
  },
];

const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string): Guide | undefined {
  return guidesBySlug.get(slug);
}
