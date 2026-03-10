import { domaines } from "@/lib/data/domaines";
import { topVilles } from "@/lib/data/villes";
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
  const params: { domaine: string; ville: string }[] = [];
  for (const d of domaines) {
    for (const v of topVilles) {
      params.push({ domaine: d.slug, ville: v.slug });
    }
  }
  return params;
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ domaine: string; ville: string }>;
}) {
  const { domaine: dSlug, ville: vSlug } = await params;
  const domaine = domaines.find((d) => d.slug === dSlug);
  const ville = topVilles.find((v) => v.slug === vSlug);
  if (!domaine || !ville) return generateFallbackOgImage();
  return generateGenericOgImage({
    title: `Formation ${domaine.name} ${ville.metaSuffix}`,
    subtitle: `Comparez les organismes de formation ${domaine.name.toLowerCase()} ${ville.metaSuffix} en 2026`,
    categoryLabel: "Formation",
  });
}
