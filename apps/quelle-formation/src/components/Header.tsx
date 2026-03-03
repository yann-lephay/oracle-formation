"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    {
        label: "Formations",
        href: "/formation/developpeur-web",
        children: [
            { label: "Développeur Web", href: "/formation/developpeur-web" },
            { label: "Data Analyst", href: "/formation/data-analyst" },
            { label: "Marketing Digital", href: "/formation/marketing-digital" },
            { label: "Cybersécurité", href: "/formation/cybersecurite" },
            { label: "Intelligence Artificielle", href: "/formation/intelligence-artificielle" },
            { label: "Toutes les formations →", href: "/#domaines" },
        ],
    },
    {
        label: "Organismes",
        href: "/organisme/openclassrooms",
        children: [
            { label: "OpenClassrooms", href: "/organisme/openclassrooms" },
            { label: "Jedha", href: "/organisme/jedha" },
            { label: "Le Wagon", href: "/organisme/le-wagon" },
            { label: "AFPA", href: "/organisme/afpa" },
            { label: "CNAM", href: "/organisme/cnam" },
            { label: "Simplon", href: "/organisme/simplon" },
            { label: "Tous les organismes →", href: "/#organismes" },
        ],
    },
    {
        label: "Comparer",
        href: "/comparer/openclassrooms-vs-jedha",
        children: [
            { label: "OpenClassrooms vs Jedha", href: "/comparer/openclassrooms-vs-jedha" },
            { label: "Le Wagon vs Ironhack", href: "/comparer/le-wagon-vs-ironhack" },
            { label: "Jedha vs DataScientest", href: "/comparer/jedha-vs-datascientest" },
            { label: "Tous les comparatifs →", href: "/#comparatifs" },
        ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Méthodologie", href: "/methodologie" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-surface-200/60">
            <div className="container-narrow mx-auto flex items-center justify-between px-4 h-16 md:h-18">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="QuelleFormation.fr — Accueil">
                    <Image
                        src="/quelleformation-logo.png"
                        alt="QuelleFormation"
                        width={36}
                        height={36}
                        className="group-hover:opacity-80 transition-opacity"
                    />
                    <span className="text-lg font-bold font-heading text-surface-900 hidden sm:inline">
                        Quelle<span className="gradient-text">Formation</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                    aria-expanded={openDropdown === link.label}
                                >
                                    {link.label}
                                    <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                                {openDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-surface-200/60 py-2 animate-fade-in-up">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 rounded-lg text-sm font-medium text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/#devis" className="btn-primary text-sm">
                        Demander un devis gratuit
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 rounded-lg text-surface-700 hover:bg-surface-100"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-surface-200/60 animate-fade-in-up">
                    <nav className="px-4 py-4 space-y-1" aria-label="Navigation mobile">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-surface-700 hover:text-primary-600 hover:bg-primary-50"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {link.children && (
                                    <div className="ml-4 space-y-0.5">
                                        {link.children.slice(0, 3).map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-3 py-2 rounded-lg text-xs text-surface-500 hover:text-primary-600 hover:bg-primary-50"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-3">
                            <Link
                                href="/#devis"
                                className="btn-primary text-sm w-full text-center"
                                onClick={() => setMobileOpen(false)}
                            >
                                Demander un devis gratuit
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
