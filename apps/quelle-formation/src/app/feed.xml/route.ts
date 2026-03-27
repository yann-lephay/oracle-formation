import { seoConfig } from "@/lib/seo-config";
import { blogArticles } from "@/lib/data/blog";
import { guides } from "@/lib/data/guides";
import { glossaryTerms } from "@/lib/data/glossaire";
import { pingAggregatorsAsync } from "@/lib/services/ping";

export const revalidate = 3600;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = seoConfig.siteUrl;
  const now = new Date().toUTCString();

  // Blog articles sorted by publishedAt desc
  const sortedArticles = [...blogArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Guides sorted by publishedAt desc
  const sortedGuides = [...guides].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const blogItems = sortedArticles.map(
    (article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <description>${escapeXml(article.metaDescription)}</description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <category>Blog</category>
    </item>`
  );

  const guideItems = sortedGuides.map(
    (guide) => `    <item>
      <title>${escapeXml(guide.title)}</title>
      <link>${baseUrl}/guide/${guide.slug}</link>
      <guid isPermaLink="true">${baseUrl}/guide/${guide.slug}</guid>
      <description>${escapeXml(guide.metaDescription)}</description>
      <pubDate>${new Date(guide.publishedAt).toUTCString()}</pubDate>
      <category>Guide</category>
    </item>`
  );

  const glossaryItems = glossaryTerms.map(
    (term) => `    <item>
      <title>${escapeXml(term.term)}</title>
      <link>${baseUrl}/glossaire/${term.slug}</link>
      <guid isPermaLink="true">${baseUrl}/glossaire/${term.slug}</guid>
      <description>${escapeXml(term.definition)}</description>
      <pubDate>${now}</pubDate>
      <category>Glossaire</category>
    </item>`
  );

  const allItems = [...blogItems, ...guideItems, ...glossaryItems].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(seoConfig.siteName)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(seoConfig.defaultDescription)}</description>
    <language>${seoConfig.language}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${allItems}
  </channel>
</rss>`;

  // Fire-and-forget ping to aggregators
  pingAggregatorsAsync();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
