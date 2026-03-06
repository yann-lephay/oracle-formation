export interface Persona {
    slug: string;
    name: string;
    description: string;
    icon: string;
    challenges: string[];
    recommendedDomaines: string[];
    recommendedOrganismes: { slug: string; reason: string }[];
    budgetTips: string[];
    metaTitle: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
}

export const personas: Persona[] = [
    {
        slug: "reconversion",
        name: "Reconversion professionnelle",
        description:
            "Vous changez de métier ? Les formations certifiantes (RNCP) avec accompagnement carrière sont idéales pour réussir votre transition, quel que soit votre âge ou parcours.",
        icon: "RefreshCw",
        challenges: [
            "Identifier les compétences transférables de son ancien métier",
            "Choisir entre bootcamp intensif et formation longue",
            "Financer la formation tout en maintenant ses revenus",
            "Convaincre les recruteurs malgré un parcours atypique",
            "Gérer le stress d'un changement de carrière à 30, 40 ou 50 ans",
        ],
        recommendedDomaines: ["developpeur-web", "data-analyst", "design-ux-ui", "marketing-digital", "gestion-de-projet"],
        recommendedOrganismes: [
            { slug: "openclassrooms", reason: "Format e-learning flexible compatible avec un emploi, diplômes RNCP Bac+2 à Bac+5" },
            { slug: "jedha", reason: "Bootcamp data intensif avec excellent taux d'insertion (93 %)" },
            { slug: "le-wagon", reason: "Bootcamp développeur web reconnu mondialement, forte communauté alumni" },
            { slug: "studi", reason: "Formations longues certifiantes à prix compétitif, 100 % en ligne" },
        ],
        budgetTips: [
            "Utilisez le PTP (Projet de Transition Professionnelle) pour maintenir votre salaire pendant la formation",
            "Combinez CPF + abondement employeur pour couvrir le coût total",
            "Les demandeurs d'emploi peuvent cumuler CPF + AIF (France Travail)",
            "Certains organismes proposent le paiement en 10-12 fois sans frais",
        ],
        metaTitle: "Formations pour Reconversion Professionnelle 2026 — Comparatif",
        metaDescription:
            "Les meilleures formations pour réussir sa reconversion professionnelle en 2026. Bootcamps, formations longues, CPF. Comparatif des organismes adaptés aux reconvertis.",
        faq: [
            {
                question: "Peut-on se reconvertir sans diplôme ?",
                answer: "Oui. De nombreux bootcamps sont accessibles sans prérequis de diplôme. Le test d'entrée évalue la motivation et les aptitudes logiques, pas le niveau d'études. Des plateformes comme OpenClassrooms proposent des parcours dès le niveau Bac.",
            },
            {
                question: "Quelle formation choisir pour une reconversion rapide ?",
                answer: "Les bootcamps (3-6 mois) sont le format le plus rapide. En développement web, data ou UX design, vous pouvez être opérationnel en 4-6 mois. Le Wagon, Jedha et Ironhack sont les références pour ce format.",
            },
            {
                question: "Comment financer sa reconversion en tant que salarié ?",
                answer: "Le PTP (Projet de Transition Professionnelle) est le dispositif le plus avantageux : il finance la formation ET maintient 100 % de votre salaire. Conditions : 24 mois d'ancienneté dont 12 dans l'entreprise actuelle.",
            },
        ],
    },
    {
        slug: "demandeur-emploi",
        name: "Demandeurs d'emploi",
        description:
            "France Travail propose plusieurs aides pour financer une formation qualifiante. Combinez CPF, AIF et aides régionales pour vous former sans reste à charge.",
        icon: "Search",
        challenges: [
            "Financer la formation avec un budget limité",
            "Choisir une formation qui mène réellement à l'emploi",
            "Maintenir ses allocations chômage pendant la formation",
            "Se former rapidement pour retrouver un emploi",
            "Obtenir un diplôme reconnu pour se démarquer",
        ],
        recommendedDomaines: ["developpeur-web", "data-analyst", "cybersecurite", "marketing-digital", "commerce-vente"],
        recommendedOrganismes: [
            { slug: "openclassrooms", reason: "Garantie emploi ou remboursé sur certains parcours" },
            { slug: "studi", reason: "Formations certifiantes à partir de 200 €/mois, 100 % CPF" },
            { slug: "jedha", reason: "Financement France Travail possible, bootcamp court et efficace" },
            { slug: "wild-code-school", reason: "Formations intensives avec accompagnement vers l'emploi" },
        ],
        budgetTips: [
            "Les demandeurs d'emploi sont dispensés de la participation forfaitaire CPF de 100 €",
            "L'AIF (Aide Individuelle à la Formation) de France Travail peut couvrir le reste à charge",
            "Vos allocations ARE sont maintenues pendant la formation (statut AREF)",
            "Certaines Régions proposent des aides complémentaires — renseignez-vous auprès de votre conseiller",
        ],
        metaTitle: "Formations pour Demandeurs d'Emploi 2026 — Aides et Financement",
        metaDescription:
            "Quelles formations suivre en tant que demandeur d'emploi en 2026 ? CPF, AIF, aides régionales. Comparatif des organismes avec financement France Travail.",
        faq: [
            {
                question: "Peut-on garder ses allocations chômage pendant une formation ?",
                answer: "Oui. Si la formation est validée par votre conseiller France Travail, vous passez en statut AREF (Allocation d'aide au Retour à l'Emploi Formation) et conservez vos allocations pendant toute la durée de la formation.",
            },
            {
                question: "L'AIF couvre-t-elle 100 % du coût de la formation ?",
                answer: "L'AIF peut couvrir tout ou partie du reste à charge après CPF. Le montant est décidé au cas par cas par votre conseiller France Travail. En pratique, la combinaison CPF + AIF couvre souvent 100 % du coût.",
            },
            {
                question: "Quelles formations sont les plus demandées par les employeurs ?",
                answer: "En 2026, les formations en développement web, data analyst, cybersécurité et marketing digital affichent les meilleurs taux d'insertion (>80 % à 6 mois). Ce sont aussi les métiers en tension avec le plus d'offres d'emploi non pourvues.",
            },
        ],
    },
    {
        slug: "freelance",
        name: "Futurs freelances",
        description:
            "Vous voulez lancer votre activité indépendante ? Combinez compétences métier + gestion d'entreprise pour démarrer sereinement votre activité freelance.",
        icon: "Rocket",
        challenges: [
            "Acquérir des compétences suffisantes pour facturer des prestations",
            "Apprendre la gestion administrative et comptable du freelancing",
            "Se constituer un portfolio et une présence en ligne",
            "Trouver ses premiers clients sans expérience préalable",
            "Fixer ses tarifs et gérer sa trésorerie",
        ],
        recommendedDomaines: ["developpeur-web", "design-ux-ui", "marketing-digital", "creation-entreprise", "product-management"],
        recommendedOrganismes: [
            { slug: "le-wagon", reason: "Réseau alumni fort avec de nombreux freelances, formation intensive" },
            { slug: "livementor", reason: "Formations entrepreneuriat + marketing, accompagnement personnalisé" },
            { slug: "openclassrooms", reason: "Parcours flexibles compatibles avec le lancement d'une activité" },
        ],
        budgetTips: [
            "Le CPF est utilisable pour les indépendants et auto-entrepreneurs",
            "Le FAF (Fonds d'Assurance Formation) de votre secteur peut cofinancer la formation",
            "Certaines formations sont déductibles fiscalement pour les indépendants",
            "Commencez par une formation courte (bootcamp) puis montez en compétences sur le terrain",
        ],
        metaTitle: "Formations pour Devenir Freelance 2026 — Comparatif",
        metaDescription:
            "Les meilleures formations pour lancer son activité freelance en 2026. Développement web, design, marketing digital. Compétences techniques + entrepreneuriat.",
        faq: [
            {
                question: "Quelle formation pour devenir développeur freelance ?",
                answer: "Un bootcamp développeur web (Le Wagon, Ironhack, Wild Code School) de 3-4 mois vous donne les bases pour commencer à freelancer. Complétez par des projets personnels et une spécialisation (React, WordPress, e-commerce).",
            },
            {
                question: "Faut-il une formation pour être freelance ?",
                answer: "Aucun diplôme n'est obligatoire pour être freelance (sauf professions réglementées). Mais une formation structurée accélère l'acquisition de compétences et crédibilise votre profil auprès des clients.",
            },
            {
                question: "Comment financer une formation en tant qu'indépendant ?",
                answer: "Utilisez votre CPF (les indépendants cumulent aussi des droits). Vous pouvez aussi solliciter le FAF de votre secteur (FIFPL, AGEFICE, FAFCEA selon votre activité). Le crédit d'impôt formation des dirigeants est également disponible.",
            },
        ],
    },
    {
        slug: "non-technique",
        name: "Profils non techniques",
        description:
            "Pas de background technique ? Pas de problème. De nombreuses formations sont conçues pour les débutants complets et vous accompagnent pas à pas vers les métiers du numérique.",
        icon: "Lightbulb",
        challenges: [
            "Surmonter l'appréhension face au code et aux technologies",
            "Choisir un métier tech adapté à son profil non technique",
            "Trouver une formation avec une pédagogie adaptée aux débutants",
            "Se sentir légitime face à des profils issus d'écoles d'ingénieurs",
            "Construire un portfolio sans expérience préalable",
        ],
        recommendedDomaines: ["data-analyst", "marketing-digital", "design-ux-ui", "gestion-de-projet", "product-management"],
        recommendedOrganismes: [
            { slug: "openclassrooms", reason: "Parcours progressifs adaptés aux débutants, mentorat individuel" },
            { slug: "datascientest", reason: "Formation data avec prérequis accessibles, pédagogie pas à pas" },
            { slug: "jedha", reason: "Bootcamp data adapté aux profils non techniques, excellente pédagogie" },
            { slug: "livementor", reason: "Accompagnement personnalisé, pédagogie bienveillante" },
        ],
        budgetTips: [
            "Commencez par des ressources gratuites (OpenClassrooms gratuit, YouTube) pour valider votre intérêt",
            "Investissez dans un bootcamp d'introduction (1-2 semaines) avant de vous engager sur une formation longue",
            "Le CPF couvre la majorité des formations pour débutants",
            "Certains organismes proposent des tests d'aptitude gratuits pour vous orienter",
        ],
        metaTitle: "Formations Tech pour Profils Non Techniques 2026 — Par où Commencer",
        metaDescription:
            "Pas de background technique ? Découvrez les formations adaptées aux débutants complets en 2026 : data, UX design, marketing digital, gestion de projet.",
        faq: [
            {
                question: "Faut-il savoir coder pour devenir data analyst ?",
                answer: "Non, pas au départ. Les formations data analyst commencent par les bases (Excel, SQL) avant d'introduire Python. La logique et la curiosité comptent plus que le code. En 3-6 mois, vous maîtriserez les outils nécessaires.",
            },
            {
                question: "Quels métiers tech sont accessibles sans background technique ?",
                answer: "UX designer, product manager, chef de projet digital, data analyst, community manager et growth marketer sont accessibles sans background technique. Ces métiers combinent soft skills et compétences numériques.",
            },
            {
                question: "Les recruteurs valorisent-ils les reconvertis non techniques ?",
                answer: "Oui, de plus en plus. La diversité des profils est recherchée dans la tech. Votre expérience antérieure (vente, finance, santé, droit) est un atout pour comprendre les besoins métier des utilisateurs.",
            },
        ],
    },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
    return personas.find((p) => p.slug === slug);
}
