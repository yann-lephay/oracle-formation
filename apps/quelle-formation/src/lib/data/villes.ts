/**
 * Top 50 villes françaises pour le pSEO formation
 * Classées par population / volume de recherche
 */

export interface Ville {
    slug: string;
    name: string;
    region: string;
    population: string;
    metaSuffix: string; // "à Paris", "à Lyon"...
}

export const villes: Ville[] = [
    { slug: "paris", name: "Paris", region: "Île-de-France", population: "2,1M", metaSuffix: "à Paris" },
    { slug: "lyon", name: "Lyon", region: "Auvergne-Rhône-Alpes", population: "522k", metaSuffix: "à Lyon" },
    { slug: "marseille", name: "Marseille", region: "Provence-Alpes-Côte d'Azur", population: "873k", metaSuffix: "à Marseille" },
    { slug: "toulouse", name: "Toulouse", region: "Occitanie", population: "498k", metaSuffix: "à Toulouse" },
    { slug: "bordeaux", name: "Bordeaux", region: "Nouvelle-Aquitaine", population: "260k", metaSuffix: "à Bordeaux" },
    { slug: "lille", name: "Lille", region: "Hauts-de-France", population: "236k", metaSuffix: "à Lille" },
    { slug: "nantes", name: "Nantes", region: "Pays de la Loire", population: "320k", metaSuffix: "à Nantes" },
    { slug: "strasbourg", name: "Strasbourg", region: "Grand Est", population: "287k", metaSuffix: "à Strasbourg" },
    { slug: "montpellier", name: "Montpellier", region: "Occitanie", population: "299k", metaSuffix: "à Montpellier" },
    { slug: "rennes", name: "Rennes", region: "Bretagne", population: "222k", metaSuffix: "à Rennes" },
    { slug: "nice", name: "Nice", region: "Provence-Alpes-Côte d'Azur", population: "342k", metaSuffix: "à Nice" },
    { slug: "grenoble", name: "Grenoble", region: "Auvergne-Rhône-Alpes", population: "158k", metaSuffix: "à Grenoble" },
    { slug: "rouen", name: "Rouen", region: "Normandie", population: "114k", metaSuffix: "à Rouen" },
    { slug: "toulon", name: "Toulon", region: "Provence-Alpes-Côte d'Azur", population: "178k", metaSuffix: "à Toulon" },
    { slug: "dijon", name: "Dijon", region: "Bourgogne-Franche-Comté", population: "160k", metaSuffix: "à Dijon" },
    { slug: "angers", name: "Angers", region: "Pays de la Loire", population: "157k", metaSuffix: "à Angers" },
    { slug: "clermont-ferrand", name: "Clermont-Ferrand", region: "Auvergne-Rhône-Alpes", population: "147k", metaSuffix: "à Clermont-Ferrand" },
    { slug: "le-havre", name: "Le Havre", region: "Normandie", population: "169k", metaSuffix: "au Havre" },
    { slug: "aix-en-provence", name: "Aix-en-Provence", region: "Provence-Alpes-Côte d'Azur", population: "147k", metaSuffix: "à Aix-en-Provence" },
    { slug: "brest", name: "Brest", region: "Bretagne", population: "139k", metaSuffix: "à Brest" },
    { slug: "tours", name: "Tours", region: "Centre-Val de Loire", population: "136k", metaSuffix: "à Tours" },
    { slug: "limoges", name: "Limoges", region: "Nouvelle-Aquitaine", population: "132k", metaSuffix: "à Limoges" },
    { slug: "amiens", name: "Amiens", region: "Hauts-de-France", population: "136k", metaSuffix: "à Amiens" },
    { slug: "perpignan", name: "Perpignan", region: "Occitanie", population: "122k", metaSuffix: "à Perpignan" },
    { slug: "metz", name: "Metz", region: "Grand Est", population: "120k", metaSuffix: "à Metz" },
    { slug: "besancon", name: "Besançon", region: "Bourgogne-Franche-Comté", population: "119k", metaSuffix: "à Besançon" },
    { slug: "orleans", name: "Orléans", region: "Centre-Val de Loire", population: "116k", metaSuffix: "à Orléans" },
    { slug: "mulhouse", name: "Mulhouse", region: "Grand Est", population: "109k", metaSuffix: "à Mulhouse" },
    { slug: "caen", name: "Caen", region: "Normandie", population: "106k", metaSuffix: "à Caen" },
    { slug: "nancy", name: "Nancy", region: "Grand Est", population: "105k", metaSuffix: "à Nancy" },
    { slug: "saint-etienne", name: "Saint-Étienne", region: "Auvergne-Rhône-Alpes", population: "174k", metaSuffix: "à Saint-Étienne" },
    { slug: "avignon", name: "Avignon", region: "Provence-Alpes-Côte d'Azur", population: "93k", metaSuffix: "à Avignon" },
    { slug: "valence", name: "Valence", region: "Auvergne-Rhône-Alpes", population: "65k", metaSuffix: "à Valence" },
    { slug: "pau", name: "Pau", region: "Nouvelle-Aquitaine", population: "77k", metaSuffix: "à Pau" },
    { slug: "la-rochelle", name: "La Rochelle", region: "Nouvelle-Aquitaine", population: "79k", metaSuffix: "à La Rochelle" },
    { slug: "poitiers", name: "Poitiers", region: "Nouvelle-Aquitaine", population: "89k", metaSuffix: "à Poitiers" },
    { slug: "nimes", name: "Nîmes", region: "Occitanie", population: "151k", metaSuffix: "à Nîmes" },
    { slug: "bayonne", name: "Bayonne", region: "Nouvelle-Aquitaine", population: "52k", metaSuffix: "à Bayonne" },
    { slug: "chambery", name: "Chambéry", region: "Auvergne-Rhône-Alpes", population: "60k", metaSuffix: "à Chambéry" },
    { slug: "le-mans", name: "Le Mans", region: "Pays de la Loire", population: "146k", metaSuffix: "au Mans" },
];

/** Top 8 villes pour le MVP (formation × ville) */
export const topVilles = villes.slice(0, 8);

export function getVilleBySlug(slug: string): Ville | undefined {
    return villes.find((v) => v.slug === slug);
}
