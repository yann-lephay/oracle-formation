import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { domaines } from "../apps/quelle-formation/src/lib/data/domaines";
import { topVilles } from "../apps/quelle-formation/src/lib/data/villes";
import { organismes, getOrganismesByDomaineAndVille } from "../apps/quelle-formation/src/lib/data/organismes";
import { comparisons as qfComparisons } from "../apps/quelle-formation/src/lib/data/comparisons";
import { indexableBlogArticles } from "../apps/quelle-formation/src/lib/data/blog";
import { guides as qfGuides } from "../apps/quelle-formation/src/lib/data/guides";
import { personas as qfPersonas } from "../apps/quelle-formation/src/lib/data/personas";
import { metiers } from "../apps/quelle-formation/src/lib/data/metiers";
import { glossaryTerms as qfGlossary } from "../apps/quelle-formation/src/lib/data/glossaire";
import {
  getNoindexFormationVilleDescription,
  noindexFormationVilleKeys,
  isNoindexFormationVille,
} from "../apps/quelle-formation/src/lib/formation-ville-index-policy";

import { categories } from "../apps/deplacement-pro/src/lib/data/categories";
import { solutions } from "../apps/deplacement-pro/src/lib/data/solutions";
import { comparisons as dpComparisons } from "../apps/deplacement-pro/src/lib/data/comparisons";
import { guides as dpGuides } from "../apps/deplacement-pro/src/lib/data/guides";
import { villes as dpVilles } from "../apps/deplacement-pro/src/lib/data/villes";
import { blogPosts } from "../apps/deplacement-pro/src/lib/data/blog";
import { personas as dpPersonas } from "../apps/deplacement-pro/src/lib/data/personas";
import { integrations } from "../apps/deplacement-pro/src/lib/data/integrations";
import { glossaryTerms as dpGlossary, getGlossaryTermBySlug } from "../apps/deplacement-pro/src/lib/data/glossaire";
import { secteurs } from "../apps/deplacement-pro/src/lib/data/secteurs";
import { isRedirectedBlogSlug } from "../apps/deplacement-pro/src/lib/content-owner-policy";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const scriptPath = fileURLToPath(import.meta.url);

if (process.argv.includes("--mutations")) {
  for (const mutation of [
    "drop-noindex-route",
    "restore-home-claim",
    "restore-home-vendor-corpus",
    "restore-truth-guide-vendor",
    "grand-displacement-or",
    "stale-urssaf-bar",
    "cockpit-origin-wildcard",
    "remove-atomic-legal-source",
    "restore-universal-small-travel",
    "restore-abrogated-order",
    "restore-qf-global-keywords",
    "restore-qf-noindex-title-case",
    "restore-dp-profile-ellipsis",
  ] as const) {
    const result = spawnSync(process.execPath, ["--import", "tsx", scriptPath], {
      cwd: repoRoot,
      env: { ...process.env, GAP14_MUTATION: mutation },
      encoding: "utf8",
    });
    assert.notEqual(result.status, 0, `mutation ${mutation} should be rejected`);
    console.log(`MUTATION_CAUGHT ${mutation}`);
  }
  process.exit(0);
}

const expectedNoindexKeys = [
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
] as const;

const mutation = process.env.GAP14_MUTATION;
const cockpitOrigin = "https://cockpit-gamma-ten.vercel.app";
const trackerFiles = [
  "apps/quelle-formation/src/components/CookieFreeEvents.tsx",
  "apps/deplacement-pro/src/components/CookieFreeEvents.tsx",
];
const configFiles = [
  "apps/quelle-formation/next.config.ts",
  "apps/deplacement-pro/next.config.ts",
];
for (const trackerFile of trackerFiles) {
  const tracker = readFileSync(new URL(`../${trackerFile}`, import.meta.url), "utf8");
  assert.match(tracker, new RegExp(`\\?\\? "${cockpitOrigin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/api/events"`));
}
for (const configFile of configFiles) {
  let config = readFileSync(new URL(`../${configFile}`, import.meta.url), "utf8");
  if (mutation === "cockpit-origin-wildcard") config = config.replace(cockpitOrigin, "*");
  const connectSrc = config.match(/connect-src ([^;]+);/)?.[1] ?? "";
  assert.equal(connectSrc, `'self' ${cockpitOrigin}`, `${configFile}: connect-src must allow only self and the tracker origin`);
  assert.equal(config.split(cockpitOrigin).length - 1, 1, `${configFile}: Cockpit origin must occur exactly once`);
}
const policyKeys = mutation === "drop-noindex-route"
  ? noindexFormationVilleKeys.slice(1)
  : [...noindexFormationVilleKeys];

assert.deepEqual(policyKeys, [...expectedNoindexKeys], "the closed QF noindex cohort drifted");
assert.equal(new Set(policyKeys).size, 18, "the QF noindex cohort must contain 18 unique routes");

for (const key of policyKeys) {
  const [domaineSlug, villeSlug] = key.split("/");
  const offers = getOrganismesByDomaineAndVille(domaineSlug, villeSlug);
  assert.equal(offers.local.length, 0, `${key} unexpectedly has a local offer`);
  assert.equal(offers.remote.length, 0, `${key} unexpectedly has a remote offer`);
  assert.equal(isNoindexFormationVille(domaineSlug, villeSlug), true, `${key} is not governed by the policy`);
}

assert.equal(isNoindexFormationVille("developpeur-web", "paris"), false, "an out-of-scope QF route was noindexed");

const qfSitemapCount =
  11 +
  domaines.length +
  domaines.length * topVilles.length - policyKeys.length +
  organismes.length +
  qfComparisons.length +
  1 + indexableBlogArticles.length +
  qfGuides.length +
  qfPersonas.length +
  metiers.length +
  qfGlossary.length;
assert.equal(qfSitemapCount, 248, "QF sitemap target must be 248 URLs");

let qfCitySource = readFileSync("apps/quelle-formation/src/app/formation/[domaine]/[ville]/page.tsx", "utf8");
if (mutation === "restore-qf-noindex-title-case") qfCitySource = qfCitySource.replace("Formation d'anglais professionnel", "Formation Anglais Professionnel");
const qfDomainSource = readFileSync("apps/quelle-formation/src/app/formation/[domaine]/page.tsx", "utf8");
const qfSitemapSource = readFileSync("apps/quelle-formation/src/app/sitemap.ts", "utf8");
let qfLayoutSource = readFileSync("apps/quelle-formation/src/app/layout.tsx", "utf8");
if (mutation === "restore-qf-global-keywords") qfLayoutSource += "\nkeywords: ['formation professionnelle']";
assert.match(qfCitySource, /robots: isNoindex \? \{ index: false, follow: true \}/);
assert.match(qfCitySource, /Aucune offre référencée/);
assert.match(qfCitySource, /!isNoindexFormationVille\(dSlug, v\.slug\)/);
assert.match(qfDomainSource, /!isNoindexFormationVille\(slug, ville\.slug\)/);
assert.match(qfSitemapSource, /!isNoindexFormationVille\(d\.slug, v\.slug\)/);
assert.equal(
  getNoindexFormationVilleDescription("excel-bureautique", "Excel Bureautique", "Paris"),
  "Aucun organisme proposant une formation Excel et bureautique n'est actuellement référencé à Paris. Consultez le guide national et les villes avec une offre vérifiée.",
);
assert.equal(
  getNoindexFormationVilleDescription("langues-anglais", "Anglais Professionnel", "Lyon"),
  "Aucun organisme proposant une formation d'anglais professionnel n'est actuellement référencé à Lyon. Consultez le guide national et les villes avec une offre vérifiée.",
);
assert.match(qfCitySource, /getNoindexFormationVilleDescription\(domaine\.slug, domaine\.name, ville\.name\)/);
for (const label of [
  "Formation d'anglais professionnel",
  "Formation en santé et sécurité au travail",
  "Formation Excel et bureautique",
]) assert.match(qfCitySource, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
for (const legacyLabel of [
  "Formation Anglais Professionnel",
  "Formation Santé et Sécurité au Travail",
  "Formation Excel et Bureautique",
]) assert.doesNotMatch(qfCitySource, new RegExp(legacyLabel));
assert.doesNotMatch(qfLayoutSource, /\bkeywords\s*:/, "QuelleFormation must not render one global keywords list on every route");

const dpHeaderSource = readFileSync("apps/deplacement-pro/src/components/Header.tsx", "utf8");
for (const naturalLabel of ["Agences de voyages (TMC)", "Réservation autonome", "Cartes d'entreprise", "Notes de frais"]) {
  assert.match(dpHeaderSource, new RegExp(naturalLabel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
for (const legacyLabel of ['label: "TMC"', 'label: "Self-booking"', 'label: "Cartes Corporate"']) {
  assert.doesNotMatch(dpHeaderSource, new RegExp(legacyLabel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}

const dpSitemapCount =
  12 + categories.length + solutions.length + dpComparisons.length + dpGuides.length +
  dpVilles.length + dpPersonas.length + blogPosts.filter((post) => !isRedirectedBlogSlug(post.slug)).length + integrations.length +
  dpGlossary.length + secteurs.length;
assert.equal(dpSitemapCount, 137, "DP sitemap must contain 137 canonical owners");

const dpRedirectConfig = readFileSync("apps/deplacement-pro/next.config.ts", "utf8");
const dpBlogRoute = readFileSync("apps/deplacement-pro/src/app/blog/[slug]/page.tsx", "utf8");
const dpSitemapSource = readFileSync("apps/deplacement-pro/src/app/sitemap.ts", "utf8");
assert.match(dpRedirectConfig, /source: "\/blog\/politique-voyage-entreprise-modele"[\s\S]*destination: "\/guides\/politique-voyage-modele"[\s\S]*permanent: true/);
assert.match(dpBlogRoute, /!isRedirectedBlogSlug\(p\.slug\)/, "legacy blog owner must be removed from static params");
assert.match(dpSitemapSource, /!isRedirectedBlogSlug\(p\.slug\)/, "legacy blog owner must be removed from sitemap");
assert.equal(isRedirectedBlogSlug("politique-voyage-entreprise-modele"), true);
assert.equal(isRedirectedBlogSlug("indemnites-repas-deplacement-baremes-urssaf-2026"), false);

let homeCorpus = [
  "apps/deplacement-pro/src/app/page.tsx",
  "apps/deplacement-pro/src/app/layout.tsx",
  "apps/deplacement-pro/src/components/Footer.tsx",
  "apps/deplacement-pro/src/lib/seo-config.ts",
].map((file) => readFileSync(file, "utf8")).join("\n");
if (mutation === "restore-home-claim") homeCorpus += "\nAvis vérifiés";
if (mutation === "restore-home-vendor-corpus") homeCorpus += "\nsol.description";
if (mutation === "restore-dp-profile-ellipsis") homeCorpus += "\nPME, ETI, grands comptes, startups… trouvez les solutions adaptées";
for (const bannedClaim of [
  /avis vérifiés/i,
  /\bindépendant\b/i,
  /15[- à]30\s*%[^\n]*économ/i,
]) {
  assert.doesNotMatch(homeCorpus, bannedClaim, `unsupported homepage claim restored: ${bannedClaim}`);
}
assert.match(homeCorpus, /Quel problème doit disparaître en premier/);
assert.match(homeCorpus, /const editorialSolutions = solutions;/);
assert.match(homeCorpus, /const editorialReasons:/);
assert.match(homeCorpus, /Notre parti pris privilégie d(?:'|&apos;)abord les solutions qui couvrent le parcours le plus large/);
for (const slug of ["navan", "travelperk", "mooncard", "spendesk", "sap-concur", "expensya"]) {
  assert.match(homeCorpus, new RegExp(`(?:["']?${slug}["']?):\\s*`), `editorial reason missing for ${slug}`);
}
assert.doesNotMatch(homeCorpus, /localeCompare/);
assert.match(homeCorpus, /agences de voyages d'affaires \(TMC\)/);
assert.match(homeCorpus, /outils de réservation autonome \(self-booking tools\)/);
assert.match(homeCorpus, /carte de paiement d'entreprise \(carte corporate\)/);
assert.match(homeCorpus, /PME, ETI, grands comptes et jeunes entreprises : trouvez les solutions adaptées/);
assert.doesNotMatch(homeCorpus, /PME, ETI, grands comptes, startups… trouvez les solutions adaptées/);
assert.doesNotMatch(readFileSync("apps/deplacement-pro/src/app/layout.tsx", "utf8"), /\bkeywords\s*:/);
for (const legacyVendorExpression of [
  /sol\.tagline/,
  /sol\.description/,
  /sol\.priceRange/,
  /comparisons\.map/,
]) {
  assert.doesNotMatch(homeCorpus, legacyVendorExpression, `homepage restored vendor corpus: ${legacyVendorExpression}`);
}

const guidePageSource = readFileSync("apps/deplacement-pro/src/app/guides/[slug]/page.tsx", "utf8");
assert.match(guidePageSource, /const isTruthOnlyGuide = truthOnlyGuideSlugs\.has\(guide\.slug\)/);
assert.match(guidePageSource, /\{!isTruthOnlyGuide &&/);

const policyGuide = dpGuides.find((guide) => guide.slug === "politique-voyage-modele");
assert(policyGuide, "policy guide is missing");
let policyCorpus = JSON.stringify(policyGuide);
if (mutation === "stale-urssaf-bar") policyCorpus = policyCorpus.replace("21,40", "20,70");
for (const currentValue of ["7,50", "10,40", "21,40", "76,60", "56,80"]) {
  assert.match(policyCorpus, new RegExp(currentValue.replace(",", ",")), `missing current URSSAF value ${currentValue}`);
}
for (const staleValue of ["7,30", "10,10", "20,70", "74,30", "55,10"]) {
  assert.doesNotMatch(policyCorpus, new RegExp(staleValue.replace(",", ",")), `stale URSSAF value ${staleValue}`);
}
assert.equal(policyGuide.relatedGlossary?.slug, "politique-voyage");
assert(policyGuide.sources?.some((source) => source.url.includes("urssaf.fr/accueil/outils-documentation/taux-baremes")));
assert(policyGuide.sources?.some((source) => source.url.includes("legifrance.gouv.fr/codes/article_lc")));
assert(policyGuide.sources?.some((source) => source.url.includes("cnil.fr/fr/la-geolocalisation")));
let policySourceUrls = policyGuide.sources?.map((source) => source.url) ?? [];
if (mutation === "remove-atomic-legal-source") {
  policySourceUrls = policySourceUrls.filter((url) => url !== "https://www.legifrance.gouv.fr/juri/id/JURITEXT000026439064/");
}
assert(policySourceUrls.includes("https://www.legifrance.gouv.fr/juri/id/JURITEXT000026439064/"), "policy guide lacks the atomic reimbursement authority");
assert.match(policyCorpus, /Si l'entreprise géolocalise des véhicules utilisés par des salariés/);
assert.doesNotMatch(policyCorpus, /Si un outil collecte une localisation/);

assert.equal(dpGuides.find((guide) => guide.slug === "indemnites-repas-2026")?.metaTitle, "Indemnités repas 2026 — URSSAF");
assert.equal(dpGuides.find((guide) => guide.slug === "urssaf-deplacement")?.metaTitle, "URSSAF et déplacements professionnels en 2026");

for (const slug of ["indemnites-repas-2026", "urssaf-deplacement"]) {
  const guide = dpGuides.find((candidate) => candidate.slug === slug);
  assert(guide, `${slug} is missing`);
  const corpus = JSON.stringify(guide);
  for (const staleValue of ["7,30", "10,10", "20,70", "74,30", "55,10"]) {
    assert.doesNotMatch(corpus, new RegExp(staleValue.replace(",", ",")), `${slug} still contains ${staleValue}`);
  }
  assert(guide.sources?.some((source) => source.url.includes("urssaf.fr/accueil/outils-documentation/taux-baremes")), `${slug} lacks the dated URSSAF source`);
}

for (const slug of ["politique-voyage-modele", "indemnites-repas-2026", "urssaf-deplacement"]) {
  const guide = dpGuides.find((candidate) => candidate.slug === slug);
  assert(guide, `${slug} is missing`);
  let corpus = JSON.stringify(guide);
  if (mutation === "restore-truth-guide-vendor" && slug === "politique-voyage-modele") {
    corpus += solutions[0].name;
  }
  for (const solution of solutions) {
    assert.ok(!corpus.includes(solution.name), `${slug} retains seller claim corpus for ${solution.name}`);
  }
}

const urssafGuide = dpGuides.find((guide) => guide.slug === "urssaf-deplacement");
assert(urssafGuide, "urssaf-deplacement is missing");
let urssafCorpus = JSON.stringify(urssafGuide);
if (mutation === "restore-universal-small-travel") {
  urssafCorpus = urssafCorpus.replace(
    "Les trois catégories générales de repas décrites ci-dessous concernent les allocations forfaitaires de repas selon le lieu et les contraintes du salarié. Elles ne doivent pas être confondues avec le régime URSSAF dit de petit déplacement, qui vise les salariés des entreprises de travail temporaire, des travaux publics, du bâtiment, de la tôlerie, de la chaudronnerie et de la tuyauterie industrielle.",
    "L'URSSAF distingue universellement le petit déplacement du grand déplacement.",
  );
}
assert.match(urssafCorpus, /régime URSSAF dit de petit déplacement, qui vise les salariés des entreprises de travail temporaire, des travaux publics, du bâtiment, de la tôlerie, de la chaudronnerie et de la tuyauterie industrielle/);
assert.match(urssafCorpus, /Allocations forfaitaires de repas en déplacement en 2026/);
assert.doesNotMatch(urssafCorpus, /L'URSSAF distingue universellement le petit déplacement du grand déplacement/);
assert.doesNotMatch(urssafCorpus, /En petit déplacement, seuls les repas sont indemnisés/);
assert.doesNotMatch(urssafCorpus, /La prescription est de 3 ans/);
let urssafSourceUrls = urssafGuide.sources?.map((source) => source.url) ?? [];
if (mutation === "restore-abrogated-order") {
  urssafSourceUrls = urssafSourceUrls
    .filter((url) => !url.includes("JORFTEXT000052198430"))
    .concat("https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000782916/");
}
for (const legalUrl of [
  "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000052198430/2026-05-09",
  "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033713008/2026-03-04",
  "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051765336",
]) {
  assert(urssafSourceUrls.includes(legalUrl), `urssaf guide lacks atomic source ${legalUrl}`);
}
assert.ok(!urssafSourceUrls.some((url) => url.includes("JORFTEXT000000782916")), "urssaf guide still cites the repealed 2002 order");
assert.match(urssafCorpus, /effectivement utilisées conformément à leur objet/);
assert.match(urssafCorpus, /trois ans à compter de la fin de l'année civile/);
const grandDisplacementFaq = urssafGuide.faq.find((item) => item.question === "Comment prouver un grand déplacement ?");
assert(grandDisplacementFaq, "grand displacement FAQ is missing");
let grandDisplacementAnswer = grandDisplacementFaq.answer;
if (mutation === "grand-displacement-or") {
  grandDisplacementAnswer = grandDisplacementAnswer.replace(", et les transports en commun", ", ou les transports en commun");
}
assert.match(grandDisplacementAnswer, /deux conditions sont cumulativement remplies/);
assert.match(grandDisplacementAnswer, /d'au moins 50 km, et les transports en commun ne permettent pas de parcourir cette distance en moins de 1 h 30/);
assert.doesNotMatch(grandDisplacementAnswer, /50 km[^.]*\bou\b[^.]*1 h 30/i);

const mealGuide = dpGuides.find((guide) => guide.slug === "indemnites-repas-2026");
assert(mealGuide, "indemnites-repas-2026 is missing");
const mealCorpus = JSON.stringify(mealGuide);
for (const exactUrssafCategory of [
  "repas pris sur le lieu de travail en raison de conditions particulières d'organisation ou d'horaires",
  "repas pris hors des locaux pendant un déplacement professionnel, sans que le salarié soit contraint de le prendre au restaurant",
  "repas pris au restaurant pendant un déplacement professionnel lorsque le salarié y est contraint",
]) {
  assert.match(mealCorpus, new RegExp(exactUrssafCategory.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
assert.doesNotMatch(mealCorpus, /repas hors des locaux mais sans déplacement/);

const glossaryOwner = getGlossaryTermBySlug("politique-voyage");
assert.equal(glossaryOwner?.relatedGuide?.slug, "politique-voyage-modele");
assert.doesNotMatch(JSON.stringify(glossaryOwner), /85-95\s*%/);

execFileSync("git", [
  "diff", "--quiet", "--",
  "apps/quelle-formation/src/lib/data/organismes.ts",
  "apps/quelle-formation/src/lib/data/comparisons.ts",
  "apps/quelle-formation/src/lib/data/blog.ts",
], { cwd: repoRoot });

console.log(JSON.stringify({
  status: "PASS",
  qfNoindexRoutes: policyKeys.length,
  qfSitemapTarget: qfSitemapCount,
  dpSitemapTarget: dpSitemapCount,
  dpOwners: ["/", "/guides/politique-voyage-modele"],
  truthOnlyGuides: ["/guides/indemnites-repas-2026", "/guides/urssaf-deplacement"],
}, null, 2));
