import { redirect } from "next/navigation";
import { solutions } from "@/lib/data/solutions";

const affiliateLinks: Record<string, string> = Object.fromEntries(
  solutions
    .filter((s) => s.affiliateUrl && s.affiliateUrl !== s.website)
    .map((s) => [s.slug, s.affiliateUrl])
);

// Fallback: redirect to solution website if no affiliate link
const websiteLinks: Record<string, string> = Object.fromEntries(
  solutions.map((s) => [s.slug, s.website])
);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const url = affiliateLinks[slug] || websiteLinks[slug];

  if (!url) {
    redirect("/");
  }

  redirect(url);
}
