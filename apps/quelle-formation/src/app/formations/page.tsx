import Link from "next/link";
import type { Metadata } from "next";
import {
    BookOpen,
    Code,
    BarChart3,
    Megaphone,
    Shield,
    Brain,
    Calculator,
    Palette,
    Users,
    TrendingUp,
    Globe,
    Rocket,
    Cloud,
    Target,
    MapPin,
} from "lucide-react";
import { domaines } from "@/lib/data/domaines";
import { topVilles } from "@/lib/data/villes";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

const currentYear = new Date().getFullYear();

const iconMap: Record<string, React.ElementType> = {
    Code,
    BarChart3,
    Megaphone,
    Shield,
    Brain,
    Kanban: BookOpen,
    Calculator,
    Palette,
    Users,
    ShoppingCart: TrendingUp,
    Globe,
    Rocket,
    Table: BookOpen,
    Building2: BookOpen,
    Camera: BookOpen,
    PenTool: Palette,
    UserCheck: Users,
    Cloud,
    Target,
    HardHat: Shield,
};

export const metadata: Metadata = {
    title: `Formations Pro ${currentYear} : 20 Domaines`,
    description: `Explorez 20 domaines de formation professionnelle en ${currentYear}. Prix, durée, CPF, organismes certifiés Qualiopi. Trouvez la formation qui correspond à votre projet.`,
    alternates: { canonical: `${seoConfig.siteUrl}/formations` },
    openGraph: {
        title: `Formations Pro ${currentYear} — QuelleFormation.fr`,
        description: `Explorez 20 domaines de formation professionnelle en ${currentYear}. Prix, durée, CPF, organismes certifiés Qualiopi.`,
        url: `${seoConfig.siteUrl}/formations`,
        type: "website",
        locale: "fr_FR",
    },
};

export default function FormationsPage() {
    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateItemListSchema({
                            name: "Formations professionnelles en France",
                            description: `${domaines.length} domaines de formation professionnelle comparés en ${currentYear}.`,
                            url: `${seoConfig.siteUrl}/formations`,
                            items: domaines.map((d) => ({
                                name: `Formation ${d.name}`,
                                url: `${seoConfig.siteUrl}/formation/${d.slug}`,
                            })),
                        })
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            { name: "Formations", url: `${seoConfig.siteUrl}/formations` },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-foreground">
                                Accueil
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">Formations</span>
                        </nav>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-foreground">
                            Toutes les formations professionnelles en {currentYear}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                            Explorez {domaines.length} domaines de formation. Comparez les prix, durées, taux
                            d&apos;insertion et éligibilité CPF pour chaque filière. Tous les organismes sont certifiés Qualiopi.
                        </p>
                    </div>
                </div>
            </section>

            {/* Domaines */}
            <section className="section-padding" id="domaines">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
                        {domaines.length} domaines de formation
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {domaines.map((domaine) => {
                            const Icon = iconMap[domaine.icon] || BookOpen;
                            return (
                                <Link
                                    key={domaine.slug}
                                    href={`/formation/${domaine.slug}`}
                                    className="glass-card p-5 flex items-start gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                                        <Icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
                                            Formation {domaine.shortName}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {domaine.priceRange}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            {domaine.cpfEligible && (
                                                <span className="badge badge-cpf text-[10px]">CPF</span>
                                            )}
                                            <span className="text-[10px] text-muted-foreground">
                                                {domaine.averageDuration}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Villes */}
            <section className="section-padding bg-surface" id="villes">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                        Formations par ville
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Trouvez une formation professionnelle près de chez vous.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {topVilles.map((ville) => (
                            <Link
                                key={ville.slug}
                                href={`/formation/developpeur-web/${ville.slug}`}
                                className="glass-card p-4 text-center group"
                            >
                                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {ville.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {ville.region}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
