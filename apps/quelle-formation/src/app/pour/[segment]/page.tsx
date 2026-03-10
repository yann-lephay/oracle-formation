import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowLeft, RefreshCw, Search, Rocket, Lightbulb, Target, CheckCircle2 } from "lucide-react";
import { personas, getPersonaBySlug } from "@/lib/data/personas";
import { domaines } from "@/lib/data/domaines";
import { getOrganismeBySlug } from "@/lib/data/organismes";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    RefreshCw, Search, Rocket, Lightbulb, Target,
};

interface PageProps {
    params: Promise<{ segment: string }>;
}

export const revalidate = false;
export async function generateStaticParams() {
    return personas.map((p) => ({ segment: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { segment } = await params;
    const persona = getPersonaBySlug(segment);
    if (!persona) return {};

    const url = `${seoConfig.siteUrl}/pour/${persona.slug}`;
    return {
        title: persona.metaTitle,
        description: persona.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: persona.metaTitle,
            description: persona.metaDescription,
            url,
            type: "website",
            locale: "fr_FR",
        },
    };
}

export default async function PersonaPage({ params }: PageProps) {
    const { segment } = await params;
    const persona = getPersonaBySlug(segment);
    if (!persona) notFound();

    const Icon = iconMap[persona.icon] || Target;

    const relatedDomaines = persona.recommendedDomaines
        .map((s) => domaines.find((d) => d.slug === s))
        .filter(Boolean);

    const recommendedOrgs = persona.recommendedOrganismes
        .map((r) => {
            const org = getOrganismeBySlug(r.slug);
            return org ? { ...org, reason: r.reason } : null;
        })
        .filter(Boolean);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(persona.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Pour qui ?", url: `${seoConfig.siteUrl}/pour` },
                            { name: persona.name, url: `${seoConfig.siteUrl}/pour/${persona.slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <Link
                            href="/pour"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Tous les profils
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <span className="badge badge-cpf">Profil apprenant</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Formations pour : {persona.name.toLowerCase()}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {persona.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Les défis à relever
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {persona.challenges.map((challenge) => (
                            <div key={challenge} className="glass-card p-4 flex items-start gap-3">
                                <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended domaines */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Domaines recommandés
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {relatedDomaines.map((d) => d && (
                            <Link
                                key={d.slug}
                                href={`/formation/${d.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {d.shortName}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">{d.priceRange}</p>
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
                    <div className="space-y-4 max-w-3xl">
                        {recommendedOrgs.map((org) => org && (
                            <Link
                                key={org.slug}
                                href={`/organisme/${org.slug}`}
                                className="glass-card p-5 flex items-start gap-4 group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                                            {org.name}
                                        </h3>
                                        <span className="text-xs text-muted-foreground">{org.rating}/5</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {(org as { reason: string }).reason}
                                    </p>
                                    <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir l&apos;avis complet
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Budget tips */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Conseils financement
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {persona.budgetTips.map((tip) => (
                            <div key={tip} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Questions fréquentes
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {persona.faq.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {faq.question}
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
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
                            Trouvez votre formation
                        </h2>
                        <p className="text-accent-foreground/60">
                            Comparez les organismes adaptés à votre profil.
                        </p>
                    </div>
                    <DevisForm />
                </div>
            </section>
        </>
    );
}
