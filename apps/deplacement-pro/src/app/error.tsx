"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <section className="section-padding">
            <div className="container-narrow text-center">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-6" strokeWidth={1.5} />
                <h1 className="text-3xl font-bold font-heading text-foreground mb-3">
                    Une erreur est survenue
                </h1>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Quelque chose s&apos;est mal passé. Veuillez réessayer.
                </p>
                <button onClick={reset} className="btn-primary">
                    Réessayer
                </button>
            </div>
        </section>
    );
}
