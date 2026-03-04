export interface Persona {
  slug: string;
  name: string;
  description: string;
  icon: string;
  employeeRange: string;
  travelFrequency: string;
  annualBudget: string;
  challenges: string[];
  recommendedCategories: string[];
  recommendedSolutions: { slug: string; reason: string }[];
  relevantComparisons: string[];
  relevantGuides: string[];
  budgetTips: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const personas: Persona[] = [
  {
    slug: "pme",
    name: "PME",
    description:
      "Les PME (10 à 249 salariés) cherchent des solutions simples et abordables pour gérer leurs déplacements professionnels sans équipe dédiée.",
    icon: "Building2",
    employeeRange: "10 – 249 salariés",
    travelFrequency: "50 – 500 voyages/an",
    annualBudget: "50 000 – 500 000 €/an",
    challenges: [
      "Pas d'équipe travel dédiée — le DAF ou l'office manager gère tout",
      "Difficile de négocier des tarifs préférentiels avec un faible volume",
      "Manque de visibilité sur les dépenses de déplacement",
      "Process manuels : notes de frais papier, réservations par email",
    ],
    recommendedCategories: ["self-booking-tool", "notes-de-frais"],
    recommendedSolutions: [
      { slug: "navan", reason: "Solution tout-en-un idéale pour les PME à partir de 50 voyageurs" },
      { slug: "travelperk", reason: "Interface intuitive, pas besoin de formation" },
      { slug: "spendesk", reason: "Cartes corporate + notes de frais dématérialisées" },
    ],
    relevantComparisons: ["navan-vs-travelperk", "spendesk-vs-mooncard"],
    relevantGuides: ["politique-voyage-entreprise", "indemnites-kilometriques-2026"],
    budgetTips: [
      "Adoptez un outil de self-booking pour bénéficier de tarifs négociés mutualisés",
      "Mettez en place une politique voyage claire pour encadrer les dépenses",
      "Privilégiez le train pour les trajets < 4h : 30-50 % moins cher que l'avion",
      "Réservez 14 jours à l'avance pour économiser 20-40 % sur les hôtels",
    ],
    metaTitle: "Déplacements professionnels pour PME — Guide & Solutions 2026",
    metaDescription:
      "Solutions de déplacement professionnel adaptées aux PME : self-booking, cartes corporate, notes de frais. Comparatif et conseils pour optimiser votre budget voyage.",
    faq: [
      {
        question: "Quelle solution de déplacement pro choisir pour une PME ?",
        answer:
          "Pour une PME, privilégiez un outil de self-booking comme Navan ou TravelPerk qui combine réservation et gestion des dépenses. Ces solutions offrent des tarifs négociés sans volume minimum et sont simples à déployer sans équipe dédiée.",
      },
      {
        question: "Quel budget prévoir pour les déplacements professionnels d'une PME ?",
        answer:
          "En moyenne, une PME dépense entre 50 000 et 500 000 €/an en déplacements professionnels. Un outil de travel management peut générer 15-25 % d'économies, soit 7 500 à 125 000 € d'économies annuelles.",
      },
      {
        question: "Comment optimiser les notes de frais dans une PME ?",
        answer:
          "Dématérialisez vos notes de frais avec un outil comme Spendesk ou Mooncard. La carte corporate élimine les avances de frais et automatise la réconciliation comptable. ROI typique : 2-3 mois.",
      },
    ],
  },
  {
    slug: "eti",
    name: "ETI",
    description:
      "Les ETI (250 à 4 999 salariés) ont besoin de solutions robustes pour gérer un volume significatif de déplacements avec des exigences de reporting et de conformité.",
    icon: "Building",
    employeeRange: "250 – 4 999 salariés",
    travelFrequency: "500 – 5 000 voyages/an",
    annualBudget: "500 000 – 5 M€/an",
    challenges: [
      "Besoin de reporting détaillé pour piloter le budget travel",
      "Conformité réglementaire : duty of care, politique voyage, TVA",
      "Intégration avec l'ERP et la comptabilité existants",
      "Gestion multi-sites et multi-entités juridiques",
    ],
    recommendedCategories: ["tmc", "self-booking-tool", "notes-de-frais"],
    recommendedSolutions: [
      { slug: "navan", reason: "Plateforme unifiée voyages + dépenses avec reporting avancé" },
      { slug: "sap-concur", reason: "Intégration native SAP et conformité réglementaire" },
      { slug: "travelperk", reason: "FlexiPerk pour annulations flexibles, déploiement rapide" },
    ],
    relevantComparisons: ["navan-vs-sap-concur", "navan-vs-travelperk"],
    relevantGuides: ["politique-voyage-entreprise", "frais-de-deplacement-professionnel"],
    budgetTips: [
      "Négociez des tarifs hôteliers directs avec les chaînes (à partir de 200 nuitées/an)",
      "Centralisez les réservations pour obtenir une visibilité complète sur les dépenses",
      "Implémentez des validations pré-voyage pour maîtriser les budgets",
      "Analysez les données pour identifier les postes d'optimisation (hôtels, aérien, train)",
    ],
    metaTitle: "Déplacements professionnels pour ETI — Comparatif & Guide 2026",
    metaDescription:
      "Solutions de travel management pour ETI : TMC, self-booking, notes de frais. Comparatif des meilleures plateformes pour gérer 500 à 5 000 voyages/an.",
    faq: [
      {
        question: "Quelle TMC choisir pour une ETI ?",
        answer:
          "Pour une ETI, Navan et SAP Concur sont les choix les plus courants. Navan offre une expérience utilisateur moderne et un déploiement rapide. SAP Concur est idéal si vous êtes déjà dans l'écosystème SAP. TravelPerk est une alternative plus agile.",
      },
      {
        question: "Comment piloter le budget travel d'une ETI ?",
        answer:
          "Utilisez le reporting intégré de votre TMC pour suivre les KPIs : coût moyen par voyage, taux de conformité à la politique, advance booking. Fixez des objectifs trimestriels et partagez les tableaux de bord avec les directions métiers.",
      },
      {
        question: "Faut-il internaliser ou externaliser la gestion des voyages d'une ETI ?",
        answer:
          "La plupart des ETI combinent un travel manager interne (pilotage, politique) avec une TMC externe (réservation, support). Cela offre le meilleur équilibre entre contrôle et expertise opérationnelle.",
      },
    ],
  },
  {
    slug: "grands-comptes",
    name: "Grands comptes",
    description:
      "Les grandes entreprises (5 000+ salariés) ont des enjeux complexes : volume élevé, multi-pays, conformité stricte et intégration SI.",
    icon: "Landmark",
    employeeRange: "5 000+ salariés",
    travelFrequency: "5 000 – 100 000+ voyages/an",
    annualBudget: "5 M€ – 100 M€+/an",
    challenges: [
      "Gestion multi-pays avec devises et réglementations différentes",
      "Intégration complexe avec ERP, SIRH et outils comptables",
      "Négociation de programmes corporate avec compagnies aériennes et chaînes hôtelières",
      "Duty of care et sécurité des voyageurs à l'international",
    ],
    recommendedCategories: ["tmc", "carte-corporate", "notes-de-frais"],
    recommendedSolutions: [
      { slug: "sap-concur", reason: "Leader mondial, gestion multi-pays et multi-devises" },
      { slug: "navan", reason: "Alternative moderne avec déploiement plus rapide" },
      { slug: "mooncard", reason: "Carte corporate avec réconciliation automatique" },
    ],
    relevantComparisons: ["navan-vs-sap-concur", "spendesk-vs-mooncard"],
    relevantGuides: ["politique-voyage-entreprise", "frais-de-deplacement-professionnel"],
    budgetTips: [
      "Mettez en place un programme aérien négocié (à partir de 500 segments/an)",
      "Déployez un programme hôtelier RFP avec des tarifs Last Room Availability",
      "Utilisez le dynamic pricing pour les réservations hors programme",
      "Consolidez les données de toutes les entités pour maximiser le pouvoir de négociation",
    ],
    metaTitle: "Déplacements professionnels grands comptes — Solutions 2026",
    metaDescription:
      "Solutions de travel management pour grandes entreprises : TMC internationales, cartes corporate, conformité multi-pays. Comparatif pour 5 000+ voyages/an.",
    faq: [
      {
        question: "Quelle TMC pour une grande entreprise internationale ?",
        answer:
          "SAP Concur domine le marché des grands comptes avec sa couverture mondiale et ses intégrations SAP. Navan monte en puissance sur ce segment avec une approche plus technologique. Pour les groupes > 50 000 voyages/an, un appel d'offres structuré est recommandé.",
      },
      {
        question: "Comment gérer le duty of care pour les voyageurs internationaux ?",
        answer:
          "Choisissez une TMC qui intègre la localisation en temps réel des voyageurs, des alertes sécurité par pays et un support 24/7 multilingue. SAP Concur et Navan proposent ces fonctionnalités en standard.",
      },
      {
        question: "Quel ROI attendre d'une TMC pour un grand compte ?",
        answer:
          "Les grands comptes réalisent typiquement 10-20 % d'économies sur le poste travel, soit 500 000 € à 20 M€/an selon le volume. Le ROI provient des tarifs négociés, de la conformité à la politique et de la réduction du leakage.",
      },
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    description:
      "Les startups ont besoin de solutions flexibles, rapides à déployer et qui s'adaptent à une croissance rapide, sans alourdir les process.",
    icon: "Rocket",
    employeeRange: "5 – 100 salariés",
    travelFrequency: "20 – 200 voyages/an",
    annualBudget: "10 000 – 200 000 €/an",
    challenges: [
      "Budget limité mais besoin de flexibilité maximale",
      "Croissance rapide : la solution doit scaler",
      "Pas de travel manager, chaque collaborateur réserve lui-même",
      "Forte proportion de voyages internationaux (salons, clients, investisseurs)",
    ],
    recommendedCategories: ["self-booking-tool", "carte-corporate"],
    recommendedSolutions: [
      { slug: "travelperk", reason: "FlexiPerk + interface intuitive, parfait pour les startups" },
      { slug: "spendesk", reason: "Cartes virtuelles + pilotage des dépenses en temps réel" },
      { slug: "navan", reason: "Tout-en-un qui scale avec la croissance" },
    ],
    relevantComparisons: ["navan-vs-travelperk", "spendesk-vs-mooncard"],
    relevantGuides: ["indemnites-kilometriques-2026"],
    budgetTips: [
      "Utilisez FlexiPerk de TravelPerk pour annuler gratuitement jusqu'à 2h avant",
      "Privilégiez les cartes virtuelles pour contrôler les budgets par projet ou équipe",
      "Réservez en avance pour les salons et événements récurrents",
      "Optez pour des appart'hôtels pour les séjours > 3 nuits (30-50 % d'économies)",
    ],
    metaTitle: "Déplacements professionnels pour startups — Guide 2026",
    metaDescription:
      "Solutions de voyage d'affaires pour startups : self-booking, cartes virtuelles, flexibilité maximale. Comparatif pour optimiser vos déplacements sans alourdir les process.",
    faq: [
      {
        question: "Quelle solution de voyage d'affaires pour une startup ?",
        answer:
          "TravelPerk est le choix le plus populaire chez les startups grâce à son interface intuitive, FlexiPerk (annulation flexible) et l'absence de volume minimum. Spendesk complète bien avec ses cartes virtuelles pour les dépenses terrain.",
      },
      {
        question: "Comment gérer les voyages d'affaires dans une startup sans travel manager ?",
        answer:
          "Adoptez un outil de self-booking qui permet à chaque collaborateur de réserver en autonomie dans un cadre défini (politique voyage). Les validations se font via Slack ou email. Pas besoin de travel manager dédié sous 100 voyages/an.",
      },
      {
        question: "Quel budget voyage prévoir pour une startup ?",
        answer:
          "Comptez 500-2 000 €/voyage en moyenne (transport + hébergement). Pour une startup de 30 personnes avec 5-10 déplacements/mois, prévoyez 30 000-120 000 €/an. Un outil de self-booking permet d'économiser 15-20 %.",
      },
    ],
  },
  {
    slug: "cabinets-conseil",
    name: "Cabinets de conseil",
    description:
      "Les cabinets de conseil et d'audit ont des besoins spécifiques : missions longues chez le client, refacturation au projet et forte fréquence de déplacement.",
    icon: "Briefcase",
    employeeRange: "10 – 10 000+ salariés",
    travelFrequency: "200 – 50 000 voyages/an",
    annualBudget: "200 000 – 50 M€/an",
    challenges: [
      "Refacturation des frais par mission et par client",
      "Missions longues (semaines/mois) : besoin d'hébergement longue durée",
      "Taux d'occupation élevé : 4-5 jours/semaine en déplacement",
      "Gestion des per diem et des indemnités de grand déplacement",
    ],
    recommendedCategories: ["tmc", "notes-de-frais", "carte-corporate"],
    recommendedSolutions: [
      { slug: "sap-concur", reason: "Refacturation par projet/client et gestion des per diem" },
      { slug: "navan", reason: "Réservation rapide et intégration comptable" },
      { slug: "mooncard", reason: "Carte corporate avec affectation analytique automatique" },
    ],
    relevantComparisons: ["navan-vs-sap-concur", "spendesk-vs-mooncard"],
    relevantGuides: ["frais-de-deplacement-professionnel", "politique-voyage-entreprise"],
    budgetTips: [
      "Négociez des tarifs longue durée avec les résidences hôtelières (30-50 % vs hôtel classique)",
      "Mettez en place un système de refacturation automatique par code mission",
      "Utilisez les per diem forfaitaires pour simplifier la gestion des repas",
      "Privilégiez les abonnements train (carte Liberté TGV) pour les lignes fréquentes",
    ],
    metaTitle: "Déplacements professionnels pour cabinets de conseil — Guide 2026",
    metaDescription:
      "Solutions de travel management pour cabinets de conseil : TMC, refacturation par mission, hébergement longue durée. Optimisez vos déplacements consultants.",
    faq: [
      {
        question: "Comment gérer la refacturation des frais de déplacement en cabinet de conseil ?",
        answer:
          "Utilisez une TMC avec gestion par projet (SAP Concur, Navan) et affectez chaque dépense à un code mission/client. Les cartes corporate comme Mooncard permettent aussi l'affectation analytique automatique.",
      },
      {
        question: "Quel hébergement pour les missions longues en conseil ?",
        answer:
          "Pour les missions > 1 semaine, privilégiez les résidences hôtelières ou appart'hôtels (Adagio, Odalys City) : 30-50 % moins cher qu'un hôtel, avec cuisine équipée. Négociez des tarifs corporate à partir de 20 nuitées/mois.",
      },
      {
        question: "Comment calculer les per diem pour les consultants en mission ?",
        answer:
          "Les per diem couvrent forfaitairement les repas et frais divers. Le barème URSSAF 2026 fixe 20,70 € pour le repas. En grand déplacement (> 50 km, découcher), ajoutez l'indemnité de découcher. Votre TMC peut automatiser ce calcul.",
      },
    ],
  },
  {
    slug: "esn",
    name: "ESN & sociétés de services",
    description:
      "Les ESN (Entreprises de Services du Numérique) gèrent des missions longues en régie chez leurs clients avec des enjeux de rentabilité par projet.",
    icon: "Monitor",
    employeeRange: "50 – 5 000+ salariés",
    travelFrequency: "100 – 20 000 voyages/an",
    annualBudget: "100 000 – 20 M€/an",
    challenges: [
      "Consultants en régie : déplacements hebdomadaires récurrents",
      "Marge serrée par projet — le coût travel impacte directement la rentabilité",
      "Gestion des inter-contrats et des déplacements pour entretiens clients",
      "Multiplicité des clients et des sites de mission",
    ],
    recommendedCategories: ["self-booking-tool", "notes-de-frais", "carte-corporate"],
    recommendedSolutions: [
      { slug: "travelperk", reason: "Réservation autonome par les consultants, prix compétitifs" },
      { slug: "spendesk", reason: "Cartes virtuelles par projet/mission" },
      { slug: "mooncard", reason: "Affectation analytique automatique par code projet" },
    ],
    relevantComparisons: ["navan-vs-travelperk", "spendesk-vs-mooncard"],
    relevantGuides: ["indemnites-kilometriques-2026", "frais-de-deplacement-professionnel"],
    budgetTips: [
      "Abonnements train hebdomadaires pour les consultants en régie (carte Liberté)",
      "Colocation ou résidences partagées pour les missions multi-consultants sur un même site",
      "Réservez les mêmes trajets en récurrence pour bénéficier des meilleurs tarifs",
      "Facturez les frais de déplacement au client quand le contrat le permet",
    ],
    metaTitle: "Déplacements professionnels pour ESN — Solutions 2026",
    metaDescription:
      "Solutions de déplacement professionnel pour ESN et sociétés de services : self-booking, notes de frais par projet, cartes corporate. Optimisez la rentabilité de vos missions.",
    faq: [
      {
        question: "Comment optimiser les déplacements des consultants en régie ?",
        answer:
          "Centralisez les réservations via un outil de self-booking (TravelPerk, Navan) avec des règles par type de mission. Pour les régies longues, négociez des abonnements train et des tarifs hôtel longue durée.",
      },
      {
        question: "Comment refacturer les frais de déplacement au client en ESN ?",
        answer:
          "Utilisez un outil avec affectation par code projet (Mooncard, SAP Concur). Chaque dépense est automatiquement rattachée au bon projet pour la refacturation. Définissez dans vos contrats les plafonds de remboursement.",
      },
      {
        question: "Quel est le coût moyen de déplacement d'un consultant en régie ?",
        answer:
          "Pour un consultant en régie hebdomadaire (lundi-jeudi), comptez 400-700 €/semaine (train + hôtel + repas). Soit 1 600-2 800 €/mois. Ce coût impacte directement la marge du projet — d'où l'intérêt de l'optimiser.",
      },
    ],
  },
  {
    slug: "associations",
    name: "Associations & ONG",
    description:
      "Les associations et ONG ont des contraintes budgétaires fortes et des obligations de transparence sur l'utilisation des fonds pour les déplacements.",
    icon: "Heart",
    employeeRange: "5 – 500 salariés + bénévoles",
    travelFrequency: "20 – 500 voyages/an",
    annualBudget: "10 000 – 300 000 €/an",
    challenges: [
      "Budget très contraint — chaque euro dépensé doit être justifié",
      "Obligations de transparence vis-à-vis des donateurs et financeurs",
      "Mix salariés + bénévoles avec des droits différents",
      "Déplacements terrain souvent dans des zones mal desservies",
    ],
    recommendedCategories: ["self-booking-tool", "notes-de-frais"],
    recommendedSolutions: [
      { slug: "travelperk", reason: "Tarifs compétitifs et interface accessible pour les bénévoles" },
      { slug: "spendesk", reason: "Contrôle budgétaire strict et reporting transparent" },
    ],
    relevantComparisons: ["navan-vs-travelperk", "spendesk-vs-mooncard"],
    relevantGuides: ["indemnites-kilometriques-2026", "frais-de-deplacement-professionnel"],
    budgetTips: [
      "Utilisez les tarifs associatifs SNCF (-20 % sur les billets de groupe)",
      "Privilégiez le covoiturage et les véhicules de service pour les déplacements terrain",
      "Demandez des devis hôteliers avec tarifs préférentiels associations/ONG",
      "Documentez chaque dépense pour les rapports aux bailleurs de fonds",
    ],
    metaTitle: "Déplacements professionnels pour associations & ONG — Guide 2026",
    metaDescription:
      "Solutions de déplacement adaptées aux associations et ONG : budget contraint, transparence, mix salariés-bénévoles. Comparatif et conseils pour optimiser vos frais.",
    faq: [
      {
        question: "Quelle solution de déplacement pour une association ?",
        answer:
          "TravelPerk et Spendesk sont adaptés aux associations grâce à leurs tarifs accessibles et leur reporting transparent. Privilégiez les solutions avec contrôle budgétaire strict et validation pré-voyage pour maîtriser les coûts.",
      },
      {
        question: "Comment justifier les frais de déplacement auprès des financeurs ?",
        answer:
          "Utilisez un outil de notes de frais avec justificatifs dématérialisés et export comptable. Chaque dépense est tracée, horodatée et rattachée à un projet. Cela facilite les audits et les rapports aux bailleurs de fonds.",
      },
      {
        question: "Les bénévoles peuvent-ils être remboursés de leurs frais de déplacement ?",
        answer:
          "Oui, les bénévoles peuvent être remboursés de leurs frais réels ou via le barème kilométrique. Ils peuvent aussi renoncer au remboursement et bénéficier d'un reçu fiscal (66 % de déduction). Documentez le choix de chaque bénévole.",
      },
    ],
  },
  {
    slug: "secteur-public",
    name: "Secteur public",
    description:
      "Les administrations et collectivités sont soumises au code des marchés publics pour leurs solutions de déplacement, avec des barèmes réglementaires stricts.",
    icon: "Scale",
    employeeRange: "50 – 50 000+ agents",
    travelFrequency: "100 – 50 000 voyages/an",
    annualBudget: "100 000 – 50 M€/an",
    challenges: [
      "Respect du code des marchés publics pour le choix des prestataires",
      "Barèmes réglementaires stricts (indemnités de mission, nuitées)",
      "Circuit de validation hiérarchique obligatoire (ordre de mission)",
      "Interopérabilité avec Chorus et les systèmes comptables publics",
    ],
    recommendedCategories: ["tmc", "notes-de-frais"],
    recommendedSolutions: [
      { slug: "sap-concur", reason: "Interopérabilité Chorus et conformité marchés publics" },
      { slug: "navan", reason: "Modernisation des process avec interface accessible aux agents" },
    ],
    relevantComparisons: ["navan-vs-sap-concur"],
    relevantGuides: ["frais-de-deplacement-professionnel", "politique-voyage-entreprise"],
    budgetTips: [
      "Utilisez les marchés cadre interministériels pour les billets de train et d'avion",
      "Appliquez strictement les barèmes de remboursement (arrêté du 3 juillet 2006)",
      "Mutualisez les contrats hôteliers entre services d'une même collectivité",
      "Dématérialisez les ordres de mission pour accélérer les validations",
    ],
    metaTitle: "Déplacements professionnels secteur public — Guide 2026",
    metaDescription:
      "Solutions de déplacement pour le secteur public : marchés publics, barèmes réglementaires, Chorus. Guide pour administrations et collectivités territoriales.",
    faq: [
      {
        question: "Comment choisir une TMC dans le cadre d'un marché public ?",
        answer:
          "Le choix d'une TMC par une administration passe par un marché public (procédure adaptée ou appel d'offres selon le montant). Certains marchés cadre interministériels existent pour simplifier la procédure. Consultez la DAE ou votre direction des achats.",
      },
      {
        question: "Quels sont les barèmes de remboursement des frais de mission ?",
        answer:
          "Les barèmes sont fixés par arrêté : repas 17,50 € (métropole), nuitée 90 € (Paris) / 70 € (province). Ces montants sont des plafonds. L'agent doit fournir les justificatifs pour les frais d'hébergement.",
      },
      {
        question: "Faut-il un ordre de mission pour chaque déplacement ?",
        answer:
          "Oui, tout déplacement professionnel d'un agent public nécessite un ordre de mission signé par l'autorité hiérarchique. Il couvre l'agent en cas d'accident et autorise le remboursement des frais. La dématérialisation via une TMC simplifie ce process.",
      },
    ],
  },
];

const personasBySlug = new Map(personas.map((p) => [p.slug, p]));

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personasBySlug.get(slug);
}
