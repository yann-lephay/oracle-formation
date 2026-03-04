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
    slug: "calendrier-declarations-2026",
    title: "Calendrier des déclarations fiscales et sociales 2026",
    shortTitle: "Calendrier 2026",
    description:
      "Le calendrier complet des échéances déclaratives 2026 : TVA, DSN, liasse fiscale, URSSAF, CFE. Toutes les dates clés pour ne manquer aucune déclaration.",
    category: "réglementaire",
    publishedAt: "2026-01-10",
    updatedAt: "2026-03-01",
    readingTime: "8 min",
    metaTitle: "Calendrier Déclarations Fiscales 2026 — Toutes les Échéances",
    metaDescription:
      "Calendrier 2026 des déclarations fiscales et sociales : TVA, DSN, liasse fiscale, URSSAF, CFE. Dates clés et échéances mois par mois.",
    sections: [
      {
        title: "Pourquoi un calendrier des déclarations ?",
        content:
          "Les entreprises françaises doivent respecter de nombreuses échéances déclaratives tout au long de l'année. Un retard peut entraîner des pénalités significatives : 10 % de majoration pour la TVA, 1,5 % par mois de retard pour l'impôt sur les sociétés, et des pénalités URSSAF pouvant atteindre 5 % des cotisations dues. Ce calendrier recense toutes les dates clés de 2026.",
      },
      {
        title: "Déclarations mensuelles",
        content:
          "Chaque mois, les entreprises doivent transmettre : la DSN (avant le 5 ou le 15 du mois suivant selon l'effectif), la déclaration de TVA CA3 (entre le 15 et le 24 du mois suivant selon le département), le paiement des cotisations URSSAF (le 5 ou le 15). Les auto-entrepreneurs déclarent leur chiffre d'affaires mensuellement ou trimestriellement.",
      },
      {
        title: "Échéances du 1er semestre 2026",
        content:
          "Janvier : solde IS si clôture au 30/09. Février : déclaration résultats sociétés (clôture 31/10). Mars : DAS2 (honoraires versés en 2025), déclaration résultats SCI. Avril : déclaration résultats BIC/BNC (clôture 31/12). Mai : liasse fiscale et déclaration de résultat (clôture 31/12), 2e jour ouvré. Juin : déclaration revenus des indépendants, 1er acompte IS.",
      },
      {
        title: "Échéances du 2e semestre 2026",
        content:
          "Septembre : 2e acompte IS, déclaration CFE (si modification). Octobre : solde taxe d'apprentissage. Novembre : 3e acompte IS. Décembre : solde CFE-IFER, dernier acompte IS, régularisation TVA annuelle pour le régime réel simplifié (CA12).",
      },
      {
        title: "Automatiser le suivi des échéances",
        content:
          "Les logiciels de comptabilité comme Sage, Cegid ou Pennylane intègrent un calendrier des échéances déclaratives avec alertes automatiques. Ils pré-remplissent les formulaires et assurent la télétransmission dans les délais. Résultat : zéro retard, zéro pénalité.",
      },
    ],
    faq: [
      {
        question: "Quelle est la date limite de la liasse fiscale 2026 ?",
        answer:
          "Pour les entreprises clôturant au 31 décembre 2025, la liasse fiscale doit être déposée au plus tard le 2e jour ouvré suivant le 1er mai 2026, soit le 4 mai 2026.",
      },
      {
        question: "Quand doit-on déposer la DSN chaque mois ?",
        answer:
          "La DSN doit être transmise avant le 5 du mois suivant pour les entreprises de 50 salariés et plus, et avant le 15 du mois suivant pour les entreprises de moins de 50 salariés.",
      },
      {
        question: "Quelles sont les pénalités en cas de retard de TVA ?",
        answer:
          "Un retard de déclaration de TVA entraîne une majoration de 10 % de la TVA due. Si le retard dépasse 30 jours après une mise en demeure, la majoration passe à 40 %. Des intérêts de retard de 0,20 % par mois s'ajoutent.",
      },
    ],
  },
  {
    slug: "obligations-tpe-pme",
    title: "Obligations déclaratives des TPE et PME — Guide complet 2026",
    shortTitle: "Obligations TPE/PME",
    description:
      "Le guide complet des obligations déclaratives pour les TPE et PME françaises : fiscales, sociales, comptables. Tout ce que vous devez déclarer selon votre statut.",
    category: "réglementaire",
    publishedAt: "2026-01-20",
    updatedAt: "2026-03-01",
    readingTime: "10 min",
    metaTitle: "Obligations Déclaratives TPE PME 2026 — Guide Complet",
    metaDescription:
      "Guide complet des obligations déclaratives des TPE et PME en 2026 : TVA, DSN, IS, liasse fiscale, CFE, URSSAF. Tout savoir selon votre statut.",
    sections: [
      {
        title: "Les obligations selon le statut juridique",
        content:
          "Les obligations déclaratives varient selon le statut : les auto-entrepreneurs déclarent leur CA à l'URSSAF (mensuel ou trimestriel) et déposent la 2042-C-PRO. Les EURL/SARL à l'IR ajoutent la liasse 2031 ou 2035. Les SAS/SARL à l'IS doivent en plus déposer la liasse 2065, la déclaration de résultat et payer les acomptes d'IS trimestriels.",
      },
      {
        title: "Obligations fiscales",
        content:
          "Déclarations fiscales obligatoires : la déclaration de TVA (CA3 mensuelle ou CA12 annuelle) pour les assujettis, la liasse fiscale annuelle (formulaires 2050-2059 pour les BIC, 2033 pour le réel simplifié, 2035 pour les BNC), la déclaration de résultat, la DAS2 (honoraires versés supérieurs à 1 200 €), et la CFE. La télétransmission est obligatoire pour toutes les entreprises.",
      },
      {
        title: "Obligations sociales",
        content:
          "Côté social : la DSN mensuelle remplace plus de 30 déclarations pour les employeurs. Les auto-entrepreneurs déclarent leur CA sur autoentrepreneur.urssaf.fr. Les indépendants classiques sont prélevés sur la base de leur déclaration de revenus professionnels. Les cotisations sont calculées automatiquement par l'URSSAF.",
      },
      {
        title: "Obligations comptables",
        content:
          "Les entreprises soumises à l'IS ou à l'IR (hors micro-entreprise) doivent tenir une comptabilité complète : journal, grand livre, balance, bilan et compte de résultat. Le FEC (Fichier des Écritures Comptables) doit pouvoir être produit en cas de contrôle fiscal. L'archivage des pièces justificatives est obligatoire pendant 10 ans.",
      },
      {
        title: "Simplifier avec un logiciel",
        content:
          "Les logiciels de comptabilité modernes (Pennylane, Indy, Sage) automatisent la majorité de ces obligations : synchronisation bancaire, calcul automatique de la TVA et des charges, pré-remplissage des formulaires, télétransmission. Pour une TPE, un logiciel comme Indy (gratuit pour les micro-entrepreneurs) ou Pennylane (à partir de 14 €/mois) suffit à couvrir l'essentiel.",
      },
    ],
    faq: [
      {
        question: "Un auto-entrepreneur doit-il faire une liasse fiscale ?",
        answer:
          "Non, les auto-entrepreneurs (micro-entrepreneurs) sont dispensés de liasse fiscale. Ils déclarent simplement leur chiffre d'affaires à l'URSSAF et reportent ce CA sur la déclaration de revenus 2042-C-PRO.",
      },
      {
        question: "La télétransmission est-elle obligatoire ?",
        answer:
          "Oui, depuis 2015, toutes les entreprises doivent télétransmettre leurs déclarations fiscales (TVA, liasse fiscale, IS) par EDI ou EFI. La transmission papier n'est plus acceptée.",
      },
      {
        question: "Combien de temps conserver les documents comptables ?",
        answer:
          "Les documents comptables (factures, relevés, grand livre) doivent être conservés pendant 10 ans. Les déclarations fiscales pendant 6 ans. Les bulletins de paie pendant 5 ans (mais il est recommandé de les conserver indéfiniment).",
      },
    ],
  },
  {
    slug: "penalites-retard-declaration",
    title: "Pénalités de retard de déclaration — Barème et sanctions 2026",
    shortTitle: "Pénalités de retard",
    description:
      "Tout savoir sur les pénalités en cas de retard de déclaration : TVA, IS, DSN, URSSAF. Barèmes, majorations, intérêts de retard et comment les éviter.",
    category: "réglementaire",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-01",
    readingTime: "7 min",
    metaTitle: "Pénalités Retard Déclaration 2026 — Barème TVA, IS, DSN, URSSAF",
    metaDescription:
      "Pénalités de retard de déclaration 2026 : majorations TVA (10-40 %), IS (10 %), DSN (7,50 €/salarié), URSSAF (5 %). Barème complet et solutions.",
    sections: [
      {
        title: "Pénalités TVA",
        content:
          "Un retard de déclaration de TVA entraîne une majoration de 10 % de la TVA due. Si le retard dépasse 30 jours après une mise en demeure, la majoration passe à 40 %. En cas de manœuvres frauduleuses, elle atteint 80 %. Des intérêts de retard de 0,20 % par mois de retard s'ajoutent dans tous les cas.",
      },
      {
        title: "Pénalités Impôt sur les Sociétés",
        content:
          "Pour la déclaration de résultat et la liasse fiscale, un retard entraîne une majoration de 10 % de l'impôt dû (ou 40 % après mise en demeure). Les acomptes d'IS non payés à temps génèrent une majoration de 5 % + intérêts de retard de 0,20 %/mois.",
      },
      {
        title: "Pénalités DSN",
        content:
          "Une DSN transmise en retard peut entraîner une pénalité de 7,50 € par salarié et par déclaration, avec un plafond de 750 € par mois de retard. L'absence totale de DSN peut mener à une taxation d'office par les organismes sociaux.",
      },
      {
        title: "Pénalités URSSAF",
        content:
          "Le non-paiement ou le retard de paiement des cotisations URSSAF entraîne une majoration de 5 % des sommes dues + 0,20 % d'intérêts par mois de retard. En cas de travail dissimulé, les sanctions sont bien plus lourdes (pénales).",
      },
      {
        title: "Comment éviter les pénalités",
        content:
          "La meilleure prévention est l'automatisation. Les logiciels de comptabilité (Sage, Pennylane, Indy) intègrent des calendriers d'échéances avec alertes, pré-remplissent les formulaires et assurent la télétransmission. Résultat : vos déclarations sont transmises à temps, avec les bons montants.",
      },
    ],
    faq: [
      {
        question: "Peut-on contester une pénalité de retard ?",
        answer:
          "Oui, vous pouvez demander une remise gracieuse auprès de l'administration fiscale. Si c'est votre premier retard et que vous êtes de bonne foi, l'administration accorde généralement la remise de la majoration (mais pas des intérêts de retard).",
      },
      {
        question: "Quel est le délai de grâce pour la TVA ?",
        answer:
          "Il n'y a pas de délai de grâce officiel pour la TVA. La majoration de 10 % s'applique dès le 1er jour de retard. En pratique, l'administration peut ne pas appliquer la majoration pour un retard de quelques jours, mais ce n'est pas garanti.",
      },
      {
        question: "Les pénalités DSN sont-elles appliquées systématiquement ?",
        answer:
          "En pratique, les pénalités DSN ne sont pas toujours appliquées pour les premiers retards de faible durée. Mais l'URSSAF et les caisses peuvent les appliquer, surtout en cas de retards répétés.",
      },
    ],
  },
  {
    slug: "dematerialisation-obligatoire",
    title: "Dématérialisation obligatoire des factures — Guide entreprise 2026",
    shortTitle: "Dématérialisation factures",
    description:
      "Le guide complet de la réforme de la facturation électronique obligatoire en France : calendrier, obligations, PDP, Chorus Pro et logiciels conformes.",
    category: "réglementaire",
    publishedAt: "2026-01-25",
    updatedAt: "2026-03-01",
    readingTime: "9 min",
    metaTitle: "Facturation Électronique Obligatoire 2026 — Guide Complet",
    metaDescription:
      "Facturation électronique obligatoire en France : calendrier 2026-2027, PDP, Chorus Pro, e-reporting. Guide complet pour préparer votre entreprise.",
    sections: [
      {
        title: "La réforme de la facturation électronique",
        content:
          "La France impose progressivement la facturation électronique (e-invoicing) et la transmission des données de transaction (e-reporting) à toutes les entreprises assujetties à la TVA. Cette réforme vise à lutter contre la fraude à la TVA, simplifier les obligations déclaratives et moderniser les échanges B2B. À terme, la déclaration de TVA sera pré-remplie par l'administration grâce aux données collectées.",
      },
      {
        title: "Calendrier de déploiement",
        content:
          "Le calendrier a été repoussé et s'étale désormais entre 2026 et 2027 : septembre 2026 — les grandes entreprises et ETI doivent émettre et recevoir en format électronique ; septembre 2027 — les PME et micro-entreprises doivent émettre et recevoir. Toutes les entreprises doivent pouvoir recevoir des factures électroniques dès septembre 2026.",
      },
      {
        title: "Les Plateformes de Dématérialisation Partenaires (PDP)",
        content:
          "Les entreprises devront passer par une Plateforme de Dématérialisation Partenaire (PDP) immatriculée par l'administration ou par le Portail Public de Facturation (Chorus Pro). Les PDP assurent l'émission, la réception, la transmission des factures et le e-reporting. Les éditeurs comme Sage, Cegid et Pennylane sont en cours d'immatriculation PDP.",
      },
      {
        title: "Formats acceptés",
        content:
          "Les factures électroniques devront respecter l'un des formats structurés suivants : Factur-X (format hybride PDF + XML, recommandé), UBL (Universal Business Language) ou CII (Cross Industry Invoice). Le simple PDF ou scan ne sera plus accepté comme facture électronique.",
      },
      {
        title: "Comment se préparer",
        content:
          "Pour préparer votre entreprise : 1) Vérifiez que votre logiciel de facturation sera conforme (Sage, Cegid, Pennylane le seront). 2) Choisissez votre PDP ou utilisez Chorus Pro. 3) Mettez à jour vos processus de facturation. 4) Formez vos équipes. 5) Testez en conditions réelles avant l'échéance. Les logiciels modernes gèrent cette transition automatiquement.",
      },
    ],
    faq: [
      {
        question: "La facturation électronique est-elle obligatoire en 2026 ?",
        answer:
          "Oui, à partir de septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques. L'obligation d'émettre s'applique aux grandes entreprises et ETI en septembre 2026, puis aux PME et micro-entreprises en septembre 2027.",
      },
      {
        question: "Qu'est-ce qu'une PDP ?",
        answer:
          "Une Plateforme de Dématérialisation Partenaire (PDP) est un intermédiaire immatriculé par l'administration fiscale qui assure l'émission, la réception et la transmission des factures électroniques. Votre logiciel comptable (Sage, Cegid, Pennylane) sera probablement votre PDP.",
      },
      {
        question: "Le format PDF est-il encore accepté ?",
        answer:
          "Un simple PDF ne sera plus accepté comme facture électronique. En revanche, le format Factur-X combine un PDF lisible et un fichier XML structuré — c'est le format recommandé par l'administration.",
      },
    ],
  },
  {
    slug: "guide-dsn-pas-a-pas",
    title: "Guide DSN pas à pas — Déclaration Sociale Nominative 2026",
    shortTitle: "Guide DSN pas à pas",
    description:
      "Le guide pas à pas pour comprendre et gérer la DSN : fonctionnement, données requises, signalements, erreurs fréquentes et logiciels recommandés.",
    category: "pratique",
    publishedAt: "2026-02-10",
    updatedAt: "2026-03-01",
    readingTime: "10 min",
    metaTitle: "Guide DSN Pas à Pas 2026 — Déclaration Sociale Nominative",
    metaDescription:
      "Guide complet de la DSN 2026 : fonctionnement, données requises, signalements, erreurs à éviter. Tutoriel pas à pas avec logiciels recommandés.",
    sections: [
      {
        title: "Qu'est-ce que la DSN ?",
        content:
          "La Déclaration Sociale Nominative (DSN) est un fichier mensuel unique qui remplace plus de 30 déclarations sociales (DADSU, DMMO, attestation employeur, etc.). Produite à partir du bulletin de paie, elle transmet les données individuelles de chaque salarié aux organismes sociaux (URSSAF, Pôle emploi, caisses de retraite, mutuelle). Obligatoire depuis janvier 2017.",
      },
      {
        title: "Les données transmises",
        content:
          "La DSN mensuelle contient : l'identification de l'entreprise (SIRET, convention collective), les données individuelles des salariés (état civil, contrat, rémunération brute et nette), les cotisations sociales ventilées par organisme, les heures travaillées et les absences. Chaque donnée est codifiée selon la norme NEODeS.",
      },
      {
        title: "Les signalements d'événements",
        content:
          "En plus de la DSN mensuelle, l'employeur doit transmettre des signalements d'événements dans les 5 jours : arrêt de travail (maladie, maternité, accident), reprise après arrêt, fin de contrat (pour déclencher les droits chômage). Ces signalements sont envoyés via le même canal que la DSN mensuelle.",
      },
      {
        title: "Étapes de la DSN mensuelle",
        content:
          "1) Clôturer la paie du mois. 2) Générer le fichier DSN depuis le logiciel de paie (Sage, Silae, PayFit). 3) Contrôler le fichier avec l'outil DSN-Val (fourni par Net-Entreprises). 4) Corriger les anomalies bloquantes. 5) Télétransmettre sur Net-Entreprises (avant le 5 ou le 15). 6) Vérifier le compte-rendu métier (CRM) sous 48h. 7) Archiver le fichier.",
      },
      {
        title: "Erreurs fréquentes et solutions",
        content:
          "Les erreurs les plus courantes : SIRET erroné (vérifier sur sirene.fr), numéro de sécurité sociale invalide (contrôler avec le NIR), taux de cotisation obsolète (mettre à jour le logiciel), incohérence entre rémunération et temps de travail. Les logiciels modernes intègrent des contrôles de cohérence qui détectent ces erreurs avant l'envoi.",
      },
    ],
    faq: [
      {
        question: "Quel logiciel pour faire la DSN ?",
        answer:
          "Les logiciels de paie qui gèrent la DSN : Sage Paie, Silae, PayFit, Cegid, ADP. Ces logiciels génèrent le fichier DSN automatiquement à partir des bulletins de paie et assurent la télétransmission vers Net-Entreprises.",
      },
      {
        question: "Que se passe-t-il si la DSN contient des erreurs ?",
        answer:
          "Net-Entreprises renvoie un compte-rendu métier (CRM) dans les 48h. Les anomalies bloquantes empêchent le traitement — il faut corriger et retransmettre. Les anomalies non bloquantes sont signalées mais n'empêchent pas le traitement.",
      },
      {
        question: "La DSN remplace-t-elle l'attestation employeur ?",
        answer:
          "Oui, depuis 2017, le signalement de fin de contrat en DSN remplace l'attestation employeur (Pôle emploi). Ce signalement déclenche automatiquement les droits chômage du salarié.",
      },
    ],
  },
];

const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string): Guide | undefined {
  return guidesBySlug.get(slug);
}
