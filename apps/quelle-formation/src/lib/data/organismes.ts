/**
 * Top 30 organismes de formation pour le comparateur
 * Données réalistes pour le marché français 2026
 */

export interface Organisme {
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
    affiliateUrl?: string;
    affiliateNetwork?: string;
    affiliateCommission?: string;
    metaTitle: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
    logoPath: string;
}

export const organismes: Organisme[] = [
    {
        slug: "openclassrooms",
        name: "OpenClassrooms",
        website: "https://openclassrooms.com",
        tagline: "La plateforme de formation en ligne leader en Europe",
        description:
            "OpenClassrooms est la plateforme de formation en ligne leader en Europe, avec plus de 3 millions d'étudiants. Fondée en 1999 sous le nom de Site du Zéro, elle propose des parcours diplômants (Bac+2 à Bac+5) reconnus par l'État. La pédagogie repose sur des projets concrets et un mentorat hebdomadaire avec un expert du métier. Les formations sont 100 % en ligne et éligibles au CPF.",
        prosAndCons: {
            pros: [
                "Diplômes reconnus par l'État (RNCP Bac+2 à Bac+5)",
                "Mentorat individuel hebdomadaire avec un professionnel",
                "Apprentissage par projets concrets (portfolio à la sortie)",
                "100 % en ligne, rythme flexible",
                "Garantie emploi ou remboursé sur certains parcours",
            ],
            cons: [
                "Nécessite de l'autodiscipline (pas de cours en présentiel)",
                "Certains parcours sont longs (12-18 mois)",
                "Le mentorat de 30 minutes par semaine peut sembler court",
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
        priceRange: "200 € – 600 €/mois",
        studentsCount: "3 000 000+",
        rating: 4.2,
        reviewCount: 8500,
        affiliateUrl: "https://openclassrooms.com",
        affiliateNetwork: "Affilae",
        affiliateCommission: "40 € par inscription + 15 % récurrent",
        metaTitle: "OpenClassrooms Avis 2026 : Prix, Formations et Test Complet",
        metaDescription:
            "Avis sur OpenClassrooms en 2026. Formations diplômantes en ligne, CPF, mentorat. Prix, avis d'anciens étudiants et comparatif. Notre test complet.",
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
                    "Les abonnements OpenClassrooms vont de 200 € à 600 €/mois selon le parcours choisi. Un parcours complet coûte entre 4 000 € et 10 000 €. Le CPF, les OPCO et Pôle Emploi peuvent financer jusqu'à 100 % du coût.",
            },
        ],
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
        affiliateUrl: "https://www.jedha.co",
        affiliateNetwork: "Affilae",
        affiliateCommission: "100 € par inscription payante",
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
        affiliateUrl: "https://www.livementor.com",
        affiliateNetwork: "Affilae",
        affiliateCommission: "80 € par inscription",
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
        logoPath: "/logos/livementor.png",
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
        logoPath: "/logos/studi.png",
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
        logoPath: "/logos/wild-code-school.png",
    },
];

export function getOrganismeBySlug(slug: string): Organisme | undefined {
    return organismes.find((o) => o.slug === slug);
}

export function getOrganismesByDomaine(domaineSlug: string): Organisme[] {
    return organismes.filter((o) => o.domaines.includes(domaineSlug));
}
