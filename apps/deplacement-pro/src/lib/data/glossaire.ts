export interface GlossaryTerm {
  slug: string;
  term: string;
  acronym?: string;
  definition: string;
  longDescription: string;
  category: string;
  relatedTerms: string[];
  relatedSolutions?: string[];
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "tmc",
    term: "TMC (Travel Management Company)",
    acronym: "TMC",
    definition:
      "Une TMC est une agence de voyages spécialisée dans la gestion des déplacements professionnels. Elle négocie les tarifs, centralise les réservations et assure le suivi des voyageurs.",
    longDescription:
      "Les Travel Management Companies (TMC) sont des prestataires spécialisés qui gèrent l'ensemble du processus de voyage d'affaires : réservation de transports (avion, train, voiture), d'hébergements, négociation de tarifs corporate, mise en place de politiques voyage et assistance aux voyageurs. Les TMC traditionnelles (CWT, BCD Travel, Amex GBT) se distinguent des néo-TMC (Navan, TravelPerk) par leur modèle technologique. Les néo-TMC proposent des plateformes de self-booking en ligne qui permettent aux collaborateurs de réserver eux-mêmes tout en respectant la politique voyage de l'entreprise. Le marché français des TMC représente environ 10 milliards d'euros de volume de réservations par an. Choisir sa TMC est une décision stratégique qui impacte directement le budget déplacements, le 2e poste de dépenses après les salaires pour de nombreuses entreprises.",
    category: "Voyages",
    relatedTerms: ["self-booking-tool", "gds", "politique-voyage", "ndc"],
    relatedSolutions: ["navan", "travelperk", "sap-concur"],
    metaTitle: "TMC (Travel Management Company) — Définition et Guide 2026",
    metaDescription:
      "Qu'est-ce qu'une TMC ? Définition, rôle, différences entre TMC traditionnelles et néo-TMC (Navan, TravelPerk). Guide complet 2026.",
    faq: [
      {
        question: "Quelle est la différence entre une TMC et une agence de voyages ?",
        answer:
          "Une TMC est spécialisée dans les voyages d'affaires avec des services dédiés (politique voyage, reporting, duty of care). Une agence de voyages classique cible le grand public sans ces services entreprise.",
      },
      {
        question: "Combien coûte une TMC ?",
        answer:
          "Le coût varie selon le modèle : les TMC traditionnelles facturent 20-50 € par transaction. Les néo-TMC comme TravelPerk proposent des offres gratuites ou à partir de 99 €/mois.",
      },
      {
        question: "Quand faut-il prendre une TMC ?",
        answer:
          "Dès que votre entreprise dépense plus de 50 000 €/an en voyages ou compte plus de 10 voyageurs réguliers. En dessous, un self-booking tool suffit.",
      },
    ],
  },
  {
    slug: "gds",
    term: "GDS (Global Distribution System)",
    acronym: "GDS",
    definition:
      "Un GDS est un réseau informatique mondial qui centralise l'inventaire des compagnies aériennes, hôtels et loueurs de voiture. Les trois principaux GDS sont Amadeus, Sabre et Travelport.",
    longDescription:
      "Les Global Distribution Systems (GDS) sont des plateformes technologiques qui connectent les fournisseurs de voyages (compagnies aériennes, chaînes hôtelières, loueurs de voiture) aux agences de voyages et TMC. Créés dans les années 1960-70 par les compagnies aériennes, les GDS restent l'épine dorsale de la distribution de voyages B2B. Amadeus (basé en Espagne) est le leader en Europe, Sabre (USA) domine l'Amérique du Nord, et Travelport (UK) est le 3e acteur mondial. Les GDS permettent d'accéder en temps réel à des millions de tarifs, de comparer les options et de réserver instantanément. Cependant, ils sont de plus en plus concurrencés par les connexions directes (API des compagnies aériennes) et le standard NDC qui permet aux compagnies de distribuer directement leurs offres les plus riches sans passer par le GDS.",
    category: "Technologie",
    relatedTerms: ["ndc", "tmc", "pnr", "self-booking-tool"],
    metaTitle: "GDS (Global Distribution System) — Définition et Rôle en 2026",
    metaDescription:
      "Qu'est-ce qu'un GDS ? Définition d'Amadeus, Sabre, Travelport. Rôle dans la distribution de voyages d'affaires. Guide 2026.",
    faq: [
      {
        question: "À quoi sert un GDS ?",
        answer:
          "Un GDS centralise l'inventaire des compagnies aériennes, hôtels et loueurs de voiture en un seul système. Il permet aux TMC et agents de voyages de rechercher, comparer et réserver en temps réel.",
      },
      {
        question: "Le GDS va-t-il disparaître ?",
        answer:
          "Non, mais son rôle évolue. Le NDC permet aux compagnies aériennes de distribuer en direct, réduisant la dépendance au GDS. Cependant, le GDS reste indispensable pour les offres multi-sources.",
      },
      {
        question: "Quelle est la différence entre GDS et NDC ?",
        answer:
          "Le GDS est un intermédiaire centralisé. Le NDC est un standard qui permet aux compagnies de distribuer directement leurs offres. Les deux coexistent : le NDC complète le GDS sans le remplacer.",
      },
    ],
  },
  {
    slug: "ndc",
    term: "NDC (New Distribution Capability)",
    acronym: "NDC",
    definition:
      "Le NDC est un standard technique créé par IATA qui permet aux compagnies aériennes de distribuer directement leurs offres (tarifs, services annexes) aux agences et TMC, sans passer par le GDS.",
    longDescription:
      "New Distribution Capability (NDC) est un standard XML créé par IATA (Association Internationale du Transport Aérien) en 2012 pour moderniser la distribution aérienne. Le NDC permet aux compagnies de proposer leurs offres les plus riches (sièges, bagages, repas, Wi-Fi) directement aux TMC et plateformes de réservation, sans les limitations du GDS. Air France, Lufthansa, British Airways, et la plupart des grandes compagnies adoptent progressivement le NDC. Pour les entreprises, le NDC signifie un accès à des tarifs parfois exclusifs et une meilleure visibilité sur les services annexes. Les néo-TMC comme Navan et TravelPerk intègrent nativement le NDC en plus du GDS, offrant ainsi le plus large inventaire possible à leurs clients.",
    category: "Technologie",
    relatedTerms: ["gds", "tmc", "self-booking-tool"],
    relatedSolutions: ["navan", "travelperk"],
    metaTitle: "NDC (New Distribution Capability) — Définition et Impact 2026",
    metaDescription:
      "Qu'est-ce que le NDC ? Standard IATA pour la distribution aérienne. Impact sur les TMC et les voyages d'affaires. Guide 2026.",
    faq: [
      {
        question: "Le NDC remplace-t-il le GDS ?",
        answer:
          "Non, le NDC complète le GDS. Les deux canaux coexistent et les TMC modernes utilisent les deux pour offrir le plus large inventaire possible.",
      },
      {
        question: "Quelles compagnies utilisent le NDC ?",
        answer:
          "Air France, Lufthansa, British Airways, American Airlines et la plupart des grandes compagnies sont certifiées NDC. L'adoption progresse rapidement depuis 2023.",
      },
      {
        question: "Le NDC est-il avantageux pour les entreprises ?",
        answer:
          "Oui, le NDC donne accès à des tarifs parfois exclusifs, une meilleure personnalisation (choix du siège, services) et une tarification plus dynamique.",
      },
    ],
  },
  {
    slug: "pnr",
    term: "PNR (Passenger Name Record)",
    acronym: "PNR",
    definition:
      "Le PNR est un dossier de réservation unique créé dans le système d'une compagnie aérienne ou d'un GDS. Il contient toutes les informations du voyageur et de son itinéraire.",
    longDescription:
      "Le Passenger Name Record (PNR) est un enregistrement numérique qui identifie de manière unique une réservation de voyage. Chaque PNR contient : les noms des passagers, les segments de vol (itinéraire, horaires, classes), les informations de contact, les données de paiement, et les services annexes (bagages, sièges, repas). Le PNR est identifié par un code alphanumérique de 6 caractères (ex : ABCD12). Il est créé par le GDS ou directement par la compagnie aérienne au moment de la réservation. Dans le contexte du voyage d'affaires, le PNR est essentiel pour le suivi des voyageurs (duty of care), la consolidation des dépenses et le reporting. Les TMC modernes exploitent les données PNR pour optimiser les achats et négocier de meilleurs tarifs.",
    category: "Technologie",
    relatedTerms: ["gds", "tmc", "duty-of-care"],
    metaTitle: "PNR (Passenger Name Record) — Définition et Utilisation 2026",
    metaDescription:
      "Qu'est-ce qu'un PNR ? Définition du dossier de réservation aérien. Rôle dans la gestion des voyages d'affaires. Guide 2026.",
    faq: [
      {
        question: "Où trouver son PNR ?",
        answer:
          "Le PNR (code de 6 caractères) figure sur votre confirmation de réservation par email, sur votre billet électronique et dans l'app de votre TMC ou compagnie aérienne.",
      },
      {
        question: "PNR et numéro de billet, est-ce la même chose ?",
        answer:
          "Non. Le PNR identifie la réservation (peut inclure plusieurs passagers). Le numéro de billet est unique par passager et sert de preuve d'achat du transport.",
      },
      {
        question: "Combien de temps un PNR est-il conservé ?",
        answer:
          "Les PNR sont généralement conservés 5 ans dans les systèmes des compagnies aériennes et des GDS, conformément aux réglementations internationales.",
      },
    ],
  },
  {
    slug: "per-diem",
    term: "Per diem",
    definition:
      "Le per diem est une indemnité journalière forfaitaire versée au collaborateur en déplacement pour couvrir ses frais de repas et de logement, sans justificatif.",
    longDescription:
      "Le per diem (du latin « par jour ») est une allocation journalière versée aux collaborateurs en déplacement professionnel pour couvrir les frais de subsistance (repas, hébergement, petites dépenses). Son montant varie selon la destination et est fixé par l'entreprise ou par des barèmes officiels (URSSAF pour la France, U.S. GSA aux États-Unis). En France, les indemnités de grand déplacement sont exonérées de charges sociales si elles respectent les plafonds URSSAF. Pour l'année 2026, les limites d'exonération sont de 21,10 € pour le repas et de 55,10 € à 77,20 € pour l'hébergement selon la localisation (Paris vs province). Le per diem simplifie la gestion des dépenses car il ne nécessite pas de justificatifs individuels. Il est particulièrement utilisé pour les déplacements longs ou internationaux.",
    category: "Réglementation",
    relatedTerms: ["notes-de-frais", "indemnite-repas", "bareme-kilometrique"],
    relatedSolutions: ["expensya", "sap-concur"],
    metaTitle: "Per Diem — Définition, Montants et Barèmes 2026",
    metaDescription:
      "Qu'est-ce que le per diem ? Définition, montants URSSAF 2026, calcul. Guide complet des indemnités journalières de déplacement.",
    faq: [
      {
        question: "Le per diem est-il imposable ?",
        answer:
          "Non, le per diem est exonéré d'impôt et de charges sociales s'il respecte les plafonds URSSAF. Au-delà, le dépassement est soumis à cotisations.",
      },
      {
        question: "Qui fixe le montant du per diem ?",
        answer:
          "L'entreprise fixe ses propres montants, mais doit respecter les plafonds URSSAF pour bénéficier de l'exonération. Beaucoup d'entreprises appliquent directement les barèmes URSSAF.",
      },
      {
        question: "Per diem ou notes de frais : que choisir ?",
        answer:
          "Le per diem est plus simple (pas de justificatifs) mais moins précis. Les notes de frais reflètent les dépenses réelles. La plupart des entreprises combinent les deux selon le type de déplacement.",
      },
    ],
  },
  {
    slug: "duty-of-care",
    term: "Duty of Care",
    definition:
      "Le duty of care est l'obligation légale de l'employeur de garantir la sécurité et la santé de ses collaborateurs en déplacement professionnel, en France comme à l'étranger.",
    longDescription:
      "Le duty of care (ou « devoir de protection ») est une obligation juridique qui impose à l'employeur de prendre toutes les mesures nécessaires pour assurer la sécurité de ses salariés en déplacement. En France, cette obligation découle de l'article L4121-1 du Code du travail. Concrètement, le duty of care implique : la localisation des voyageurs en temps réel, l'information sur les risques pays (terrorisme, catastrophe naturelle, crise sanitaire), la mise en place de procédures d'urgence, et la souscription d'assurances adaptées. Les TMC modernes intègrent des fonctionnalités de duty of care : géolocalisation des voyageurs, alertes en temps réel, communication de crise. Des prestataires spécialisés comme International SOS complètent ces dispositifs. Le non-respect du duty of care peut engager la responsabilité pénale du dirigeant en cas d'incident.",
    category: "Réglementation",
    relatedTerms: ["tmc", "politique-voyage", "pnr"],
    relatedSolutions: ["navan", "travelperk", "sap-concur"],
    metaTitle: "Duty of Care — Obligation de Sécurité des Voyageurs 2026",
    metaDescription:
      "Qu'est-ce que le duty of care ? Obligation légale de l'employeur envers ses voyageurs d'affaires. Guide juridique et pratique 2026.",
    faq: [
      {
        question: "Le duty of care est-il obligatoire en France ?",
        answer:
          "Oui, l'article L4121-1 du Code du travail impose à l'employeur une obligation de résultat en matière de sécurité, y compris pour les collaborateurs en déplacement.",
      },
      {
        question: "Comment mettre en place un programme de duty of care ?",
        answer:
          "Les étapes clés : cartographier les risques pays, choisir une TMC avec géolocalisation, souscrire une assurance rapatriement, former les voyageurs et définir des procédures d'urgence.",
      },
      {
        question: "Quels sont les risques en cas de non-respect ?",
        answer:
          "Le dirigeant peut être tenu pénalement responsable (faute inexcusable de l'employeur). Les sanctions vont de l'amende à l'emprisonnement en cas d'accident grave.",
      },
    ],
  },
  {
    slug: "self-booking-tool",
    term: "Self-Booking Tool (SBT)",
    acronym: "SBT",
    definition:
      "Un self-booking tool est une plateforme en ligne qui permet aux collaborateurs de réserver eux-mêmes leurs voyages d'affaires tout en respectant la politique voyage de l'entreprise.",
    longDescription:
      "Un Self-Booking Tool (SBT) est une application web ou mobile qui donne aux collaborateurs l'autonomie de réserver leurs voyages d'affaires (vols, trains, hôtels, voitures) dans un cadre contrôlé par l'entreprise. Le SBT intègre la politique voyage : plafonds budgétaires, compagnies préférées, classes autorisées, workflows de validation. Contrairement à la réservation via un agent TMC (plus coûteuse), le self-booking réduit les frais de gestion et accélère le processus. Les néo-TMC comme Navan et TravelPerk sont essentiellement des SBT avancés qui combinent l'autonomie du self-booking avec les services d'une TMC (support, négociation, duty of care). Le taux d'adoption du self-booking est un indicateur clé : les meilleures plateformes atteignent 90-95 % de réservations en self-booking, réduisant significativement les coûts de gestion.",
    category: "Voyages",
    relatedTerms: ["tmc", "politique-voyage", "gds"],
    relatedSolutions: ["navan", "travelperk"],
    metaTitle: "Self-Booking Tool (SBT) — Définition et Avantages 2026",
    metaDescription:
      "Qu'est-ce qu'un self-booking tool ? Définition, avantages, comparatif des meilleurs SBT pour les voyages d'affaires en 2026.",
    faq: [
      {
        question: "Quelle est la différence entre un SBT et une TMC ?",
        answer:
          "Un SBT est un outil de réservation en autonomie. Une TMC est un prestataire complet (réservation + support + négociation). Les néo-TMC comme Navan combinent les deux.",
      },
      {
        question: "Le self-booking est-il moins cher ?",
        answer:
          "Oui, le self-booking réduit les frais de gestion de 50 à 70 % par rapport aux réservations via un agent. Il permet aussi de mieux comparer les prix.",
      },
      {
        question: "Comment garantir la conformité avec un SBT ?",
        answer:
          "Les SBT modernes intègrent la politique voyage : blocage des classes non autorisées, alertes dépassement de budget, workflows de validation automatiques.",
      },
    ],
  },
  {
    slug: "tarif-negocie",
    term: "Tarif négocié (Corporate Rate)",
    definition:
      "Un tarif négocié est un prix préférentiel obtenu par l'entreprise auprès d'une compagnie aérienne, d'un hôtel ou d'un loueur de voiture grâce à un accord-cadre basé sur le volume.",
    longDescription:
      "Les tarifs négociés (corporate rates) sont des remises obtenues par les entreprises grâce à leur volume d'achats. Une entreprise qui réserve régulièrement chez un même fournisseur (chaîne hôtelière, compagnie aérienne, loueur de voiture) peut négocier des prix inférieurs au tarif public. Les remises varient selon le volume : 5-10 % pour les PME, jusqu'à 30-40 % pour les grands comptes. La négociation est généralement menée par la TMC ou le travel manager de l'entreprise. Les programmes de tarifs négociés incluent souvent des avantages supplémentaires : petit-déjeuner inclus, Wi-Fi gratuit, annulation flexible, surclassement. Pour être efficaces, les tarifs négociés doivent être chargés dans le SBT ou le GDS pour être proposés en priorité lors des réservations. Le suivi du taux d'utilisation des tarifs négociés est un KPI important du travel management.",
    category: "Voyages",
    relatedTerms: ["tmc", "gds", "politique-voyage"],
    metaTitle: "Tarif Négocié (Corporate Rate) — Guide de Négociation 2026",
    metaDescription:
      "Qu'est-ce qu'un tarif négocié ? Comment obtenir des remises hôtels et aériens pour votre entreprise. Guide de négociation 2026.",
    faq: [
      {
        question: "Comment négocier des tarifs corporate ?",
        answer:
          "Centralisez vos réservations pour avoir de la visibilité sur vos volumes, puis contactez directement les fournisseurs ou passez par votre TMC. Un volume minimum est généralement requis (50-100 nuits/an pour les hôtels).",
      },
      {
        question: "À partir de quel volume peut-on négocier ?",
        answer:
          "Pour les hôtels : dès 50 nuits/an dans un même établissement. Pour les compagnies aériennes : dès 100 000 €/an de volume. Pour les voitures de location : dès 50 locations/an.",
      },
      {
        question: "Les tarifs négociés sont-ils toujours les moins chers ?",
        answer:
          "Pas toujours. Les tarifs en ligne ou les promotions peuvent être inférieurs. Les SBT modernes comparent automatiquement le tarif négocié aux tarifs publics pour garantir le meilleur prix.",
      },
    ],
  },
  {
    slug: "bleisure",
    term: "Bleisure",
    definition:
      "Le bleisure désigne la tendance à combiner un déplacement professionnel (business) avec du temps de loisirs (leisure), par exemple en prolongeant un voyage d'affaires par un week-end personnel.",
    longDescription:
      "Le bleisure (contraction de « business » et « leisure ») est une tendance de fond dans le voyage d'affaires. Elle consiste pour un collaborateur à prolonger un déplacement professionnel par des jours de congé personnel, souvent le week-end. Selon une étude GBTA, 60 % des voyageurs d'affaires pratiquent le bleisure au moins une fois par an. Cette pratique se développe avec le travail hybride et la quête d'équilibre vie pro/vie perso. Pour l'employeur, le bleisure présente des avantages : attractivité employeur, réduction du stress des voyageurs, et parfois des économies (un vol retour le lundi peut être moins cher qu'un retour le vendredi). Mais il soulève des questions : qui paie les nuits supplémentaires ? Quelle couverture assurance pendant la partie personnelle ? Les politiques voyage modernes intègrent désormais des clauses bleisure pour encadrer cette pratique.",
    category: "Tendances",
    relatedTerms: ["politique-voyage", "duty-of-care", "tmc"],
    metaTitle: "Bleisure — Définition et Politique d'Entreprise 2026",
    metaDescription:
      "Qu'est-ce que le bleisure ? Combiner voyage d'affaires et loisirs. Guide pour mettre en place une politique bleisure en entreprise.",
    faq: [
      {
        question: "L'employeur doit-il autoriser le bleisure ?",
        answer:
          "L'employeur n'est pas obligé d'autoriser le bleisure, mais 70 % des entreprises l'acceptent désormais. C'est un argument d'attractivité employeur important.",
      },
      {
        question: "Qui paie les frais supplémentaires en bleisure ?",
        answer:
          "Le collaborateur paie ses frais personnels (nuits, repas, activités). L'entreprise ne prend en charge que la partie professionnelle du voyage.",
      },
      {
        question: "L'assurance entreprise couvre-t-elle le bleisure ?",
        answer:
          "La couverture entreprise s'arrête à la fin de la mission professionnelle. Le collaborateur doit souscrire une assurance personnelle pour la partie loisirs.",
      },
    ],
  },
  {
    slug: "open-jaw",
    term: "Open Jaw",
    definition:
      "Un open jaw est un billet d'avion aller-retour dont les villes de départ ou d'arrivée sont différentes à l'aller et au retour. Exemple : Paris → Lyon (vol), Lyon → Marseille (train), Marseille → Paris (vol).",
    longDescription:
      "L'open jaw est un type de tarification aérienne où le point de départ ou d'arrivée diffère entre l'aller et le retour. Il existe deux types d'open jaw : l'open jaw à destination (arrivée dans une ville, retour d'une autre ville) et l'open jaw à l'origine (départ d'une ville à l'aller, retour dans une autre ville). Cette option est particulièrement utile pour les voyages d'affaires multi-villes où le collaborateur visite plusieurs clients. L'open jaw peut parfois être moins cher que deux allers simples, surtout en tarification aérienne. Les TMC modernes optimisent automatiquement les itinéraires en proposant des open jaw quand c'est plus avantageux. Attention : tous les tarifs négociés ne sont pas compatibles avec l'open jaw, il convient de vérifier les conditions.",
    category: "Voyages",
    relatedTerms: ["tmc", "gds", "pnr", "tarif-negocie"],
    metaTitle: "Open Jaw — Définition et Utilisation en Voyage d'Affaires",
    metaDescription:
      "Qu'est-ce qu'un open jaw ? Définition, exemples et avantages pour les voyages d'affaires multi-villes. Guide pratique.",
    faq: [
      {
        question: "L'open jaw est-il moins cher qu'un aller simple ?",
        answer:
          "Souvent oui. Un billet open jaw (A→B, C→A) est généralement moins cher que deux allers simples (A→B + C→A), car il est tarifé comme un aller-retour.",
      },
      {
        question: "Toutes les compagnies proposent-elles l'open jaw ?",
        answer:
          "La plupart des compagnies régulières proposent l'open jaw. Les compagnies low-cost ne le proposent généralement pas car elles vendent des allers simples.",
      },
      {
        question: "Comment réserver un open jaw ?",
        answer:
          "Utilisez l'option 'Multi-villes' ou 'Multi-city' dans votre SBT ou TMC. L'outil calculera automatiquement le tarif open jaw le plus avantageux.",
      },
    ],
  },
  {
    slug: "mice",
    term: "MICE (Meetings, Incentives, Conferences, Events)",
    acronym: "MICE",
    definition:
      "Le MICE désigne le secteur du tourisme d'affaires lié aux réunions, séminaires, conférences et événements d'entreprise. C'est un segment majeur du voyage d'affaires.",
    longDescription:
      "MICE est l'acronyme de Meetings, Incentives, Conferences and Events (ou Exhibitions). Ce secteur englobe tous les déplacements professionnels liés aux événements : séminaires d'équipe, conférences sectorielles, voyages incentive (récompense), salons professionnels et réunions clients. Le marché MICE mondial représente environ 800 milliards d'euros. En France, le secteur MICE est porté par des destinations comme Paris (1er centre de congrès européen), Lyon, Cannes et Nice. La gestion MICE diffère du voyage d'affaires individuel : elle implique la réservation groupée de chambres, la location de salles, la gestion de la restauration et de la logistique événementielle. Certaines TMC proposent un département MICE dédié, tandis que des agences spécialisées (Kuoni Events, MCI) se concentrent exclusivement sur ce segment.",
    category: "Voyages",
    relatedTerms: ["tmc", "tarif-negocie"],
    metaTitle: "MICE — Définition du Tourisme d'Affaires Événementiel 2026",
    metaDescription:
      "Qu'est-ce que le MICE ? Meetings, Incentives, Conferences, Events. Guide complet du tourisme d'affaires événementiel 2026.",
    faq: [
      {
        question: "Quelle est la différence entre MICE et voyage d'affaires ?",
        answer:
          "Le voyage d'affaires individuel (business travel) concerne les déplacements d'un collaborateur. Le MICE concerne les événements groupés : séminaires, conférences, incentives.",
      },
      {
        question: "Faut-il une agence spécialisée MICE ?",
        answer:
          "Pour les événements de plus de 50 participants, oui. Les agences MICE gèrent la logistique événementielle que les TMC classiques ne couvrent pas toujours.",
      },
      {
        question: "Combien représente le budget MICE en entreprise ?",
        answer:
          "Le budget MICE représente en moyenne 20-30 % du budget total de déplacements professionnels d'une entreprise française.",
      },
    ],
  },
  {
    slug: "politique-voyage",
    term: "Politique voyage",
    definition:
      "La politique voyage est un document interne qui définit les règles de déplacement professionnel : classes de transport autorisées, plafonds hôteliers, processus de validation et délais de réservation.",
    longDescription:
      "La politique voyage (ou travel policy) est le cadre de référence qui régit les déplacements professionnels d'une entreprise. Elle définit : les classes de transport autorisées (éco, premium, business selon la durée du vol), les plafonds hôteliers par destination, les moyens de transport privilégiés (train vs avion selon la distance), les délais de réservation anticipée, les circuits de validation (manager, travel manager), et les règles de notes de frais. Une bonne politique voyage équilibre trois objectifs : maîtrise des coûts, confort des voyageurs et conformité réglementaire. Les TMC modernes permettent de paramétrer la politique voyage directement dans le SBT, bloquant ou alertant automatiquement les réservations hors politique. Le taux de conformité (pourcentage de réservations conformes à la politique) est un KPI clé : les meilleures entreprises atteignent 85-95 % de conformité.",
    category: "Gestion",
    relatedTerms: ["tmc", "self-booking-tool", "duty-of-care", "compliance"],
    metaTitle: "Politique Voyage d'Entreprise — Guide et Modèle 2026",
    metaDescription:
      "Qu'est-ce qu'une politique voyage ? Définition, contenu, bonnes pratiques. Guide pour rédiger une travel policy efficace en 2026.",
    faq: [
      {
        question: "Que doit contenir une politique voyage ?",
        answer:
          "Les éléments essentiels : classes de transport autorisées, plafonds hôteliers par destination, délais de réservation, processus de validation, règles de notes de frais, clauses bleisure et duty of care.",
      },
      {
        question: "Comment faire respecter la politique voyage ?",
        answer:
          "Le meilleur levier est l'intégration dans le SBT : les réservations hors politique sont bloquées ou signalées automatiquement. Le reporting permet d'identifier les écarts.",
      },
      {
        question: "À quelle fréquence revoir sa politique voyage ?",
        answer:
          "Une fois par an minimum, et à chaque changement significatif (nouveau fournisseur, changement de barèmes URSSAF, évolution réglementaire).",
      },
    ],
  },
  {
    slug: "notes-de-frais",
    term: "Notes de frais",
    definition:
      "Les notes de frais sont des documents par lesquels un collaborateur demande le remboursement de dépenses professionnelles engagées à titre personnel (repas, transport, hébergement).",
    longDescription:
      "La note de frais est le processus par lequel un salarié se fait rembourser des dépenses professionnelles avancées avec ses fonds personnels. Le salarié fournit les justificatifs (tickets, factures), les soumet via un formulaire ou un outil digital, le manager valide, la comptabilité vérifie et le remboursement est effectué sur la paie. En France, les notes de frais représentent un processus coûteux : 53 € de coût de traitement moyen par note de frais (étude GBTA), 20 % des notes contiennent des erreurs, et le délai moyen de remboursement est de 27 jours. Les solutions modernes (Mooncard, Spendesk, Expensya) digitalisent et automatisent ce processus : OCR pour scanner les justificatifs, catégorisation automatique, workflow de validation en ligne, et export comptable direct. La tendance est à l'élimination des notes de frais grâce aux cartes corporate qui enregistrent automatiquement chaque dépense.",
    category: "Gestion",
    relatedTerms: ["per-diem", "carte-corporate", "ocr", "bareme-kilometrique"],
    relatedSolutions: ["mooncard", "spendesk", "expensya", "sap-concur"],
    metaTitle: "Notes de Frais — Définition, Process et Digitalisation 2026",
    metaDescription:
      "Qu'est-ce qu'une note de frais ? Définition, réglementation, outils de digitalisation. Guide complet pour optimiser vos notes de frais 2026.",
    faq: [
      {
        question: "Les notes de frais sont-elles obligatoires ?",
        answer:
          "L'employeur est obligé de rembourser les frais professionnels. La note de frais est le processus le plus courant, mais les cartes corporate permettent d'éviter l'avance de frais.",
      },
      {
        question: "Quel est le délai légal de remboursement ?",
        answer:
          "Il n'y a pas de délai légal précis, mais l'URSSAF considère qu'un remboursement doit intervenir dans un délai raisonnable. En pratique, la plupart des entreprises remboursent sous 30 jours.",
      },
      {
        question: "Comment automatiser les notes de frais ?",
        answer:
          "Utilisez un outil comme Expensya ou Mooncard : scan OCR des justificatifs, catégorisation automatique, workflow de validation en ligne et export comptable direct.",
      },
    ],
  },
  {
    slug: "carte-corporate",
    term: "Carte corporate",
    definition:
      "Une carte corporate est une carte de paiement professionnelle émise au nom de l'entreprise et attribuée aux collaborateurs pour régler les dépenses professionnelles (voyages, repas, fournitures).",
    longDescription:
      "La carte corporate (ou carte d'entreprise) est un moyen de paiement professionnel qui remplace les avances de frais et simplifie la gestion des dépenses. Il existe plusieurs types : la carte corporate nominative (le collaborateur est porteur, l'entreprise paie), la carte achat (procurement card, pour les achats fournisseurs), et la carte virtuelle (numéro de carte unique généré pour une transaction ou un fournisseur spécifique). Les néo-fintechs comme Mooncard et Spendesk ont révolutionné la carte corporate en ajoutant : la catégorisation automatique des dépenses, la dématérialisation des justificatifs, la récupération automatique de la TVA, les plafonds configurables par collaborateur, et l'export comptable direct. La carte corporate est le moyen le plus efficace d'éliminer les notes de frais : chaque transaction est enregistrée automatiquement, avec le justificatif scanné et la TVA récupérée.",
    category: "Gestion",
    relatedTerms: ["notes-de-frais", "ocr", "compliance"],
    relatedSolutions: ["mooncard", "spendesk"],
    metaTitle: "Carte Corporate — Définition, Types et Comparatif 2026",
    metaDescription:
      "Qu'est-ce qu'une carte corporate ? Définition, types (nominative, virtuelle, achat), comparatif des meilleurs émetteurs 2026.",
    faq: [
      {
        question: "Quelle différence entre carte corporate et carte personnelle ?",
        answer:
          "La carte corporate est détenue et payée par l'entreprise. Le collaborateur n'avance aucun frais. La carte personnelle implique une avance de frais avec note de frais pour remboursement.",
      },
      {
        question: "Faut-il une carte corporate par collaborateur ?",
        answer:
          "Pas nécessairement. Les cartes virtuelles permettent de créer un numéro de carte unique par transaction ou fournisseur, sans attribuer de carte physique à chaque collaborateur.",
      },
      {
        question: "Les cartes corporate sont-elles sécurisées ?",
        answer:
          "Oui, les solutions modernes offrent : plafonds par carte, blocage en temps réel, alertes de fraude, cartes virtuelles à usage unique et désactivation instantanée.",
      },
    ],
  },
  {
    slug: "ocr",
    term: "OCR (Reconnaissance Optique de Caractères)",
    acronym: "OCR",
    definition:
      "L'OCR est une technologie qui permet de scanner un justificatif (ticket de caisse, facture) et d'en extraire automatiquement les données (montant, date, TVA, fournisseur).",
    longDescription:
      "La Reconnaissance Optique de Caractères (OCR, Optical Character Recognition) est une technologie clé de la digitalisation des dépenses professionnelles. Dans le contexte des notes de frais, l'OCR permet de photographier un justificatif avec son smartphone et d'en extraire automatiquement : le montant, la date, le nom du fournisseur, le montant de TVA et la catégorie de dépense. Les solutions modernes combinent l'OCR avec l'intelligence artificielle pour améliorer la précision : reconnaissance de multiples formats (tickets de caisse, factures, reçus de carte), extraction des données même sur des justificatifs de mauvaise qualité, et apprentissage continu pour réduire les erreurs. Les meilleurs outils (Expensya, Mooncard) atteignent plus de 95 % de précision, rendant la saisie manuelle quasi obsolète. L'OCR est au cœur de la promesse des solutions de notes de frais : transformer un processus manuel de 15 minutes par note de frais en une opération de 30 secondes.",
    category: "Technologie",
    relatedTerms: ["notes-de-frais", "carte-corporate"],
    relatedSolutions: ["expensya", "mooncard", "spendesk"],
    metaTitle: "OCR pour Notes de Frais — Technologie et Comparatif 2026",
    metaDescription:
      "Qu'est-ce que l'OCR ? Reconnaissance optique de caractères pour scanner les justificatifs. Comparatif des meilleurs OCR 2026.",
    faq: [
      {
        question: "L'OCR est-il fiable pour les notes de frais ?",
        answer:
          "Oui, les meilleurs outils atteignent plus de 95 % de précision. L'IA améliore continuellement la reconnaissance, même sur des justificatifs de mauvaise qualité.",
      },
      {
        question: "L'OCR remplace-t-il la conservation des justificatifs ?",
        answer:
          "Oui, depuis 2017 en France, la dématérialisation des justificatifs est légalement reconnue (article A102 B-2 du LPF). Le scan OCR a valeur probante si les conditions sont respectées.",
      },
      {
        question: "Quel outil a le meilleur OCR ?",
        answer:
          "Expensya et Mooncard sont régulièrement cités pour la qualité de leur OCR. Expensya est légèrement en avance sur la vitesse de reconnaissance.",
      },
    ],
  },
  {
    slug: "bareme-kilometrique",
    term: "Barème kilométrique",
    definition:
      "Le barème kilométrique est un tableau officiel publié chaque année par l'administration fiscale qui fixe les indemnités kilométriques (IK) pour les déplacements professionnels en véhicule personnel.",
    longDescription:
      "Le barème kilométrique est un outil fiscal publié annuellement par l'administration française (Bulletin Officiel des Finances Publiques). Il permet de calculer les indemnités kilométriques (IK) versées aux collaborateurs qui utilisent leur véhicule personnel pour des déplacements professionnels. Le barème varie selon : le type de véhicule (voiture, moto, scooter), la puissance fiscale (en CV) et le nombre de kilomètres parcourus dans l'année. Pour 2026, le barème intègre les frais de carburant, d'assurance, d'entretien et de dépréciation du véhicule. Les IK calculées selon ce barème sont exonérées de charges sociales et d'impôt. Les logiciels de notes de frais comme Expensya intègrent le barème en vigueur et calculent automatiquement les IK à partir du trajet saisi. Un barème spécifique existe pour les véhicules électriques (majoration de 20 %).",
    category: "Réglementation",
    relatedTerms: ["notes-de-frais", "per-diem", "indemnite-repas"],
    relatedSolutions: ["expensya", "sap-concur"],
    metaTitle: "Barème Kilométrique 2026 — Tableau et Calcul des IK",
    metaDescription:
      "Barème kilométrique 2026 : tableau officiel, calcul des indemnités kilométriques. Guide complet pour voitures, motos et véhicules électriques.",
    faq: [
      {
        question: "Comment fonctionne le barème kilométrique ?",
        answer:
          "Le barème fixe un montant par kilomètre selon la puissance fiscale et la distance annuelle. Exemple : pour 5 000 km avec un véhicule de 5 CV, l'indemnité est calculée selon la formule du barème fiscal.",
      },
      {
        question: "Les véhicules électriques ont-ils un barème spécifique ?",
        answer:
          "Oui, depuis 2021, les véhicules électriques bénéficient d'une majoration de 20 % du barème kilométrique standard, encourageant la mobilité verte.",
      },
      {
        question: "Peut-on dépasser le barème kilométrique ?",
        answer:
          "Oui, l'entreprise peut indemniser au-delà du barème, mais le dépassement est soumis à charges sociales et impôt sur le revenu pour le collaborateur.",
      },
    ],
  },
  {
    slug: "indemnite-repas",
    term: "Indemnité repas",
    definition:
      "L'indemnité repas est une allocation versée par l'employeur pour compenser les frais de restauration d'un collaborateur en déplacement professionnel ou contraint de manger à l'extérieur.",
    longDescription:
      "L'indemnité repas compense les frais de restauration engagés par un collaborateur dans le cadre de son activité professionnelle. En France, l'URSSAF fixe chaque année les plafonds d'exonération. Pour 2026, les montants sont : 7,30 € pour un repas au restaurant d'entreprise (avec participation de l'employeur), 10,30 € pour un repas sur le lieu de travail (sans restaurant d'entreprise), et 21,10 € pour un repas lors d'un déplacement professionnel. Ces indemnités sont exonérées de cotisations sociales si elles ne dépassent pas les plafonds URSSAF. Au-delà, le surplus est soumis à charges. L'indemnité repas peut prendre la forme d'un per diem forfaitaire ou d'un remboursement sur justificatif. Les tickets restaurant constituent une autre forme de participation aux frais de repas, avec un plafond d'exonération de 7,18 € par titre en 2026.",
    category: "Réglementation",
    relatedTerms: ["per-diem", "notes-de-frais", "bareme-kilometrique"],
    metaTitle: "Indemnité Repas 2026 — Montants URSSAF et Règles",
    metaDescription:
      "Indemnité repas 2026 : montants URSSAF, plafonds d'exonération, règles de remboursement. Guide complet pour les entreprises.",
    faq: [
      {
        question: "Quel est le montant de l'indemnité repas en déplacement ?",
        answer:
          "En 2026, l'indemnité repas en déplacement est de 21,10 € maximum (exonérée de charges). Ce montant est fixé par l'URSSAF et révisé chaque année.",
      },
      {
        question: "L'indemnité repas est-elle obligatoire ?",
        answer:
          "Non, l'indemnité repas n'est pas obligatoire légalement. Cependant, la convention collective applicable peut la rendre obligatoire. L'employeur doit dans tous les cas rembourser les frais professionnels.",
      },
      {
        question: "Indemnité repas ou ticket restaurant ?",
        answer:
          "Le ticket restaurant est utilisé au quotidien (pas en déplacement). L'indemnité repas est versée lors de déplacements professionnels. Les deux ne sont pas cumulables pour un même repas.",
      },
    ],
  },
  {
    slug: "compliance",
    term: "Compliance (Conformité)",
    definition:
      "La compliance en voyage d'affaires désigne le respect des politiques internes (politique voyage, plafonds) et des réglementations externes (URSSAF, fiscalité) dans la gestion des déplacements professionnels.",
    longDescription:
      "La compliance (conformité) dans le voyage d'affaires couvre deux dimensions : la conformité interne (respect de la politique voyage de l'entreprise) et la conformité externe (respect des réglementations URSSAF, fiscales et comptables). En interne, la compliance se mesure par le taux de réservations conformes à la politique voyage. Les SBT modernes permettent d'atteindre 85-95 % de conformité en bloquant ou alertant automatiquement les réservations hors politique. En externe, la compliance concerne : le respect des plafonds URSSAF pour les indemnités (repas, hébergement, IK), la conformité des justificatifs dématérialisés, la récupération correcte de la TVA, et le respect des règles de facturation. Les risques de non-conformité sont significatifs : redressement URSSAF (jusqu'à 3 ans d'arriérés + pénalités), rejet des déductions de TVA, et sanctions en cas de contrôle fiscal. Les outils modernes automatisent les contrôles de conformité pour réduire ces risques.",
    category: "Gestion",
    relatedTerms: ["politique-voyage", "notes-de-frais", "per-diem"],
    relatedSolutions: ["sap-concur", "spendesk"],
    metaTitle: "Compliance Voyage d'Affaires — Conformité et Risques 2026",
    metaDescription:
      "Compliance en voyage d'affaires : conformité URSSAF, politique voyage, risques de redressement. Guide de conformité 2026.",
    faq: [
      {
        question: "Quels sont les risques de non-conformité ?",
        answer:
          "Redressement URSSAF (jusqu'à 3 ans d'arriérés + pénalités de 5 à 40 %), rejet de TVA, et sanctions en cas de contrôle fiscal. Le coût peut atteindre plusieurs centaines de milliers d'euros.",
      },
      {
        question: "Comment améliorer la compliance voyage ?",
        answer:
          "Trois leviers : intégrer la politique dans le SBT (blocage automatique), former les collaborateurs aux règles, et analyser les écarts via le reporting pour identifier les récidivistes.",
      },
      {
        question: "Le taux de compliance idéal ?",
        answer:
          "Les meilleures entreprises atteignent 90-95 % de conformité. En dessous de 70 %, il y a un problème structurel (politique inadaptée, outil mal configuré, ou manque de communication).",
      },
    ],
  },
  {
    slug: "travel-manager",
    term: "Travel manager",
    definition:
      "Le travel manager est le responsable de la gestion des voyages d'affaires au sein d'une entreprise. Il définit la politique voyage, négocie les contrats fournisseurs et pilote le budget déplacements.",
    longDescription:
      "Le travel manager (ou responsable voyages) est un poste clé dans les entreprises qui ont un volume significatif de déplacements professionnels. Ses missions principales : définir et faire évoluer la politique voyage, sélectionner et piloter la TMC, négocier les tarifs avec les compagnies aériennes, hôtels et loueurs, analyser les dépenses et optimiser le budget, assurer la conformité réglementaire, et gérer le duty of care. Le travel manager est souvent rattaché à la direction financière ou aux achats. Dans les grandes entreprises, il anime une équipe dédiée. Dans les PME, ce rôle est souvent assuré par l'office manager ou le DAF. Les compétences requises : connaissance du marché du voyage, maîtrise des outils TMC/SBT, capacités de négociation, analyse de données et gestion de projet. Le métier évolue avec la digitalisation : le travel manager devient de plus en plus un data analyst qui exploite les données de voyage pour optimiser les dépenses.",
    category: "Gestion",
    relatedTerms: ["tmc", "politique-voyage", "tarif-negocie", "compliance"],
    metaTitle: "Travel Manager — Fiche Métier et Missions 2026",
    metaDescription:
      "Qu'est-ce qu'un travel manager ? Missions, compétences, salaire. Fiche métier complète du responsable voyages d'affaires 2026.",
    faq: [
      {
        question: "À partir de quand recruter un travel manager ?",
        answer:
          "Dès que le budget voyages dépasse 500 000 €/an ou que l'entreprise compte plus de 100 voyageurs réguliers. En dessous, la TMC et les outils digitaux peuvent suffire.",
      },
      {
        question: "Quel est le salaire d'un travel manager ?",
        answer:
          "En France, le salaire médian d'un travel manager est de 50 000 à 70 000 € brut/an. Les postes senior en grande entreprise peuvent dépasser 80 000 €.",
      },
      {
        question: "Le travel manager va-t-il disparaître avec l'IA ?",
        answer:
          "Non, mais le rôle évolue. L'IA automatise les tâches opérationnelles, permettant au travel manager de se concentrer sur la stratégie, la négociation et l'optimisation.",
      },
    ],
  },
];

const glossaryBySlug = new Map(glossaryTerms.map((t) => [t.slug, t]));

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryBySlug.get(slug);
}
