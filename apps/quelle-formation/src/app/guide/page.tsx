import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { guides } from "@/lib/data/guides";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Guides Formation Pro 2026 : CPF & Plus",
    description:
        "Guides pratiques sur la formation professionnelle : financement CPF, certification Qualiopi, reconversion, bootcamp vs formation longue, RNCP et VAE.",
    alternates: { canonical: `${seoConfig.siteUrl}/guide` },
    openGraph: {
        title: "Guides Formation Professionnelle 2026",
        description: "Guides pratiques sur la formation professionnelle en France.",
        url: `${seoConfig.siteUrl}/guide`,
        type: "website",
        locale: "fr_FR",
    },
};

const categories = [...new Set(guides.map((g) => g.category))];

export default function GuidesIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Guides", url: `${seoConfig.siteUrl}/guide` },
                        ])
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
                            <span className="text-foreground">Guides</span>
                        </nav>

                        <span className="badge badge-cpf mb-4">
                            {guides.length} guides
                        </span>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Guides de la formation professionnelle
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            CPF, Qualiopi, reconversion, financement : tout ce qu&apos;il faut savoir pour choisir et financer sa formation en {new Date().getFullYear()}.
                        </p>
                    </div>
                </div>
            </section>

            {/* Guides by category */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    {categories.map((cat) => (
                        <div key={cat} className="mb-10">
                            <h2 className="text-xl font-extrabold text-foreground mb-4 capitalize flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-accent" />
                                {cat}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {guides
                                    .filter((g) => g.category === cat)
                                    .map((guide) => (
                                        <Link
                                            key={guide.slug}
                                            href={`/guide/${guide.slug}`}
                                            className="glass-card p-5 group"
                                        >
                                            <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                                                {guide.shortTitle}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                                                {guide.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {guide.readingTime}
                                                </span>
                                                <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Lire
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
