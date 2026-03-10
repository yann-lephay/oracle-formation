import { secteurs } from "@/lib/data/secteurs";
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
  return secteurs.map((s) => ({ slug: s.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const secteur = secteurs.find((s) => s.slug === slug);
  if (!secteur) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: secteur.name,
    subtitle: secteur.description,
    categoryLabel: "Secteur",
  });
}
