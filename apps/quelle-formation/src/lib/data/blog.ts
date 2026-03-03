/**
 * Blog articles for SEO — structured content blocks
 */

export type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string; level: 2 | 3 }
    | { type: "list"; items: string[] }
    | { type: "callout"; text: string; variant: "info" | "tip" | "warning" }
    | { type: "cta"; text: string; href: string; label: string };

export interface BlogArticle {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    updatedAt: string;
    author: string;
    readingTime: string;
    coverImage?: string;
    relatedDomaines: string[];
    relatedOrganismes: string[];
    content: ContentBlock[];
    faq: { question: string; answer: string }[];
    metaTitle: string;
    metaDescription: string;
}

export const blogArticles: BlogArticle[] = [
    {
        slug: "financer-formation-cpf-2026",
        title: "Comment financer sa formation avec le CPF en 2026",
        excerpt:
            "Guide complet pour utiliser votre Compte Personnel de Formation en 2026. Démarches, reste à charge, alternatives de financement.",
        publishedAt: "2026-01-15",
        updatedAt: "2026-03-01",
        author: "QuelleFormation",
        readingTime: "8 min",
        relatedDomaines: ["developpeur-web", "data-analyst", "marketing-digital"],
        relatedOrganismes: ["openclassrooms", "studi", "cnam"],
        content: [
            { type: "paragraph", text: "Le Compte Personnel de Formation (CPF) reste en 2026 le principal levier de financement pour les actifs souhaitant se former. Avec 38,9 millions de titulaires et un solde moyen de 2 400 €, il permet de financer tout ou partie d'une formation certifiante. Mais les règles ont évolué : reste à charge obligatoire, contrôles renforcés et nouvelles modalités. On fait le point." },
            { type: "heading", text: "Le CPF en 2026 : ce qui a changé", level: 2 },
            { type: "paragraph", text: "Depuis 2024, un reste à charge de 100 € est demandé à tout titulaire utilisant son CPF (sauf demandeurs d'emploi). Cette participation forfaitaire s'applique quelle que soit la formation choisie. Par ailleurs, France Compétences a renforcé les contrôles pour lutter contre les fraudes, ce qui a assaini le marché mais réduit le nombre de formations disponibles." },
            { type: "list", items: [
                "Reste à charge de 100 € pour les salariés et indépendants",
                "Exonération pour les demandeurs d'emploi inscrits à France Travail",
                "Renforcement des contrôles qualité (Qualiopi obligatoire)",
                "Fin des démarchages téléphoniques abusifs",
                "Connexion obligatoire via FranceConnect+ (identité numérique)",
            ] },
            { type: "heading", text: "Comment utiliser son CPF : les étapes", level: 2 },
            { type: "list", items: [
                "Créez votre compte sur MonCompteFormation.gouv.fr via FranceConnect+",
                "Consultez votre solde CPF disponible (droits acquis depuis le début de carrière)",
                "Recherchez votre formation par mot-clé ou domaine",
                "Vérifiez que l'organisme est certifié Qualiopi",
                "Inscrivez-vous et validez le paiement (CPF + reste à charge éventuel)",
                "Attendez la validation (délai de rétractation de 14 jours)",
            ] },
            { type: "callout", text: "Attention : ne communiquez JAMAIS vos identifiants CPF par téléphone. Aucun organisme sérieux ne vous demandera vos codes d'accès.", variant: "warning" },
            { type: "heading", text: "Que faire si votre solde CPF est insuffisant ?", level: 2 },
            { type: "paragraph", text: "Si votre solde CPF ne couvre pas la totalité du coût de la formation, plusieurs solutions existent pour compléter le financement :" },
            { type: "list", items: [
                "Abondement employeur : votre entreprise peut compléter votre CPF via un accord",
                "France Travail (ex Pôle Emploi) : l'AIF peut financer le reste pour les demandeurs d'emploi",
                "OPCO : votre branche professionnelle peut co-financer",
                "Financement personnel : paiement en plusieurs fois proposé par la plupart des organismes",
                "Régions : certaines Régions proposent des aides complémentaires",
            ] },
            { type: "heading", text: "Quelles formations sont éligibles au CPF ?", level: 2 },
            { type: "paragraph", text: "Pour être éligible au CPF, une formation doit être certifiante (inscrite au RNCP ou au Répertoire Spécifique) et dispensée par un organisme certifié Qualiopi. Cela inclut les diplômes, titres professionnels, certificats de qualification et certaines certifications éditeurs (Microsoft, AWS, etc.)." },
            { type: "cta", text: "Comparez les formations éligibles CPF sur QuelleFormation.fr et trouvez celle qui correspond à votre projet.", href: "/#domaines", label: "Voir les formations éligibles CPF" },
            { type: "heading", text: "Nos conseils pour bien utiliser son CPF", level: 2 },
            { type: "list", items: [
                "Vérifiez la certification Qualiopi de l'organisme avant de vous inscrire",
                "Comparez au moins 3 organismes pour la même formation",
                "Lisez les avis d'anciens apprenants (Trustpilot, Google, forums)",
                "Privilégiez les formations avec un taux d'insertion publié",
                "Demandez un devis détaillé avant de vous engager",
            ] },
        ],
        faq: [
            {
                question: "Quel est le montant maximum du CPF en 2026 ?",
                answer: "Le CPF est crédité de 500 € par an pour un salarié à temps plein, avec un plafond de 5 000 €. Les salariés peu qualifiés (sans diplôme de niveau 3) bénéficient de 800 €/an avec un plafond de 8 000 €.",
            },
            {
                question: "Le reste à charge CPF de 100 € est-il obligatoire ?",
                answer: "Oui, depuis 2024, un reste à charge de 100 € est obligatoire pour les salariés et indépendants. Les demandeurs d'emploi inscrits à France Travail en sont exonérés. Votre employeur peut prendre en charge ce reste à charge.",
            },
            {
                question: "Comment vérifier mon solde CPF ?",
                answer: "Connectez-vous à MonCompteFormation.gouv.fr avec FranceConnect+. Votre solde s'affiche sur la page d'accueil. Ne faites jamais confiance à un tiers qui prétend connaître votre solde.",
            },
        ],
        metaTitle: "Financer sa Formation avec le CPF en 2026 : Guide Complet",
        metaDescription:
            "Comment utiliser le CPF en 2026 ? Reste à charge, démarches, alternatives. Guide complet pour financer votre formation professionnelle avec le CPF.",
    },
    {
        slug: "reconversion-professionnelle-guide",
        title: "Reconversion professionnelle : le guide complet pour se lancer",
        excerpt:
            "Tout ce qu'il faut savoir pour réussir sa reconversion en 2026. Étapes, financement, formations et retours d'expérience.",
        publishedAt: "2026-01-22",
        updatedAt: "2026-02-20",
        author: "QuelleFormation",
        readingTime: "10 min",
        relatedDomaines: ["developpeur-web", "marketing-digital", "creation-entreprise"],
        relatedOrganismes: ["openclassrooms", "le-wagon", "afpa", "simplon"],
        content: [
            { type: "paragraph", text: "La reconversion professionnelle concerne chaque année des centaines de milliers de Français. Que ce soit par choix (quête de sens, meilleure rémunération) ou par nécessité (licenciement, évolution du marché), changer de métier est un projet qui se prépare. Ce guide vous accompagne à chaque étape." },
            { type: "heading", text: "Pourquoi se reconvertir en 2026 ?", level: 2 },
            { type: "list", items: [
                "49 % des actifs français envisagent une reconversion (étude France Compétences)",
                "Les métiers du numérique offrent des salaires 20-40 % supérieurs à la moyenne",
                "Le CDI n'est plus une garantie de stabilité — mieux vaut des compétences transférables",
                "Les financements n'ont jamais été aussi accessibles (CPF, France Travail, Régions)",
                "L'IA transforme de nombreux métiers — se former est une nécessité",
            ] },
            { type: "heading", text: "Les 5 étapes d'une reconversion réussie", level: 2 },
            { type: "heading", text: "1. Le bilan de compétences", level: 3 },
            { type: "paragraph", text: "Avant de vous lancer, faites un bilan de compétences (finançable par le CPF, environ 1 500-2 500 €). Il vous aidera à identifier vos compétences transférables, vos motivations profondes et les métiers qui vous correspondent. C'est un investissement qui évite les erreurs d'orientation." },
            { type: "heading", text: "2. L'exploration des métiers cibles", level: 3 },
            { type: "paragraph", text: "Une fois le bilan fait, explorez concrètement les métiers qui vous attirent. Rencontrez des professionnels (LinkedIn, meetups), faites des immersions (PMSMP via France Travail) et renseignez-vous sur les réalités du quotidien, les salaires et les perspectives." },
            { type: "heading", text: "3. Le choix de la formation", level: 3 },
            { type: "paragraph", text: "C'est l'étape cruciale. Comparez les organismes sur QuelleFormation.fr en fonction de votre budget, votre disponibilité et vos objectifs. Un bootcamp intensif (Le Wagon, Jedha) convient si vous pouvez vous libérer. Une formation en ligne (OpenClassrooms, Studi) est idéale si vous travaillez en parallèle." },
            { type: "cta", text: "Trouvez la formation idéale pour votre reconversion.", href: "/#domaines", label: "Comparer les formations" },
            { type: "heading", text: "4. Le financement", level: 3 },
            { type: "paragraph", text: "Combinez les sources de financement : CPF + France Travail (AIF) + OPCO + Régions. Pour les demandeurs d'emploi, l'AFPA propose des formations souvent gratuites avec hébergement. Simplon offre des formations 100 % gratuites dans le numérique." },
            { type: "heading", text: "5. La recherche d'emploi", level: 3 },
            { type: "paragraph", text: "Dès le début de votre formation, préparez votre insertion : mettez à jour LinkedIn, construisez votre portfolio (projets concrets), participez aux demo days et événements réseau. Les meilleurs bootcamps ont des career services intégrés." },
            { type: "heading", text: "Les métiers porteurs pour une reconversion", level: 2 },
            { type: "list", items: [
                "Développeur web (32-55k€/an) — forte demande, accessible en 3-9 mois",
                "Data analyst (35-50k€/an) — compétence clé dans toutes les entreprises",
                "UX/UI designer (32-48k€/an) — créativité + tech",
                "Chef de projet digital (38-55k€/an) — management + numérique",
                "Spécialiste cybersécurité (40-65k€/an) — pénurie de talents",
            ] },
            { type: "callout", text: "Conseil : ne quittez pas votre emploi avant d'avoir un plan de financement solide et un organisme de formation identifié. La reconversion se prépare depuis votre poste actuel.", variant: "tip" },
        ],
        faq: [
            {
                question: "Combien de temps dure une reconversion professionnelle ?",
                answer: "En moyenne, une reconversion prend 6 à 18 mois : 1-2 mois de réflexion, 3-12 mois de formation et 1-3 mois de recherche d'emploi. Les bootcamps intensifs permettent les reconversions les plus rapides (3-6 mois au total).",
            },
            {
                question: "Peut-on se reconvertir sans diplôme ?",
                answer: "Oui, de nombreuses formations sont accessibles sans diplôme : bootcamps (Le Wagon, Simplon), formations qualifiantes (AFPA), certifications professionnelles. Ce qui compte, c'est la motivation et les compétences acquises.",
            },
            {
                question: "Comment financer sa reconversion quand on est salarié ?",
                answer: "Utilisez votre CPF (jusqu'à 5 000 €), demandez un abondement à votre employeur, explorez le projet de transition professionnelle (PTP, ex CIF) qui maintient votre salaire pendant la formation, ou optez pour une formation en cours du soir/e-learning.",
            },
        ],
        metaTitle: "Reconversion Professionnelle 2026 : Guide Complet en 5 Étapes",
        metaDescription:
            "Comment réussir sa reconversion professionnelle en 2026 ? Bilan, formation, financement, emploi. Guide complet avec étapes et conseils pratiques.",
    },
    {
        slug: "formations-plus-demandees-2026",
        title: "Les 10 formations les plus demandées en 2026",
        excerpt:
            "Quelles sont les formations professionnelles les plus recherchées en France en 2026 ? Classement, salaires et perspectives.",
        publishedAt: "2026-02-05",
        updatedAt: "2026-03-01",
        author: "QuelleFormation",
        readingTime: "7 min",
        relatedDomaines: ["developpeur-web", "data-analyst", "intelligence-artificielle", "cybersecurite"],
        relatedOrganismes: ["openclassrooms", "jedha", "le-wagon", "datascientest"],
        content: [
            { type: "paragraph", text: "Chaque année, les tendances du marché de l'emploi redessinent la carte des formations les plus demandées. En 2026, l'intelligence artificielle, la data et la cybersécurité dominent le classement, mais les métiers du management et de la comptabilité restent des valeurs sûres. Voici notre top 10 basé sur les volumes de recherche, les offres d'emploi et les retours de nos utilisateurs." },
            { type: "heading", text: "1. Intelligence Artificielle & Prompt Engineering", level: 2 },
            { type: "paragraph", text: "L'IA générative a transformé le marché. Les formations en IA, machine learning et prompt engineering explosent avec une croissance de +180 % des inscriptions en 2 ans. Les profils IA juniors démarrent à 42 000 €/an." },
            { type: "cta", text: "Comparez les formations IA et trouvez le meilleur organisme.", href: "/formation/intelligence-artificielle", label: "Voir les formations IA" },
            { type: "heading", text: "2. Data Analyst / Data Scientist", level: 2 },
            { type: "paragraph", text: "La data reste la compétence #1 demandée par les entreprises. Savoir collecter, analyser et visualiser des données est devenu indispensable dans tous les secteurs. Les formations data (Jedha, DataScientest, Le Wagon) affichent un taux d'insertion supérieur à 90 %." },
            { type: "heading", text: "3. Cybersécurité", level: 2 },
            { type: "paragraph", text: "Avec la multiplication des cyberattaques, la France manque de 15 000 experts en cybersécurité. Les formations certifiantes (CEH, CISSP) sont très recherchées. Salaire d'entrée : 38-45 000 €/an." },
            { type: "heading", text: "4. Développeur Web & Mobile", level: 2 },
            { type: "paragraph", text: "Le développement web reste un classique indémodable. Les bootcamps (Le Wagon, Wild Code School) et formations en ligne (OpenClassrooms) forment chaque année des milliers de développeurs pour un marché toujours en tension." },
            { type: "heading", text: "5. Marketing Digital & Growth", level: 2 },
            { type: "paragraph", text: "SEO, SEA, social media, growth hacking : les compétences marketing digital sont demandées par toutes les entreprises. Les formations sont accessibles et souvent éligibles CPF." },
            { type: "heading", text: "6. Gestion de Projet / Product Management", level: 2 },
            { type: "paragraph", text: "Les méthodologies agiles (Scrum, SAFe) et le product management sont des compétences transversales très valorisées. Les certifications PMP et PSPO sont de vrais accélérateurs de carrière." },
            { type: "heading", text: "7. Comptabilité & Finance", level: 2 },
            { type: "paragraph", text: "Le DCG et le DSCG restent des diplômes très recherchés. La comptabilité se digitalise et les profils doubles compétences (compta + outils digitaux) sont particulièrement prisés." },
            { type: "heading", text: "8. Ressources Humaines", level: 2 },
            { type: "paragraph", text: "Les formations RH évoluent vers le digital : SIRH, marque employeur, recrutement data-driven. Les parcours diplômants (Bac+3 à Bac+5) en ligne rencontrent un fort succès." },
            { type: "heading", text: "9. Design UX/UI", level: 2 },
            { type: "paragraph", text: "L'expérience utilisateur est devenue centrale. Les formations UX/UI (Ironhack, OpenClassrooms) combinent design thinking, prototypage (Figma) et tests utilisateurs." },
            { type: "heading", text: "10. DevOps & Cloud", level: 2 },
            { type: "paragraph", text: "AWS, Azure, GCP, Kubernetes, Docker : les compétences cloud et DevOps sont parmi les mieux rémunérées du marché IT. Les certifications cloud sont particulièrement valorisées." },
            { type: "callout", text: "Ce classement est basé sur les données France Travail, les volumes de recherche Google et les retours de nos 50 000+ utilisateurs mensuels.", variant: "info" },
        ],
        faq: [
            {
                question: "Quelle formation offre le meilleur salaire en sortie ?",
                answer: "Les formations en cybersécurité, IA et DevOps/Cloud offrent les meilleurs salaires d'entrée (38-50k€/an). Les formations data analyst et développeur web suivent de près (32-45k€/an).",
            },
            {
                question: "Quelle est la formation la plus rapide pour se reconvertir ?",
                answer: "Les bootcamps en développement web (Le Wagon : 9 semaines) et data (Jedha : 12 semaines) sont les formations les plus rapides pour une reconversion complète. Comptez 3-6 mois avec la recherche d'emploi.",
            },
        ],
        metaTitle: "Top 10 Formations les Plus Demandées en 2026 | Classement",
        metaDescription:
            "Quelles formations professionnelles sont les plus demandées en 2026 ? IA, Data, Cyber, Dev Web… Classement, salaires et perspectives d'emploi.",
    },
    {
        slug: "formation-en-ligne-vs-presentiel",
        title: "Formation en ligne vs présentiel : comment choisir ?",
        excerpt:
            "E-learning, bootcamp, hybride... Quel format de formation choisir en 2026 ? Avantages, inconvénients et critères de choix.",
        publishedAt: "2026-02-12",
        updatedAt: "2026-02-28",
        author: "QuelleFormation",
        readingTime: "6 min",
        relatedDomaines: ["developpeur-web", "data-analyst", "marketing-digital"],
        relatedOrganismes: ["openclassrooms", "le-wagon", "studi", "jedha"],
        content: [
            { type: "paragraph", text: "Le choix du format de formation est aussi important que le choix de l'organisme. En ligne, en présentiel ou hybride : chaque format a ses avantages et convient à des profils différents. Voici notre analyse pour vous aider à choisir." },
            { type: "heading", text: "La formation 100 % en ligne (e-learning)", level: 2 },
            { type: "paragraph", text: "Portée par OpenClassrooms, Studi et le CNAM en ligne, la formation e-learning offre une flexibilité maximale. Vous étudiez quand vous voulez, où vous voulez, à votre rythme. Idéal pour les salariés en poste ou les parents." },
            { type: "heading", text: "Avantages du e-learning", level: 3 },
            { type: "list", items: [
                "Flexibilité totale : étudiez à votre rythme, le soir et le week-end",
                "Compatible avec un emploi à temps plein",
                "Prix souvent plus abordables (pas de campus à financer)",
                "Large choix de formations et spécialisations",
                "Accessible partout en France (pas de contrainte géographique)",
            ] },
            { type: "heading", text: "Inconvénients du e-learning", level: 3 },
            { type: "list", items: [
                "Nécessite beaucoup d'autodiscipline et de motivation",
                "Isolement : pas de camarades de promotion au quotidien",
                "Interactions limitées avec les formateurs",
                "Taux d'abandon plus élevé (40-60 % sur les MOOC)",
            ] },
            { type: "heading", text: "Le bootcamp présentiel", level: 2 },
            { type: "paragraph", text: "Le Wagon, Ironhack, Wild Code School, Simplon : les bootcamps en présentiel proposent une immersion totale de 9 semaines à 5 mois. Vous apprenez en groupe sur un campus, avec un formateur dédié. Idéal pour les reconversions rapides." },
            { type: "heading", text: "Avantages du présentiel", level: 3 },
            { type: "list", items: [
                "Immersion totale — apprentissage accéléré",
                "Dynamique de groupe motivante",
                "Accès direct aux formateurs pour poser vos questions",
                "Réseau professionnel (camarades de promo = futurs collègues)",
                "Meilleur taux de complétion (>90 %)",
            ] },
            { type: "heading", text: "Inconvénients du présentiel", level: 3 },
            { type: "list", items: [
                "Incompatible avec un emploi à temps plein",
                "Prix plus élevés (4 000-9 000 €)",
                "Contrainte géographique (il faut habiter près d'un campus)",
                "Rythme imposé — pas de flexibilité",
            ] },
            { type: "heading", text: "Le format hybride", level: 2 },
            { type: "paragraph", text: "DataScientest (70 % en ligne, 30 % en masterclass live), Jedha (campus + online) et le CNAM (cours du soir + en ligne) proposent des formats hybrides qui combinent les avantages des deux mondes. C'est souvent le meilleur compromis pour les professionnels en activité." },
            { type: "heading", text: "Comment choisir le bon format ?", level: 2 },
            { type: "list", items: [
                "Vous travaillez à temps plein → E-learning ou hybride",
                "Vous êtes en reconversion à temps plein → Bootcamp présentiel",
                "Vous avez besoin de discipline externe → Présentiel ou hybride",
                "Vous habitez loin d'une grande ville → E-learning",
                "Vous voulez un réseau alumni fort → Bootcamp présentiel",
            ] },
            { type: "callout", text: "Notre recommandation : si c'est votre première formation en ligne, commencez par un format hybride (DataScientest, Jedha online) plutôt que du 100 % e-learning. La part de live vous aidera à rester motivé.", variant: "tip" },
            { type: "cta", text: "Comparez les organismes par format sur QuelleFormation.fr.", href: "/#organismes", label: "Comparer les organismes" },
        ],
        faq: [
            {
                question: "Quel est le taux de réussite des formations en ligne ?",
                answer: "Les MOOC gratuits ont un taux de complétion très bas (5-10 %). En revanche, les formations en ligne payantes avec accompagnement (OpenClassrooms, Studi) ont un taux de complétion de 60-80 %, et les bootcamps dépassent 90 %.",
            },
            {
                question: "Les formations en ligne sont-elles reconnues par les employeurs ?",
                answer: "Oui, à condition qu'elles soient certifiantes (RNCP) et dispensées par un organisme certifié Qualiopi. Les employeurs regardent davantage les compétences acquises et le portfolio que le format de la formation.",
            },
        ],
        metaTitle: "Formation en Ligne vs Présentiel 2026 : Comment Choisir ?",
        metaDescription:
            "E-learning ou bootcamp présentiel ? Avantages, inconvénients et critères de choix pour chaque format de formation professionnelle en 2026.",
    },
    {
        slug: "choisir-organisme-formation",
        title: "Comment choisir son organisme de formation en 2026",
        excerpt:
            "Les 7 critères essentiels pour choisir le bon organisme. Qualiopi, CPF, avis, taux d'insertion... Ne vous trompez pas.",
        publishedAt: "2026-02-20",
        updatedAt: "2026-03-01",
        author: "QuelleFormation",
        readingTime: "7 min",
        relatedDomaines: ["developpeur-web", "data-analyst", "cybersecurite"],
        relatedOrganismes: ["openclassrooms", "jedha", "le-wagon", "studi", "afpa"],
        content: [
            { type: "paragraph", text: "Avec plus de 16 000 organismes de formation certifiés Qualiopi en France, choisir le bon est un vrai défi. Un mauvais choix peut coûter des milliers d'euros et des mois perdus. Voici les 7 critères à vérifier absolument avant de vous inscrire." },
            { type: "heading", text: "1. La certification Qualiopi", level: 2 },
            { type: "paragraph", text: "C'est le critère non négociable. Sans Qualiopi, un organisme ne peut pas proposer de formations financées par le CPF, les OPCO ou France Travail. La certification Qualiopi garantit que l'organisme respecte 7 critères de qualité audités tous les 3 ans." },
            { type: "callout", text: "Vérifiez la certification Qualiopi sur la liste publique : https://www.data.gouv.fr/fr/datasets/liste-publique-des-organismes-de-formation/", variant: "info" },
            { type: "heading", text: "2. Les avis et témoignages", level: 2 },
            { type: "paragraph", text: "Consultez les avis sur Trustpilot, Google, les forums (Reddit, forums spécialisés) et les réseaux sociaux. Méfiez-vous des avis uniquement sur le site de l'organisme. Cherchez les avis négatifs : ils sont souvent plus instructifs que les positifs." },
            { type: "heading", text: "3. Le taux d'insertion professionnelle", level: 2 },
            { type: "paragraph", text: "Les organismes sérieux publient leur taux d'insertion à 6 mois. Le Wagon affiche 93 %, Jedha autour de 85 %. Méfiez-vous des organismes qui ne communiquent pas ces chiffres ou qui annoncent 100 % d'insertion." },
            { type: "heading", text: "4. Le contenu pédagogique", level: 2 },
            { type: "paragraph", text: "Demandez le programme détaillé. Vérifiez qu'il couvre les technologies et compétences actuellement demandées par le marché. Un bon signe : le programme est mis à jour régulièrement. Un mauvais signe : des technologies obsolètes ou un programme vague." },
            { type: "heading", text: "5. Le format et la durée", level: 2 },
            { type: "paragraph", text: "Choisissez un format compatible avec votre situation : e-learning pour les salariés, bootcamp pour les reconversions à temps plein, hybride pour le compromis. La durée doit correspondre à vos objectifs : quelques semaines pour un upskilling, plusieurs mois pour une reconversion." },
            { type: "heading", text: "6. Le prix et les financements", level: 2 },
            { type: "paragraph", text: "Comparez les prix totaux (pas juste le mensuel). Vérifiez l'éligibilité CPF et les autres financements possibles. Attention aux formations à prix très bas (qualité souvent insuffisante) comme aux prix exorbitants (pas toujours justifiés)." },
            { type: "heading", text: "7. L'accompagnement et le suivi", level: 2 },
            { type: "paragraph", text: "Mentorat individuel (OpenClassrooms), career services (Le Wagon), communauté alumni (Jedha) : l'accompagnement fait souvent la différence entre une formation réussie et un abandon. Demandez précisément ce qui est inclus." },
            { type: "cta", text: "Utilisez notre comparateur pour évaluer les organismes sur tous ces critères.", href: "/#organismes", label: "Comparer les organismes" },
            { type: "heading", text: "Les red flags à repérer", level: 2 },
            { type: "list", items: [
                "Démarchage téléphonique agressif (interdit depuis 2023)",
                "Promesse de emploi garanti à 100 %",
                "Pas de certification Qualiopi",
                "Aucun avis vérifiable en ligne",
                "Programme flou ou non communiqué avant inscription",
                "Pression pour s'inscrire rapidement (fausse urgence)",
            ] },
            { type: "callout", text: "Un bon organisme vous laisse toujours un délai de réflexion et vous fournit toutes les informations avant inscription. Si on vous met la pression, fuyez.", variant: "warning" },
        ],
        faq: [
            {
                question: "Comment vérifier qu'un organisme est certifié Qualiopi ?",
                answer: "Consultez la liste publique sur data.gouv.fr ou demandez à l'organisme son certificat Qualiopi avec la date de validité. La certification est valable 3 ans et fait l'objet d'un audit de surveillance à mi-parcours.",
            },
            {
                question: "Un organisme cher est-il forcément meilleur ?",
                answer: "Non. Le prix dépend du format (présentiel > en ligne), de la durée et de la marque. L'AFPA et Simplon proposent des formations gratuites de qualité. OpenClassrooms et Studi offrent des formations diplômantes abordables. Comparez toujours le rapport qualité-prix.",
            },
            {
                question: "Faut-il privilégier un organisme avec un campus ?",
                answer: "Pas nécessairement. Le campus est un plus pour le networking et la discipline, mais de très bonnes formations existent 100 % en ligne. Choisissez en fonction de votre style d'apprentissage et de vos contraintes.",
            },
        ],
        metaTitle: "Comment Choisir son Organisme de Formation en 2026 : 7 Critères",
        metaDescription:
            "Les 7 critères pour bien choisir son organisme de formation. Qualiopi, avis, taux d'insertion, prix. Guide complet pour ne pas se tromper en 2026.",
    },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
    return blogArticles.find((a) => a.slug === slug);
}
