import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Euro, TrendingUp, Briefcase, CheckCircle2, Target } from "lucide-react";
import { metiers, getMetierBySlug } from "@/lib/data/metiers";
import { domaines } from "@/lib/data/domaines";
import { getOrganismeBySlug } from "@/lib/data/organismes";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = false;
export async function generateStaticParams() {
    return metiers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const metier = getMetierBySlug(slug);
    if (!metier) return {};

    const url = `${seoConfig.siteUrl}/metier/${metier.slug}`;
    return {
        title: metier.metaTitle,
        description: metier.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: metier.metaTitle,
            description: metier.metaDescription,
            url,
            type: "article",
            locale: "fr_FR",
        },
    };
}

export default async function MetierPage({ params }: PageProps) {
    const { slug } = await params;
    const metier = getMetierBySlug(slug);
    if (!metier) notFound();

    const relatedDomaines = metier.relatedDomaines
        .map((s) => domaines.find((d) => d.slug === s))
        .filter(Boolean);

    const relatedOrgs = metier.relatedOrganismes
        .map((s) => getOrganismeBySlug(s))
        .filter(Boolean);

    const otherMetiers = metiers.filter((m) => m.slug !== slug).slice(0, 3);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(metier.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Métiers", url: `${seoConfig.siteUrl}/metier` },
                            { name: metier.name, url: `${seoConfig.siteUrl}/metier/${metier.slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <Link
                            href="/metier"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Tous les métiers
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="badge badge-cpf">Fiche métier</span>
                            <span className={`badge text-[10px] ${metier.demandLevel === "très forte" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
                                Demande {metier.demandLevel}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            {metier.name}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            {metier.description}
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="glass-card p-4">
                                <Euro className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Salaire junior</p>
                                <p className="text-sm font-bold text-foreground">{metier.salaryJunior}</p>
                            </div>
                            <div className="glass-card p-4">
                                <TrendingUp className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Salaire senior</p>
                                <p className="text-sm font-bold text-foreground">{metier.salarySenior}</p>
                            </div>
                            <div className="glass-card p-4">
                                <Briefcase className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Demande</p>
                                <p className="text-sm font-bold text-foreground capitalize">{metier.demandLevel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Compétences requises
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
                        {metier.skills.map((skill) => (
                            <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily tasks */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Au quotidien
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {metier.dailyTasks.map((task) => (
                            <div key={task} className="glass-card p-4 flex items-start gap-3">
                                <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">{task}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career path */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Évolution de carrière
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {metier.careerPath.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0">
                                    {i + 1}
                                </span>
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formations for this job */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Formations pour devenir {metier.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                        {relatedDomaines.map((d) => d && (
                            <Link key={d.slug} href={`/formation/${d.slug}`} className="glass-card p-5 group">
                                <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                                    Formation {d.name}
                                </h3>
                                <p className="text-xs text-muted-foreground mb-2">{d.priceRange} — {d.averageDuration}</p>
                                <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Comparer les organismes
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended organismes */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Organismes recommandés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                        {relatedOrgs.map((org) => org && (
                            <Link key={org.slug} href={`/organisme/${org.slug}`} className="glass-card p-5 group">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                                        {org.name}
                                    </h3>
                                    <span className="text-xs text-muted-foreground">{org.rating}/5</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">{org.tagline}</p>
                                <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Voir l&apos;avis complet
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Questions fréquentes
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {metier.faq.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {faq.question}
                                    <Briefcase className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other jobs */}
            {otherMetiers.length > 0 && (
                <section className="section-padding">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-xl font-extrabold text-foreground mb-4">
                            Autres fiches métier
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {otherMetiers.map((m) => (
                                <Link key={m.slug} href={`/metier/${m.slug}`} className="glass-card p-5 group">
                                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                                        {m.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mb-2">{m.salaryRange}</p>
                                    <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir la fiche
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA + DevisForm */}
            <section className="section-padding bg-accent" id="devis">
                <div className="container-narrow mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-extrabold text-accent-foreground mb-4">
                            Lancez votre formation
                        </h2>
                        <p className="text-accent-foreground/60">
                            Comparez les organismes et demandez un devis personnalisé.
                        </p>
                    </div>
                    <DevisForm defaultDomaine={metier.relatedDomaines[0]} />
                </div>
            </section>
        </>
    );
}
