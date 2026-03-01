import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ArrowRight, Star, CheckCircle2, Clock, Euro, Award } from "lucide-react";
import { domaines, getDomaineBySlug } from "@/lib/data/domaines";
import { getOrganismesByDomaine } from "@/lib/data/organismes";
import { topVilles, getVilleBySlug } from "@/lib/data/villes";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

interface PageProps {
    params: Promise<{ domaine: string; ville: string }>;
}

export async function generateStaticParams() {
    const params: { domaine: string; ville: string }[] = [];
    for (const d of domaines) {
        for (const v of topVilles) {
            params.push({ domaine: d.slug, ville: v.slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { domaine: dSlug, ville: vSlug } = await params;
    const domaine = getDomaineBySlug(dSlug);
    const ville = getVilleBySlug(vSlug);
    if (!domaine || !ville) return {};

    const title = `Formation ${domaine.name} ${ville.metaSuffix} 2026 : Prix, Avis et CPF`;
    const description = `Comparez les formations ${domaine.name.toLowerCase()} ${ville.metaSuffix} en 2026. Prix, organismes, éligibilité CPF. Trouvez la meilleure formation ${ville.metaSuffix}.`;

    return {
        title,
        description,
        alternates: {
            canonical: `${seoConfig.siteUrl}/formation/${dSlug}/${vSlug}`,
        },
        openGraph: {
            title,
            description,
            url: `${seoConfig.siteUrl}/formation/${dSlug}/${vSlug}`,
            type: "website",
            locale: "fr_FR",
        },
    };
}

export default async function FormationVillePage({ params }: PageProps) {
    const { domaine: dSlug, ville: vSlug } = await params;
    const domaine = getDomaineBySlug(dSlug);
    const ville = getVilleBySlug(vSlug);
    if (!domaine || !ville) notFound();

    const organismes = getOrganismesByDomaine(dSlug);
    // Filter organismes that have formats compatible with the city
    // For now, show all (since many offer remote)
    const localOrganismes = organismes;

    const faqItems = [
        {
            question: `Où suivre une formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} ?`,
            answer: `Plusieurs organismes proposent des formations ${domaine.name.toLowerCase()} ${ville.metaSuffix}, en présentiel ou en distanciel. Parmi les plus reconnus : ${localOrganismes.slice(0, 3).map((o) => o.name).join(", ")}. Tous sont certifiés Qualiopi et éligibles au CPF.`,
        },
        {
            question: `Combien coûte une formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} ?`,
            answer: `Les prix varient de ${domaine.priceRange} selon l'organisme et le format (bootcamp, e-learning, temps partiel). La plupart sont finançables via le CPF, les OPCO ou France Travail.`,
        },
        {
            question: `Peut-on suivre la formation en distanciel depuis ${ville.name} ?`,
            answer: `Oui, la majorité des organismes proposent des formations ${domaine.name.toLowerCase()} 100 % en ligne ou en format hybride, accessibles depuis ${ville.name} et partout en France.`,
        },
    ];

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(faqItems)),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { name: "Accueil", url: seoConfig.siteUrl },
                            {
                                name: `Formation ${domaine.name}`,
                                url: `${seoConfig.siteUrl}/formation/${dSlug}`,
                            },
                            {
                                name: `${ville.name}`,
                                url: `${seoConfig.siteUrl}/formation/${dSlug}/${vSlug}`,
                            },
                        ])
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient text-white">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
                            <Link href="/" className="hover:text-white/80">Accueil</Link>
                            <span>/</span>
                            <Link href={`/formation/${dSlug}`} className="hover:text-white/80">
                                Formation {domaine.name}
                            </Link>
                            <span>/</span>
                            <span className="text-white/80">{ville.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="badge badge-cpf">Éligible CPF</span>
                            <span className="flex items-center gap-1.5 text-sm text-white/60">
                                <MapPin className="w-4 h-4" />
                                {ville.name}, {ville.region}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                            Formation {domaine.name} {ville.metaSuffix}
                        </h1>

                        <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                            Comparez les meilleures formations {domaine.name.toLowerCase()}{" "}
                            {ville.metaSuffix} en 2026. {localOrganismes.length} organismes certifiés Qualiopi,
                            éligibles CPF. Présentiel et distanciel.
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Euro className="w-5 h-5 text-primary-300 mb-1" />
                                <p className="text-xs text-white/50">Prix moyen</p>
                                <p className="text-sm font-bold text-white">{domaine.priceRange}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Clock className="w-5 h-5 text-primary-300 mb-1" />
                                <p className="text-xs text-white/50">Durée</p>
                                <p className="text-sm font-bold text-white">{domaine.averageDuration}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <Award className="w-5 h-5 text-primary-300 mb-1" />
                                <p className="text-xs text-white/50">Organismes</p>
                                <p className="text-sm font-bold text-white">{localOrganismes.length} comparés</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organismes */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-2xl font-extrabold text-surface-900 mb-8">
                        Organismes de formation {domaine.name.toLowerCase()} {ville.metaSuffix}
                    </h2>

                    <div className="space-y-5">
                        {localOrganismes.map((org, i) => (
                            <div key={org.slug} className="glass-card p-5 md:p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                                        <span className="text-sm font-bold text-primary-600">{i + 1}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <h3 className="font-bold text-surface-900">{org.name}</h3>
                                            <div className="flex items-center gap-1 shrink-0">
                                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                <span className="text-sm font-semibold">{org.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-surface-500 mb-3">
                                            {org.tagline} — {org.priceRange}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {org.formats.map((f) => (
                                                <span key={f} className="badge text-[10px] bg-surface-100 text-surface-600">
                                                    {f}
                                                </span>
                                            ))}
                                            {org.cpfEligible && <span className="badge badge-cpf text-[10px]">CPF</span>}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                                            {org.prosAndCons.pros.slice(0, 2).map((pro) => (
                                                <div key={pro} className="flex items-start gap-1.5 text-xs text-surface-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0 mt-0.5" />
                                                    <span>{pro}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4">
                                            <Link href={`/organisme/${org.slug}`} className="text-sm text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                                Voir l&apos;avis complet
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other cities */}
            <section className="section-padding bg-white">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-xl font-extrabold text-surface-900 mb-4">
                        Formation {domaine.name} dans d&apos;autres villes
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {topVilles
                            .filter((v) => v.slug !== vSlug)
                            .map((v) => (
                                <Link
                                    key={v.slug}
                                    href={`/formation/${dSlug}/${v.slug}`}
                                    className="badge text-xs bg-surface-100 text-surface-600 hover:bg-primary-100 hover:text-primary-600 transition-colors py-1.5 px-3"
                                >
                                    {v.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-xl font-extrabold text-surface-900 mb-6">
                        Questions fréquentes
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {faqItems.map((faq) => (
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
        </>
    );
}
