export interface Ville {
  slug: string;
  name: string;
  description: string;
  population: string;
  businessTravelers: string;
  avgHotelPrice: string;
  keyFacts: string[];
  metaTitle: string;
  metaDescription: string;
  sections: {
    title: string;
    content: string;
  }[];
  faq: { question: string; answer: string }[];
}

export const villes: Ville[] = [
  {
    slug: "paris",
    name: "Paris",
    description:
      "Paris est le premier pôle d'affaires français avec plus de 30 millions de nuitées professionnelles par an. Guide complet pour optimiser vos déplacements vers la capitale.",
    population: "2,1 millions (12,3M aire urbaine)",
    businessTravelers: "30M+ nuitées pro/an",
    avgHotelPrice: "145 €/nuit (3 étoiles)",
    keyFacts: [
      "1er aéroport européen (CDG + Orly)",
      "6 gares TGV",
      "Quartier d'affaires La Défense",
      "30M+ nuitées professionnelles/an",
    ],
    metaTitle: "Déplacement professionnel à Paris — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Paris : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Paris",
        content:
          "Paris est accessible par TGV depuis toutes les grandes villes françaises (Lyon 2h, Marseille 3h, Bordeaux 2h). Les aéroports Charles de Gaulle (CDG) et Orly desservent les destinations internationales. Pour les déplacements domestiques, privilégiez le train : plus rapide porte-à-porte et moins émetteur de CO₂.",
      },
      {
        title: "Se déplacer dans Paris",
        content:
          "Le métro et le RER sont les moyens les plus efficaces pour se déplacer dans Paris. Le pass Navigo Liberté+ (à l'usage) est idéal pour les voyageurs occasionnels. Les VTC (Uber, Bolt) sont pratiques le soir. Évitez la voiture : stationnement difficile et coûteux (4-6 €/heure).",
      },
      {
        title: "Où loger ?",
        content:
          "Quartiers d'affaires recommandés : La Défense (à partir de 110 €/nuit), 8e arrondissement (150 €+), Opéra/9e (120 €+). Pour un meilleur rapport qualité-prix, visez le 12e ou le 15e arrondissement (90-120 €). Réservez via votre TMC pour bénéficier des tarifs négociés.",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Paris (2026) : hébergement 3 étoiles → 145 €, repas midi → 15-20 €, repas soir → 25-35 €, transports urbains → 10-15 €. Soit un budget total d'environ 200-215 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Paris ?",
        answer:
          "Comptez environ 200-215 €/jour (hors transport A/R) pour un hébergement 3 étoiles, 2 repas et les transports urbains. Soit environ 600-650 € pour un déplacement de 3 jours.",
      },
      {
        question: "Faut-il prendre le train ou l'avion pour aller à Paris ?",
        answer:
          "Pour les trajets < 4h en TGV (Lyon, Bordeaux, Lille, Strasbourg), le train est plus rapide porte-à-porte et moins émetteur de CO₂. L'avion reste pertinent pour les trajets > 4h (Nice, Toulouse) ou les correspondances internationales.",
      },
      {
        question: "Où sont les principaux quartiers d'affaires à Paris ?",
        answer:
          "La Défense (1er quartier d'affaires européen), le Triangle d'Or (8e), Opéra/Bourse (2e/9e) et la Gare de Lyon/Bercy (12e). Choisissez votre hébergement en fonction de vos rendez-vous.",
      },
    ],
  },
  {
    slug: "lyon",
    name: "Lyon",
    description:
      "Lyon est le deuxième pôle économique français et un hub d'affaires incontournable. Guide pour optimiser vos déplacements professionnels dans la capitale des Gaules.",
    population: "520 000 (2,3M aire urbaine)",
    businessTravelers: "8M+ nuitées pro/an",
    avgHotelPrice: "105 €/nuit (3 étoiles)",
    keyFacts: [
      "2e pôle économique français",
      "TGV Paris-Lyon en 2h",
      "Aéroport Lyon-Saint Exupéry",
      "Part-Dieu : 1er quartier d'affaires régional",
    ],
    metaTitle: "Déplacement professionnel à Lyon — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Lyon : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Lyon",
        content:
          "Lyon est connecté par TGV à Paris (2h), Marseille (1h40), Montpellier (2h) et Genève (2h). L'aéroport Lyon-Saint Exupéry dessert les principales villes européennes. Le Rhônexpress relie l'aéroport à la Part-Dieu en 30 min (16,90 €).",
      },
      {
        title: "Se déplacer dans Lyon",
        content:
          "Le réseau TCL (métro + tramway + bus) couvre bien la métropole. Le ticket unitaire coûte 1,90 €. Le quartier d'affaires de la Part-Dieu est directement accessible depuis la gare TGV. Pour les rendez-vous en périphérie (Techlid, Porte des Alpes), un VTC est souvent nécessaire.",
      },
      {
        title: "Où loger ?",
        content:
          "Part-Dieu : le choix logique pour les voyages d'affaires (à partir de 90 €/nuit). Presqu'île (Bellecour/Cordeliers) : plus central, idéal pour les dîners clients (100 €+). Confluence : quartier moderne, bons tarifs (85 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Lyon (2026) : hébergement 3 étoiles → 105 €, repas midi → 13-18 €, repas soir → 22-30 €, transports urbains → 5-10 €. Soit un budget total d'environ 150-165 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Lyon est-il accessible en TGV depuis Paris ?",
        answer:
          "Oui, le TGV Paris-Lyon met 2h avec des départs toutes les 30 minutes en heure de pointe. C'est le moyen le plus rapide porte-à-porte.",
      },
      {
        question: "Quel est le budget moyen d'un déplacement pro à Lyon ?",
        answer:
          "Comptez environ 150-165 €/jour (hors transport A/R). Soit environ 450-500 € pour un déplacement de 3 jours. Lyon est 25-30 % moins cher que Paris pour un déplacement professionnel.",
      },
      {
        question: "Où se situe le quartier d'affaires de Lyon ?",
        answer:
          "Le principal quartier d'affaires est la Part-Dieu, autour de la gare TGV et du centre commercial. On y trouve la tour Incity, la tour Oxygène et de nombreux sièges sociaux. Le quartier Confluence monte en puissance.",
      },
    ],
  },
  {
    slug: "marseille",
    name: "Marseille",
    description:
      "Marseille est le troisième pôle économique français et la porte de la Méditerranée. Guide pour vos déplacements professionnels dans la cité phocéenne.",
    population: "870 000 (1,9M aire urbaine)",
    businessTravelers: "5M+ nuitées pro/an",
    avgHotelPrice: "95 €/nuit (3 étoiles)",
    keyFacts: [
      "3e ville de France",
      "TGV Paris-Marseille en 3h",
      "1er port de France",
      "Pôle Euroméditerranée",
    ],
    metaTitle: "Déplacement professionnel à Marseille — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Marseille : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Marseille",
        content:
          "Le TGV relie Paris à Marseille en 3h10 (gare Saint-Charles). L'aéroport Marseille-Provence est à 25 min du centre par navette (9,20 €). Depuis Lyon, le TGV met 1h40. Marseille est aussi accessible par autoroute (A7/A51).",
      },
      {
        title: "Se déplacer à Marseille",
        content:
          "Le réseau RTM (métro + tramway + bus) couvre le centre-ville. Le métro a 2 lignes qui se croisent à Castellane. Pour les zones d'activité périphériques (Technopôle de Château-Gombert, Plan de Campagne), la voiture ou le VTC est indispensable.",
      },
      {
        title: "Où loger ?",
        content:
          "Vieux-Port / Joliette : central, proche Euroméditerranée (à partir de 85 €/nuit). Prado/Castellane : quartier résidentiel calme (80 €+). Euroméditerranée : quartier d'affaires moderne avec hôtels récents (95 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Marseille (2026) : hébergement 3 étoiles → 95 €, repas midi → 12-16 €, repas soir → 20-28 €, transports urbains → 5-10 €. Soit un budget total d'environ 135-150 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Marseille ?",
        answer:
          "Comptez environ 135-150 €/jour (hors transport A/R). Soit environ 400-450 € pour un déplacement de 3 jours. Marseille est 30-35 % moins cher que Paris.",
      },
      {
        question: "Faut-il une voiture pour se déplacer à Marseille ?",
        answer:
          "Pour le centre-ville et Euroméditerranée, les transports en commun suffisent. Pour les zones d'activité périphériques (Technopôle, Vitrolles, Plan de Campagne), une voiture de location ou un VTC est recommandé.",
      },
      {
        question: "Qu'est-ce qu'Euroméditerranée ?",
        answer:
          "Euroméditerranée est le plus grand projet de rénovation urbaine d'Europe du Sud. Ce quartier d'affaires accueille de nombreux sièges sociaux et bureaux, avec des hôtels récents et le centre commercial Les Terrasses du Port.",
      },
    ],
  },
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
