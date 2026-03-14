export interface Metier {
    slug: string;
    name: string;
    description: string;
    salaryRange: string;
    salaryJunior: string;
    salarySenior: string;
    demandLevel: "très forte" | "forte" | "moyenne";
    relatedDomaines: string[];
    relatedOrganismes: string[];
    skills: string[];
    dailyTasks: string[];
    careerPath: string[];
    metaTitle: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
}

export const metiers: Metier[] = [
    {
        slug: "data-analyst",
        name: "Data Analyst",
        description:
            "Le data analyst collecte, nettoie et analyse les données d'une entreprise pour en extraire des insights actionnables. Il crée des tableaux de bord, identifie des tendances et aide la direction à prendre des décisions éclairées. C'est l'un des métiers les plus demandés en France en 2026, accessible aux profils en reconversion grâce à de nombreuses formations certifiantes.",
        salaryRange: "32 000 € – 55 000 €/an",
        salaryJunior: "32 000 – 38 000 €/an",
        salarySenior: "48 000 – 65 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: ["data-analyst", "intelligence-artificielle"],
        relatedOrganismes: ["jedha", "datascientest", "openclassrooms", "le-wagon"],
        skills: [
            "SQL et bases de données",
            "Python (pandas, numpy)",
            "Visualisation (Power BI, Tableau)",
            "Statistiques et probabilités",
            "Excel avancé",
            "Communication et storytelling data",
        ],
        dailyTasks: [
            "Extraire et nettoyer des données depuis différentes sources",
            "Créer des tableaux de bord et des reportings automatisés",
            "Analyser les KPIs et identifier des tendances",
            "Présenter les résultats aux équipes métier et à la direction",
            "Automatiser des tâches répétitives avec Python ou SQL",
        ],
        careerPath: [
            "Data Analyst Junior → Data Analyst Senior (2-3 ans)",
            "Data Analyst → Data Scientist (spécialisation ML/IA)",
            "Data Analyst → Data Engineer (orientation infrastructure)",
            "Data Analyst → Head of Data / Chief Data Officer (management)",
            "Data Analyst → Consultant BI / Data indépendant (freelance)",
        ],
        metaTitle: "Devenir Data Analyst en 2026 — Salaire, Formation, Débouchés",
        metaDescription:
            "Fiche métier Data Analyst 2026 : salaire (32-55k€), compétences requises, formations recommandées et débouchés. Guide complet pour devenir data analyst.",
        faq: [
            {
                question: "Quel salaire pour un data analyst débutant en 2026 ?",
                answer: "Un data analyst junior gagne entre 32 000 € et 38 000 € brut/an en France. À Paris, les salaires démarrent autour de 36 000 €. Avec 3-5 ans d'expérience, le salaire atteint 45 000 – 55 000 €.",
            },
            {
                question: "Faut-il un diplôme d'ingénieur pour devenir data analyst ?",
                answer: "Non. Les bootcamps (Jedha, Le Wagon, DataScientest) de 3-6 mois permettent de devenir data analyst avec un titre RNCP reconnu. Les entreprises recrutent sur les compétences, pas uniquement sur le diplôme initial.",
            },
            {
                question: "Quelle est la différence entre data analyst et data scientist ?",
                answer: "Le data analyst analyse et visualise les données existantes. Le data scientist construit des modèles prédictifs avec du machine learning. Le data analyst est plus accessible en reconversion, le data scientist requiert des bases mathématiques plus poussées.",
            },
            {
                question: "Le data analyst peut-il travailler en freelance ?",
                answer: "Oui. Le TJM (Taux Journalier Moyen) d'un data analyst freelance se situe entre 400 € et 700 €/jour. Les missions typiques : audits data, création de dashboards, formation d'équipes internes.",
            },
        ],
    },
    {
        slug: "cybersecurite",
        name: "Métiers de la cybersécurité",
        description:
            "La cybersécurité regroupe les métiers dédiés à la protection des systèmes d'information : analyste SOC, pentester, consultant en sécurité, RSSI. Face à l'explosion des cyberattaques, la demande de profils qualifiés dépasse largement l'offre en France. C'est un secteur en forte tension avec des salaires attractifs et de nombreuses opportunités, y compris pour les reconvertis.",
        salaryRange: "35 000 € – 70 000 €/an",
        salaryJunior: "35 000 – 42 000 €/an",
        salarySenior: "55 000 – 85 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: ["cybersecurite", "devops-cloud"],
        relatedOrganismes: ["jedha", "openclassrooms", "datascientest"],
        skills: [
            "Réseaux (TCP/IP, DNS, pare-feux)",
            "Systèmes Linux et Windows Server",
            "Analyse de vulnérabilités et tests d'intrusion",
            "SIEM et monitoring (Splunk, ELK)",
            "Normes et réglementations (ISO 27001, RGPD, NIS2)",
            "Scripting (Python, Bash)",
        ],
        dailyTasks: [
            "Surveiller les alertes de sécurité et analyser les incidents",
            "Réaliser des audits de sécurité et des tests d'intrusion",
            "Mettre en place et maintenir les politiques de sécurité",
            "Former les collaborateurs aux bonnes pratiques de cybersécurité",
            "Veiller sur les nouvelles menaces et vulnérabilités",
        ],
        careerPath: [
            "Analyste SOC Junior → Analyste SOC Senior (2-3 ans)",
            "Analyste SOC → Pentester / Expert sécurité offensive",
            "Consultant cybersécurité → RSSI (Responsable Sécurité SI)",
            "Cybersécurité → Consultant indépendant / Bug bounty",
            "RSSI → Directeur cybersécurité / CISO (grandes entreprises)",
        ],
        metaTitle: "Métiers de la Cybersécurité 2026 — Salaires et Débouchés",
        metaDescription:
            "Fiche métier cybersécurité 2026 : salaires (35-70k€), compétences, formations et débouchés. Analyste SOC, pentester, RSSI. Guide complet.",
        faq: [
            {
                question: "Quel salaire en cybersécurité en 2026 ?",
                answer: "Un analyste SOC junior démarre à 35 000 – 42 000 € brut/an. Un pentester confirmé gagne 50 000 – 65 000 €. Un RSSI peut atteindre 70 000 – 100 000 € dans les grandes entreprises.",
            },
            {
                question: "Peut-on entrer en cybersécurité sans diplôme d'ingénieur ?",
                answer: "Oui. Des formations certifiantes de 3-9 mois (Jedha, OpenClassrooms) permettent de devenir analyste SOC ou consultant junior. Les certifications professionnelles (CompTIA Security+, CEH) complètent efficacement la formation.",
            },
            {
                question: "La cybersécurité recrute-t-elle vraiment ?",
                answer: "Oui, massivement. L'ANSSI estime le déficit à 15 000 postes non pourvus en France en 2026. Le taux de chômage dans le secteur est quasi nul. C'est l'un des secteurs avec le meilleur ratio offres/candidats.",
            },
        ],
    },
    {
        slug: "ux-designer",
        name: "UX Designer",
        description:
            "L'UX designer (User Experience Designer) conçoit des interfaces numériques centrées sur l'utilisateur. Il mène des recherches utilisateurs, crée des wireframes et prototypes, et teste les interfaces pour optimiser l'expérience. C'est un métier créatif et stratégique, accessible en reconversion grâce à des formations de 3 à 12 mois.",
        salaryRange: "34 000 € – 55 000 €/an",
        salaryJunior: "34 000 – 40 000 €/an",
        salarySenior: "50 000 – 70 000 €/an",
        demandLevel: "forte",
        relatedDomaines: ["design-ux-ui", "product-management"],
        relatedOrganismes: ["ironhack", "openclassrooms", "le-wagon"],
        skills: [
            "Recherche utilisateur (interviews, tests utilisateurs)",
            "Wireframing et prototypage (Figma, Sketch)",
            "Design thinking et design sprint",
            "Architecture de l'information",
            "Accessibilité web (WCAG)",
            "Notions de HTML/CSS (collaboration avec les développeurs)",
        ],
        dailyTasks: [
            "Mener des interviews utilisateurs et analyser les résultats",
            "Créer des wireframes, maquettes et prototypes interactifs",
            "Organiser et animer des ateliers de co-conception",
            "Réaliser des tests d'utilisabilité et itérer sur les designs",
            "Collaborer avec les développeurs et les product managers",
        ],
        careerPath: [
            "UX Designer Junior → UX Designer Senior (2-3 ans)",
            "UX Designer → UX Lead / Design Manager",
            "UX Designer → Product Designer (UX + UI)",
            "UX Designer → UX Researcher (spécialisation recherche)",
            "UX Designer → Head of Design / VP Design",
        ],
        metaTitle: "Devenir UX Designer en 2026 — Salaire, Formation, Reconversion",
        metaDescription:
            "Fiche métier UX Designer 2026 : salaire (34-55k€), compétences Figma, formations recommandées et parcours de reconversion. Guide complet.",
        faq: [
            {
                question: "Faut-il savoir dessiner pour devenir UX designer ?",
                answer: "Non. L'UX design n'est pas du graphisme. Les outils numériques (Figma, Sketch) ne nécessitent aucune compétence en dessin. L'UX designer travaille sur la logique d'utilisation, pas sur l'esthétique pure.",
            },
            {
                question: "Quel outil maîtriser en priorité ?",
                answer: "Figma est devenu le standard de l'industrie en 2026. Maîtriser Figma (composants, prototypage, auto-layout) est indispensable. Les autres outils (Sketch, Adobe XD) sont en recul.",
            },
            {
                question: "L'UX design est-il un bon choix pour une reconversion ?",
                answer: "Excellent. Les profils reconvertis (psychologues, ergonomes, marketeurs, enseignants) apportent une sensibilité utilisateur naturelle. La demande est forte et les formations accessibles (3-9 mois).",
            },
        ],
    },
    {
        slug: "product-manager",
        name: "Product Manager",
        description:
            "Le product manager (PM) est le chef d'orchestre d'un produit numérique. Il définit la vision, priorise les fonctionnalités, coordonne les équipes (développeurs, designers, marketing) et mesure les résultats. C'est un rôle stratégique qui combine business, technologie et design. De plus en plus de reconvertis accèdent à ce métier via des formations spécialisées.",
        salaryRange: "40 000 € – 65 000 €/an",
        salaryJunior: "38 000 – 45 000 €/an",
        salarySenior: "55 000 – 80 000 €/an",
        demandLevel: "forte",
        relatedDomaines: ["product-management", "gestion-de-projet", "marketing-digital"],
        relatedOrganismes: ["openclassrooms", "le-wagon", "livementor"],
        skills: [
            "Discovery produit (interviews, user stories, jobs-to-be-done)",
            "Roadmap et priorisation (RICE, MoSCoW)",
            "Méthodes agiles (Scrum, Kanban)",
            "Analytics produit (Mixpanel, Amplitude, GA4)",
            "Notions techniques (API, bases de données, architecture)",
            "Communication et leadership transverse",
        ],
        dailyTasks: [
            "Définir et prioriser la roadmap produit",
            "Rédiger des user stories et spécifications fonctionnelles",
            "Animer les cérémonies agiles (sprint planning, review, rétro)",
            "Analyser les métriques produit et identifier les leviers de croissance",
            "Coordonner les équipes tech, design et business",
        ],
        careerPath: [
            "Associate PM → Product Manager (1-2 ans)",
            "Product Manager → Senior PM / Lead PM (3-5 ans)",
            "Product Manager → Head of Product / VP Product",
            "Product Manager → Chief Product Officer (CPO)",
            "Product Manager → Entrepreneur / fondateur de startup",
        ],
        metaTitle: "Devenir Product Manager en 2026 — Salaire, Formation, Débouchés",
        metaDescription:
            "Fiche métier Product Manager 2026 : salaire (40-65k€), compétences, formations et évolution de carrière. Guide complet pour devenir PM.",
        faq: [
            {
                question: "Faut-il un background technique pour devenir product manager ?",
                answer: "Non, mais c'est un plus. Les meilleurs PM combinent une compréhension business et des notions techniques. Des formations comme Le Wagon (bootcamp) ou OpenClassrooms (parcours PM) permettent d'acquérir les deux.",
            },
            {
                question: "Quelle est la différence entre product manager et chef de projet ?",
                answer: "Le chef de projet gère le planning et les ressources (le « comment »). Le product manager définit ce qu'il faut construire et pourquoi (le « quoi » et le « pourquoi »). Le PM est responsable du succès du produit, pas juste de sa livraison.",
            },
            {
                question: "Quel salaire pour un product manager junior ?",
                answer: "Un PM junior gagne 38 000 – 45 000 € brut/an en France. À Paris et dans la tech, les salaires démarrent autour de 42 000 €. Avec 5 ans d'expérience, comptez 55 000 – 70 000 €.",
            },
        ],
    },
    {
        slug: "chef-de-projet-digital",
        name: "Chef de projet digital",
        description:
            "Chef d'orchestre entre la technique, le design et le marketing. Vous cadrez les besoins, gérez les budgets et pilotez les livraisons de sites ou d'applications. C'est un métier de tension : vous devez maîtriser Jira, comprendre le code sans le taper et savoir dire non à un client.",
        salaryRange: "35 000 € – 60 000 €/an",
        salaryJunior: "35 000 € – 42 000 €/an",
        salarySenior: "48 000 € – 60 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "gestion-de-projet",
            "marketing-digital",
            "product-management",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "studi",
            "cegos",
            "m2i-formation",
            "orsys",
        ],
        skills: [
            "Méthodes agiles (Scrum, Kanban) via Jira ou Trello",
            "Maquettage et prototypage sur Figma",
            "Analyse de trafic (Google Analytics 4, Looker Studio)",
            "CMS et e-commerce (WordPress, Shopify, Magento)",
            "Notions HTML/CSS/JS pour dialoguer avec les développeurs",
            "Gestion de budget et suivi des KPI via Excel",
        ],
        dailyTasks: [
            "Animer le daily stand-up de 15 minutes avec l'équipe technique.",
            "Rédiger les spécifications fonctionnelles et les user stories sur Jira.",
            "Recetter les livrables web sur différents navigateurs (QA testing).",
            "Arbitrer les priorités du sprint avec le client selon le budget consommé.",
            "Analyser les metrics d'acquisition post-lancement sur Google Analytics.",
        ],
        careerPath: [
            "Product Owner",
            "Directeur de projet digital",
            "Product Manager",
            "Scrum Master",
            "Responsable e-commerce",
        ],
        metaTitle: "Devenir Chef de Projet Digital : Salaires et Formations",
        metaDescription:
            "Le chef de projet digital pilote les budgets et les équipes web. Avec un salaire de 35 à 60k€, découvrez les formations RNCP et compétences exigées.",
        faq: [
            {
                question: "Faut-il savoir coder pour devenir chef de projet digital ?",
                answer: "Non, mais vous devez comprendre l'architecture web. Ne pas différencier le back-end du front-end vous fera perdre toute crédibilité face aux développeurs. Apprenez les bases d'HTML, CSS et le fonctionnement des API.",
            },
            {
                question: "Quelle formation choisir pour se lancer rapidement ?",
                answer: "Un cursus certifiant RNCP niveau 6 (Bac+3) en 6 à 12 mois est le format le plus efficace. OpenClassrooms propose ce titre en alternance avec un taux d'insertion de 80 %, finançable intégralement via votre OPCO.",
            },
            {
                question: "Peut-on financer cette formation avec le CPF ?",
                answer: "Oui, le CPF finance 100 % de la formation si votre solde couvre le prix. Au-delà, vous payez la différence. Assurez-vous simplement que le programme vise un titre RNCP ou un CQP reconnu par l'État.",
            },
            {
                question: "Quelle est la différence avec un Product Owner ?",
                answer: "Le Product Owner se concentre exclusivement sur la valeur du produit final pour l'utilisateur. Le chef de projet digital gère en priorité le triptyque classique de la prestation : coût, qualité, délai.",
            },
        ],
    },
    {
        slug: "commercial-b2b",
        name: "Commercial B2B / Business Developer",
        description:
            "Vous vendez des solutions complexes (souvent SaaS) à des entreprises. Votre quotidien ? Prospection ciblée, qualification, négociation et closing. Un profil junior démarre autour de 35 000 € de fixe, mais le variable fait exploser le plafond. La demande est massive sur le marché de la tech.",
        salaryRange: "35 000 € – 70 000 €/an",
        salaryJunior: "35 000 € – 45 000 €/an",
        salarySenior: "55 000 € – 80 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "commerce-vente",
            "marketing-digital",
            "management",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "livementor",
            "studi",
            "cegos",
        ],
        skills: [
            "Maîtrise d'un CRM (Salesforce, HubSpot)",
            "Cold calling et cold emailing (Lemlist, Waalaxy)",
            "Méthodologies de vente (MEDDIC, BANT)",
            "Social Selling sur LinkedIn",
            "Négociation de contrats complexes",
            "Copywriting pour l'outbound",
        ],
        dailyTasks: [
            "Générer 30 à 50 leads qualifiés par semaine via prospection multicanale",
            "Mener des appels de découverte (30 minutes) pour qualifier le besoin BANT",
            "Faire des démos de l'outil SaaS adaptées au cas d'usage du prospect",
            "Négocier les clauses tarifaires et closer avec les décideurs (C-level)",
            "Mettre à jour le pipeline CRM quotidiennement pour garantir un forecast précis",
        ],
        careerPath: [
            "Key Account Manager (KAM)",
            "Head of Sales",
            "Sales Operations (Sales Ops)",
            "Directeur Commercial",
        ],
        metaTitle: "Devenir Commercial B2B : Salaire, Formations, Métier",
        metaDescription:
            "Le Business Developer B2B négocie des contrats complexes. Fixe à 35k€ + variable déplafonné. Découvrez les compétences clés et les formations certifiantes.",
        faq: [
            {
                question: "Faut-il un diplôme d'école de commerce pour devenir Business Developer ?",
                answer: "Non, les recruteurs privilégient l'expérience pratique et la maîtrise des outils d'outbound (HubSpot, Lemlist). Un bootcamp intensif de 3 mois ou une formation RNCP niveau 6 (Bac+3) en alternance suffit pour décrocher un premier CDI avec 35 000 € de fixe.",
            },
            {
                question: "Quelle est la part du salaire variable en B2B ?",
                answer: "Le variable représente entre 20 % et 50 % de la rémunération globale (le package). Si vous signez pour 35 000 € de fixe, vous pouvez facilement viser 50 000 € de package (OTE) dès la première année si vous atteignez 100 % de vos quotas.",
            },
            {
                question: "Quelle formation courte choisir pour se reconvertir ?",
                answer: "Optez pour un bootcamp axé Tech Sales ou un titre professionnel Négociateur Technico-Commercial (NTC). LiveMentor ou OpenClassrooms proposent des cursus finançables CPF avec un taux d'insertion supérieur à 80 % à 6 mois.",
            },
        ],
    },
    {
        slug: "community-manager",
        name: "Community Manager",
        description:
            "Le Community Manager ne passe pas ses journées à scroller. Il gère l'image de marque, conçoit des calendriers éditoriaux et analyse les KPIs d'engagement. Comptez 3 à 6 mois de formation pour décrocher un titre RNCP. Prêt à modérer les trolls et gérer des budgets publicitaires ?",
        salaryRange: "25 000 € – 45 000 €/an",
        salaryJunior: "25 000 € – 32 000 €/an",
        salarySenior: "35 000 € – 45 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "marketing-digital",
            "communication-digitale",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "livementor",
            "studi",
            "cegos",
        ],
        skills: [
            "Maîtrise de la suite Meta Business et LinkedIn Ads",
            "Création visuelle sur Figma ou Canva Pro",
            "Social listening via Agorapulse ou Meltwater",
            "Analyse de trafic (Google Analytics 4, UTMs)",
            "Rédaction SEO et copywriting orienté conversion",
            "Montage vidéo court (CapCut, Premiere Rush)",
        ],
        dailyTasks: [
            "Planifier 15 posts par semaine via Buffer ou Hootsuite.",
            "Modérer les commentaires et répondre aux messages clients sous 2 heures.",
            "Analyser le ROI des campagnes publicitaires à la fin du mois.",
            "Tourner et monter 3 vidéos courtes hebdomadaires.",
            "Rédiger des briefs créatifs pour les graphistes freelances.",
        ],
        careerPath: [
            "Social Media Manager",
            "Content Manager",
            "Traffic Manager",
            "Consultant indépendant / Freelance",
            "Responsable Communication Digitale",
        ],
        metaTitle: "Community Manager : Salaire, Formations et Vraies Tâches",
        metaDescription:
            "Envie de devenir Community Manager ? Découvrez les vrais salaires (25-38k€), les formations courtes financées par le CPF et les compétences exigées en 2026.",
        faq: [
            {
                question: "Combien coûte une formation de Community Manager ?",
                answer: "Comptez entre 1 500 € et 3 500 € pour un parcours de 3 à 6 mois. Le CPF finance 100 % du prix si la formation délivre une certification RNCP et que votre solde le couvre. Au-delà, vous payez la différence.",
            },
            {
                question: "Faut-il un diplôme universitaire pour être recruté ?",
                answer: "Non, un titre professionnel RNCP de niveau 5 ou 6 suffit amplement. Les recruteurs regardent votre portfolio, vos statistiques d'engagement passées et votre maîtrise des outils de social listening avant votre baccalauréat.",
            },
            {
                question: "Quel est le salaire réel d'un débutant en 2026 ?",
                answer: "Un profil junior touche entre 25 000 € et 32 000 € brut par an selon sa région. À Paris, vous pouvez négocier 32 000 € d'entrée si vous maîtrisez le montage vidéo sur CapCut et la gestion de budget publicitaire.",
            },
            {
                question: "Peut-on se former au métier de CM en 100 % e-learning ?",
                answer: "Oui, la majorité des organismes comme OpenClassrooms ou LiveMentor proposent un format asynchrone. Vous avancez à votre rythme sur une plateforme, avec un mentorat hebdomadaire en visio pour valider des projets concrets et évaluables.",
            },
        ],
    },
    {
        slug: "comptable",
        name: "Comptable",
        description:
            "Oubliez le cliché du gratte-papier. Le comptable d'aujourd'hui pilote la santé financière avec des ERP cloud (Sage, Cegid). C'est un profil pénurique : 85 % des diplômés d'un DCG trouvent un CDI en moins de 3 mois. Vous analysez, vous alertez, vous sauvez parfois la mise du dirigeant.",
        salaryRange: "28 000 € – 45 000 €/an",
        salaryJunior: "28 000 € – 32 000 €/an",
        salarySenior: "38 000 € – 45 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "comptabilite-gestion",
            "bureautique",
            "management",
        ],
        relatedOrganismes: [
            "studi",
            "cnam",
            "afpa",
            "cegos",
            "demos",
        ],
        skills: [
            "Maîtrise des ERP comptables (Sage, Cegid, EBP)",
            "Établissement des liasses fiscales et bilans annuels",
            "Gestion de la paie et déclarations sociales (DSN)",
            "Contrôle de gestion et tableaux de bord Excel (TCD, macros)",
            "Veille réglementaire fiscale et sociale",
            "Rapprochement bancaire et lettrage des comptes",
        ],
        dailyTasks: [
            "Saisir les pièces comptables avec un outil d'OCR pour automatiser à 80 % la saisie.",
            "Pointer et lettrer les comptes bancaires chaque matin pour vérifier la trésorerie.",
            "Préparer et télétransmettre la déclaration de TVA mensuelle avant le 19 du mois.",
            "Élaborer le bilan comptable et le compte de résultat en fin d'exercice.",
            "Paramétrer le logiciel de paie pour intégrer les variables du mois en cours.",
        ],
        careerPath: [
            "Chef comptable (après 5 à 7 ans d'expérience)",
            "Contrôleur de gestion (nécessite un DSCG ou master)",
            "Directeur Administratif et Financier (DAF)",
            "Expert-comptable (après validation du DEC)",
            "Consultant formateur sur les logiciels financiers",
        ],
        metaTitle: "Devenir Comptable : Salaire, Formations et Avis (2026)",
        metaDescription:
            "Le métier de comptable recrute massivement. Découvrez les salaires (28-45k€), les formations RNCP, le DCG et les compétences exigées par les recruteurs.",
        faq: [
            {
                question: "Faut-il obligatoirement un DCG pour devenir comptable ?",
                answer: "Non, un BTS Comptabilité et Gestion (Bac+2) suffit pour démarrer. Le Diplôme de Comptabilité et de Gestion (DCG, Bac+3) reste cependant le standard du marché pour dépasser les 35 000 € rapidement et viser des postes à responsabilités.",
            },
            {
                question: "Peut-on se former au métier de comptable 100 % en ligne ?",
                answer: "Oui, des organismes comme Studi ou le CNAM proposent le Titre Professionnel de Comptable en e-learning. Vous suivez des modules vidéo, rendez des cas pratiques sur Sage, et validez un diplôme RNCP de niveau 5 ou 6 reconnu par l'État.",
            },
            {
                question: "Le CPF finance-t-il les formations en comptabilité ?",
                answer: "Le CPF finance 100 % de votre formation si elle est certifiée RNCP et que votre solde couvre le prix. Pour un parcours complet (environ 3 500 €), un CPF de transition (PTP) prend souvent le relais pour maintenir votre salaire.",
            },
            {
                question: "Quelle est la différence entre un poste en entreprise et en cabinet ?",
                answer: "En entreprise, vous gérez la comptabilité d'une seule structure et participez aux décisions internes. En cabinet d'expertise, vous traitez un portefeuille de 30 à 40 clients. Le cabinet paie souvent 10 % de moins au démarrage, mais accélère drastiquement votre apprentissage.",
            },
        ],
    },
    {
        slug: "consultant-rh",
        name: "Consultant RH",
        description:
            "Le métier a changé. Fini l'administration du personnel, place au conseil stratégique. Un consultant RH facture des missions de GPEC, d'audit ou de déploiement SIRH à des entreprises en manque de ressources. Vous cherchez du rythme ? C'est ici.",
        salaryRange: "32 000 € – 55 000 €/an",
        salaryJunior: "32 000 – 38 000 €/an",
        salarySenior: "48 000 – 55 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "ressources-humaines",
            "management",
            "gestion-de-projet",
        ],
        relatedOrganismes: [
            "studi",
            "cegos",
            "demos",
            "cnam",
            "afpa",
        ],
        skills: [
            "Audit social et diagnostic organisationnel",
            "Sourcing avancé (LinkedIn Recruiter, ATS)",
            "Déploiement SIRH (Lucca, Workday, PayFit)",
            "Cartographie des compétences (GPEC)",
            "Ingénierie financière de la formation (OPCO, FNE)",
            "Droit social et gestion du CSE",
        ],
        dailyTasks: [
            "Éplucher les accords d'entreprise pour identifier les risques juridiques.",
            "Mener des entretiens de diagnostic avec les managers opérationnels.",
            "Paramétrer les workflows de validation sur un nouvel outil SIRH.",
            "Rédiger des recommandations sur la politique de télétravail et la QVT.",
            "Chasser des profils pénuriques pour le compte d'un client industriel.",
        ],
        careerPath: [
            "Directeur des Ressources Humaines (DRH) de transition",
            "HR Business Partner (HRBP) en grand groupe",
            "Créateur de son propre cabinet de conseil RH",
            "Responsable Développement des Talents",
        ],
        metaTitle: "Devenir Consultant RH : Salaire, Formations et Avis",
        metaDescription:
            "Le métier de Consultant RH rapporte entre 32k€ et 55k€. Découvrez les formations certifiantes (RNCP), les vrais salaires et comment vous reconvertir.",
        faq: [
            {
                question: "Faut-il obligatoirement un Bac+5 pour devenir consultant RH ?",
                answer: "Non, un Bac+3 (titre RNCP niveau 6) suffit pour démarrer si vous avez déjà une expérience managériale. Le marché recrute surtout sur vos capacités d'analyse. Des écoles comme Studi proposent des parcours de 12 mois 100 % finançables par le CPF.",
            },
            {
                question: "Peut-on exercer ce métier en freelance ?",
                answer: "Oui, près de 30 % des consultants RH sont indépendants avec un TJM moyen de 450 à 600 €. C'est le statut idéal après 3 à 5 ans en cabinet. Vous facturez des missions d'audit ou de recrutement directement aux PME.",
            },
            {
                question: "Quel est le taux de placement après une reconversion en RH ?",
                answer: "Le taux d'insertion frôle les 82 % à 6 mois pour les certifications RNCP spécialisées en développement RH. Les entreprises s'arrachent les profils capables de structurer leur GPEC face aux difficultés de recrutement actuelles.",
            },
            {
                question: "Quels outils faut-il maîtriser en 2026 ?",
                answer: "Les ATS comme Welcome to the Jungle ou Flatchr, et les SIRH type Lucca ou Eurécia. On n'a pas pu vérifier si la certification sur un outil précis booste le salaire, mais c'est un prérequis sur 80 % des annonces.",
            },
        ],
    },
    {
        slug: "data-scientist",
        name: "Data Scientist",
        description:
            "Le Data Scientist ne fait pas que des tableaux de bord. Vous créez des modèles prédictifs avec Python et du Machine Learning pour dicter la stratégie de l'entreprise. Un métier exigeant, qui paie très bien, mais nécessite un solide bagage en mathématiques.",
        salaryRange: "40 000 € – 65 000 €/an",
        salaryJunior: "40 000 € – 45 000 €/an",
        salarySenior: "55 000 € – 65 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "data-analyst",
            "intelligence-artificielle",
            "devops-cloud",
        ],
        relatedOrganismes: [
            "jedha",
            "datascientest",
            "le-wagon",
            "openclassrooms",
        ],
        skills: [
            "Programmation Python (Pandas, NumPy)",
            "Machine Learning (Scikit-Learn, XGBoost)",
            "Deep Learning (TensorFlow, PyTorch)",
            "Requêtage SQL avancé",
            "Data Visualisation (Tableau, PowerBI)",
            "Déploiement de modèles (Docker, MLflow)",
        ],
        dailyTasks: [
            "Nettoyer et structurer des bases de données massives (ETL)",
            "Entraîner des modèles d'apprentissage automatique sur des données historiques",
            "Optimiser les hyperparamètres pour réduire la marge d'erreur algorithmique",
            "Présenter les prédictions au comité de direction via des dashboards interactifs",
            "Mettre en production les algorithmes avec l'équipe Data Engineering",
        ],
        careerPath: [
            "Lead Data Scientist",
            "Machine Learning Engineer",
            "Data Engineer",
            "Chief Data Officer (CDO)",
        ],
        metaTitle: "Devenir Data Scientist : Salaire, Formations et Compétences",
        metaDescription:
            "Découvrez comment devenir Data Scientist en France. Salaire, formations CPF, bootcamps et compétences requises (Python, ML). Avis et comparatif indépendant.",
        faq: [
            {
                question: "Faut-il faire un Bac+5 ou un bootcamp pour devenir Data Scientist ?",
                answer: "Un Bac+5 en ingénierie ou mathématiques reste la voie royale exigée par 70 % des recruteurs. Les bootcamps intensifs de 6 mois (titre RNCP niveau 6) fonctionnent très bien, à condition que vous ayez déjà un solide bagage scientifique ou une expérience de développeur pour suivre le rythme.",
            },
            {
                question: "Peut-on financer sa formation Data Scientist avec le CPF ?",
                answer: "Oui, si la formation délivre une certification enregistrée au RNCP. Des organismes comme Jedha ou DataScientest proposent des cursus 100 % finançables. Le CPF couvre la totalité si votre solde atteint les 6 500 € requis ; au-delà, vous payez la différence de votre poche.",
            },
            {
                question: "Quelle est la différence concrète avec un Data Analyst ?",
                answer: "Le Data Analyst explique le passé à l'aide de tableaux de bord. Le Data Scientist prédit l'avenir grâce au Machine Learning. Vous passez d'un rôle d'observateur qui manipule du SQL à celui d'ingénieur qui conçoit des algorithmes complexes en Python.",
            },
            {
                question: "Est-ce que l'IA générative va remplacer les Data Scientists ?",
                answer: "Non, l'IA générative automatise l'écriture de code de base, pas la compréhension du métier ni la validation statistique. Vous passerez simplement moins de temps à débugger vos scripts Python, et beaucoup plus de temps à concevoir l'architecture de vos modèles prédictifs.",
            },
        ],
    },
    {
        slug: "designer-ux-ui",
        name: "Designer UX/UI",
        description:
            "Vous concevez des interfaces qui convertissent et fidélisent. Le Designer UX/UI combine la recherche utilisateur analytique et la création visuelle. C'est le garant d'une navigation sans friction, qui maîtrise Figma et valide ses hypothèses via des tests sur des cycles courts.",
        salaryRange: "33 000 € – 52 000 €/an",
        salaryJunior: "33 000 € – 38 000 €/an",
        salarySenior: "45 000 € – 52 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "design-ux-ui",
            "webdesign",
            "product-management",
        ],
        relatedOrganismes: [
            "ironhack",
            "openclassrooms",
            "wild-code-school",
            "studi",
        ],
        skills: [
            "Maîtrise avancée de Figma (composants, variants, auto-layout)",
            "Recherche utilisateur (entretiens qualitatifs, personas)",
            "Prototypage interactif et wireframing",
            "Création et gestion de Design Systems",
            "Tests d'utilisabilité (A/B testing, heatmaps)",
            "Architecture de l'information (tri par cartes)",
        ],
        dailyTasks: [
            "Mener des entretiens utilisateurs pour identifier les points de friction d'un parcours d'achat.",
            "Maquetter des écrans sur Figma en respectant le Design System de l'entreprise.",
            "Animer un atelier d'idéation avec les développeurs et le Product Manager.",
            "Analyser les heatmaps sur Hotjar pour ajuster le placement d'un bouton d'action.",
            "Prototyper une nouvelle fonctionnalité et la tester auprès de 5 utilisateurs finaux.",
        ],
        careerPath: [
            "Product Designer (focus sur l'impact business et les KPI)",
            "Lead UX/UI (management d'une équipe de designers)",
            "UX Researcher (spécialisation en recherche pure et data)",
            "Freelance UX/UI (TJM moyen constaté de 400 à 600 €)",
        ],
        metaTitle: "Devenir Designer UX/UI : Salaires, Formations, Compétences",
        metaDescription:
            "Comment devenir Designer UX/UI ? Salaire de 33k€ à 52k€, formations intensives de 3 à 6 mois (bootcamps, RNCP) et compétences clés (Figma, UX Research).",
        faq: [
            {
                question: "Combien de temps dure une formation pour devenir Designer UX/UI ?",
                answer: "Un bootcamp intensif dure 9 à 12 semaines, soit environ 400 heures de pratique. Vous pouvez aussi opter pour une formation en alternance sur 12 à 24 mois. Les recruteurs regardent le niveau de finition de votre portfolio, pas la durée de vos études.",
            },
            {
                question: "Faut-il savoir coder pour faire de l'UX/UI Design ?",
                answer: "Non, coder n'est pas votre métier. Vous devez cependant comprendre les contraintes techniques du HTML et du CSS. Une maquette irréalisable par les développeurs finit directement à la poubelle, d'où l'importance de concevoir avec la faisabilité technique en tête.",
            },
            {
                question: "Quel est le salaire réel d'un junior en sortie de formation ?",
                answer: "Un profil junior gagne entre 33 000 € et 38 000 € brut par an à Paris, souvent 10 à 15 % de moins en région. Ce montant grimpe vite si vous justifiez de métriques précises sur vos projets, comme une hausse de 20 % du taux de conversion sur une refonte.",
            },
            {
                question: "Comment choisir entre un bootcamp et un cursus classique ?",
                answer: "Si vous visez une reconversion rapide avec un portfolio prêt en 3 mois, visez un bootcamp type Ironhack facturé autour de 7 500 €. Si vous avez moins de 25 ans et cherchez un titre RNCP niveau 6, l'alternance via OpenClassrooms ou Studi est financièrement plus rentable.",
            },
        ],
    },
    {
        slug: "developpeur-web",
        name: "Développeur web",
        description:
            "Le développeur web code les sites et applications que vous utilisez tous les jours. C'est un métier de logique pure et de résolution de bugs constants. Vous passez 80 % de votre temps à lire de la documentation ou corriger des erreurs, mais le taux d'emploi frôle les 90 % à 6 mois.",
        salaryRange: "30 000 € – 55 000 €/an",
        salaryJunior: "30 000 € – 38 000 €/an",
        salarySenior: "45 000 € – 60 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "developpeur-web",
            "devops-cloud",
            "design-ux-ui",
        ],
        relatedOrganismes: [
            "le-wagon",
            "openclassrooms",
            "wild-code-school",
            "ironhack",
        ],
        skills: [
            "Maîtriser JavaScript (ES6+), React.js ou Vue.js pour le front-end",
            "Créer des API REST avec Node.js, Express ou Python (Django/FastAPI)",
            "Gérer des bases de données relationnelles (PostgreSQL) et NoSQL (MongoDB)",
            "Versionner le code avec Git et collaborer sur GitHub ou GitLab",
            "Déployer des applications via Docker et configurer des pipelines CI/CD",
            "Écrire et maintenir des tests unitaires avec Jest ou PyTest",
        ],
        dailyTasks: [
            "Traduire des maquettes Figma en composants React interactifs et responsives.",
            "Connecter l'interface utilisateur à une base de données PostgreSQL via une API.",
            "Traquer et corriger des bugs critiques signalés par les utilisateurs sur Sentry.",
            "Relire le code de vos collègues (code review) avant chaque mise en production.",
            "Participer au daily stand-up de 15 minutes pour annoncer vos blocages techniques.",
        ],
        careerPath: [
            "Lead Developer (encadrement technique d'une équipe de 3 à 5 devs après 4 ans)",
            "Architecte logiciel (conception de l'infrastructure globale des applications)",
            "Ingénieur DevOps (automatisation des déploiements et gestion des serveurs)",
            "Engineering Manager (gestion des carrières et des budgets de l'équipe tech)",
            "Développeur Freelance (TJM moyen de 400 € à 600 € selon la stack technique)",
        ],
        metaTitle: "Devenir Développeur Web : Salaires, Formations et Avis",
        metaDescription:
            "Découvrez le vrai quotidien du développeur web. Salaires (30-55k€), bootcamps de 3 à 6 mois et taux d'insertion. Le code est-il fait pour vous ?",
        faq: [
            {
                question: "Faut-il être bon en maths pour devenir développeur web ?",
                answer: "Non, c'est un mythe tenace. Le développement web demande surtout de la logique, de la rigueur et un bon niveau d'anglais technique. Vous allez écrire des conditions et des boucles, pas résoudre des équations différentielles complexes.",
            },
            {
                question: "Un bootcamp de 3 mois suffit-il pour trouver un emploi ?",
                answer: "Oui, mais attendez-vous à galérer les premiers mois. Les bootcamps comme Le Wagon affichent 93 % d'insertion, mais la réalité implique d'accepter un premier salaire autour de 32 000 € et de coder tous les soirs pour consolider vos bases.",
            },
            {
                question: "Quelle est la meilleure stack technique à apprendre en 2026 ?",
                answer: "Le combo JavaScript, React et Node.js reste le choix le plus sûr pour l'employabilité. Sur France Travail et LinkedIn, plus de 60 % des offres juniors demandent React. Python est un excellent plan B si vous visez la data.",
            },
            {
                question: "Peut-on financer une formation de développeur avec le CPF ?",
                answer: "Le CPF finance 100 % des formations certifiantes RNCP (titre de niveau 5 ou 6) si votre solde couvre le prix total. Sinon, le CPF de transition ou un financement France Travail peuvent compléter la facture de 6 000 € à 7 500 € selon l'école.",
            },
        ],
    },
    {
        slug: "ingenieur-devops-cloud",
        name: "Ingénieur DevOps / Cloud",
        description:
            "Le DevOps n'est pas qu'un buzzword, c'est le profil le plus chassé de la tech. Vous automatisez le déploiement entre les développeurs et l'infrastructure. Taux de chômage quasi nul, salaires à 42k€ en sortie d'école. La pression est forte, mais vous avez les clés du système.",
        salaryRange: "42 000 € – 70 000 €/an",
        salaryJunior: "42 000 € – 48 000 €/an",
        salarySenior: "60 000 € – 75 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "developpeur-web",
            "cybersecurite",
            "intelligence-artificielle",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "datascientest",
            "m2i-formation",
            "orsys",
            "eni-ecole",
        ],
        skills: [
            "Création de pipelines CI/CD (GitLab CI, GitHub Actions, Jenkins)",
            "Conteneurisation et orchestration (Docker, Kubernetes)",
            "Infrastructure as Code - IaC (Terraform, Ansible)",
            "Administration Cloud public (AWS, GCP, Azure)",
            "Scripting et automatisation avancée (Python, Bash, Go)",
            "Monitoring et observabilité (Prometheus, Grafana, ELK)",
        ],
        dailyTasks: [
            "Déployer 50 fois par jour en production sans interruption de service via des pipelines automatisés.",
            "Écrire des scripts Terraform pour provisionner 10 serveurs AWS en 3 minutes.",
            "Surveiller les clusters Kubernetes avec Grafana et traiter les alertes de surcharge CPU en temps réel.",
            "Gérer les droits d'accès IAM et sécuriser les secrets d'infrastructure.",
            "Accompagner 15 développeurs pour intégrer des tests automatisés de sécurité (DevSecOps).",
        ],
        careerPath: [
            "Architecte Cloud (Conception d'infrastructures à haute disponibilité)",
            "Site Reliability Engineer - SRE (Focus sur la résilience et le SLA)",
            "Lead DevOps (Management d'équipe de 5 à 10 ingénieurs)",
            "Consultant Cloud Indépendant (TJM moyen de 650 € à 800 €)",
            "Directeur Technique - CTO (Pilotage de la stratégie technologique)",
        ],
        metaTitle: "Devenir Ingénieur DevOps : Salaires, Formations, Certifications",
        metaDescription:
            "Le profil tech le plus recherché en France. Découvrez comment devenir Ingénieur DevOps, les salaires réels (42-70k€) et les formations certifiantes RNCP.",
        faq: [
            {
                question: "Faut-il être développeur avant de devenir DevOps ?",
                answer: "Non, mais savoir coder est obligatoire. Vous passerez 40 % de votre temps à écrire du Python ou du Go pour automatiser l'infrastructure. Venir du développement web ou de l'administration système classique facilite énormément la transition.",
            },
            {
                question: "Une formation bootcamp de 3 mois suffit-elle pour être embauché ?",
                answer: "Un bootcamp de 400h certifié RNCP niveau 6 vous donne les bases sur Docker et Kubernetes, avec un taux d'insertion de 75 % à 6 mois. Les recruteurs exigeront néanmoins une première certification AWS ou Azure pour valider votre profil technique.",
            },
            {
                question: "Peut-on financer une formation DevOps avec le CPF ?",
                answer: "Oui, le CPF finance 100 % de la formation si votre solde couvre le prix. Une formation DataScientest coûte environ 5 000 €. Si votre compte affiche 3 000 €, vous payez la différence. Les salariés peuvent mobiliser le CPF de transition.",
            },
            {
                question: "Quelles certifications Cloud passer en priorité en 2026 ?",
                answer: "Passez l'AWS Certified Solutions Architect Associate ou la CKA (Kubernetes Administrator). Ce sont les standards du marché. On n'a pas pu vérifier l'impact exact des certifications GCP sur les salaires juniors, mais AWS concentre un tiers des offres d'emploi françaises.",
            },
        ],
    },
    {
        slug: "gestionnaire-paie",
        name: "Gestionnaire de paie",
        description:
            "Le gestionnaire de paie transforme le temps de travail en salaire net. Un poste sous haute tension avec la DSN et les mises à jour légales. La pénurie est telle que 85 % des diplômés trouvent un CDI dans les 3 mois post-formation certifiante. Vous aimez les règles strictes ?",
        salaryRange: "28 000 € – 45 000 €/an",
        salaryJunior: "28 000 € – 32 000 €/an",
        salarySenior: "38 000 € – 45 000 €/an",
        demandLevel: "très forte",
        relatedDomaines: [
            "comptabilite-gestion",
            "ressources-humaines",
        ],
        relatedOrganismes: [
            "studi",
            "afpa",
            "cnam",
            "cegos",
            "m2i-formation",
        ],
        skills: [
            "Maîtrise des logiciels Silae ou Cegid",
            "Élaboration et télétransmission de la DSN",
            "Veille juridique et droit social",
            "Calcul des charges sociales patronales et salariales",
            "Traitement des IJSS et arrêts maladie",
            "Paramétrage d'un SIRH",
        ],
        dailyTasks: [
            "Saisir les variables mensuelles (heures supplémentaires, primes, absences) dans le logiciel de paie.",
            "Contrôler la conformité de 200 à 300 bulletins avant la validation définitive.",
            "Générer et envoyer la DSN aux organismes sociaux chaque 5 ou 15 du mois.",
            "Appliquer les nouvelles conventions collectives après lecture du Journal Officiel.",
            "Répondre aux questions des salariés sur le prélèvement à la source ou leurs indemnités de congés.",
        ],
        careerPath: [
            "Responsable paie",
            "Consultant SIRH",
            "Contrôleur de gestion sociale",
            "Responsable administration du personnel",
        ],
        metaTitle: "Devenir Gestionnaire de paie : Formations, Salaire, Avis",
        metaDescription:
            "Le marché manque de gestionnaires de paie. Découvrez les formations RNCP (6 à 12 mois), les salaires réels (28-45k€) et les compétences exigées.",
        faq: [
            {
                question: "Faut-il être un expert en mathématiques pour réussir ?",
                answer: "Non, maîtriser les règles de droit social compte bien plus que le calcul mental. Les logiciels de paie font les mathématiques à votre place. Votre vraie valeur ajoutée se situe dans le paramétrage correct de ces outils et l'interprétation des conventions collectives.",
            },
            {
                question: "Combien de temps dure une reconversion vers la paie ?",
                answer: "Comptez entre 6 et 12 mois pour obtenir un Titre Professionnel de niveau 5 (Bac+2). En format e-learning intensif ou alternance, le rythme est lourd. Les recruteurs exigent ce diplôme certifié ou une première expérience concrète pour vous confier un portefeuille d'employés.",
            },
            {
                question: "Le métier de gestionnaire de paie va-t-il disparaître avec l'IA ?",
                answer: "L'intelligence artificielle automatise la saisie, mais ne remplace pas l'analyse juridique. La législation française reste la plus complexe au monde. Vous passerez moins de temps à taper des heures supplémentaires et beaucoup plus à auditer des anomalies.",
            },
            {
                question: "Peut-on financer sa formation avec le CPF ?",
                answer: "Oui, la majorité des titres RNCP de gestionnaire de paie sont éligibles au CPF. Si votre solde couvre le prix moyen de 3 500 €, le financement est direct. Au-delà, vous payez la différence, bien qu'un co-financement France Travail reste possible selon les régions.",
            },
        ],
    },
    {
        slug: "responsable-marketing-digital",
        name: "Responsable marketing digital",
        description:
            "Vous pilotez l'acquisition et la fidélisation en ligne. Concrètement : vous gérez 10 000 € de budget Ads mensuel, optimisez le trafic via Semrush et analysez les conversions sur GA4. C'est un poste sous pression, mais le taux de chômage y frôle le zéro.",
        salaryRange: "32 000 € – 55 000 €/an",
        salaryJunior: "32 000 € – 38 000 €/an",
        salarySenior: "45 000 € – 55 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "marketing-digital",
            "communication-digitale",
            "gestion-de-projet",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "studi",
            "livementor",
            "cegos",
        ],
        skills: [
            "Maîtrise de Google Analytics 4 et Looker Studio pour le reporting de données",
            "Pilotage de campagnes SEA via Google Ads (Search, Display, Max Perf)",
            "Gestion des budgets Social Ads sur Meta Ads Manager et LinkedIn Campaign Manager",
            "Optimisation SEO technique et sémantique avec Semrush ou Ahrefs",
            "Mise en place de workflows de marketing automation sur Hubspot",
        ],
        dailyTasks: [
            "Analyser les KPI de la veille sur Looker Studio pour ajuster les enchères Google Ads.",
            "Briefer les créatifs sur les prochains visuels Meta Ads avec des données de conversion chiffrées.",
            "Auditer les pages perdant des positions SEO et intégrer les mots-clés manquants.",
            "Paramétrer des séquences d'emails automatisées dans Hubspot pour recibler les abandons de panier.",
        ],
        careerPath: [
            "Directeur Marketing (CMO) après 5 à 8 ans d'expérience.",
            "Head of Growth pour se concentrer uniquement sur l'acquisition rapide.",
            "Consultant indépendant avec un TJM moyen de 450 € à 600 €.",
            "Expert SEA/SEO senior en agence média.",
        ],
        metaTitle: "Devenir Responsable marketing digital : Salaire & Avis",
        metaDescription:
            "Le responsable marketing digital gère les budgets d'acquisition. Salaire junior : 32k€. Découvrez les formations RNCP qui recrutent vraiment en 2026.",
        faq: [
            {
                question: "Quelle formation choisir pour devenir responsable marketing digital ?",
                answer: "Un titre RNCP de niveau 6 (Bac+3) suffit pour démarrer. Studi ou OpenClassrooms proposent des parcours en ligne de 12 mois à environ 4 500 €, finançables CPF. Les employeurs regardent surtout vos certifications Google et Meta.",
            },
            {
                question: "Le marché recrute-t-il vraiment des profils juniors ?",
                answer: "Oui, à condition de prouver votre retour sur investissement. Les entreprises embauchent à 32 000 € les juniors capables d'optimiser une campagne Google Ads rentable. Sans portfolio concret ni maîtrise de GA4, le taux d'insertion s'effondre.",
            },
            {
                question: "Faut-il savoir coder pour faire du marketing digital ?",
                answer: "Non, mais comprendre le HTML/CSS et le fonctionnement d'une API est indispensable. Vous allez installer des tags de tracking sur Google Tag Manager et discuter avec des développeurs. Savoir lire leur code fait gagner un temps précieux.",
            },
        ],
    },
    {
        slug: "product-owner",
        name: "Product Owner / Product Manager",
        description:
            "Le Product Owner traduit la vision business en fonctionnalités livrables par les développeurs. Vous gérez le backlog, rédigez les user stories et priorisez les sprints. Un rôle charnière entre la technique et le métier, où dire non devient votre principale compétence pour tenir les délais.",
        salaryRange: "38 000 € – 60 000 €/an",
        salaryJunior: "38 000 € – 45 000 €/an",
        salarySenior: "50 000 € – 65 000 €/an",
        demandLevel: "forte",
        relatedDomaines: [
            "product-management",
            "gestion-de-projet",
            "design-ux-ui",
            "developpeur-web",
        ],
        relatedOrganismes: [
            "openclassrooms",
            "le-wagon",
            "orsys",
            "cegos",
        ],
        skills: [
            "Rédaction de User Stories et critères d'acceptation",
            "Priorisation du Product Backlog (méthode MoSCoW, RICE)",
            "Maîtrise de Jira, Confluence ou Linear",
            "Animation de rituels Scrum (Sprint planning, retro)",
            "Analyse de données produit (Mixpanel, Amplitude)",
            "Création de wireframes basiques (Figma, Balsamiq)",
        ],
        dailyTasks: [
            "Affiner le backlog avec les parties prenantes pour préparer le prochain sprint.",
            "Répondre aux blocages techniques des développeurs lors du daily stand-up.",
            "Rédiger les spécifications fonctionnelles des prochaines features.",
            "Analyser les métriques d'usage de la dernière fonctionnalité mise en production.",
            "Recetter les tickets livrés pour s'assurer qu'ils respectent la Definition of Done.",
        ],
        careerPath: [
            "Senior Product Manager (gestion d'un scope produit plus large)",
            "Head of Product / VP Product (management d'équipe PM/PO)",
            "Product Ops (optimisation des process produit)",
            "Scrum Master / Coach Agile (focus exclusif sur la méthodologie)",
            "CPO (Chief Product Officer) au comité de direction",
        ],
        metaTitle: "Devenir Product Owner : salaires, formations et compétences",
        metaDescription:
            "Découvrez le métier de Product Owner. Salaires (38-60k€), tâches quotidiennes, compétences Jira/Scrum et formations RNCP pour y accéder.",
        faq: [
            {
                question: "Faut-il savoir coder pour devenir Product Owner ?",
                answer: "Non, vous n'écrirez aucune ligne de code. Vous devez cependant comprendre l'architecture technique pour évaluer la complexité d'une tâche. Un développeur vous annonce 5 jours sur un ticket ? Vous devez être capable de challenger cette estimation.",
            },
            {
                question: "Quelle est la différence exacte entre un Product Owner et un Product Manager ?",
                answer: "Le Product Manager se concentre sur la stratégie (le quoi et le pourquoi), tandis que le Product Owner exécute (le comment et le quand). Dans la réalité des entreprises françaises, vous ferez souvent les deux pour 45 000 € par an.",
            },
            {
                question: "Quelle certification choisir pour prouver ses compétences Agile ?",
                answer: "Le PSPO I de Scrum.org coûte 200 $ et reste la référence mondiale incontestée. Oubliez les attestations de fin de formation internes, les recruteurs filtrent directement les CV sur ces certifications officielles pour valider vos acquis.",
            },
            {
                question: "Combien de temps dure une reconversion vers le Product Management ?",
                answer: "Comptez 2 à 3 mois en bootcamp intensif, ou 6 à 12 mois en alternance. Le CPF finance 100 % des formations certifiées RNCP niveau 6, ce qui vous garantit un titre reconnu et un taux d'insertion d'environ 80 % à 6 mois.",
            },
        ],
    },
];

export function getMetierBySlug(slug: string): Metier | undefined {
    return metiers.find((m) => m.slug === slug);
}
