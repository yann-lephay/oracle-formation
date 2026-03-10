import { solutions } from "@/lib/data/solutions";
import {
  generateGenericOgImage,
  generateFallbackOgImage,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og-image-utils";

export const alt = "DeplacementPro.fr";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const revalidate = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: sol.name,
    subtitle: sol.tagline,
    categoryLabel: "Solution",
  });
}
