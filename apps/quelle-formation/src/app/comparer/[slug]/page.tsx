import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Trophy, ArrowRight, Award, CheckCircle2, Minus } from "lucide-react";
import { comparisons, getComparisonBySlug } from "@/lib/data/comparisons";
import { getOrganismeBySlug } from "@/lib/data/organismes";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const comp = getComparisonBySlug(slug);
    if (!comp) return {};

    return {
        title: comp.metaTitle,
        description: comp.metaDescription,
        alternates: { canonical: `${seoConfig.siteUrl}/comparer/${slug}` },
        openGraph: {
            title: comp.metaTitle,
            description: comp.metaDescription,
            url: `${seoConfig.siteUrl}/comparer/${slug}`,
            type: "article",
            locale: "fr_FR",
        },
    };
}

export default async function ComparerPage({ params }: PageProps) {
    const { slug } = await params;
    const comp = getComparisonBySlug(slug);
    if (!comp) notFound();

    const org1 = getOrganismeBySlug(comp.organisme1);
    const org2 = getOrganismeBySlug(comp.organisme2);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Comparatifs", url: `${seoConfig.siteUrl}/#comparatifs` },
                            { name: comp.title, url: `${seoConfig.siteUrl}/comparer/${slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient text-white">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                        <Link href="/" className="hover:text-white/80">Accueil</Link>
                        <span>/</span>
                        <Link href="/#comparatifs" className="hover:text-white/80">Comparatifs</Link>
                        <span>/</span>
                        <span className="text-white/80">{comp.title}</span>
                    </nav>

                    <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
                        <div className="text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl md:text-3xl font-extrabold text-white">
                                    {org1?.name.charAt(0) || "1"}
                                </span>
                            </div>
                            <p className="font-bold text-white text-sm md:text-base">
                                {org1?.name || comp.organisme1}
                            </p>
                            {org1 && (
                                <p className="text-xs text-white/50 mt-0.5">{org1.priceRange}</p>
                            )}
                        </div>

                        <div className="text-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-white/30">VS</span>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl md:text-3xl font-extrabold text-white">
                                    {org2?.name.charAt(0) || "2"}
                                </span>
                            </div>
                            <p className="font-bold text-white text-sm md:text-base">
                                {org2?.name || comp.organisme2}
                            </p>
                            {org2 && (
                                <p className="text-xs text-white/50 mt-0.5">{org2.priceRange}</p>
                            )}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight mb-4">
                        {comp.title} : Quel organisme choisir en 2026 ?
                    </h1>

                    <p className="text-center text-white/60 max-w-2xl mx-auto">
                        {comp.intro}
                    </p>
                </div>
            </section>

            {/* Criteria comparison */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-surface-900 mb-8 text-center">
                        Comparaison critère par critère
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {comp.criteria.map((criterion) => (
                            <div key={criterion.name} className="glass-card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-surface-900 text-lg">{criterion.name}</h3>
                                    {criterion.winner === 1 && (
                                        <span className="badge badge-winner flex items-center gap-1">
                                            <Trophy className="w-3.5 h-3.5" />
                                            {org1?.name || comp.organisme1}
                                        </span>
                                    )}
                                    {criterion.winner === 2 && (
                                        <span className="badge badge-winner flex items-center gap-1">
                                            <Trophy className="w-3.5 h-3.5" />
                                            {org2?.name || comp.organisme2}
                                        </span>
                                    )}
                                    {criterion.winner === 0 && (
                                        <span className="badge bg-surface-100 text-surface-600 flex items-center gap-1">
                                            <Minus className="w-3.5 h-3.5" />
                                            Égalité
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div
                                        className={`p-4 rounded-xl border-2 ${criterion.winner === 1
                                                ? "border-accent-500/30 bg-accent-500/5"
                                                : "border-surface-200 bg-surface-50"
                                            }`}
                                    >
                                        <p className="text-xs font-semibold text-surface-500 mb-1">
                                            {org1?.name || comp.organisme1}
                                        </p>
                                        <p className="text-sm text-surface-800 font-medium">
                                            {criterion.org1Score}
                                        </p>
                                        {criterion.winner === 1 && (
                                            <CheckCircle2 className="w-4 h-4 text-accent-500 mt-2" />
                                        )}
                                    </div>
                                    <div
                                        className={`p-4 rounded-xl border-2 ${criterion.winner === 2
                                                ? "border-accent-500/30 bg-accent-500/5"
                                                : "border-surface-200 bg-surface-50"
                                            }`}
                                    >
                                        <p className="text-xs font-semibold text-surface-500 mb-1">
                                            {org2?.name || comp.organisme2}
                                        </p>
                                        <p className="text-sm text-surface-800 font-medium">
                                            {criterion.org2Score}
                                        </p>
                                        {criterion.winner === 2 && (
                                            <CheckCircle2 className="w-4 h-4 text-accent-500 mt-2" />
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-surface-500">{criterion.analysis}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verdict */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="gradient-border glass-card p-8">
                            <h2 className="text-2xl font-extrabold text-surface-900 mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6 text-primary-600" />
                                Notre verdict
                            </h2>
                            <p className="text-surface-600 leading-relaxed mb-6">{comp.verdict}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {org1 && (
                                    <Link
                                        href={`/organisme/${org1.slug}`}
                                        className="btn-primary justify-center"
                                    >
                                        Voir {org1.name}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                                {org2 && (
                                    <Link
                                        href={`/organisme/${org2.slug}`}
                                        className="btn-secondary justify-center"
                                    >
                                        Voir {org2.name}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other comparisons */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-xl font-extrabold text-surface-900 mb-4">Autres comparatifs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {comparisons
                            .filter((c) => c.slug !== slug)
                            .slice(0, 4)
                            .map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/comparer/${c.slug}`}
                                    className="glass-card p-4 flex items-center justify-between group"
                                >
                                    <span className="font-semibold text-sm text-surface-900 group-hover:text-primary-600 transition-colors">
                                        {c.title}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600 transition-colors" />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
