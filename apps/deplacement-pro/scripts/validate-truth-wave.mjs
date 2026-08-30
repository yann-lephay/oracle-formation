import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const appRoot = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(appRoot, path), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const excludes = (text, values, surface) => {
  for (const value of values) assert(!text.includes(value), `${surface}: expression interdite « ${value} »`);
};

const categories = read("src/lib/data/categories.ts");
excludes(categories, ["15 à 30 %", "5 € – 25 € / réservation", "0 € – 9 € / carte / mois", "Récupérer la TVA automatiquement"], "catégories");
assert(categories.includes("Une TMC gagne quand"), "TMC: bifurcation éditoriale absente");
assert(categories.includes("carte logée"), "carte corporate: types de carte absents");
assert(categories.includes("reste responsable de vérifier"), "carte corporate: limite TVA absente");

const solutions = read("src/lib/data/solutions.ts");
excludes(solutions, ["rating:", "reviewCount:", "À partir de 0 € (offre gratuite)", "À partir de 4,99 €/utilisateur/mois", 'logo: "/logos/travelperk.png"', 'logo: "/logos/expensya.png"'], "solutions");
assert(solutions.includes("Perk (ex-TravelPerk)"), "identité Perk absente");
assert(solutions.includes("Medius Expense (ex-Expensya)"), "identité Medius Expense absente");

const structuredData = read("src/lib/structured-data.ts");
excludes(structuredData, ["AggregateRating", "aggregateRating", "ratingValue", "ratingCount", 'price: "0"'], "données structurées");

const paris = read("src/lib/data/villes.ts").split('slug: "lyon"')[0];
excludes(paris, ["30M+", "145 €/nuit", "200-215", "600-650"], "Paris");
assert(paris.includes("temps porte à porte"), "Paris: critère porte à porte absent");
assert(paris.includes("Il n'existe pas de budget parisien fiable"), "Paris: limite budgétaire absente");

const metadata = read("src/lib/metadata.ts");
assert(metadata.includes("/\\b2026\\b/.test(title)"), "metadata: garde anti-suffixe dupliqué absente");

const renderedChecks = [
  [".next/server/app/tmc.html", ["Une TMC gagne quand", "Le contre-cas"], ["15 à 30 %", "AggregateRating"]],
  [".next/server/app/carte-corporate.html", ["reste responsable de vérifier", "Le contre-cas"], ["Récupérer la TVA automatiquement", "AggregateRating"]],
  [".next/server/app/villes/paris.html", ["temps porte à porte", "Le contre-cas"], ["30M+", "145 €/nuit", "200-215"]],
  [".next/server/app/solution/travelperk.html", ["Perk (ex-TravelPerk)", "Analyse documentaire"], ["AggregateRating", "offre gratuite", "4.5/5", "980 avis", "est noté"]],
  [".next/server/app/solution/expensya.html", ["Medius Expense (ex-Expensya)", "Analyse documentaire"], ["AggregateRating", "4,99 €/utilisateur", "4.3/5", "520 avis", "est noté"]],
];

for (const [path, required, forbidden] of renderedChecks) {
  const fullPath = resolve(appRoot, path);
  assert(existsSync(fullPath), `${path}: HTML absent, exécutez d'abord le build webpack`);
  const html = readFileSync(fullPath, "utf8");
  for (const value of required) assert(html.includes(value), `${path}: contenu requis absent « ${value} »`);
  excludes(html, forbidden, path);
  excludes(html, ["Guide 2026 — guide 2026", "2026 — guide 2026"], path);
}

console.log("Déplacement Pro truth wave: PASS");
