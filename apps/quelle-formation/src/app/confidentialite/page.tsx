import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité de QuelleFormation.fr — Comment nous collectons, utilisons et protégeons vos données personnelles.",
  alternates: {
    canonical: "https://quelleformationpro.fr/confidentialite",
  },
};

export default function ConfidentialitePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://quelleformationpro.fr" },
    { name: "Politique de confidentialité", url: "https://quelleformationpro.fr/confidentialite" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="bg-muted border-b border-border">
        <div className="container-narrow mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground">
            Politique de confidentialité
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl space-y-10">

            {/* Introduction */}
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                La présente politique de confidentialité décrit comment QuelleFormation.fr,
                édité par LEPHAY Yann (auto-entrepreneur, SIRET 899 650 204 00022), collecte
                et utilise vos données personnelles conformément au Règlement Général sur la
                Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>

            {/* Données collectées */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                1. Données collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>
                  <strong>Données de navigation :</strong> pages visitées, durée de visite,
                  type de navigateur, résolution d&apos;écran (collectées de manière anonyme
                  via Vercel Analytics).
                </li>
                <li>
                  <strong>Données de formulaire :</strong> si vous utilisez le formulaire de
                  demande de devis, nous collectons votre nom, adresse email, domaine de
                  formation recherché et message.
                </li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                2. Finalités du traitement
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>Amélioration de l&apos;expérience utilisateur et du contenu du site</li>
                <li>Mesure d&apos;audience anonyme (Vercel Analytics)</li>
                <li>Traitement des demandes de devis et mise en relation avec les organismes</li>
                <li>Envoi d&apos;informations sollicitées par l&apos;utilisateur</li>
              </ul>
            </div>

            {/* Base légale */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                3. Base légale
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>
                  <strong>Votre consentement</strong> pour l&apos;envoi du formulaire de devis
                </li>
                <li>
                  <strong>L&apos;intérêt légitime</strong> de l&apos;éditeur pour les données
                  de navigation anonymes visant à améliorer le site
                </li>
              </ul>
            </div>

            {/* Conservation */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                4. Durée de conservation
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>
                  <strong>Données de navigation :</strong> 26 mois maximum (anonymisées)
                </li>
                <li>
                  <strong>Données de formulaire :</strong> 12 mois après le dernier contact,
                  puis supprimées
                </li>
              </ul>
            </div>

            {/* Partage */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                5. Partage des données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données personnelles ne sont jamais vendues. Elles peuvent être partagées
                avec :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li>
                  <strong>Vercel Inc.</strong> (hébergement et analytics) — données anonymes
                  uniquement
                </li>
                <li>
                  <strong>Organismes de formation partenaires</strong> — uniquement dans le
                  cadre d&apos;une demande de devis initiée par vous
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                6. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                QuelleFormation.fr utilise des cookies strictement nécessaires au
                fonctionnement du site et des cookies de mesure d&apos;audience anonyme
                (Vercel Analytics, Vercel Speed Insights). Aucun cookie publicitaire ou de
                pistage n&apos;est utilisé.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser tout ou partie des
                cookies. Le refus des cookies de mesure d&apos;audience n&apos;affectera pas
                votre expérience de navigation.
              </p>
            </div>

            {/* Droits */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                7. Vos droits
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
                <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@quelle-telephonie-pro.fr"
                  className="text-accent hover:underline"
                >
                  contact@quelle-telephonie-pro.fr
                </a>
                . Nous répondrons dans un délai de 30 jours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez également introduire une réclamation auprès de la{" "}
                <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des
                Libertés) : cnil.fr.
              </p>
            </div>

            {/* Sécurité */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                8. Sécurité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données : chiffrement HTTPS, hébergement sécurisé (Vercel),
                accès restreint aux données.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                9. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question relative à la protection de vos données :{" "}
                <a
                  href="mailto:contact@quelle-telephonie-pro.fr"
                  className="text-accent hover:underline"
                >
                  contact@quelle-telephonie-pro.fr
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
