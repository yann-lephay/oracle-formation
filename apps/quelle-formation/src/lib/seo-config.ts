/**
 * SEO Configuration for quelle-formation.fr
 */

export const seoConfig = {
    siteName: "QuelleFormation.fr",
    siteUrl: "https://quelle-formation.fr",
    defaultTitle: "QuelleFormation.fr — Comparateur de Formations Professionnelles 2026",
    defaultDescription:
        "Comparez les meilleures formations professionnelles en France. Prix, avis, CPF, organismes certifiés Qualiopi. Trouvez la formation qui vous correspond.",
    locale: "fr_FR",
    twitterHandle: "@quelleformation",
    ogImage: "/og-image.png",
};

export function buildTitle(title: string): string {
    return `${title} | ${seoConfig.siteName}`;
}

export function buildCanonical(path: string): string {
    return `${seoConfig.siteUrl}${path}`;
}
