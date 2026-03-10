import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
    Star,
    ExternalLink,
    CheckCircle2,
    XCircle,
    Award,
    Users,
    MapPin,
    Calendar,
    Euro,
    GraduationCap,
} from "lucide-react";
import { organismes, getOrganismeBySlug } from "@/lib/data/organismes";
import { domaines } from "@/lib/data/domaines";
import { generateFAQSchema, generateBreadcrumbSchema, generateOrganismeSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = false;
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
                            { name: "Organismes", url: `${seoConfig.siteUrl}/organismes` },
                            { name: org.name, url: `${seoConfig.siteUrl}/organisme/${slug}` },
                        ])
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateOrganismeSchema({
                            name: org.name,
                            url: org.website,
                            description: org.tagline,
                            rating: org.rating,
                            reviewCount: org.reviewCount,
                        })
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-foreground">Accueil</Link>
                            <span>/</span>
                            <Link href="/organismes" className="hover:text-foreground">Organismes</Link>
                            <span>/</span>
                            <span className="text-foreground">{org.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            {org.certifications.map((c) => (
                                <span key={c} className="badge badge-qualiopi">{c}</span>
                            ))}
                            {org.cpfEligible && <span className="badge badge-cpf">CPF</span>}
                        </div>

                        <Image
                            src={org.logoPath}
                            alt={`Logo ${org.name}`}
                            width={80}
                            height={80}
                            className="rounded mb-4"
                        />

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2 text-foreground">
                            {org.name} — Avis 2026
                        </h1>

                        <p className="text-lg text-muted-foreground mb-2">{org.tagline}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        className={`w-5 h-5 ${s <= Math.round(org.rating)
                                                ? "text-amber-400 fill-amber-400"
                                                : "text-border"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-foreground font-bold">{org.rating}/5</span>
                            <span className="text-muted-foreground text-sm">
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
                                <div key={info.label} className="glass-card p-3">
                                    <info.icon className="w-4 h-4 text-accent mb-1" />
                                    <p className="text-[10px] text-muted-foreground">{info.label}</p>
                                    <p className="text-sm font-bold text-foreground">{info.value}</p>
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
                                href="#devis"
                                className="btn-secondary text-sm"
                            >
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verdict */}
            <section className="section-padding pb-0" aria-label="Verdict">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl glass-card p-6 border-l-4 border-accent">
                        <p className="text-lg leading-relaxed text-foreground">
                            <strong>{org.name}</strong> est un organisme noté <strong>{org.rating}/5</strong> basé sur {org.reviewCount} avis.
                            {" "}{org.cpfEligible ? "Formations éligibles au CPF." : ""} {org.certifications.length > 0 ? `Certifié ${org.certifications.join(", ")}.` : ""}
                            {" "}Prix : {org.priceRange}. Formats : {org.formats.join(", ")}.
                        </p>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold text-foreground mb-4">
                            Notre avis sur {org.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">{org.description}</p>

                        {/* Pros & Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-success mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Points forts
                                </h3>
                                <ul className="space-y-3">
                                    {org.prosAndCons.pros.map((pro) => (
                                        <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                                            <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-destructive mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" />
                                    Points faibles
                                </h3>
                                <ul className="space-y-3">
                                    {org.prosAndCons.cons.map((con) => (
                                        <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
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
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Formations proposées par {org.name}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {orgDomaines.map((d) => (
                            <Link
                                key={d.slug}
                                href={`/formation/${d.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <GraduationCap className="w-6 h-6 text-accent mx-auto mb-2" />
                                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {d.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">{d.priceRange}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Questions fréquentes sur {org.name}
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {org.faq.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {faq.question}
                                    <Award className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA + DevisForm */}
            <section className="section-padding bg-accent" id="devis">
                <div className="container-narrow mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-extrabold text-accent-foreground mb-4">
                            Intéressé par {org.name} ?
                        </h2>
                        <p className="text-accent-foreground/60 mb-4">
                            Comparez avec d&apos;autres organismes et demandez un devis personnalisé.
                        </p>
                        {org.affiliateUrl && (
                            <a
                                href={org.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-foreground font-medium text-sm rounded transition-colors hover:bg-muted"
                            >
                                Visiter {org.name}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                    <DevisForm defaultDomaine={org.domaines[0]} />
                </div>
            </section>
        </>
    );
}
