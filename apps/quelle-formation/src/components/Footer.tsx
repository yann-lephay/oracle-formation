import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { domaines } from "@/lib/data/domaines";

export function Footer() {
    const topDomaines = domaines.slice(0, 8);

    return (
        <footer className="bg-surface-900 text-surface-300" id="footer">
            <div className="container-narrow mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/quelleformation-logo.png"
                                alt="QuelleFormation"
                                width={36}
                                height={36}
                                className="rounded-xl"
                            />
                            <span className="text-lg font-bold font-heading text-white">
                                Quelle<span className="text-primary-400">Formation</span>
                            </span>
                        </Link>
                        <p className="text-sm text-surface-400 leading-relaxed">
                            Comparez les meilleures formations professionnelles en France.
                            Prix, avis, CPF, organismes certifiés. Trouvez la formation qui
                            vous correspond.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-surface-500">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Paris, France</span>
                        </div>
                    </div>

                    {/* Formations populaires */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Formations populaires
                        </h3>
                        <ul className="space-y-2.5">
                            {topDomaines.map((d) => (
                                <li key={d.slug}>
                                    <Link
                                        href={`/formation/${d.slug}`}
                                        className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                    >
                                        Formation {d.shortName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Organismes */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
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
                                        className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                    >
                                        Avis {org.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Infos */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Informations
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/methodologie"
                                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                >
                                    Notre méthodologie
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                >
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/confidentialite"
                                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@quelleformationpro.fr"
                                    className="text-sm text-surface-400 hover:text-primary-400 transition-colors flex items-center gap-1.5"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-surface-500">
                        © {new Date().getFullYear()} QuelleFormation.fr — Tous droits réservés.
                    </p>
                    <p className="text-xs text-surface-500 text-center md:text-right max-w-md">
                        QuelleFormation.fr est un comparateur indépendant. Certains liens sont des liens
                        d&apos;affiliation qui nous permettent de financer le site sans surcoût pour vous.
                    </p>
                </div>
            </div>
        </footer>
    );
}
