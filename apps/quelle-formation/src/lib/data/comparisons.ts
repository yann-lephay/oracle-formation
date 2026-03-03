/**
 * Comparaisons H2H (Head-to-Head) entre organismes
 * 15 comparaisons pour le MVP
 */

export interface Comparison {
    slug: string;
    organisme1: string; // slug
    organisme2: string; // slug
    title: string;
    intro: string;
    verdict: string;
    criteria: {
        name: string;
        winner: 1 | 2 | 0; // 0 = draw
        org1Score: string;
        org2Score: string;
        analysis: string;
    }[];
    metaTitle: string;
    metaDescription: string;
}

export const comparisons: Comparison[] = [
    {
        slug: "openclassrooms-vs-jedha",
        organisme1: "openclassrooms",
        organisme2: "jedha",
        title: "OpenClassrooms vs Jedha",
        intro:
            "Deux approches radicalement différentes de la formation tech. OpenClassrooms mise sur des parcours longs en e-learning avec mentorat, tandis que Jedha propose des bootcamps intensifs sur campus. Lequel choisir en 2026 ?",
        verdict:
            "Choisissez OpenClassrooms si vous voulez un diplôme reconnu (Bac+2 à Bac+5), un rythme flexible compatible avec un emploi, et un large choix de domaines. Choisissez Jedha si vous visez spécifiquement la Data, l'IA ou la Cybersécurité et que vous préférez un format intensif sur campus avec un résultat rapide.",
        criteria: [
            {
                name: "Prix",
                winner: 1,
                org1Score: "200-600 €/mois (total 4-10k€)",
                org2Score: "1 500 – 7 995 €",
                analysis: "OpenClassrooms est souvent plus abordable au total, surtout avec un rythme rapide. Jedha a un coût fixe par bootcamp.",
            },
            {
                name: "Catalogue",
                winner: 1,
                org1Score: "10+ domaines (tech, marketing, RH, compta)",
                org2Score: "3 domaines (Data, IA, Cyber)",
                analysis: "OpenClassrooms offre un catalogue beaucoup plus large. Jedha est un spécialiste Data/IA/Cyber.",
            },
            {
                name: "Format",
                winner: 0,
                org1Score: "100 % e-learning, mentorat hebdo",
                org2Score: "Bootcamp campus + en ligne",
                analysis: "Différent, pas comparable. E-learning pour la flexibilité, bootcamp pour l'immersion.",
            },
            {
                name: "Reconnaissance",
                winner: 0,
                org1Score: "RNCP Bac+2 à Bac+5",
                org2Score: "RNCP + certifications métier",
                analysis: "Les deux sont certifiés RNCP et Qualiopi. OpenClassrooms délivre des diplômes de niveau supérieur.",
            },
            {
                name: "Insertion pro",
                winner: 2,
                org1Score: "Garantie emploi sur certains parcours",
                org2Score: "Réseau entreprises fort, career services",
                analysis: "Jedha a un meilleur réseau entreprises dans la Data/IA. OpenClassrooms a la garantie emploi ou remboursé.",
            },
        ],
        metaTitle: "OpenClassrooms vs Jedha 2026 : Quel Organisme Choisir ?",
        metaDescription:
            "Comparatif détaillé OpenClassrooms vs Jedha en 2026. Prix, formations, avis, CPF. Lequel choisir pour se former en Data, IA ou Développement Web ?",
    },
    {
        slug: "le-wagon-vs-ironhack",
        organisme1: "le-wagon",
        organisme2: "ironhack",
        title: "Le Wagon vs Ironhack",
        intro:
            "Les deux bootcamps tech leaders en Europe s'affrontent. Le Wagon, le français #1 mondial sur Coursereport, face à Ironhack, l'espagnol présent à Paris. Lequel choisir pour un bootcamp en 2026 ?",
        verdict:
            "Choisissez Le Wagon si vous visez le développement web ou la data science et que vous voulez le meilleur réseau alumni en France. Choisissez Ironhack si vous ciblez le UX/UI design ou si vous envisagez une carrière internationale.",
        criteria: [
            {
                name: "Prix",
                winner: 0,
                org1Score: "4 500 – 9 000 €",
                org2Score: "5 000 – 9 000 €",
                analysis: "Prix similaires. Les deux proposent des facilités de paiement et sont éligibles CPF.",
            },
            {
                name: "Réseau alumni",
                winner: 1,
                org1Score: "25 000+ alumni mondiaux",
                org2Score: "15 000+ alumni",
                analysis: "Le Wagon a le plus grand réseau alumni en France et en Europe. Avantage clair pour l'emploi.",
            },
            {
                name: "UX/UI Design",
                winner: 2,
                org1Score: "Non proposé",
                org2Score: "Bootcamp UX/UI reconnu",
                analysis: "Ironhack est le seul à proposer un bootcamp UX/UI de qualité. Le Wagon se concentre sur le dev et la data.",
            },
            {
                name: "Réputation",
                winner: 1,
                org1Score: "#1 mondial Coursereport",
                org2Score: "Top 5 mondial",
                analysis: "Le Wagon est #1 mondial sur les classements. Ironhack est excellent mais moins bien classé.",
            },
            {
                name: "Campus France",
                winner: 0,
                org1Score: "Paris, Lyon, Bordeaux, Nantes, Marseille",
                org2Score: "Paris, Lisbonne (remote France)",
                analysis: "Le Wagon a plus de campus en France. Ironhack a un seul campus physique à Paris mais propose le remote.",
            },
        ],
        metaTitle: "Le Wagon vs Ironhack 2026 : Quel Bootcamp Choisir ?",
        metaDescription:
            "Comparatif Le Wagon vs Ironhack en 2026. Bootcamp dev web, data, UX/UI. Prix, campus, avis et CPF. Quel bootcamp est fait pour vous ?",
    },
    {
        slug: "openclassrooms-vs-studi",
        organisme1: "openclassrooms",
        organisme2: "studi",
        title: "OpenClassrooms vs Studi",
        intro:
            "Les deux géants de la formation en ligne en France. OpenClassrooms avec son mentorat premium, Studi avec son catalogue massif à prix compétitif. Lequel offre le meilleur rapport qualité-prix en 2026 ?",
        verdict:
            "Choisissez OpenClassrooms si vous voulez un accompagnement personnalisé (mentorat) et une pédagogie par projets. Choisissez Studi si vous cherchez le prix le plus bas et un catalogue très large (200+ formations).",
        criteria: [
            {
                name: "Prix",
                winner: 2,
                org1Score: "200-600 €/mois",
                org2Score: "150-500 €/mois",
                analysis: "Studi est globalement 20-30 % moins cher qu'OpenClassrooms.",
            },
            {
                name: "Accompagnement",
                winner: 1,
                org1Score: "Mentorat individuel hebdomadaire",
                org2Score: "Accompagnement par formateurs (moins personnalisé)",
                analysis: "OpenClassrooms se distingue par son mentorat 1-to-1 hebdomadaire avec un expert du métier.",
            },
            {
                name: "Catalogue",
                winner: 2,
                org1Score: "50+ parcours (tech, marketing, RH)",
                org2Score: "200+ formations (multi-domaines)",
                analysis: "Studi a un catalogue 4x plus large, couvrant des secteurs que OpenClassrooms ne couvre pas.",
            },
            {
                name: "Réputation",
                winner: 1,
                org1Score: "Marque forte, 25 ans d'existence",
                org2Score: "Plus récent, croissance rapide",
                analysis: "OpenClassrooms bénéficie d'une notoriété et d'une réputation supérieures.",
            },
        ],
        metaTitle: "OpenClassrooms vs Studi 2026 : Quelle Formation en Ligne ?",
        metaDescription:
            "Comparatif OpenClassrooms vs Studi en 2026. Prix, qualité, catalogue, CPF. Quelle formation en ligne choisir ? Notre analyse détaillée.",
    },
    {
        slug: "jedha-vs-datascientest",
        organisme1: "jedha",
        organisme2: "datascientest",
        title: "Jedha vs DataScientest",
        intro:
            "Les deux spécialistes français de la formation Data et IA. Jedha avec ses bootcamps intensifs, DataScientest avec son format continu compatible emploi. Lequel choisir en 2026 ?",
        verdict:
            "Choisissez Jedha si vous voulez un bootcamp intensif sur campus avec une immersion totale. Choisissez DataScientest si vous travaillez en parallèle et avez besoin d'un rythme flexible (format 70/30 %).",
        criteria: [
            {
                name: "Format",
                winner: 0,
                org1Score: "Bootcamp intensif (campus ou online)",
                org2Score: "Continu 70 % async + 30 % live",
                analysis: "Jedha pour l'immersion totale, DataScientest pour la flexibilité. Choix de style de vie.",
            },
            {
                name: "Prix",
                winner: 0,
                org1Score: "1 500 – 7 995 €",
                org2Score: "3 000 – 8 000 €",
                analysis: "Tarifs similaires selon le parcours. Les deux sont éligibles CPF.",
            },
            {
                name: "Partenariats",
                winner: 2,
                org1Score: "Réseau entreprises tech",
                org2Score: "Sorbonne, Mines, Microsoft, AWS",
                analysis: "DataScientest se distingue par ses partenariats universitaires prestigieux.",
            },
            {
                name: "Campus",
                winner: 1,
                org1Score: "Paris, Lyon, Bordeaux, Marseille",
                org2Score: "Principalement en ligne",
                analysis: "Jedha a des campus physiques dans les grandes villes. DataScientest est majoritairement en ligne.",
            },
        ],
        metaTitle: "Jedha vs DataScientest 2026 : Quelle Formation Data/IA ?",
        metaDescription:
            "Comparatif Jedha vs DataScientest en 2026. Data, IA, Cybersécurité. Prix, format, CPF. Bootcamp ou formation continue ? Notre verdict.",
    },
    {
        slug: "openclassrooms-vs-le-wagon",
        organisme1: "openclassrooms",
        organisme2: "le-wagon",
        title: "OpenClassrooms vs Le Wagon",
        intro:
            "Formation longue en e-learning ou bootcamp intensif de 9 semaines ? Deux philosophies opposées pour apprendre le développement web et la data.",
        verdict:
            "Choisissez OpenClassrooms si vous voulez un diplôme (Bac+3/5), un rythme flexible et un mentorat. Choisissez Le Wagon si vous voulez résultat express, immersion totale et un réseau alumni exceptionnel.",
        criteria: [
            {
                name: "Durée",
                winner: 0,
                org1Score: "6-18 mois (flexible)",
                org2Score: "9 semaines (intensif)",
                analysis: "Tout dépend de votre situation. OpenClassrooms pour la flexibilité, Le Wagon pour la rapidité.",
            },
            {
                name: "Diplôme",
                winner: 1,
                org1Score: "RNCP Bac+2 à Bac+5",
                org2Score: "RNCP niveau 6 (Bac+3/4)",
                analysis: "OpenClassrooms propose des diplômes de niveau supérieur.",
            },
            {
                name: "Insertion pro",
                winner: 2,
                org1Score: "Garantie emploi (certains parcours)",
                org2Score: "93 % d'insertion, demo day, réseau alumni",
                analysis: "Le Wagon a un taux d'insertion exceptionnel et un réseau alumni très actif.",
            },
        ],
        metaTitle: "OpenClassrooms vs Le Wagon 2026 : Quel Choix de Formation ?",
        metaDescription:
            "Comparatif OpenClassrooms vs Le Wagon en 2026. E-learning vs bootcamp. Prix, diplôme, insertion pro. Lequel choisir pour se lancer dans le dev ?",
    },
    {
        slug: "le-wagon-vs-wild-code-school",
        organisme1: "le-wagon",
        organisme2: "wild-code-school",
        title: "Le Wagon vs Wild Code School",
        intro:
            "Deux bootcamps français de renom pour se former au développement web. Le Wagon avec son format 9 semaines ultra-intensif, la Wild Code School avec 5 mois de pédagogie par projet. Lequel correspond le mieux à votre profil ?",
        verdict:
            "Choisissez Le Wagon si vous voulez le bootcamp le plus réputé, un réseau alumni mondial et un format ultra-intensif de 9 semaines. Choisissez la Wild Code School si vous préférez un rythme plus progressif sur 5 mois, des tarifs plus abordables et des campus dans de nombreuses villes.",
        criteria: [
            {
                name: "Prix",
                winner: 2,
                org1Score: "4 500 – 9 000 €",
                org2Score: "3 000 – 7 000 €",
                analysis: "La Wild Code School est sensiblement moins chère. Les deux sont éligibles CPF.",
            },
            {
                name: "Durée",
                winner: 0,
                org1Score: "9 semaines intensives",
                org2Score: "5 mois progressifs",
                analysis: "Question de préférence. Le Wagon est plus rapide mais plus intense. La Wild Code School est plus progressive.",
            },
            {
                name: "Réseau alumni",
                winner: 1,
                org1Score: "25 000+ alumni mondiaux, #1 Coursereport",
                org2Score: "10 000+ alumni en Europe",
                analysis: "Le Wagon a un réseau alumni nettement plus large et une réputation internationale supérieure.",
            },
            {
                name: "Campus",
                winner: 2,
                org1Score: "5 villes en France",
                org2Score: "20+ campus en Europe",
                analysis: "La Wild Code School a une couverture territoriale plus large, surtout en France.",
            },
            {
                name: "Insertion pro",
                winner: 1,
                org1Score: "93 % d'insertion dans les 6 mois",
                org2Score: "~85 % d'insertion",
                analysis: "Le Wagon affiche un meilleur taux d'insertion, porté par son réseau et sa réputation.",
            },
        ],
        metaTitle: "Le Wagon vs Wild Code School 2026 : Quel Bootcamp Choisir ?",
        metaDescription:
            "Comparatif Le Wagon vs Wild Code School en 2026. Bootcamp dev web, prix, campus, insertion pro. 9 semaines vs 5 mois. Notre verdict détaillé.",
    },
    {
        slug: "jedha-vs-le-wagon",
        organisme1: "jedha",
        organisme2: "le-wagon",
        title: "Jedha vs Le Wagon",
        intro:
            "Deux bootcamps d'excellence qui se croisent sur la Data et l'IA. Jedha, le spécialiste Data/IA/Cyber, face au Wagon, le généraliste tech #1 en Europe. Lequel choisir pour une formation en data science ?",
        verdict:
            "Choisissez Jedha si vous visez spécifiquement la Data, l'IA ou la Cybersécurité avec un parcours progressif (Essentials → Fullstack → Lead). Choisissez Le Wagon si vous hésitez entre dev web et data, si vous voulez le plus grand réseau alumni, ou si le format 9 semaines vous convient.",
        criteria: [
            {
                name: "Spécialisation Data/IA",
                winner: 1,
                org1Score: "3 niveaux de formation, spécialiste depuis 2017",
                org2Score: "Bootcamp data science généraliste",
                analysis: "Jedha est un spécialiste Data/IA avec un parcours progressif. Le Wagon propose un bootcamp data science de qualité mais plus généraliste.",
            },
            {
                name: "Prix",
                winner: 1,
                org1Score: "1 500 – 7 995 €",
                org2Score: "4 500 – 9 000 €",
                analysis: "Jedha propose une gamme plus large avec un ticket d'entrée plus bas (Essentials à 1 500 €).",
            },
            {
                name: "Réseau alumni",
                winner: 2,
                org1Score: "5 000+ alumni",
                org2Score: "25 000+ alumni mondiaux",
                analysis: "Le Wagon a un réseau alumni 5x plus large, véritable accélérateur de carrière.",
            },
            {
                name: "Flexibilité",
                winner: 1,
                org1Score: "Essentials (75h), Fullstack (450h), Lead (150h)",
                org2Score: "Format unique 9 semaines",
                analysis: "Jedha offre plus de flexibilité avec 3 niveaux. On peut commencer par l'Essentials avant de s'engager sur le Fullstack.",
            },
        ],
        metaTitle: "Jedha vs Le Wagon 2026 : Quelle Formation Data Choisir ?",
        metaDescription:
            "Comparatif Jedha vs Le Wagon en 2026. Data science, IA, bootcamp. Prix, parcours, réseau alumni. Quel bootcamp data choisir ? Notre analyse.",
    },
    {
        slug: "studi-vs-cnam",
        organisme1: "studi",
        organisme2: "cnam",
        title: "Studi vs CNAM",
        intro:
            "Deux poids lourds de la formation diplômante en ligne : Studi, l'EdTech qui monte avec 200+ formations, face au CNAM, l'institution bicentenaire de la formation continue. Lequel choisir pour un diplôme reconnu en 2026 ?",
        verdict:
            "Choisissez Studi si vous voulez une plateforme moderne, un large choix de formations et un parcours 100 % en ligne. Choisissez le CNAM si vous voulez un diplôme d'État prestigieux (Licence, Master), des tarifs publics et la possibilité de cours du soir en présentiel.",
        criteria: [
            {
                name: "Prix",
                winner: 2,
                org1Score: "150 – 500 €/mois",
                org2Score: "150 – 300 €/UE (tarif public)",
                analysis: "Le CNAM est un établissement public avec des tarifs subventionnés. Le coût total est souvent inférieur.",
            },
            {
                name: "Catalogue",
                winner: 1,
                org1Score: "200+ formations diplômantes",
                org2Score: "Licence, Master, diplôme d'ingénieur",
                analysis: "Studi a un catalogue plus large et diversifié. Le CNAM se concentre sur l'enseignement supérieur.",
            },
            {
                name: "Prestige du diplôme",
                winner: 2,
                org1Score: "Titres RNCP privés",
                org2Score: "Diplômes d'État (Licence, Master, ingénieur)",
                analysis: "Les diplômes du CNAM sont des diplômes d'État qui ont une reconnaissance supérieure.",
            },
            {
                name: "Plateforme & UX",
                winner: 1,
                org1Score: "Plateforme moderne, app mobile",
                org2Score: "Interface datée, en cours de modernisation",
                analysis: "Studi offre une expérience numérique plus fluide et moderne.",
            },
            {
                name: "Flexibilité",
                winner: 0,
                org1Score: "100 % e-learning, rythme flexible",
                org2Score: "Cours du soir, en ligne, hybride",
                analysis: "Les deux sont compatibles avec un emploi. Le CNAM propose en plus des cours du soir en présentiel.",
            },
        ],
        metaTitle: "Studi vs CNAM 2026 : Quelle Formation Diplômante ?",
        metaDescription:
            "Comparatif Studi vs CNAM en 2026. Formations diplômantes en ligne. Prix, diplômes, catalogue. EdTech vs institution publique. Notre verdict.",
    },
    {
        slug: "m2i-formation-vs-datascientest",
        organisme1: "m2i-formation",
        organisme2: "datascientest",
        title: "M2i Formation vs DataScientest",
        intro:
            "Deux approches de la formation tech : M2i, le leader des formations IT courtes pour professionnels, face à DataScientest, le spécialiste Data/IA en format continu. Lequel choisir selon votre profil ?",
        verdict:
            "Choisissez M2i Formation si vous êtes un professionnel IT qui veut se certifier rapidement (1-5 jours) sur une technologie précise (AWS, Azure, Cisco). Choisissez DataScientest si vous visez une reconversion ou une montée en compétences complète en Data/IA sur plusieurs mois.",
        criteria: [
            {
                name: "Format",
                winner: 0,
                org1Score: "Formations courtes 1-5 jours",
                org2Score: "Parcours longs 2-9 mois (70/30 %)",
                analysis: "Deux formats complémentaires. M2i pour le upskilling rapide, DataScientest pour les parcours complets.",
            },
            {
                name: "Catalogue",
                winner: 1,
                org1Score: "2 400+ formations IT",
                org2Score: "~20 parcours Data/IA/Cloud",
                analysis: "M2i a un catalogue beaucoup plus large, couvrant tout l'écosystème IT.",
            },
            {
                name: "Spécialisation Data/IA",
                winner: 2,
                org1Score: "Quelques formations Data/IA",
                org2Score: "Spécialiste, partenariats Sorbonne/Mines",
                analysis: "DataScientest est le spécialiste incontesté de la Data/IA avec des partenariats prestigieux.",
            },
            {
                name: "Certifications",
                winner: 1,
                org1Score: "Microsoft, AWS, Cisco, VMware, etc.",
                org2Score: "RNCP + Microsoft, AWS",
                analysis: "M2i propose un éventail plus large de certifications éditeurs reconnues sur le marché.",
            },
        ],
        metaTitle: "M2i Formation vs DataScientest 2026 : Quelle Formation IT ?",
        metaDescription:
            "Comparatif M2i Formation vs DataScientest en 2026. Formation IT courte vs parcours Data/IA. Prix, format, certifications. Notre analyse.",
    },
    {
        slug: "afpa-vs-studi",
        organisme1: "afpa",
        organisme2: "studi",
        title: "AFPA vs Studi",
        intro:
            "Formation en centre vs 100 % en ligne : l'AFPA, institution historique de la formation professionnelle avec ses 115 centres, face à Studi, la grande école en ligne aux 200+ formations. Deux visions de la formation continue.",
        verdict:
            "Choisissez l'AFPA si vous préférez le présentiel, les formations pratiques orientées métier et si vous êtes éligible aux financements publics (formations souvent gratuites). Choisissez Studi si vous voulez étudier 100 % en ligne à votre rythme avec un large choix de diplômes.",
        criteria: [
            {
                name: "Prix",
                winner: 1,
                org1Score: "Souvent gratuit (financements publics)",
                org2Score: "150 – 500 €/mois",
                analysis: "L'AFPA est souvent gratuite pour les demandeurs d'emploi. Studi est payant mais abordable.",
            },
            {
                name: "Format",
                winner: 0,
                org1Score: "Présentiel en centre (hébergement possible)",
                org2Score: "100 % e-learning, rythme flexible",
                analysis: "Question de préférence. L'AFPA pour l'immersion, Studi pour la flexibilité.",
            },
            {
                name: "Catalogue",
                winner: 2,
                org1Score: "200+ métiers (orientés pratique)",
                org2Score: "200+ formations diplômantes (large spectre)",
                analysis: "Les deux ont un catalogue large. Studi couvre plus de domaines tertiaires et numériques.",
            },
            {
                name: "Couverture territoriale",
                winner: 1,
                org1Score: "115 centres partout en France",
                org2Score: "100 % en ligne (pas de campus)",
                analysis: "L'AFPA a un ancrage territorial unique avec 115 centres, un atout pour les formations pratiques.",
            },
            {
                name: "Public cible",
                winner: 0,
                org1Score: "Demandeurs d'emploi, reconversions",
                org2Score: "Tous publics, salariés en poste",
                analysis: "L'AFPA cible davantage les demandeurs d'emploi. Studi s'adresse à tous les profils.",
            },
        ],
        metaTitle: "AFPA vs Studi 2026 : Quelle Formation Choisir ?",
        metaDescription:
            "Comparatif AFPA vs Studi en 2026. Présentiel vs en ligne, prix, catalogue, financements. Quelle formation professionnelle choisir ? Notre verdict.",
    },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
    return comparisons.find((c) => c.slug === slug);
}
