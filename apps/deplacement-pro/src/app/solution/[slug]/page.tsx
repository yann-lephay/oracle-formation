import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Star, ExternalLink, Check, X as XIcon } from "lucide-react";
import { solutions, getSolutionBySlug } from "@/lib/data/solutions";
import { categories } from "@/lib/data/categories";
import {
  generateSolutionSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return {};
  return {
    title: sol.metaTitle,
    description: sol.metaDescription,
    alternates: { canonical: `${seoConfig.siteUrl}/solution/${sol.slug}` },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSolutionSchema(sol)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(sol.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Solutions", url: "/#solutions" },
              { name: sol.name, url: `/solution/${sol.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              {sol.categories.map((catSlug) => {
                const cat = categories.find((c) => c.slug === catSlug);
                return (
                  <Link key={catSlug} href={`/${catSlug}`} className="badge text-xs hover:border-primary">
                    {cat?.shortName || catSlug}
                  </Link>
                );
              })}
            </div>

            <Image
              src={sol.logo}
              alt={`Logo ${sol.name}`}
              width={120}
              height={40}
              className="rounded mb-4"
            />

            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-2">
              Avis {sol.name} — {new Date().getFullYear()}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{sol.tagline}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-accent fill-accent" strokeWidth={1.5} />
                <span className="font-mono text-lg font-bold text-foreground">{sol.rating}</span>
                <span className="text-sm text-muted-foreground">({sol.reviewCount} avis)</span>
              </div>
              <span className="font-mono text-sm text-muted-foreground">{sol.priceRange}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold font-heading text-foreground mb-3">
                  Présentation
                </h2>
                <p className="text-muted-foreground leading-relaxed">{sol.description}</p>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-5">
                  <h3 className="font-semibold text-foreground mb-3">Avantages</h3>
                  <ul className="space-y-2">
                    {sol.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" strokeWidth={1.5} />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-foreground mb-3">Inconvénients</h3>
                  <ul className="space-y-2">
                    {sol.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XIcon className="w-4 h-4 text-destructive shrink-0 mt-0.5" strokeWidth={1.5} />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-bold font-heading text-foreground mb-3">
                  Fonctionnalités
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sol.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-xl font-bold font-heading text-foreground mb-4">
                  Questions fréquentes
                </h2>
                <div className="space-y-3">
                  {sol.faq.map((item) => (
                    <div key={item.question} className="card p-5">
                      <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="card p-5 space-y-4">
                <h3 className="font-semibold text-foreground">Infos clés</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prix</span>
                    <span className="font-mono font-medium text-foreground">{sol.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Modèle</span>
                    <span className="text-foreground">{sol.pricingModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cible</span>
                    <span className="text-foreground text-right max-w-[60%]">{sol.targetSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fondé</span>
                    <span className="font-mono text-foreground">{sol.foundedYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Siège</span>
                    <span className="text-foreground text-right max-w-[60%]">{sol.headquarters}</span>
                  </div>
                </div>
                <a
                  href={sol.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary w-full text-center"
                >
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  Visiter {sol.name}
                </a>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-foreground mb-3">Intégrations</h3>
                <div className="flex flex-wrap gap-1.5">
                  {sol.integrations.map((i) => (
                    <span key={i} className="badge text-[10px]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
