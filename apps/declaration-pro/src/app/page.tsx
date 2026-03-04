import Link from "next/link";
import {
  ArrowRight,
  Star,
  FileText,
  Calculator,
  FileStack,
  Shield,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { solutions, getSolutionCountByCategory } from "@/lib/data/solutions";
import { comparisons } from "@/lib/data/comparisons";
import { guides } from "@/lib/data/guides";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structured-data";
import { DevisForm } from "@/components/DevisForm";
import { SearchBar, type SearchItem } from "@/components/SearchBar";

const searchItems: SearchItem[] = [
  ...solutions.map((s) => ({ label: s.name, href: `/solution/${s.slug}`, type: "Solutions" })),
  ...categories.map((c) => ({ label: c.name, href: `/${c.slug}`, type: "Catégories" })),
  ...guides.map((g) => ({ label: g.shortTitle, href: `/guides/${g.slug}`, type: "Guides" })),
];

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calculator,
  FileStack,
  Shield,
  BarChart3,
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="badge badge-accent">
              Comparateur indépendant — mis à jour en mars 2026
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight tracking-tight text-foreground">
              Simplifiez vos{" "}
              <span className="text-primary">déclarations professionnelles</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comparez <strong className="text-foreground">6 logiciels</strong> de comptabilité
              et déclaration : DSN, TVA, liasse fiscale, URSSAF.
              Trouvez l&apos;outil adapté à votre entreprise. 100 % indépendant, 100 % gratuit.
            </p>

            <SearchBar items={searchItems} />

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                6 logiciels comparés
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                Avis vérifiés
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                Guides réglementaires 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section-padding !pt-0 !pb-16 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "6", label: "Logiciels comparés", icon: BarChart3 },
              { value: "5", label: "Types de déclarations", icon: FileText },
              { value: "100%", label: "Conformité française", icon: Shield },
              { value: "100%", label: "Indépendant et gratuit", icon: CheckCircle2 },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-2xl md:text-3xl font-extrabold font-heading text-foreground font-mono">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATÉGORIES ============ */}
      <section className="section-padding !pt-0" id="categories">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Explorez par type de déclaration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DSN, TVA, liasse fiscale, URSSAF, bilan — trouvez le logiciel adapté à vos obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || FileText;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="card p-5 group"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-semibold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {cat.shortName}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {cat.priceRange}
                    </span>
                    <span className="badge text-[10px]">
                      {getSolutionCountByCategory(cat.slug)} logiciels
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS ============ */}
      <section className="section-padding bg-muted" id="solutions">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Les meilleurs logiciels comparés
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prix, fonctionnalités, avis clients — toutes les informations pour choisir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 flex flex-col group bg-surface"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {sol.name}
                      </h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 text-accent fill-accent" strokeWidth={1.5} />
                        <span className="text-sm font-semibold font-mono text-foreground">
                          {sol.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{sol.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {sol.description.slice(0, 150)}…
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sol.categories.slice(0, 3).map((catSlug) => {
                    const cat = categories.find((c) => c.slug === catSlug);
                    return (
                      <span key={catSlug} className="badge text-[10px]">
                        {cat?.shortName || catSlug}
                      </span>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-mono text-sm text-foreground">
                    {sol.priceRange}
                  </span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir l&apos;avis
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARATIFS ============ */}
      <section className="section-padding" id="comparatifs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Comparatifs tête-à-tête
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des analyses détaillées pour vous aider à choisir entre deux logiciels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/comparer/${comp.slug}`}
                className="card p-5 text-center group"
              >
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2">
                  {comp.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                  {comp.intro.slice(0, 120)}…
                </p>
                <span className="text-xs text-primary font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Lire le comparatif
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GUIDES ============ */}
      <section className="section-padding bg-muted" id="guides">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Guides pratiques & réglementaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Échéances, obligations, pénalités et bonnes pratiques pour vos déclarations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-5 group bg-surface"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-[10px]">{guide.category}</span>
                  <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
                </div>
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                  {guide.shortTitle}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVIS ============ */}
      <section className="section-padding" id="devis">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recevez des propositions personnalisées de plusieurs éditeurs en une seule demande.
              Gratuit et sans engagement.
            </p>
          </div>
          <DevisForm />
        </div>
      </section>

      {/* ============ SEO TEXT ============ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
              Comment simplifier ses déclarations professionnelles en 2026 ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les obligations déclaratives des entreprises françaises se multiplient : DSN mensuelle,
              TVA, liasse fiscale, facturation électronique obligatoire dès septembre 2026.
              DeclarationPro.fr vous aide à comparer les meilleurs logiciels selon des critères
              objectifs : conformité, automatisation, prix et avis clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Que vous cherchiez un logiciel pour la{" "}
              <Link href="/dsn" className="text-primary hover:underline">
                DSN
              </Link>
              , la{" "}
              <Link href="/tva" className="text-primary hover:underline">
                déclaration de TVA
              </Link>{" "}
              ou la{" "}
              <Link href="/liasse-fiscale" className="text-primary hover:underline">
                liasse fiscale
              </Link>
              , notre comparateur indépendant vous permet de trouver la solution adaptée
              à votre entreprise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
