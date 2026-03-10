import { blogArticles } from "@/lib/data/blog";
import {
  generateGenericOgImage,
  generateFallbackOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og-image-utils";

export const alt = "QuelleFormation.fr";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const revalidate = false;

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: article.title,
    subtitle: article.excerpt,
    categoryLabel: "Blog",
  });
}
