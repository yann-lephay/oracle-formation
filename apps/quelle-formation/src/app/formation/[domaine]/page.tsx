import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Clock,
    Euro,
    MapPin,
    BookOpen,
    TrendingUp,
    Award,
    GraduationCap,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { domaines, getDomaineBySlug } from "@/lib/data/domaines";
import { getOrganismesByDomaine } from "@/lib/data/organismes";
import { topVilles } from "@/lib/data/villes";
import { generateFAQSchema, generateBreadcrumbSchema, generateItemListSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { ComparisonCta } from "@/components/ComparisonCta";
import { OrganismeFilters } from "@/components/OrganismeFilters";

interface PageProps {
    params: Promise<{ domaine: string }>;
}

export const revalidate = false;
export async function generateStaticParams() {
    return domaines.map((d) => ({ domaine: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { domaine: slug } = await params;
    const domaine = getDomaineBySlug(slug);
    if (!domaine) return {};

    return {
        title: domaine.metaTitle,
        description: domaine.metaDescription,
        alternates: { canonical: `${seoConfig.siteUrl}/formation/${slug}` },
        openGraph: {
            title: domaine.metaTitle,
            description: domaine.metaDescription,
            url: `${seoConfig.siteUrl}/formation/${slug}`,
            type: "website",
            locale: "fr_FR",
        },
    };
}

export default async function FormationDomainePage({ params }: PageProps) {
    const { domaine: slug } = await params;
    const domaine = getDomaineBySlug(slug);
    if (!domaine) notFound();

    const organismes = getOrganismesByDomaine(slug);
    const hasClicCampusSpotlight = slug === "langues-anglais";
    const presentedOrganismeCount = organismes.length + (hasClicCampusSpotlight ? 1 : 0);

    const faqItems = [
        {
            question: `Combien coûte une formation ${domaine.name.toLowerCase()} ?`,
            answer: `Les formations ${domaine.name.toLowerCase()} coûtent en moyenne ${domaine.priceRange}. Les prix varient selon la durée, le format (présentiel, e-learning, bootcamp) et l'organisme. La plupart sont éligibles au CPF.`,
        },
        {
            question: `Quelle est la durée d'une formation ${domaine.name.toLowerCase()} ?`,
            answer: `La durée moyenne est de ${domaine.averageDuration}. Les bootcamps intensifs sont plus courts (2-3 mois) tandis que les parcours diplômants peuvent durer 12-18 mois.`,
        },
        {
            question: `La formation ${domaine.name.toLowerCase()} est-elle éligible au CPF ?`,
            answer: domaine.cpfEligible
                ? `Oui, la majorité des formations ${domaine.name.toLowerCase()} sont éligibles au CPF. Vérifiez sur MonCompteFormation.gouv.fr que l'organisme et le parcours choisi sont bien référencés.`
                : `Certaines formations ${domaine.name.toLowerCase()} seulement sont éligibles au CPF. Vérifiez sur MonCompteFormation.gouv.fr.`,
        },
        {
            question: `Quel salaire après une formation ${domaine.name.toLowerCase()} ?`,
            answer: `Le salaire moyen après une formation ${domaine.name.toLowerCase()} est de ${domaine.salaryRange}. Ce chiffre varie selon l'expérience, la localisation et l'entreprise.`,
        },
    ];

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateItemListSchema({
                            name: `Organismes de formation ${domaine.name}`,
                            description: domaine.description,
                            url: `${seoConfig.siteUrl}/formation/${slug}`,
                            items: [
                                ...organismes.map((o) => ({
                                    name: o.name,
                                    url: `${seoConfig.siteUrl}/organisme/${o.slug}`,
                                })),
                                ...(hasClicCampusSpotlight
                                    ? [{
                                        name: "Clic Campus",
                                        url: "https://clic-campus.fr/formation-anglais-en-ligne-cpf/",
                                    }]
                                    : []),
                            ],
                        })
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(faqItems)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Formations", url: `${seoConfig.siteUrl}/formations` },
                            {
                                name: `Formation ${domaine.name}`,
                                url: `${seoConfig.siteUrl}/formation/${slug}`,
                            },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-foreground">
                                Accueil
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">Formation {domaine.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            {domaine.cpfEligible && (
                                <span className="badge badge-cpf">Éligible CPF</span>
                            )}
                            <span className="badge">
                                Demande {domaine.demandLevel}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-foreground">
                            Formation {domaine.name} en {new Date().getFullYear()}
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                            {domaine.description}
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: Euro,
                                    label: "Prix moyen",
                                    value: domaine.priceRange,
                                },
                                {
                                    icon: Clock,
                                    label: "Durée",
                                    value: domaine.averageDuration,
                                },
                                {
                                    icon: TrendingUp,
                                    label: "Salaire moyen",
                                    value: domaine.salaryRange,
                                },
                                {
                                    icon: BookOpen,
                                    label: "Organismes",
                                    value: hasClicCampusSpotlight
                                        ? `${presentedOrganismeCount} présenté`
                                        : `${presentedOrganismeCount} comparés`,
                                },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="glass-card p-4"
                                >
                                    <metric.icon className="w-5 h-5 text-accent mb-2" />
                                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                                    <p className="text-sm font-bold text-foreground">{metric.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {hasClicCampusSpotlight && (
                <section className="border-b border-border bg-surface/50">
                    <div className="container-narrow mx-auto px-4 py-10 md:py-12">
                        <div className="glass-card overflow-hidden border-accent/20 bg-background">
                            <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                                <div>
                                    <div className="mb-4 flex flex-wrap items-center gap-2">
                                        <span className="badge badge-qualiopi">Partenaire</span>
                                        <span className="text-sm font-semibold text-accent">
                                            Clic Campus
                                        </span>
                                    </div>

                                    <h2 className="mb-3 text-2xl font-extrabold text-foreground md:text-3xl">
                                        Une formation d&apos;anglais personnalisée et à distance
                                    </h2>
                                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                                        Clic Campus propose des parcours d&apos;anglais adaptés au niveau,
                                        aux objectifs professionnels et aux disponibilités de chaque
                                        apprenant. La formation associe des cours individuels en
                                        visioconférence avec un formateur dédié et des ressources en ligne.
                                    </p>

                                    <div className="mt-5 flex flex-col gap-2 text-sm text-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
                                        {[
                                            "Parcours personnalisé",
                                            "Cours individuels à distance",
                                            "Financement CPF selon éligibilité",
                                        ].map((item) => (
                                            <span key={item} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:w-64">
                                    <a
                                        href="https://clic-campus.fr/formation-anglais-en-ligne-cpf/"
                                        target="_blank"
                                        rel="sponsored noopener noreferrer"
                                        className="btn-primary w-full"
                                    >
                                        Découvrir Clic Campus
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <p className="mt-2 text-center text-xs text-muted-foreground">
                                        Partenariat commercial
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Organismes */}
            {organismes.length > 0 && (
                <section className="section-padding">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
                            {organismes.length} organismes pour se former en {domaine.name}
                        </h2>

                        <OrganismeFilters organismes={organismes} pageSlug={slug} />
                    </div>
                </section>
            )}

            {organismes.length === 0 && !hasClicCampusSpotlight && (
                <section className="section-padding">
                    <div className="container-narrow mx-auto px-4">
                        <div className="glass-card p-8 text-center">
                            <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">
                                Nous travaillons à ajouter des organismes pour ce domaine. Revenez bientôt !
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Aide à la comparaison */}
            <section className="section-padding bg-accent" id="comparer">
                <div className="container-narrow mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-3">
                            Besoin d&apos;aide pour choisir votre formation {domaine.name} ?
                        </h2>
                        <p className="text-accent-foreground/70 max-w-2xl mx-auto">
                            Comparez les organismes, leurs prix et leurs formats sans
                            transmettre vos coordonnées.
                        </p>
                    </div>
                    <ComparisonCta />
                </div>
            </section>

            {/* Villes */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                        Formation {domaine.name} par ville
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Trouvez une formation {domaine.name.toLowerCase()} près de chez vous.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {topVilles.map((ville) => (
                            <Link
                                key={ville.slug}
                                href={`/formation/${slug}/${ville.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {ville.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    Formation {domaine.shortName}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
                        Questions fréquentes sur la formation {domaine.name}
                    </h2>

                    <div className="max-w-3xl space-y-4">
                        {faqItems.map((faq) => (
                            <details
                                key={faq.question}
                                className="glass-card p-5 group open:pb-6"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-foreground">
                                    {faq.question}
                                    <Award className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
