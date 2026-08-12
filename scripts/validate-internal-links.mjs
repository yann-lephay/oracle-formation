import fs from "node:fs";
import path from "node:path";

const apps = process.argv.slice(2);

if (apps.length === 0) {
  console.error("Usage: node scripts/validate-internal-links.mjs <app> [app...]");
  process.exit(2);
}

function decodeEntities(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&#39;", "'");
}

function normalizePath(href, baseUrl, canonicalHost) {
  try {
    const url = new URL(decodeEntities(href), baseUrl);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (url.hostname.replace(/^www\./, "") !== canonicalHost) return null;
    return url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
  } catch {
    return null;
  }
}

function htmlPathForRoute(appDir, route) {
  return route === "/"
    ? path.join(appDir, ".next/server/app/index.html")
    : path.join(appDir, `.next/server/app${route}.html`);
}

function extractLinks(html, pageUrl, canonicalHost) {
  const links = [];
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const hrefMatch = match[1].match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1] ?? hrefMatch[2] ?? hrefMatch[3];
    const target = normalizePath(href, pageUrl, canonicalHost);
    if (!target) continue;
    links.push(target);
  }
  return links;
}

let failed = false;

for (const app of apps) {
  const appDir = path.resolve(`apps/${app}`);
  const sitemapPath = path.join(appDir, ".next/server/app/sitemap.xml.body");
  if (!fs.existsSync(sitemapPath)) {
    console.error(`[${app}] sitemap construit absent: ${sitemapPath}`);
    failed = true;
    continue;
  }

  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeEntities(match[1]));
  const canonicalHost = new URL(urls[0]).hostname.replace(/^www\./, "");
  const routes = [...new Set(urls.map((url) => normalizePath(url, url, canonicalHost)).filter(Boolean))];
  const routeSet = new Set(routes);
  const graph = new Map(routes.map((route) => [route, new Set()]));
  const inlinksOutsideHome = new Map(routes.map((route) => [route, new Set()]));
  const missingHtml = [];

  for (const route of routes) {
    const htmlPath = htmlPathForRoute(appDir, route);
    if (!fs.existsSync(htmlPath)) {
      missingHtml.push(route);
      continue;
    }
    const html = fs.readFileSync(htmlPath, "utf8");
    const pageUrl = `https://${canonicalHost}${route}`;
    for (const target of extractLinks(html, pageUrl, canonicalHost)) {
      if (!routeSet.has(target) || target === route) continue;
      graph.get(route).add(target);
      if (route !== "/") inlinksOutsideHome.get(target).add(route);
    }
  }

  const noContextualInlink = routes.filter(
    (route) => route !== "/" && inlinksOutsideHome.get(route).size === 0
  );
  const depth = new Map([["/", 0]]);
  const queue = ["/"];
  while (queue.length > 0) {
    const source = queue.shift();
    for (const target of graph.get(source) ?? []) {
      if (depth.has(target)) continue;
      depth.set(target, depth.get(source) + 1);
      queue.push(target);
    }
  }
  const unreachable = routes.filter((route) => !depth.has(route));
  const deep = routes.filter((route) => (depth.get(route) ?? 0) > 3);
  const maxDepth = Math.max(...depth.values());

  console.log(
    `[${app}] ${routes.length} URLs sitemap, 0-inlink-hors-accueil=${noContextualInlink.length}, ` +
      `inaccessibles=${unreachable.length}, profondeur-max=${maxDepth}`
  );

  for (const [label, findings] of [
    ["HTML manquant", missingHtml],
    ["sans inlink hors accueil", noContextualInlink],
    ["inaccessible depuis l'accueil", unreachable],
    ["profondeur > 3", deep],
  ]) {
    if (findings.length === 0) continue;
    failed = true;
    console.error(`[${app}] ${label}:\n  ${findings.join("\n  ")}`);
  }
}

if (failed) process.exit(1);
