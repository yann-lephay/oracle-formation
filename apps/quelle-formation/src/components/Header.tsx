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
            { label: "Toutes les formations", href: "/formations" },
            { label: "Par ville", href: "/formations#villes" },
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
            { label: "Tous les organismes", href: "/organismes" },
        ],
    },
    {
        label: "Comparer",
        href: "/comparer/openclassrooms-vs-jedha",
        children: [
            { label: "OpenClassrooms vs Jedha", href: "/comparer/openclassrooms-vs-jedha" },
            { label: "Le Wagon vs Ironhack", href: "/comparer/le-wagon-vs-ironhack" },
            { label: "Jedha vs DataScientest", href: "/comparer/jedha-vs-datascientest" },
            { label: "Tous les comparatifs", href: "/comparer" },
        ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Méthodologie", href: "/methodologie" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" aria-label="QuelleFormation — Accueil">
                    <Image
                        src="/quelleformation-logo.png"
                        alt="QuelleFormation"
                        width={28}
                        height={28}
                    />
                    <span className="text-base font-bold font-heading text-foreground hidden sm:inline">
                        Quelle<span className="text-accent">Formation</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                                    className="flex items-center gap-1 px-3 py-2 rounded text-sm font-medium text-foreground hover:text-accent hover:bg-muted transition-colors"
                                    aria-expanded={openDropdown === link.label}
                                >
                                    {link.label}
                                    <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                                {openDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-surface rounded border border-border py-1 shadow-sm animate-fade-in-up">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
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
                                className="px-3 py-2 rounded text-sm font-medium text-foreground hover:text-accent hover:bg-muted transition-colors"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="/#devis" className="btn-primary text-sm">
                        Demander un devis
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 rounded text-foreground hover:bg-muted"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <div className="md:hidden bg-surface border-t border-border">
                    <nav className="px-4 py-3 space-y-0.5" aria-label="Navigation mobile">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block px-3 py-2 rounded text-sm font-medium text-foreground hover:text-accent hover:bg-muted"
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
                                                className="block px-3 py-1.5 rounded text-xs text-muted-foreground hover:text-accent hover:bg-muted"
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
                                Demander un devis
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
