import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { domaines } from "@/lib/data/domaines";
import { topVilles } from "@/lib/data/villes";

export function Footer() {
    const topDomaines = domaines.slice(0, 8);

    return (
        <footer className="bg-foreground text-muted" id="footer">
            <div className="container-narrow mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/quelleformation-logo.png"
                                alt="QuelleFormation"
                                width={36}
                                height={36}
                                className="rounded-lg"
                            />
                            <span className="text-lg font-bold font-heading text-primary-foreground">
                                Quelle<span className="text-accent">Formation</span>
                            </span>
                        </Link>
                        <p className="text-sm text-primary-foreground/50 leading-relaxed">
                            Comparez les meilleures formations professionnelles en France.
                            Prix, avis, CPF, organismes certifiés. Trouvez la formation qui
                            vous correspond.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Paris, France</span>
                        </div>
                    </div>

                    {/* Formations populaires */}
                    <div>
                        <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
                            Formations populaires
                        </h3>
                        <ul className="space-y-2.5">
                            {topDomaines.map((d) => (
                                <li key={d.slug}>
                                    <Link
                                        href={`/formation/${d.slug}`}
                                        className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                    >
                                        Formation {d.shortName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Organismes */}
                    <div>
                        <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
                            Organismes
                        </h3>
                        <ul className="space-y-2.5">
                            {[
                                { name: "OpenClassrooms", slug: "openclassrooms" },
                                { name: "Jedha", slug: "jedha" },
                                { name: "Le Wagon", slug: "le-wagon" },
                                { name: "LiveMentor", slug: "livementor" },
                                { name: "DataScientest", slug: "datascientest" },
                                { name: "Studi", slug: "studi" },
                                { name: "Ironhack", slug: "ironhack" },
                                { name: "Wild Code School", slug: "wild-code-school" },
                                { name: "AFPA", slug: "afpa" },
                                { name: "CNAM", slug: "cnam" },
                                { name: "M2i Formation", slug: "m2i-formation" },
                                { name: "Demos", slug: "demos" },
                                { name: "Simplon", slug: "simplon" },
                                { name: "Ynov Campus", slug: "ynov-campus" },
                            ].map((org) => (
                                <li key={org.slug}>
                                    <Link
                                        href={`/organisme/${org.slug}`}
                                        className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                    >
                                        Avis {org.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Villes */}
                    <div className="md:hidden lg:block">
                        <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
                            Villes
                        </h3>
                        <ul className="space-y-2.5">
                            {topVilles.map((v, i) => {
                                const domaine = topDomaines[i % topDomaines.length];
                                return (
                                    <li key={v.slug}>
                                        <Link
                                            href={`/formation/${domaine.slug}/${v.slug}`}
                                            className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                        >
                                            Formation {domaine.shortName} {v.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Ressources */}
                    <div>
                        <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
                            Ressources
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href="/guide"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Guides pratiques
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/metier"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Fiches métier
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/glossaire"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Glossaire
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pour"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Pour qui ?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/comparer"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Comparatifs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/methodologie"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Notre méthodologie
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                                >
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@quelleformationpro.fr"
                                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-1.5"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-primary-foreground/40">
                        © {new Date().getFullYear()} QuelleFormation.fr — Tous droits réservés.
                    </p>
                    <p className="text-xs text-primary-foreground/40 text-center md:text-right max-w-md">
                        QuelleFormation.fr est un comparateur indépendant. Certains liens sont des liens
                        d&apos;affiliation qui nous permettent de financer le site sans surcoût pour vous.
                    </p>
                </div>
            </div>
        </footer>
    );
}
