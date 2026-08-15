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
            Dernière mise à jour : août 2026. Cette politique décrit comment
            DeplacementPro.fr collecte, utilise et protège vos données personnelles,
            conformément au RGPD.
          </p>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Données collectées
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DeplacementPro.fr ne propose pas de formulaire de devis et ne collecte
              aucune coordonnée depuis ses pages. La mesure de navigation transmet
              uniquement la page consultée et, lors d&apos;un clic pertinent, la cible,
              l&apos;emplacement et la nature éditoriale ou commerciale du lien. Ces
              événements sont conservés sous forme de totaux quotidiens, sans contenu
              saisi ni identifiant visiteur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Finalités
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ces mesures servent à comprendre les contenus consultés et les passages
              vers les fiches ou sites éditeurs, sans reconstituer de parcours
              individuel. Si vous nous contactez directement par email, votre adresse
              et le contenu du message servent uniquement à traiter votre demande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Durée de conservation
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les compteurs quotidiens ne contiennent ni identifiant visiteur, ni
              contenu saisi. Les emails reçus directement sont conservés uniquement le
              temps nécessaire à leur traitement et au suivi de l&apos;échange.
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
              info@yann-lephay.com.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Cookies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La mesure d&apos;audience et d&apos;interaction n&apos;utilise ni cookie, ni
              stockage local, ni identifiant persistant. Aucun bandeau cookie n&apos;est
              nécessaire pour cette mesure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Sous-traitants
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Vercel Inc. (hébergement) — États-Unis, clauses contractuelles types<br />
              • Notre prestataire de messagerie, uniquement si vous nous contactez par email
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">
              Contact
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pour toute question relative à la protection de vos données :
              info@yann-lephay.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
