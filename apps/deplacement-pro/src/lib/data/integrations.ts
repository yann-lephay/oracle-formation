export interface Integration {
  slug: string;
  solutionSlug: string;
  toolName: string;
  toolSlug: string;
  title: string;
  description: string;
  integrationLevel: "native" | "api" | "connecteur";
  features: string[];
  setupSteps: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const integrations: Integration[] = [
  // ── Navan ──────────────────────────────────────────────
  {
    slug: "navan-sap",
    solutionSlug: "navan",
    toolName: "SAP",
    toolSlug: "sap",
    title: "Navan + SAP",
    description:
      "L'intégration Navan + SAP permet de synchroniser automatiquement les données de voyages et de dépenses professionnelles avec votre ERP SAP. Les réservations, notes de frais et écritures comptables remontent en temps réel dans SAP, éliminant la double saisie et accélérant les clôtures mensuelles. Cette intégration native est particulièrement adaptée aux ETI et grands comptes déjà équipés de SAP S/4HANA ou SAP ECC.",
    integrationLevel: "native",
    features: [
      "Synchronisation automatique des réservations vers SAP",
      "Export des notes de frais au format SAP natif",
      "Mapping personnalisable des centres de coûts",
      "Réconciliation automatique des écritures comptables",
      "Synchronisation des référentiels collaborateurs depuis SAP HR",
    ],
    setupSteps: [
      "Connecter votre instance SAP via le portail d'administration Navan",
      "Configurer le mapping des centres de coûts et axes analytiques",
      "Synchroniser le référentiel collaborateurs depuis SAP HR",
      "Tester l'export comptable sur un échantillon de transactions",
      "Activer la synchronisation automatique en production",
    ],
    metaTitle: "Intégration Navan + SAP — Synchronisation ERP Automatique",
    metaDescription:
      "Comment connecter Navan à SAP : synchronisation des voyages, notes de frais et comptabilité. Guide de configuration étape par étape.",
    faq: [
      {
        question: "L'intégration Navan + SAP est-elle native ?",
        answer:
          "Oui, Navan propose une intégration native avec SAP S/4HANA et SAP ECC. La connexion se fait via API certifiée SAP, sans middleware tiers nécessaire.",
      },
      {
        question: "Quelles données sont synchronisées entre Navan et SAP ?",
        answer:
          "Les réservations de voyages, les notes de frais, les écritures comptables, les centres de coûts et le référentiel collaborateurs sont synchronisés automatiquement.",
      },
      {
        question: "Combien de temps prend la mise en place ?",
        answer:
          "La mise en place de l'intégration Navan + SAP prend en moyenne 2 à 4 semaines, selon la complexité de votre configuration SAP et le nombre d'axes analytiques.",
      },
    ],
  },
  {
    slug: "navan-slack",
    solutionSlug: "navan",
    toolName: "Slack",
    toolSlug: "slack",
    title: "Navan + Slack",
    description:
      "L'intégration Navan + Slack permet de gérer les approbations de voyages et de recevoir des notifications directement dans Slack. Les managers peuvent valider les demandes de réservation en un clic, et les voyageurs reçoivent leurs confirmations et alertes en temps réel. Cette intégration simplifie le workflow d'approbation et réduit les délais de validation.",
    integrationLevel: "native",
    features: [
      "Notifications de demandes d'approbation dans Slack",
      "Validation des réservations en un clic depuis Slack",
      "Alertes de changement de vol ou d'itinéraire",
      "Rappels automatiques pour les justificatifs manquants",
      "Résumé hebdomadaire des dépenses par équipe",
    ],
    setupSteps: [
      "Installer l'application Navan depuis le Slack App Directory",
      "Autoriser la connexion avec votre compte Navan administrateur",
      "Configurer les canaux de notification par équipe ou service",
      "Définir les règles d'approbation (montants, catégories)",
      "Tester avec une demande de réservation pilote",
    ],
    metaTitle: "Intégration Navan + Slack — Approbations et Notifications",
    metaDescription:
      "Connecter Navan à Slack : approbations de voyages en un clic, notifications en temps réel. Guide d'installation et configuration.",
    faq: [
      {
        question: "Peut-on approuver une réservation directement dans Slack ?",
        answer:
          "Oui, les managers reçoivent une notification interactive dans Slack et peuvent approuver ou refuser une demande de réservation en un clic, sans quitter Slack.",
      },
      {
        question: "Quels types de notifications Navan envoie-t-il dans Slack ?",
        answer:
          "Navan envoie les demandes d'approbation, les confirmations de réservation, les alertes de modification d'itinéraire, les rappels de justificatifs et les résumés de dépenses.",
      },
      {
        question: "L'intégration fonctionne-t-elle avec Microsoft Teams ?",
        answer:
          "Oui, Navan propose également une intégration similaire avec Microsoft Teams pour les entreprises qui utilisent l'écosystème Microsoft.",
      },
    ],
  },
  {
    slug: "navan-workday",
    solutionSlug: "navan",
    toolName: "Workday",
    toolSlug: "workday",
    title: "Navan + Workday",
    description:
      "L'intégration Navan + Workday connecte votre plateforme de voyages d'affaires à votre SIRH Workday. Les données collaborateurs, les hiérarchies managériales et les centres de coûts sont synchronisés automatiquement, garantissant que les politiques de voyage s'appliquent correctement selon le profil de chaque employé. Les dépenses validées remontent directement dans Workday Financial Management.",
    integrationLevel: "api",
    features: [
      "Synchronisation automatique du référentiel collaborateurs",
      "Import des hiérarchies managériales pour les approbations",
      "Mapping des centres de coûts Workday",
      "Export des dépenses vers Workday Financial Management",
      "Mise à jour automatique lors des arrivées/départs",
    ],
    setupSteps: [
      "Générer un compte d'intégration (ISU) dans Workday",
      "Configurer le connecteur Workday dans le portail Navan",
      "Mapper les champs collaborateurs (département, manager, cost center)",
      "Planifier la synchronisation automatique (quotidienne recommandée)",
      "Valider les flux de données sur un périmètre test",
    ],
    metaTitle: "Intégration Navan + Workday — Synchronisation SIRH Automatique",
    metaDescription:
      "Connecter Navan à Workday : synchronisation collaborateurs, approbations, dépenses. Guide de configuration pour ETI et grands comptes.",
    faq: [
      {
        question: "Quelles données Workday sont synchronisées avec Navan ?",
        answer:
          "Les données collaborateurs (nom, email, département), les hiérarchies managériales, les centres de coûts et les informations financières sont synchronisés automatiquement depuis Workday vers Navan.",
      },
      {
        question: "La synchronisation est-elle bidirectionnelle ?",
        answer:
          "La synchronisation des collaborateurs se fait de Workday vers Navan. Les dépenses et données de voyage remontent de Navan vers Workday Financial Management.",
      },
      {
        question: "Faut-il un module Workday spécifique ?",
        answer:
          "L'intégration de base nécessite Workday HCM. Pour l'export des dépenses, Workday Financial Management est requis. L'API Workday doit être activée.",
      },
    ],
  },

  // ── TravelPerk ─────────────────────────────────────────
  {
    slug: "travelperk-slack",
    solutionSlug: "travelperk",
    toolName: "Slack",
    toolSlug: "slack",
    title: "TravelPerk + Slack",
    description:
      "L'intégration TravelPerk + Slack centralise la communication autour des voyages d'affaires directement dans votre espace Slack. Les collaborateurs reçoivent des notifications de réservation, les managers valident les demandes et l'équipe Travel suit les dépenses en temps réel. Le bot TravelPerk permet même de lancer une recherche de voyage depuis Slack.",
    integrationLevel: "native",
    features: [
      "Bot de recherche de voyages dans Slack",
      "Notifications de réservation et de modification",
      "Workflow d'approbation via Slack",
      "Alertes budgétaires par canal",
      "Partage automatique des itinéraires avec l'équipe",
    ],
    setupSteps: [
      "Installer l'app TravelPerk depuis le Slack Marketplace",
      "Connecter votre compte administrateur TravelPerk",
      "Choisir les canaux de notification (général, par équipe)",
      "Configurer les préférences de notification",
      "Former les équipes à l'utilisation du bot de recherche",
    ],
    metaTitle: "Intégration TravelPerk + Slack — Bot Voyage et Notifications",
    metaDescription:
      "Connecter TravelPerk à Slack : bot de réservation, approbations, notifications en temps réel. Guide d'installation rapide.",
    faq: [
      {
        question: "Peut-on réserver un voyage depuis Slack avec TravelPerk ?",
        answer:
          "Oui, le bot TravelPerk permet de lancer une recherche de vols, trains ou hôtels directement depuis Slack. La réservation finale se fait sur la plateforme TravelPerk pour un paiement sécurisé.",
      },
      {
        question: "Les approbations se font-elles dans Slack ?",
        answer:
          "Oui, les managers reçoivent les demandes d'approbation sous forme de message interactif dans Slack et peuvent approuver ou refuser en un clic.",
      },
      {
        question: "L'intégration est-elle disponible sur le plan gratuit ?",
        answer:
          "L'intégration Slack de base est disponible sur tous les plans TravelPerk, y compris le plan gratuit. Certaines fonctionnalités avancées (approbations, alertes budgétaires) nécessitent un plan payant.",
      },
    ],
  },
  {
    slug: "travelperk-expensify",
    solutionSlug: "travelperk",
    toolName: "Expensify",
    toolSlug: "expensify",
    title: "TravelPerk + Expensify",
    description:
      "L'intégration TravelPerk + Expensify connecte votre plateforme de réservation de voyages à votre outil de gestion des notes de frais. Les dépenses de voyage (vols, hôtels, trains) sont automatiquement importées dans Expensify, éliminant la saisie manuelle. Les justificatifs sont transférés et les catégories de dépenses sont pré-remplies selon vos règles.",
    integrationLevel: "api",
    features: [
      "Import automatique des dépenses de voyage dans Expensify",
      "Transfert des justificatifs de réservation",
      "Catégorisation automatique des dépenses voyage",
      "Rapprochement automatique réservation/dépense",
      "Export consolidé pour la comptabilité",
    ],
    setupSteps: [
      "Activer l'intégration Expensify dans les paramètres TravelPerk",
      "Générer une clé API Expensify et la renseigner dans TravelPerk",
      "Mapper les catégories de dépenses TravelPerk vers Expensify",
      "Configurer les règles de transfert automatique",
      "Vérifier sur une réservation test que l'import fonctionne",
    ],
    metaTitle: "Intégration TravelPerk + Expensify — Notes de Frais Automatiques",
    metaDescription:
      "Connecter TravelPerk à Expensify : import automatique des dépenses de voyage, justificatifs, catégorisation. Guide de mise en place.",
    faq: [
      {
        question: "Les dépenses TravelPerk remontent-elles automatiquement dans Expensify ?",
        answer:
          "Oui, chaque réservation validée dans TravelPerk génère automatiquement une entrée dans Expensify avec le montant, la catégorie et le justificatif attaché.",
      },
      {
        question: "Faut-il un plan spécifique d'Expensify ?",
        answer:
          "L'intégration nécessite un plan Expensify Collect ou Control. Le plan gratuit d'Expensify ne donne pas accès aux intégrations API.",
      },
      {
        question: "Peut-on personnaliser les catégories de dépenses ?",
        answer:
          "Oui, le mapping des catégories est entièrement configurable. Vous pouvez associer chaque type de réservation TravelPerk (vol, hôtel, train) à la catégorie Expensify de votre choix.",
      },
    ],
  },
  {
    slug: "travelperk-sage",
    solutionSlug: "travelperk",
    toolName: "Sage",
    toolSlug: "sage",
    title: "TravelPerk + Sage",
    description:
      "L'intégration TravelPerk + Sage automatise l'export des données de voyages d'affaires vers votre logiciel comptable Sage. Les factures de réservation, les écritures de dépenses et les ventilations analytiques sont transmises automatiquement, simplifiant la clôture comptable et réduisant les erreurs de saisie. Compatible avec Sage 100, Sage X3 et Sage Business Cloud.",
    integrationLevel: "connecteur",
    features: [
      "Export automatique des factures de voyage vers Sage",
      "Ventilation analytique par centre de coûts",
      "Réconciliation automatique des paiements",
      "Support multi-sociétés",
      "Compatible Sage 100, Sage X3 et Sage Business Cloud",
    ],
    setupSteps: [
      "Installer le connecteur TravelPerk pour Sage depuis le marketplace",
      "Configurer la connexion à votre instance Sage (identifiants API)",
      "Mapper le plan comptable et les axes analytiques",
      "Définir la fréquence d'export (temps réel ou batch quotidien)",
      "Valider les écritures sur une période test",
    ],
    metaTitle: "Intégration TravelPerk + Sage — Export Comptable Automatique",
    metaDescription:
      "Connecter TravelPerk à Sage : export automatique des voyages, écritures comptables, ventilation analytique. Guide pour Sage 100 et X3.",
    faq: [
      {
        question: "Quelles versions de Sage sont compatibles avec TravelPerk ?",
        answer:
          "TravelPerk est compatible avec Sage 100 (via connecteur), Sage X3 (via API) et Sage Business Cloud (intégration native). Contactez TravelPerk pour vérifier la compatibilité avec votre version exacte.",
      },
      {
        question: "L'export comptable est-il automatique ?",
        answer:
          "Oui, une fois configuré, l'export des écritures comptables vers Sage peut être automatisé en temps réel ou en batch quotidien selon vos préférences.",
      },
      {
        question: "Peut-on personnaliser le plan comptable ?",
        answer:
          "Oui, le mapping du plan comptable est entièrement configurable. Vous pouvez associer chaque type de dépense à un compte et des axes analytiques spécifiques.",
      },
    ],
  },

  // ── Mooncard ───────────────────────────────────────────
  {
    slug: "mooncard-sage",
    solutionSlug: "mooncard",
    toolName: "Sage",
    toolSlug: "sage",
    title: "Mooncard + Sage",
    description:
      "L'intégration Mooncard + Sage est l'une des plus utilisées par les PME et cabinets comptables français. Chaque transaction effectuée avec la carte Mooncard est automatiquement catégorisée, enrichie du justificatif et exportée vers Sage sous forme d'écriture comptable. La TVA est ventilée automatiquement. Compatible avec Sage 50, Sage 100 et Sage Business Cloud.",
    integrationLevel: "native",
    features: [
      "Export automatique des écritures comptables vers Sage",
      "Ventilation automatique de la TVA",
      "Récupération et archivage légal des justificatifs",
      "Mapping personnalisable du plan comptable",
      "Support Sage 50, Sage 100 et Sage Business Cloud",
    ],
    setupSteps: [
      "Activer l'intégration Sage depuis le tableau de bord Mooncard",
      "Sélectionner votre version de Sage et renseigner les identifiants",
      "Importer ou configurer votre plan comptable dans Mooncard",
      "Définir les règles de catégorisation automatique",
      "Lancer un export test et vérifier les écritures dans Sage",
    ],
    metaTitle: "Intégration Mooncard + Sage — Comptabilité Automatique",
    metaDescription:
      "Connecter Mooncard à Sage : export automatique, TVA, justificatifs. Guide pour Sage 50, Sage 100 et Business Cloud.",
    faq: [
      {
        question: "L'intégration Mooncard + Sage est-elle gratuite ?",
        answer:
          "L'intégration Sage est incluse dans tous les plans Mooncard, sans surcoût. Le connecteur est maintenu et mis à jour par Mooncard.",
      },
      {
        question: "La TVA est-elle gérée automatiquement ?",
        answer:
          "Oui, Mooncard identifie automatiquement le taux de TVA applicable à chaque transaction et ventile les montants HT/TVA/TTC dans les écritures exportées vers Sage.",
      },
      {
        question: "Quelles versions de Sage sont supportées ?",
        answer:
          "Mooncard supporte Sage 50, Sage 100 et Sage Business Cloud. L'export se fait au format natif Sage, sans transformation manuelle nécessaire.",
      },
    ],
  },
  {
    slug: "mooncard-cegid",
    solutionSlug: "mooncard",
    toolName: "Cegid",
    toolSlug: "cegid",
    title: "Mooncard + Cegid",
    description:
      "L'intégration Mooncard + Cegid permet aux entreprises utilisant les solutions comptables Cegid (Loop, Quadra, Expert) de recevoir automatiquement les écritures de dépenses depuis les cartes Mooncard. Les transactions sont catégorisées, la TVA est ventilée et les justificatifs sont archivés conformément aux obligations légales. Idéale pour les cabinets d'expertise comptable.",
    integrationLevel: "native",
    features: [
      "Export automatique vers Cegid Loop, Quadra et Expert",
      "Format d'écriture natif Cegid",
      "Ventilation TVA automatique",
      "Archivage à valeur probante des justificatifs",
      "Réconciliation bancaire automatique",
    ],
    setupSteps: [
      "Sélectionner Cegid comme logiciel comptable dans Mooncard",
      "Choisir la version Cegid utilisée (Loop, Quadra, Expert)",
      "Configurer le format d'export et le plan comptable",
      "Mapper les journaux et comptes auxiliaires",
      "Tester l'import d'un lot d'écritures dans Cegid",
    ],
    metaTitle: "Intégration Mooncard + Cegid — Export Comptable Natif",
    metaDescription:
      "Connecter Mooncard à Cegid : export automatique des dépenses, TVA, justificatifs. Compatible Cegid Loop, Quadra et Expert.",
    faq: [
      {
        question: "Quelles versions de Cegid sont compatibles ?",
        answer:
          "Mooncard est compatible avec Cegid Loop, Cegid Quadra et Cegid Expert. Le format d'export s'adapte automatiquement à la version sélectionnée.",
      },
      {
        question: "L'intégration est-elle adaptée aux cabinets comptables ?",
        answer:
          "Oui, Mooncard est utilisé par de nombreux cabinets d'expertise comptable. L'intégration Cegid permet de traiter les dépenses de plusieurs clients depuis une seule interface.",
      },
      {
        question: "Les justificatifs sont-ils archivés légalement ?",
        answer:
          "Oui, Mooncard propose un archivage à valeur probante certifié conforme aux normes NF Z42-013 et au Code général des impôts, directement accessible depuis Cegid.",
      },
    ],
  },
  {
    slug: "mooncard-pennylane",
    solutionSlug: "mooncard",
    toolName: "Pennylane",
    toolSlug: "pennylane",
    title: "Mooncard + Pennylane",
    description:
      "L'intégration Mooncard + Pennylane connecte la carte corporate Mooncard à la plateforme de comptabilité collaborative Pennylane. Les transactions sont synchronisées en temps réel, les justificatifs sont automatiquement rapprochés et les écritures comptables sont pré-générées. Une combinaison populaire chez les startups et PME françaises qui utilisent Pennylane comme outil comptable principal.",
    integrationLevel: "native",
    features: [
      "Synchronisation des transactions en temps réel",
      "Rapprochement automatique des justificatifs",
      "Pré-génération des écritures comptables",
      "Catégorisation intelligente des dépenses",
      "Collaboration comptable en temps réel avec l'expert-comptable",
    ],
    setupSteps: [
      "Connecter votre compte Mooncard depuis les paramètres Pennylane",
      "Autoriser le partage de données entre les deux plateformes",
      "Vérifier le mapping automatique des catégories de dépenses",
      "Inviter votre expert-comptable sur l'espace Pennylane",
      "Valider la synchronisation sur les premières transactions",
    ],
    metaTitle: "Intégration Mooncard + Pennylane — Comptabilité en Temps Réel",
    metaDescription:
      "Connecter Mooncard à Pennylane : synchronisation temps réel, rapprochement automatique, collaboration comptable. Guide pour PME et startups.",
    faq: [
      {
        question: "La synchronisation est-elle en temps réel ?",
        answer:
          "Oui, chaque transaction Mooncard est synchronisée dans Pennylane en quasi temps réel (délai de quelques minutes), avec le justificatif et la catégorisation automatique.",
      },
      {
        question: "Mon expert-comptable peut-il accéder aux données ?",
        answer:
          "Oui, Pennylane permet d'inviter votre expert-comptable qui aura accès aux écritures Mooncard, aux justificatifs et pourra valider ou ajuster les imputations comptables.",
      },
      {
        question: "Cette intégration est-elle adaptée aux startups ?",
        answer:
          "Oui, la combinaison Mooncard + Pennylane est très populaire chez les startups françaises grâce à sa simplicité de mise en place et son modèle tarifaire accessible.",
      },
    ],
  },

  // ── Spendesk ───────────────────────────────────────────
  {
    slug: "spendesk-sage",
    solutionSlug: "spendesk",
    toolName: "Sage",
    toolSlug: "sage",
    title: "Spendesk + Sage",
    description:
      "L'intégration Spendesk + Sage automatise le transfert des dépenses d'entreprise vers votre comptabilité Sage. Les achats par carte, les notes de frais et les factures fournisseurs gérés dans Spendesk sont exportés sous forme d'écritures comptables prêtes à l'import. La pré-comptabilité de Spendesk réduit de 80 % le temps de clôture mensuelle.",
    integrationLevel: "native",
    features: [
      "Export automatique des écritures vers Sage",
      "Pré-comptabilité intégrée avec affectation analytique",
      "Réconciliation bancaire automatique",
      "Support des notes de frais et factures fournisseurs",
      "Compatible Sage 100 et Sage Business Cloud",
    ],
    setupSteps: [
      "Activer le module Sage dans les intégrations Spendesk",
      "Sélectionner votre version Sage et configurer la connexion",
      "Importer votre plan comptable et vos axes analytiques",
      "Configurer les règles d'affectation automatique",
      "Tester l'export sur un mois de transactions",
    ],
    metaTitle: "Intégration Spendesk + Sage — Pré-Comptabilité Automatisée",
    metaDescription:
      "Connecter Spendesk à Sage : pré-comptabilité, export automatique, réconciliation. Guide pour Sage 100 et Business Cloud.",
    faq: [
      {
        question: "Spendesk peut-il remplacer la saisie comptable dans Sage ?",
        answer:
          "En grande partie oui. La pré-comptabilité de Spendesk génère des écritures complètes (compte, tiers, analytique, TVA) qui sont importées directement dans Sage sans saisie manuelle.",
      },
      {
        question: "Les factures fournisseurs sont-elles incluses ?",
        answer:
          "Oui, Spendesk gère les factures fournisseurs en plus des cartes et notes de frais. Toutes ces dépenses sont exportées vers Sage via le même connecteur.",
      },
      {
        question: "Quel gain de temps peut-on espérer ?",
        answer:
          "Les entreprises utilisant l'intégration Spendesk + Sage rapportent une réduction de 80 % du temps de clôture mensuelle grâce à l'automatisation de la pré-comptabilité.",
      },
    ],
  },
  {
    slug: "spendesk-netsuite",
    solutionSlug: "spendesk",
    toolName: "NetSuite",
    toolSlug: "netsuite",
    title: "Spendesk + NetSuite",
    description:
      "L'intégration Spendesk + NetSuite connecte la plateforme de gestion des dépenses à l'ERP cloud Oracle NetSuite. Les transactions (cartes, notes de frais, factures) sont exportées automatiquement vers NetSuite avec le bon plan comptable, les dimensions analytiques et les justificatifs. Adaptée aux ETI en forte croissance qui utilisent NetSuite comme ERP principal.",
    integrationLevel: "api",
    features: [
      "Export automatique des dépenses vers NetSuite",
      "Mapping des dimensions analytiques (classe, département, localisation)",
      "Synchronisation du référentiel fournisseurs",
      "Gestion multi-filiales et multi-devises",
      "Réconciliation bancaire croisée",
    ],
    setupSteps: [
      "Créer un rôle d'intégration dans NetSuite avec les permissions requises",
      "Configurer le connecteur NetSuite dans les paramètres Spendesk",
      "Mapper les dimensions analytiques (classes, départements, localisations)",
      "Synchroniser le plan comptable et le référentiel fournisseurs",
      "Tester l'export sur un échantillon de transactions multi-devises",
    ],
    metaTitle: "Intégration Spendesk + NetSuite — Export ERP Cloud Automatique",
    metaDescription:
      "Connecter Spendesk à Oracle NetSuite : export des dépenses, dimensions analytiques, multi-devises. Guide de configuration pour ETI.",
    faq: [
      {
        question: "L'intégration gère-t-elle le multi-devises ?",
        answer:
          "Oui, Spendesk gère les transactions multi-devises et les convertit automatiquement selon les taux de change configurés dans NetSuite lors de l'export.",
      },
      {
        question: "Faut-il un module NetSuite spécifique ?",
        answer:
          "L'intégration fonctionne avec NetSuite ERP standard. Le module SuiteBilling n'est pas requis. Les Token-Based Authentication (TBA) doivent être activés.",
      },
      {
        question: "Le multi-filiales est-il supporté ?",
        answer:
          "Oui, Spendesk peut exporter les dépenses vers plusieurs subsidiaries NetSuite, avec un mapping indépendant par filiale.",
      },
    ],
  },
  {
    slug: "spendesk-xero",
    solutionSlug: "spendesk",
    toolName: "Xero",
    toolSlug: "xero",
    title: "Spendesk + Xero",
    description:
      "L'intégration Spendesk + Xero simplifie la comptabilité des PME en synchronisant automatiquement les dépenses (cartes, notes de frais, factures) vers le logiciel comptable cloud Xero. Les écritures sont pré-catégorisées, la TVA est calculée et les justificatifs sont attachés. Idéale pour les PME internationales qui utilisent Xero.",
    integrationLevel: "native",
    features: [
      "Synchronisation automatique des dépenses vers Xero",
      "Catégorisation automatique selon le plan comptable Xero",
      "Calcul et ventilation de la TVA",
      "Attachement des justificatifs aux transactions Xero",
      "Réconciliation bancaire automatique dans Xero",
    ],
    setupSteps: [
      "Connecter votre compte Xero depuis les paramètres Spendesk",
      "Autoriser l'accès Spendesk à votre organisation Xero",
      "Vérifier le mapping automatique du plan comptable",
      "Configurer les règles de TVA par catégorie de dépense",
      "Tester la synchronisation sur les dernières transactions",
    ],
    metaTitle: "Intégration Spendesk + Xero — Comptabilité Cloud Synchronisée",
    metaDescription:
      "Connecter Spendesk à Xero : synchronisation des dépenses, TVA, justificatifs. Guide de mise en place pour PME internationales.",
    faq: [
      {
        question: "La synchronisation Spendesk → Xero est-elle automatique ?",
        answer:
          "Oui, une fois configurée, la synchronisation est automatique. Chaque dépense validée dans Spendesk est envoyée vers Xero dans les minutes qui suivent.",
      },
      {
        question: "Les justificatifs sont-ils visibles dans Xero ?",
        answer:
          "Oui, les justificatifs (photos de reçus, factures PDF) sont automatiquement attachés aux transactions correspondantes dans Xero.",
      },
      {
        question: "L'intégration gère-t-elle plusieurs devises ?",
        answer:
          "Oui, Spendesk synchronise les transactions multi-devises vers Xero avec le taux de change appliqué au moment de la transaction.",
      },
    ],
  },

  // ── SAP Concur ─────────────────────────────────────────
  {
    slug: "sap-concur-sap-s4hana",
    solutionSlug: "sap-concur",
    toolName: "SAP S/4HANA",
    toolSlug: "sap-s4hana",
    title: "SAP Concur + SAP S/4HANA",
    description:
      "L'intégration SAP Concur + SAP S/4HANA est la connexion de référence pour les grandes entreprises qui exploitent l'écosystème SAP de bout en bout. Les notes de frais, réservations de voyages et factures traitées dans Concur sont automatiquement intégrées dans S/4HANA : comptabilité financière (FI), contrôle de gestion (CO) et gestion des achats (MM). Cette intégration native certifiée SAP garantit une cohérence totale des données.",
    integrationLevel: "native",
    features: [
      "Intégration certifiée SAP de bout en bout",
      "Export vers les modules FI, CO et MM de S/4HANA",
      "Synchronisation bidirectionnelle des données maîtres",
      "Gestion des workflows d'approbation alignés sur SAP",
      "Audit trail complet et conformité",
    ],
    setupSteps: [
      "Activer le connecteur SAP S/4HANA dans SAP Concur",
      "Configurer la connexion SAP Cloud Connector ou direct RFC",
      "Mapper les données maîtres (collaborateurs, centres de coûts, comptes)",
      "Configurer les flux FI/CO/MM selon vos processus",
      "Réaliser un test d'intégration complet sur un périmètre pilote",
    ],
    metaTitle: "Intégration SAP Concur + SAP S/4HANA — Écosystème SAP Natif",
    metaDescription:
      "Connecter SAP Concur à S/4HANA : intégration native FI/CO/MM, données maîtres, audit trail. Guide pour grandes entreprises.",
    faq: [
      {
        question: "L'intégration est-elle certifiée par SAP ?",
        answer:
          "Oui, SAP Concur étant une filiale de SAP, l'intégration avec S/4HANA est native et certifiée. C'est la connexion la plus profonde disponible sur le marché pour la gestion des frais professionnels.",
      },
      {
        question: "Quels modules S/4HANA sont concernés ?",
        answer:
          "L'intégration couvre les modules FI (comptabilité financière), CO (contrôle de gestion) et MM (gestion des achats). Les données de voyage alimentent aussi le module HR si configuré.",
      },
      {
        question: "Quel est le délai de mise en place ?",
        answer:
          "Pour une intégration complète SAP Concur + S/4HANA, comptez 3 à 6 mois selon la complexité de votre paysage SAP et le nombre de modules activés.",
      },
    ],
  },
  {
    slug: "sap-concur-workday",
    solutionSlug: "sap-concur",
    toolName: "Workday",
    toolSlug: "workday",
    title: "SAP Concur + Workday",
    description:
      "L'intégration SAP Concur + Workday connecte la suite de gestion des voyages et frais au SIRH Workday. Le référentiel collaborateurs, les hiérarchies managériales et les centres de coûts sont synchronisés pour alimenter les workflows d'approbation Concur. Les dépenses validées sont exportées vers Workday Financial Management. Idéale pour les grandes entreprises utilisant Workday comme SIRH principal.",
    integrationLevel: "api",
    features: [
      "Synchronisation du référentiel collaborateurs Workday → Concur",
      "Import des hiérarchies d'approbation",
      "Mapping automatique des centres de coûts",
      "Export des dépenses vers Workday Financial Management",
      "Gestion des onboarding/offboarding automatique",
    ],
    setupSteps: [
      "Créer un Integration System User (ISU) dans Workday",
      "Configurer le connecteur Workday dans SAP Concur",
      "Mapper les champs collaborateurs et les centres de coûts",
      "Configurer l'export des dépenses vers Workday Financial Management",
      "Tester le cycle complet : création collaborateur → réservation → export",
    ],
    metaTitle: "Intégration SAP Concur + Workday — SIRH et Frais Synchronisés",
    metaDescription:
      "Connecter SAP Concur à Workday : synchronisation collaborateurs, approbations, export dépenses. Guide pour grandes entreprises.",
    faq: [
      {
        question: "La synchronisation des collaborateurs est-elle automatique ?",
        answer:
          "Oui, les nouveaux collaborateurs créés dans Workday sont automatiquement provisionnés dans SAP Concur avec leurs attributs (département, manager, centre de coûts). Les départs sont également gérés automatiquement.",
      },
      {
        question: "Les approbations Concur suivent-elles la hiérarchie Workday ?",
        answer:
          "Oui, les workflows d'approbation dans SAP Concur peuvent être configurés pour suivre la hiérarchie managériale définie dans Workday.",
      },
      {
        question: "Faut-il Workday Financial Management ?",
        answer:
          "Le module HCM suffit pour la synchronisation des collaborateurs. Workday Financial Management est nécessaire pour l'export automatique des dépenses validées.",
      },
    ],
  },
  {
    slug: "sap-concur-salesforce",
    solutionSlug: "sap-concur",
    toolName: "Salesforce",
    toolSlug: "salesforce",
    title: "SAP Concur + Salesforce",
    description:
      "L'intégration SAP Concur + Salesforce permet de rattacher les dépenses de voyage aux opportunités commerciales et aux comptes clients dans Salesforce. Les commerciaux peuvent associer leurs frais de déplacement à un deal, offrant une vision complète du coût d'acquisition client. Les rapports Salesforce intègrent les données de dépenses pour un ROI précis par client.",
    integrationLevel: "connecteur",
    features: [
      "Association des dépenses aux opportunités Salesforce",
      "Rapports de coût d'acquisition client intégrant les frais de voyage",
      "Synchronisation des comptes clients entre Concur et Salesforce",
      "Dashboard de suivi des dépenses commerciales",
      "Workflow d'approbation basé sur la valeur de l'opportunité",
    ],
    setupSteps: [
      "Installer le package SAP Concur depuis Salesforce AppExchange",
      "Configurer la connexion OAuth entre Concur et Salesforce",
      "Mapper les comptes clients et les opportunités",
      "Configurer les règles d'association automatique des dépenses",
      "Former les commerciaux à l'association dépense/opportunité",
    ],
    metaTitle: "Intégration SAP Concur + Salesforce — ROI Commercial et Frais",
    metaDescription:
      "Connecter SAP Concur à Salesforce : association dépenses/opportunités, coût d'acquisition, reporting. Guide pour équipes commerciales.",
    faq: [
      {
        question: "Comment les dépenses sont-elles rattachées aux opportunités ?",
        answer:
          "Les commerciaux peuvent associer chaque note de frais à une opportunité Salesforce lors de la saisie dans Concur. L'association peut aussi être automatique sur la base du compte client.",
      },
      {
        question: "Quels rapports Salesforce sont enrichis ?",
        answer:
          "Les rapports d'opportunité, de compte et de pipeline intègrent les coûts de déplacement. Vous obtenez ainsi le coût d'acquisition réel, incluant les frais de voyage commerciaux.",
      },
      {
        question: "L'intégration nécessite-t-elle un développement custom ?",
        answer:
          "Non, le package AppExchange propose une configuration guidée. Des personnalisations sont possibles via Salesforce Flow pour des règles d'association avancées.",
      },
    ],
  },

  // ── Expensya ───────────────────────────────────────────
  {
    slug: "expensya-sage",
    solutionSlug: "expensya",
    toolName: "Sage",
    toolSlug: "sage",
    title: "Expensya + Sage",
    description:
      "L'intégration Expensya + Sage permet d'exporter automatiquement les notes de frais validées vers votre logiciel comptable Sage. Les écritures sont générées au format natif Sage, avec ventilation TVA et affectation analytique. Très populaire auprès des PME françaises, cette intégration élimine la ressaisie et accélère la clôture mensuelle.",
    integrationLevel: "native",
    features: [
      "Export automatique des notes de frais vers Sage",
      "Format d'écriture natif Sage (pas de transformation)",
      "Ventilation automatique de la TVA par taux",
      "Affectation analytique (centres de coûts, projets)",
      "Compatible Sage 50, Sage 100 et Sage Business Cloud",
    ],
    setupSteps: [
      "Sélectionner Sage comme logiciel comptable dans Expensya",
      "Choisir votre version de Sage et renseigner les paramètres de connexion",
      "Importer votre plan comptable dans Expensya",
      "Configurer les règles de ventilation TVA",
      "Tester l'export sur un lot de notes de frais validées",
    ],
    metaTitle: "Intégration Expensya + Sage — Export Notes de Frais Automatique",
    metaDescription:
      "Connecter Expensya à Sage : export automatique des notes de frais, TVA, analytique. Guide pour Sage 50, 100 et Business Cloud.",
    faq: [
      {
        question: "Quelles versions de Sage sont supportées par Expensya ?",
        answer:
          "Expensya supporte Sage 50, Sage 100 et Sage Business Cloud. L'export se fait au format natif de chaque version, sans conversion manuelle nécessaire.",
      },
      {
        question: "La TVA est-elle gérée automatiquement ?",
        answer:
          "Oui, Expensya ventile automatiquement la TVA par taux (20 %, 10 %, 5,5 %) sur chaque note de frais. Les montants HT, TVA et TTC sont exportés séparément vers Sage.",
      },
      {
        question: "Combien de temps prend la mise en place ?",
        answer:
          "La mise en place de l'intégration Expensya + Sage prend en moyenne 1 à 2 jours ouvrés, incluant l'import du plan comptable et les tests d'export.",
      },
    ],
  },
  {
    slug: "expensya-cegid",
    solutionSlug: "expensya",
    toolName: "Cegid",
    toolSlug: "cegid",
    title: "Expensya + Cegid",
    description:
      "L'intégration Expensya + Cegid connecte la gestion des notes de frais aux solutions comptables Cegid. Les notes de frais validées sont automatiquement transformées en écritures comptables au format Cegid et exportées vers Cegid Loop, Quadra ou Expert. Les justificatifs dématérialisés sont archivés avec valeur probante.",
    integrationLevel: "native",
    features: [
      "Export automatique vers Cegid Loop, Quadra et Expert",
      "Génération d'écritures au format natif Cegid",
      "Archivage à valeur probante des justificatifs",
      "Ventilation analytique multi-axes",
      "Gestion des indemnités kilométriques dans l'export",
    ],
    setupSteps: [
      "Activer l'intégration Cegid dans les paramètres Expensya",
      "Sélectionner votre produit Cegid (Loop, Quadra, Expert)",
      "Configurer le format d'export et le plan comptable",
      "Mapper les axes analytiques et les journaux",
      "Valider l'export sur un échantillon de notes de frais",
    ],
    metaTitle: "Intégration Expensya + Cegid — Notes de Frais vers Comptabilité",
    metaDescription:
      "Connecter Expensya à Cegid : export automatique des notes de frais, indemnités kilométriques, archivage légal. Compatible Loop, Quadra, Expert.",
    faq: [
      {
        question: "L'export inclut-il les indemnités kilométriques ?",
        answer:
          "Oui, les indemnités kilométriques calculées par Expensya sont incluses dans l'export vers Cegid, avec les bons comptes et la ventilation fiscale appropriée.",
      },
      {
        question: "Les justificatifs sont-ils accessibles depuis Cegid ?",
        answer:
          "Les justificatifs sont archivés dans Expensya avec valeur probante. Un lien permet d'y accéder depuis l'écriture Cegid correspondante.",
      },
      {
        question: "L'intégration fonctionne-t-elle pour les cabinets comptables ?",
        answer:
          "Oui, Expensya propose un mode multi-dossiers qui permet aux cabinets de gérer les notes de frais de plusieurs clients et de les exporter vers les dossiers Cegid correspondants.",
      },
    ],
  },
  {
    slug: "expensya-pennylane",
    solutionSlug: "expensya",
    toolName: "Pennylane",
    toolSlug: "pennylane",
    title: "Expensya + Pennylane",
    description:
      "L'intégration Expensya + Pennylane permet aux PME et startups françaises de synchroniser leurs notes de frais vers la plateforme comptable collaborative Pennylane. Les dépenses validées dans Expensya sont automatiquement envoyées à Pennylane avec les justificatifs, permettant à l'expert-comptable de les traiter sans délai.",
    integrationLevel: "api",
    features: [
      "Synchronisation des notes de frais vers Pennylane",
      "Transfert automatique des justificatifs",
      "Catégorisation pré-remplie des dépenses",
      "Collaboration en temps réel avec l'expert-comptable",
      "Rapprochement automatique avec les relevés bancaires Pennylane",
    ],
    setupSteps: [
      "Connecter votre compte Pennylane depuis les intégrations Expensya",
      "Autoriser l'échange de données entre les deux plateformes",
      "Vérifier le mapping des catégories de dépenses",
      "Configurer la fréquence de synchronisation (temps réel ou batch)",
      "Inviter votre expert-comptable et valider les premiers flux",
    ],
    metaTitle: "Intégration Expensya + Pennylane — Notes de Frais Collaboratives",
    metaDescription:
      "Connecter Expensya à Pennylane : synchronisation notes de frais, justificatifs, collaboration comptable. Guide pour PME et startups.",
    faq: [
      {
        question: "La synchronisation est-elle automatique ?",
        answer:
          "Oui, une fois configurée, les notes de frais validées dans Expensya sont automatiquement synchronisées vers Pennylane. La fréquence est configurable (temps réel ou quotidien).",
      },
      {
        question: "Mon expert-comptable voit-il les justificatifs ?",
        answer:
          "Oui, les justificatifs (photos de reçus, factures) sont transférés vers Pennylane et accessibles par votre expert-comptable pour validation.",
      },
      {
        question: "Puis-je utiliser Expensya et Pennylane séparément ?",
        answer:
          "Oui, les deux outils fonctionnent indépendamment. L'intégration est optionnelle et peut être activée ou désactivée à tout moment sans perte de données.",
      },
    ],
  },
];

const integrationsBySlug = new Map(integrations.map((i) => [i.slug, i]));

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return integrationsBySlug.get(slug);
}

export function getIntegrationsBySolution(solutionSlug: string): Integration[] {
  return integrations.filter((i) => i.solutionSlug === solutionSlug);
}
