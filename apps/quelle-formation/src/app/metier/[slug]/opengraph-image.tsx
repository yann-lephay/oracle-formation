import { metiers } from "@/lib/data/metiers";
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
  return metiers.map((m) => ({ slug: m.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metier = metiers.find((m) => m.slug === slug);
  if (!metier) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: metier.name,
    subtitle: metier.description,
    categoryLabel: "Fiche metier",
  });
}
