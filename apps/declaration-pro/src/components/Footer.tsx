import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { solutions } from "@/lib/data/solutions";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-base font-bold font-heading text-foreground">
                Declaration<span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Comparez les meilleurs logiciels de déclaration professionnelle en France.
              DSN, TVA, liasse fiscale, URSSAF, bilan. 100 % indépendant.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Paris, France</span>
            </div>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Catégories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solution/${s.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Informations
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/methodologie"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@declaration-pro.fr"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DeclarationPro.fr — Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            DeclarationPro.fr est un comparateur indépendant. Certains liens sont des liens
            d&apos;affiliation qui nous permettent de financer le site sans surcoût pour vous.
          </p>
        </div>
      </div>
    </footer>
  );
}
