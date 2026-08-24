/**
 * Closed noindex cohort approved in the 2026-08-23 gap-14 brief.
 *
 * These routes have neither a local campus nor a remote offer. Keep the
 * decision centralized so metadata, sitemap and internal linking cannot drift.
 */
export const noindexFormationVilleKeys = [
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

const noindexFormationVilleKeySet = new Set<string>(noindexFormationVilleKeys);

export function getFormationVilleKey(domaineSlug: string, villeSlug: string): string {
  return `${domaineSlug}/${villeSlug}`;
}

export function isNoindexFormationVille(domaineSlug: string, villeSlug: string): boolean {
  return noindexFormationVilleKeySet.has(getFormationVilleKey(domaineSlug, villeSlug));
}

const noindexDomaineLabels: Partial<Record<string, string>> = {
  "excel-bureautique": "une formation Excel et bureautique",
  "langues-anglais": "une formation d'anglais professionnel",
};

export function getNoindexFormationVilleDescription(
  domaineSlug: string,
  domaineName: string,
  villeName: string,
): string {
  const formationLabel = noindexDomaineLabels[domaineSlug] ?? `une formation ${domaineName.toLowerCase()}`;
  return `Aucun organisme proposant ${formationLabel} n'est actuellement référencé à ${villeName}. Consultez le guide national et les villes avec une offre vérifiée.`;
}
