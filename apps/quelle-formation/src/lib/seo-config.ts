/**
 * SEO Configuration for quelleformationpro.fr
 */

const currentYear = new Date().getFullYear();

export const seoConfig = {
    siteName: "QuelleFormation.fr",
    siteUrl: "https://quelleformationpro.fr",
    defaultTitle: `QuelleFormation.fr — Comparateur de Formations Professionnelles ${currentYear}`,
    defaultDescription:
        "Comparez les meilleures formations professionnelles en France. Prix, avis, CPF, organismes certifiés Qualiopi. Trouvez la formation qui vous correspond.",
    locale: "fr_FR",
    language: "fr",
    twitterHandle: "@quelleformation",
    ogImage: "/og-image.png",
    logo: "/logo.png",
    currentYear,
    theme: {
        accentColor: "#006C71",
        primaryColor: "#FF7E6B",
    },
};

export function buildTitle(title: string): string {
    return `${title} | ${seoConfig.siteName}`;
}

export function buildCanonical(path: string): string {
    return `${seoConfig.siteUrl}${path}`;
}
