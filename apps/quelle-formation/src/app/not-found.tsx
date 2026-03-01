import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <div className="section-padding">
            <div className="container-narrow mx-auto px-4 text-center">
                <SearchX className="w-16 h-16 text-surface-300 mx-auto mb-6" />
                <h1 className="text-3xl font-extrabold text-surface-900 mb-3">
                    Page introuvable
                </h1>
                <p className="text-surface-500 mb-8 max-w-md mx-auto">
                    La page que vous cherchez n&apos;existe pas ou a été déplacée.
                </p>
                <Link href="/" className="btn-primary">
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}
