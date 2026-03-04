# Crawl Patterns & Advanced Workflows

## Full Site Audit Workflow

When a user asks for a comprehensive SEO audit of their live site, follow this sequence:

### Step 1: Static Analysis

```bash
npx indxel check --json
```

This catches issues at the source code level — missing metadata, incomplete structured data, etc.

### Step 2: Live Crawl

```bash
npx indxel crawl https://example.com
```

This catches production-only issues:
- Broken links (404s from external sources)
- Redirect chains (301 → 301 → 200)
- Orphan pages (no internal links pointing to them)
- Asset issues (missing OG images, broken favicons)
- Duplicate content across pages

### Step 3: Sitemap Verification

```ts
import { fetchSitemap, compareSitemap, crawlSite } from 'indxel'

const sitemap = await fetchSitemap('https://example.com')
const crawl = await crawlSite('https://example.com')
const crawledUrls = crawl.pages.filter(p => !p.error).map(p => p.url)

const comparison = compareSitemap(
  sitemap.urls.map(u => u.loc),
  crawledUrls
)

// Pages in sitemap but not reachable — REMOVE from sitemap or fix
comparison.inSitemapOnly

// Pages found by crawler but NOT in sitemap — ADD to sitemap
comparison.inCrawlOnly
```

### Step 4: Performance Check

```bash
npx indxel perf
```

Core Web Vitals matter for ranking. Flag any scores below Google's thresholds:
- LCP < 2.5s (good), < 4s (needs improvement), > 4s (poor)
- FID < 100ms (good), < 300ms (needs improvement), > 300ms (poor)
- CLS < 0.1 (good), < 0.25 (needs improvement), > 0.25 (poor)

### Step 5: Indexation Status

```bash
npx indxel index https://example.com --all
```

Check which pages Google has indexed. Prioritize submitting high-value pages that are not yet indexed.

---

## Common Cross-Page Issues

### Duplicate Titles
Multiple pages with the same `<title>` tag confuse search engines. Each page should have a unique, descriptive title.

**Fix:** Review `crawlResult.analysis.duplicateTitles` and update `createMetadata()` calls for each page.

### Orphan Pages
Pages with no internal links pointing to them are hard for search engines to discover.

**Fix:** Add internal links from relevant pages. Check your navigation, footer, and related content sections.

### Redirect Chains
`/old → /newer → /newest` wastes crawl budget and passes less link equity.

**Fix:** Update all redirects to point directly to the final URL.

### Broken External Links
Links to external sites that return 404 harm user experience and can impact trust signals.

**Fix:** Remove or update broken external links.

---

## Crawl Configuration

### CrawlOptions

```ts
interface CrawlOptions {
  maxPages?: number        // Default: 500
  maxDepth?: number        // Default: 5
  delay?: number           // Delay between requests in ms, default: 500
  retries?: number         // Retries on 503/429 with backoff, default: 2
  timeout?: number         // Per-page timeout in ms, default: 15000
  userAgent?: string       // Custom User-Agent header
  strict?: boolean         // Treat warnings as errors
  ignorePatterns?: string[] // Glob patterns to exclude
  onPageCrawled?: (page: CrawledPage) => void  // Progress callback
}
```

### Rate Limiting
The crawler uses a polite delay (500ms default + random jitter) between requests. On 503/429 responses, it retries with exponential backoff (1s, 2s). For third-party sites (competitor analysis), consider increasing the delay to be respectful.

---

## Keyword Research Strategy

### Seed → Cluster → Content Plan

1. **Start with seed keywords:**
   ```bash
   npx indxel keywords "seo tool"
   ```

2. **Expand with variations:**
   ```bash
   npx indxel keywords "seo tool for developers"
   npx indxel keywords "seo validation"
   npx indxel keywords "meta tags checker"
   ```

3. **Cluster by intent:**
   - Informational: "what is meta description" → Blog post
   - Commercial: "best seo tool for nextjs" → Comparison page
   - Transactional: "seo checker pricing" → Pricing page
   - Navigational: "indxel docs" → Documentation

4. **Prioritize by:**
   - Search volume (higher = more traffic potential)
   - Difficulty (lower = easier to rank)
   - Relevance to your product
   - Commercial intent (closer to conversion = more valuable)

---

## Dashboard Push Workflow

After running checks locally or in CI, push results to the dashboard for historical tracking:

```ts
// This happens automatically when the project is linked
// npx indxel check pushes results to the dashboard
// npx indxel crawl pushes crawl reports
```

The dashboard shows:
- Score trends over time (per-page and site-wide)
- New/resolved issues between checks
- Indexation status timeline
- Team activity log
