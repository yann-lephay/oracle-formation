"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "TMC", href: "/tmc" },
  { label: "Self-booking", href: "/self-booking-tool" },
  { label: "Cartes Corporate", href: "/carte-corporate" },
  { label: "Notes de Frais", href: "/notes-de-frais" },
  { label: "Comparer", href: "/comparer" },
  { label: "Guides", href: "/guides" },
  { label: "Glossaire", href: "/glossaire" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2" aria-label="DeplacementPro — Accueil">
          <Image
            src="/deplacement-pro-logo.png"
            alt="DeplacementPro"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="text-base font-bold font-heading text-foreground">
            Deplacement<span className="text-primary">Pro</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#devis" className="btn-primary text-sm">
            Demander un devis
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#devis"
              className="btn-primary text-sm text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
