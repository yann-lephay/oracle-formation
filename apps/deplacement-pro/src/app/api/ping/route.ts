import { seoConfig } from "@/lib/seo-config";
import { pingAggregators, PING_SERVICES } from "@/lib/services/ping";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const dryRun = searchParams.get("dryRun") === "true";

  const feedUrl = `${seoConfig.siteUrl}/feed.xml`;
  const sitemapUrl = `${seoConfig.siteUrl}/sitemap.xml`;

  if (dryRun) {
    return Response.json({
      dryRun: true,
      services: PING_SERVICES.map((s) => ({ name: s.name, type: s.type })),
      feedUrl,
      sitemapUrl,
    });
  }

  const results = await pingAggregators();
  const succeeded = results.filter((r) => r.success).length;

  return Response.json({
    pinged: results.length,
    succeeded,
    failed: results.length - succeeded,
    feedUrl,
    sitemapUrl,
    results,
  });
}

export async function GET() {
  return Response.json({
    description: "Ping RSS aggregators to signal new content",
    usage: "POST /api/ping (or POST /api/ping?dryRun=true)",
    auto: "Ping automatique via /feed.xml toutes les heures (ISR revalidate)",
    services: PING_SERVICES.map((s) => s.name),
    feedUrl: `${seoConfig.siteUrl}/feed.xml`,
  });
}
