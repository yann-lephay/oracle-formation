"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="section-padding">
            <div className="container-narrow mx-auto px-4 text-center">
                <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h1 className="text-3xl font-extrabold text-foreground mb-3">
                    Une erreur est survenue
                </h1>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Quelque chose s&apos;est mal passé. Veuillez réessayer.
                </p>
                <button onClick={reset} className="btn-primary">
                    Réessayer
                </button>
            </div>
        </div>
    );
}
