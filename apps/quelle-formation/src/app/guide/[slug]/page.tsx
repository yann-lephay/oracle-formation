import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import { domaines } from "@/lib/data/domaines";
import { generateFAQSchema, generateBreadcrumbSchema, generateGuideSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) return {};

    const url = `${seoConfig.siteUrl}/guide/${guide.slug}`;
    return {
        title: guide.metaTitle,
        description: guide.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: guide.metaTitle,
            description: guide.metaDescription,
            url,
            type: "article",
            locale: "fr_FR",
        },
    };
}

export default async function GuidePage({ params }: PageProps) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) notFound();

    const relatedDomaines = guide.relatedDomaines
        .map((s) => domaines.find((d) => d.slug === s))
        .filter(Boolean);

    const otherGuides = guides.filter((g) => g.slug !== slug).slice(0, 3);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateGuideSchema({
                            title: guide.title,
                            description: guide.description,
                            url: `${seoConfig.siteUrl}/guide/${guide.slug}`,
                            publishedAt: guide.publishedAt,
                            updatedAt: guide.updatedAt,
                        })
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(guide.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Guides", url: `${seoConfig.siteUrl}/guide` },
                            { name: guide.shortTitle, url: `${seoConfig.siteUrl}/guide/${guide.slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <Link
                            href="/guide"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Tous les guides
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="badge badge-cpf">
                                <BookOpen className="w-3 h-3 inline -mt-0.5 mr-1" />
                                {guide.category}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-3.5 h-3.5" />
                                {guide.readingTime}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5" />
                                Mis à jour le {new Date(guide.updatedAt).toLocaleDateString("fr-FR")}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            {guide.title}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {guide.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl space-y-10">
                        {guide.sections.map((section, i) => (
                            <div key={i}>
                                <h2 className="text-2xl font-extrabold text-foreground mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
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
                        {guide.faq.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {faq.question}
                                    <BookOpen className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related domaines */}
            {relatedDomaines.length > 0 && (
                <section className="section-padding">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-xl font-extrabold text-foreground mb-4">
                            Formations associées
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {relatedDomaines.map((d) => d && (
                                <Link
                                    key={d.slug}
                                    href={`/formation/${d.slug}`}
                                    className="glass-card p-5 group"
                                >
                                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                                        {d.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mb-2">{d.priceRange}</p>
                                    <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir les formations
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Other guides */}
            {otherGuides.length > 0 && (
                <section className="section-padding bg-surface">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-xl font-extrabold text-foreground mb-4">
                            Autres guides
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {otherGuides.map((g) => (
                                <Link
                                    key={g.slug}
                                    href={`/guide/${g.slug}`}
                                    className="glass-card p-5 group"
                                >
                                    <span className="badge text-[10px] mb-2">{g.category}</span>
                                    <h3 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors mb-1">
                                        {g.shortTitle}
                                    </h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{g.description}</p>
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
                            Trouvez votre formation
                        </h2>
                        <p className="text-accent-foreground/60">
                            Comparez les organismes et demandez un devis personnalisé.
                        </p>
                    </div>
                    <DevisForm />
                </div>
            </section>
        </>
    );
}
