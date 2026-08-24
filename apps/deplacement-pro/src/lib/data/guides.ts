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
  sources?: { label: string; url: string; date: string }[];
  relatedGlossary?: { slug: string; label: string };
}

const urssafFraisProfessionnelsSource = {
  label: "URSSAF — Frais professionnels",
  url: "https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/frais-professionnels.html",
  date: "mis à jour le 7 avril 2026",
};

const urssafTravelAllowances2026 = {
  checkedAt: "23 août 2026",
  mealAtWork: "7,50 €",
  mealWhileTravelling: "10,40 €",
  mealAtRestaurant: "21,40 €",
  twoMeals: "42,80 €",
  lodgingParisAndInnerSuburbs: "76,60 €",
  lodgingOtherDepartments: "56,80 €",
} as const;

const urssafBaremes2026Source = {
  label: "URSSAF — Taux et barèmes 2026",
  url: "https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/frais-professionnels.html",
  date: `consulté le ${urssafTravelAllowances2026.checkedAt}`,
};

const professionalExpenseReimbursementSource = {
  label: "Cour de cassation — remboursement des frais professionnels justifiés",
  url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000026439064/",
  date: "arrêt du 26 septembre 2012",
};

const professionalExpensesOrderSource = {
  label: "Légifrance — arrêté du 4 septembre 2025 relatif aux frais professionnels",
  url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000052198430/2026-05-09",
  date: "version en vigueur consultée le 23 août 2026",
};

const socialContributionsLimitationSource = {
  label: "Légifrance — Code de la sécurité sociale, article L. 244-3",
  url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033713008/2026-03-04",
  date: "version en vigueur consultée le 23 août 2026",
};

const incomeTaxExemptionSource = {
  label: "Légifrance — Code général des impôts, article 81",
  url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051765336",
  date: "version en vigueur consultée le 23 août 2026",
};

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
    metaTitle: "Barème Kilométrique 2026 — Calcul",
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
    updatedAt: "2026-08-23",
    readingTime: "6 min",
    metaTitle: "Indemnités repas 2026 — URSSAF",
    metaDescription:
      "Indemnités repas 2026 : barèmes URSSAF mis à jour, panier repas, restaurant, grand déplacement. Guide pratique avec exemples et automatisation.",
    sections: [
      {
        title: "Les trois situations de repas distinguées par l'URSSAF",
        content:
          "Pour les limites d'exonération, l'URSSAF distingue trois situations : le repas pris sur le lieu de travail en raison de conditions particulières d'organisation ou d'horaires ; le repas pris hors des locaux pendant un déplacement professionnel, sans que le salarié soit contraint de le prendre au restaurant ; le repas pris au restaurant pendant un déplacement professionnel lorsque le salarié y est contraint. Le grand déplacement ajoute, sous ses propres conditions, des limites pour les repas et le logement.",
      },
      {
        title: "Barèmes URSSAF 2026",
        content:
          `Les limites d'exonération 2026 sont les suivantes : repas sur le lieu de travail → ${urssafTravelAllowances2026.mealAtWork} ; salarié en déplacement non contraint de prendre son repas au restaurant → ${urssafTravelAllowances2026.mealWhileTravelling} ; salarié en déplacement contraint de prendre son repas au restaurant → ${urssafTravelAllowances2026.mealAtRestaurant}. L'employeur peut rembourser au réel ou verser une allocation forfaitaire ; ces montants ne sont pas des budgets de repas recommandés.`,
      },
      {
        title: "Grand déplacement : indemnités hébergement + repas",
        content:
          `Pour les trois premiers mois d'un grand déplacement en métropole, l'URSSAF publie ${urssafTravelAllowances2026.mealAtRestaurant} par repas, soit ${urssafTravelAllowances2026.twoMeals} pour deux repas, et une limite logement avec petit-déjeuner de ${urssafTravelAllowances2026.lodgingParisAndInnerSuburbs} à Paris et dans les départements 92, 93 et 94, ou ${urssafTravelAllowances2026.lodgingOtherDepartments} dans les autres départements. Les conditions du grand déplacement et les réductions après trois mois restent à vérifier dans la source officielle.`,
      },
    ],
    faq: [
      {
        question: "Quel est le montant du panier repas en 2026 ?",
        answer:
          `La limite d'exonération pour un repas pris sur le lieu de travail est de ${urssafTravelAllowances2026.mealAtWork} en 2026. Ce montant ne constitue pas un budget obligatoire pour l'entreprise.`,
      },
      {
        question: "Quelle est l'indemnité repas en grand déplacement en 2026 ?",
        answer:
          `Pour les trois premiers mois d'un grand déplacement, la limite d'exonération est de ${urssafTravelAllowances2026.mealAtRestaurant} par repas en 2026, soit ${urssafTravelAllowances2026.twoMeals} pour deux repas, sous réserve de remplir les conditions URSSAF.`,
      },
      {
        question: "L'employeur peut-il verser plus que le barème URSSAF ?",
        answer:
          "Oui. Si l'entreprise verse une allocation forfaitaire au-delà de la limite applicable, le traitement social de l'excédent doit être vérifié. Un remboursement au réel suit une logique différente et nécessite les justificatifs correspondants.",
      },
    ],
    sources: [urssafFraisProfessionnelsSource, urssafBaremes2026Source],
  },
  {
    slug: "politique-voyage-modele",
    title: "Politique voyage d'entreprise — Modèle à adapter en 2026",
    shortTitle: "Modèle de politique voyage",
    description:
      "Une trame de décision pour fixer qui réserve, qui paie, qui valide et comment traiter les exceptions sans copier des plafonds arbitraires.",
    category: "pratique",
    publishedAt: "2026-02-01",
    updatedAt: "2026-08-23",
    readingTime: "12 min",
    metaTitle: "Politique voyage : modèle à adapter en 2026",
    metaDescription:
      "Construisez une politique voyage adaptée : règles, exceptions, validation, justificatifs, sécurité et barèmes URSSAF 2026 sourcés.",
    sections: [
      {
        title: "La décision à prendre avant d'écrire le document",
        content:
          "Une politique voyage est un cadre interne : elle dit qui peut réserver, avec quel moyen de paiement, qui valide une exception et quelles preuves conserver. Commencez par vos situations réelles — mission client urgente, salon planifié, déplacement international, prolongation personnelle — puis attribuez une règle et un responsable à chacune. Copier les plafonds d'une autre entreprise produit un document précis en apparence mais impossible à appliquer à votre budget et à vos risques.",
      },
      {
        title: "1. Définir le périmètre et les responsables",
        content:
          "Nommez les personnes concernées, les entités et pays couverts, les dépenses incluses et le propriétaire du document. Pour chaque déplacement, rendez explicites le demandeur, l'approbateur, le payeur, le contact sécurité et la personne autorisée à déroger. Une exception sans responsable devient une règle parallèle ; une règle sans voie d'exception pousse les équipes à réserver hors processus.",
      },
      {
        title: "2. Écrire des règles de réservation vérifiables",
        content:
          "Pour le train, l'avion, l'hôtel et la voiture, définissez un choix par défaut, les données qui déclenchent une exception et la personne qui l'approuve. Exemple de structure : « option standard lorsque le trajet respecte le budget de référence ; exception documentée si contrainte médicale, sécurité, accessibilité, horaire client ou coût total inférieur ». Le coût total inclut les transferts, bagages, temps mobilisé et conditions d'annulation ; le prix du billet seul ne suffit pas.",
      },
      {
        title: "3. Séparer budget interne et barèmes sociaux",
        content:
          `Les limites URSSAF ne sont pas des plafonds hôteliers ou repas recommandés : elles encadrent l'exonération de certaines allocations forfaitaires. En 2026, l'URSSAF publie ${urssafTravelAllowances2026.mealAtWork} pour un repas sur le lieu de travail, ${urssafTravelAllowances2026.mealWhileTravelling} pour un salarié en déplacement non contraint de manger au restaurant et ${urssafTravelAllowances2026.mealAtRestaurant} lorsqu'il y est contraint. Pour les trois premiers mois d'un grand déplacement en métropole, l'allocation logement et petit-déjeuner est limitée à ${urssafTravelAllowances2026.lodgingParisAndInnerSuburbs} à Paris et dans les départements 92, 93 et 94, et à ${urssafTravelAllowances2026.lodgingOtherDepartments} dans les autres départements. Vos budgets internes peuvent être différents ; indiquez le mode de remboursement, les justificatifs et le traitement du dépassement.`,
      },
      {
        title: "4. Construire une matrice de validation",
        content:
          "Choisissez vos seuils à partir du budget, du niveau de risque et de la capacité de réponse de vos équipes, pas d'un modèle universel. La matrice minimale contient : situation, montant ou risque déclencheur, approbateur principal, suppléant, délai de réponse, preuve attendue et conséquence en cas d'absence. Ajoutez une voie urgente qui journalise la décision après coup sans bloquer un voyage nécessaire.",
      },
      {
        title: "5. Prévoir sécurité, données et partie personnelle",
        content:
          "L'article L4121-1 du Code du travail impose à l'employeur des mesures adaptées pour protéger la santé physique et mentale des travailleurs. La politique doit donc donner un contact d'urgence, une procédure d'incident et des règles pour les destinations à risque. Si l'entreprise géolocalise des véhicules utilisés par des salariés, limitez la finalité, les personnes ayant accès et la durée de conservation conformément aux recommandations de la CNIL. Séparez aussi clairement la mission professionnelle d'une prolongation personnelle : coûts, assurance et responsabilité ne se déduisent pas d'une simple date de retour.",
      },
      {
        title: "6. Modèle compact à compléter",
        content:
          "« Périmètre : [personnes, entités, pays]. Réservation : [canal] ; choix par défaut : [règle]. Paiement : [carte, avance ou remboursement]. Validation : [responsable, suppléant, délai]. Exceptions : [motifs et preuve]. Frais : [réel ou forfait, justificatifs, délai]. Sécurité : [contact et procédure]. Données : [finalité, accès, conservation]. Révision : [propriétaire, date et déclencheurs]. » Testez cette trame sur un voyage courant, une urgence et un cas international avant publication interne.",
      },
      {
        title: "Faut-il un outil pour appliquer la politique ?",
        content:
          "Pas nécessairement. Avec peu de voyageurs et un approbateur unique, un formulaire clair et un registre partagé peuvent suffire. Un outil devient utile lorsque plusieurs entités, cartes, devises ou niveaux d'approbation rendent les exceptions difficiles à tracer. Notre recommandation : stabiliser d'abord les règles et les responsables ; choisir ensuite un outil capable de les exécuter sans créer un deuxième processus caché.",
      },
    ],
    faq: [
      {
        question: "Une politique voyage est-elle obligatoire ?",
        answer:
          "Aucun texte général n'impose un document portant exactement ce nom. En revanche, l'employeur doit rembourser les frais professionnels justifiés et prendre les mesures nécessaires pour protéger la santé et la sécurité des salariés. Une convention collective, un accord ou un contexte particulier peut ajouter des obligations : le modèle doit donc être vérifié dans votre cadre social et juridique.",
      },
      {
        question: "Les barèmes URSSAF fixent-ils le budget repas et hôtel ?",
        answer:
          "Non. Ils fixent des limites d'exonération pour certaines allocations forfaitaires. L'entreprise définit sa politique de remboursement et doit préciser si elle rembourse au réel ou au forfait, quelles preuves sont requises et comment elle traite un dépassement.",
      },
      {
        question: "Quand faut-il réviser la politique voyage ?",
        answer:
          "Fixez une revue datée au moins annuelle et rouvrez le document si les barèmes, fournisseurs, pays couverts, moyens de paiement, accords internes ou incidents changent. Le propriétaire du document doit être nommé afin que la date ne soit pas un simple rafraîchissement éditorial.",
      },
    ],
    relatedGlossary: {
      slug: "politique-voyage",
      label: "Définition courte : politique voyage",
    },
    sources: [
      urssafFraisProfessionnelsSource,
      urssafBaremes2026Source,
      professionalExpenseReimbursementSource,
      {
        label: "Légifrance — Code du travail, article L4121-1",
        url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035640828/2020-06-24",
        date: "version en vigueur",
      },
      {
        label: "CNIL — Géolocalisation des véhicules des salariés",
        url: "https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries",
        date: "consulté le 23 août 2026",
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
    metaTitle: "TVA Déplacements Pro 2026 — Taux",
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
    metaTitle: "Notes de Frais — Obligations 2026",
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
    updatedAt: "2026-08-23",
    readingTime: "9 min",
    metaTitle: "URSSAF et déplacements professionnels en 2026",
    metaDescription:
      "Règles URSSAF pour les déplacements professionnels 2026 : repas, grand déplacement, régime sectoriel du petit déplacement et contrôles.",
    sections: [
      {
        title: "Repas en déplacement, petit déplacement sectoriel et grand déplacement",
        content:
          "Les trois catégories générales de repas décrites ci-dessous concernent les allocations forfaitaires de repas selon le lieu et les contraintes du salarié. Elles ne doivent pas être confondues avec le régime URSSAF dit de petit déplacement, qui vise les salariés des entreprises de travail temporaire, des travaux publics, du bâtiment, de la tôlerie, de la chaudronnerie et de la tuyauterie industrielle. En grand déplacement, l'employeur peut verser des indemnités forfaitaires couvrant repas, hébergement et frais accessoires, sous réserve des conditions d'exclusion de l'assiette des cotisations sociales. Cette présentation ne couvre pas les remboursements au réel ni les frais kilométriques.",
      },
      {
        title: "Allocations forfaitaires de repas en déplacement en 2026",
        content:
          `Repas sur le lieu de travail : ${urssafTravelAllowances2026.mealAtWork}. Salarié en déplacement non contraint de prendre son repas au restaurant : ${urssafTravelAllowances2026.mealWhileTravelling}. Salarié en déplacement contraint de prendre son repas au restaurant : ${urssafTravelAllowances2026.mealAtRestaurant}. Ce sont des limites d'exonération d'allocations forfaitaires, pas des budgets de repas recommandés. Le remboursement au réel obéit à une logique différente et exige les justificatifs correspondants.`,
      },
      {
        title: "Barèmes d'exonération grand déplacement 2026",
        content:
          `Pour les trois premiers mois en métropole : ${urssafTravelAllowances2026.mealAtRestaurant} par repas (${urssafTravelAllowances2026.twoMeals} pour deux repas), logement avec petit-déjeuner à ${urssafTravelAllowances2026.lodgingParisAndInnerSuburbs} à Paris et dans les départements 92, 93 et 94, ou ${urssafTravelAllowances2026.lodgingOtherDepartments} dans les autres départements. Les montants diminuent après trois mois puis après vingt-quatre mois ; l'Outre-mer et l'étranger suivent des tables spécifiques à consulter dans la source URSSAF.`,
      },
      {
        title: "Indemnités kilométriques et véhicule personnel",
        content:
          "Lorsque le salarié utilise son véhicule personnel pour des déplacements professionnels, l'employeur peut rembourser au barème kilométrique fiscal (voir notre guide dédié). Ces indemnités sont exonérées de cotisations URSSAF tant qu'elles ne dépassent pas le barème officiel. Le salarié doit fournir la carte grise du véhicule et un état détaillé des trajets. Les véhicules électriques bénéficient d'une majoration de 20 %.",
      },
      {
        title: "Contrôle URSSAF : ce que vérifient les inspecteurs",
        content:
          "Lors d'un contrôle, l'URSSAF vérifie la réalité du déplacement, les conditions d'application des allocations forfaitaires, les justificatifs requis et la cohérence avec l'activité du salarié. Si une somme présentée comme frais professionnel ne remplit pas les conditions d'exclusion de l'assiette, elle peut être réintégrée dans l'assiette des cotisations. L'article L. 244-3 du Code de la sécurité sociale fixe en principe une prescription de trois ans à compter de la fin de l'année civile au titre de laquelle les cotisations sont dues ; des règles particulières peuvent modifier ce calcul.",
      },
    ],
    faq: [
      {
        question: "Les indemnités de grand déplacement sont-elles imposables ?",
        answer:
          "Les allocations spéciales destinées à couvrir les frais inhérents à l'emploi sont exonérées d'impôt lorsqu'elles sont effectivement utilisées conformément à leur objet, selon l'article 81 du Code général des impôts. Pour un forfait de grand déplacement, vérifiez la situation, les justificatifs et les limites applicables : le seul respect d'un barème social ne suffit pas à garantir toutes les conditions fiscales.",
      },
      {
        question: "Comment prouver un grand déplacement ?",
        answer:
          "Pour l'URSSAF, le salarié est présumé empêché de regagner chaque jour sa résidence habituelle lorsque deux conditions sont cumulativement remplies : la distance aller entre la résidence et le lieu de déplacement est d'au moins 50 km, et les transports en commun ne permettent pas de parcourir cette distance en moins de 1 h 30. Si ces deux critères ne sont pas réunis, l'employeur peut encore démontrer cet empêchement au regard des circonstances de fait. Conservez l'ordre de mission et les éléments de trajet utiles.",
      },
      {
        question: "Les indemnités forfaitaires sont-elles obligatoires ?",
        answer:
          "Non. L'employeur peut choisir de rembourser au réel (sur justificatifs) plutôt qu'au forfait. Le forfait URSSAF fixe le plafond d'exonération, pas le montant obligatoire de remboursement.",
      },
    ],
    sources: [
      urssafFraisProfessionnelsSource,
      urssafBaremes2026Source,
      professionalExpensesOrderSource,
      socialContributionsLimitationSource,
      incomeTaxExemptionSource,
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
    metaTitle: "Plafond IK 2026 — Barème Officiel",
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
