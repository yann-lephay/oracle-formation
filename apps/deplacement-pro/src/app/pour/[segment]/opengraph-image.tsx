import { personas } from "@/lib/data/personas";
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
  return personas.map((p) => ({ segment: p.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment } = await params;
  const persona = personas.find((p) => p.slug === segment);
  if (!persona) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: persona.name,
    subtitle: persona.description,
    categoryLabel: "Pour vous",
  });
}
