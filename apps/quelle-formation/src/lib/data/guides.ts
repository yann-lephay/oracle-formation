export interface Guide {
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
    readingTime: string;
    metaTitle: string;
    metaDescription: string;
    relatedDomaines: string[];
    sections: {
        title: string;
        content: string;
    }[];
    faq: { question: string; answer: string }[];
}

export const guides: Guide[] = [
    {
        slug: "financement-cpf",
        title: "Comment financer sa formation avec le CPF en 2026",
        shortTitle: "Financement CPF",
        description:
            "Le guide complet pour utiliser votre Compte Personnel de Formation : solde, éligibilité, démarches et alternatives (OPCO, France Travail, plan de développement).",
        category: "financement",
        publishedAt: "2026-01-10",
        updatedAt: "2026-03-01",
        readingTime: "10 min",
        metaTitle: "Financer sa Formation CPF 2026 : Guide",
        metaDescription:
            "Comment utiliser le CPF pour financer sa formation en 2026 ? Solde, éligibilité, démarches, alternatives. Guide complet avec exemples concrets.",
        relatedDomaines: ["developpeur-web", "data-analyst", "marketing-digital"],
        sections: [
            {
                title: "Qu'est-ce que le CPF ?",
                content:
                    "Le Compte Personnel de Formation (CPF) est un dispositif de financement public qui permet à tout actif (salarié, indépendant, demandeur d'emploi) de cumuler des droits à la formation tout au long de sa carrière. Depuis 2019, les droits sont comptabilisés en euros (et non plus en heures). En 2026, chaque salarié à temps plein acquiert 500 € par an, plafonnés à 5 000 €. Les salariés peu qualifiés (infra Bac) bénéficient de 800 €/an, plafonnés à 8 000 €.",
            },
            {
                title: "Comment consulter son solde CPF ?",
                content:
                    "Rendez-vous sur moncompteformation.gouv.fr ou sur l'application mobile Mon Compte Formation. Connectez-vous avec FranceConnect (identifiants impôts, Ameli ou identité numérique La Poste). Votre solde disponible s'affiche en euros. Attention : depuis 2023, une participation forfaitaire de 100 € est demandée pour toute inscription CPF (sauf demandeurs d'emploi). Vérifiez également que votre employeur n'a pas effectué un abondement complémentaire.",
            },
            {
                title: "Quelles formations sont éligibles au CPF ?",
                content:
                    "Pour être éligible au CPF, une formation doit être certifiante et inscrite au RNCP (Répertoire National des Certifications Professionnelles) ou au RS (Répertoire Spécifique). Les formations courtes non certifiantes ne sont pas éligibles. En pratique, la majorité des formations en développement web, data, marketing digital, cybersécurité et gestion de projet proposées par les organismes de notre comparatif sont éligibles CPF. Vérifiez toujours l'éligibilité sur moncompteformation.gouv.fr avant de vous engager.",
            },
            {
                title: "Les étapes pour utiliser son CPF",
                content:
                    "1. Consultez votre solde sur moncompteformation.gouv.fr. 2. Recherchez la formation souhaitée sur la plateforme. 3. Comparez les offres (prix, durée, organisme, avis). 4. Cliquez sur « S'inscrire à cette formation ». 5. Validez votre identité et payez le reste à charge éventuel (participation de 100 € + complément si le prix dépasse votre solde). 6. L'organisme valide votre inscription sous 2 jours ouvrés. 7. Un délai de rétractation de 14 jours s'applique après validation.",
            },
            {
                title: "Les alternatives au CPF",
                content:
                    "Si votre solde CPF est insuffisant, plusieurs alternatives existent. Les OPCO (Opérateurs de Compétences) peuvent cofinancer la formation de salariés en entreprise. France Travail (ex-Pôle Emploi) propose l'AIF (Aide Individuelle à la Formation) pour les demandeurs d'emploi. Le plan de développement des compétences de votre entreprise peut prendre en charge tout ou partie du coût. Enfin, certaines régions proposent des aides spécifiques. L'idéal est souvent de combiner CPF + une autre source de financement.",
            },
        ],
        faq: [
            {
                question: "Quel est le montant maximum du CPF en 2026 ?",
                answer: "Le plafond est de 5 000 € pour les salariés à temps plein (8 000 € pour les salariés peu qualifiés). Les droits s'accumulent à raison de 500 €/an (800 €/an pour les peu qualifiés).",
            },
            {
                question: "Un demandeur d'emploi peut-il utiliser son CPF ?",
                answer: "Oui. Les demandeurs d'emploi conservent leurs droits CPF et sont dispensés de la participation forfaitaire de 100 €. Ils peuvent aussi combiner CPF et AIF (France Travail).",
            },
            {
                question: "Faut-il l'accord de son employeur pour utiliser le CPF ?",
                answer: "Non, si la formation se déroule en dehors du temps de travail. Si elle a lieu pendant le temps de travail, l'accord de l'employeur est nécessaire. Celui-ci dispose de 30 jours pour répondre (absence de réponse = accord).",
            },
            {
                question: "Peut-on cumuler CPF et financement employeur ?",
                answer: "Oui. L'employeur peut réaliser un abondement complémentaire sur votre CPF via la plateforme EDEF. C'est fréquent dans le cadre du plan de développement des compétences.",
            },
            {
                question: "Comment éviter les arnaques au CPF ?",
                answer: "Ne communiquez jamais vos identifiants CPF par téléphone. Passez uniquement par moncompteformation.gouv.fr. Vérifiez que l'organisme est certifié Qualiopi. Méfiez-vous des formations « 100 % gratuit » et des démarchages téléphoniques insistants.",
            },
        ],
    },
    {
        slug: "certification-qualiopi",
        title: "Qualiopi : tout comprendre sur cette certification qualité",
        shortTitle: "Certification Qualiopi",
        description:
            "La certification Qualiopi est obligatoire pour les organismes de formation depuis 2022. Que garantit-elle ? Comment la vérifier ? Ce guide vous explique tout.",
        category: "certifications",
        publishedAt: "2026-01-20",
        updatedAt: "2026-03-01",
        readingTime: "7 min",
        metaTitle: "Certification Qualiopi 2026 : Guide",
        metaDescription:
            "Qu'est-ce que la certification Qualiopi ? Pourquoi est-elle importante pour choisir sa formation ? Guide complet : critères, vérification, garanties.",
        relatedDomaines: ["developpeur-web", "data-analyst", "cybersecurite"],
        sections: [
            {
                title: "Qu'est-ce que la certification Qualiopi ?",
                content:
                    "Qualiopi est la marque de certification qualité des prestataires d'actions de formation. Depuis le 1er janvier 2022, elle est obligatoire pour tout organisme souhaitant accéder aux fonds publics et mutualisés (CPF, OPCO, France Travail, Régions). Elle remplace l'ancien référencement Datadock. La certification est délivrée par des organismes certificateurs accrédités par le Cofrac, après un audit initial et des audits de surveillance réguliers.",
            },
            {
                title: "Les 7 critères du Référentiel National Qualité",
                content:
                    "Qualiopi évalue les organismes sur 7 critères : 1) Les conditions d'information du public. 2) L'identification précise des objectifs et l'adaptation aux bénéficiaires. 3) L'adaptation des prestations et des modalités d'accueil. 4) L'adéquation des moyens pédagogiques, techniques et d'encadrement. 5) La qualification et le développement des compétences des personnels. 6) L'inscription dans l'environnement professionnel. 7) Le recueil et la prise en compte des appréciations et réclamations.",
            },
            {
                title: "Comment vérifier qu'un organisme est certifié Qualiopi ?",
                content:
                    "Trois méthodes de vérification : 1) Consultez la liste publique sur data.gouv.fr (base de données officielle). 2) Demandez le certificat à l'organisme (il doit mentionner le nom de l'organisme certificateur, la date de validité et le périmètre). 3) Vérifiez sur le site de l'organisme — le logo Qualiopi doit être affiché avec le numéro de certificat. La certification est valable 3 ans avec un audit de surveillance intermédiaire à 18 mois.",
            },
            {
                title: "Qualiopi garantit-elle la qualité pédagogique ?",
                content:
                    "Qualiopi atteste que l'organisme respecte des processus qualité, mais ne garantit pas directement la qualité du contenu pédagogique ou les résultats de la formation. C'est un indicateur de sérieux et de professionnalisme, pas une garantie de résultats. Pour évaluer la qualité réelle, combinez Qualiopi avec d'autres critères : avis des anciens élèves, taux d'insertion professionnelle, contenu du programme et reconnaissance des diplômes (RNCP).",
            },
            {
                title: "Qualiopi et RNCP : quelle différence ?",
                content:
                    "Qualiopi certifie l'organisme (ses processus qualité). Le RNCP certifie le diplôme (sa reconnaissance par l'État). Un organisme peut être Qualiopi sans que toutes ses formations soient au RNCP, et inversement. L'idéal est une formation délivrée par un organisme Qualiopi ET inscrite au RNCP — c'est la combinaison qui garantit à la fois la qualité du processus et la reconnaissance du diplôme.",
            },
        ],
        faq: [
            {
                question: "Un organisme sans Qualiopi peut-il être bon ?",
                answer: "Oui, mais il ne pourra pas proposer de formations finançables par le CPF, les OPCO ou France Travail. L'absence de Qualiopi ne signifie pas mauvaise qualité, mais elle limite vos options de financement.",
            },
            {
                question: "Combien coûte la certification Qualiopi pour un organisme ?",
                answer: "Entre 3 000 € et 8 000 € pour l'audit initial, selon la taille de l'organisme et le nombre de sites. Il faut ajouter l'audit de surveillance à 18 mois et le renouvellement à 3 ans.",
            },
            {
                question: "Qualiopi est-elle obligatoire pour toutes les formations ?",
                answer: "Non, elle est obligatoire uniquement pour accéder aux fonds publics et mutualisés. Un organisme peut proposer des formations payées directement par les particuliers ou les entreprises sans Qualiopi.",
            },
        ],
    },
    {
        slug: "reconversion-professionnelle",
        title: "Reconversion professionnelle : par où commencer en 2026",
        shortTitle: "Reconversion professionnelle",
        description:
            "Vous envisagez une reconversion ? Ce guide détaille les étapes clés : bilan de compétences, choix de formation, financement et insertion professionnelle.",
        category: "orientation",
        publishedAt: "2026-02-01",
        updatedAt: "2026-03-01",
        readingTime: "12 min",
        metaTitle: "Reconversion Professionnelle 2026 : Guide",
        metaDescription:
            "Comment réussir sa reconversion professionnelle en 2026 ? Bilan de compétences, choix de formation, financement CPF, insertion. Guide complet étape par étape.",
        relatedDomaines: ["developpeur-web", "data-analyst", "design-ux-ui", "marketing-digital"],
        sections: [
            {
                title: "Pourquoi se reconvertir en 2026 ?",
                content:
                    "La reconversion professionnelle n'est plus un tabou — c'est devenu une étape normale d'une carrière. En France, 1 actif sur 4 a changé de métier au cours des 5 dernières années selon France Compétences. Les motivations principales : quête de sens (47 %), meilleure rémunération (32 %), conditions de travail (28 %), envie d'entreprendre (18 %). Les métiers du numérique (développeur, data analyst, UX designer, cybersécurité) restent les plus plébiscités pour les reconversions en 2026.",
            },
            {
                title: "Étape 1 — Le bilan de compétences",
                content:
                    "Avant de foncer dans une formation, réalisez un bilan de compétences. Ce dispositif (finançable par le CPF, coût moyen : 1 500 – 3 000 €) vous aide à identifier vos compétences transférables, vos motivations profondes et les métiers qui vous correspondent. Il dure 24 heures réparties sur 2 à 3 mois. À l'issue, vous disposez d'un plan d'action concret. Alternative gratuite : les conseillers en évolution professionnelle (CEP), accessibles via France Travail ou l'APEC.",
            },
            {
                title: "Étape 2 — Choisir sa formation",
                content:
                    "Trois critères essentiels : 1) La certification — privilégiez les formations RNCP pour un diplôme reconnu par l'État. 2) Le format — bootcamp (3-6 mois, intensif), formation longue (9-18 mois, rythme adapté) ou e-learning (flexibilité maximale). 3) L'organisme — vérifiez Qualiopi, les avis d'anciens élèves et le taux d'insertion professionnelle. Notre comparateur vous aide à filtrer selon ces critères. N'hésitez pas à assister aux journées portes ouvertes et à contacter des alumni.",
            },
            {
                title: "Étape 3 — Financer sa reconversion",
                content:
                    "Plusieurs dispositifs sont cumulables : le CPF (jusqu'à 5 000 €), le projet de transition professionnelle (PTP, ex-CIF) qui maintient votre salaire pendant la formation, l'AIF de France Travail pour les demandeurs d'emploi, les aides régionales, et le plan de développement des compétences de votre employeur. Le PTP est le dispositif le plus avantageux pour les salariés : il finance la formation ET maintient 100 % du salaire (si < 2x SMIC) pendant toute la durée.",
            },
            {
                title: "Étape 4 — Réussir son insertion professionnelle",
                content:
                    "La formation n'est que la première moitié du chemin. Pour maximiser vos chances d'insertion : constituez un portfolio de projets concrets pendant la formation, activez votre réseau LinkedIn dès le premier jour, participez aux événements tech de votre ville, candidatez avant même la fin de la formation. Les bootcamps affichent en moyenne 80-90 % de taux d'emploi à 6 mois pour les profils motivés. Les formations longues offrent souvent un accompagnement carrière post-formation.",
            },
        ],
        faq: [
            {
                question: "Peut-on se reconvertir après 40 ans ?",
                answer: "Absolument. 35 % des reconversions concernent des personnes de plus de 40 ans. L'expérience professionnelle antérieure est un atout, pas un handicap. Les soft skills acquises (gestion de projet, communication, résolution de problèmes) sont très valorisées par les employeurs.",
            },
            {
                question: "Combien de temps dure une reconversion ?",
                answer: "Comptez 6 à 18 mois au total : 1-2 mois de réflexion/bilan, 3-12 mois de formation, 1-3 mois de recherche d'emploi. Un bootcamp intensif permet d'aller plus vite (6-9 mois au total), une formation longue est plus progressive.",
            },
            {
                question: "Faut-il démissionner pour se reconvertir ?",
                answer: "Pas nécessairement. Le PTP (projet de transition professionnelle) permet de se former tout en restant salarié. Certaines formations e-learning sont compatibles avec un emploi à temps plein. La démission pour reconversion ouvre aussi droit aux allocations chômage sous conditions.",
            },
            {
                question: "Quels métiers recrutent le plus pour les reconvertis ?",
                answer: "En 2026, les métiers les plus accessibles aux reconvertis sont : développeur web, data analyst, UX designer, chef de projet digital, technicien cybersécurité, comptable et community manager. Ce sont des métiers où les compétences techniques s'acquièrent en formation et où l'expérience professionnelle antérieure est valorisée.",
            },
        ],
    },
    {
        slug: "bootcamp-vs-formation-longue",
        title: "Bootcamp vs formation longue : comment choisir en 2026",
        shortTitle: "Bootcamp vs formation longue",
        description:
            "Bootcamp intensif ou formation longue ? Comparez les deux formats : durée, coût, pédagogie, reconnaissance et résultats pour faire le bon choix.",
        category: "orientation",
        publishedAt: "2026-02-10",
        updatedAt: "2026-03-01",
        readingTime: "8 min",
        metaTitle: "Bootcamp vs Formation Longue 2026",
        metaDescription:
            "Bootcamp ou formation longue ? Comparatif complet 2026 : durée, prix, pédagogie, diplôme, insertion. Quel format choisir selon votre profil ?",
        relatedDomaines: ["developpeur-web", "data-analyst", "cybersecurite"],
        sections: [
            {
                title: "Qu'est-ce qu'un bootcamp ?",
                content:
                    "Un bootcamp est une formation intensive et accélérée, généralement de 8 à 16 semaines à temps plein (ou 6 mois à temps partiel). Le concept vient des États-Unis et s'est répandu en France avec Le Wagon, Ironhack, Jedha ou Wild Code School. La pédagogie est orientée projet : vous apprenez en construisant des applications concrètes, avec un encadrement intensif. Le prix moyen d'un bootcamp en France se situe entre 5 000 € et 9 000 €.",
            },
            {
                title: "Qu'est-ce qu'une formation longue ?",
                content:
                    "Une formation longue dure de 9 à 24 mois et délivre un diplôme reconnu par l'État (RNCP Bac+2 à Bac+5). Des acteurs comme OpenClassrooms, Studi ou CNAM proposent ce format, souvent en e-learning avec un rythme adapté (compatible avec un emploi). La pédagogie combine théorie, projets et stages. Le coût varie de 3 000 € à 15 000 € selon le niveau et l'organisme. L'accompagnement est plus étalé dans le temps (mentorat hebdomadaire).",
            },
            {
                title: "Comparaison des deux formats",
                content:
                    "Durée : bootcamp 2-4 mois vs formation longue 9-24 mois. Prix : bootcamp 5 000-9 000 € vs longue 3 000-15 000 €. Diplôme : bootcamp souvent titre RNCP niveau 5-6 vs longue RNCP niveau 5-7. Rythme : bootcamp temps plein intensif vs longue compatible emploi. Pédagogie : bootcamp 80 % pratique vs longue 50/50 théorie-pratique. Réseau : bootcamp promotion soudée vs longue réseau plus diffus. Accompagnement post-formation : variable dans les deux cas.",
            },
            {
                title: "Quel format choisir selon votre profil ?",
                content:
                    "Choisissez un bootcamp si : vous êtes disponible à temps plein, vous apprenez mieux sous pression, vous visez une insertion rapide, vous avez déjà des bases (autodidacte). Choisissez une formation longue si : vous travaillez en parallèle, vous visez un diplôme Bac+5, vous préférez un apprentissage progressif, vous avez besoin de plus de temps pour assimiler. Dans les deux cas, vérifiez l'éligibilité CPF et les avis d'anciens élèves.",
            },
            {
                title: "L'hybride : le meilleur des deux mondes ?",
                content:
                    "De plus en plus d'organismes proposent des formats hybrides : un bootcamp de 3 mois suivi d'un stage de 3-6 mois, ou une formation longue avec des sprints intensifs. C'est le cas de Jedha (bootcamp + spécialisation) ou de certains parcours OpenClassrooms avec alternance. Ce format combine l'intensité du bootcamp avec la profondeur et la reconnaissance d'une formation longue. C'est souvent le meilleur choix pour les reconversions ambitieuses.",
            },
        ],
        faq: [
            {
                question: "Un bootcamp est-il reconnu par les employeurs ?",
                answer: "Oui, de plus en plus. Les recruteurs tech valorisent davantage le portfolio et les compétences pratiques que le diplôme. Cependant, pour certains postes (grandes entreprises, secteur public), un diplôme RNCP de niveau Bac+5 reste un avantage.",
            },
            {
                question: "Peut-on faire un bootcamp en ligne ?",
                answer: "Oui. La plupart des bootcamps proposent un format distanciel depuis 2020. Le Wagon, Jedha et Ironhack ont des cohortes 100 % en ligne avec le même programme que le présentiel.",
            },
            {
                question: "Quel est le taux d'insertion après un bootcamp vs une formation longue ?",
                answer: "Les bootcamps affichent 75-90 % d'insertion à 6 mois. Les formations longues sont similaires (80-95 %) mais le premier emploi arrive plus tard. Le facteur déterminant reste la motivation et la recherche active d'emploi, pas le format.",
            },
        ],
    },
    {
        slug: "rncp-vae",
        title: "RNCP et VAE : comprendre les certifications en 2026",
        shortTitle: "RNCP et VAE",
        description:
            "RNCP, RS, VAE, Qualiopi : le monde des certifications professionnelles peut sembler obscur. Ce guide clarifie chaque sigle et vous aide à faire les bons choix.",
        category: "certifications",
        publishedAt: "2026-02-15",
        updatedAt: "2026-03-01",
        readingTime: "9 min",
        metaTitle: "RNCP et VAE 2026 : Guide Pratique",
        metaDescription:
            "RNCP, VAE, RS : que signifient ces certifications ? Comment les utiliser ? Guide complet 2026 avec exemples concrets pour bien choisir sa formation.",
        relatedDomaines: ["developpeur-web", "data-analyst", "comptabilite", "ressources-humaines"],
        sections: [
            {
                title: "Qu'est-ce que le RNCP ?",
                content:
                    "Le RNCP (Répertoire National des Certifications Professionnelles) est le registre officiel des diplômes et titres reconnus par l'État français. Il est géré par France Compétences. Un titre RNCP garantit que la formation débouche sur des compétences identifiées et un niveau de qualification reconnu (de niveau 3/CAP à niveau 8/Doctorat). Les niveaux les plus courants en formation professionnelle : niveau 5 (Bac+2), niveau 6 (Bac+3/4) et niveau 7 (Bac+5).",
            },
            {
                title: "Qu'est-ce que le RS (Répertoire Spécifique) ?",
                content:
                    "Le RS recense les certifications et habilitations qui ne sont pas des diplômes mais qui attestent de compétences spécifiques : certificats de compétences (ex : Google Analytics, TOSA, TOEIC), habilitations réglementaires (ex : habilitation électrique) et certifications de branche. Les formations inscrites au RS sont éligibles au CPF mais ne délivrent pas de diplôme. La durée de validité d'une inscription au RS est de 2 à 5 ans, renouvelable.",
            },
            {
                title: "Qu'est-ce que la VAE ?",
                content:
                    "La VAE (Validation des Acquis de l'Expérience) permet d'obtenir un diplôme RNCP sans suivre de formation, en faisant reconnaître son expérience professionnelle. Conditions : justifier d'au moins 1 an d'expérience en lien avec la certification visée. Le processus : 1) Choix du diplôme visé. 2) Dépôt du livret 1 (recevabilité). 3) Rédaction du livret 2 (description détaillée de l'expérience). 4) Passage devant un jury. La VAE est finançable par le CPF (coût moyen : 1 500 – 3 000 € d'accompagnement).",
            },
            {
                title: "Comment vérifier qu'une formation est inscrite au RNCP ?",
                content:
                    "Consultez le site de France Compétences (francecompetences.fr) — la recherche est gratuite et publique. Chaque fiche RNCP détaille : le niveau de qualification, les compétences attestées, les modalités d'évaluation, la date d'échéance de l'enregistrement et les organismes habilités à préparer ce titre. Attention : un organisme peut annoncer « formation certifiante » sans être au RNCP. Vérifiez toujours vous-même sur le site officiel.",
            },
            {
                title: "RNCP, RS ou rien : comment choisir ?",
                content:
                    "Visez un titre RNCP si vous cherchez un diplôme reconnu pour évoluer en entreprise ou changer de métier. Optez pour une certification RS si vous souhaitez valider une compétence spécifique (outil, langue, méthode) sans viser un diplôme complet. Une formation sans certification peut suffire pour une montée en compétences ponctuelle, mais elle ne sera pas finançable par le CPF. Pour une reconversion, le RNCP est fortement recommandé.",
            },
        ],
        faq: [
            {
                question: "Combien de temps prend une VAE ?",
                answer: "Entre 6 et 18 mois en moyenne. La phase de recevabilité (livret 1) prend 1-2 mois, la rédaction du livret 2 prend 3-12 mois selon votre disponibilité, et le passage devant le jury 1-2 mois supplémentaires.",
            },
            {
                question: "La VAE est-elle finançable par le CPF ?",
                answer: "Oui. L'accompagnement VAE (prestation d'un organisme pour vous aider à préparer votre dossier) est éligible au CPF. Le coût moyen est de 1 500 à 3 000 €.",
            },
            {
                question: "Un titre RNCP a-t-il la même valeur qu'un diplôme universitaire ?",
                answer: "Juridiquement oui — un titre RNCP niveau 7 a la même reconnaissance officielle qu'un Master universitaire. En pratique, certains recruteurs font encore la distinction, mais la tendance est à l'égalité, surtout dans le numérique.",
            },
            {
                question: "Que se passe-t-il si une certification RNCP expire ?",
                answer: "Les diplômes déjà délivrés restent valides à vie. Mais l'organisme ne peut plus délivrer de nouveaux diplômes sous ce titre et doit demander un renouvellement à France Compétences.",
            },
        ],
    },
];

export function getGuideBySlug(slug: string): Guide | undefined {
    return guides.find((g) => g.slug === slug);
}
