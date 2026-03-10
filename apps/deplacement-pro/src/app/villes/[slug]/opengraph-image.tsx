import { villes } from "@/lib/data/villes";
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
  return villes.map((v) => ({ slug: v.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: `Deplacement professionnel ${ville.name}`,
    subtitle: ville.description,
    categoryLabel: "Ville",
  });
}
