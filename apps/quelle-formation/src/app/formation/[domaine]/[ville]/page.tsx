import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight, Star, CheckCircle2, Clock, Euro, Award, Monitor, Building2 } from "lucide-react";
import { domaines, getDomaineBySlug } from "@/lib/data/domaines";
import { getOrganismesByDomaineAndVille } from "@/lib/data/organismes";
import { topVilles, getVilleBySlug } from "@/lib/data/villes";
import { generateBreadcrumbSchema, generateFAQSchema, generateItemListSchema, generateCourseSchema } from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";
import type { Organisme } from "@/lib/data/organismes";

interface PageProps {
    params: Promise<{ domaine: string; ville: string }>;
}

export const revalidate = false;
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

    const { local, remote } = getOrganismesByDomaineAndVille(dSlug, vSlug);
    const totalCount = local.length + remote.length;

    const title = `Formation ${domaine.name} ${ville.metaSuffix} 2026 : ${totalCount} Organismes Comparés`;
    const description = `Comparez ${totalCount} formations ${domaine.name.toLowerCase()} ${ville.metaSuffix} en 2026.${local.length > 0 ? ` ${local.length} organismes avec campus ${ville.metaSuffix}.` : ""} Prix, avis, CPF. Trouvez la meilleure formation.`;

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

function OrganismeCard({ org, rank, villeSlug }: { org: Organisme; rank: number; villeSlug: string }) {
    const hasLocalCampus = org.campusVilles.includes(villeSlug);
    return (
        <div className="glass-card p-5 md:p-6">
            <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                    <Image
                        src={org.logoPath}
                        alt={`Logo ${org.name}`}
                        width={36}
                        height={36}
                        className="rounded"
                    />
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                        {rank}
                    </span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-foreground">{org.name}</h3>
                        <div className="flex items-center gap-1 shrink-0">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm font-semibold">{org.rating}</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                        {org.tagline} — {org.priceRange}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {hasLocalCampus && (
                            <span className="badge text-[10px] bg-accent/10 text-accent border border-accent/20">
                                <Building2 className="w-3 h-3 inline -mt-0.5 mr-0.5" />
                                Campus local
                            </span>
                        )}
                        {!hasLocalCampus && (
                            <span className="badge text-[10px] bg-muted text-muted-foreground">
                                <Monitor className="w-3 h-3 inline -mt-0.5 mr-0.5" />
                                Distanciel
                            </span>
                        )}
                        {org.formats.filter(f => hasLocalCampus ? true : f !== "présentiel").map((f) => (
                            <span key={f} className="badge text-[10px] bg-muted text-muted-foreground">
                                {f}
                            </span>
                        ))}
                        {org.cpfEligible && <span className="badge badge-cpf text-[10px]">CPF</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                        {org.prosAndCons.pros.slice(0, 2).map((pro) => (
                            <div key={pro} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                                <span>{pro}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <Link href={`/organisme/${org.slug}`} className="text-sm text-accent font-medium flex items-center gap-1 hover:gap-2 transition-all">
                            Voir l&apos;avis complet
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default async function FormationVillePage({ params }: PageProps) {
    const { domaine: dSlug, ville: vSlug } = await params;
    const domaine = getDomaineBySlug(dSlug);
    const ville = getVilleBySlug(vSlug);
    if (!domaine || !ville) notFound();

    const { local, remote } = getOrganismesByDomaineAndVille(dSlug, vSlug);
    const totalCount = local.length + remote.length;

    const faqItems = [
        {
            question: `Combien d'organismes proposent une formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} ?`,
            answer: `${totalCount} organismes proposent des formations ${domaine.name.toLowerCase()} accessibles depuis ${ville.name} : ${local.length} avec un campus sur place (${local.map(o => o.name).join(", ") || "aucun"}) et ${remote.length} en distanciel/e-learning.`,
        },
        {
            question: `Peut-on suivre une formation ${domaine.name.toLowerCase()} en présentiel ${ville.metaSuffix} ?`,
            answer: local.length > 0
                ? `Oui, ${local.length} organisme${local.length > 1 ? "s" : ""} ${local.length > 1 ? "disposent" : "dispose"} d'un campus ${ville.metaSuffix} : ${local.map(o => o.name).join(", ")}. ${remote.length > 0 ? `${remote.length} autre${remote.length > 1 ? "s" : ""} ${remote.length > 1 ? "sont" : "est"} accessible${remote.length > 1 ? "s" : ""} en distanciel.` : ""}`
                : `Aucun organisme de notre comparatif n'a de campus physique ${ville.metaSuffix} pour la formation ${domaine.name.toLowerCase()}. En revanche, ${remote.length} organisme${remote.length > 1 ? "s proposent" : " propose"} cette formation en e-learning ou distanciel, accessible depuis ${ville.name}.`,
        },
        {
            question: `Combien coûte une formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} ?`,
            answer: `Les prix varient de ${domaine.priceRange} selon l'organisme et le format. Les formations en présentiel sur campus sont généralement plus chères que le e-learning. Toutes sont finançables via le CPF, les OPCO ou France Travail.`,
        },
        {
            question: `Quelle est la meilleure formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} ?`,
            answer: `Le choix dépend de votre profil. ${local.length > 0 ? `Pour du présentiel ${ville.metaSuffix}, ${local[0].name} est une option reconnue (${local[0].rating}/5).` : ""} ${remote.length > 0 ? `En distanciel, ${remote[0].name} (${remote[0].rating}/5) offre une grande flexibilité.` : ""} Comparez les critères qui comptent pour vous : prix, format, durée et accompagnement.`,
        },
    ];

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateItemListSchema({
                            name: `Organismes de formation ${domaine.name} ${ville.metaSuffix}`,
                            description: `${totalCount} formations ${domaine.name.toLowerCase()} ${ville.metaSuffix}. ${local.length} en présentiel, ${remote.length} en distanciel. Certifiés Qualiopi, éligibles CPF.`,
                            url: `${seoConfig.siteUrl}/formation/${dSlug}/${vSlug}`,
                            items: [...local, ...remote].map((o) => ({
                                name: o.name,
                                url: `${seoConfig.siteUrl}/organisme/${o.slug}`,
                            })),
                        })
                    ),
                }}
            />
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateCourseSchema({
                            name: `Formation ${domaine.name} ${ville.metaSuffix}`,
                            description: `Comparatif des ${totalCount} formations ${domaine.name.toLowerCase()} ${ville.metaSuffix} en 2026. Prix : ${domaine.priceRange}. Durée : ${domaine.averageDuration}.`,
                            provider: seoConfig.siteName,
                            providerUrl: seoConfig.siteUrl,
                            url: `${seoConfig.siteUrl}/formation/${dSlug}/${vSlug}`,
                        })
                    ),
                }}
            />

            {/* Hero */}
            <section className="hero-gradient">
                <div className="container-narrow mx-auto px-4 py-14 md:py-18 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-foreground">Accueil</Link>
                            <span>/</span>
                            <Link href={`/formation/${dSlug}`} className="hover:text-foreground">
                                Formation {domaine.name}
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">{ville.name}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="badge badge-cpf">Éligible CPF</span>
                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                {ville.name}, {ville.region}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-foreground">
                            Formation {domaine.name} {ville.metaSuffix}
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                            {local.length > 0 ? (
                                <>{local.length} organisme{local.length > 1 ? "s" : ""} avec campus {ville.metaSuffix} et {remote.length} en distanciel proposent des formations {domaine.name.toLowerCase()} en {new Date().getFullYear()}. Tous certifiés Qualiopi, éligibles CPF.</>
                            ) : (
                                <>{totalCount} organismes proposent des formations {domaine.name.toLowerCase()} accessibles depuis {ville.name} en {new Date().getFullYear()}, principalement en e-learning et distanciel. Tous certifiés Qualiopi, éligibles CPF.</>
                            )}
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="glass-card p-4">
                                <Euro className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Prix moyen</p>
                                <p className="text-sm font-bold text-foreground">{domaine.priceRange}</p>
                            </div>
                            <div className="glass-card p-4">
                                <Clock className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Durée</p>
                                <p className="text-sm font-bold text-foreground">{domaine.averageDuration}</p>
                            </div>
                            <div className="glass-card p-4">
                                <Building2 className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">Sur campus</p>
                                <p className="text-sm font-bold text-foreground">{local.length} organisme{local.length > 1 ? "s" : ""}</p>
                            </div>
                            <div className="glass-card p-4">
                                <Monitor className="w-5 h-5 text-accent mb-1" />
                                <p className="text-xs text-muted-foreground">En distanciel</p>
                                <p className="text-sm font-bold text-foreground">{remote.length} organisme{remote.length > 1 ? "s" : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local organismes (with campus) */}
            {local.length > 0 && (
                <section className="section-padding">
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl font-extrabold text-foreground mb-2">
                            <Building2 className="w-6 h-6 inline -mt-1 mr-2 text-accent" />
                            Organismes avec campus {ville.metaSuffix}
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            {local.length} organisme{local.length > 1 ? "s proposent" : " propose"} des formations {domaine.name.toLowerCase()} en présentiel {ville.metaSuffix}.
                        </p>
                        <div className="space-y-5">
                            {local.map((org, i) => (
                                <OrganismeCard key={org.slug} org={org} rank={i + 1} villeSlug={vSlug} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Remote organismes (distanciel) */}
            {remote.length > 0 && (
                <section className={`section-padding ${local.length > 0 ? "bg-surface" : ""}`}>
                    <div className="container-narrow mx-auto px-4">
                        <h2 className="text-2xl font-extrabold text-foreground mb-2">
                            <Monitor className="w-6 h-6 inline -mt-1 mr-2 text-accent" />
                            Formations {domaine.name.toLowerCase()} en distanciel
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            {remote.length} organisme{remote.length > 1 ? "s proposent" : " propose"} des formations accessibles depuis {ville.name} en e-learning ou distanciel.
                        </p>
                        <div className="space-y-5">
                            {remote.map((org, i) => (
                                <OrganismeCard key={org.slug} org={org} rank={local.length + i + 1} villeSlug={vSlug} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Other cities */}
            <section className="section-padding bg-surface">
                <div className="container-narrow mx-auto px-4">
                    <h2 className="text-xl font-extrabold text-foreground mb-4">
                        Formation {domaine.name} dans d&apos;autres villes
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {topVilles
                            .filter((v) => v.slug !== vSlug)
                            .map((v) => (
                                <Link
                                    key={v.slug}
                                    href={`/formation/${dSlug}/${v.slug}`}
                                    className="badge text-xs bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors py-1.5 px-3"
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
                    <h2 className="text-xl font-extrabold text-foreground mb-6">
                        Questions fréquentes
                    </h2>
                    <div className="max-w-3xl space-y-3">
                        {faqItems.map((faq) => (
                            <details key={faq.question} className="glass-card p-4 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm text-foreground">
                                    {faq.question}
                                    <Award className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
