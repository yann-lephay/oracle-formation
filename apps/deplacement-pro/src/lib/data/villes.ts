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
  {
    slug: "toulouse",
    name: "Toulouse",
    description:
      "Toulouse, capitale de l'aéronautique européenne, est un pôle d'affaires majeur du Sud-Ouest. Guide pour optimiser vos déplacements professionnels dans la Ville Rose.",
    population: "500 000 (1,4M aire urbaine)",
    businessTravelers: "6M+ nuitées pro/an",
    avgHotelPrice: "95 €/nuit (3 étoiles)",
    keyFacts: [
      "Capitale européenne de l'aéronautique (Airbus)",
      "TGV Paris-Toulouse en 4h10",
      "Aéroport Toulouse-Blagnac",
      "2e ville universitaire de France",
    ],
    metaTitle: "Déplacement professionnel à Toulouse — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Toulouse : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Toulouse",
        content:
          "Le TGV relie Paris à Toulouse en 4h10 (gare Matabiau). L'aéroport Toulouse-Blagnac est à 20 min du centre par navette (9 €). Depuis Bordeaux, le train met 2h. L'avion reste pertinent depuis Paris pour les allers-retours dans la journée.",
      },
      {
        title: "Se déplacer à Toulouse",
        content:
          "Le réseau Tisséo (métro + tramway + bus) couvre bien la ville. Les 2 lignes de métro sont rapides et efficaces. Pour les sites industriels de Blagnac et Colomiers (Airbus), le tramway T1 est pratique. VTC recommandé pour les zones d'activité périphériques.",
      },
      {
        title: "Où loger ?",
        content:
          "Capitole/Centre : idéal pour les rendez-vous en ville (à partir de 85 €/nuit). Compans-Caffarelli : proche du centre de congrès (80 €+). Blagnac : pratique pour Airbus et l'aéroport (75 €+). Labège : zone tech au sud (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Toulouse (2026) : hébergement 3 étoiles → 95 €, repas midi → 12-16 €, repas soir → 20-28 €, transports urbains → 5-10 €. Soit un budget total d'environ 135-150 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Toulouse ?",
        answer:
          "Comptez environ 135-150 €/jour (hors transport A/R). Soit environ 400-450 € pour un déplacement de 3 jours. Toulouse est 30 % moins cher que Paris.",
      },
      {
        question: "Faut-il prendre le train ou l'avion pour aller à Toulouse depuis Paris ?",
        answer:
          "Le TGV met 4h10 — c'est à la limite train/avion. Pour un aller-retour dans la journée, l'avion est préférable (1h15 de vol). Pour un séjour avec nuitée, le train est plus confortable et arrive en centre-ville.",
      },
      {
        question: "Où se trouve le pôle aéronautique de Toulouse ?",
        answer:
          "Le pôle aéronautique est concentré à Blagnac et Colomiers, au nord-ouest de Toulouse. On y trouve Airbus, ATR, Safran et plus de 1 500 sous-traitants. Le tramway T1 dessert la zone depuis le centre-ville.",
      },
    ],
  },
  {
    slug: "nice",
    name: "Nice",
    description:
      "Nice est la porte d'entrée de la Côte d'Azur et un pôle d'affaires international grâce à sa position stratégique entre France et Italie.",
    population: "340 000 (1M aire urbaine)",
    businessTravelers: "4M+ nuitées pro/an",
    avgHotelPrice: "110 €/nuit (3 étoiles)",
    keyFacts: [
      "3e aéroport de France",
      "TGV Paris-Nice en 5h30",
      "Technopôle Sophia Antipolis à 20 km",
      "Pôle tourisme d'affaires international",
    ],
    metaTitle: "Déplacement professionnel à Nice — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Nice : transports, hébergement, Sophia Antipolis, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Nice",
        content:
          "L'aéroport Nice Côte d'Azur est le 3e de France avec des liaisons directes vers toute l'Europe. Depuis Paris, l'avion met 1h20 (vol le plus fréquent de France). Le TGV met 5h30 mais offre une arrivée en centre-ville.",
      },
      {
        title: "Se déplacer à Nice",
        content:
          "Le tramway (3 lignes) dessert bien le centre-ville et l'aéroport (L2). Pour Sophia Antipolis, prenez le bus express 230 (45 min) ou un VTC. La voiture de location est utile pour les rendez-vous multiples sur la Côte d'Azur.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Vieux Nice : pratique et animé (à partir de 95 €/nuit). Arénas/Aéroport : idéal pour les séjours courts (85 €+). Sophia Antipolis : proche de la technopole, tarifs avantageux (75 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Nice (2026) : hébergement 3 étoiles → 110 €, repas midi → 14-18 €, repas soir → 22-30 €, transports urbains → 5-12 €. Soit un budget total d'environ 155-170 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Nice ?",
        answer:
          "Comptez environ 155-170 €/jour (hors transport A/R). Nice est plus cher que la moyenne des villes de province en raison du tourisme. Réservez tôt pour éviter les surcoûts en haute saison (mai-octobre).",
      },
      {
        question: "Comment aller à Sophia Antipolis depuis Nice ?",
        answer:
          "Le bus express 230 relie Nice à Sophia Antipolis en 45 min (3 €). En voiture, comptez 30 min hors heures de pointe. Un VTC coûte environ 40-50 €. Si vos rendez-vous sont principalement à Sophia, logez directement sur place.",
      },
      {
        question: "Faut-il une voiture de location à Nice ?",
        answer:
          "Pour le centre-ville de Nice, le tramway suffit. Pour les rendez-vous à Sophia Antipolis, Monaco ou Cannes, une voiture de location est pratique. Attention au stationnement dans Nice (payant et limité).",
      },
    ],
  },
  {
    slug: "nantes",
    name: "Nantes",
    description:
      "Nantes est un pôle économique dynamique de l'Ouest, reconnu pour son écosystème numérique et son cadre de vie attractif.",
    population: "320 000 (1M aire urbaine)",
    businessTravelers: "4M+ nuitées pro/an",
    avgHotelPrice: "90 €/nuit (3 étoiles)",
    keyFacts: [
      "6e métropole de France",
      "TGV Paris-Nantes en 2h15",
      "Pôle numérique et industries créatives",
      "Aéroport Nantes-Atlantique",
    ],
    metaTitle: "Déplacement professionnel à Nantes — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Nantes : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Nantes",
        content:
          "Le TGV relie Paris à Nantes en 2h15 (gare de Nantes). L'aéroport Nantes-Atlantique dessert les principales villes européennes. Depuis Lyon ou Lille, le train met 4-5h — l'avion est alors préférable.",
      },
      {
        title: "Se déplacer à Nantes",
        content:
          "Le réseau TAN (tramway + busway + bus) est efficace et moderne. Les 3 lignes de tramway couvrent bien la métropole. Le busway C3-C6 dessert les zones d'activité. La ville est aussi très cyclable (Bicloo en libre-service).",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Commerce : le choix logique (à partir de 80 €/nuit). Île de Nantes : quartier créatif en plein essor (85 €+). Euronantes : quartier d'affaires proche de la gare (90 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Nantes (2026) : hébergement 3 étoiles → 90 €, repas midi → 12-15 €, repas soir → 18-25 €, transports urbains → 5-8 €. Soit un budget total d'environ 125-140 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Nantes ?",
        answer:
          "Comptez environ 125-140 €/jour (hors transport A/R). Nantes est l'une des grandes métropoles les plus abordables pour les voyageurs d'affaires, 35 % moins cher que Paris.",
      },
      {
        question: "Nantes est-elle bien desservie en TGV ?",
        answer:
          "Oui, le TGV Paris-Nantes met 2h15 avec des fréquences élevées. C'est le moyen le plus rapide et pratique porte-à-porte. La gare est en centre-ville, à proximité du quartier d'affaires Euronantes.",
      },
      {
        question: "Où se trouvent les zones d'activité de Nantes ?",
        answer:
          "Les principaux pôles sont : Euronantes (quartier d'affaires, gare), Île de Nantes (créatif, numérique), Atlanpole (technopôle, nord-ouest) et le pôle aéronautique de Saint-Nazaire à 60 km.",
      },
    ],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    description:
      "Strasbourg est la capitale européenne et un carrefour d'affaires franco-allemand stratégique pour les entreprises à vocation internationale.",
    population: "290 000 (800 000 aire urbaine)",
    businessTravelers: "3,5M+ nuitées pro/an",
    avgHotelPrice: "95 €/nuit (3 étoiles)",
    keyFacts: [
      "Siège du Parlement européen",
      "TGV Paris-Strasbourg en 1h46",
      "Carrefour franco-allemand",
      "Quartier européen et Wacken",
    ],
    metaTitle: "Déplacement professionnel à Strasbourg — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Strasbourg : transports, hébergement, institutions européennes, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Strasbourg",
        content:
          "Le TGV relie Paris à Strasbourg en 1h46, le trajet le plus rapide de France. L'aéroport de Strasbourg-Entzheim est petit mais dessert les hubs européens. L'aéroport de Baden-Baden (40 min) est une alternative low-cost.",
      },
      {
        title: "Se déplacer à Strasbourg",
        content:
          "Le tramway (6 lignes) est le moyen le plus efficace pour se déplacer. Il dessert le centre, le quartier européen et la gare. Le réseau est l'un des meilleurs de France. Le vélo en libre-service (Vélhop) est aussi très pratique.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Petite France : charme et proximité (à partir de 85 €/nuit). Wacken/Quartier européen : proche des institutions (90 €+). Gare : pratique pour les allers-retours (80 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Strasbourg (2026) : hébergement 3 étoiles → 95 €, repas midi → 12-16 €, repas soir → 20-28 €, transports urbains → 4-8 €. Soit un budget total d'environ 135-150 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Strasbourg ?",
        answer:
          "Comptez environ 135-150 €/jour (hors transport A/R). Strasbourg est dans la moyenne haute des villes de province, notamment en raison des tarifs hôteliers pendant les sessions du Parlement européen.",
      },
      {
        question: "Strasbourg est-elle bien connectée à l'Allemagne ?",
        answer:
          "Oui, Strasbourg est à 30 min de Kehl (Allemagne) par tramway transfrontalier. Francfort est à 2h en voiture ou en train. C'est un hub idéal pour les entreprises actives sur le marché franco-allemand.",
      },
      {
        question: "Quand éviter de réserver à Strasbourg ?",
        answer:
          "Les tarifs hôteliers augmentent fortement pendant les sessions plénières du Parlement européen (vérifiez le calendrier) et pendant le Marché de Noël (novembre-décembre). Réservez au moins 3 semaines à l'avance pendant ces périodes.",
      },
    ],
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    description:
      "Montpellier est une métropole dynamique du sud de la France, en forte croissance démographique et économique, avec un pôle santé et numérique important.",
    population: "300 000 (800 000 aire urbaine)",
    businessTravelers: "3M+ nuitées pro/an",
    avgHotelPrice: "85 €/nuit (3 étoiles)",
    keyFacts: [
      "7e ville de France",
      "TGV Paris-Montpellier en 3h20",
      "Pôle santé et biotech",
      "Forte croissance démographique",
    ],
    metaTitle: "Déplacement professionnel à Montpellier — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Montpellier : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Montpellier",
        content:
          "Le TGV relie Paris à Montpellier en 3h20 (gare Saint-Roch, centre-ville). L'aéroport Montpellier-Méditerranée est à 15 min du centre par navette. Depuis Lyon, le TGV met 2h. La gare TGV Sud de France (Odysseum) dessert aussi la ville.",
      },
      {
        title: "Se déplacer à Montpellier",
        content:
          "Le tramway (5 lignes) couvre bien la métropole et est très efficace. Le centre-ville est compact et se parcourt facilement à pied. Pour les zones d'activité périphériques (Millénaire, Garosud), le tramway ou un VTC sont recommandés.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Comédie : animé et bien desservi (à partir de 75 €/nuit). Antigone : quartier moderne et calme (80 €+). Odysseum : proche de la gare TGV Sud de France (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Montpellier (2026) : hébergement 3 étoiles → 85 €, repas midi → 11-15 €, repas soir → 18-25 €, transports urbains → 4-8 €. Soit un budget total d'environ 120-135 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Montpellier ?",
        answer:
          "Comptez environ 120-135 €/jour (hors transport A/R). Montpellier est l'une des grandes villes les plus abordables du sud de la France, 35-40 % moins cher que Paris.",
      },
      {
        question: "Quelle gare TGV choisir à Montpellier ?",
        answer:
          "Montpellier Saint-Roch est en centre-ville et la plus pratique. La gare TGV Sud de France (Odysseum) est excentrée mais dessert les TGV directs vers Paris et Barcelone. Vérifiez quelle gare dessert votre train.",
      },
      {
        question: "Où sont les pôles d'activité de Montpellier ?",
        answer:
          "Les principaux pôles sont : le centre-ville (services), Euromédecine (santé/biotech au nord), le Millénaire (business park) et le parc Eurêka (numérique/tech). Le tramway dessert tous ces pôles.",
      },
    ],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    description:
      "Bordeaux est devenue l'une des métropoles les plus attractives de France grâce au TGV en 2h et à son écosystème économique diversifié.",
    population: "260 000 (1,3M aire urbaine)",
    businessTravelers: "5M+ nuitées pro/an",
    avgHotelPrice: "100 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Bordeaux en 2h04",
      "Pôle aéronautique et spatial",
      "Quartier d'affaires Euratlantique",
      "5e métropole de France",
    ],
    metaTitle: "Déplacement professionnel à Bordeaux — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Bordeaux : transports, hébergement, quartiers d'affaires, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Bordeaux",
        content:
          "Le TGV relie Paris à Bordeaux en 2h04, ce qui en fait l'un des trajets les plus rapides de France. L'aéroport Bordeaux-Mérignac dessert les principales villes européennes. Depuis Toulouse, le train met 2h.",
      },
      {
        title: "Se déplacer à Bordeaux",
        content:
          "Le tramway (4 lignes) est le moyen le plus efficace. Il dessert la gare, le centre-ville et les principales zones d'activité. Le centre historique se parcourt facilement à pied. VTC pour les zones périphériques (Mérignac, Pessac).",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Saint-Pierre : charme et proximité (à partir de 90 €/nuit). Gare Saint-Jean/Euratlantique : pratique et moderne (85 €+). Mérignac : proche de l'aéroport et des zones d'activité (75 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Bordeaux (2026) : hébergement 3 étoiles → 100 €, repas midi → 13-17 €, repas soir → 22-30 €, transports urbains → 5-8 €. Soit un budget total d'environ 140-155 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Bordeaux ?",
        answer:
          "Comptez environ 140-155 €/jour (hors transport A/R). Bordeaux s'est légèrement renchéri depuis l'arrivée de la LGV, mais reste 25-30 % moins cher que Paris.",
      },
      {
        question: "Le TGV Paris-Bordeaux est-il rentable vs l'avion ?",
        answer:
          "Oui, le TGV en 2h04 est systématiquement plus rapide porte-à-porte que l'avion et souvent moins cher. C'est le choix évident pour les déplacements Paris-Bordeaux.",
      },
      {
        question: "Qu'est-ce qu'Euratlantique ?",
        answer:
          "Euratlantique est le nouveau quartier d'affaires de Bordeaux, autour de la gare Saint-Jean. C'est le plus grand projet urbain de France avec 738 hectares. On y trouve des bureaux, des hôtels récents et des espaces de coworking.",
      },
    ],
  },
  {
    slug: "lille",
    name: "Lille",
    description:
      "Lille est un carrefour européen stratégique, à 1h de Paris, Londres et Bruxelles en TGV, avec un tissu économique diversifié.",
    population: "235 000 (1,2M aire urbaine)",
    businessTravelers: "4M+ nuitées pro/an",
    avgHotelPrice: "90 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Lille en 1h02",
      "Eurostar vers Londres (1h20)",
      "Quartier d'affaires Euralille",
      "Carrefour Paris-Londres-Bruxelles",
    ],
    metaTitle: "Déplacement professionnel à Lille — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Lille : transports, hébergement, Euralille, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Lille",
        content:
          "Le TGV relie Paris à Lille en 1h02 (gare Lille-Europe ou Lille-Flandres). L'Eurostar dessert Londres en 1h20 et Bruxelles en 35 min. L'aéroport de Lille-Lesquin est petit mais dessert quelques destinations européennes.",
      },
      {
        title: "Se déplacer à Lille",
        content:
          "Le métro automatique VAL (2 lignes) et le tramway couvrent bien la métropole. Le centre-ville est compact et se parcourt à pied. Pour Roubaix, Tourcoing ou Villeneuve-d'Ascq, le métro est efficace.",
      },
      {
        title: "Où loger ?",
        content:
          "Euralille : quartier d'affaires entre les deux gares (à partir de 80 €/nuit). Vieux-Lille : charme et restaurants (90 €+). Villeneuve-d'Ascq : proche du campus universitaire et des zones tech (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Lille (2026) : hébergement 3 étoiles → 90 €, repas midi → 11-15 €, repas soir → 18-25 €, transports urbains → 4-8 €. Soit un budget total d'environ 125-140 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Lille ?",
        answer:
          "Comptez environ 125-140 €/jour (hors transport A/R). Lille est très accessible depuis Paris (1h02 en TGV), ce qui permet souvent un aller-retour dans la journée sans nuitée.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Lille dans la journée ?",
        answer:
          "Oui, c'est très courant. Avec un TGV en 1h02, vous pouvez partir à 7h30 et être de retour à Paris à 20h. Cela évite les frais d'hôtel et représente une économie de 90-120 € par déplacement.",
      },
      {
        question: "Où est le quartier d'affaires de Lille ?",
        answer:
          "Euralille est le principal quartier d'affaires, situé entre les gares Lille-Europe et Lille-Flandres. On y trouve des tours de bureaux, le centre commercial Euralille et des hôtels d'affaires. Le Vieux-Lille concentre les cabinets de conseil.",
      },
    ],
  },
  {
    slug: "rennes",
    name: "Rennes",
    description:
      "Rennes est la capitale de la Bretagne et un pôle numérique majeur, à seulement 1h25 de Paris en TGV.",
    population: "225 000 (760 000 aire urbaine)",
    businessTravelers: "2,5M+ nuitées pro/an",
    avgHotelPrice: "85 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Rennes en 1h25",
      "Pôle numérique et cybersécurité",
      "2e bassin d'emploi de l'Ouest",
      "Métro automatique VAL",
    ],
    metaTitle: "Déplacement professionnel à Rennes — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Rennes : transports, hébergement, pôle numérique, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Rennes",
        content:
          "Le TGV relie Paris à Rennes en 1h25, l'un des trajets les plus rapides de France. L'aéroport de Rennes-Saint-Jacques dessert quelques destinations. Depuis Nantes, le train met 1h15.",
      },
      {
        title: "Se déplacer à Rennes",
        content:
          "Le métro automatique VAL (ligne a) et le réseau de bus STAR couvrent la métropole. La ligne b du métro est en service depuis 2022. Le centre-ville est compact et piéton. Vélo en libre-service disponible.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/République : bien desservi par le métro (à partir de 75 €/nuit). Gare : pratique pour les allers-retours (80 €+). Cesson-Sévigné : proche de la technopole ViaSilva (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Rennes (2026) : hébergement 3 étoiles → 85 €, repas midi → 11-14 €, repas soir → 17-24 €, transports urbains → 3-7 €. Soit un budget total d'environ 118-132 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Rennes ?",
        answer:
          "Comptez environ 118-132 €/jour (hors transport A/R). Rennes est très abordable et le TGV en 1h25 depuis Paris permet souvent un aller-retour dans la journée.",
      },
      {
        question: "Où est le pôle numérique de Rennes ?",
        answer:
          "La technopole Rennes Atalante et le pôle ViaSilva (Cesson-Sévigné) concentrent les entreprises tech et cybersécurité. La station métro Atalante (ligne b) dessert directement la zone.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Rennes dans la journée ?",
        answer:
          "Oui, c'est très fréquent. Le TGV en 1h25 permet de partir le matin et rentrer le soir. Cela représente une économie significative en frais d'hôtel.",
      },
    ],
  },
  {
    slug: "reims",
    name: "Reims",
    description:
      "Reims est une ville d'affaires stratégique au nord-est de Paris, à seulement 46 minutes en TGV, avec un tissu économique diversifié.",
    population: "185 000 (300 000 aire urbaine)",
    businessTravelers: "1,5M+ nuitées pro/an",
    avgHotelPrice: "80 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Reims en 46 min",
      "Pôle agroalimentaire majeur",
      "Capital du champagne",
      "Proche de Paris",
    ],
    metaTitle: "Déplacement professionnel à Reims — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Reims : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Reims",
        content:
          "Le TGV relie Paris à Reims en 46 minutes (gare Champagne-Ardenne TGV ou gare centre). C'est l'une des villes les plus proches de Paris en TGV. En voiture, comptez 1h30 par l'A4.",
      },
      {
        title: "Se déplacer à Reims",
        content:
          "Le tramway (2 lignes) et le réseau de bus Citura couvrent la ville. Le centre-ville est compact et se parcourt facilement à pied. La gare TGV Champagne-Ardenne est à 10 min du centre en tramway.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Cathédrale : le choix logique (à partir de 70 €/nuit). Gare : pratique pour les trajets TGV (75 €+). Bezannes : proche de la gare TGV et des zones d'activité (65 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Reims (2026) : hébergement 3 étoiles → 80 €, repas midi → 11-14 €, repas soir → 17-23 €, transports urbains → 3-6 €. Soit un budget total d'environ 112-125 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Reims ?",
        answer:
          "Comptez environ 112-125 €/jour (hors transport A/R). Reims est très abordable et sa proximité avec Paris (46 min en TGV) permet souvent un aller-retour dans la journée.",
      },
      {
        question: "Quelle gare choisir à Reims ?",
        answer:
          "La gare Reims Centre est en ville mais peu de TGV s'y arrêtent. La gare Champagne-Ardenne TGV (Bezannes) est à 10 min du centre en tramway. Vérifiez quelle gare dessert votre train.",
      },
      {
        question: "Quels sont les secteurs économiques de Reims ?",
        answer:
          "Reims est un pôle majeur de l'agroalimentaire (champagne, vins), avec aussi des secteurs santé, logistique et services. Le parc technologique Henri Farman accueille les entreprises innovantes.",
      },
    ],
  },
  {
    slug: "saint-etienne",
    name: "Saint-Étienne",
    description:
      "Saint-Étienne est une métropole industrielle en pleine reconversion, proche de Lyon, avec des coûts très compétitifs pour les voyageurs d'affaires.",
    population: "175 000 (520 000 aire urbaine)",
    businessTravelers: "1,2M+ nuitées pro/an",
    avgHotelPrice: "70 €/nuit (3 étoiles)",
    keyFacts: [
      "Proche de Lyon (50 min en train)",
      "Pôle design et industrie",
      "Ville UNESCO du design",
      "Tarifs très compétitifs",
    ],
    metaTitle: "Déplacement professionnel à Saint-Étienne — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Saint-Étienne : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Saint-Étienne",
        content:
          "Le TER relie Lyon à Saint-Étienne en 50 minutes avec des fréquences élevées. Depuis Paris, le TGV va jusqu'à Lyon Part-Dieu puis correspondance TER (total ~3h). L'aéroport le plus proche est Lyon-Saint Exupéry (1h en navette).",
      },
      {
        title: "Se déplacer à Saint-Étienne",
        content:
          "Le tramway (3 lignes) dessert bien le centre-ville et les principaux quartiers. Le réseau de bus STAS complète la couverture. Le centre est compact. Pour les zones industrielles périphériques, un véhicule est souvent nécessaire.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Place Jean Jaurès : le plus pratique (à partir de 60 €/nuit). Châteaucreux/Gare : proche de la gare SNCF (65 €+). Technopôle : pour les rendez-vous industriels (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Saint-Étienne (2026) : hébergement 3 étoiles → 70 €, repas midi → 10-13 €, repas soir → 15-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 100-112 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Saint-Étienne ?",
        answer:
          "Comptez environ 100-112 €/jour (hors transport A/R). Saint-Étienne est l'une des grandes villes les moins chères de France pour les voyageurs d'affaires, 45-50 % moins cher que Paris.",
      },
      {
        question: "Comment aller de Lyon à Saint-Étienne ?",
        answer:
          "Le TER Lyon Part-Dieu – Saint-Étienne Châteaucreux met 50 minutes avec des trains toutes les 15-30 minutes. C'est le moyen le plus rapide et économique (10-15 €).",
      },
      {
        question: "Saint-Étienne vaut-elle le détour vs Lyon ?",
        answer:
          "Si vos rendez-vous sont à Saint-Étienne, logez sur place : les tarifs hôteliers sont 30-40 % moins chers qu'à Lyon. La proximité Lyon-Saint-Étienne permet aussi de combiner les deux villes sur un même déplacement.",
      },
    ],
  },
  {
    slug: "toulon",
    name: "Toulon",
    description:
      "Toulon est le premier port militaire français et un pôle naval et de défense stratégique sur la côte méditerranéenne.",
    population: "180 000 (650 000 aire urbaine)",
    businessTravelers: "1,5M+ nuitées pro/an",
    avgHotelPrice: "80 €/nuit (3 étoiles)",
    keyFacts: [
      "1er port militaire français",
      "TGV Paris-Toulon en 3h50",
      "Pôle naval et défense",
      "Proche de la technopôle de Sophia",
    ],
    metaTitle: "Déplacement professionnel à Toulon — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Toulon : transports, hébergement, pôle naval, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Toulon",
        content:
          "Le TGV relie Paris à Toulon en 3h50. L'aéroport le plus proche est Toulon-Hyères (20 min) ou Nice (1h30). Depuis Marseille, le train met 1h. L'autoroute A50/A57 relie Toulon au réseau autoroutier.",
      },
      {
        title: "Se déplacer à Toulon",
        content:
          "Le réseau Mistral (bus + navette maritime) couvre la métropole. Le centre-ville est accessible à pied. Pour la base navale et les zones industrielles de La Seyne-sur-Mer, le bus ou un VTC sont nécessaires.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Port : pratique et animé (à partir de 70 €/nuit). La Valette : calme, proche des zones d'activité (65 €+). Hyères : proche de l'aéroport (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Toulon (2026) : hébergement 3 étoiles → 80 €, repas midi → 11-15 €, repas soir → 18-25 €, transports urbains → 3-7 €. Soit un budget total d'environ 115-128 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Toulon ?",
        answer:
          "Comptez environ 115-128 €/jour (hors transport A/R). Toulon est plus abordable que Nice ou Marseille, 40 % moins cher que Paris.",
      },
      {
        question: "Faut-il une voiture à Toulon ?",
        answer:
          "Pour le centre-ville, les transports en commun suffisent. Pour les rendez-vous à la base navale, à La Seyne-sur-Mer ou dans les zones industrielles, une voiture est recommandée.",
      },
      {
        question: "Quels secteurs d'activité dominent à Toulon ?",
        answer:
          "La défense et le naval (Naval Group, Marine nationale) sont les principaux employeurs. Le numérique, la mer et le tourisme d'affaires complètent l'économie locale.",
      },
    ],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    description:
      "Grenoble est un pôle scientifique et technologique de premier plan, niché dans les Alpes, avec un écosystème innovation-recherche exceptionnel.",
    population: "160 000 (690 000 aire urbaine)",
    businessTravelers: "2,5M+ nuitées pro/an",
    avgHotelPrice: "85 €/nuit (3 étoiles)",
    keyFacts: [
      "Pôle scientifique mondial (CEA, ESRF, ILL)",
      "TGV Paris-Grenoble en 3h",
      "Capitale des Alpes",
      "Écosystème deeptech et microélectronique",
    ],
    metaTitle: "Déplacement professionnel à Grenoble — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Grenoble : transports, hébergement, pôle scientifique, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Grenoble",
        content:
          "Le TGV relie Paris à Grenoble en 3h (gare de Grenoble). Depuis Lyon, le TER met 1h20. L'aéroport le plus proche est Lyon-Saint Exupéry (1h en navette). L'aéroport Grenoble-Isère est saisonnier.",
      },
      {
        title: "Se déplacer à Grenoble",
        content:
          "Le tramway (5 lignes) est très efficace et dessert l'ensemble de la métropole. Le réseau TAG est l'un des meilleurs de France pour une ville de cette taille. La presqu'île scientifique est bien desservie par le tram.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Gare : le plus pratique (à partir de 75 €/nuit). Presqu'île scientifique : proche du CEA et des labos (80 €+). Meylan/Inovallée : parc technologique (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Grenoble (2026) : hébergement 3 étoiles → 85 €, repas midi → 11-15 €, repas soir → 18-25 €, transports urbains → 4-7 €. Soit un budget total d'environ 120-132 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Grenoble ?",
        answer:
          "Comptez environ 120-132 €/jour (hors transport A/R). Grenoble est abordable, environ 35 % moins cher que Paris. Les tarifs augmentent pendant les congrès scientifiques et la saison de ski.",
      },
      {
        question: "Où se trouve le pôle scientifique de Grenoble ?",
        answer:
          "La presqu'île scientifique (entre Isère et Drac) concentre le CEA-Leti, l'ESRF, l'ILL et le synchrotron. C'est l'un des plus grands campus scientifiques d'Europe. Le tram B le dessert directement.",
      },
      {
        question: "Grenoble est-elle accessible en hiver ?",
        answer:
          "Oui, la ville est en fond de vallée et rarement enneigée. Les routes d'accès sont bien entretenues. Le TGV n'est pas affecté par la météo. Seuls les sites en altitude peuvent être perturbés.",
      },
    ],
  },
  {
    slug: "dijon",
    name: "Dijon",
    description:
      "Dijon est un carrefour stratégique entre Paris, Lyon et Strasbourg, avec un tissu économique diversifié et un coût de la vie attractif.",
    population: "160 000 (400 000 aire urbaine)",
    businessTravelers: "1,5M+ nuitées pro/an",
    avgHotelPrice: "78 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Dijon en 1h35",
      "Carrefour Paris-Lyon-Strasbourg",
      "Pôle agroalimentaire et santé",
      "Coût de la vie attractif",
    ],
    metaTitle: "Déplacement professionnel à Dijon — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Dijon : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Dijon",
        content:
          "Le TGV relie Paris à Dijon en 1h35. Dijon est aussi sur l'axe Lyon (1h40) et Strasbourg (2h20). La gare Dijon-Ville est en centre-ville. L'aéroport Dijon-Bourgogne a des liaisons limitées.",
      },
      {
        title: "Se déplacer à Dijon",
        content:
          "Le tramway (2 lignes) et le réseau de bus Divia couvrent la métropole. Le centre-ville est compact et piéton. Pour les zones d'activité périphériques (Valmy, Quetigny), le tram ou un véhicule sont recommandés.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Place Darcy : le plus pratique (à partir de 68 €/nuit). Gare : idéal pour les allers-retours (72 €+). Toison d'Or : proche du parc d'activités (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Dijon (2026) : hébergement 3 étoiles → 78 €, repas midi → 10-14 €, repas soir → 16-23 €, transports urbains → 3-6 €. Soit un budget total d'environ 108-122 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Dijon ?",
        answer:
          "Comptez environ 108-122 €/jour (hors transport A/R). Dijon est très abordable, environ 40 % moins cher que Paris, avec un excellent rapport qualité-prix.",
      },
      {
        question: "Dijon est-elle un bon point de base pour couvrir l'Est ?",
        answer:
          "Oui, Dijon est idéalement situé : 1h35 de Paris, 1h40 de Lyon, 2h20 de Strasbourg en TGV. C'est un excellent hub pour les déplacements dans le quart nord-est de la France.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Dijon dans la journée ?",
        answer:
          "Oui, le TGV en 1h35 le permet aisément. Avec un départ à 7h et un retour vers 19h, vous disposez d'une journée complète sur place.",
      },
    ],
  },
  {
    slug: "angers",
    name: "Angers",
    description:
      "Angers est une ville à taille humaine, pôle du végétal et de l'électronique, à seulement 1h30 de Paris en TGV.",
    population: "155 000 (420 000 aire urbaine)",
    businessTravelers: "1,2M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Angers en 1h30",
      "Pôle du végétal et électronique",
      "Ville la plus verte de France",
      "Coût de la vie très attractif",
    ],
    metaTitle: "Déplacement professionnel à Angers — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Angers : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Angers",
        content:
          "Le TGV relie Paris à Angers en 1h30 (gare Angers Saint-Laud). Depuis Nantes, le TER met 40 minutes. L'aéroport le plus proche est Nantes-Atlantique (1h).",
      },
      {
        title: "Se déplacer à Angers",
        content:
          "Le tramway (ligne A) et le réseau de bus Irigo couvrent la métropole. Le centre-ville est compact et se parcourt à pied. Pour les zones d'activité (Angers Technopole, Saint-Barthélémy), le tram est efficace.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Gare Saint-Laud : le plus pratique (à partir de 65 €/nuit). Lac de Maine : calme, proche du centre de congrès (70 €+). Saint-Barthélémy : proche des zones d'activité (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Angers (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-13 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-118 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Angers ?",
        answer:
          "Comptez environ 105-118 €/jour (hors transport A/R). Angers est l'une des villes les plus abordables pour les voyageurs d'affaires, 45 % moins cher que Paris.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Angers dans la journée ?",
        answer:
          "Oui, le TGV en 1h30 le permet facilement. C'est une option courante pour les rendez-vous ponctuels, permettant d'économiser les frais d'hôtel.",
      },
      {
        question: "Quels secteurs d'activité dominent à Angers ?",
        answer:
          "Angers est le leader français du végétal (semences, horticulture) et un pôle majeur de l'électronique et du numérique. Le pôle de compétitivité Vegepolys Valley y est basé.",
      },
    ],
  },
  {
    slug: "nimes",
    name: "Nîmes",
    description:
      "Nîmes est une ville du sud de la France, porte d'entrée de la Camargue et du Languedoc, avec un tissu économique centré sur les services et l'agroalimentaire.",
    population: "150 000 (270 000 aire urbaine)",
    businessTravelers: "1M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Nîmes en 2h50",
      "Proche de Montpellier (30 min)",
      "Patrimoine romain exceptionnel",
      "Coût de la vie attractif",
    ],
    metaTitle: "Déplacement professionnel à Nîmes — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Nîmes : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Nîmes",
        content:
          "Le TGV relie Paris à Nîmes en 2h50 (gare Nîmes Centre ou gare Nîmes-Pont du Gard). L'aéroport Nîmes-Garons a des liaisons limitées. L'aéroport de Montpellier est à 45 min.",
      },
      {
        title: "Se déplacer à Nîmes",
        content:
          "Le réseau de bus Tango couvre la ville. Le centre historique est compact et se parcourt à pied. Pour les zones d'activité périphériques (Ville Active, Grézan), un véhicule est souvent nécessaire.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Arènes : charme et proximité (à partir de 65 €/nuit). Gare : pratique pour les trajets TGV (70 €+). Ville Active : proche des zones d'activité (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Nîmes (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-14 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-118 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Nîmes ?",
        answer:
          "Comptez environ 105-118 €/jour (hors transport A/R). Nîmes est très abordable, parmi les grandes villes les moins chères du sud de la France.",
      },
      {
        question: "Nîmes ou Montpellier pour un déplacement pro ?",
        answer:
          "Si vos rendez-vous sont à Nîmes, logez sur place (30 % moins cher que Montpellier). Les deux villes sont à 30 min en train, donc combinables sur un même déplacement.",
      },
      {
        question: "Quelle gare choisir à Nîmes ?",
        answer:
          "La gare Nîmes Centre est en ville et la plus pratique. La gare Nîmes-Pont du Gard (TGV) est excentrée. Vérifiez quelle gare dessert votre train.",
      },
    ],
  },
  {
    slug: "clermont-ferrand",
    name: "Clermont-Ferrand",
    description:
      "Clermont-Ferrand est la capitale de l'Auvergne et le siège de Michelin, avec un tissu industriel solide et un cadre de vie apprécié.",
    population: "145 000 (490 000 aire urbaine)",
    businessTravelers: "1,5M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "Siège mondial de Michelin",
      "Train Paris-Clermont en 3h30",
      "Pôle de compétitivité chimie/caoutchouc",
      "Aéroport Clermont-Ferrand Auvergne",
    ],
    metaTitle: "Déplacement professionnel à Clermont-Ferrand — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Clermont-Ferrand : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Clermont-Ferrand",
        content:
          "Le train Intercités relie Paris à Clermont-Ferrand en 3h30 (pas de LGV). L'aéroport Clermont-Ferrand Auvergne dessert Paris-Orly en 1h. Depuis Lyon, le train met 2h30.",
      },
      {
        title: "Se déplacer à Clermont-Ferrand",
        content:
          "Le tramway (ligne A) et le réseau de bus T2C couvrent la métropole. Le centre-ville est compact. Pour les sites Michelin et les zones industrielles, le tram ou un véhicule sont recommandés.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Place de Jaude : le plus pratique (à partir de 65 €/nuit). Gare : proche du tramway (68 €+). Aubière : proche du campus et des zones d'activité (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Clermont-Ferrand (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-13 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-118 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Clermont-Ferrand ?",
        answer:
          "Comptez environ 105-118 €/jour (hors transport A/R). Clermont-Ferrand est très abordable, 45 % moins cher que Paris.",
      },
      {
        question: "Faut-il prendre le train ou l'avion pour Clermont-Ferrand depuis Paris ?",
        answer:
          "L'avion met 1h (vs 3h30 en train) et peut être compétitif en tarif. Pour un aller simple, l'avion est souvent préférable. Le train reste utile si vous devez travailler pendant le trajet.",
      },
      {
        question: "Clermont-Ferrand aura-t-elle le TGV ?",
        answer:
          "Le projet de LGV Paris-Clermont-Ferrand est régulièrement discuté mais pas encore programmé. En attendant, le trajet reste à 3h30 en Intercités.",
      },
    ],
  },
  {
    slug: "le-havre",
    name: "Le Havre",
    description:
      "Le Havre est le premier port de France pour le commerce international et un pôle logistique et industriel majeur de Normandie.",
    population: "170 000 (290 000 aire urbaine)",
    businessTravelers: "1M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "1er port de France (commerce)",
      "Train Paris-Le Havre en 2h10",
      "Pôle logistique et pétrochimie",
      "Architecture UNESCO",
    ],
    metaTitle: "Déplacement professionnel au Havre — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels au Havre : transports, hébergement, zone portuaire, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre au Havre",
        content:
          "Le train relie Paris Saint-Lazare au Havre en 2h10 (pas de TGV mais des Intercités fréquents). En voiture, comptez 2h par l'A13. L'aéroport le plus proche est Deauville (45 min) ou Paris.",
      },
      {
        title: "Se déplacer au Havre",
        content:
          "Le tramway (2 lignes) et le réseau de bus LiA couvrent la ville. Le centre reconstruit par Perret est compact et piéton. Pour la zone portuaire et industrielle, un véhicule est souvent nécessaire.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Hôtel de Ville : le plus pratique (à partir de 65 €/nuit). Gare : à proximité immédiate (68 €+). Docks Vauban : quartier rénové avec vue sur le port (70 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type au Havre (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-14 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-118 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro au Havre ?",
        answer:
          "Comptez environ 105-118 €/jour (hors transport A/R). Le Havre est abordable, 45 % moins cher que Paris.",
      },
      {
        question: "Le Havre est-il bien desservi par le train ?",
        answer:
          "Le train Intercités Paris-Le Havre met 2h10 avec des départs réguliers depuis Paris Saint-Lazare. Il n'y a pas de TGV, mais la fréquence est correcte.",
      },
      {
        question: "Faut-il une voiture au Havre ?",
        answer:
          "Pour le centre-ville, le tramway suffit. Pour la zone portuaire et industrielle (HAROPA, pétrochimie), une voiture est indispensable.",
      },
    ],
  },
  {
    slug: "aix-en-provence",
    name: "Aix-en-Provence",
    description:
      "Aix-en-Provence est un pôle technologique et juridique majeur, à 30 min de Marseille, avec un cadre de vie exceptionnel.",
    population: "145 000 (400 000 aire urbaine)",
    businessTravelers: "2M+ nuitées pro/an",
    avgHotelPrice: "95 €/nuit (3 étoiles)",
    keyFacts: [
      "Gare TGV Aix-en-Provence (Paris en 3h)",
      "Pôle d'activités des Milles",
      "Cour d'appel et pôle juridique",
      "Proche de Marseille (30 min)",
    ],
    metaTitle: "Déplacement professionnel à Aix-en-Provence — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Aix-en-Provence : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Aix-en-Provence",
        content:
          "La gare TGV d'Aix-en-Provence est à 15 min du centre (navette). Paris-Aix en 3h. L'aéroport Marseille-Provence est à 25 min. Depuis Marseille, la navette (bus 50) met 30 min.",
      },
      {
        title: "Se déplacer à Aix-en-Provence",
        content:
          "Le réseau Aix en Bus couvre la ville. Le centre historique est piéton et compact. Pour le pôle d'activités des Milles et Rousset (microélectronique), un véhicule est nécessaire.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Cours Mirabeau : charme et proximité (à partir de 85 €/nuit). Gare routière : pratique et central (80 €+). Les Milles : proche du pôle d'activités (75 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Aix-en-Provence (2026) : hébergement 3 étoiles → 95 €, repas midi → 13-17 €, repas soir → 20-28 €, transports urbains → 4-8 €. Soit un budget total d'environ 135-150 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Aix-en-Provence ?",
        answer:
          "Comptez environ 135-150 €/jour (hors transport A/R). Aix est légèrement plus cher que Marseille en raison de sa attractivité et de son cadre de vie.",
      },
      {
        question: "Faut-il loger à Aix ou à Marseille ?",
        answer:
          "Si vos rendez-vous sont à Aix, logez sur place (30 min de Marseille en bus). Si vous avez des rendez-vous dans les deux villes, Aix est un bon compromis avec un cadre plus agréable.",
      },
      {
        question: "Où est le pôle technologique d'Aix ?",
        answer:
          "Le pôle d'activités des Milles (sud-ouest d'Aix) concentre 5 000 entreprises et 30 000 emplois. Le pôle microélectronique de Rousset (STMicroelectronics) est à 20 min à l'est.",
      },
    ],
  },
  {
    slug: "brest",
    name: "Brest",
    description:
      "Brest est un pôle naval et maritime de premier plan, à la pointe de la Bretagne, avec un écosystème mer et défense unique.",
    population: "140 000 (310 000 aire urbaine)",
    businessTravelers: "1M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "2e base navale française",
      "TGV Paris-Brest en 3h25",
      "Pôle mer et océanographie",
      "Aéroport Brest Bretagne",
    ],
    metaTitle: "Déplacement professionnel à Brest — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Brest : transports, hébergement, pôle naval, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Brest",
        content:
          "Le TGV relie Paris à Brest en 3h25. L'aéroport Brest Bretagne dessert Paris-Orly en 1h15 et quelques destinations européennes. Depuis Rennes, le train met 2h.",
      },
      {
        title: "Se déplacer à Brest",
        content:
          "Le tramway (ligne A) et le réseau Bibus couvrent la métropole. Le centre-ville est accessible à pied. Pour la base navale, le technopôle et le port de commerce, le bus ou un véhicule sont nécessaires.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Siam : le plus pratique (à partir de 65 €/nuit). Gare : à proximité directe (68 €+). Technopôle Brest-Iroise : proche des entreprises tech (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Brest (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-13 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-115 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Brest ?",
        answer:
          "Comptez environ 105-115 €/jour (hors transport A/R). Brest est abordable, 45 % moins cher que Paris.",
      },
      {
        question: "Faut-il prendre le train ou l'avion pour Brest depuis Paris ?",
        answer:
          "Le TGV met 3h25, l'avion 1h15. Pour un aller-retour dans la journée, l'avion est préférable. Pour un séjour avec nuitée, le train est confortable et arrive en centre-ville.",
      },
      {
        question: "Quels secteurs d'activité dominent à Brest ?",
        answer:
          "Le naval et la défense (Naval Group, Marine nationale), les sciences de la mer (Ifremer, SHOM), le numérique et les télécoms (Technopôle Brest-Iroise) sont les principaux pôles.",
      },
    ],
  },
  {
    slug: "tours",
    name: "Tours",
    description:
      "Tours est un carrefour du Val de Loire, à 1h15 de Paris en TGV, avec un tissu économique diversifié et un coût de la vie attractif.",
    population: "140 000 (500 000 aire urbaine)",
    businessTravelers: "1,5M+ nuitées pro/an",
    avgHotelPrice: "78 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Tours en 1h15",
      "Carrefour du Val de Loire",
      "Pôle pharmacie et cosmétique",
      "Coût de la vie attractif",
    ],
    metaTitle: "Déplacement professionnel à Tours — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Tours : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Tours",
        content:
          "Le TGV relie Paris à Tours en 1h15 (gare Tours Centre ou Saint-Pierre-des-Corps). Depuis Nantes, le train met 2h30. L'aéroport Tours Val de Loire a des liaisons limitées.",
      },
      {
        title: "Se déplacer à Tours",
        content:
          "Le tramway (ligne A) et le réseau Fil Bleu couvrent la métropole. Le centre-ville est compact et piéton. Pour les zones d'activité (Technopôle, Nord), le tram ou un véhicule sont recommandés.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Place Jean Jaurès : le plus pratique (à partir de 68 €/nuit). Gare : à proximité directe (72 €+). Saint-Pierre-des-Corps : proche de la gare TGV (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Tours (2026) : hébergement 3 étoiles → 78 €, repas midi → 10-14 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 108-122 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Tours ?",
        answer:
          "Comptez environ 108-122 €/jour (hors transport A/R). Tours est très abordable, 40 % moins cher que Paris.",
      },
      {
        question: "Quelle gare choisir à Tours ?",
        answer:
          "Tours Centre est en ville. Saint-Pierre-des-Corps est la gare TGV principale (10 min de Tours en navette). La plupart des TGV s'arrêtent à Saint-Pierre-des-Corps.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Tours dans la journée ?",
        answer:
          "Oui, le TGV en 1h15 le permet facilement. C'est une option courante pour les rendez-vous ponctuels.",
      },
    ],
  },
  {
    slug: "limoges",
    name: "Limoges",
    description:
      "Limoges est la préfecture de la Haute-Vienne, connue pour sa porcelaine et son industrie, avec des coûts de déplacement parmi les plus bas de France.",
    population: "130 000 (280 000 aire urbaine)",
    businessTravelers: "800 000+ nuitées pro/an",
    avgHotelPrice: "68 €/nuit (3 étoiles)",
    keyFacts: [
      "Train Paris-Limoges en 3h",
      "Aéroport Limoges-Bellegarde",
      "Industrie porcelaine et luxe",
      "Coûts très compétitifs",
    ],
    metaTitle: "Déplacement professionnel à Limoges — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Limoges : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Limoges",
        content:
          "Le train Intercités relie Paris-Austerlitz à Limoges-Bénédictins en 3h. L'aéroport Limoges-Bellegarde dessert Paris et quelques destinations. En voiture, comptez 4h depuis Paris par l'A20.",
      },
      {
        title: "Se déplacer à Limoges",
        content:
          "Le réseau de bus STCL et le trolleybus couvrent la ville. Le centre-ville est compact et se parcourt à pied. La gare Limoges-Bénédictins est en centre-ville. Pour les zones industrielles, un véhicule est recommandé.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Gare : le plus pratique (à partir de 58 €/nuit). Churchill : quartier d'affaires (62 €+). Ester Technopole : proche des entreprises tech (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Limoges (2026) : hébergement 3 étoiles → 68 €, repas midi → 9-12 €, repas soir → 14-20 €, transports urbains → 2-5 €. Soit un budget total d'environ 95-108 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Limoges ?",
        answer:
          "Comptez environ 95-108 €/jour (hors transport A/R). Limoges est l'une des villes les moins chères de France pour les voyageurs d'affaires, 50 % moins cher que Paris.",
      },
      {
        question: "Faut-il prendre le train ou l'avion pour Limoges ?",
        answer:
          "Le train met 3h depuis Paris. L'avion met 1h mais les fréquences sont limitées. Le train est souvent plus pratique avec des horaires réguliers et une arrivée en centre-ville.",
      },
      {
        question: "Quels secteurs d'activité dominent à Limoges ?",
        answer:
          "L'industrie du luxe (porcelaine, émaux), l'agroalimentaire et le numérique sont les principaux secteurs. Ester Technopole regroupe les entreprises innovantes.",
      },
    ],
  },
  {
    slug: "amiens",
    name: "Amiens",
    description:
      "Amiens est la préfecture des Hauts-de-France, à 1h10 de Paris, avec un tissu économique centré sur la logistique, la santé et l'agroalimentaire.",
    population: "135 000 (270 000 aire urbaine)",
    businessTravelers: "900 000+ nuitées pro/an",
    avgHotelPrice: "72 €/nuit (3 étoiles)",
    keyFacts: [
      "Train Paris-Amiens en 1h10",
      "Pôle santé et logistique",
      "CHU Amiens-Picardie",
      "Proche de Paris et Lille",
    ],
    metaTitle: "Déplacement professionnel à Amiens — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Amiens : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Amiens",
        content:
          "Le train relie Paris-Nord à Amiens en 1h10 (Intercités fréquents). Depuis Lille, le train met 1h20. En voiture, comptez 1h45 depuis Paris par l'A16. Pas d'aéroport commercial à Amiens.",
      },
      {
        title: "Se déplacer à Amiens",
        content:
          "Le réseau Ametis (bus + BHNS) couvre la métropole. Le centre-ville est compact et se parcourt à pied. Pour les zones logistiques (Dury, Boves), un véhicule est recommandé.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Cathédrale : charme et proximité (à partir de 62 €/nuit). Gare : pratique pour les allers-retours (65 €+). Zone sud : proche des zones d'activité (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Amiens (2026) : hébergement 3 étoiles → 72 €, repas midi → 10-13 €, repas soir → 15-21 €, transports urbains → 3-5 €. Soit un budget total d'environ 102-113 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Amiens ?",
        answer:
          "Comptez environ 102-113 €/jour (hors transport A/R). Amiens est très abordable, 45 % moins cher que Paris.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Amiens dans la journée ?",
        answer:
          "Oui, le train en 1h10 le permet facilement. C'est une option courante qui évite les frais d'hôtel.",
      },
      {
        question: "Quels sont les principaux employeurs à Amiens ?",
        answer:
          "Le CHU Amiens-Picardie (santé), la logistique (plateforme Amazon à Boves), l'agroalimentaire et les services publics (préfecture) sont les principaux employeurs de la métropole.",
      },
    ],
  },
  {
    slug: "metz",
    name: "Metz",
    description:
      "Metz est un carrefour lorrain à 1h20 de Paris en TGV, proche du Luxembourg et de l'Allemagne, avec un coût de la vie attractif.",
    population: "120 000 (390 000 aire urbaine)",
    businessTravelers: "1,2M+ nuitées pro/an",
    avgHotelPrice: "78 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Metz en 1h20",
      "Proche du Luxembourg (1h)",
      "Technopôle de Metz",
      "Carrefour France-Luxembourg-Allemagne",
    ],
    metaTitle: "Déplacement professionnel à Metz — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Metz : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Metz",
        content:
          "Le TGV relie Paris à Metz en 1h20 (gare Metz-Ville). Luxembourg est à 1h en train. Strasbourg est à 1h20. La gare Lorraine TGV (Louvigny) dessert aussi la zone. L'aéroport le plus proche est Metz-Nancy-Lorraine.",
      },
      {
        title: "Se déplacer à Metz",
        content:
          "Le réseau Le Met' (bus à haut niveau de service Mettis + bus) couvre la métropole. Le BHNS Mettis est rapide et fréquent. Le centre-ville est compact et piéton.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Gare : le plus pratique (à partir de 68 €/nuit). Technopôle : proche des entreprises (65 €+). Augny : proche de la zone commerciale (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Metz (2026) : hébergement 3 étoiles → 78 €, repas midi → 10-14 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 108-122 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Metz ?",
        answer:
          "Comptez environ 108-122 €/jour (hors transport A/R). Metz est abordable, 40 % moins cher que Paris et idéalement situé pour couvrir la Grande Région.",
      },
      {
        question: "Metz est-elle un bon point de base pour le Luxembourg ?",
        answer:
          "Oui, Metz est à 1h du Luxembourg en train avec des TER fréquents. Les tarifs hôteliers sont 50-60 % moins chers qu'au Luxembourg-Ville. C'est une option courante pour les frontaliers.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Metz dans la journée ?",
        answer:
          "Oui, le TGV en 1h20 le permet facilement. C'est une option courante pour les rendez-vous ponctuels.",
      },
    ],
  },
  {
    slug: "besancon",
    name: "Besançon",
    description:
      "Besançon est la capitale de la Franche-Comté, pôle de la microtechnique et de l'horlogerie, avec un cadre de vie remarquable.",
    population: "120 000 (250 000 aire urbaine)",
    businessTravelers: "800 000+ nuitées pro/an",
    avgHotelPrice: "72 €/nuit (3 étoiles)",
    keyFacts: [
      "TGV Paris-Besançon en 2h05",
      "Pôle microtechnique et horlogerie",
      "Ville verte et UNESCO",
      "Proche de la Suisse",
    ],
    metaTitle: "Déplacement professionnel à Besançon — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Besançon : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Besançon",
        content:
          "Le TGV relie Paris à Besançon en 2h05 (gare Besançon Franche-Comté TGV à Auxon). La gare Besançon-Viotte est en centre-ville (TER depuis la gare TGV en 10 min). La Suisse (Bâle, Lausanne) est à 1-2h.",
      },
      {
        title: "Se déplacer à Besançon",
        content:
          "Le tramway (2 lignes) et le réseau Ginko couvrent la ville. Le centre historique est compact et se parcourt à pied. Pour Temis (technopôle), le tram est efficace.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Granvelle : charme et proximité (à partir de 62 €/nuit). Gare Viotte : pratique (65 €+). Temis : proche du technopôle (55 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Besançon (2026) : hébergement 3 étoiles → 72 €, repas midi → 10-13 €, repas soir → 15-21 €, transports urbains → 3-5 €. Soit un budget total d'environ 102-113 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Besançon ?",
        answer:
          "Comptez environ 102-113 €/jour (hors transport A/R). Besançon est très abordable, parmi les grandes villes les moins chères de l'Est de la France.",
      },
      {
        question: "Quelle gare choisir à Besançon ?",
        answer:
          "La gare TGV Besançon Franche-Comté est à Auxon (15 km du centre). La gare Viotte est en centre-ville (TER et navette depuis la gare TGV). Prévoyez le transfert.",
      },
      {
        question: "Besançon est-elle un bon point de base pour la Suisse ?",
        answer:
          "Oui, Besançon est à 1h de Bâle et 2h de Lausanne. Les tarifs hôteliers sont 60-70 % moins chers qu'en Suisse, ce qui en fait une base économique.",
      },
    ],
  },
  {
    slug: "orleans",
    name: "Orléans",
    description:
      "Orléans est une ville stratégique au cœur du Val de Loire, à 1h10 de Paris, avec un tissu économique diversifié et des coûts très compétitifs.",
    population: "115 000 (440 000 aire urbaine)",
    businessTravelers: "1M+ nuitées pro/an",
    avgHotelPrice: "75 €/nuit (3 étoiles)",
    keyFacts: [
      "Train Paris-Orléans en 1h10",
      "Pôle cosmétique et pharmacie",
      "Proche de Paris",
      "Coût de la vie attractif",
    ],
    metaTitle: "Déplacement professionnel à Orléans — Guide 2026",
    metaDescription:
      "Guide complet pour vos déplacements professionnels à Orléans : transports, hébergement, budget. Conseils et tarifs 2026.",
    sections: [
      {
        title: "Se rendre à Orléans",
        content:
          "Le train relie Paris-Austerlitz à Orléans en 1h10 (Intercités fréquents). En voiture, comptez 1h30 par l'A10. Orléans est aussi sur l'axe TGV vers Tours et Bordeaux (gare Les Aubrais).",
      },
      {
        title: "Se déplacer à Orléans",
        content:
          "Le tramway (2 lignes) couvre bien la métropole. Le centre-ville est compact et piéton. Pour les zones d'activité (Ingré, Saran, Chécy), le tram ou un véhicule sont recommandés.",
      },
      {
        title: "Où loger ?",
        content:
          "Centre-ville/Cathédrale : le plus pratique (à partir de 65 €/nuit). Gare Les Aubrais : proche de la gare principale (68 €+). Olivet : calme, proche du pôle pharma (60 €+).",
      },
      {
        title: "Budget moyen",
        content:
          "Budget journée type à Orléans (2026) : hébergement 3 étoiles → 75 €, repas midi → 10-14 €, repas soir → 16-22 €, transports urbains → 3-6 €. Soit un budget total d'environ 105-118 €/jour hors transport aller-retour.",
      },
    ],
    faq: [
      {
        question: "Quel est le budget moyen d'un déplacement pro à Orléans ?",
        answer:
          "Comptez environ 105-118 €/jour (hors transport A/R). Orléans est très abordable et sa proximité avec Paris (1h10) permet souvent un aller-retour dans la journée.",
      },
      {
        question: "Peut-on faire un aller-retour Paris-Orléans dans la journée ?",
        answer:
          "Oui, le train en 1h10 le permet facilement. C'est l'option la plus courante pour les rendez-vous ponctuels, permettant d'économiser les frais d'hôtel.",
      },
      {
        question: "Quels secteurs d'activité dominent à Orléans ?",
        answer:
          "La cosmétique (Cosmetic Valley), la pharmacie, la logistique et les services publics sont les principaux secteurs. Le pôle de compétitivité Cosmetic Valley est basé à Chartres, à 1h d'Orléans.",
      },
    ],
  },
];

const villesBySlug = new Map(villes.map((v) => [v.slug, v]));

export function getVilleBySlug(slug: string): Ville | undefined {
  return villesBySlug.get(slug);
}
