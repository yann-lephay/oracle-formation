import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Star,
    Clock,
    Euro,
    MapPin,
    ArrowRight,
    CheckCircle2,
    BookOpen,
    TrendingUp,
    Award,
    GraduationCap,
} from "lucide-react";
import { domaines, getDomaineBySlug } from "@/lib/data/domaines";
import { getOrganismesByDomaine } from "@/lib/data/organismes";
import { topVilles } from "@/lib/data/villes";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

interface PageProps {
    params: Promise<{ domaine: string }>;
}

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
                    __html: JSON.stringify(generateFAQSchema(faqItems)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Formations", url: `${seoConfig.siteUrl}/#domaines` },
                            {
                                name: `Formation ${domaine.name}`,
                                url: `${seoConfig.siteUrl}/formation/${slug}`,
                            },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient text-white">
                <div className="container-narrow mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                            <Link href="/" className="hover:text-white/80">
                                Accueil
                            </Link>
                            <span>/</span>
                            <span className="text-white/80">Formation {domaine.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            {domaine.cpfEligible && (
                                <span className="badge badge-cpf">Éligible CPF</span>
                            )}
                            <span className="badge bg-white/10 text-white/90 border border-white/20">
                                Demande {domaine.demandLevel}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                            Formation {domaine.name} en 2026
                        </h1>

                        <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
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
                                    value: `${organismes.length} comparés`,
                                },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                                >
                                    <metric.icon className="w-5 h-5 text-primary-300 mb-2" />
                                    <p className="text-xs text-white/50">{metric.label}</p>
                                    <p className="text-sm font-bold text-white">{metric.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Organismes */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-surface-900 mb-8">
                        {organismes.length} organismes pour se former en {domaine.name}
                    </h2>

                    {organismes.length > 0 ? (
                        <div className="space-y-6">
                            {organismes.map((org, index) => (
                                <div key={org.slug} className="glass-card p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Rank */}
                                        <div className="flex items-center gap-4 md:flex-col md:items-center shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                                <span className="text-lg font-bold text-primary-600">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                <span className="text-sm font-semibold">{org.rating}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-surface-900">
                                                        {org.name}
                                                    </h3>
                                                    <p className="text-sm text-surface-500">{org.tagline}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-primary-600">
                                                        {org.priceRange}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-surface-600 mb-4 line-clamp-3">
                                                {org.description.slice(0, 250)}…
                                            </p>

                                            {/* Pros */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                                {org.prosAndCons.pros.slice(0, 4).map((pro) => (
                                                    <div
                                                        key={pro}
                                                        className="flex items-start gap-2 text-sm text-surface-600"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                                        <span>{pro}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Badges + CTA */}
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-surface-100">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {org.certifications.map((c) => (
                                                        <span key={c} className="badge badge-qualiopi text-[10px]">
                                                            {c}
                                                        </span>
                                                    ))}
                                                    {org.cpfEligible && (
                                                        <span className="badge badge-cpf text-[10px]">CPF</span>
                                                    )}
                                                    {org.formats.map((f) => (
                                                        <span
                                                            key={f}
                                                            className="badge text-[10px] bg-surface-100 text-surface-600"
                                                        >
                                                            {f}
                                                        </span>
                                                    ))}
                                                </div>

                                                <Link
                                                    href={`/organisme/${org.slug}`}
                                                    className="btn-primary text-sm"
                                                >
                                                    Voir l&apos;avis complet
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card p-8 text-center">
                            <GraduationCap className="w-12 h-12 text-surface-300 mx-auto mb-4" />
                            <p className="text-surface-500">
                                Nous travaillons à ajouter des organismes pour ce domaine. Revenez bientôt !
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Villes */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-surface-900 mb-3">
                        Formation {domaine.name} par ville
                    </h2>
                    <p className="text-surface-500 mb-8">
                        Trouvez une formation {domaine.name.toLowerCase()} près de chez vous.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {topVilles.map((ville) => (
                            <Link
                                key={ville.slug}
                                href={`/formation/${slug}/${ville.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <MapPin className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-surface-900 group-hover:text-primary-600 transition-colors">
                                    {ville.name}
                                </p>
                                <p className="text-xs text-surface-400 mt-0.5">
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
                    <h2 className="text-2xl md:text-3xl font-extrabold text-surface-900 mb-8">
                        Questions fréquentes sur la formation {domaine.name}
                    </h2>

                    <div className="max-w-3xl space-y-4">
                        {faqItems.map((faq) => (
                            <details
                                key={faq.question}
                                className="glass-card p-5 group open:pb-6"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-surface-900">
                                    {faq.question}
                                    <Award className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-3 text-sm text-surface-600 leading-relaxed">
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
