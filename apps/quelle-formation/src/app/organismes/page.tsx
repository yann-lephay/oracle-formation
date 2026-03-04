import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Star, ArrowRight, Users } from "lucide-react";
import { organismes } from "@/lib/data/organismes";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: "Tous les Organismes de Formation — Comparatif 2026",
    description:
        "Comparez les 14 meilleurs organismes de formation professionnelle en France. Avis, prix, certifications Qualiopi, CPF. Trouvez le bon organisme.",
    alternates: { canonical: `${seoConfig.siteUrl}/organismes` },
};

export default function OrganismesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Organismes", url: `${seoConfig.siteUrl}/organismes` },
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
                                <Users className="w-3 h-3 inline -mt-0.5 mr-1" />
                                {organismes.length} organismes
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-4">
                            Comparatif des organismes de formation 2026
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            OpenClassrooms, Jedha, Le Wagon, AFPA, CNAM… Comparez les prix, avis,
                            certifications et formats de chaque organisme pour faire le bon choix.
                        </p>
                    </div>
                </div>
            </section>

            {/* Organismes grid */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {organismes.map((org) => (
                            <Link
                                key={org.slug}
                                href={`/organisme/${org.slug}`}
                                className="glass-card p-5 flex items-start gap-4 group"
                            >
                                <Image
                                    src={org.logoPath}
                                    alt={`Logo ${org.name}`}
                                    width={44}
                                    height={44}
                                    className="rounded shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <h2 className="font-bold text-foreground group-hover:text-accent transition-colors">
                                            {org.name}
                                        </h2>
                                        <div className="flex items-center gap-1 shrink-0">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                            <span className="text-sm font-semibold">{org.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">
                                        {org.tagline}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        {org.certifications.map((c) => (
                                            <span key={c} className="badge badge-qualiopi text-[10px]">{c}</span>
                                        ))}
                                        {org.cpfEligible && (
                                            <span className="badge badge-cpf text-[10px]">CPF</span>
                                        )}
                                        {org.formats.map((f) => (
                                            <span key={f} className="badge text-[10px] bg-muted text-muted-foreground">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">{org.priceRange}</span>
                                        <span className="text-xs text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Voir l&apos;avis
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
