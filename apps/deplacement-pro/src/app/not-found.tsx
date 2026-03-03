import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <SearchX className="w-12 h-12 text-muted-foreground mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold font-heading text-foreground mb-3">
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
