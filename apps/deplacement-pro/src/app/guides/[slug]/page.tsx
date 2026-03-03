import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guides, getGuideBySlug } from "@/lib/data/guides";
import {
  generateGuideSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `${seoConfig.siteUrl}/guides/${guide.slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateGuideSchema(guide)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(guide.faq)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Guides", url: "/#guides" },
              { name: guide.shortTitle, url: `/guides/${guide.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge text-xs">{guide.category}</span>
              <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
              <span className="text-xs text-muted-foreground">
                Mis à jour le {new Date(guide.updatedAt).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {guide.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {guide.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold font-heading text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {guide.faq.map((item) => (
                <div key={item.question} className="card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
