import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { solutions } from "@/lib/data/solutions";
import { guides } from "@/lib/data/guides";
import { comparisons } from "@/lib/data/comparisons";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { seoConfig } from "@/lib/seo-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const url = `${seoConfig.siteUrl}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge text-xs">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.readingTime}</span>
              <span className="text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {post.sections.map((section) => (
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

      {/* Solutions mentionnées */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
            Solutions comparées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutions.slice(0, 3).map((sol) => (
              <Link
                key={sol.slug}
                href={`/solution/${sol.slug}`}
                className="card p-5 group"
              >
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-1">
                  {sol.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{sol.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{sol.priceRange}</span>
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

      {/* Guides liés */}
      {guides.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Guides pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guides.slice(0, 3).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card p-5 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge text-[10px]">{guide.category}</span>
                    <span className="text-xs text-muted-foreground">{guide.readingTime}</span>
                  </div>
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm">
                    {guide.shortTitle}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparatifs */}
      {comparisons.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
              Comparatifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparisons.slice(0, 3).map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparer/${comp.slug}`}
                  className="card p-5 text-center group"
                >
                  <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2">
                    {comp.title}
                  </h3>
                  <span className="text-xs text-primary font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    Lire le comparatif
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres articles */}
      {(() => {
        const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);
        if (otherPosts.length === 0) return null;
        return (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                Autres articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherPosts.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card p-5 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge text-[10px]">{p.category}</span>
                      <span className="text-xs text-muted-foreground">{p.readingTime}</span>
                    </div>
                    <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}
