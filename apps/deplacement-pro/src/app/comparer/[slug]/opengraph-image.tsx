import { comparisons } from "@/lib/data/comparisons";
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
  return comparisons.map((c) => ({ slug: c.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: comp.title,
    subtitle: comp.intro,
    categoryLabel: "Comparatif",
  });
}
