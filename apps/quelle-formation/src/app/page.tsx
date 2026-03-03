import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Shield,
  BookOpen,
  Code,
  BarChart3,
  Megaphone,
  Brain,
  Palette,
  Calculator,
  Globe,
  Rocket,
  Target,
  Cloud,
} from "lucide-react";
import { domaines } from "@/lib/data/domaines";
import { organismes } from "@/lib/data/organismes";
import { comparisons } from "@/lib/data/comparisons";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/lib/structured-data";
import { DevisForm } from "@/components/DevisForm";
import { SearchBar } from "@/components/SearchBar";

const iconMap: Record<string, React.ElementType> = {
  Code,
  BarChart3,
  Megaphone,
  Shield,
  Brain,
  Kanban: BookOpen,
  Calculator,
  Palette,
  Users,
  ShoppingCart: TrendingUp,
  Globe,
  Rocket,
  Table: BookOpen,
  Building2: BookOpen,
  Camera: BookOpen,
  PenTool: Palette,
  UserCheck: Users,
  Cloud,
  Target,
  HardHat: Shield,
};

export default function HomePage() {
  const topDomaines = domaines.slice(0, 12);
  const topOrganismes = organismes.slice(0, 6);

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
      <section className="hero-gradient text-white">
        <div className="container-narrow mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-white/90">
                Comparateur indépendant — mis à jour en mars 2026
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Trouvez la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-400">
                formation professionnelle
              </span>{" "}
              idéale
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Comparez <strong className="text-white">14 organismes certifiés Qualiopi</strong>,
              20 domaines de formation et trouvez le meilleur financement CPF.
              100 % indépendant, 100 % gratuit.
            </p>

            {/* Search bar */}
            <SearchBar />

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                14 organismes certifiés Qualiopi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                Formations éligibles CPF
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400" />
                Avis vérifiés
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative -mt-8 z-20 section-padding !pt-0 !pb-16">
        <div className="container-narrow mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "38,9M", label: "Titulaires CPF en France", icon: Users },
              { value: "20+", label: "Domaines de formation", icon: BookOpen },
              { value: "14", label: "Organismes comparés", icon: Award },
              { value: "100%", label: "Indépendant et gratuit", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-surface-900">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-surface-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOMAINES ============ */}
      <section className="section-padding !pt-0" id="domaines">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-3">
              Explorez par domaine de formation
            </h2>
            <p className="text-surface-500 max-w-2xl mx-auto">
              20 domaines couverts avec les prix, durées, taux d&apos;insertion et éligibilité CPF pour chaque filière.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {topDomaines.map((domaine) => {
              const Icon = iconMap[domaine.icon] || BookOpen;
              return (
                <Link
                  key={domaine.slug}
                  href={`/formation/${domaine.slug}`}
                  className="glass-card p-5 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-surface-900 group-hover:text-primary-600 transition-colors text-sm">
                      Formation {domaine.shortName}
                    </h3>
                    <p className="text-xs text-surface-500 mt-0.5">{domaine.priceRange}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {domaine.cpfEligible && (
                        <span className="badge badge-cpf text-[10px]">CPF</span>
                      )}
                      <span className="text-[10px] text-surface-400">
                        {domaine.averageDuration}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ORGANISMES ============ */}
      <section className="section-padding bg-white" id="organismes">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-3">
              Les meilleurs organismes de formation
            </h2>
            <p className="text-surface-500 max-w-2xl mx-auto">
              Tous certifiés Qualiopi. Avis, prix, programmes et éligibilité CPF comparés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topOrganismes.map((org) => (
              <Link
                key={org.slug}
                href={`/organisme/${org.slug}`}
                className="glass-card p-6 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                      {org.name}
                    </h3>
                    <p className="text-xs text-surface-500 mt-0.5">{org.tagline}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-surface-900">
                      {org.rating}
                    </span>
                    <span className="text-xs text-surface-400">
                      ({org.reviewCount})
                    </span>
                  </div>
                </div>

                <p className="text-sm text-surface-600 line-clamp-3 mb-4 flex-1">
                  {org.description.slice(0, 200)}…
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {org.certifications.map((cert) => (
                    <span key={cert} className="badge badge-qualiopi text-[10px]">
                      {cert}
                    </span>
                  ))}
                  {org.cpfEligible && (
                    <span className="badge badge-cpf text-[10px]">CPF</span>
                  )}
                  {org.formats.map((f) => (
                    <span
                      key={f}
                      className="badge text-[10px] bg-surface-100 text-surface-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                  <span className="text-sm font-medium text-surface-900">
                    {org.priceRange}
                  </span>
                  <span className="text-xs text-primary-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Voir l&apos;avis complet
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARATIFS ============ */}
      <section className="section-padding" id="comparatifs">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-3">
              Comparatifs tête-à-tête
            </h2>
            <p className="text-surface-500 max-w-2xl mx-auto">
              Des analyses détaillées et impartiales pour vous aider à choisir entre deux organismes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comp) => {
              const org1 = organismes.find((o) => o.slug === comp.organisme1);
              const org2 = organismes.find((o) => o.slug === comp.organisme2);
              return (
                <Link
                  key={comp.slug}
                  href={`/comparer/${comp.slug}`}
                  className="glass-card p-6 group"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-2">
                        <GraduationCap className="w-6 h-6 text-primary-600" />
                      </div>
                      <p className="text-xs font-semibold text-surface-900">
                        {org1?.name || comp.organisme1}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-surface-300">VS</span>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-2">
                        <GraduationCap className="w-6 h-6 text-accent-600" />
                      </div>
                      <p className="text-xs font-semibold text-surface-900">
                        {org2?.name || comp.organisme2}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-center font-bold text-surface-900 group-hover:text-primary-600 transition-colors mb-2">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-surface-500 text-center line-clamp-2">
                    {comp.intro.slice(0, 120)}…
                  </p>

                  <div className="mt-4 text-center">
                    <span className="text-xs text-primary-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      Lire le comparatif
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DEVIS FORMULAIRE ============ */}
      <section className="section-padding bg-primary-950" id="devis">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Besoin d&apos;aide pour choisir ?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Recevez un devis personnalisé de plusieurs organismes en une seule demande.
              Gratuit et sans engagement.
            </p>
          </div>
          <DevisForm />
        </div>
      </section>

      {/* ============ SEO TEXT ============ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-bold text-surface-900">
              Comment choisir sa formation professionnelle en 2026 ?
            </h2>
            <p className="text-surface-600 leading-relaxed">
              Le marché de la formation professionnelle en France compte plus de{" "}
              <strong>16 000 organismes certifiés Qualiopi</strong> et{" "}
              <strong>38,9 millions de titulaires de CPF</strong>. Face à cette offre
              pléthorique, QuelleFormation.fr vous aide à comparer les meilleurs organismes
              selon des critères objectifs : prix, durée, certifications, avis d&apos;anciens
              étudiants et éligibilité aux financements (CPF, OPCO, France Travail).
            </p>
            <p className="text-surface-600 leading-relaxed">
              Que vous cherchiez une{" "}
              <Link href="/formation/developpeur-web" className="text-primary-600 hover:underline">
                formation développeur web
              </Link>
              , une{" "}
              <Link href="/formation/data-analyst" className="text-primary-600 hover:underline">
                formation data analyst
              </Link>{" "}
              ou une{" "}
              <Link href="/formation/marketing-digital" className="text-primary-600 hover:underline">
                formation marketing digital
              </Link>
              , notre comparateur indépendant vous permet de trouver la formation idéale au
              meilleur prix.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
