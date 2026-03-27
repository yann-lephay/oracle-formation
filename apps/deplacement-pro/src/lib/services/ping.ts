/**
 * Ping RSS aggregators
 *
 * Notifie Pingomatic, Google PubSubHubbub, Bing et Google
 * qu'un feed a été mis à jour. Fire-and-forget, silencieux en cas d'échec.
 */

import { seoConfig } from "@/lib/seo-config";

const PING_SERVICES = [
  { name: "Google", url: "https://blogsearch.google.com/ping/RPC2", type: "xmlrpc" as const },
  { name: "Pingomatic", url: "https://rpc.pingomatic.com/", type: "xmlrpc" as const },
  { name: "Bing", url: "https://www.bing.com/ping?sitemap=", type: "sitemap" as const },
  { name: "Google Sitemap", url: "https://www.google.com/ping?sitemap=", type: "sitemap" as const },
  { name: "Google PubSubHubbub", url: "https://pubsubhubbub.appspot.com/", type: "websub" as const },
];

function buildXmlRpcPing(title: string, url: string, feedUrl: string): string {
  return `<?xml version="1.0"?>
<methodCall>
  <methodName>weblogUpdates.extendedPing</methodName>
  <params>
    <param><value>${title}</value></param>
    <param><value>${url}</value></param>
    <param><value>${feedUrl}</value></param>
    <param><value>${feedUrl}</value></param>
  </params>
</methodCall>`;
}

export interface PingResult {
  service: string;
  success: boolean;
  status?: number;
  error?: string;
}

export async function pingAggregators(): Promise<PingResult[]> {
  const baseUrl = seoConfig.siteUrl;
  const feedUrl = `${baseUrl}/feed.xml`;
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const title = seoConfig.siteName;

  const results: PingResult[] = [];

  for (const service of PING_SERVICES) {
    try {
      let response: Response;

      if (service.type === "xmlrpc") {
        response = await fetch(service.url, {
          method: "POST",
          headers: { "Content-Type": "text/xml" },
          body: buildXmlRpcPing(title, baseUrl, feedUrl),
          signal: AbortSignal.timeout(10_000),
        });
      } else if (service.type === "sitemap") {
        response = await fetch(
          `${service.url}${encodeURIComponent(sitemapUrl)}`,
          { method: "GET", signal: AbortSignal.timeout(10_000) }
        );
      } else {
        response = await fetch(service.url, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "hub.mode": "publish",
            "hub.url": feedUrl,
          }),
          signal: AbortSignal.timeout(10_000),
        });
      }

      results.push({
        service: service.name,
        success: response.ok || response.status === 204,
        status: response.status,
      });
    } catch (error) {
      results.push({
        service: service.name,
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  return results;
}

export function pingAggregatorsAsync(): void {
  pingAggregators().catch(() => {});
}

export { PING_SERVICES };
