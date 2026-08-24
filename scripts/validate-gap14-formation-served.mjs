import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const qfBaseUrl = process.env.QF_BASE_URL ?? "http://127.0.0.1:3120";
const dpBaseUrl = process.env.DP_BASE_URL ?? "http://127.0.0.1:3121";
const cockpitOrigin = "https://cockpit-gamma-ten.vercel.app";
const builtMode = process.argv.includes("--built");
const repoRoot = fileURLToPath(new URL("..", import.meta.url));

const noindexRoutes = [
  "sante-securite-travail/bordeaux",
  "sante-securite-travail/strasbourg",
  "langues-anglais/lille",
  "langues-anglais/bordeaux",
  "sante-securite-travail/toulouse",
  "langues-anglais/strasbourg",
  "excel-bureautique/strasbourg",
  "langues-anglais/nantes",
  "langues-anglais/paris",
  "langues-anglais/lyon",
  "langues-anglais/marseille",
  "langues-anglais/toulouse",
  "excel-bureautique/paris",
  "excel-bureautique/lyon",
  "excel-bureautique/marseille",
  "excel-bureautique/toulouse",
  "excel-bureautique/bordeaux",
  "excel-bureautique/lille",
];

async function fetchText(baseUrl, path) {
  if (builtMode) {
    const app = baseUrl === qfBaseUrl ? "quelle-formation" : "deplacement-pro";
    const appRoot = `${repoRoot}/apps/${app}/.next/server/app`;
    const relativeFile = path === "/"
      ? "index.html"
      : path === "/sitemap.xml"
        ? "sitemap.xml.body"
        : `${path.replace(/^\//, "")}.html`;
    return readFile(`${appRoot}/${relativeFile}`, "utf8");
  }
  const response = await fetch(`${baseUrl}${path}`);
  assert.equal(response.status, 200, `${baseUrl}${path} returned ${response.status}`);
  return response.text();
}

async function assertCockpitCsp(baseUrl) {
  if (builtMode) return;
  const response = await fetch(`${baseUrl}/`);
  assert.equal(response.status, 200, `${baseUrl}/ returned ${response.status}`);
  const csp = response.headers.get("content-security-policy") ?? "";
  const connectSrc = csp.match(/connect-src ([^;]+);/)?.[1] ?? "";
  assert.equal(connectSrc, `'self' ${cockpitOrigin}`, `${baseUrl}: unexpected connect-src`);
}

await Promise.all([assertCockpitCsp(qfBaseUrl), assertCockpitCsp(dpBaseUrl)]);

function sitemapLocations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function elementText(html, tag) {
  return (html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1] ?? "")
    .replace(/<!-- -->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

const [qfSitemapXml, dpSitemapXml] = await Promise.all([
  fetchText(qfBaseUrl, "/sitemap.xml"),
  fetchText(dpBaseUrl, "/sitemap.xml"),
]);
const qfLocations = sitemapLocations(qfSitemapXml);
const dpLocations = sitemapLocations(dpSitemapXml);

assert.equal(qfLocations.length, 248, "QuelleFormation sitemap must contain 248 URLs");
assert.equal(dpLocations.length, 137, "DeplacementPro sitemap must contain 137 canonical owners");
assert.ok(dpLocations.includes("https://deplacement-pro.fr/guides/politique-voyage-modele"));
assert.ok(!dpLocations.includes("https://deplacement-pro.fr/blog/politique-voyage-entreprise-modele"));

if (builtMode) {
  const dpAppRoot = `${repoRoot}/apps/deplacement-pro/.next/server/app`;
  await assert.rejects(access(`${dpAppRoot}/blog/politique-voyage-entreprise-modele.html`));
  const routesManifest = JSON.parse(await readFile(`${repoRoot}/apps/deplacement-pro/.next/routes-manifest.json`, "utf8"));
  assert.ok(routesManifest.redirects.some((redirect) =>
    redirect.source === "/blog/politique-voyage-entreprise-modele" &&
    redirect.destination === "/guides/politique-voyage-modele" &&
    redirect.statusCode === 308
  ));
  const htmlFiles = (await readdir(dpAppRoot, { recursive: true }))
    .filter((file) => typeof file === "string" && file.endsWith(".html"));
  const allHtml = (await Promise.all(htmlFiles.map((file) => readFile(`${dpAppRoot}/${file}`, "utf8")))).join("\n");
  assert.ok(!allHtml.includes('href="/blog/politique-voyage-entreprise-modele"'));
  assert.ok(allHtml.includes('href="/guides/politique-voyage-modele"'));
} else {
  const response = await fetch(`${dpBaseUrl}/blog/politique-voyage-entreprise-modele`, { redirect: "manual" });
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "/guides/politique-voyage-modele");
}
assert.ok(
  qfLocations.includes("https://quelleformationpro.fr/formation/excel-bureautique/nantes"),
  "known eligible city route must remain in the sitemap"
);
const qfHome = await fetchText(qfBaseUrl, "/");
assert.doesNotMatch(qfHome, /<meta[^>]+name=["']keywords["']/i, "QuelleFormation must not render global meta keywords");

for (const route of noindexRoutes) {
  const path = `/formation/${route}`;
  assert.ok(
    !qfLocations.includes(`https://quelleformationpro.fr${path}`),
    `${path} must be absent from the sitemap`
  );

  const html = await fetchText(qfBaseUrl, path);
  assert.match(html, /<meta name="robots" content="noindex, follow"\/>/);
  assert.match(
    html,
    new RegExp(`<link rel="canonical" href="https://quelleformationpro\\.fr${path}"\\/>`)
  );
  assert.match(html, /Aucune offre référencée/);
  assert.match(html, /Continuer sans fausse liste locale/);
  assert.doesNotMatch(html, /<meta[^>]+name=["']keywords["']/i);
  if (route.startsWith("excel-bureautique/")) {
    assert.match(html, /Aucun organisme proposant une formation Excel et bureautique/);
    assert.match(html, /<title>Formation Excel et bureautique à [^<]+ \| QuelleFormation\.fr<\/title>/);
    assert.ok(elementText(html, "h1").startsWith("Formation Excel et bureautique à "));
  }
  if (route.startsWith("langues-anglais/")) {
    assert.match(html, /Aucun organisme proposant une formation d&#x27;anglais professionnel/);
    assert.match(html, /<title>Formation d&#x27;anglais professionnel à [^<]+ \| QuelleFormation\.fr<\/title>/);
    assert.ok(elementText(html, "h1").startsWith("Formation d'anglais professionnel à "));
  }
  if (route.startsWith("sante-securite-travail/")) {
    assert.match(html, /<title>Formation en santé et sécurité au travail à [^<]+ \| QuelleFormation\.fr<\/title>/);
    assert.ok(elementText(html, "h1").startsWith("Formation en santé et sécurité au travail à "));
  }
  assert.doesNotMatch(html, /Formation (?:Anglais Professionnel|Santé et Sécurité au Travail|Excel et Bureautique)/);
  assert.doesNotMatch(html, /"@type":"(?:Course|FAQPage|ItemList)"/);
  for (const noindexRoute of noindexRoutes) {
    assert.ok(
      !html.includes(`href="/formation/${noindexRoute}"`),
      `${path} must not link to noindex route ${noindexRoute}`
    );
  }
}

for (const domaine of [
  "sante-securite-travail",
  "langues-anglais",
  "excel-bureautique",
]) {
  const html = await fetchText(qfBaseUrl, `/formation/${domaine}`);
  for (const route of noindexRoutes.filter((candidate) => candidate.startsWith(`${domaine}/`))) {
    assert.ok(!html.includes(`href="/formation/${route}"`), `${route} must not be internally linked`);
  }
}

const [dpHome, policyGuide, mealGuide, urssafGuide] = await Promise.all([
  fetchText(dpBaseUrl, "/"),
  fetchText(dpBaseUrl, "/guides/politique-voyage-modele"),
  fetchText(dpBaseUrl, "/guides/indemnites-repas-2026"),
  fetchText(dpBaseUrl, "/guides/urssaf-deplacement"),
]);

for (const expected of [
  "Méthode de choix par besoin",
  "4 besoins distingués",
  "Sources datées sur les règles sensibles",
  "Examiner ce besoin",
  "agences de voyages d'affaires (TMC)",
  "outils de réservation autonome (self-booking tools)",
  "carte de paiement d'entreprise (carte corporate)",
  "PME, ETI, grands comptes et jeunes entreprises : trouvez les solutions adaptées",
]) {
  assert.ok(dpHome.includes(expected), `homepage missing: ${expected}`);
}
assert.ok(!dpHome.includes("PME, ETI, grands comptes, startups… trouvez les solutions adaptées"));
for (const html of [dpHome, policyGuide, mealGuide, urssafGuide]) {
  assert.ok(!/<meta name="keywords"/i.test(html), "DeplacementPro must not render meta keywords");
}
for (const naturalNavLabel of ["Agences de voyages (TMC)", "Réservation autonome", "Cartes d&#x27;entreprise", "Notes de frais"]) {
  assert.ok(dpHome.includes(naturalNavLabel), `navigation missing natural label: ${naturalNavLabel}`);
}
const dpHeader = dpHome.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
for (const legacyNavLabel of [">TMC<", "Self-booking", "Cartes Corporate"]) {
  assert.ok(!dpHeader.includes(legacyNavLabel), `header retains legacy label: ${legacyNavLabel}`);
}
assert.ok(mealGuide.includes("<title>Indemnités repas 2026 — URSSAF | DeplacementPro.fr</title>"));
assert.ok(urssafGuide.includes("<title>URSSAF et déplacements professionnels en 2026 | DeplacementPro.fr</title>"));
for (const unsupported of ["indépendant", "Avis vérifiés", "15 à 30 %", "mise à jour le 23 août 2026"] ) {
  assert.ok(!dpHome.includes(unsupported), `homepage retains unsupported claim: ${unsupported}`);
}
for (const legacyVendorFragment of [
  "TMC tout-en-un : voyages, notes de frais, cartes corporate",
  "Navan (ex-TripActions) est une plateforme",
  "Comparatifs tête-à-tête",
  "Lire le comparatif",
  "Voir la fiche",
  "À partir de 0 € (offre gratuite)",
]) {
  assert.ok(!dpHome.includes(legacyVendorFragment), `homepage retains vendor corpus: ${legacyVendorFragment}`);
}
for (const expected of [
  "Notre sélection de solutions",
  "Notre parti pris privilégie d'abord les solutions qui couvrent le parcours le plus large",
  "Cet ordre général change si votre problème prioritaire est seulement la carte",
  "Notre premier choix général quand il faut réunir réservation, paiement et dépenses",
  "Notre option la plus ciblée lorsque le problème principal reste la collecte",
]) {
  assert.ok(dpHome.includes(expected), `homepage directory missing: ${expected}`);
}
const editorialSolutionSlugs = ["navan", "travelperk", "mooncard", "spendesk", "sap-concur", "expensya"];
const directoryOrder = [...dpHome.matchAll(/href="\/solution\/([^"]+)"/g)]
  .map((match) => match[1])
  .filter((slug) => editorialSolutionSlugs.includes(slug));
assert.deepEqual(directoryOrder.slice(0, editorialSolutionSlugs.length), editorialSolutionSlugs, "homepage solution links must preserve editorial order");

for (const expected of [
  "7,50 €",
  "10,40 €",
  "21,40 €",
  "76,60 €",
  "56,80 €",
  "Sources :",
  "mis à jour le 7 avril 2026",
  "consulté le 23 août 2026",
  "Légifrance",
  "CNIL",
]) {
  assert.ok(policyGuide.includes(expected), `policy guide missing: ${expected}`);
}
assert.ok(policyGuide.includes('href="/glossaire/politique-voyage"'));
assert.ok(policyGuide.includes("https://www.legifrance.gouv.fr/juri/id/JURITEXT000026439064/"), "policy guide missing atomic reimbursement source");
assert.ok(policyGuide.includes("Si l&#x27;entreprise géolocalise des véhicules utilisés par des salariés"));
assert.ok(!policyGuide.includes("Si un outil collecte une localisation"));

for (const [name, html] of [["meal", mealGuide], ["urssaf", urssafGuide]]) {
  for (const expected of ["7,50 €", "10,40 €", "21,40 €", "76,60 €", "56,80 €", "Sources :"]) {
    assert.ok(html.includes(expected), `${name} truth-only guide missing: ${expected}`);
  }
  assert.ok(html.includes("https://www.urssaf.fr/"), `${name} guide missing official URSSAF source`);
}
for (const exactUrssafCategory of [
  "repas pris sur le lieu de travail en raison de conditions particulières d&#x27;organisation ou d&#x27;horaires",
  "repas pris hors des locaux pendant un déplacement professionnel, sans que le salarié soit contraint de le prendre au restaurant",
  "repas pris au restaurant pendant un déplacement professionnel lorsque le salarié y est contraint",
]) {
  assert.ok(mealGuide.includes(exactUrssafCategory), `meal guide missing URSSAF category: ${exactUrssafCategory}`);
}
assert.ok(!mealGuide.includes("repas hors des locaux mais sans déplacement"));
for (const exactSource of [
  "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000052198430/2026-05-09",
  "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033713008/2026-03-04",
  "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051765336",
]) {
  assert.ok(urssafGuide.includes(exactSource), `URSSAF guide missing atomic source: ${exactSource}`);
}
assert.ok(urssafGuide.includes("régime URSSAF dit de petit déplacement, qui vise les salariés des entreprises de travail temporaire, des travaux publics, du bâtiment, de la tôlerie, de la chaudronnerie et de la tuyauterie industrielle"));
assert.ok(urssafGuide.includes("Allocations forfaitaires de repas en déplacement en 2026"));
assert.ok(!urssafGuide.includes("JORFTEXT000000782916"));
assert.ok(!urssafGuide.includes("En petit déplacement, seuls les repas sont indemnisés"));
assert.ok(urssafGuide.includes("trois ans à compter de la fin de l&#x27;année civile"));
assert.ok(urssafGuide.includes("effectivement utilisées conformément à leur objet"));

for (const [name, html] of [
  ["policy", policyGuide],
  ["meal", mealGuide],
  ["urssaf", urssafGuide],
]) {
  for (const legacyVendorFragment of [
    "Solutions recommandées",
    "Voir l’avis",
    "Voir l&#x27;avis",
    "Navan vs TravelPerk",
    "TMC tout-en-un : voyages, notes de frais, cartes corporate",
    "À partir de 0 € (offre gratuite)",
  ]) {
    assert.ok(!html.includes(legacyVendorFragment), `${name} guide retains vendor shell: ${legacyVendorFragment}`);
  }
}

for (const expected of [
  "deux conditions sont cumulativement remplies",
  "d'au moins 50 km",
  "les transports en commun ne permettent pas de parcourir cette distance en moins de 1 h 30",
]) {
  assert.ok(urssafGuide.includes(expected), `URSSAF grand displacement FAQ missing: ${expected}`);
}
assert.ok(!urssafGuide.includes("50 km ou temps de trajet"), "URSSAF FAQ still treats the two tests as alternatives");

console.log(JSON.stringify({
  status: "PASS",
  evidence: builtMode ? "built HTML" : "served HTTP",
  qfSitemapUrls: qfLocations.length,
  qfNoindexPagesChecked: noindexRoutes.length,
  dpSitemapUrls: dpLocations.length,
  dpOwnersChecked: ["/", "/guides/politique-voyage-modele"],
  truthOnlyGuidesChecked: ["/guides/indemnites-repas-2026", "/guides/urssaf-deplacement"],
}, null, 2));
