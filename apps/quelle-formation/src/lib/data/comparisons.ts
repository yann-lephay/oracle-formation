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
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
    return comparisons.find((c) => c.slug === slug);
}
