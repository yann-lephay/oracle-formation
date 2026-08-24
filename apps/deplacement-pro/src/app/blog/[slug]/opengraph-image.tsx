import { blogPosts } from "@/lib/data/blog";
import {
  generateGenericOgImage,
  generateFallbackOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og-image-utils";
import { isRedirectedBlogSlug } from "@/lib/content-owner-policy";

export const alt = "DeplacementPro.fr";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const revalidate = false;

export function generateStaticParams() {
  return blogPosts.filter((p) => !isRedirectedBlogSlug(p.slug)).map((p) => ({ slug: p.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = isRedirectedBlogSlug(slug) ? undefined : blogPosts.find((p) => p.slug === slug);
  if (!post) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: post.title,
    subtitle: post.excerpt,
    categoryLabel: "Blog",
  });
}
