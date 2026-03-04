export interface ComparisonCriterion {
  name: string;
  description: string;
  solution1Score: number;
  solution2Score: number;
  winner: 0 | 1 | 2;
  analysis: string;
}

export interface Comparison {
  slug: string;
  title: string;
  solution1: string;
  solution2: string;
  intro: string;
  verdict: string;
  metaTitle: string;
  metaDescription: string;
  criteria: ComparisonCriterion[];
  faq: { question: string; answer: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: "navan-vs-travelperk",
    title: "Navan vs TravelPerk",
    solution1: "navan",
    solution2: "travelperk",
    intro:
      "Navan et TravelPerk sont les deux leaders européens de la gestion des voyages d'affaires. Ce comparatif analyse en détail leurs différences pour vous aider à choisir la meilleure TMC pour votre entreprise en 2026.",
    verdict:
      "TravelPerk est idéal pour les PME grâce à son offre gratuite et sa tarification transparente. Navan convient mieux aux ETI et grands comptes qui recherchent une solution tout-en-un (TMC + carte + notes de frais).",
    metaTitle: "Navan vs TravelPerk 2026 — Comparatif Détaillé TMC",
    metaDescription:
      "Comparatif Navan vs TravelPerk : prix, fonctionnalités, inventaire, support. Quelle TMC choisir pour votre entreprise en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk propose une offre gratuite et une tarification transparente. Navan fonctionne uniquement sur devis, ce qui rend la comparaison difficile pour les PME.",
      },
      {
        name: "Inventaire",
        description: "Étendue du catalogue de voyages",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Les deux plateformes proposent un inventaire très large incluant GDS, NDC et contenu direct. TravelPerk revendique le plus grand inventaire mondial, Navan offre une couverture équivalente.",
      },
      {
        name: "Fonctionnalités",
        description: "Périmètre fonctionnel global",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Navan intègre TMC + carte corporate + notes de frais en une seule plateforme. TravelPerk se concentre sur le voyage et s'appuie sur des partenaires pour les dépenses.",
      },
      {
        name: "Expérience utilisateur",
        description: "Facilité d'utilisation et interface",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk est légèrement plus intuitif avec une interface épurée. Navan offre une UX très bonne également, mais la richesse fonctionnelle peut complexifier la prise en main.",
      },
      {
        name: "RSE & Durabilité",
        description: "Engagement environnemental",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "TravelPerk se distingue avec GreenPerk, son programme de compensation carbone intégré. Navan propose des options de durabilité, mais moins structurées.",
      },
    ],
    faq: [
      {
        question: "Quelle est la principale différence entre Navan et TravelPerk ?",
        answer:
          "Navan est une solution tout-en-un (TMC + carte corporate + notes de frais) tandis que TravelPerk se concentre sur la réservation de voyages avec des partenariats pour la gestion des dépenses. TravelPerk est plus accessible en prix avec une offre gratuite.",
      },
      {
        question: "Quelle TMC choisir pour une PME ?",
        answer:
          "Pour une PME de moins de 50 voyageurs, TravelPerk est généralement recommandé grâce à son offre gratuite et sa tarification transparente. Navan est plus adapté aux entreprises de 50+ voyageurs.",
      },
      {
        question: "Peut-on utiliser Navan et TravelPerk pour les trains SNCF ?",
        answer:
          "Oui, les deux plateformes intègrent l'inventaire SNCF complet (TGV, Intercités, TER) et permettent de réserver des billets de train directement depuis leur interface.",
      },
    ],
  },
  {
    slug: "mooncard-vs-spendesk",
    title: "Mooncard vs Spendesk",
    solution1: "mooncard",
    solution2: "spendesk",
    intro:
      "Mooncard et Spendesk sont les deux leaders français de la carte corporate nouvelle génération. Ce comparatif détaille leurs différences pour vous aider à choisir la solution la plus adaptée à votre entreprise.",
    verdict:
      "Mooncard est idéal pour les TPE/PME qui cherchent une carte corporate simple et abordable. Spendesk convient mieux aux PME/ETI qui veulent centraliser cartes, factures et workflow d'achat en une seule plateforme.",
    metaTitle: "Mooncard vs Spendesk 2026 — Comparatif Carte Corporate",
    metaDescription:
      "Comparatif Mooncard vs Spendesk : tarifs, cartes, fonctionnalités, intégrations. Quelle carte corporate choisir en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 9,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Mooncard affiche des tarifs clairs à partir de 4 €/carte/mois. Spendesk fonctionne sur devis, ce qui complique la comparaison pour les petites structures.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue des fonctionnalités",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk offre un périmètre plus large : cartes + factures fournisseurs + workflow d'achat + pré-comptabilité. Mooncard se concentre sur la carte et l'automatisation comptable.",
      },
      {
        name: "Simplicité",
        description: "Rapidité de mise en place et prise en main",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Mooncard est opérationnel en quelques jours avec une prise en main quasi immédiate. Spendesk nécessite un paramétrage plus poussé des workflows et des budgets.",
      },
      {
        name: "Intégrations comptables",
        description: "Compatibilité avec les logiciels comptables français",
        solution1Score: 9,
        solution2Score: 8,
        winner: 1,
        analysis:
          "Mooncard excelle sur les intégrations avec les logiciels comptables français (Sage, Cegid, ACD). Spendesk offre une bonne couverture mais avec un focus plus européen.",
      },
      {
        name: "Scalabilité",
        description: "Capacité à accompagner la croissance",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk est mieux armé pour accompagner les entreprises en croissance grâce à ses budgets par équipe, ses workflows multi-niveaux et sa gestion des entités juridiques multiples.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre Mooncard et Spendesk ?",
        answer:
          "Mooncard se concentre sur la carte corporate et l'automatisation comptable (plus simple, plus abordable). Spendesk offre un périmètre plus large incluant la gestion des factures fournisseurs et les workflows d'achat (plus complet, tarif sur devis).",
      },
      {
        question: "Quelle solution pour une TPE de 5 salariés ?",
        answer:
          "Pour une TPE, Mooncard est généralement plus adapté grâce à ses tarifs accessibles (dès 4 €/carte/mois) et sa simplicité de mise en place. Spendesk cible plutôt les entreprises à partir de 20 salariés.",
      },
      {
        question: "Ces solutions remplacent-elles les notes de frais ?",
        answer:
          "Oui, les deux solutions éliminent la majorité des notes de frais en fournissant des cartes corporate avec catégorisation automatique. Les dépenses restantes (avances personnelles) peuvent être gérées via le module notes de frais de chaque solution.",
      },
    ],
  },
  {
    slug: "navan-vs-mooncard",
    title: "Navan vs Mooncard",
    solution1: "navan",
    solution2: "mooncard",
    intro:
      "Navan et Mooncard répondent à deux besoins complémentaires : la gestion des voyages et celle des dépenses. Ce comparatif analyse dans quelle mesure ces solutions se recoupent et quand il vaut mieux les combiner.",
    verdict:
      "Navan est un choix tout-en-un pour les entreprises qui veulent centraliser voyages et dépenses. Mooncard est idéal pour les entreprises qui veulent d'abord résoudre le problème des notes de frais avec un outil simple et abordable.",
    metaTitle: "Navan vs Mooncard 2026 — Comparatif TMC et Carte Corporate",
    metaDescription:
      "Comparatif Navan vs Mooncard : faut-il une TMC tout-en-un ou une carte corporate spécialisée ? Prix, fonctionnalités et verdict 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation de trains, vols, hôtels et voitures",
        solution1Score: 10,
        solution2Score: 2,
        winner: 1,
        analysis:
          "Navan est une TMC complète avec inventaire GDS, NDC et contenu direct. Mooncard ne gère pas la réservation de voyages — il faut passer par un outil tiers.",
      },
      {
        name: "Gestion des dépenses",
        description: "Carte corporate et automatisation comptable",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Mooncard excelle sur la carte corporate avec OCR, récupération de TVA et export comptable automatique. Navan propose une carte intégrée mais avec moins de profondeur comptable.",
      },
      {
        name: "Tarification",
        description: "Transparence et accessibilité des prix",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Mooncard affiche des tarifs clairs (dès 4 €/carte/mois). Navan fonctionne sur devis, ce qui complique l'estimation pour les PME.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue globale de la solution",
        solution1Score: 9,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Navan couvre voyages + carte + notes de frais en une seule plateforme. Mooncard se concentre sur la carte et la comptabilité automatique.",
      },
      {
        name: "Simplicité",
        description: "Facilité de déploiement et prise en main",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Mooncard est opérationnel en quelques jours. Navan nécessite un onboarding plus long pour configurer les politiques de voyage et les workflows.",
      },
    ],
    faq: [
      {
        question: "Peut-on utiliser Navan et Mooncard ensemble ?",
        answer:
          "Oui, c'est même une configuration courante. Navan gère les réservations de voyages, Mooncard gère les dépenses hors voyage (restaurants, fournitures, etc.). Les deux outils s'intègrent via les logiciels comptables.",
      },
      {
        question: "Mooncard peut-il remplacer Navan ?",
        answer:
          "Non, Mooncard ne gère pas la réservation de voyages. Il remplace uniquement la partie carte corporate et notes de frais de Navan. Si vous avez besoin d'une TMC, Mooncard ne suffit pas.",
      },
      {
        question: "Quelle solution pour une PME de 30 salariés ?",
        answer:
          "Pour une PME de 30 salariés avec peu de déplacements, Mooncard est plus adapté (simple, abordable). Si les voyages représentent un poste important, Navan offre un meilleur contrôle global.",
      },
    ],
  },
  {
    slug: "navan-vs-spendesk",
    title: "Navan vs Spendesk",
    solution1: "navan",
    solution2: "spendesk",
    intro:
      "Navan et Spendesk adoptent la même ambition — centraliser les dépenses d'entreprise — mais avec des approches différentes. Ce comparatif analyse leurs points forts respectifs pour vous aider à choisir.",
    verdict:
      "Navan est le meilleur choix pour les entreprises dont les voyages sont le principal poste de dépenses. Spendesk est idéal pour centraliser toutes les dépenses (cartes, factures, achats) au-delà des seuls voyages.",
    metaTitle: "Navan vs Spendesk 2026 — Comparatif Dépenses d'Entreprise",
    metaDescription:
      "Comparatif Navan vs Spendesk : TMC tout-en-un ou plateforme de dépenses complète ? Analyse détaillée des prix et fonctionnalités 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation et politique voyage",
        solution1Score: 10,
        solution2Score: 2,
        winner: 1,
        analysis:
          "Navan est une TMC complète. Spendesk ne gère pas la réservation de voyages — il faudra passer par une TMC partenaire ou un outil tiers.",
      },
      {
        name: "Gestion des dépenses",
        description: "Cartes, factures, workflow d'achat",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk offre un périmètre plus large : cartes + factures fournisseurs + workflow d'achat + budgets par équipe. Navan se concentre sur les dépenses liées aux voyages.",
      },
      {
        name: "Tarification",
        description: "Transparence et accessibilité",
        solution1Score: 5,
        solution2Score: 5,
        winner: 0,
        analysis:
          "Les deux solutions fonctionnent sur devis personnalisé, ce qui rend la comparaison difficile sans contacter les commerciaux.",
      },
      {
        name: "Workflow & validation",
        description: "Circuits d'approbation et contrôles",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk excelle sur les workflows de validation multi-niveaux et les budgets par département. Navan propose des workflows de voyage mais moins de granularité sur les dépenses.",
      },
      {
        name: "Pré-comptabilité",
        description: "Automatisation comptable et exports",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk offre une pré-comptabilité complète avec clôture automatisée. Navan propose des exports mais avec moins de profondeur sur l'automatisation comptable.",
      },
    ],
    faq: [
      {
        question: "Navan ou Spendesk pour gérer les dépenses d'entreprise ?",
        answer:
          "Si les voyages sont votre principal poste de dépenses, Navan est plus adapté. Si vous cherchez à centraliser toutes les dépenses (y compris factures fournisseurs et achats), Spendesk offre un périmètre plus large.",
      },
      {
        question: "Peut-on utiliser Navan et Spendesk ensemble ?",
        answer:
          "C'est possible mais redondant sur la partie carte corporate. La combinaison la plus courante est Spendesk (dépenses) + une TMC légère (voyages uniquement).",
      },
      {
        question: "Quelle solution pour une ETI de 200 salariés ?",
        answer:
          "Pour une ETI de 200 salariés, les deux solutions sont adaptées. Le choix dépend du volume de voyages : si plus de 50 % du budget dépenses est lié aux voyages, privilégiez Navan. Sinon, Spendesk offre un meilleur contrôle global.",
      },
    ],
  },
  {
    slug: "navan-vs-sap-concur",
    title: "Navan vs SAP Concur",
    solution1: "navan",
    solution2: "sap-concur",
    intro:
      "Navan et SAP Concur représentent deux générations de TMC. Ce comparatif oppose la néo-TMC la plus en vue au leader historique mondial pour vous aider à choisir la bonne solution en 2026.",
    verdict:
      "Navan est idéal pour les entreprises qui veulent une expérience utilisateur moderne et un déploiement rapide. SAP Concur reste incontournable pour les grands comptes dans l'écosystème SAP qui ont besoin d'intégrations ERP profondes.",
    metaTitle: "Navan vs SAP Concur 2026 — Comparatif TMC Moderne vs Historique",
    metaDescription:
      "Comparatif Navan vs SAP Concur : néo-TMC vs leader mondial. Prix, UX, intégrations ERP, fonctionnalités. Quel outil choisir en 2026 ?",
    criteria: [
      {
        name: "Expérience utilisateur",
        description: "Modernité et facilité d'utilisation",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "Navan offre une UX moderne proche des apps grand public. SAP Concur souffre d'une interface vieillissante malgré des améliorations récentes.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 8,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur offre la suite la plus complète du marché (Travel + Expense + Invoice). Navan couvre voyages + carte + notes de frais mais sans module factures fournisseurs.",
      },
      {
        name: "Intégrations ERP",
        description: "Compatibilité avec les systèmes d'entreprise",
        solution1Score: 7,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur excelle sur les intégrations ERP, notamment avec SAP S/4HANA. Navan s'intègre à SAP, Oracle et NetSuite mais avec moins de profondeur native.",
      },
      {
        name: "Déploiement",
        description: "Rapidité de mise en service",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Navan peut être déployé en quelques semaines. SAP Concur nécessite 3 à 6 mois de mise en place avec un intégrateur certifié.",
      },
      {
        name: "Tarification",
        description: "Rapport qualité-prix",
        solution1Score: 6,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Les deux fonctionnent sur devis, mais SAP Concur est généralement plus cher, surtout quand on ajoute les coûts d'intégration et de maintenance.",
      },
    ],
    faq: [
      {
        question: "Navan peut-il remplacer SAP Concur ?",
        answer:
          "Oui, pour la plupart des ETI et grandes entreprises. Navan couvre les voyages et les notes de frais avec une UX bien meilleure. Seule exception : les entreprises fortement intégrées à SAP S/4HANA qui bénéficient des connecteurs natifs de Concur.",
      },
      {
        question: "SAP Concur est-il encore pertinent face aux néo-TMC ?",
        answer:
          "Oui, SAP Concur reste pertinent pour les grands comptes (1 000+ salariés) dans l'écosystème SAP. Pour les PME et ETI, les néo-TMC comme Navan et TravelPerk offrent un meilleur rapport qualité-prix.",
      },
      {
        question: "Combien de temps pour migrer de SAP Concur vers Navan ?",
        answer:
          "La migration prend en moyenne 4 à 8 semaines. Navan propose un accompagnement dédié pour les entreprises qui quittent SAP Concur.",
      },
    ],
  },
  {
    slug: "navan-vs-expensya",
    title: "Navan vs Expensya",
    solution1: "navan",
    solution2: "expensya",
    intro:
      "Navan et Expensya s'adressent à des besoins différents : TMC complète vs gestion des notes de frais. Ce comparatif vous aide à comprendre quand choisir l'un plutôt que l'autre.",
    verdict:
      "Expensya est le choix évident pour les PME qui cherchent uniquement à digitaliser leurs notes de frais. Navan est fait pour les entreprises qui veulent centraliser voyages et dépenses dans une seule plateforme.",
    metaTitle: "Navan vs Expensya 2026 — TMC ou Logiciel de Notes de Frais ?",
    metaDescription:
      "Comparatif Navan vs Expensya : faut-il une TMC tout-en-un ou un spécialiste des notes de frais ? Analyse complète 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation et politique voyage",
        solution1Score: 10,
        solution2Score: 1,
        winner: 1,
        analysis:
          "Navan est une TMC à part entière. Expensya ne gère pas la réservation de voyages — c'est un outil de notes de frais.",
      },
      {
        name: "Notes de frais",
        description: "OCR, indemnités, workflow",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya excelle sur les notes de frais avec un OCR très performant, le calcul automatique des indemnités kilométriques et des per diem. Navan gère les notes de frais mais avec moins de finesse.",
      },
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 4,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya démarre à 4,99 €/utilisateur/mois. Navan fonctionne sur devis et cible des entreprises plus grandes — le ticket d'entrée est bien plus élevé.",
      },
      {
        name: "Intégrations comptables",
        description: "Compatibilité avec les logiciels français",
        solution1Score: 6,
        solution2Score: 8,
        winner: 2,
        analysis:
          "Expensya s'intègre nativement avec Sage, Cegid, Pennylane et les principaux logiciels comptables français. Navan propose des exports mais avec un focus plus international.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue globale de la solution",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "Navan couvre voyages + carte + notes de frais. Expensya se concentre sur les notes de frais et les indemnités avec une carte en option.",
      },
    ],
    faq: [
      {
        question: "Expensya peut-il remplacer Navan ?",
        answer:
          "Non, Expensya ne gère pas la réservation de voyages. Il ne peut remplacer que le module notes de frais de Navan. Si vous avez besoin d'une TMC, il faudra un outil complémentaire.",
      },
      {
        question: "Peut-on utiliser Navan et Expensya ensemble ?",
        answer:
          "C'est possible mais peu recommandé — Navan inclut déjà un module notes de frais. Expensya est plutôt complémentaire d'une TMC qui ne gère pas les notes de frais (comme TravelPerk).",
      },
      {
        question: "Quelle solution pour une TPE de 10 salariés ?",
        answer:
          "Expensya est bien plus adapté : abordable (dès 4,99 €/mois), simple à déployer et couvre le besoin principal. Navan est surdimensionné et trop cher pour une TPE.",
      },
    ],
  },
  {
    slug: "travelperk-vs-mooncard",
    title: "TravelPerk vs Mooncard",
    solution1: "travelperk",
    solution2: "mooncard",
    intro:
      "TravelPerk et Mooncard sont complémentaires : le premier gère les voyages, le second les dépenses. Ce comparatif analyse leurs périmètres respectifs pour savoir s'il faut choisir ou combiner.",
    verdict:
      "TravelPerk et Mooncard sont rarement en concurrence directe — ils sont plutôt complémentaires. Combinés, ils offrent une couverture complète voyages + dépenses à un coût maîtrisé, surtout pour les PME.",
    metaTitle: "TravelPerk vs Mooncard 2026 — TMC ou Carte Corporate ?",
    metaDescription:
      "Comparatif TravelPerk vs Mooncard : peut-on les combiner ? Analyse des périmètres, prix et synergies pour les PME en 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation et inventaire",
        solution1Score: 10,
        solution2Score: 2,
        winner: 1,
        analysis:
          "TravelPerk est une TMC complète avec le plus grand inventaire mondial. Mooncard ne gère pas les réservations de voyages.",
      },
      {
        name: "Carte corporate",
        description: "Cartes physiques et virtuelles",
        solution1Score: 2,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Mooncard est spécialisé dans la carte corporate avec OCR et récupération TVA. TravelPerk ne propose pas de carte corporate intégrée.",
      },
      {
        name: "Tarification",
        description: "Transparence et accessibilité",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Les deux solutions affichent des tarifs transparents et accessibles. TravelPerk propose même une offre gratuite. Mooncard démarre à 4 €/carte/mois.",
      },
      {
        name: "Automatisation comptable",
        description: "Export et réconciliation",
        solution1Score: 6,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Mooncard excelle sur l'automatisation comptable avec catégorisation automatique, récupération TVA et export natif vers Sage, Cegid, etc. TravelPerk offre des exports basiques.",
      },
      {
        name: "Complémentarité",
        description: "Capacité à fonctionner ensemble",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Ces deux outils sont conçus pour fonctionner ensemble. TravelPerk gère les réservations, Mooncard gère les dépenses hors voyage. Pas de redondance fonctionnelle.",
      },
    ],
    faq: [
      {
        question: "Faut-il choisir entre TravelPerk et Mooncard ?",
        answer:
          "Non, les deux outils sont complémentaires. TravelPerk gère les voyages, Mooncard gère les dépenses. Les combiner offre une couverture complète à un coût maîtrisé.",
      },
      {
        question: "TravelPerk + Mooncard vs Navan ?",
        answer:
          "La combinaison TravelPerk + Mooncard offre un périmètre similaire à Navan (voyages + carte) mais avec plus de flexibilité et des tarifs plus transparents. Navan est plus intégré (un seul outil).",
      },
      {
        question: "Combien coûte la combinaison TravelPerk + Mooncard ?",
        answer:
          "TravelPerk propose une offre gratuite (ou plans payants dès 99 €/mois) et Mooncard démarre à 4 €/carte/mois. Pour une PME de 20 personnes, comptez entre 80 et 200 €/mois au total.",
      },
    ],
  },
  {
    slug: "travelperk-vs-spendesk",
    title: "TravelPerk vs Spendesk",
    solution1: "travelperk",
    solution2: "spendesk",
    intro:
      "TravelPerk et Spendesk couvrent deux pans complémentaires de la gestion des dépenses d'entreprise. Ce comparatif analyse s'il faut choisir ou combiner ces deux plateformes françaises de référence.",
    verdict:
      "TravelPerk est le meilleur choix pour les entreprises avec beaucoup de déplacements. Spendesk convient mieux aux entreprises qui veulent centraliser toutes les dépenses (pas seulement les voyages). Les combiner est une option solide.",
    metaTitle: "TravelPerk vs Spendesk 2026 — Voyages ou Dépenses Globales ?",
    metaDescription:
      "Comparatif TravelPerk vs Spendesk : TMC flexible ou plateforme de dépenses tout-en-un ? Analyse détaillée et verdict 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation et politique voyage",
        solution1Score: 10,
        solution2Score: 2,
        winner: 1,
        analysis:
          "TravelPerk est une TMC complète avec FlexiPerk et GreenPerk. Spendesk ne gère pas la réservation de voyages.",
      },
      {
        name: "Gestion des achats",
        description: "Cartes, factures et workflow",
        solution1Score: 2,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk centralise cartes corporate, factures fournisseurs et workflow d'achat. TravelPerk ne couvre pas ce périmètre.",
      },
      {
        name: "Tarification",
        description: "Transparence et accessibilité",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "TravelPerk affiche des tarifs transparents avec une offre gratuite. Spendesk fonctionne sur devis personnalisé.",
      },
      {
        name: "RSE & durabilité",
        description: "Impact environnemental",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "TravelPerk se distingue avec GreenPerk (compensation carbone intégrée). Spendesk ne propose pas d'engagement environnemental spécifique.",
      },
      {
        name: "Pré-comptabilité",
        description: "Automatisation comptable",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Spendesk offre une pré-comptabilité complète avec clôture automatisée et TVA. TravelPerk propose des exports comptables mais sans pré-comptabilité intégrée.",
      },
    ],
    faq: [
      {
        question: "TravelPerk ou Spendesk pour gérer les dépenses ?",
        answer:
          "Pour les dépenses liées aux voyages, TravelPerk est meilleur. Pour les dépenses globales (cartes, factures, achats), Spendesk est plus complet. Les deux se combinent bien.",
      },
      {
        question: "TravelPerk et Spendesk sont-ils complémentaires ?",
        answer:
          "Oui, c'est une combinaison populaire. TravelPerk gère les réservations de voyages et Spendesk gère les cartes corporate, les factures fournisseurs et les workflows d'achat.",
      },
      {
        question: "Quelle solution pour une scale-up en forte croissance ?",
        answer:
          "La combinaison TravelPerk + Spendesk est idéale pour les scale-ups : TravelPerk accompagne la croissance des voyages, Spendesk structure les dépenses avec des budgets par équipe.",
      },
    ],
  },
  {
    slug: "travelperk-vs-sap-concur",
    title: "TravelPerk vs SAP Concur",
    solution1: "travelperk",
    solution2: "sap-concur",
    intro:
      "TravelPerk et SAP Concur incarnent deux visions de la TMC : l'agilité européenne vs la puissance du leader mondial. Ce comparatif détaille leurs forces et faiblesses pour vous aider à trancher.",
    verdict:
      "TravelPerk est le choix idéal pour les PME et ETI qui veulent une TMC moderne, flexible et abordable. SAP Concur reste incontournable pour les grands comptes intégrés à l'écosystème SAP.",
    metaTitle: "TravelPerk vs SAP Concur 2026 — Comparatif TMC Complet",
    metaDescription:
      "Comparatif TravelPerk vs SAP Concur : néo-TMC européenne vs leader mondial. UX, prix, fonctionnalités, intégrations. Guide 2026.",
    criteria: [
      {
        name: "Tarification",
        description: "Transparence et accessibilité",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "TravelPerk propose une offre gratuite et des plans transparents. SAP Concur est nettement plus cher avec des tarifs sur devis et des coûts d'intégration élevés.",
      },
      {
        name: "Expérience utilisateur",
        description: "Modernité de l'interface",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "TravelPerk offre une interface moderne et intuitive proche des apps grand public. SAP Concur souffre d'une UX datée malgré des refontes en cours.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 7,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur offre la suite la plus complète (Travel + Expense + Invoice). TravelPerk se concentre sur le voyage et s'appuie sur des partenaires pour les dépenses.",
      },
      {
        name: "RSE & durabilité",
        description: "Engagement environnemental",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "TravelPerk se distingue avec GreenPerk (compensation carbone automatique). SAP Concur propose des rapports d'émissions CO₂ mais pas de compensation intégrée.",
      },
      {
        name: "Intégrations ERP",
        description: "Profondeur des connecteurs",
        solution1Score: 6,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur est imbattable sur les intégrations ERP, surtout avec SAP S/4HANA. TravelPerk propose des API ouvertes mais avec moins de profondeur native.",
      },
    ],
    faq: [
      {
        question: "TravelPerk peut-il remplacer SAP Concur ?",
        answer:
          "Pour les PME et ETI, oui : TravelPerk offre une meilleure UX à un coût bien inférieur. Pour les grands comptes SAP, la migration est possible mais complexe en raison des intégrations ERP profondes.",
      },
      {
        question: "Quelle TMC pour une PME européenne ?",
        answer:
          "TravelPerk est généralement recommandé pour les PME européennes grâce à son offre gratuite, sa tarification transparente et son inventaire européen très large (SNCF, Eurostar, etc.).",
      },
      {
        question: "SAP Concur est-il meilleur que TravelPerk ?",
        answer:
          "SAP Concur est meilleur pour les grands comptes (1 000+ salariés) intégrés à SAP. Pour tous les autres cas, TravelPerk offre un meilleur rapport qualité-prix et une UX largement supérieure.",
      },
    ],
  },
  {
    slug: "travelperk-vs-expensya",
    title: "TravelPerk vs Expensya",
    solution1: "travelperk",
    solution2: "expensya",
    intro:
      "TravelPerk et Expensya sont deux outils complémentaires : l'un gère les voyages, l'autre les notes de frais. Ce comparatif analyse leurs périmètres pour savoir s'il faut choisir ou combiner.",
    verdict:
      "TravelPerk et Expensya sont complémentaires, pas concurrents. TravelPerk gère les réservations et Expensya gère les notes de frais. Les combiner est la meilleure option pour les PME.",
    metaTitle: "TravelPerk vs Expensya 2026 — TMC ou Notes de Frais ?",
    metaDescription:
      "Comparatif TravelPerk vs Expensya : réservation de voyages ou gestion des notes de frais ? Analyse et verdict 2026.",
    criteria: [
      {
        name: "Gestion des voyages",
        description: "Réservation de transports et hébergements",
        solution1Score: 10,
        solution2Score: 1,
        winner: 1,
        analysis:
          "TravelPerk est une TMC complète avec le plus grand inventaire mondial. Expensya ne gère pas la réservation de voyages.",
      },
      {
        name: "Notes de frais",
        description: "OCR, indemnités, conformité",
        solution1Score: 3,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya est un spécialiste des notes de frais avec OCR avancé, calcul des IK et per diem. TravelPerk ne gère pas nativement les notes de frais.",
      },
      {
        name: "Tarification",
        description: "Accessibilité et transparence",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "Les deux solutions affichent des tarifs transparents et accessibles. TravelPerk a une offre gratuite, Expensya démarre à 4,99 €/utilisateur/mois.",
      },
      {
        name: "Intégrations comptables",
        description: "Compatibilité logiciels français",
        solution1Score: 6,
        solution2Score: 8,
        winner: 2,
        analysis:
          "Expensya s'intègre nativement avec les principaux logiciels comptables français (Sage, Cegid, Pennylane). TravelPerk propose des intégrations mais avec un focus moins français.",
      },
      {
        name: "Complémentarité",
        description: "Capacité à fonctionner ensemble",
        solution1Score: 9,
        solution2Score: 9,
        winner: 0,
        analysis:
          "TravelPerk et Expensya fonctionnent bien ensemble : TravelPerk gère les réservations, Expensya gère les notes de frais et les IK. Aucune redondance.",
      },
    ],
    faq: [
      {
        question: "Faut-il choisir entre TravelPerk et Expensya ?",
        answer:
          "Non, les deux outils sont complémentaires. TravelPerk gère les voyages, Expensya gère les notes de frais. Les combiner offre une couverture complète à un coût maîtrisé.",
      },
      {
        question: "Combien coûte TravelPerk + Expensya ?",
        answer:
          "TravelPerk a une offre gratuite (ou plans payants dès 99 €/mois) et Expensya démarre à 4,99 €/utilisateur/mois. Pour 20 utilisateurs, comptez environ 100-200 €/mois au total.",
      },
      {
        question: "TravelPerk + Expensya vs Navan ?",
        answer:
          "La combinaison TravelPerk + Expensya offre un périmètre similaire à Navan, avec plus de flexibilité et des tarifs plus transparents. Navan est plus intégré (un seul outil, un seul contrat).",
      },
    ],
  },
  {
    slug: "mooncard-vs-sap-concur",
    title: "Mooncard vs SAP Concur",
    solution1: "mooncard",
    solution2: "sap-concur",
    intro:
      "Mooncard et SAP Concur s'attaquent au même problème — la gestion des dépenses professionnelles — mais avec des philosophies radicalement différentes. Simplicité française vs suite mondiale intégrée.",
    verdict:
      "Mooncard est le choix évident pour les PME qui cherchent une solution simple et abordable. SAP Concur reste pertinent pour les ETI et grands comptes qui ont besoin d'une suite complète et d'intégrations ERP profondes.",
    metaTitle: "Mooncard vs SAP Concur 2026 — Carte Corporate vs Suite Mondiale",
    metaDescription:
      "Comparatif Mooncard vs SAP Concur : carte corporate française ou suite de gestion des frais mondiale ? Analyse prix et fonctionnalités 2026.",
    criteria: [
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Mooncard démarre à 4 €/carte/mois. SAP Concur est nettement plus cher, surtout pour les PME, avec des coûts d'intégration en supplément.",
      },
      {
        name: "Simplicité",
        description: "Déploiement et prise en main",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Mooncard est opérationnel en quelques jours. SAP Concur nécessite 3 à 6 mois de déploiement avec un intégrateur certifié.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la solution",
        solution1Score: 6,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur offre Travel + Expense + Invoice. Mooncard se concentre sur la carte corporate et l'automatisation comptable, sans module voyage ni factures fournisseurs.",
      },
      {
        name: "Intégrations comptables",
        description: "Compatibilité avec les logiciels français",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Mooncard excelle sur les intégrations avec les logiciels comptables français (Sage, Cegid, ACD, Pennylane). SAP Concur est plus orienté ERP internationaux.",
      },
      {
        name: "Couverture internationale",
        description: "Fonctionnement multi-pays",
        solution1Score: 5,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur fonctionne dans 190 pays avec des règles fiscales locales. Mooncard est principalement positionné sur le marché français et européen.",
      },
    ],
    faq: [
      {
        question: "Mooncard ou SAP Concur pour une PME française ?",
        answer:
          "Mooncard est largement plus adapté : 5 à 10 fois moins cher, déployé en quelques jours et parfaitement intégré aux logiciels comptables français. SAP Concur est surdimensionné pour la plupart des PME.",
      },
      {
        question: "Peut-on migrer de SAP Concur vers Mooncard ?",
        answer:
          "Oui, la migration est simple. Mooncard peut être déployé en parallèle pendant la transition. La migration prend en moyenne 2 à 4 semaines.",
      },
      {
        question: "SAP Concur a-t-il une carte corporate ?",
        answer:
          "SAP Concur ne propose pas sa propre carte corporate mais s'intègre avec les cartes corporate bancaires. Mooncard fournit directement des cartes Visa physiques et virtuelles.",
      },
    ],
  },
  {
    slug: "mooncard-vs-expensya",
    title: "Mooncard vs Expensya",
    solution1: "mooncard",
    solution2: "expensya",
    intro:
      "Mooncard et Expensya sont deux solutions françaises qui digitalisent les dépenses professionnelles, mais avec des approches différentes : carte corporate vs gestion des notes de frais. Ce comparatif vous aide à choisir.",
    verdict:
      "Mooncard est idéal si vous voulez éliminer les notes de frais en fournissant une carte à chaque collaborateur. Expensya est parfait pour digitaliser les notes de frais existantes à un coût accessible.",
    metaTitle: "Mooncard vs Expensya 2026 — Carte Corporate ou Notes de Frais ?",
    metaDescription:
      "Comparatif Mooncard vs Expensya : carte corporate automatisée ou gestion des notes de frais intelligente ? Analyse complète 2026.",
    criteria: [
      {
        name: "Approche dépenses",
        description: "Philosophie de gestion des frais",
        solution1Score: 9,
        solution2Score: 8,
        winner: 1,
        analysis:
          "Mooncard élimine les notes de frais en fournissant une carte pour chaque dépense. Expensya digitalise le processus de notes de frais existant. Les deux approches ont leurs mérites.",
      },
      {
        name: "OCR & justificatifs",
        description: "Traitement automatique des reçus",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya excelle sur l'OCR avec une reconnaissance quasi instantanée et très précise. Mooncard propose aussi un OCR performant mais légèrement en retrait.",
      },
      {
        name: "Indemnités kilométriques",
        description: "Calcul automatique des IK et per diem",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya calcule automatiquement les IK selon le barème fiscal en vigueur. Mooncard se concentre sur les paiements par carte et ne gère pas nativement les IK.",
      },
      {
        name: "Automatisation comptable",
        description: "Export et réconciliation",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Mooncard excelle sur l'automatisation comptable avec catégorisation automatique, récupération TVA et export natif vers les logiciels français. Expensya propose de bons exports mais avec moins d'automatisation.",
      },
      {
        name: "Tarification",
        description: "Accessibilité des prix",
        solution1Score: 8,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya démarre à 4,99 €/utilisateur/mois pour toutes les fonctionnalités de base. Mooncard à 4 €/carte/mois, mais le coût total dépend du nombre de cartes actives.",
      },
    ],
    faq: [
      {
        question: "Mooncard ou Expensya pour une PME ?",
        answer:
          "Si vos collaborateurs ont surtout des dépenses par carte (restaurants, fournitures), Mooncard est plus adapté. Si vous avez beaucoup de frais personnels à rembourser (IK, per diem), Expensya est plus complet.",
      },
      {
        question: "Peut-on utiliser Mooncard et Expensya ensemble ?",
        answer:
          "C'est possible mais redondant. Mooncard couvre les dépenses par carte, Expensya les notes de frais. Choisir l'un ou l'autre suffit généralement.",
      },
      {
        question: "Quelle solution pour les indemnités kilométriques ?",
        answer:
          "Expensya est clairement le meilleur choix pour les IK : calcul automatique selon le barème fiscal, historique des trajets, et validation par le manager. Mooncard ne gère pas nativement les IK.",
      },
    ],
  },
  {
    slug: "spendesk-vs-sap-concur",
    title: "Spendesk vs SAP Concur",
    solution1: "spendesk",
    solution2: "sap-concur",
    intro:
      "Spendesk et SAP Concur partagent l'ambition de centraliser les dépenses d'entreprise, mais avec des approches très différentes. Néo-fintech française vs leader mondial historique : lequel choisir ?",
    verdict:
      "Spendesk est le choix moderne pour les PME et ETI qui veulent une plateforme agile et complète. SAP Concur reste incontournable pour les grands comptes internationaux intégrés à SAP.",
    metaTitle: "Spendesk vs SAP Concur 2026 — Néo-Fintech vs Leader Mondial",
    metaDescription:
      "Comparatif Spendesk vs SAP Concur : plateforme de dépenses moderne ou suite mondiale historique ? Prix, UX, fonctionnalités 2026.",
    criteria: [
      {
        name: "Expérience utilisateur",
        description: "Modernité et ergonomie",
        solution1Score: 9,
        solution2Score: 5,
        winner: 1,
        analysis:
          "Spendesk offre une interface moderne, intuitive et bien pensée. SAP Concur souffre d'une UX datée qui complexifie l'adoption par les collaborateurs.",
      },
      {
        name: "Tarification",
        description: "Rapport qualité-prix",
        solution1Score: 6,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Les deux fonctionnent sur devis, mais SAP Concur est généralement 2 à 3 fois plus cher quand on inclut les coûts d'intégration et de maintenance.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 8,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur couvre Travel + Expense + Invoice. Spendesk couvre cartes + factures + workflow d'achat + NDF mais sans module voyage intégré.",
      },
      {
        name: "Déploiement",
        description: "Rapidité de mise en service",
        solution1Score: 8,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Spendesk peut être déployé en 2 à 4 semaines. SAP Concur nécessite 3 à 6 mois avec un intégrateur certifié.",
      },
      {
        name: "Intégrations ERP",
        description: "Compatibilité systèmes d'entreprise",
        solution1Score: 6,
        solution2Score: 10,
        winner: 2,
        analysis:
          "SAP Concur est imbattable sur les intégrations ERP, notamment SAP S/4HANA. Spendesk s'intègre avec NetSuite, Sage et Cegid mais avec moins de profondeur native.",
      },
    ],
    faq: [
      {
        question: "Spendesk peut-il remplacer SAP Concur ?",
        answer:
          "Pour les PME et ETI, oui : Spendesk est plus rapide à déployer, moins cher et offre une meilleure UX. Pour les grands comptes SAP, la migration est possible mais nécessite de remplacer aussi le module Travel.",
      },
      {
        question: "Quelle solution pour une entreprise de 500 salariés ?",
        answer:
          "Les deux sont adaptées. Spendesk est recommandé si vous voulez une mise en place rapide et une UX moderne. SAP Concur est préférable si vous êtes dans l'écosystème SAP et avez besoin d'intégrations ERP profondes.",
      },
      {
        question: "SAP Concur a-t-il des cartes corporate ?",
        answer:
          "SAP Concur ne fournit pas de cartes corporate mais s'intègre avec les programmes de cartes bancaires (Visa, Mastercard). Spendesk fournit directement ses propres cartes virtuelles et physiques.",
      },
    ],
  },
  {
    slug: "spendesk-vs-expensya",
    title: "Spendesk vs Expensya",
    solution1: "spendesk",
    solution2: "expensya",
    intro:
      "Spendesk et Expensya sont deux solutions françaises de gestion des dépenses professionnelles avec des périmètres différents. Ce comparatif vous aide à choisir la plus adaptée à votre entreprise.",
    verdict:
      "Expensya est idéal pour les PME qui cherchent une solution de notes de frais simple et abordable. Spendesk convient mieux aux entreprises qui veulent une plateforme complète de gestion des dépenses (cartes + factures + NDF).",
    metaTitle: "Spendesk vs Expensya 2026 — Comparatif Gestion des Dépenses",
    metaDescription:
      "Comparatif Spendesk vs Expensya : plateforme de dépenses complète ou spécialiste notes de frais ? Prix et fonctionnalités 2026.",
    criteria: [
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la couverture",
        solution1Score: 9,
        solution2Score: 6,
        winner: 1,
        analysis:
          "Spendesk couvre cartes + factures fournisseurs + workflow d'achat + NDF + pré-comptabilité. Expensya se concentre sur les notes de frais avec une carte en option.",
      },
      {
        name: "Notes de frais",
        description: "OCR, IK, per diem",
        solution1Score: 7,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya excelle sur les notes de frais avec un OCR très performant et le calcul automatique des indemnités kilométriques. Spendesk gère les NDF mais avec moins de finesse.",
      },
      {
        name: "Tarification",
        description: "Accessibilité et transparence",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya affiche des tarifs transparents dès 4,99 €/utilisateur/mois. Spendesk fonctionne sur devis et cible plutôt les entreprises de 20+ salariés.",
      },
      {
        name: "Cartes corporate",
        description: "Cartes virtuelles et physiques",
        solution1Score: 9,
        solution2Score: 4,
        winner: 1,
        analysis:
          "Spendesk fournit des cartes virtuelles et physiques avec budgets par équipe. Expensya propose une carte en option mais ce n'est pas son cœur de métier.",
      },
      {
        name: "Workflow & validation",
        description: "Circuits d'approbation",
        solution1Score: 9,
        solution2Score: 7,
        winner: 1,
        analysis:
          "Spendesk offre des workflows de validation multi-niveaux très granulaires avec budgets par département. Expensya propose des workflows plus simples.",
      },
    ],
    faq: [
      {
        question: "Spendesk ou Expensya pour une PME de 50 salariés ?",
        answer:
          "Si vous avez surtout besoin de gérer les notes de frais, Expensya est plus simple et plus abordable. Si vous voulez aussi des cartes corporate et la gestion des factures fournisseurs, Spendesk est plus complet.",
      },
      {
        question: "Quelle solution pour les indemnités kilométriques ?",
        answer:
          "Expensya est meilleur pour les IK : calcul automatique selon le barème fiscal, historique des trajets. Spendesk ne gère pas nativement les indemnités kilométriques.",
      },
      {
        question: "Peut-on combiner Spendesk et Expensya ?",
        answer:
          "C'est techniquement possible mais déconseillé. Spendesk intègre déjà un module de notes de frais. Si vous avez besoin des IK d'Expensya, il vaut mieux choisir Expensya + une carte bancaire classique.",
      },
    ],
  },
  {
    slug: "sap-concur-vs-expensya",
    title: "SAP Concur vs Expensya",
    solution1: "sap-concur",
    solution2: "expensya",
    intro:
      "SAP Concur et Expensya sont deux solutions de gestion des notes de frais aux profils très différents. Ce comparatif vous aide à choisir entre le leader mondial et l'alternative française agile.",
    verdict:
      "Expensya est idéal pour les PME qui cherchent une solution simple, rapide à déployer et abordable. SAP Concur convient aux ETI et grands comptes qui ont besoin d'une suite complète (voyages + frais + factures) et d'une intégration ERP profonde.",
    metaTitle: "SAP Concur vs Expensya 2026 — Comparatif Notes de Frais",
    metaDescription:
      "Comparatif SAP Concur vs Expensya : prix, OCR, intégrations, déploiement. Quel logiciel de notes de frais choisir en 2026 ?",
    criteria: [
      {
        name: "Tarification",
        description: "Accessibilité et rapport qualité-prix",
        solution1Score: 5,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya démarre à 4,99 €/utilisateur/mois. SAP Concur est nettement plus cher, surtout pour les PME, avec un coût total souvent 3 à 5 fois supérieur.",
      },
      {
        name: "OCR & IA",
        description: "Qualité de la reconnaissance des justificatifs",
        solution1Score: 7,
        solution2Score: 8,
        winner: 2,
        analysis:
          "Expensya propose un OCR très performant avec une reconnaissance quasi instantanée. SAP Concur a amélioré son OCR mais reste légèrement en retrait sur la vitesse et la précision.",
      },
      {
        name: "Périmètre fonctionnel",
        description: "Étendue de la suite",
        solution1Score: 10,
        solution2Score: 6,
        winner: 1,
        analysis:
          "SAP Concur offre la suite la plus complète du marché (Travel + Expense + Invoice). Expensya se concentre sur les notes de frais avec une carte en option.",
      },
      {
        name: "Déploiement",
        description: "Rapidité de mise en service",
        solution1Score: 4,
        solution2Score: 9,
        winner: 2,
        analysis:
          "Expensya peut être déployé en quelques jours. SAP Concur nécessite généralement 3 à 6 mois de mise en place avec un intégrateur.",
      },
      {
        name: "Intégrations ERP",
        description: "Compatibilité avec les systèmes d'entreprise",
        solution1Score: 10,
        solution2Score: 7,
        winner: 1,
        analysis:
          "SAP Concur excelle sur les intégrations ERP, notamment avec SAP S/4HANA. Expensya offre de bonnes intégrations avec les logiciels comptables mais moins de profondeur sur les ERP.",
      },
    ],
    faq: [
      {
        question: "SAP Concur ou Expensya pour une PME ?",
        answer:
          "Pour une PME, Expensya est généralement recommandé : plus simple, plus rapide à déployer et 3 à 5 fois moins cher. SAP Concur est surdimensionné pour la plupart des PME.",
      },
      {
        question: "SAP Concur est-il encore pertinent en 2026 ?",
        answer:
          "Oui, SAP Concur reste le leader mondial et la référence pour les ETI et grands comptes, surtout ceux dans l'écosystème SAP. Mais les néo-solutions (Expensya, Spendesk) grignotent des parts de marché sur le segment PME.",
      },
      {
        question: "Peut-on migrer de SAP Concur vers Expensya ?",
        answer:
          "Oui, la migration est possible. Expensya propose un accompagnement dédié pour les entreprises qui souhaitent quitter SAP Concur. La migration prend généralement 2 à 4 semaines.",
      },
    ],
  },
];

const comparisonsBySlug = new Map(comparisons.map((c) => [c.slug, c]));

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisonsBySlug.get(slug);
}
