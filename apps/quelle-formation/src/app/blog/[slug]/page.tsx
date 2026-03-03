import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight, Award, Info, Lightbulb, AlertTriangle } from "lucide-react";
import { blogArticles, getBlogArticleBySlug, type ContentBlock } from "@/lib/data/blog";
import { domaines } from "@/lib/data/domaines";
import { organismes } from "@/lib/data/organismes";
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import { DevisForm } from "@/components/DevisForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlogArticleBySlug(slug);
    if (!article) return {};

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        alternates: { canonical: `${seoConfig.siteUrl}/blog/${slug}` },
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            url: `${seoConfig.siteUrl}/blog/${slug}`,
            type: "article",
            locale: "fr_FR",
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
        },
    };
}

function ContentRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case "paragraph":
            return <p className="text-surface-600 leading-relaxed mb-4">{block.text}</p>;
        case "heading":
            if (block.level === 2) {
                return (
                    <h2 className="text-xl md:text-2xl font-bold text-surface-900 mt-8 mb-4">
                        {block.text}
                    </h2>
                );
            }
            return (
                <h3 className="text-lg font-bold text-surface-900 mt-6 mb-3">
                    {block.text}
                </h3>
            );
        case "list":
            return (
                <ul className="space-y-2 mb-4 ml-1">
                    {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-surface-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 mt-1.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case "callout": {
            const variants = {
                info: { bg: "bg-blue-50 border-blue-200", icon: Info, color: "text-blue-600" },
                tip: { bg: "bg-accent-50 border-accent-200", icon: Lightbulb, color: "text-accent-600" },
                warning: { bg: "bg-amber-50 border-amber-200", icon: AlertTriangle, color: "text-amber-600" },
            };
            const v = variants[block.variant];
            return (
                <div className={`${v.bg} border rounded-xl p-4 mb-4 flex items-start gap-3`}>
                    <v.icon className={`w-5 h-5 ${v.color} shrink-0 mt-0.5`} />
                    <p className="text-sm text-surface-700">{block.text}</p>
                </div>
            );
        }
        case "cta":
            return (
                <div className="glass-card p-6 text-center mb-4">
                    <p className="text-surface-700 mb-3">{block.text}</p>
                    <Link href={block.href} className="btn-primary text-sm inline-flex">
                        {block.label}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            );
    }
}

export default async function BlogArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getBlogArticleBySlug(slug);
    if (!article) notFound();

    const relatedDomaineData = domaines.filter((d) =>
        article.relatedDomaines.includes(d.slug)
    );
    const relatedOrganismeData = organismes.filter((o) =>
        article.relatedOrganismes.includes(o.slug)
    );

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(article.faq)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Blog", url: `${seoConfig.siteUrl}/blog` },
                            { name: article.title, url: `${seoConfig.siteUrl}/blog/${slug}` },
                        ])
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateArticleSchema({
                            title: article.title,
                            description: article.excerpt,
                            url: `${seoConfig.siteUrl}/blog/${slug}`,
                            publishedAt: article.publishedAt,
                            updatedAt: article.updatedAt,
                            author: article.author,
                        })
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
                            <Link href="/blog" className="hover:text-white/80">Blog</Link>
                            <span>/</span>
                            <span className="text-white/80 truncate">{article.title}</span>
                        </nav>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                            {article.title}
                        </h1>
                        <p className="text-lg text-white/70 mb-6">{article.excerpt}</p>

                        <div className="flex items-center gap-4 text-sm text-white/50">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(article.updatedAt).toLocaleDateString("fr-FR", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {article.readingTime} de lecture
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="max-w-3xl">
                        {article.content.map((block, i) => (
                            <ContentRenderer key={i} block={block} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {article.faq.length > 0 && (
                <section className="section-padding bg-white">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl font-extrabold text-surface-900 mb-6">
                            Questions fréquentes
                        </h2>
                        <div className="max-w-3xl space-y-3">
                            {article.faq.map((faq) => (
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
            )}

            {/* Related content */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Related formations */}
                        {relatedDomaineData.length > 0 && (
                            <div>
                                <h3 className="font-bold text-surface-900 mb-4">
                                    Formations associées
                                </h3>
                                <div className="space-y-2">
                                    {relatedDomaineData.map((d) => (
                                        <Link
                                            key={d.slug}
                                            href={`/formation/${d.slug}`}
                                            className="glass-card p-3 flex items-center justify-between group"
                                        >
                                            <span className="text-sm font-medium text-surface-700 group-hover:text-primary-600 transition-colors">
                                                Formation {d.name}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Related organismes */}
                        {relatedOrganismeData.length > 0 && (
                            <div>
                                <h3 className="font-bold text-surface-900 mb-4">
                                    Organismes mentionnés
                                </h3>
                                <div className="space-y-2">
                                    {relatedOrganismeData.map((o) => (
                                        <Link
                                            key={o.slug}
                                            href={`/organisme/${o.slug}`}
                                            className="glass-card p-3 flex items-center justify-between group"
                                        >
                                            <span className="text-sm font-medium text-surface-700 group-hover:text-primary-600 transition-colors">
                                                Avis {o.name}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* DevisForm */}
            <section className="section-padding bg-primary-950" id="devis">
                <div className="container-narrow mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                            Besoin d&apos;aide pour choisir votre formation ?
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Recevez un devis personnalisé de plusieurs organismes en une seule demande.
                            Gratuit et sans engagement.
                        </p>
                    </div>
                    <DevisForm />
                </div>
            </section>
        </>
    );
}
