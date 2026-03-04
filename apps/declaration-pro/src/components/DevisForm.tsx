"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { categories } from "@/lib/data/categories";

interface FormData {
  prenom: string;
  email: string;
  telephone: string;
  categorie: string;
  poste: string;
  tailleEntreprise: string;
  message: string;
}

const postes = [
  "Expert-comptable",
  "DAF / Directeur Financier",
  "Comptable",
  "Dirigeant / CEO",
  "Office Manager",
  "Autre",
];

const taillesEntreprise = [
  "Auto-entrepreneur",
  "1-10 salariés",
  "11-50 salariés",
  "51-200 salariés",
  "200+ salariés",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function DevisForm({ defaultCategorie }: { defaultCategorie?: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    email: "",
    telephone: "",
    categorie: defaultCategorie || "",
    poste: "",
    tailleEntreprise: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center max-w-lg mx-auto">
        <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-bold font-heading text-foreground mb-2">
          Demande envoyée
        </h3>
        <p className="text-sm text-muted-foreground">
          Nous avons bien reçu votre demande. Vous recevrez des propositions
          personnalisées sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-foreground mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email professionnel
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="categorie" className="block text-sm font-medium text-foreground mb-1">
            Type de déclaration
          </label>
          <select
            id="categorie"
            name="categorie"
            required
            value={formData.categorie}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Sélectionnez</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.shortName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="poste" className="block text-sm font-medium text-foreground mb-1">
            Votre poste
          </label>
          <select
            id="poste"
            name="poste"
            required
            value={formData.poste}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Sélectionnez</option>
            {postes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tailleEntreprise" className="block text-sm font-medium text-foreground mb-1">
            Taille entreprise
          </label>
          <select
            id="tailleEntreprise"
            name="tailleEntreprise"
            required
            value={formData.tailleEntreprise}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Sélectionnez</option>
            {taillesEntreprise.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
          Précisions (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
        />
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="w-4 h-4" strokeWidth={1.5} />
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full mt-6 disabled:opacity-50"
      >
        {status === "submitting" ? (
          "Envoi en cours…"
        ) : (
          <>
            <Send className="w-4 h-4" strokeWidth={1.5} />
            Recevoir des propositions gratuites
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center mt-3">
        Gratuit et sans engagement. Vos données ne sont jamais revendues.
      </p>
    </form>
  );
}
