import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, RefreshCw, Search, Rocket, Lightbulb, Target } from "lucide-react";
import { personas } from "@/lib/data/personas";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    RefreshCw, Search, Rocket, Lightbulb, Target,
};

export const metadata: Metadata = {
    title: "Pour Qui ? — Formations par Profil 2026",
    description:
        "Trouvez la formation adaptée à votre profil : reconversion, demandeur d'emploi, freelance ou profil non technique. Conseils personnalisés et financement.",
    alternates: { canonical: `${seoConfig.siteUrl}/pour` },
    openGraph: {
        title: "Formations par profil — QuelleFormation.fr",
        description: "Trouvez la formation adaptée à votre profil en 2026.",
        url: `${seoConfig.siteUrl}/pour`,
        type: "website",
        locale: "fr_FR",
    },
};

export default function PersonasIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Pour qui ?", url: `${seoConfig.siteUrl}/pour` },
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
                            <span className="text-foreground">Pour qui ?</span>
                        </nav>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Quelle formation pour votre profil ?
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Reconversion, recherche d&apos;emploi, freelancing, ou découverte du numérique : trouvez les formations et financements adaptés à votre situation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Personas grid */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {personas.map((persona) => {
                            const Icon = iconMap[persona.icon] || Target;
                            return (
                                <Link
                                    key={persona.slug}
                                    href={`/pour/${persona.slug}`}
                                    className="glass-card p-6 group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-accent" />
                                        </div>
                                        <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                            {persona.name}
                                        </h2>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                        {persona.description}
                                    </p>
                                    <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Voir les recommandations
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
