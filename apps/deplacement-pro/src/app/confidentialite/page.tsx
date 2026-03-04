import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de DeplacementPro.fr.",
  alternates: { canonical: "https://deplacement-pro.fr/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-extrabold font-heading text-foreground">
            Politique de confidentialité
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Dernière mise à jour : mars 2026. Cette politique décrit comment
            DeplacementPro.fr collecte, utilise et protège vos données personnelles,
            conformément au RGPD.
          </p>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Données collectées
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous collectons les données suivantes :<br />
              • <strong>Formulaire de devis</strong> : prénom, email, téléphone,
              poste, taille d&apos;entreprise, message (base légale : consentement).<br />
              • <strong>Navigation</strong> : données anonymisées via Vercel Analytics
              (pas de cookies tiers, conforme RGPD sans bandeau).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Finalités
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les données du formulaire sont utilisées exclusivement pour transmettre
              votre demande aux éditeurs de solutions sélectionnés. Les données de
              navigation servent à améliorer le site (pages les plus consultées,
              parcours utilisateur).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Durée de conservation
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les données du formulaire sont conservées 12 mois maximum. Les données
              de navigation anonymisées sont conservées 26 mois.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Vos droits
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, de portabilité et d&apos;opposition.
              Pour exercer ces droits, contactez-nous à :
              contact@deplacement-pro.fr.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Cookies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DeplacementPro.fr utilise Vercel Analytics, une solution d&apos;analyse
              respectueuse de la vie privée qui ne dépose aucun cookie et ne collecte
              aucune donnée personnelle identifiable. Aucun bandeau cookie n&apos;est
              nécessaire.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Sous-traitants
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Vercel Inc. (hébergement, analytics) — États-Unis, clauses contractuelles types<br />
              • Les éditeurs de solutions auxquels vos demandes de devis sont transmises
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pour toute question relative à la protection de vos données :
              contact@deplacement-pro.fr.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
