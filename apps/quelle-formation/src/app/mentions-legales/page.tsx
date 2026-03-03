import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site QuelleFormation.fr — Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  alternates: {
    canonical: "https://quelleformationpro.fr/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "https://quelleformationpro.fr" },
    { name: "Mentions légales", url: "https://quelleformationpro.fr/mentions-legales" },
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
            Mentions légales
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

            {/* Éditeur */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                1. Éditeur du site
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Nom :</strong> LEPHAY Yann</p>
                <p><strong>Statut :</strong> Entrepreneur individuel (Auto-entrepreneur)</p>
                <p><strong>SIRET :</strong> 899 650 204 00022</p>
                <p><strong>Adresse :</strong> 53 Avenue Charles de Gaulle, 57530 Courcelles-Chaussy, France</p>
                <p><strong>Email :</strong> contact@quelle-telephonie-pro.fr</p>
                <p><strong>Directeur de la publication :</strong> LEPHAY Yann</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                2. Hébergeur
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Vercel Inc.</strong></p>
                <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p>Site web : vercel.com</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;ensemble des contenus présents sur le site QuelleFormation.fr (textes,
                images, graphismes, logo, icônes, etc.) est protégé par les lois françaises
                et internationales relatives à la propriété intellectuelle. Toute
                reproduction, représentation, modification ou adaptation, totale ou partielle,
                est strictement interdite sans autorisation préalable écrite de l&apos;éditeur.
              </p>
            </div>

            {/* Données personnelles */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                4. Données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations relatives au traitement de vos données personnelles sont
                détaillées dans notre{" "}
                <a
                  href="/confidentialite"
                  className="text-accent hover:underline"
                >
                  Politique de confidentialité
                </a>
                .
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                5. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site utilise des cookies à des fins de mesure d&apos;audience (Vercel Analytics)
                et d&apos;amélioration de l&apos;expérience utilisateur. Ces cookies sont anonymes et
                ne permettent pas d&apos;identifier personnellement un visiteur. Vous pouvez
                configurer votre navigateur pour refuser les cookies.
              </p>
            </div>

            {/* Liens d'affiliation */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                6. Liens d&apos;affiliation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                QuelleFormation.fr est un comparateur indépendant. Certains liens présents
                sur le site sont des liens d&apos;affiliation : lorsque vous cliquez sur ces
                liens et effectuez un achat ou une inscription, nous pouvons percevoir une
                commission de la part de l&apos;organisme partenaire, sans aucun surcoût pour
                vous. Ces partenariats n&apos;influencent pas nos classements ni nos avis, qui
                reposent sur une méthodologie transparente.
              </p>
            </div>

            {/* Limitation de responsabilité */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                7. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations fournies sur QuelleFormation.fr sont données à titre
                indicatif. Malgré tout le soin apporté à leur rédaction, l&apos;éditeur ne
                saurait garantir l&apos;exactitude, la complétude ou l&apos;actualité des
                informations diffusées. L&apos;utilisateur est invité à vérifier les
                informations directement auprès des organismes de formation concernés.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading text-foreground">
                8. Droit applicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de
                litige, et après tentative de résolution amiable, les tribunaux français
                seront seuls compétents.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
