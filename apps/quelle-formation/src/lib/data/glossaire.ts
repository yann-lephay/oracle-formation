export interface GlossaryTerm {
    slug: string;
    term: string;
    acronym?: string;
    definition: string;
    longDescription: string;
    category: string;
    relatedTerms: string[];
    relatedDomaines?: string[];
    metaTitle: string;
    metaDescription: string;
    faq: { question: string; answer: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        slug: "cpf",
        term: "CPF (Compte Personnel de Formation)",
        acronym: "CPF",
        definition:
            "Le Compte Personnel de Formation est un dispositif public qui permet à tout actif de cumuler des droits à la formation en euros, utilisables tout au long de sa carrière.",
        longDescription:
            "Le CPF a remplacé le DIF (Droit Individuel à la Formation) en 2015. Depuis 2019, les droits sont comptabilisés en euros et non plus en heures. Chaque salarié à temps plein cumule 500 € par an, plafonnés à 5 000 € (800 €/an et 8 000 € pour les salariés peu qualifiés). Les droits sont rattachés à la personne, pas à l'employeur : ils suivent le salarié tout au long de sa carrière, même en cas de changement d'entreprise ou de perte d'emploi. Depuis 2023, une participation forfaitaire de 100 € est demandée pour chaque inscription (sauf demandeurs d'emploi). Le CPF est utilisable pour des formations certifiantes inscrites au RNCP ou au RS, des bilans de compétences, des VAE et la préparation au permis de conduire.",
        category: "Financement",
        relatedTerms: ["opco", "rncp", "vae", "qualiopi"],
        relatedDomaines: ["developpeur-web", "data-analyst", "marketing-digital"],
        metaTitle: "CPF — Définition, Fonctionnement et Droits 2026",
        metaDescription:
            "Qu'est-ce que le CPF ? Définition, montant des droits, éligibilité, démarches. Tout comprendre sur le Compte Personnel de Formation en 2026.",
        faq: [
            {
                question: "Comment consulter son solde CPF ?",
                answer: "Connectez-vous sur moncompteformation.gouv.fr avec FranceConnect. Votre solde en euros s'affiche directement. Vous pouvez aussi utiliser l'application mobile Mon Compte Formation.",
            },
            {
                question: "Le CPF est-il cumulable avec d'autres financements ?",
                answer: "Oui. Le CPF peut être complété par un abondement employeur, une aide France Travail (AIF) ou un financement OPCO. C'est même recommandé si votre solde ne couvre pas l'intégralité de la formation.",
            },
        ],
    },
    {
        slug: "qualiopi",
        term: "Qualiopi",
        definition:
            "Qualiopi est la certification qualité obligatoire pour les organismes de formation souhaitant accéder aux fonds publics et mutualisés (CPF, OPCO, France Travail).",
        longDescription:
            "Entrée en vigueur le 1er janvier 2022, la certification Qualiopi remplace l'ancien référencement Datadock. Elle est délivrée par des organismes certificateurs accrédités par le Cofrac après un audit initial portant sur 7 critères du Référentiel National Qualité. La certification est valable 3 ans avec un audit de surveillance à 18 mois. Les 7 critères couvrent l'information du public, l'identification des objectifs, l'adaptation des prestations, les moyens pédagogiques, la qualification des personnels, l'environnement professionnel et le traitement des réclamations. Sans Qualiopi, un organisme ne peut pas proposer de formations finançables par le CPF ou les OPCO.",
        category: "Certifications",
        relatedTerms: ["rncp", "cpf", "opco"],
        metaTitle: "Qualiopi — Définition et Critères de Certification",
        metaDescription:
            "Qu'est-ce que Qualiopi ? Définition, 7 critères du Référentiel National Qualité, vérification. Tout savoir sur la certification Qualiopi.",
        faq: [
            {
                question: "Comment vérifier qu'un organisme est certifié Qualiopi ?",
                answer: "Consultez la liste officielle sur data.gouv.fr, demandez le certificat à l'organisme (numéro, date de validité, périmètre), ou vérifiez le logo Qualiopi sur leur site avec le numéro de certificat.",
            },
            {
                question: "Qualiopi garantit-elle la qualité d'une formation ?",
                answer: "Qualiopi atteste du respect de processus qualité par l'organisme, mais ne garantit pas directement la qualité du contenu pédagogique. Combinez Qualiopi avec les avis d'anciens élèves et le taux d'insertion.",
            },
        ],
    },
    {
        slug: "rncp",
        term: "RNCP (Répertoire National des Certifications Professionnelles)",
        acronym: "RNCP",
        definition:
            "Le RNCP est le registre officiel des diplômes et titres professionnels reconnus par l'État français, géré par France Compétences.",
        longDescription:
            "Le RNCP recense les certifications professionnelles classées par niveau de qualification : niveau 3 (CAP), niveau 4 (Bac), niveau 5 (Bac+2), niveau 6 (Bac+3/4), niveau 7 (Bac+5) et niveau 8 (Doctorat). Chaque fiche RNCP détaille les compétences attestées, les modalités d'évaluation, les passerelles et les débouchés. L'inscription au RNCP est accordée par France Compétences pour une durée maximale de 5 ans, renouvelable. Un titre RNCP a la même valeur juridique qu'un diplôme universitaire de même niveau. Les formations RNCP sont éligibles au CPF. Ne pas confondre avec le RS (Répertoire Spécifique) qui recense les certifications de compétences spécifiques.",
        category: "Certifications",
        relatedTerms: ["vae", "cpf", "qualiopi"],
        relatedDomaines: ["developpeur-web", "data-analyst", "cybersecurite"],
        metaTitle: "RNCP — Définition, Niveaux et Vérification 2026",
        metaDescription:
            "Qu'est-ce que le RNCP ? Définition, niveaux de qualification, différence avec le RS. Comment vérifier qu'un diplôme est inscrit au RNCP.",
        faq: [
            {
                question: "Comment vérifier qu'un titre est inscrit au RNCP ?",
                answer: "Consultez le site de France Compétences (francecompetences.fr). La recherche est gratuite. Chaque fiche détaille le niveau, les compétences, les organismes habilités et la date d'expiration.",
            },
            {
                question: "Un titre RNCP a-t-il la même valeur qu'un diplôme universitaire ?",
                answer: "Juridiquement oui. Un titre RNCP niveau 7 équivaut à un Master. En pratique, les recruteurs tech valorisent de plus en plus les compétences et le portfolio, au-delà du type de diplôme.",
            },
        ],
    },
    {
        slug: "vae",
        term: "VAE (Validation des Acquis de l'Expérience)",
        acronym: "VAE",
        definition:
            "La VAE permet d'obtenir un diplôme RNCP en faisant reconnaître son expérience professionnelle, sans suivre de formation.",
        longDescription:
            "La VAE est un droit inscrit dans le Code du travail depuis 2002. Elle permet à toute personne justifiant d'au moins 1 an d'expérience en lien avec une certification RNCP de la valider en tout ou partie. Le processus comprend 4 étapes : choix du diplôme visé, dépôt du livret 1 (recevabilité), rédaction du livret 2 (description détaillée de l'expérience) et passage devant un jury. L'accompagnement par un prestataire (finançable par le CPF, coût : 1 500 – 3 000 €) est recommandé. Le jury peut accorder la validation totale, partielle (avec prescriptions complémentaires) ou la refuser. La durée moyenne d'une VAE est de 6 à 18 mois. La réforme 2023 a simplifié le processus avec un guichet unique (France VAE).",
        category: "Certifications",
        relatedTerms: ["rncp", "cpf", "qualiopi"],
        metaTitle: "VAE — Validation des Acquis de l'Expérience Expliquée",
        metaDescription:
            "Qu'est-ce que la VAE ? Comment obtenir un diplôme grâce à son expérience professionnelle ? Démarches, coût, financement CPF. Guide complet.",
        faq: [
            {
                question: "Combien coûte une VAE ?",
                answer: "L'accompagnement VAE coûte en moyenne 1 500 à 3 000 €. Il est finançable par le CPF. Les frais de jury sont généralement gratuits. Le coût total est donc bien inférieur à celui d'une formation complète.",
            },
            {
                question: "Quel est le taux de réussite d'une VAE ?",
                answer: "Le taux de validation totale est d'environ 65 %. Environ 25 % obtiennent une validation partielle (avec des modules complémentaires à réaliser). Le taux d'échec complet est faible (10 %).",
            },
        ],
    },
    {
        slug: "opco",
        term: "OPCO (Opérateur de Compétences)",
        acronym: "OPCO",
        definition:
            "Les OPCO sont des organismes paritaires qui collectent les contributions formation des entreprises et financent les actions de formation des salariés.",
        longDescription:
            "Depuis 2019, la France compte 11 OPCO (contre 20 OPCA auparavant). Chaque OPCO couvre un ou plusieurs secteurs d'activité. Exemples : ATLAS (services financiers et conseil), Akto (services à forte intensité de main-d'œuvre), AFDAS (culture, médias, loisirs). Les OPCO financent les plans de développement des compétences des entreprises de moins de 50 salariés, les contrats d'apprentissage et de professionnalisation, et les actions de formation des TPE/PME. Pour un salarié, le financement OPCO est complémentaire au CPF : l'employeur demande une prise en charge à son OPCO pour cofinancer la formation. Les OPCO accompagnent aussi les entreprises dans la définition de leur stratégie de formation.",
        category: "Financement",
        relatedTerms: ["cpf", "qualiopi", "rncp"],
        metaTitle: "OPCO — Rôle, Liste et Financement Formation",
        metaDescription:
            "Qu'est-ce qu'un OPCO ? Rôle, liste des 11 OPCO, financements disponibles pour les salariés et les entreprises. Guide complet.",
        faq: [
            {
                question: "Comment trouver son OPCO ?",
                answer: "L'OPCO dépend du code NAF/APE de votre entreprise. Consultez le site du Ministère du Travail ou demandez à votre service RH. Le code NAF figure sur votre bulletin de salaire.",
            },
            {
                question: "Un salarié peut-il contacter directement son OPCO ?",
                answer: "En général, c'est l'employeur qui fait la demande de financement auprès de l'OPCO. Mais un salarié peut contacter l'OPCO pour se renseigner sur les formations éligibles et les montants disponibles.",
            },
        ],
    },
    {
        slug: "bootcamp",
        term: "Bootcamp",
        definition:
            "Un bootcamp est une formation intensive et accélérée (8 à 16 semaines) qui vise à rendre opérationnel rapidement sur un métier du numérique.",
        longDescription:
            "Le concept de bootcamp vient des États-Unis (General Assembly, Flatiron School) et s'est répandu en France avec Le Wagon (2013), Ironhack, Jedha et Wild Code School. La pédagogie est orientée projet : les apprenants construisent des applications concrètes dès la première semaine. L'intensité est élevée (8-10 heures par jour en temps plein) avec un encadrement serré. Les domaines les plus courants : développement web, data science, UX design et cybersécurité. Le prix moyen se situe entre 5 000 € et 9 000 €. La plupart des bootcamps sont éligibles au CPF et délivrent des titres RNCP. Les formats existent en présentiel et en distanciel.",
        category: "Formats",
        relatedTerms: ["e-learning", "blended-learning", "cpf"],
        relatedDomaines: ["developpeur-web", "data-analyst", "cybersecurite", "design-ux-ui"],
        metaTitle: "Bootcamp — Définition, Prix et Avantages 2026",
        metaDescription:
            "Qu'est-ce qu'un bootcamp ? Définition, durée, prix, avantages et inconvénients. Comparatif des meilleurs bootcamps en France en 2026.",
        faq: [
            {
                question: "Un bootcamp est-il reconnu par les employeurs ?",
                answer: "Oui, de plus en plus. Les recruteurs tech valorisent les compétences pratiques et le portfolio. Les bootcamps réputés (Le Wagon, Jedha, Ironhack) ont une forte notoriété auprès des recruteurs.",
            },
            {
                question: "Faut-il des prérequis pour intégrer un bootcamp ?",
                answer: "La plupart des bootcamps n'exigent aucun diplôme spécifique. Un test de motivation et de logique (pas de code) est généralement demandé. Certains bootcamps avancés demandent des bases en programmation.",
            },
        ],
    },
    {
        slug: "e-learning",
        term: "E-learning",
        definition:
            "L'e-learning désigne l'apprentissage en ligne via des plateformes numériques, permettant de se former à son rythme depuis n'importe où.",
        longDescription:
            "L'e-learning a explosé depuis 2020 et représente aujourd'hui plus de 40 % des formations professionnelles en France. Les formats sont variés : cours vidéo (OpenClassrooms, Studi), MOOC (Coursera, edX), classes virtuelles en direct (visioconférence avec un formateur) et formations hybrides. Les avantages sont la flexibilité (formation compatible avec un emploi), le coût généralement inférieur au présentiel et l'accès à des formateurs du monde entier. Les inconvénients : le taux d'abandon est plus élevé qu'en présentiel (manque de cadre et d'émulation de groupe). Les formations e-learning certifiantes sont éligibles au CPF au même titre que le présentiel, à condition d'être Qualiopi et inscrites au RNCP ou RS.",
        category: "Formats",
        relatedTerms: ["bootcamp", "blended-learning", "cpf"],
        metaTitle: "E-learning — Définition, Avantages et Meilleures Plateformes",
        metaDescription:
            "Qu'est-ce que l'e-learning ? Définition, avantages, inconvénients et meilleures plateformes de formation en ligne en France en 2026.",
        faq: [
            {
                question: "L'e-learning est-il aussi efficace que le présentiel ?",
                answer: "Pour les apprenants motivés et autonomes, oui. Les études montrent des résultats similaires. Le facteur clé est l'accompagnement (mentorat, coaching) qui compense l'absence de cours en présentiel.",
            },
            {
                question: "Les formations e-learning sont-elles éligibles au CPF ?",
                answer: "Oui, à condition que l'organisme soit certifié Qualiopi et que la formation soit inscrite au RNCP ou au RS. Le format (présentiel ou distanciel) n'impacte pas l'éligibilité.",
            },
        ],
    },
    {
        slug: "blended-learning",
        term: "Blended learning",
        definition:
            "Le blended learning (formation mixte) combine des séquences en ligne (e-learning) et des séquences en présentiel pour tirer le meilleur des deux formats.",
        longDescription:
            "Le blended learning est considéré comme le format le plus efficace par de nombreux pédagogues. Il combine la flexibilité de l'e-learning (cours théoriques en ligne, à son rythme) avec l'intensité du présentiel (ateliers pratiques, projets en groupe, networking). Des organismes comme Jedha, DataScientest et la Wild Code School proposent ce format : cours en autonomie pendant la semaine + journées en présentiel ou en classe virtuelle le week-end ou en bloc. Le ratio typique est 70 % en ligne / 30 % en présentiel. Ce format est idéal pour les salariés en reconversion qui souhaitent se former tout en travaillant, avec des temps forts en groupe pour maintenir la motivation.",
        category: "Formats",
        relatedTerms: ["e-learning", "bootcamp"],
        metaTitle: "Blended Learning — Définition et Avantages",
        metaDescription:
            "Qu'est-ce que le blended learning ? Formation mixte en ligne + présentiel. Avantages, exemples et organismes qui proposent ce format en 2026.",
        faq: [
            {
                question: "Le blended learning est-il plus efficace que le 100 % en ligne ?",
                answer: "Pour la majorité des apprenants, oui. Le blended learning combine la flexibilité du e-learning avec l'émulation du groupe et le cadre du présentiel. Le taux d'achèvement est supérieur au 100 % en ligne.",
            },
            {
                question: "Quels organismes proposent du blended learning ?",
                answer: "Jedha, DataScientest, Wild Code School et plusieurs parcours OpenClassrooms proposent du blended learning avec des bootcamps en présentiel + travail en ligne. Vérifiez le format exact sur chaque fiche organisme.",
            },
        ],
    },
    {
        slug: "certification",
        term: "Certification professionnelle",
        definition:
            "Une certification professionnelle atteste officiellement qu'une personne maîtrise les compétences nécessaires à l'exercice d'un métier ou d'une activité.",
        longDescription:
            "En France, les certifications professionnelles se divisent en deux grandes catégories : les certifications inscrites au RNCP (diplômes et titres reconnus par l'État, classés par niveau) et les certifications inscrites au RS (attestations de compétences spécifiques). À cela s'ajoutent les certifications éditeurs (Google, AWS, Microsoft, Salesforce) qui sont reconnues par les employeurs mais pas par l'État. Pour une reconversion, les certifications RNCP sont recommandées car elles garantissent un niveau de qualification reconnu. Pour une montée en compétences ponctuelle, une certification RS ou éditeur peut suffire. La tendance est aux micro-certifications (badges) et aux certifications empilables qui permettent de construire un parcours progressif.",
        category: "Certifications",
        relatedTerms: ["rncp", "qualiopi", "vae"],
        metaTitle: "Certification Professionnelle — Types et Reconnaissance",
        metaDescription:
            "Qu'est-ce qu'une certification professionnelle ? RNCP, RS, certifications éditeurs. Comment choisir la bonne certification pour sa carrière.",
        faq: [
            {
                question: "Quelle différence entre diplôme et certification ?",
                answer: "En pratique, les deux termes se rapprochent. Un titre RNCP a la même valeur juridique qu'un diplôme universitaire de même niveau. La différence est principalement dans l'organisme qui le délivre (université vs organisme privé certifié).",
            },
            {
                question: "Les certifications Google/AWS sont-elles reconnues ?",
                answer: "Elles sont très reconnues par les employeurs tech mais ne sont pas inscrites au RNCP français. Elles ne sont donc pas directement finançables par le CPF. Certains organismes intègrent ces certifications dans des parcours RNCP éligibles CPF.",
            },
        ],
    },
    {
        slug: "reconversion",
        term: "Reconversion professionnelle",
        definition:
            "La reconversion professionnelle désigne le changement de métier ou de secteur d'activité, souvent accompagné d'une formation pour acquérir de nouvelles compétences.",
        longDescription:
            "En France, 1 actif sur 4 a changé de métier au cours des 5 dernières années (France Compétences). Les motivations principales : quête de sens, meilleure rémunération, conditions de travail et envie d'entreprendre. Le parcours type comprend un bilan de compétences (finançable CPF), le choix d'une formation certifiante et l'insertion dans le nouveau métier. Plusieurs dispositifs facilitent la reconversion : le PTP (Projet de Transition Professionnelle) qui maintient le salaire pendant la formation, le CPF, les aides France Travail et les aides régionales. Les métiers du numérique sont les plus plébiscités pour les reconversions : développeur web, data analyst, UX designer, cybersécurité et product manager. Le taux de satisfaction des reconvertis est de 85 % selon les enquêtes post-formation.",
        category: "Orientation",
        relatedTerms: ["cpf", "vae", "bootcamp"],
        relatedDomaines: ["developpeur-web", "data-analyst", "design-ux-ui"],
        metaTitle: "Reconversion Professionnelle — Définition et Démarches",
        metaDescription:
            "Tout savoir sur la reconversion professionnelle : définition, étapes, financement, métiers porteurs. Guide pratique pour changer de carrière en 2026.",
        faq: [
            {
                question: "La reconversion est-elle risquée ?",
                answer: "Le risque est réel mais maîtrisable. 85 % des reconvertis se déclarent satisfaits. Les clés : un bon bilan de compétences, un choix de formation certifiante et un métier en tension (développeur, data, cybersécurité).",
            },
            {
                question: "Peut-on se reconvertir après 45 ans ?",
                answer: "Absolument. Aucune limite d'âge n'existe pour se former. Les dispositifs (CPF, PTP) sont accessibles à tous les âges. L'expérience professionnelle est un atout, pas un handicap.",
            },
        ],
    },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
    return glossaryTerms.find((t) => t.slug === slug);
}
