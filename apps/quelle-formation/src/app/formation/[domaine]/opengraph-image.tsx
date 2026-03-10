import { domaines } from "@/lib/data/domaines";
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
  return domaines.map((d) => ({ domaine: d.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ domaine: string }>;
}) {
  const { domaine: slug } = await params;
  const domaine = domaines.find((d) => d.slug === slug);
  if (!domaine) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: `Formation ${domaine.name}`,
    subtitle: domaine.description,
    categoryLabel: "Formation",
  });
}
