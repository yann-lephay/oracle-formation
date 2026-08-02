import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function ComparisonCta() {
  return (
    <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto text-left">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-md bg-accent/10 p-2 text-accent">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Comparez sans transmettre vos coordonnées
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Consultez les prix, formats et avis publiés sur le site. Nous ne
            transmettons actuellement aucune demande à un organisme de formation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/organismes" className="btn-primary text-sm">
              Comparer les organismes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/methodologie" className="btn-secondary text-sm">
              Voir notre méthode
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
