export interface Secteur {
  slug: string;
  name: string;
  description: string;
  icon: string;
  challenges: string[];
  specificNeeds: string[];
  recommendedSolutions: { slug: string; reason: string }[];
  relevantGuides: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const secteurs: Secteur[] = [
  {
    slug: "btp",
    name: "BTP & Construction",
    description:
      "Dans le BTP, les déplacements professionnels sont quotidiens : chantiers, visites clients, formations sécurité. Les contraintes spécifiques (véhicules utilitaires, zones rurales, horaires décalés) nécessitent des solutions adaptées.",
    icon: "HardHat",
    challenges: [
      "Déplacements fréquents vers des chantiers en zone rurale ou périurbaine",
      "Utilisation intensive de véhicules utilitaires et personnels",
      "Gestion des indemnités de grand déplacement (IGD) pour les chantiers éloignés",
      "Conformité URSSAF pour les remboursements de frais kilométriques",
      "Suivi des coûts carburant et péages par chantier",
    ],
    specificNeeds: [
      "Suivi kilométrique automatisé par chantier/projet",
      "Gestion des indemnités de grand déplacement conformes URSSAF",
      "Cartes carburant avec imputation par projet",
      "Gestion de flotte de véhicules utilitaires",
      "Application mobile fonctionnant en zone à faible couverture réseau",
    ],
    recommendedSolutions: [
      { slug: "mooncard", reason: "Cartes de paiement avec catégorisation automatique par chantier et TVA optimisée" },
      { slug: "sap-concur", reason: "Solution robuste pour les grandes entreprises du BTP avec gestion de flotte intégrée" },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "urssaf-deplacement", "indemnites-repas-2026"],
    metaTitle: "Déplacements Professionnels BTP 2026 — Solutions & Gestion",
    metaDescription:
      "Gestion des déplacements professionnels dans le BTP : indemnités chantier, barème kilométrique, véhicules utilitaires. Solutions adaptées au secteur construction.",
    faq: [
      {
        question: "Comment gérer les indemnités de grand déplacement dans le BTP ?",
        answer: "Les IGD (Indemnités de Grand Déplacement) s'appliquent quand le salarié ne peut pas rentrer chez lui. Dans le BTP, c'est fréquent pour les chantiers éloignés. Les barèmes URSSAF 2026 : repas 20,70 €/repas, hébergement 55,10-74,30 €/nuit selon la ville. Au-delà de 3 mois, réduction de 15 %.",
      },
      {
        question: "Quel logiciel de notes de frais pour le BTP ?",
        answer: "Les solutions avec application mobile offline sont essentielles (chantiers sans réseau). Mooncard (carte de paiement) et Expensya (scan de justificatifs) sont adaptés. Pour les grandes entreprises, SAP Concur offre la gestion de flotte intégrée.",
      },
      {
        question: "Comment optimiser les coûts de déplacement chantier ?",
        answer: "Centralisez les réservations, utilisez des cartes carburant avec suivi par chantier, appliquez le barème kilométrique URSSAF au lieu de rembourser au réel, et regroupez les déplacements sur les chantiers proches.",
      },
    ],
  },
  {
    slug: "conseil",
    name: "Cabinets de conseil",
    description:
      "Les consultants voyagent en moyenne 3-4 jours par semaine chez leurs clients. Le voyage d'affaires est un poste de coût majeur (15-25 % du chiffre d'affaires) et un levier de satisfaction collaborateur clé dans un secteur en tension sur les talents.",
    icon: "Briefcase",
    challenges: [
      "Volume élevé de déplacements (3-4 jours/semaine par consultant)",
      "Coût des voyages représentant 15-25 % du CA",
      "Nécessité de refacturer les frais clients avec précision",
      "Attraction et rétention des talents via la politique voyage",
      "Conformité avec les politiques voyage des clients (Big Four)",
    ],
    specificNeeds: [
      "Imputation des frais par mission/client pour refacturation",
      "Politique voyage flexible (classe business pour les associés, économique pour les juniors)",
      "Intégration avec les ERP et outils de staffing",
      "Reporting détaillé par mission, consultant et client",
      "Self-booking tool rapide pour les réservations de dernière minute",
    ],
    recommendedSolutions: [
      { slug: "navan", reason: "Self-booking intuitif avec politique voyage intégrée, idéal pour l'autonomie des consultants" },
      { slug: "travelperk", reason: "Flexibilité d'annulation (FlexiPerk) cruciale pour les missions qui changent fréquemment" },
      { slug: "sap-concur", reason: "Solution enterprise avec refacturation par projet et intégration ERP" },
    ],
    relevantGuides: ["politique-voyage-modele", "indemnites-repas-2026", "tva-deplacement-professionnel"],
    metaTitle: "Voyage d'Affaires Cabinet de Conseil 2026 — Solutions & Optimisation",
    metaDescription:
      "Gestion des voyages d'affaires en cabinet de conseil : refacturation client, politique voyage, outils de self-booking. Solutions optimisées pour consultants.",
    faq: [
      {
        question: "Comment refacturer les frais de déplacement aux clients ?",
        answer: "Utilisez un outil avec imputation par mission (Navan, SAP Concur). Chaque dépense est taguée avec le code client/mission. Le reporting permet de générer des états de refacturation précis. Prévoyez une marge de 5-10 % sur les frais refacturés.",
      },
      {
        question: "Quelle politique voyage pour un cabinet de conseil ?",
        answer: "Policy type : train en 2nde classe (1ère si > 2h), avion en éco (business si > 6h ou grade senior), hôtel 3 étoiles (4 étoiles pour les associés), plafond repas 25-30 €. Adaptez la policy au grade du consultant et aux contraintes client.",
      },
      {
        question: "Comment réduire les coûts de déplacement en conseil ?",
        answer: "Réservez à l'avance (les consultants réservent souvent au dernier moment → +40 % de surcoût), négociez des tarifs corporate avec les hôtels et compagnies aériennes, utilisez un SBT avec comparateur intégré, et encouragez le télétravail client quand c'est possible.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Forces de vente & Commerciaux terrain",
    description:
      "Les commerciaux terrain parcourent en moyenne 25 000 à 40 000 km/an. La gestion de leurs déplacements combine suivi kilométrique, notes de frais quotidiennes et optimisation des tournées. Un enjeu de productivité et de conformité URSSAF.",
    icon: "Car",
    challenges: [
      "Volume kilométrique élevé (25 000-40 000 km/an par commercial)",
      "Notes de frais quotidiennes (repas, carburant, péages)",
      "Optimisation des tournées et des itinéraires",
      "Conformité URSSAF sur les indemnités kilométriques",
      "Suivi des coûts par secteur géographique et par client",
    ],
    specificNeeds: [
      "Application mobile avec suivi GPS des trajets",
      "Calcul automatique des indemnités kilométriques au barème fiscal",
      "Carte carburant avec catégorisation automatique",
      "Optimisation des tournées (routing)",
      "Reporting par commercial, secteur et client",
    ],
    recommendedSolutions: [
      { slug: "mooncard", reason: "Carte de paiement avec catégorisation automatique des dépenses et TVA optimisée" },
      { slug: "expensya", reason: "Application mobile de scan de justificatifs avec suivi kilométrique intégré" },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "urssaf-deplacement", "plafond-indemnites-kilometriques", "note-de-frais-obligations"],
    metaTitle: "Déplacements Commerciaux Terrain 2026 — Gestion & Optimisation",
    metaDescription:
      "Gestion des déplacements commerciaux terrain : suivi kilométrique, notes de frais, optimisation tournées. Solutions pour les forces de vente en 2026.",
    faq: [
      {
        question: "Comment suivre les kilomètres des commerciaux ?",
        answer: "Utilisez une application mobile avec tracking GPS (Expensya, Mooncard). Le commercial lance le suivi en début de trajet, l'app calcule la distance et applique automatiquement le barème kilométrique. Alternative : relevé des compteurs de véhicule avec carnet de bord.",
      },
      {
        question: "Véhicule de fonction ou indemnités kilométriques ?",
        answer: "En dessous de 20 000 km/an, les indemnités kilométriques sont souvent plus avantageuses (pas d'avantage en nature). Au-delà, le véhicule de fonction devient rentable. Évaluez le coût total (barème IK vs TCO véhicule + avantage en nature).",
      },
      {
        question: "Comment optimiser les tournées commerciales ?",
        answer: "Utilisez un logiciel d'optimisation de tournées (Nomadia, Opti-Time) qui calcule l'itinéraire optimal en fonction des rendez-vous, de la géographie et des horaires. Économie potentielle : 15-20 % de kilomètres et 1-2 rendez-vous supplémentaires par jour.",
      },
    ],
  },
  {
    slug: "audit-expertise-comptable",
    name: "Audit & Expertise Comptable",
    description:
      "Vos collaborateurs passent 4 jours sur 5 en mission chez les clients. Le cauchemar administratif commence au moment de la refacturation. Un auditeur qui avance 800 € par mois de train et d'hôtel sans outil intégré, c'est une perte de temps facturable.",
    icon: "Calculator",
    challenges: [
      "Imputer chaque dépense au bon code analytique de mission pour une refacturation client au centime près.",
      "Gérer des volumes de frais avancés dépassant souvent 1 000 € par mois par auditeur junior.",
      "Récupérer la TVA sur 100 % des notes de restaurant grâce à des justificatifs conformes.",
      "Suivre les barèmes kilométriques URSSAF mouvants pour les déplacements en région chez les PME.",
    ],
    specificNeeds: [
      "Synchronisation native bidirectionnelle avec les logiciels de production du cabinet (Cegid, Sage, fulll).",
      "Cartes corporate paramétrables avec plafonds dynamiques selon le grade (junior, manager, associé).",
      "OCR infaillible pour extraire la TVA, la date et le SIRET sur les tickets de caisse froissés.",
      "Workflow d'approbation à double niveau : manager de la mission, puis associé signataire.",
    ],
    recommendedSolutions: [
      { slug: "expensya", reason: "L'OCR extrait 95 % des données fiscales et la solution s'intègre nativement aux outils de production comptable pour automatiser la refacturation." },
      { slug: "mooncard", reason: "Fini les avances de frais à 1 500 € pour les juniors, la carte Mastercard automatise la saisie comptable dès le paiement au restaurant." },
      { slug: "travelperk", reason: "Les managers réservent les TGV et hôtels de leur équipe d'audit en 3 clics avec une imputation analytique stricte par dossier client." },
    ],
    relevantGuides: ["tva-recuperation-frais", "bareme-kilometrique-2026", "politique-voyage-entreprise"],
    metaTitle: "Déplacements en Audit & Expertise : Comparatif 2024",
    metaDescription:
      "Vos auditeurs avancent 1000 € par mois ? Refacturez vos frais clients sans erreur de TVA. Découvrez les meilleurs outils pour cabinets comptables.",
    faq: [
      {
        question: "Comment refacturer facilement les frais de déplacement au client audité ?",
        answer: "Exigez un outil avec saisie obligatoire d'un code analytique avant validation. Les logiciels spécialisés lient chaque dépense à un dossier client, ce qui génère un export propre pour la facturation en fin de mois sans ressaisie.",
      },
      {
        question: "Faut-il fournir une carte corporate aux auditeurs juniors ?",
        answer: "Oui, un junior en déplacement 4 jours par semaine avance en moyenne 800 € à 1 200 € par mois. Une carte à autorisation systématique limite votre risque financier tout en supprimant la charge mentale de l'avance de trésorerie.",
      },
      {
        question: "Quelle est la règle pour la récupération de la TVA sur les missions ?",
        answer: "La TVA sur l'hôtel n'est jamais récupérable pour les salariés, mais celle sur les repas l'est si la facture est conforme. Vous perdez environ 20 % de marge sur les frais de bouche si vos collaborateurs égarent les justificatifs originaux.",
      },
    ],
  },
  {
    slug: "finance-banque",
    name: "Finance & Banque",
    description:
      "Les roadshows exigent une logistique millimétrée. Allez-vous demander à vos associés d'avancer 4 000 EUR de vols ? En finance, la politique voyage est stricte mais la classe affaires reste fréquente. La conformité réglementaire n'est pas négociable. Il vous faut un contrôle en temps réel.",
    icon: "Landmark",
    challenges: [
      "Gérer des roadshows multi-destinations avec des annulations de dernière minute facturées au prix fort.",
      "Appliquer une politique voyage stricte (plafond hôtel à 250 EUR) tout en gérant les exceptions pour les cadres dirigeants.",
      "Assurer la conformité totale face aux audits internes et à la loi Sapin 2 sur les frais de représentation.",
      "Traiter des notes de frais aux montants élevés sans bloquer la trésorerie personnelle des collaborateurs juniors.",
    ],
    specificNeeds: [
      "Un workflow de validation multiniveau capable d'approuver un billet à 5 000 EUR en moins de 15 minutes.",
      "Des cartes corporate virtuelles plafonnées par catégorie marchande pour bloquer les dépenses non autorisées à la source.",
      "Une intégration native avec les ERP financiers (SAP, Oracle) pour un rapprochement bancaire automatisé à 100 %.",
      "Un tracking 'duty of care' pour localiser les analystes en temps réel lors des crises géopolitiques.",
    ],
    recommendedSolutions: [
      { slug: "sap-concur", reason: "Le standard absolu des grands groupes avec 80 % de taux d'adoption, imbattable sur la conformité et la piste d'audit fiable." },
      { slug: "navan", reason: "Combine cartes corporate et agence intégrée, idéal pour rebooker un vol de roadshow en 3 clics sans appeler un plateau téléphonique." },
      { slug: "spendesk", reason: "Parfait pour les fonds d'investissement voulant plafonner les frais de représentation de leurs équipes au centime près." },
    ],
    relevantGuides: ["politique-voyage-entreprise", "obligation-securite-voyageurs", "tva-recuperation-frais"],
    metaTitle: "Déplacements pro : le comparatif Finance & Banque",
    metaDescription:
      "Roadshows, classe affaires et conformité stricte. Comment structurer les voyages d'affaires dans le secteur bancaire sans exploser vos budgets ?",
    faq: [
      {
        question: "Comment gérer la classe affaires dans la politique voyage bancaire ?",
        answer: "Fixez une règle temporelle claire, par exemple un vol supérieur à 6 heures. En deçà, la classe économique s'impose pour contenir un budget qui dérape vite à plus de 3 000 EUR par trajet transatlantique.",
      },
      {
        question: "Quelle est la limite URSSAF pour les repas d'affaires clients ?",
        answer: "L'URSSAF ne fixe pas de plafond strict pour les repas d'affaires, mais exige des preuves écrites (noms, entreprises). Au-delà de 5 repas par mois, le risque de redressement grimpe si vous ne documentez pas le contexte.",
      },
      {
        question: "Faut-il fournir des cartes corporate aux analystes en déplacement ?",
        answer: "Oui, une carte virtuelle plafonnée à 2 000 EUR par mois évite les avances de frais pesantes. Demander à un junior d'avancer 1 500 EUR d'hôtel à Londres crée des frictions inutiles et ralentit les clôtures comptables.",
      },
    ],
  },
  {
    slug: "formation-education",
    name: "Formation & Éducation",
    description:
      "Les formateurs avalent les kilomètres entre deux campus ou salons étudiants avec des budgets serrés. Vous gérez des plannings prévisibles à 90 % et privilégiez le train. Pourquoi laisser les notes de frais plomber la marge de chaque session ?",
    icon: "GraduationCap",
    challenges: [
      "Anticipation des réservations SNCF à J-30 pour maîtriser des budgets de formation plafonnés.",
      "Remboursement rapide des frais kilométriques des intervenants freelances sur la base du barème URSSAF.",
      "Gestion des avances de trésorerie souvent insoutenables pour les petits organismes de formation.",
      "Justification légale des repas du midi lors des journées d'intervention hors du site habituel.",
    ],
    specificNeeds: [
      "Un outil de réservation (SBT) intégrant nativement les cartes d'abonnement SNCF (Liberté, Max Actif).",
      "Des cartes de paiement virtuelles plafonnées à 25 € par repas pour les formateurs itinérants.",
      "Une validation managériale à un seul niveau pour ne pas rater les meilleurs tarifs TGV.",
      "Des exports comptables nets avec TVA séparée pour refacturer facilement les frais annexes aux clients finaux.",
    ],
    recommendedSolutions: [
      { slug: "travelperk", reason: "TravelPerk intègre les abonnements SNCF et permet de bloquer des tarifs de train, idéal pour des sessions prévues trois mois à l'avance." },
      { slug: "spendesk", reason: "Les cartes virtuelles générées par session de formation évitent les avances de frais qui ruinent la trésorerie des intervenants indépendants." },
      { slug: "expensya", reason: "Leur technologie OCR déchiffre les tickets de brasserie en 2 secondes, parfait pour fluidifier le traitement des forfaits repas URSSAF." },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "indemnites-repas-2026", "tva-recuperation-frais"],
    metaTitle: "Gestion des déplacements : Organismes de formation",
    metaDescription:
      "Gérez les frais de vos formateurs itinérants sans plomber vos marges. Comparatif des solutions pour optimiser les trains et repas URSSAF.",
    faq: [
      {
        question: "Comment rembourser le repas d'un formateur en déplacement ?",
        answer: "L'URSSAF fixe l'indemnité repas de grand déplacement à 20,70 € par jour. Vous appliquez ce forfait sans justificatif si l'intervenant travaille à plus de 50 km de chez lui. Au réel, exigez la facture via votre application de gestion.",
      },
      {
        question: "Faut-il fournir une carte corporate aux formateurs occasionnels ?",
        answer: "Non, la carte virtuelle à usage unique générée pour la durée exacte de la formation reste la meilleure option. Elle supprime l'avance de trésorerie pour le formateur tout en plafonnant strictement la dépense quotidienne autorisée.",
      },
      {
        question: "Quel est le meilleur moyen de réserver les trains pour des sessions planifiées ?",
        answer: "Privilégiez un outil de réservation (SBT) qui centralise les abonnements SNCF. Vous achetez les billets à l'ouverture des ventes à J-90 pour sécuriser un trajet Paris-Lyon sous les 60 €, avec des conditions d'annulation flexibles.",
      },
    ],
  },
  {
    slug: "immobilier",
    name: "Immobilier",
    description:
      "Un agent immobilier passe 70 % de son temps sur le terrain. Gérer 400 km par semaine exige un suivi kilométrique chirurgical. L'enjeu ? Arrêter de perdre ses vendredis après-midi à calculer les barèmes URSSAF au centime près.",
    icon: "Home",
    challenges: [
      "Saisir manuellement des dizaines de trajets courts de moins de 15 km chaque jour.",
      "Justifier les frais de stationnement et de péage sans égarer les tickets papier.",
      "Avancer les frais de carburant sur les véhicules personnels, parfois plus de 300 € par mois.",
      "Gérer les déjeuners clients imprévus : qui paie l'addition et comment la justifier ?",
    ],
    specificNeeds: [
      "Une application mobile avec calcul des distances GPS intégré pour coller au barème URSSAF.",
      "Des cartes de paiement physiques avec des plafonds journaliers ajustables pour les agents.",
      "La numérisation instantanée des reçus à valeur probante pour jeter le papier immédiatement.",
      "Un circuit d'approbation inférieur à 24h pour rembourser les avances de frais sans frustrer l'équipe.",
    ],
    recommendedSolutions: [
      { slug: "expensya", reason: "Leur module de calcul kilométrique connecté à Google Maps élimine 100 % des erreurs de saisie sur les tournées de visites." },
      { slug: "mooncard", reason: "La carte physique évite aux négociateurs d'avancer 400 € de carburant par mois, avec une réconciliation comptable instantanée." },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "tva-recuperation-frais", "indemnites-repas-2026"],
    metaTitle: "Gestion des frais immobiliers : outils et barèmes",
    metaDescription:
      "Agents immobiliers : arrêtez de perdre du temps sur vos notes de frais. Comparez les solutions pour automatiser vos indemnités kilométriques URSSAF.",
    faq: [
      {
        question: "Comment calculer les indemnités kilométriques pour une tournée de visites ?",
        answer: "Le calcul se base sur la puissance fiscale du véhicule et la distance totale parcourue, selon le barème URSSAF. Un agent faisant 15 000 km/an avec une 5 CV déduit 5 625 €. Vous devez utiliser un outil GPS pour justifier chaque trajet.",
      },
      {
        question: "Faut-il fournir une carte corporate aux négociateurs immobiliers ?",
        answer: "Oui, si vous voulez éviter qu'ils avancent jusqu'à 300 € par mois en carburant et parkings. Une carte plafonnée supprime la gestion des avances de frais. Vous contrôlez les dépenses en temps réel tout en responsabilisant vos équipes sur le terrain.",
      },
      {
        question: "Peut-on récupérer la TVA sur les repas avec des prospects ?",
        answer: "La TVA sur les frais de réception est déductible à 100 % si le nom du client figure sur la facture. Sans cette mention explicite au dos du reçu, l'administration fiscale rejettera la déduction lors d'un contrôle.",
      },
      {
        question: "Quel est le budget moyen d'un outil de notes de frais pour une agence de 10 personnes ?",
        answer: "Comptez entre 60 € et 90 € par mois pour équiper l'ensemble de l'agence. On n'a pas pu vérifier si toutes les banques facturaient des frais cachés sur les cartes physiques, lisez bien les conditions. Ce coût logiciel est toutefois amorti dès le premier mois grâce au temps gagné.",
      },
    ],
  },
  {
    slug: "industrie-manufacturing",
    name: "Industrie & Manufacturing",
    description:
      "Vos ingénieurs tournent sur des sites isolés et vos auditeurs enchaînent les usines ? Gérer ces déplacements exige une précision chirurgicale sur les flottes autos, l'hébergement hors métropole et le calcul strict des indemnités kilométriques.",
    icon: "Factory",
    challenges: [
      "Gérer les réservations d'hôtels de dernière minute dans des zones industrielles sous-équipées.",
      "Suivre le barème kilométrique URSSAF sur des dizaines de milliers de kilomètres annuels par technicien.",
      "Centraliser les notes de frais papier des équipes terrain sans accès régulier à un ordinateur.",
      "Appliquer les règles complexes sur les indemnités de grand déplacement (IGD) selon la région.",
    ],
    specificNeeds: [
      "Application mobile hors ligne pour scanner les reçus de péage et de carburant directement depuis le véhicule.",
      "Cartes corporate plafonnées par typologie d'achat (hôtel, essence) pour bloquer les dépenses hors politique.",
      "Intégration native des barèmes URSSAF avec calcul automatique des distances via Google Maps.",
      "Outil de Duty of Care localisant les équipes en temps réel lors d'interventions sur des sites à risque.",
    ],
    recommendedSolutions: [
      { slug: "expensya", reason: "L'OCR d'Expensya déchiffre 95 % des tickets de péage froissés, un gain de temps massif pour vos techniciens nomades." },
      { slug: "mooncard", reason: "La carte de paiement intégrée supprime les avances de frais et bloque automatiquement les achats non autorisés en station-service." },
      { slug: "navan", reason: "Leur inventaire hôtelier couvre largement les zones périurbaines et industrielles, contrairement aux TMC classiques limitées aux grands centres." },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "urssaf-deplacement", "obligation-securite-voyageurs"],
    metaTitle: "Déplacements en Industrie : Outils et Règles URSSAF",
    metaDescription:
      "Gérez les frais de vos techniciens et ingénieurs. Usines isolées, véhicules de fonction, indemnités : comparez les meilleurs outils pour l'industrie.",
    faq: [
      {
        question: "Comment gérer les frais d'hôtels hors des grandes villes ?",
        answer: "Privilégiez une plateforme comme Navan ou TravelPerk offrant un accès aux inventaires grand public type Booking.com. Vous couvrirez ainsi les petits hôtels proches des zones industrielles, souvent absents des réseaux GDS traditionnels.",
      },
      {
        question: "Quelle est la limite URSSAF pour un repas en grand déplacement ?",
        answer: "Le plafond d'exonération URSSAF s'élève à 20,70 EUR par repas du premier au troisième mois. Au-delà, l'indemnité subit une décote de 15 %. Assurez-vous que votre logiciel bloque ou alerte le manager dès le dépassement.",
      },
      {
        question: "Faut-il équiper les techniciens de cartes corporate ou maintenir les avances ?",
        answer: "Supprimez définitivement les avances de frais en distribuant des cartes prépayées plafonnées à 1 500 EUR par mois. Vos techniciens ne bloquent plus leur trésorerie personnelle, et votre comptabilité récupère 100 % des reçus scannés en temps réel.",
      },
      {
        question: "L'employeur est-il responsable d'un accident sur un site industriel partenaire ?",
        answer: "Oui, votre obligation de sécurité (Duty of Care) reste totale même chez un de vos fournisseurs. Si un incident survient, vous devez pouvoir localiser l'ingénieur en moins de 5 minutes via le tableau de bord de votre outil de réservation.",
      },
    ],
  },
  {
    slug: "pharma-sante",
    name: "Pharma & Santé",
    description:
      "Visiteurs médicaux sur les routes, chercheurs en congrès internationaux : la pharma brûle des millions en déplacements. Vous devez tracer chaque euro pour la loi Anti-Cadeaux (DMOS) tout en assurant un Duty of Care maximal. Voici comment structurer.",
    icon: "Heart",
    challenges: [
      "Loi Anti-Cadeaux (DMOS) : justifier au centime près les repas avec les professionnels de santé sous peine de sanctions pénales.",
      "Gestion massive des flottes automobiles pour les visiteurs médicaux circulant quotidiennement en France.",
      "Inflation des coûts sur les congrès internationaux : des nuitées à plus de 400 € à anticiper 6 mois à l'avance.",
      "Duty of Care critique pour les chercheurs envoyés dans des zones à risque sanitaire ou géopolitique.",
    ],
    specificNeeds: [
      "Catégorisation stricte des notes de frais avec champs obligatoires pour le numéro RPPS des médecins invités.",
      "SBT intégrant des plafonds dynamiques selon la ville du congrès (ex: 300 € pour l'ASCO à Chicago, 120 € à Paris).",
      "Cartes logées pour centraliser les paiements des billets d'avion et éviter d'avancer 2 000 € par chercheur.",
      "Calculateur automatique des indemnités kilométriques URSSAF interfacé avec le CRM des visiteurs médicaux.",
    ],
    recommendedSolutions: [
      { slug: "sap-concur", reason: "Son moteur de règles gère nativement les plafonds DMOS et les champs personnalisés pour les numéros RPPS des médecins invités." },
      { slug: "mooncard", reason: "Idéal pour équiper les visiteurs médicaux d'une carte corporate et stopper définitivement les avances de frais sur l'essence." },
      { slug: "navan", reason: "La TMC intégrée permet de bloquer 50 chambres pour un congrès tout en assurant un tracking précis du Duty of Care." },
    ],
    relevantGuides: ["politique-voyage-entreprise", "bareme-kilometrique-2026", "obligation-securite-voyageurs"],
    metaTitle: "Déplacements Pharma : Gérer les frais DMOS et les congrès",
    metaDescription:
      "Visiteurs médicaux, congrès, loi Anti-Cadeaux : le secteur santé exige une conformité absolue. Comparez les TMC et SBT capables de tracer chaque euro.",
    faq: [
      {
        question: "Comment gérer les repas avec des professionnels de santé (DMOS) ?",
        answer: "Le plafond légal est fixé à 30 € par repas et par praticien. Votre outil de notes de frais doit bloquer toute dépense supérieure ou exiger une validation manuelle du Compliance Officer avant remboursement.",
      },
      {
        question: "Faut-il utiliser des cartes corporate pour les visiteurs médicaux ?",
        answer: "Oui, une carte à autorisation systématique plafonnée à 500 € par semaine élimine les avances de frais. Les visiteurs médicaux parcourent en moyenne 40 000 km par an, vous ne pouvez pas leur demander d'avancer ces sommes.",
      },
      {
        question: "Quelle politique voyage pour les congrès internationaux ?",
        answer: "Anticipez les réservations 6 mois à l'avance via votre SBT avec des plafonds dérogatoires. Une chambre pendant le congrès de l'ESMO coûte facilement 350 € la nuit, contre 150 € en période normale.",
      },
    ],
  },
  {
    slug: "retail-distribution",
    name: "Retail & Distribution",
    description:
      "Vos directeurs régionaux avalent les kilomètres entre deux magasins ? Les acheteurs sillonnent les entrepôts ? Le secteur du retail exige une gestion millimétrée des indemnités kilométriques et des notes de frais froissées. Fini les approximations sur Excel.",
    icon: "ShoppingCart",
    challenges: [
      "Calculer les milliers d'indemnités kilométriques des directeurs de région sans y passer trois jours en fin de mois.",
      "Traiter les reçus de péages et de stations-service souvent perdus ou illisibles après une semaine sur le terrain.",
      "Centraliser les réservations d'hôtels de périphérie pour des visites d'entrepôts décidées à la dernière minute.",
      "Tracer rigoureusement la récupération de la TVA sur le carburant et les repas d'affaires.",
    ],
    specificNeeds: [
      "Une application mobile avec un OCR capable de scanner un ticket de caisse en 3 secondes depuis le parking du magasin.",
      "Un module de calcul automatique couplé à Google Maps pour certifier les distances et bloquer les fraudes kilométriques.",
      "Des cartes de paiement physiques plafonnées par jour et restreintes aux catégories carburant, hôtel et restauration.",
      "Une intégration native avec les logiciels de paie type Silae pour rembourser les avances sous 48 heures.",
    ],
    recommendedSolutions: [
      { slug: "expensya", reason: "Son OCR extrait la TVA et le montant d'un ticket de station-service froissé en 3 secondes, avec un excellent module kilométrique." },
      { slug: "mooncard", reason: "La carte physique automatise la saisie dès le paiement à la pompe ou au restaurant, supprimant totalement la note de frais manuelle." },
      { slug: "spendesk", reason: "Permet d'allouer des budgets stricts par zone géographique et de bloquer automatiquement les cartes le week-end." },
    ],
    relevantGuides: ["bareme-kilometrique-2026", "indemnites-repas-2026", "tva-recuperation-frais"],
    metaTitle: "Gestion des déplacements dans le Retail : comparatif",
    metaDescription:
      "Directeurs régionaux, acheteurs : arrêtez de perdre des heures sur les IK. Comparez les meilleurs outils de gestion des frais pour le retail.",
    faq: [
      {
        question: "Comment contrôler efficacement les indemnités kilométriques des directeurs régionaux ?",
        answer: "Utilisez une application intégrant un GPS pour calculer la distance réelle. Vous bloquez ainsi les trajets arrondis à la dizaine supérieure ; le logiciel applique strictement le barème URSSAF plafonné à 0,636 €/km pour un véhicule 5 CV.",
      },
      {
        question: "Quelle limite fiscale appliquer pour les repas lors des visites de magasins ?",
        answer: "L'URSSAF fixe la limite d'exonération des indemnités de repas à 20,70 € pour un déplacement professionnel. Au-delà de ce plafond, vous paierez des cotisations sociales sur la différence à moins de prouver la nécessité commerciale du dépassement.",
      },
      {
        question: "Faut-il équiper les acheteurs terrain de cartes corporate physiques ?",
        answer: "Oui, si vos collaborateurs avancent plus de 300 € par mois en frais de route. Une carte paramétrable bloque les retraits d'espèces et limite les transactions aux jours ouvrés, ce qui fait chuter la fraude interne de 80 %.",
      },
    ],
  },
  {
    slug: "tech-it",
    name: "Tech & IT",
    description:
      "Vos développeurs détestent l'administratif. En remote-first, les déplacements se concentrent sur les offsites trimestriels et les conférences tech. L'enjeu ? Zéro avance de frais et une intégration parfaite avec vos outils existants, de Slack à votre SIRH.",
    icon: "Laptop",
    challenges: [
      "Gérer des pics de réservations pour des événements ponctuels (offsites, hackathons, AWS re:Invent) impliquant 50 à 200 collaborateurs.",
      "Éviter la mutinerie liée aux avances de frais pour des profils très sollicités qui refusent de jouer les banquiers pour l'entreprise.",
      "Garantir le respect strict du RGPD voyageurs lors de la collecte des données personnelles sur des plateformes tierces.",
      "Centraliser les factures de multiples devises (EUR, USD, GBP) générées lors des déplacements sur des conférences internationales.",
    ],
    specificNeeds: [
      "Une intégration native avec Slack ou Teams pour l'approbation des trajets en un clic, sans quitter l'espace de travail.",
      "Des cartes corporate virtuelles plafonnées pour payer les frais de cloud ou d'hébergement sur place sans aucune avance.",
      "Un Self-Booking Tool (SBT) sans friction, sous peine de voir vos ingénieurs réserver en direct sur Booking avec leur propre carte.",
      "Une gestion automatisée des indemnités de télétravail croisée avec les jours de déplacement réels sur site.",
    ],
    recommendedSolutions: [
      { slug: "travelperk", reason: "Leur inventaire NDC massif et l'interface ultra-rapide convainquent les profils tech qui fuient les vieux GDS lents." },
      { slug: "spendesk", reason: "L'émission de cartes virtuelles instantanées via Slack élimine définitivement l'avance de frais de 800 € pour un billet d'avion." },
    ],
    relevantGuides: ["politique-voyage-entreprise", "obligation-securite-voyageurs", "tva-recuperation-frais"],
    metaTitle: "Gestion des déplacements Tech & IT : Outils et astuces",
    metaDescription:
      "Vos développeurs détestent les notes de frais. Comparez les TMC et SBT capables de s'intégrer à Slack tout en respectant votre politique voyage.",
    faq: [
      {
        question: "Comment éviter que les développeurs n'avancent les frais d'hôtel ?",
        answer: "Équipez-les de cartes corporate virtuelles plafonnées avant leur départ. Une solution comme Spendesk génère une carte à usage unique pour payer un Airbnb à 450 €, l'entreprise est débitée directement.",
      },
      {
        question: "Peut-on imposer un plafond de dépenses pour les conférences tech ?",
        answer: "Oui, configurez des règles d'approbation strictes dans votre SBT. Si un billet pour KubeCon dépasse 1 200 €, la demande est bloquée ou envoyée au manager via Slack pour validation manuelle.",
      },
      {
        question: "Comment gérer les frais de repas lors des regroupements d'équipe en onsite ?",
        answer: "L'URSSAF fixe l'indemnité repas à 20,70 € pour un restaurant. Remboursez au réel avec l'OCR d'Expensya ou versez l'indemnité forfaitaire via paie, c'est souvent plus simple à automatiser.",
      },
    ],
  },
];

const secteursBySlug = new Map(secteurs.map((s) => [s.slug, s]));

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return secteursBySlug.get(slug);
}
