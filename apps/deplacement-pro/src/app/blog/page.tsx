import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog — Déplacement Professionnel, TMC, Notes de Frais",
  description:
    "Articles et conseils pour optimiser vos déplacements professionnels : TMC, cartes corporate, notes de frais, barèmes, bonnes pratiques.",
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Blog", url: "/blog" },
            ])
          ),
        }}
      />

      <section className="bg-graph-paper border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-3">
            Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Articles et conseils pour optimiser vos déplacements professionnels.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-5 group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-[10px]">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                </div>
                <h2 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors text-sm mb-2">
                  {post.title}
                </h2>
                <p className="text-xs text-muted-foreground line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                  </span>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
