import { blogPosts } from "@/lib/data/blog";
import { seoConfig } from "@/lib/seo-config";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] ?? character);
}

function rssDate(value: string) {
  return new Date(`${value}T12:00:00Z`).toUTCString();
}

export function GET() {
  const posts = [...blogPosts].sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );
  const lastBuildDate = posts[0]
    ? rssDate(posts[0].updatedAt)
    : new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${seoConfig.siteName} — Articles`)}</title>
    <link>${escapeXml(`${seoConfig.siteUrl}/blog`)}</link>
    <description>${escapeXml(seoConfig.description)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    ${posts.map((post) => {
      const url = `${seoConfig.siteUrl}/blog/${post.slug}`;
      return `<item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${rssDate(post.publishedAt)}</pubDate>
    </item>`;
    }).join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex, follow",
    },
  });
}
