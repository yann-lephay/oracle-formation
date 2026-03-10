import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms, getGlossaryTermBySlug } from "@/lib/data/glossaire";
import { domaines } from "@/lib/data/domaines";
import { generateFAQSchema, generateBreadcrumbSchema, generateGlossarySchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = false;
export async function generateStaticParams() {
    return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const term = getGlossaryTermBySlug(slug);
    if (!term) return {};

    const url = `${seoConfig.siteUrl}/glossaire/${term.slug}`;
    return {
        title: term.metaTitle,
        description: term.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: term.metaTitle,
            description: term.metaDescription,
            url,
            type: "website",
            locale: "fr_FR",
        },
    };
}

export default async function GlossaireTermPage({ params }: PageProps) {
    const { slug } = await params;
    const term = getGlossaryTermBySlug(slug);
    if (!term) notFound();

    const relatedTerms = term.relatedTerms
        .map((s) => glossaryTerms.find((t) => t.slug === s))
        .filter(Boolean);

    const relatedDomaines = (term.relatedDomaines || [])
        .map((s) => domaines.find((d) => d.slug === s))
        .filter(Boolean);

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateGlossarySchema({
                            term: term.term,
                            definition: term.definition,
                            url: `${seoConfig.siteUrl}/glossaire/${term.slug}`,
                        })
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(term.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Glossaire", url: `${seoConfig.siteUrl}/glossaire` },
                            { name: term.term, url: `${seoConfig.siteUrl}/glossaire/${term.slug}` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        <Link
                            href="/glossaire"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Glossaire
                        </Link>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="badge badge-cpf">
                                <BookOpen className="w-3 h-3 inline -mt-0.5 mr-1" />
                                {term.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            {term.term}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {term.definition}
                        </p>
                    </div>
                </div>
            </section>

            {/* Long description */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-extrabold text-foreground mb-4">
                            Comprendre {term.acronym ? `le ${term.acronym}` : term.term.toLowerCase()} en détail
                        </h2>
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                            {term.longDescription.split(". ").reduce((paragraphs: string[], sentence, i, arr) => {
                                const pIdx = Math.floor(i / Math.ceil(arr.length / 3));
                                if (!paragraphs[pIdx]) paragraphs[pIdx] = "";
                                paragraphs[pIdx] += sentence + (i < arr.length - 1 ? ". " : "");
                                return paragraphs;
                            }, []).map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related domaines */}
            {relatedDomaines.length > 0 && (
                <section className="section-padding bg-surface">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl font-extrabold text-foreground mb-6">
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

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-foreground mb-6">
                        Questions fréquentes
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {term.faq.map((item) => (
                            <details key={item.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {item.question}
                                    <BookOpen className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related terms */}
            {relatedTerms.length > 0 && (
                <section className="section-padding bg-surface">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl font-extrabold text-foreground mb-6">
                            Termes associés
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {relatedTerms.map((related) => related && (
                                <Link
                                    key={related.slug}
                                    href={`/glossaire/${related.slug}`}
                                    className="glass-card p-5 group"
                                >
                                    <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors mb-2">
                                        {related.term}
                                    </h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {related.definition}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
