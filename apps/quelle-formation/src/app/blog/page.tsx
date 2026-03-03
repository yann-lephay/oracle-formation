import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/lib/data/blog";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Blog Formation Professionnelle — Guides et Conseils 2026",
    description:
        "Guides et conseils pour choisir sa formation professionnelle. CPF, reconversion, comparatifs d'organismes, métiers porteurs. Blog QuelleFormation.fr.",
    alternates: { canonical: `${seoConfig.siteUrl}/blog` },
    openGraph: {
        title: "Blog Formation Professionnelle — Guides et Conseils 2026",
        description:
            "Guides et conseils pour choisir sa formation professionnelle en 2026.",
        url: `${seoConfig.siteUrl}/blog`,
        type: "website",
        locale: "fr_FR",
    },
};

export default function BlogIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Blog", url: `${seoConfig.siteUrl}/blog` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient text-white">
                <div className="container-narrow mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                            <Link href="/" className="hover:text-white/80">
                                Accueil
                            </Link>
                            <span>/</span>
                            <span className="text-white/80">Blog</span>
                        </nav>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                            Blog Formation Professionnelle
                        </h1>
                        <p className="text-lg text-white/70 max-w-2xl">
                            Guides, conseils et comparatifs pour vous aider à choisir la
                            bonne formation et financer votre projet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles grid */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="glass-card p-6 flex flex-col group"
                            >
                                <h2 className="text-lg font-bold text-surface-900 group-hover:text-primary-600 transition-colors mb-2">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-surface-600 line-clamp-3 mb-4 flex-1">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-surface-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {article.readingTime}
                                    </span>
                                </div>
                                <span className="text-xs text-primary-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Lire l&apos;article
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
