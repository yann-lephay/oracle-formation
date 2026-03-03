"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { domaines } from "@/lib/data/domaines";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  prenom: string;
  email: string;
  telephone: string;
  domaine: string;
  situation: string;
  financement: string;
  message: string;
}

const SITUATIONS = [
  "Salarié",
  "Demandeur d'emploi",
  "Indépendant",
  "Étudiant",
  "Autre",
];

const FINANCEMENTS = [
  "CPF",
  "OPCO / Employeur",
  "France Travail (AIF)",
  "Personnel",
  "Je ne sais pas",
];

interface DevisFormProps {
  defaultDomaine?: string;
}

export function DevisForm({ defaultDomaine }: DevisFormProps = {}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    email: "",
    telephone: "",
    domaine: defaultDomaine || "",
    situation: "",
    financement: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Une erreur est survenue.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card p-8 md:p-12 text-center space-y-4 max-w-2xl mx-auto">
        <CheckCircle2 className="w-12 h-12 text-primary-500 mx-auto" />
        <h3 className="text-2xl font-bold text-surface-900">
          Demande envoyée !
        </h3>
        <p className="text-surface-600">
          Merci {formData.prenom}. Vous recevrez vos devis personnalisés sous 48h
          à l&apos;adresse <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-6 md:p-10 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Prénom */}
        <div className="space-y-1.5">
          <label htmlFor="prenom" className="text-sm font-medium text-surface-700">
            Prénom <span className="text-accent-500">*</span>
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Votre prénom"
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 placeholder:text-surface-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-surface-700">
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="vous@exemple.com"
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 placeholder:text-surface-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          />
        </div>

        {/* Téléphone */}
        <div className="space-y-1.5">
          <label htmlFor="telephone" className="text-sm font-medium text-surface-700">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 placeholder:text-surface-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          />
        </div>

        {/* Domaine */}
        <div className="space-y-1.5">
          <label htmlFor="domaine" className="text-sm font-medium text-surface-700">
            Domaine de formation
          </label>
          <select
            id="domaine"
            name="domaine"
            value={formData.domaine}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          >
            <option value="">— Sélectionnez —</option>
            {domaines.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
            <option value="autre">Autre / Je ne sais pas encore</option>
          </select>
        </div>

        {/* Situation */}
        <div className="space-y-1.5">
          <label htmlFor="situation" className="text-sm font-medium text-surface-700">
            Situation actuelle
          </label>
          <select
            id="situation"
            name="situation"
            value={formData.situation}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          >
            <option value="">— Sélectionnez —</option>
            {SITUATIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Financement */}
        <div className="space-y-1.5">
          <label htmlFor="financement" className="text-sm font-medium text-surface-700">
            Financement envisagé
          </label>
          <select
            id="financement"
            name="financement"
            value={formData.financement}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
          >
            <option value="">— Sélectionnez —</option>
            {FINANCEMENTS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-surface-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet de formation…"
            className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-800 placeholder:text-surface-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-y"
          />
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary text-base px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Recevoir mes devis gratuits
            </>
          )}
        </button>
        <p className="text-xs text-surface-500 mt-3">
          Gratuit et sans engagement. Vos données restent confidentielles.
        </p>
      </div>
    </form>
  );
}
