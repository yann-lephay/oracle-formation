import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Star,
    ExternalLink,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Award,
    Users,
    MapPin,
    Calendar,
    Euro,
    GraduationCap,
} from "lucide-react";
import { organismes, getOrganismeBySlug } from "@/lib/data/organismes";
import { domaines } from "@/lib/data/domaines";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return organismes.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const org = getOrganismeBySlug(slug);
    if (!org) return {};

    return {
        title: org.metaTitle,
        description: org.metaDescription,
        alternates: { canonical: `${seoConfig.siteUrl}/organisme/${slug}` },
        openGraph: {
            title: org.metaTitle,
            description: org.metaDescription,
            url: `${seoConfig.siteUrl}/organisme/${slug}`,
            type: "website",
            locale: "fr_FR",
        },
    };
}

export default async function OrganismePage({ params }: PageProps) {
    const { slug } = await params;
    const org = getOrganismeBySlug(slug);
    if (!org) notFound();

    const orgDomaines = domaines.filter((d) => org.domaines.includes(d.slug));

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(org.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Organismes", url: `${seoConfig.siteUrl}/#organismes` },
                            { name: org.name, url: `${seoConfig.siteUrl}/organisme/${slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient text-white">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                            <Link href="/" className="hover:text-white/80">Accueil</Link>
                            <span>/</span>
                            <Link href="/#organismes" className="hover:text-white/80">Organismes</Link>
                            <span>/</span>
                            <span className="text-white/80">{org.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            {org.certifications.map((c) => (
                                <span key={c} className="badge badge-qualiopi">{c}</span>
                            ))}
                            {org.cpfEligible && <span className="badge badge-cpf">CPF</span>}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
                            {org.name} — Avis 2026
                        </h1>

                        <p className="text-lg text-white/70 mb-2">{org.tagline}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        className={`w-5 h-5 ${s <= Math.round(org.rating)
                                                ? "text-amber-400 fill-amber-400"
                                                : "text-white/20"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-white font-bold">{org.rating}/5</span>
                            <span className="text-white/50 text-sm">
                                ({org.reviewCount} avis)
                            </span>
                        </div>

                        {/* Key info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { icon: Euro, label: "Prix", value: org.priceRange },
                                { icon: Calendar, label: "Fondé en", value: String(org.foundedYear) },
                                { icon: Users, label: "Étudiants", value: org.studentsCount },
                                { icon: MapPin, label: "Siège", value: org.headquarters },
                            ].map((info) => (
                                <div key={info.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                                    <info.icon className="w-4 h-4 text-primary-300 mb-1" />
                                    <p className="text-[10px] text-white/50">{info.label}</p>
                                    <p className="text-sm font-bold text-white">{info.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {org.affiliateUrl && (
                                <a
                                    href={org.affiliateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="btn-primary text-sm"
                                >
                                    Visiter {org.name}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                            <Link
                                href="/#devis"
                                className="btn-secondary text-sm !bg-transparent !text-white !border-white/30 hover:!bg-white/10"
                            >
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold text-surface-900 mb-4">
                            Notre avis sur {org.name}
                        </h2>
                        <p className="text-surface-600 leading-relaxed mb-8">{org.description}</p>

                        {/* Pros & Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-accent-600 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Points forts
                                </h3>
                                <ul className="space-y-3">
                                    {org.prosAndCons.pros.map((pro) => (
                                        <li key={pro} className="flex items-start gap-2 text-sm text-surface-600">
                                            <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                            <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" />
                                    Points faibles
                                </h3>
                                <ul className="space-y-3">
                                    {org.prosAndCons.cons.map((con) => (
                                        <li key={con} className="flex items-start gap-2 text-sm text-surface-600">
                                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                            <span>{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formations */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-surface-900 mb-6">
                        Formations proposées par {org.name}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {orgDomaines.map((d) => (
                            <Link
                                key={d.slug}
                                href={`/formation/${d.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <GraduationCap className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-surface-900 group-hover:text-primary-600 transition-colors">
                                    {d.name}
                                </p>
                                <p className="text-xs text-surface-400 mt-1">{d.priceRange}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-surface-900 mb-6">
                        Questions fréquentes sur {org.name}
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {org.faq.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-surface-900">
                                    {faq.question}
                                    <Award className="w-4 h-4 text-surface-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-surface-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary-950">
                <div className="container-narrow mx-auto px-4 text-center">
                    <h2 className="text-2xl font-extrabold text-white mb-4">
                        Intéressé par {org.name} ?
                    </h2>
                    <p className="text-white/60 mb-6">
                        Comparez avec d&apos;autres organismes et demandez un devis personnalisé.
                    </p>
                    <div className="flex justify-center gap-3">
                        {org.affiliateUrl && (
                            <a
                                href={org.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="btn-primary"
                            >
                                Visiter {org.name}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        <Link
                            href="/#devis"
                            className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10"
                        >
                            Demander un devis
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
