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
];

export function getMetierBySlug(slug: string): Metier | undefined {
    return metiers.find((m) => m.slug === slug);
}
