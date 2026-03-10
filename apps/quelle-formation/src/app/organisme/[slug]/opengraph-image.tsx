import { organismes } from "@/lib/data/organismes";
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
  return organismes.map((o) => ({ slug: o.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const org = organismes.find((o) => o.slug === slug);
  if (!org) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: org.name,
    subtitle: org.tagline,
    categoryLabel: "Organisme",
  });
}
