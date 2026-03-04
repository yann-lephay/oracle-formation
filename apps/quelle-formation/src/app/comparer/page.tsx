import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Scale } from "lucide-react";
import { comparisons } from "@/lib/data/comparisons";
import { getOrganismeBySlug } from "@/lib/data/organismes";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Comparatifs Organismes de Formation — Tous les VS 2026",
    description:
        "Comparez les organismes de formation tête-à-tête : OpenClassrooms vs Jedha, Le Wagon vs Ironhack, et 13 autres comparatifs détaillés. Prix, avis, verdict.",
    alternates: { canonical: `${seoConfig.siteUrl}/comparer` },
};

export default function ComparerPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Comparatifs", url: `${seoConfig.siteUrl}/comparer` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="badge">
                                <Scale className="w-3 h-3 inline -mt-0.5 mr-1" />
                                {comparisons.length} comparatifs
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-4">
                            Comparatifs tête-à-tête 2026
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Analyses détaillées critère par critère pour vous aider à choisir entre
                            deux organismes de formation. Prix, format, catalogue, insertion, accompagnement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparisons grid */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {comparisons.map((comp) => {
                            const org1 = getOrganismeBySlug(comp.organisme1);
                            const org2 = getOrganismeBySlug(comp.organisme2);
                            return (
                                <Link
                                    key={comp.slug}
                                    href={`/comparer/${comp.slug}`}
                                    className="glass-card p-5 group"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        {org1 && (
                                            <Image
                                                src={org1.logoPath}
                                                alt={org1.name}
                                                width={32}
                                                height={32}
                                                className="rounded"
                                            />
                                        )}
                                        <span className="text-xs font-extrabold text-border">VS</span>
                                        {org2 && (
                                            <Image
                                                src={org2.logoPath}
                                                alt={org2.name}
                                                width={32}
                                                height={32}
                                                className="rounded"
                                            />
                                        )}
                                    </div>
                                    <h2 className="font-bold text-foreground group-hover:text-accent transition-colors text-sm text-center mb-2">
                                        {comp.title}
                                    </h2>
                                    <p className="text-xs text-muted-foreground line-clamp-2 text-center mb-3">
                                        {comp.intro.slice(0, 120)}…
                                    </p>
                                    <span className="text-xs text-accent font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                        Lire le comparatif
                                        <ArrowRight className="w-3.5 h-3.5" />
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
