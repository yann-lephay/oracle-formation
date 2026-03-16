/**
 * 50 domaines de formation professionnelle
 * Classés par volume de recherche estimé
 */

export interface Domaine {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string; // Lucide icon name
  keywords: string[];
  averageDuration: string;
  priceRange: string;
  cpfEligible: boolean;
  demandLevel: "très forte" | "forte" | "moyenne";
  salaryRange: string;
  metaTitle: string;
  metaDescription: string;
}

export const domaines: Domaine[] = [
  {
    slug: "developpeur-web",
    name: "Développeur Web",
    shortName: "Dev Web",
    description:
      "Apprenez à créer des sites et applications web modernes. Les formations couvrent HTML, CSS, JavaScript, React, Node.js et les frameworks les plus demandés par les entreprises françaises en 2026.",
    icon: "Code",
    keywords: ["formation développeur web", "formation dev web", "apprendre à coder", "bootcamp développeur"],
    averageDuration: "3 à 9 mois",
    priceRange: "3 000 € – 9 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "32 000 € – 55 000 €/an",
    metaTitle: "Formation Développeur Web 2026 : Prix",
    metaDescription:
      "Comparez les meilleures formations développeur web en 2026. Prix, durée, avis et éligibilité CPF. OpenClassrooms, Jedha, Le Wagon… Trouvez votre formation.",
  },
  {
    slug: "data-analyst",
    name: "Data Analyst",
    shortName: "Data Analyst",
    description:
      "Maîtrisez l'analyse de données avec Python, SQL, Power BI et Tableau. Les data analysts sont parmi les profils les plus recherchés en France, avec des salaires attractifs dès la sortie de formation.",
    icon: "BarChart3",
    keywords: ["formation data analyst", "formation analyse de données", "formation data science"],
    averageDuration: "3 à 6 mois",
    priceRange: "4 000 € – 8 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "35 000 € – 50 000 €/an",
    metaTitle: "Formation Data Analyst 2026 : Prix",
    metaDescription:
      "Comparez les formations data analyst en 2026. Python, SQL, Power BI. Prix, durée, avis et CPF. Jedha, DataScientest, OpenClassrooms… Le guide complet.",
  },
  {
    slug: "marketing-digital",
    name: "Marketing Digital",
    shortName: "Marketing Digital",
    description:
      "Devenez expert en marketing digital : SEO, SEA, Social Media, Email Marketing, Content Marketing. Des compétences essentielles pour le marché de l'emploi en 2026.",
    icon: "Megaphone",
    keywords: ["formation marketing digital", "formation webmarketing", "formation SEO", "formation community manager"],
    averageDuration: "2 à 6 mois",
    priceRange: "2 000 € – 6 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "28 000 € – 45 000 €/an",
    metaTitle: "Formation Marketing Digital 2026 : Prix",
    metaDescription:
      "Comparez les meilleures formations marketing digital en 2026. SEO, SEA, Social Media. Prix, avis et éligibilité CPF. Trouvez votre formation.",
  },
  {
    slug: "cybersecurite",
    name: "Cybersécurité",
    shortName: "Cybersécurité",
    description:
      "Formez-vous à la cybersécurité : pentesting, analyse de vulnérabilités, sécurité réseau. Un secteur en pénurie de talents avec des salaires parmi les plus élevés du numérique.",
    icon: "Shield",
    keywords: ["formation cybersécurité", "formation sécurité informatique", "formation pentesting"],
    averageDuration: "3 à 12 mois",
    priceRange: "5 000 € – 12 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "38 000 € – 65 000 €/an",
    metaTitle: "Formation Cybersécurité 2026 : Prix",
    metaDescription:
      "Comparez les formations cybersécurité en 2026. Pentesting, sécurité réseau. Prix, durée et CPF. Jedha, Guardia, DataScientest… Guide complet.",
  },
  {
    slug: "intelligence-artificielle",
    name: "Intelligence Artificielle",
    shortName: "IA",
    description:
      "Plongez dans l'IA et le Machine Learning : Python, TensorFlow, NLP, Computer Vision. Les formations IA vous préparent aux métiers les plus demandés de la décennie.",
    icon: "Brain",
    keywords: ["formation intelligence artificielle", "formation IA", "formation machine learning", "formation deep learning"],
    averageDuration: "3 à 9 mois",
    priceRange: "5 000 € – 10 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "40 000 € – 70 000 €/an",
    metaTitle: "Formation IA 2026 : Comparatif & Prix",
    metaDescription:
      "Comparez les formations IA en 2026. Machine Learning, Deep Learning, NLP. Prix, avis et éligibilité CPF. Trouvez la meilleure formation IA.",
  },
  {
    slug: "gestion-de-projet",
    name: "Gestion de Projet",
    shortName: "Gestion de Projet",
    description:
      "Certifiez-vous en gestion de projet : PMP, PRINCE2, Agile, Scrum. Des certifications reconnues internationalement qui boostent votre carrière et votre salaire.",
    icon: "Kanban",
    keywords: ["formation gestion de projet", "formation PMP", "formation Scrum", "formation Agile"],
    averageDuration: "1 à 3 mois",
    priceRange: "1 500 € – 5 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "35 000 € – 55 000 €/an",
    metaTitle: "Formation Gestion de Projet 2026 : Prix",
    metaDescription:
      "Comparez les formations gestion de projet en 2026. PMP, PRINCE2, Scrum Master. Prix, durée et CPF. Trouvez la certification qu'il vous faut.",
  },
  {
    slug: "comptabilite",
    name: "Comptabilité",
    shortName: "Comptabilité",
    description:
      "Formez-vous à la comptabilité : DCG, DSCG, comptabilité générale, gestion de paie. Des formations éligibles CPF qui mènent à des métiers stables et bien rémunérés.",
    icon: "Calculator",
    keywords: ["formation comptabilité", "formation DCG", "formation comptable", "formation gestion de paie"],
    averageDuration: "3 à 24 mois",
    priceRange: "2 000 € – 8 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "28 000 € – 50 000 €/an",
    metaTitle: "Formation Comptabilité 2026 : Prix",
    metaDescription:
      "Comparez les formations comptabilité en 2026. DCG, DSCG, gestion de paie. Prix, durée et éligibilité CPF. Trouvez votre formation comptable.",
  },
  {
    slug: "design-ux-ui",
    name: "Design UX/UI",
    shortName: "UX/UI Design",
    description:
      "Apprenez le design d'interfaces et l'expérience utilisateur : Figma, Sketch, recherche utilisateur, prototypage. Un métier créatif et technique très demandé.",
    icon: "Palette",
    keywords: ["formation UX design", "formation UI design", "formation Figma", "formation web design"],
    averageDuration: "3 à 6 mois",
    priceRange: "3 000 € – 7 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "32 000 € – 50 000 €/an",
    metaTitle: "Formation UX/UI Design 2026 : Prix",
    metaDescription:
      "Comparez les formations UX/UI design en 2026. Figma, prototypage, recherche utilisateur. Prix, avis et CPF. Ironhack, OpenClassrooms, Uxer School…",
  },
  {
    slug: "ressources-humaines",
    name: "Ressources Humaines",
    shortName: "RH",
    description:
      "Formez-vous aux RH : gestion du personnel, droit social, recrutement, GPEC. Des formations qui mènent à des postes clés en entreprise.",
    icon: "Users",
    keywords: ["formation RH", "formation ressources humaines", "formation recrutement", "formation droit social"],
    averageDuration: "3 à 12 mois",
    priceRange: "2 000 € – 6 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "30 000 € – 50 000 €/an",
    metaTitle: "Formation RH 2026 : Comparatif & Prix",
    metaDescription:
      "Comparez les formations RH en 2026. Gestion du personnel, droit social, recrutement. Prix, durée et CPF. Trouvez votre formation ressources humaines.",
  },
  {
    slug: "commerce-vente",
    name: "Commerce et Vente",
    shortName: "Commerce",
    description:
      "Développez vos compétences commerciales : techniques de vente, négociation, relation client, CRM. Des formations qui boostent directement votre performance.",
    icon: "ShoppingCart",
    keywords: ["formation commerciale", "formation vente", "formation négociation", "formation relation client"],
    averageDuration: "1 à 6 mois",
    priceRange: "1 500 € – 5 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "25 000 € – 50 000 €/an (+ variable)",
    metaTitle: "Formation Commerce & Vente 2026 : Prix",
    metaDescription:
      "Comparez les formations commerciales en 2026. Vente, négociation, CRM. Prix, durée et CPF. Boostez votre carrière commerciale.",
  },
  {
    slug: "langues-anglais",
    name: "Anglais Professionnel",
    shortName: "Anglais",
    description:
      "Perfectionnez votre anglais professionnel : TOEIC, TOEFL, anglais des affaires, conversation. La compétence linguistique la plus demandée sur le marché français.",
    icon: "Globe",
    keywords: ["formation anglais", "formation TOEIC", "formation anglais professionnel", "cours anglais CPF"],
    averageDuration: "1 à 6 mois",
    priceRange: "500 € – 3 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "+15-25% sur le salaire moyen",
    metaTitle: "Formation Anglais Pro 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations anglais professionnel en 2026. TOEIC, anglais des affaires. Prix, avis et CPF. Wall Street English, EF, Babbel…",
  },
  {
    slug: "creation-entreprise",
    name: "Création d'Entreprise",
    shortName: "Création d'entreprise",
    description:
      "Lancez votre entreprise avec les bonnes bases : business plan, statut juridique, comptabilité, marketing. Formations éligibles CPF pour futurs entrepreneurs.",
    icon: "Rocket",
    keywords: ["formation création entreprise", "formation entrepreneur", "formation micro-entrepreneur", "formation auto-entrepreneur"],
    averageDuration: "1 à 3 mois",
    priceRange: "500 € – 3 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "Variable",
    metaTitle: "Formation Création d'Entreprise 2026",
    metaDescription:
      "Comparez les formations création d'entreprise en 2026. Business plan, statut juridique, comptabilité. Prix et CPF. LiveMentor, CCI, BGE…",
  },
  {
    slug: "excel-bureautique",
    name: "Excel et Bureautique",
    shortName: "Excel",
    description:
      "Maîtrisez Excel, Word, PowerPoint et Google Workspace. Des compétences bureautiques certifiantes (TOSA, ICDL) qui restent essentielles dans tous les métiers.",
    icon: "Table",
    keywords: ["formation Excel", "formation bureautique", "formation TOSA", "formation Word"],
    averageDuration: "1 à 3 mois",
    priceRange: "500 € – 2 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "+10-15% valorisation CV",
    metaTitle: "Formation Excel 2026 : TOSA, Prix & CPF",
    metaDescription:
      "Comparez les formations Excel et bureautique en 2026. TOSA, ICDL, Excel avancé. Prix, avis et CPF. Trouvez votre formation bureautique.",
  },
  {
    slug: "immobilier",
    name: "Immobilier",
    shortName: "Immobilier",
    description:
      "Formez-vous aux métiers de l'immobilier : agent immobilier, gestion locative, transaction, expertise. Obtenez votre carte professionnelle avec une formation reconnue.",
    icon: "Building2",
    keywords: ["formation immobilier", "formation agent immobilier", "formation loi Alur", "formation gestion locative"],
    averageDuration: "2 à 12 mois",
    priceRange: "1 500 € – 5 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "25 000 € – 60 000 €/an (+ commissions)",
    metaTitle: "Formation Immobilier 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations immobilier en 2026. Agent immobilier, loi Alur, gestion locative. Prix, durée et CPF. Trouvez votre formation immobilier.",
  },
  {
    slug: "photographie",
    name: "Photographie",
    shortName: "Photo",
    description:
      "Développez vos compétences en photographie : prise de vue, retouche, Lightroom, Photoshop. Des formations pour devenir photographe professionnel ou perfectionner votre pratique.",
    icon: "Camera",
    keywords: ["formation photographie", "formation photographe", "formation Lightroom", "formation retouche photo"],
    averageDuration: "2 à 12 mois",
    priceRange: "1 000 € – 4 000 €",
    cpfEligible: true,
    demandLevel: "moyenne",
    salaryRange: "22 000 € – 40 000 €/an",
    metaTitle: "Formation Photographie 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations photographie en 2026. Prise de vue, Lightroom, Photoshop. Prix, avis et CPF. Devenez photographe professionnel.",
  },
  {
    slug: "graphisme",
    name: "Graphisme et PAO",
    shortName: "Graphisme",
    description:
      "Maîtrisez les outils de création graphique : Photoshop, Illustrator, InDesign, Canva Pro. Des formations pour devenir graphiste freelance ou salarié.",
    icon: "PenTool",
    keywords: ["formation graphisme", "formation Photoshop", "formation Illustrator", "formation PAO"],
    averageDuration: "2 à 9 mois",
    priceRange: "1 500 € – 5 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "25 000 € – 42 000 €/an",
    metaTitle: "Formation Graphisme 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations graphisme en 2026. Photoshop, Illustrator, InDesign. Prix, avis et CPF. Devenez graphiste professionnel.",
  },
  {
    slug: "management",
    name: "Management",
    shortName: "Management",
    description:
      "Développez vos compétences managériales : leadership, gestion d'équipe, conduite du changement. Des formations pour managers en poste ou futurs managers.",
    icon: "UserCheck",
    keywords: ["formation management", "formation manager", "formation leadership", "formation gestion d'équipe"],
    averageDuration: "1 à 6 mois",
    priceRange: "1 500 € – 5 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "40 000 € – 65 000 €/an",
    metaTitle: "Formation Management 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations management en 2026. Leadership, gestion d'équipe, conduite du changement. Prix et CPF. Montez en compétences.",
  },
  {
    slug: "devops-cloud",
    name: "DevOps et Cloud",
    shortName: "DevOps",
    description:
      "Formez-vous au DevOps et Cloud : AWS, Azure, Docker, Kubernetes, CI/CD. Des certifications très recherchées avec des salaires parmi les plus élevés du numérique.",
    icon: "Cloud",
    keywords: ["formation DevOps", "formation AWS", "formation Cloud", "formation Docker", "formation Kubernetes"],
    averageDuration: "3 à 6 mois",
    priceRange: "4 000 € – 9 000 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "42 000 € – 70 000 €/an",
    metaTitle: "Formation DevOps & Cloud 2026 : Prix",
    metaDescription:
      "Comparez les formations DevOps et Cloud en 2026. AWS, Azure, Docker, Kubernetes. Prix, certifications et CPF. Boostez votre carrière.",
  },
  {
    slug: "product-management",
    name: "Product Management",
    shortName: "Product",
    description:
      "Devenez Product Manager : roadmap produit, discovery, delivery, métriques. Un métier central dans les startups et scale-ups, en forte demande.",
    icon: "Target",
    keywords: ["formation product manager", "formation product management", "formation PM", "formation produit"],
    averageDuration: "2 à 4 mois",
    priceRange: "3 000 € – 7 000 €",
    cpfEligible: true,
    demandLevel: "forte",
    salaryRange: "40 000 € – 65 000 €/an",
    metaTitle: "Formation Product Management 2026 : Prix",
    metaDescription:
      "Comparez les formations product management en 2026. Roadmap, discovery, métriques. Prix, avis et CPF. Devenez product manager.",
  },
  {
    slug: "sante-securite-travail",
    name: "Santé et Sécurité au Travail",
    shortName: "SST",
    description:
      "Certifiez-vous en santé sécurité au travail : SST, PRAP, habilitation électrique, CACES. Des formations obligatoires pour de nombreux métiers.",
    icon: "HardHat",
    keywords: ["formation SST", "formation sécurité au travail", "formation PRAP", "formation habilitation électrique"],
    averageDuration: "1 à 5 jours",
    priceRange: "200 € – 1 500 €",
    cpfEligible: true,
    demandLevel: "très forte",
    salaryRange: "Variable (obligation légale)",
    metaTitle: "Formation SST 2026 : Prix & CPF",
    metaDescription:
      "Comparez les formations santé sécurité au travail en 2026. SST, PRAP, habilitation électrique. Prix et financement. Formations obligatoires.",
  },
];

export function getDomaineBySlug(slug: string): Domaine | undefined {
  return domaines.find((d) => d.slug === slug);
}

export function getTopDomaines(count: number = 10): Domaine[] {
  return domaines.slice(0, count);
}
