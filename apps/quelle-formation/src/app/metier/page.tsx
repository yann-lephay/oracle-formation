import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Euro, TrendingUp } from "lucide-react";
import { metiers } from "@/lib/data/metiers";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Fiches Métier 2026 — Salaires, Formations et Débouchés",
    description:
        "Fiches métier complètes : data analyst, cybersécurité, UX designer, product manager. Salaires, compétences, formations et évolution de carrière en 2026.",
    alternates: { canonical: `${seoConfig.siteUrl}/metier` },
    openGraph: {
        title: "Fiches métier — QuelleFormation.fr",
        description: "Fiches métier complètes avec salaires et formations recommandées.",
        url: `${seoConfig.siteUrl}/metier`,
        type: "website",
        locale: "fr_FR",
    },
};

export default function MetiersIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Métiers", url: `${seoConfig.siteUrl}/metier` },
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
                            <span className="text-foreground">Métiers</span>
                        </nav>

                        <span className="badge badge-cpf mb-4">
                            <Briefcase className="w-3 h-3 inline -mt-0.5 mr-1" />
                            {metiers.length} fiches métier
                        </span>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Fiches métier — Salaires et débouchés {new Date().getFullYear()}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Data analyst, cybersécurité, UX designer, product manager : découvrez les salaires, compétences et formations pour accéder à ces métiers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Metiers grid */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {metiers.map((metier) => (
                            <Link
                                key={metier.slug}
                                href={`/metier/${metier.slug}`}
                                className="glass-card p-6 group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                        {metier.name}
                                    </h2>
                                    <span className={`badge text-[10px] ${metier.demandLevel === "très forte" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
                                        {metier.demandLevel}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {metier.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Euro className="w-3 h-3" />
                                            {metier.salaryRange}
                                        </span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3" />
                                            Demande {metier.demandLevel}
                                        </span>
                                    </div>
                                    <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
