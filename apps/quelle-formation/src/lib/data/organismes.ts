/**
 * Top 30 organismes de formation pour le comparateur
 * Données réalistes pour le marché français 2026
 */

type AffiliateProgram =
    | {
        affiliateUrl: string;
        affiliateNetwork: string;
        affiliateCommission: string;
        affiliateVerifiedAt: string;
        affiliateSourceUrl: string;
    }
    | {
        affiliateUrl?: undefined;
        affiliateNetwork?: undefined;
        affiliateCommission?: undefined;
        affiliateVerifiedAt?: undefined;
        affiliateSourceUrl?: undefined;
    };

export type Organisme = {
    slug: string;
    name: string;
    website: string;
    tagline: string;
    description: string;
    prosAndCons: { pros: string[]; cons: string[] };
    foundedYear: number;
    headquarters: string;
    certifications: string[];
    domaines: string[]; // slugs de domaines couverts
    formats: ("présentiel" | "distanciel" | "hybride" | "e-learning")[];
    cpfEligible: boolean;
    priceRange: string;
    studentsCount: string;
    rating: number;
    reviewCount: number;
    campusVilles: string[]; // slugs des villes avec campus/présence physique
    metaTitle: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
    logoPath: string;
    decisionGuide?: {
        title: string;
        text: string;
    }[];
    sources?: {
        label: string;
        url: string;
        date: string;
    }[];
} & AffiliateProgram;

export const organismes: Organisme[] = [
    {
        slug: "openclassrooms",
        name: "OpenClassrooms",
        website: "https://openclassrooms.com",
        tagline: "Des parcours en ligne par projets avec mentorat individuel",
        description:
            "OpenClassrooms propose des parcours entièrement en ligne, organisés autour de projets professionnels et d'une séance de mentorat individuelle chaque semaine. Ce format convient surtout aux personnes capables d'avancer en autonomie entre deux rendez-vous. Avant de s'inscrire, il faut vérifier la certification visée, la durée recommandée du parcours et le budget total selon son rythme : l'éligibilité au CPF et les autres financements varient selon la formation et la situation du candidat.",
        prosAndCons: {
            pros: [
                "Diplômes reconnus par l'État (RNCP Bac+2 à Bac+5)",
                "Mentorat individuel hebdomadaire avec un professionnel",
                "Apprentissage par projets concrets (portfolio à la sortie)",
                "100 % en ligne, rythme flexible",
                "Portfolio construit au fil des projets évalués",
            ],
            cons: [
                "Nécessite de l'autodiscipline (pas de cours en présentiel)",
                "Certains parcours sont longs (12-18 mois)",
                "Peu adapté aux personnes qui ont besoin d'un cadre présentiel quotidien",
            ],
        },
        foundedYear: 1999,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "data-analyst",
            "marketing-digital",
            "cybersecurite",
            "design-ux-ui",
            "gestion-de-projet",
            "ressources-humaines",
            "comptabilite",
            "product-management",
            "devops-cloud",
        ],
        formats: ["e-learning"],
        cpfEligible: true,
        priceRange: "300 € – 1 200 €/mois",
        studentsCount: "300 000/mois",
        rating: 4.0,
        reviewCount: 1386,
        metaTitle: "OpenClassrooms : avis, prix et format en 2026",
        metaDescription:
            "Notre avis sur OpenClassrooms en 2026 : format par projets, mentorat hebdomadaire, prix, financements et profils auxquels la plateforme convient.",
        decisionGuide: [
            {
                title: "À choisir si…",
                text: "vous cherchez une formation à distance structurée par des projets, avec un rendez-vous individuel hebdomadaire pour faire le point et débloquer votre progression.",
            },
            {
                title: "À comparer si…",
                text: "vous avez besoin de cours collectifs fréquents, d'un campus ou d'un calendrier de promotion très cadré : un bootcamp ou une école hybride peut mieux correspondre à votre façon d'apprendre.",
            },
            {
                title: "Point à vérifier avant de payer",
                text: "le titre ou diplôme préparé, la durée réaliste à votre rythme et le reste à financer. OpenClassrooms affiche un abonnement direct de 300 à 1 200 € par mois selon la formation ; le CPF, l'alternance et les autres prises en charge obéissent à leurs propres conditions.",
            },
        ],
        sources: [
            {
                label: "OpenClassrooms — expérience de formation et mentorat",
                url: "https://openclassrooms.com/fr/learning-experience",
                date: "consulté en août 2026",
            },
            {
                label: "OpenClassrooms — financements et tarifs",
                url: "https://openclassrooms.com/fr/funding/student",
                date: "consulté en août 2026",
            },
            {
                label: "Trustpilot — avis OpenClassrooms",
                url: "https://fr.trustpilot.com/review/openclassrooms.com",
                date: "consulté en août 2026",
            },
            {
                label: "France Compétences — Répertoire national des certifications professionnelles",
                url: "https://www.francecompetences.fr/recherche_certificationprofessionnelle/",
                date: "consulté en août 2026",
            },
        ],
        faq: [
            {
                question: "OpenClassrooms est-il reconnu par l'État ?",
                answer:
                    "Oui, OpenClassrooms délivre des diplômes inscrits au RNCP (Répertoire National des Certifications Professionnelles), reconnus par l'État français du niveau Bac+2 au Bac+5. L'organisme est certifié Qualiopi.",
            },
            {
                question: "Les formations OpenClassrooms sont-elles éligibles au CPF ?",
                answer:
                    "Oui, la grande majorité des parcours diplômants OpenClassrooms sont éligibles au CPF (Compte Personnel de Formation). Vous pouvez utiliser votre solde CPF pour financer tout ou partie de la formation via MonCompteFormation.gouv.fr.",
            },
            {
                question: "Combien coûte une formation OpenClassrooms ?",
                answer:
                    "Pour un paiement direct, OpenClassrooms affiche des abonnements de 300 € à 1 200 € par mois selon la formation. Le coût total dépend donc du parcours et de votre durée réelle. Selon votre situation et l'éligibilité de la formation, le CPF, l'alternance ou un autre financeur peuvent couvrir tout ou partie du montant.",
            },
        ],
        campusVilles: [],
        logoPath: "/logos/openclassrooms.png",
    },
    {
        slug: "jedha",
        name: "Jedha",
        tagline: "L'école de la Data, de l'IA et de la Cybersécurité",
        website: "https://www.jedha.co",
        description:
            "Jedha est une école française spécialisée dans la Data, l'IA et la Cybersécurité, fondée en 2017. Elle propose des bootcamps intensifs (sur campus ou en ligne) allant de l'initiation (Essentials) au niveau expert. Les formations sont certifiantes et éligibles CPF. Jedha est présente à Paris, Lyon, Bordeaux et Marseille, et propose aussi des formats 100 % en ligne.",
        prosAndCons: {
            pros: [
                "Spécialisée Data/IA/Cyber — expertise reconnue",
                "Bootcamps intensifs avec résultats rapides (3-6 mois)",
                "Campus dans les grandes villes françaises",
                "Forte communauté alumni et réseau entreprises",
                "Certifications reconnues (RNCP)",
            ],
            cons: [
                "Prix élevé pour les bootcamps full-time",
                "Le rythme intensif ne convient pas à tous les profils",
                "Offre limitée à Data/IA/Cyber (pas de dev web classique)",
            ],
        },
        foundedYear: 2017,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: ["data-analyst", "intelligence-artificielle", "cybersecurite", "devops-cloud"],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "1 500 € – 7 995 €",
        studentsCount: "5 000+",
        rating: 4.7,
        reviewCount: 1200,
        metaTitle: "Jedha Avis 2026 : Prix, Bootcamps Data/IA et Test",
        metaDescription:
            "Avis sur Jedha en 2026. Bootcamps Data, IA et Cybersécurité. Prix, campus, CPF et avis alumni. OpenClassrooms vs Jedha : notre comparatif.",
        faq: [
            {
                question: "Quels bootcamps propose Jedha ?",
                answer:
                    "Jedha propose 3 niveaux de bootcamp : Essentials (initiation, 75h), Fullstack (bootcamp complet, 450h) et Lead (expert, 150h). Les domaines couverts sont Data Analysis, Data Science, Data Engineering, Cybersécurité et IA Generative.",
            },
            {
                question: "Jedha est-il éligible au CPF ?",
                answer:
                    "Oui, les formations Jedha sont éligibles au CPF. L'organisme est certifié Qualiopi et les parcours sont inscrits au RNCP. Le financement est possible via CPF, OPCO, France Travail et facilités de paiement.",
            },
        ],
        campusVilles: ["paris", "lyon", "marseille", "bordeaux", "lille", "toulouse"],
        logoPath: "/logos/jedha.png",
    },
    {
        slug: "livementor",
        name: "LiveMentor",
        website: "https://www.livementor.com",
        tagline: "L'école des entrepreneurs et freelances",
        description:
            "LiveMentor est une école en ligne française dédiée à l'entrepreneuriat et au freelancing. Fondée en 2014, elle a formé plus de 30 000 personnes. Chaque formation inclut un accompagnement personnalisé avec un mentor expert, des cours vidéo et une communauté d'entraide. Les formations couvrent la création d'entreprise, le marketing digital, la rédaction web, le SEO et plus.",
        prosAndCons: {
            pros: [
                "Accompagnement personnalisé avec un mentor dédié pendant 3 mois",
                "Spécialisé entrepreneuriat et freelance — contenu actionnable",
                "Communauté d'entraide active (20 000+ membres)",
                "Formations éligibles CPF avec certification",
            ],
            cons: [
                "Pas de diplôme RNCP (certificat de compétences uniquement)",
                "Prix relativement élevé pour de la formation en ligne",
                "Offre limitée aux domaines entrepreneuriaux",
            ],
        },
        foundedYear: 2014,
        headquarters: "Paris",
        certifications: ["Qualiopi"],
        domaines: ["creation-entreprise", "marketing-digital", "commerce-vente"],
        formats: ["e-learning"],
        cpfEligible: true,
        priceRange: "1 800 € – 3 000 €",
        studentsCount: "30 000+",
        rating: 4.5,
        reviewCount: 2800,
        affiliateUrl: "https://www.livementor.com/rencontrez-un-conseiller-livementor/?last_funnel=Funnel%20partenaire&last_source_level_3=yann_lephay&last_source_level_2=Affili%C3%A9",
        affiliateNetwork: "direct",
        affiliateCommission: "15 % TTC par commande",
        affiliateVerifiedAt: "2026-08-02",
        affiliateSourceUrl: "https://www.livementor.com/devenir-affilie-livementor/",
        metaTitle: "LiveMentor Avis 2026 : Prix, Formations et Test",
        metaDescription:
            "Avis sur LiveMentor en 2026. Formations entrepreneuriat et freelance avec mentorat. Prix, CPF et avis. Comparatif avec OpenClassrooms.",
        faq: [
            {
                question: "LiveMentor est-il éligible au CPF ?",
                answer:
                    "Oui, les formations LiveMentor sont éligibles au CPF. L'organisme est certifié Qualiopi. Vous pouvez utiliser votre solde CPF sur MonCompteFormation.gouv.fr.",
            },
        ],
        campusVilles: [],
        logoPath: "/logos/livementor.png",
    },
    {
        slug: "creactifs",
        name: "CréActifs",
        website: "https://creactifs.com",
        tagline: "Les formations conçues par des entrepreneurs, pour les entrepreneurs",
        description:
            "CréActifs est un organisme français spécialisé dans la création, la reprise et le développement d'entreprise. Depuis 2010, il accompagne les entrepreneurs avec des formations à distance, des ateliers en petit groupe et des rendez-vous individuels. Son catalogue couvre notamment la création d'entreprise, le marketing digital, la vente, la comptabilité et l'intelligence artificielle.",
        prosAndCons: {
            pros: [
                "Plus de 35 000 entrepreneurs accompagnés depuis 2010",
                "Formateurs eux-mêmes entrepreneurs",
                "Accompagnement individuel et ateliers en petit groupe",
                "Formations certifiantes et éligibles au CPF selon le parcours",
                "Accès à vie à la communauté CréActifs sur les formules concernées",
            ],
            cons: [
                "Tarifs élevés sans prise en charge ou financement",
                "Catalogue principalement destiné aux entrepreneurs et dirigeants de TPE",
                "Le contenu et la durée varient sensiblement selon la formule choisie",
            ],
        },
        foundedYear: 2010,
        headquarters: "Paris",
        certifications: ["Qualiopi", "Répertoire spécifique"],
        domaines: [
            "creation-entreprise",
            "marketing-digital",
            "commerce-vente",
            "comptabilite",
            "intelligence-artificielle",
        ],
        formats: ["distanciel", "e-learning", "hybride"],
        cpfEligible: true,
        priceRange: "1 500 € – 3 500 €",
        studentsCount: "35 000+",
        rating: 5,
        reviewCount: 1300,
        affiliateUrl: "https://lb.affilae.com/r/?p=66ea961280385454e9869531&af=262&lp=https%3A%2F%2Fcreactifs.com%2F%3Futm_source%3Daffiliation%26utm_campaign%3DYannBuilds",
        affiliateNetwork: "Affilae",
        affiliateCommission: "15 % par vente validée",
        affiliateVerifiedAt: "2026-08-02",
        affiliateSourceUrl: "https://app.affilae.com/en/publisher/marketplace/programme-affiliation-creactifs-formation-pour-entrepreneur",
        metaTitle: "CréActifs Avis 2026 : Prix, Formations et CPF",
        metaDescription:
            "Avis sur CréActifs en 2026 : formations pour entrepreneurs, prix, accompagnement, CPF, avantages et limites. Comparez avant de vous inscrire.",
        faq: [
            {
                question: "Les formations CréActifs sont-elles éligibles au CPF ?",
                answer:
                    "Les parcours certifiants indiqués comme éligibles peuvent être financés avec le CPF. Il faut vérifier l'éligibilité et les conditions du parcours choisi avant l'inscription.",
            },
            {
                question: "Combien coûte une formation CréActifs ?",
                answer:
                    "Les tarifs observés vont généralement de 1 500 € pour une formation seule à 3 500 € pour certains parcours composés de plusieurs formations. Le prix dépend du thème, de la durée et du niveau d'accompagnement.",
            },
            {
                question: "À qui s'adressent les formations CréActifs ?",
                answer:
                    "CréActifs s'adresse principalement aux porteurs de projet, indépendants, créateurs ou repreneurs d'entreprise et dirigeants de TPE qui veulent développer des compétences directement applicables à leur activité.",
            },
        ],
        campusVilles: ["paris"],
        logoPath: "/logos/creactifs.svg",
    },
    {
        slug: "le-wagon",
        name: "Le Wagon",
        website: "https://www.lewagon.com/fr",
        tagline: "Le bootcamp tech #1 en Europe",
        description:
            "Le Wagon est le bootcamp de programmation leader en Europe, présent dans 40+ villes à travers le monde. Fondé à Paris en 2013, il propose des bootcamps intensifs de 9 semaines en développement web et data science. Le Wagon est classé #1 mondial sur Coursereport et Switchup. Les formations mélangent théorie et projets concrets avec un focus sur l'employabilité.",
        prosAndCons: {
            pros: [
                "Bootcamp #1 en Europe — réseau mondial de 25 000+ alumni",
                "Format intensif 9 semaines avec résultat immédiat",
                "Campus dans les grandes villes françaises",
                "Excellent taux d'insertion professionnelle (93 %)",
                "Projets concrets et demo day devant des recruteurs",
            ],
            cons: [
                "Prix élevé (entre 6 000 € et 9 000 €)",
                "Rythme très intensif — pas compatible avec un emploi",
                "Pas de formation longue (on apprend les bases en 9 semaines)",
            ],
        },
        foundedYear: 2013,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: ["developpeur-web", "data-analyst", "intelligence-artificielle"],
        formats: ["présentiel", "distanciel"],
        cpfEligible: true,
        priceRange: "4 500 € – 9 000 €",
        studentsCount: "25 000+",
        rating: 4.8,
        reviewCount: 3500,
        metaTitle: "Le Wagon Avis 2026 : Prix, Bootcamp et Test Complet",
        metaDescription:
            "Avis sur Le Wagon en 2026. Bootcamp dev web et data science en 9 semaines. Prix, campus, CPF et avis alumni. Le meilleur bootcamp ?",
        faq: [
            {
                question: "Le Wagon vaut-il le coup ?",
                answer:
                    "Oui, Le Wagon est considéré comme le meilleur bootcamp tech en Europe avec un taux d'insertion de 93 % dans les 6 mois suivant la formation. Le réseau alumni de 25 000+ personnes est un véritable atout pour la carrière.",
            },
        ],
        campusVilles: ["paris", "lyon", "marseille", "bordeaux", "nantes", "lille"],
        logoPath: "/logos/le-wagon.png",
    },
    {
        slug: "datascientest",
        name: "DataScientest",
        website: "https://datascientest.com",
        tagline: "La formation Data & IA en continu ou en bootcamp",
        description:
            "DataScientest est un organisme français spécialisé dans les formations Data, IA et Cloud. Fondé en 2019, il se distingue par un format hybride original (70 % en ligne, 30 % en masterclass live) qui permet de se former tout en continuant à travailler. Les formations sont développées avec des universités partenaires (Sorbonne, Mines).",
        prosAndCons: {
            pros: [
                "Format continu compatible avec un emploi (70 % asynchrone)",
                "Partenariats universitaires prestigieux (Sorbonne, Mines)",
                "Large catalogue Data/IA/Cloud/Cyber",
                "Certifications reconnues (RNCP + Microsoft, AWS)",
            ],
            cons: [
                "L'aspect 70 % en ligne demande de la discipline",
                "Moins de présentiel que Jedha ou Le Wagon",
                "Marque moins connue du grand public",
            ],
        },
        foundedYear: 2019,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: ["data-analyst", "intelligence-artificielle", "cybersecurite", "devops-cloud"],
        formats: ["distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "3 000 € – 8 000 €",
        studentsCount: "15 000+",
        rating: 4.4,
        reviewCount: 950,
        metaTitle: "DataScientest Avis 2026 : Prix, Formations Data et Test",
        metaDescription:
            "Avis sur DataScientest en 2026. Formations Data, IA et Cloud. Format continu, partenariats Sorbonne. Prix, CPF et avis. Jedha vs DataScientest.",
        faq: [
            {
                question: "DataScientest ou Jedha ?",
                answer:
                    "DataScientest est meilleur si vous travaillez en parallèle (format continu 70/30 %). Jedha est plus adapté si vous préférez un bootcamp intensif sur campus. Les deux sont certifiés Qualiopi et éligibles CPF.",
            },
        ],
        campusVilles: ["paris"],
        logoPath: "/logos/datascientest.png",
    },
    {
        slug: "studi",
        name: "Studi",
        website: "https://www.studi.com",
        tagline: "La grande école 100 % en ligne",
        description:
            "Studi est la plus grande école en ligne en France avec plus de 200 formations diplômantes du CAP au Bac+5. Fondé en 2019 par réunion de plusieurs organismes, Studi couvre un spectre très large : informatique, commerce, comptabilité, immobilier, santé, design. Prix parmi les plus compétitifs du marché.",
        prosAndCons: {
            pros: [
                "200+ formations diplômantes (RNCP)",
                "Prix parmi les plus low du marché",
                "Large catalogue multi-domaines",
                "Diplômes reconnus du CAP au Bac+5",
            ],
            cons: [
                "Qualité variable selon les parcours",
                "Accompagnement personnalisé limité sur les formules d'entrée de gamme",
                "UX de la plateforme perfectible",
            ],
        },
        foundedYear: 2019,
        headquarters: "Montpellier",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "marketing-digital",
            "comptabilite",
            "immobilier",
            "ressources-humaines",
            "graphisme",
            "commerce-vente",
            "management",
        ],
        formats: ["e-learning"],
        cpfEligible: true,
        priceRange: "150 € – 500 €/mois",
        studentsCount: "70 000+",
        rating: 3.9,
        reviewCount: 4200,
        metaTitle: "Studi Avis 2026 : Prix, Formations et Test Complet",
        metaDescription:
            "Avis sur Studi en 2026. 200+ formations diplômantes en ligne. Prix compétitifs, CPF et avis. Studi vs OpenClassrooms : notre comparatif.",
        faq: [
            {
                question: "Studi est-il sérieux ?",
                answer:
                    "Oui, Studi est certifié Qualiopi et délivre des diplômes inscrits au RNCP. C'est le plus grand organisme de formation en ligne en France avec 70 000+ étudiants. La qualité varie selon les parcours.",
            },
        ],
        campusVilles: [],
        logoPath: "/logos/studi.svg",
    },
    {
        slug: "ironhack",
        name: "Ironhack",
        website: "https://www.ironhack.com/fr",
        tagline: "Le bootcamp tech international à Paris",
        description:
            "Ironhack est un bootcamp tech international présent à Paris, fondé à Madrid en 2013. Il propose des formations intensives en développement web, UX/UI design, data analytics et cybersécurité. Le format combine présentiel et online avec un focus fort sur la pratique.",
        prosAndCons: {
            pros: [
                "Campus international à Paris (réseau mondial)",
                "Bootcamps intensifs orientés pratique",
                "Bon programme de career services",
                "Formations UX/UI parmi les meilleures du marché",
            ],
            cons: [
                "Prix élevé",
                "Présence limitée hors Paris en France",
                "Certifications moins reconnues en France que Le Wagon",
            ],
        },
        foundedYear: 2013,
        headquarters: "Paris (France) / Madrid (global)",
        certifications: ["Qualiopi"],
        domaines: ["developpeur-web", "design-ux-ui", "data-analyst", "cybersecurite"],
        formats: ["présentiel", "distanciel"],
        cpfEligible: true,
        priceRange: "5 000 € – 9 000 €",
        studentsCount: "15 000+",
        rating: 4.5,
        reviewCount: 780,
        metaTitle: "Ironhack Paris Avis 2026 : Prix, Bootcamps et Test",
        metaDescription:
            "Avis sur Ironhack Paris en 2026. Bootcamps dev web, UX/UI, data et cyber. Prix, CPF et avis. Le Wagon vs Ironhack : notre comparatif.",
        faq: [
            {
                question: "Ironhack ou Le Wagon ?",
                answer:
                    "Les deux sont d'excellents bootcamps. Le Wagon est plus fort en dev web et a un réseau alumni plus large en France. Ironhack excelle en UX/UI design et data analytics. Les deux sont éligibles CPF.",
            },
        ],
        campusVilles: ["paris", "bordeaux"],
        logoPath: "/logos/ironhack.png",
    },
    {
        slug: "wild-code-school",
        name: "Wild Code School",
        website: "https://www.wildcodeschool.com/fr-fr",
        tagline: "L'école tech européenne pédagogie projet",
        description:
            "La Wild Code School est une école tech européenne qui forme aux métiers du numérique par la pédagogie de projet. Présente dans 20+ campus en Europe (Paris, Lyon, Bordeaux, Toulouse...), elle propose des formations de 5 mois en développement web, data et cybersécurité.",
        prosAndCons: {
            pros: [
                "Campus dans de nombreuses villes françaises",
                "Pédagogie par projet très pratique",
                "Tarif plus abordable que Le Wagon",
                "Formats temps plein et temps partiel",
            ],
            cons: [
                "Durée plus longue (5 mois vs 9 semaines pour Le Wagon)",
                "Moins de notoriété internationale",
                "Contenu parfois généraliste",
            ],
        },
        foundedYear: 2014,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: ["developpeur-web", "data-analyst", "cybersecurite"],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "3 000 € – 7 000 €",
        studentsCount: "10 000+",
        rating: 4.3,
        reviewCount: 650,
        metaTitle: "Wild Code School Avis 2026 : Prix, Formations et Campus",
        metaDescription:
            "Avis sur la Wild Code School en 2026. Formations dev web, data et cyber. Campus en France, CPF. Wild Code School vs Le Wagon : notre comparatif.",
        faq: [
            {
                question: "Combien coûte la Wild Code School ?",
                answer:
                    "Les formations Wild Code School coûtent entre 3 000 € et 7 000 € selon le parcours. Le financement est possible via CPF, OPCO et France Travail. Des facilités de paiement sont disponibles.",
            },
        ],
        campusVilles: ["paris", "lyon", "bordeaux", "toulouse", "nantes", "strasbourg"],
        logoPath: "/logos/wild-code-school.png",
    },
    {
        slug: "afpa",
        name: "AFPA",
        website: "https://www.afpa.fr",
        tagline: "Le premier organisme de formation professionnelle en France",
        description:
            "L'AFPA (Agence nationale pour la Formation Professionnelle des Adultes) est le premier organisme de formation professionnelle en France, avec plus de 70 ans d'expérience. Elle forme chaque année plus de 100 000 personnes dans 200+ métiers, principalement en présentiel dans ses 115 centres répartis sur tout le territoire. L'AFPA est spécialisée dans les formations qualifiantes et les reconversions professionnelles, avec un fort ancrage dans les métiers du bâtiment, de l'industrie, du tertiaire et du numérique.",
        prosAndCons: {
            pros: [
                "115 centres de formation partout en France",
                "70 ans d'expertise en formation professionnelle",
                "Hébergement possible sur les campus pour les formations longues",
                "Formations très orientées pratique et métier",
                "Partenariats solides avec les entreprises locales",
            ],
            cons: [
                "Plateformes numériques moins modernes que la concurrence",
                "Délais d'inscription parfois longs",
                "Qualité variable selon les centres et formateurs",
            ],
        },
        foundedYear: 1949,
        headquarters: "Montreuil",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "comptabilite",
            "ressources-humaines",
            "gestion-de-projet",
            "commerce-vente",
        ],
        formats: ["présentiel", "hybride"],
        cpfEligible: true,
        priceRange: "0 € – 8 000 € (financements publics)",
        studentsCount: "100 000+/an",
        rating: 3.8,
        reviewCount: 5600,
        metaTitle: "AFPA Avis 2026 : Prix, Formations et Test Complet",
        metaDescription:
            "Avis sur l'AFPA en 2026. Formations professionnelles qualifiantes, 115 centres en France. Prix, CPF, avis et comparatif. Notre analyse complète.",
        faq: [
            {
                question: "Les formations AFPA sont-elles gratuites ?",
                answer:
                    "De nombreuses formations AFPA sont financées par les Régions ou France Travail et sont donc gratuites pour les demandeurs d'emploi. Pour les salariés, le financement est possible via le CPF, les OPCO ou le plan de développement des compétences de l'entreprise.",
            },
            {
                question: "L'AFPA propose-t-elle un hébergement ?",
                answer:
                    "Oui, l'AFPA dispose de résidences sur la plupart de ses centres, avec hébergement et restauration inclus pour les stagiaires en formation longue. C'est un avantage unique parmi les organismes de formation.",
            },
        ],
        campusVilles: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "lille", "nantes", "strasbourg"],
        logoPath: "/logos/afpa.jpg",
    },
    {
        slug: "cnam",
        name: "CNAM",
        website: "https://www.cnam.fr",
        tagline: "Le Conservatoire national des arts et métiers",
        description:
            "Le CNAM (Conservatoire National des Arts et Métiers) est un grand établissement public d'enseignement supérieur fondé en 1794. Il propose des formations du Bac+1 au doctorat, accessibles en cours du soir, en ligne ou en alternance. Avec 150 centres en France et à l'international, le CNAM est l'institution de référence pour la formation continue des adultes en activité. Les diplômes CNAM sont des diplômes d'État reconnus.",
        prosAndCons: {
            pros: [
                "Diplômes d'État reconnus (Licence, Master, diplôme d'ingénieur)",
                "Cours du soir et en ligne compatibles avec un emploi",
                "Tarifs très compétitifs (établissement public)",
                "150 centres en France et à l'international",
                "230 ans d'histoire et de prestige",
            ],
            cons: [
                "Parcours longs (2-5 ans pour un diplôme complet)",
                "Pédagogie parfois académique et moins pratique",
                "Interface numérique datée par rapport aux EdTech",
            ],
        },
        foundedYear: 1794,
        headquarters: "Paris",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "data-analyst",
            "comptabilite",
            "gestion-de-projet",
            "management",
            "ressources-humaines",
        ],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "150 € – 300 €/UE (public)",
        studentsCount: "80 000+",
        rating: 4.0,
        reviewCount: 3200,
        metaTitle: "CNAM Avis 2026 : Prix, Formations et Diplômes",
        metaDescription:
            "Avis sur le CNAM en 2026. Formations diplômantes en cours du soir et en ligne. Prix publics, CPF, diplômes d'État. Notre analyse complète.",
        faq: [
            {
                question: "Le CNAM est-il reconnu par l'État ?",
                answer:
                    "Oui, le CNAM est un grand établissement public d'enseignement supérieur. Ses diplômes (Licence, Master, diplôme d'ingénieur) sont des diplômes d'État reconnus au même titre que ceux des universités.",
            },
            {
                question: "Combien coûtent les formations au CNAM ?",
                answer:
                    "Les tarifs du CNAM sont très compétitifs car c'est un établissement public. Comptez 150 € à 300 € par unité d'enseignement (UE). Un diplôme complet coûte entre 2 000 € et 8 000 €, finançable par le CPF.",
            },
        ],
        campusVilles: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "lille", "nantes", "strasbourg"],
        logoPath: "/logos/cnam.svg",
    },
    {
        slug: "m2i-formation",
        name: "M2i Formation",
        website: "https://www.m2iformation.fr",
        tagline: "Le leader de la formation IT en France",
        description:
            "M2i Formation est le premier organisme de formation IT en France, avec plus de 35 ans d'expérience. L'entreprise propose un catalogue de 2 400+ formations dans le numérique, la bureautique, la PAO, le management et la cybersécurité. M2i se distingue par ses formations courtes (1-5 jours) destinées aux professionnels en poste et une présence dans 35 villes.",
        prosAndCons: {
            pros: [
                "2 400+ formations IT et numériques",
                "35 centres en France — proximité garantie",
                "Formations courtes (1-5 jours) adaptées aux salariés",
                "35 ans d'expertise reconnue dans l'IT",
                "Certifications éditeurs (Microsoft, AWS, Cisco, VMware)",
            ],
            cons: [
                "Orienté upskilling pro, moins adapté aux reconversions complètes",
                "Pas de formations diplômantes longues (RNCP)",
                "Prix élevés pour les particuliers (tarifs entreprises)",
            ],
        },
        foundedYear: 1989,
        headquarters: "Paris",
        certifications: ["Qualiopi"],
        domaines: [
            "developpeur-web",
            "cybersecurite",
            "devops-cloud",
            "data-analyst",
            "gestion-de-projet",
        ],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "800 € – 3 500 €/session",
        studentsCount: "50 000+/an",
        rating: 4.3,
        reviewCount: 1800,
        metaTitle: "M2i Formation Avis 2026 : Prix, Catalogue IT et Test",
        metaDescription:
            "Avis sur M2i Formation en 2026. Leader de la formation IT en France. 2 400+ formations, 35 centres. Prix, CPF, certifications. Notre analyse.",
        faq: [
            {
                question: "M2i Formation est-il éligible au CPF ?",
                answer:
                    "Oui, de nombreuses formations M2i sont éligibles au CPF, notamment les certifications éditeurs (Microsoft, AWS, Cisco). Le financement est aussi possible via les OPCO et le plan de formation des entreprises.",
            },
            {
                question: "M2i Formation convient-il pour une reconversion ?",
                answer:
                    "M2i est davantage orienté vers le upskilling des professionnels en poste avec des formations courtes (1-5 jours). Pour une reconversion complète, un bootcamp ou une formation longue (OpenClassrooms, Le Wagon) sera plus adapté.",
            },
        ],
        campusVilles: ["paris", "lyon", "lille", "nantes", "bordeaux", "toulouse", "strasbourg"],
        logoPath: "/logos/m2i-formation.png",
    },
    {
        slug: "demos",
        name: "Demos",
        website: "https://www.demos.fr",
        tagline: "L'expert de la formation professionnelle depuis 1972",
        description:
            "Demos est l'un des plus anciens organismes de formation professionnelle en France, fondé en 1972. Avec un catalogue de 1 500+ formations inter et intra-entreprises, Demos couvre un large spectre de domaines : management, RH, comptabilité, commerce, digital et bureautique. L'organisme est reconnu pour ses formations courtes orientées compétences immédiatement applicables en entreprise.",
        prosAndCons: {
            pros: [
                "1 500+ formations dans tous les domaines métiers",
                "50 ans d'expérience en formation professionnelle",
                "Formations inter et intra-entreprises flexibles",
                "Accompagnement personnalisé pour les entreprises",
            ],
            cons: [
                "Image parfois perçue comme traditionnelle",
                "Moins de formations tech/IA que les pure players",
                "Tarifs élevés pour les particuliers",
            ],
        },
        foundedYear: 1972,
        headquarters: "Paris",
        certifications: ["Qualiopi"],
        domaines: [
            "management",
            "ressources-humaines",
            "comptabilite",
            "commerce-vente",
            "marketing-digital",
            "gestion-de-projet",
        ],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "700 € – 3 000 €/session",
        studentsCount: "40 000+/an",
        rating: 4.0,
        reviewCount: 1200,
        metaTitle: "Demos Avis 2026 : Prix, Formations et Test Complet",
        metaDescription:
            "Avis sur Demos en 2026. 1 500+ formations professionnelles. Management, RH, comptabilité, digital. Prix, CPF et avis. Notre analyse.",
        faq: [
            {
                question: "Demos est-il certifié Qualiopi ?",
                answer:
                    "Oui, Demos est certifié Qualiopi, ce qui garantit la qualité des processus de formation et permet le financement par le CPF, les OPCO et France Travail.",
            },
        ],
        campusVilles: ["paris", "lyon", "marseille"],
        logoPath: "/logos/demos.svg",
    },
    {
        slug: "simplon",
        name: "Simplon",
        website: "https://simplon.co",
        tagline: "Bootcamps et formations aux métiers du numérique",
        description:
            "Simplon propose des formations intensives, certifiantes ou en alternance en développement, data, IA et cybersécurité. Le format, la durée, les prérequis et le financement changent selon chaque session : la fiche de session, et non la marque seule, doit guider la décision. Le réseau convient surtout aux candidats prêts à suivre un rythme soutenu et un processus pouvant inclure dossier, auto-apprentissage, mini-projet et entretien.",
        prosAndCons: {
            pros: [
                "De nombreuses sessions entièrement financées pour les apprenants éligibles",
                "Mission sociale : inclusion et diversité dans le numérique",
                "120 campus annoncés dans le monde et 8 régions en France",
                "70 % de sorties positives annoncées au 31 décembre 2025",
                "Pédagogie active et projets concrets",
            ],
            cons: [
                "Conditions et calendrier propres à chaque session",
                "Rythme intensif qui demande une disponibilité réelle",
                "Financement ou gratuité à confirmer session par session",
            ],
        },
        foundedYear: 2013,
        headquarters: "Montreuil",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "data-analyst",
            "intelligence-artificielle",
            "cybersecurite",
        ],
        formats: ["présentiel", "distanciel", "hybride"],
        cpfEligible: true,
        priceRange: "Selon la session et le financement",
        studentsCount: "56 772+ depuis 2013",
        rating: 2.9,
        reviewCount: 2,
        metaTitle: "Simplon : avis sur les bootcamps et formations en 2026",
        metaDescription:
            "Notre avis sur Simplon en 2026 : bootcamps, formations intensives et alternance, sélection, financement, rythme et points à vérifier avant de candidater.",
        decisionGuide: [
            {
                title: "À choisir si…",
                text: "vous cherchez une formation professionnalisante au numérique, souvent intensive, et qu'une session proche de chez vous correspond précisément à votre métier, votre niveau et votre situation de financement.",
            },
            {
                title: "À comparer si…",
                text: "vous avez besoin d'un calendrier libre, d'un parcours entièrement asynchrone ou d'une admission garantie. Chez Simplon, les modalités varient et la candidature peut comporter dossier, auto-apprentissage, mini-projet et entretien.",
            },
            {
                title: "Point à vérifier avant de candidater",
                text: "la certification préparée, la durée intensive, le lieu ou le distanciel, les conditions particulières, le financement effectif et l'accompagnement vers l'alternance ou l'emploi. Une formation Simplon ne se résume pas à un bootcamp unique.",
            },
            {
                title: "Comment lire les avis",
                text: "Trustpilot n'affiche que 2 avis au 15 août 2026 : ce volume est insuffisant pour juger l'ensemble des campus et formations. Cherchez des retours sur la session, le métier, le campus et l'année qui vous concernent.",
            },
        ],
        sources: [
            {
                label: "Simplon — mission, formats et chiffres clés 2025",
                url: "https://www.simplon.co/a-propos/qui-sommes-nous",
                date: "consulté en août 2026",
            },
            {
                label: "Simplon — étapes de candidature d'une session",
                url: "https://www.simplon.co/session/om-gua-ifacom-ia-207355-int-emp",
                date: "consulté en août 2026",
            },
            {
                label: "Simplon — campus à distance",
                url: "https://www.simplon.co/region/a-distance",
                date: "consulté en août 2026",
            },
            {
                label: "Trustpilot — avis Simplon.co (échantillon très faible)",
                url: "https://fr.trustpilot.com/review/simplon.co",
                date: "consulté en août 2026",
            },
        ],
        faq: [
            {
                question: "Les formations Simplon sont-elles vraiment gratuites ?",
                answer:
                    "De nombreuses sessions sont entièrement financées pour les candidats éligibles, mais il faut vérifier la fiche de la session. Le financement, les conditions particulières et une éventuelle rémunération dépendent du dispositif et du profil.",
            },
            {
                question: "Comment être sélectionné chez Simplon ?",
                answer:
                    "Le processus dépend de la session. Simplon décrit généralement une prise de contact, un dossier pouvant inclure auto-apprentissage ou mini-projet, puis des entretiens. Certaines sessions ont des conditions particulières ou des prérequis.",
            },
        ],
        campusVilles: ["paris", "lyon", "toulouse", "lille", "marseille", "bordeaux", "nantes", "strasbourg"],
        logoPath: "/logos/simplon.png",
    },
    {
        slug: "ynov-campus",
        name: "Ynov Campus",
        website: "https://www.ynov.com",
        tagline: "Le campus des métiers du numérique et de la créativité",
        description:
            "Ynov Campus est un réseau d'écoles supérieures spécialisées dans les métiers du numérique et de la créativité, avec 12 campus en France. Fondé en 2011, Ynov propose des formations du Bac+1 au Bac+5 en informatique, marketing digital, audiovisuel, design, 3D et jeux vidéo. L'alternance est fortement encouragée dès la 3e année, avec un réseau de 5 000+ entreprises partenaires.",
        prosAndCons: {
            pros: [
                "12 campus en France dans les grandes villes",
                "Formations du Bac+1 au Bac+5 avec diplômes RNCP",
                "Forte orientation alternance (dès la 3e année)",
                "Large éventail de spécialisations numériques et créatives",
                "Réseau de 5 000+ entreprises partenaires",
            ],
            cons: [
                "Frais de scolarité élevés hors alternance",
                "Principalement destiné aux jeunes (post-bac et poursuite d'études)",
                "Moins adapté aux reconversions professionnelles d'adultes",
            ],
        },
        foundedYear: 2011,
        headquarters: "Bordeaux",
        certifications: ["Qualiopi", "RNCP"],
        domaines: [
            "developpeur-web",
            "marketing-digital",
            "design-ux-ui",
            "graphisme",
            "intelligence-artificielle",
            "cybersecurite",
        ],
        formats: ["présentiel", "hybride"],
        cpfEligible: true,
        priceRange: "5 500 € – 9 800 €/an",
        studentsCount: "10 000+",
        rating: 4.1,
        reviewCount: 1500,
        metaTitle: "Ynov Campus Avis 2026 : Prix, Formations et Campus",
        metaDescription:
            "Avis sur Ynov Campus en 2026. Formations numériques et créatives du Bac+1 au Bac+5. 12 campus, alternance, prix. Notre analyse complète.",
        faq: [
            {
                question: "Ynov Campus est-il reconnu ?",
                answer:
                    "Oui, Ynov Campus est certifié Qualiopi et délivre des titres RNCP reconnus par l'État du Bac+2 au Bac+5. Les diplômes sont inscrits au Répertoire National des Certifications Professionnelles.",
            },
            {
                question: "Peut-on faire de l'alternance chez Ynov ?",
                answer:
                    "Oui, l'alternance est possible dès la 3e année chez Ynov Campus. L'école dispose d'un réseau de 5 000+ entreprises partenaires et les frais de scolarité sont pris en charge par l'entreprise en alternance.",
            },
        ],
        campusVilles: ["paris", "lyon", "toulouse", "bordeaux", "nantes", "lille", "marseille", "strasbourg"],
        logoPath: "/logos/ynov-campus.png",
    },
];

export function getOrganismeBySlug(slug: string): Organisme | undefined {
    return organismes.find((o) => o.slug === slug);
}

export function getOrganismesByDomaine(domaineSlug: string): Organisme[] {
    return organismes.filter((o) => o.domaines.includes(domaineSlug));
}

export function getOrganismesByDomaineAndVille(
    domaineSlug: string,
    villeSlug: string
): { local: Organisme[]; remote: Organisme[] } {
    const domainOrganismes = organismes.filter((o) =>
        o.domaines.includes(domaineSlug)
    );
    const local = domainOrganismes.filter(
        (o) => o.campusVilles.includes(villeSlug)
    );
    const remote = domainOrganismes.filter(
        (o) =>
            !o.campusVilles.includes(villeSlug) &&
            o.formats.some((f) => f === "e-learning" || f === "distanciel")
    );
    return { local, remote };
}
