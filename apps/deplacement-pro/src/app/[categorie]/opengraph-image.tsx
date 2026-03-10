import { categories } from "@/lib/data/categories";
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
  return categories.map((c) => ({ categorie: c.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;
  const cat = categories.find((c) => c.slug === categorie);
  if (!cat) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: cat.name,
    subtitle: cat.description,
    categoryLabel: "Categorie",
  });
}
