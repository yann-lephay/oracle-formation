import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/lib/data/glossaire";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Glossaire Formation Pro 2026",
    description:
        "CPF, Qualiopi, RNCP, VAE, OPCO, bootcamp : définitions et explications de tous les termes de la formation professionnelle en France.",
    alternates: { canonical: `${seoConfig.siteUrl}/glossaire` },
    openGraph: {
        title: "Glossaire — QuelleFormation.fr",
        description: "Tous les termes de la formation professionnelle expliqués simplement.",
        url: `${seoConfig.siteUrl}/glossaire`,
        type: "website",
        locale: "fr_FR",
    },
};

const categories = [...new Set(glossaryTerms.map((t) => t.category))];

export default function GlossaireIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Glossaire", url: `${seoConfig.siteUrl}/glossaire` },
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
                            <span className="text-foreground">Glossaire</span>
                        </nav>

                        <span className="badge badge-cpf mb-4">
                            <BookOpen className="w-3 h-3 inline -mt-0.5 mr-1" />
                            {glossaryTerms.length} termes
                        </span>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Glossaire de la formation professionnelle
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            CPF, Qualiopi, RNCP, VAE, OPCO, bootcamp… Tous les termes essentiels de la formation professionnelle expliqués simplement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms by category */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    {categories.map((cat) => (
                        <div key={cat} className="mb-10">
                            <h2 className="text-xl font-extrabold text-foreground mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-accent" />
                                {cat}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {glossaryTerms
                                    .filter((t) => t.category === cat)
                                    .map((term) => (
                                        <Link
                                            key={term.slug}
                                            href={`/glossaire/${term.slug}`}
                                            className="glass-card p-5 group"
                                        >
                                            <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                                                {term.term}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                                                {term.definition}
                                            </p>
                                            <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Lire la définition
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
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
