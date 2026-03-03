import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site DeplacementPro.fr.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-extrabold font-heading text-foreground">
            Mentions légales
          </h1>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">Éditeur du site</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DeplacementPro.fr est édité par [Nom de la société], [forme juridique],
              au capital de [montant] €.<br />
              Siège social : [Adresse]<br />
              RCS : [Ville] [Numéro]<br />
              Numéro de TVA : [Numéro]<br />
              Directeur de la publication : [Nom]<br />
              Contact : contact@deplacementpro.fr
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">Hébergement</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">Propriété intellectuelle</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes) présents
              sur DeplacementPro.fr est protégé par le droit d&apos;auteur. Toute reproduction,
              représentation ou diffusion, en tout ou partie, sans autorisation préalable
              écrite est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">Liens d&apos;affiliation</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              DeplacementPro.fr contient des liens d&apos;affiliation vers des solutions
              tierces. Lorsqu&apos;un visiteur souscrit à un service via ces liens, nous
              percevons une commission. Ce modèle de rémunération n&apos;influence pas nos
              évaluations ni nos classements, qui restent fondés sur des critères objectifs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-heading text-foreground mb-3">Limitation de responsabilité</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les informations publiées sur DeplacementPro.fr sont fournies à titre
              indicatif. Malgré tout le soin apporté à leur rédaction, nous ne pouvons
              garantir leur exactitude, exhaustivité ou actualité. DeplacementPro.fr
              ne saurait être tenu responsable des décisions prises sur la base de ces
              informations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
