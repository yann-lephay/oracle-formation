# Advanced Validation Rules — Pre-Push & CI/CD

This reference defines the extended validation rules for the indxel-pro skill.
These go beyond basic metadata checks — they validate technical architecture,
content quality, and AI-readiness.

---

## Validation Matrix

### Critical (Must Block Deploy)

| ID | Check | Fail Condition |
|----|-------|----------------|
| `noindex-prod` | Meta robots on production | `noindex` on any public page in production build |
| `csr-public-page` | Rendering strategy | Public indexable page uses pure CSR (empty shell + JS) |
| `jsonld-syntax` | JSON-LD parsing | Invalid JSON syntax or Schema.org violation |
| `soft-404` | HTTP status codes | Page returns 200 but renders error/empty content |
| `canonical-loop` | Canonical validation | Page A canonicals to B, B canonicals to A |
| `redirect-chain` | Redirect depth | More than 2 redirects in a chain (A→B→C→D) |

### High (Should Block in Strict Mode)

| ID | Check | Fail Condition |
|----|-------|----------------|
| `h1-count` | Heading structure | H1 count != 1 on any page |
| `heading-hierarchy` | Heading levels | H(n) followed by H(n+2) — skipped level |
| `img-alt` | Image accessibility | `<img>` without `alt` attribute |
| `broken-internal-link` | Link integrity | Internal `<a href>` resolves to 404 |
| `bundle-size` | JS bundle analysis | Main bundle > 200KB (configurable) |
| `tbt-threshold` | Total Blocking Time | TBT > 200ms in Lighthouse audit |
| `duplicate-title` | Title uniqueness | Two or more pages share the same `<title>` |
| `duplicate-description` | Description uniqueness | Two or more pages share the same meta description |

### Medium (Warning)

| ID | Check | Fail Condition |
|----|-------|----------------|
| `sameas-missing` | Entity authority | Organization/Person schema missing `sameAs` |
| `semantic-html` | HTML structure | Content sections use `<div>` instead of `<article>/<section>` |
| `fake-table` | Data presentation | Comparison data rendered as CSS grid instead of `<table>` |
| `font-display` | Web font loading | `@font-face` missing `font-display: swap` or `optional` |
| `third-party-head` | Script placement | Non-critical third-party scripts in `<head>` |
| `og-image-size` | OG image dimensions | OG image not 1200x630 or > 1MB |

### Low (Informational)

| ID | Check | Fail Condition |
|----|-------|----------------|
| `llms-txt` | AI discoverability | `/llms.txt` file missing from public directory |
| `ai-bots-blocked` | robots.txt | GPTBot, ClaudeBot, or Google-Extended blocked |
| `fact-density` | Content quality | Text block >100 words with < 2 specific data points |
| `inverted-pyramid` | Content structure | First paragraph after H2 > 50 words without core answer |
| `graph-pattern` | JSON-LD structure | Multiple separate JSON-LD blocks instead of `@graph` |

---

## Content Quality Scoring

### Factual Density Analysis

Scan text content for verifiable claims. High-density content is more likely
to be cited by AI-generated answers.

**Positive signals (increase score):**
- Specific numbers: "reduces load time by 40%", "supports 17 rules"
- Named entities: company names, tool names, people
- Dates: "as of January 2026", "published December 2025"
- Direct quotes with attribution (`<blockquote>` with cite)
- External links to authoritative sources (.gov, .edu, Wikipedia, papers)

**Negative signals (decrease score):**
- Marketing filler: "revolutionary", "best-in-class", "synergy"
- Vague claims: "improve your results", "boost performance"
- Repetitive phrasing (same concept restated 3+ times)
- Long introductions before substantive content (>200 words to first data point)

### Scoring heuristic

```
factual_density = (entities + numbers + citations + dates) / total_words * 100

Good:  > 5%  (5+ data points per 100 words)
OK:    3-5%
Low:   < 3%  (flag for review)
```

---

## Rendering Strategy Validation

### Detection Logic

For Next.js projects, detect rendering strategy per route:

```
1. Read the page file (app/[route]/page.tsx)
2. Check for:
   - 'use client' directive → CSR component (check if wrapped in server page)
   - generateStaticParams() export → SSG
   - revalidate export → ISR
   - Dynamic data fetching without cache → SSR
   - No data fetching, no 'use client' → Static (SSG) ✓

3. For CSR pages: check if route is public/indexable
   - If yes → Critical error (content invisible to crawlers)
   - If no (dashboard, admin) → OK
```

### ISR Revalidation Checks

```
- revalidate: 0 → SSR (every request) — OK for real-time data
- revalidate: 60 → ISR, refreshes every minute — good for most content
- revalidate: 3600 → ISR, refreshes hourly — good for stable content
- revalidate: false → SSG, only rebuilds on deploy — good for static content
- No revalidate → defaults to static — verify this is intentional
```

---

## Core Web Vitals — Lab Testing

### Lighthouse CI Budget Configuration

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["warn", { "minScore": 0.9 }],
        "interactive": ["error", { "maxNumericValue": 3000 }],
        "total-blocking-time": ["error", { "maxNumericValue": 200 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }]
      }
    }
  }
}
```

### Bundle Size Analysis

Static analysis of imports to catch performance regressions before runtime:

**Red flags:**
- `import moment from 'moment'` → 72KB, use `date-fns` or native `Intl`
- `import _ from 'lodash'` → 70KB, use `lodash/specific-function`
- `import * as d3 from 'd3'` → 100KB+, import specific modules
- Heavy charting libraries in main bundle → use `next/dynamic`
- CSS-in-JS runtime in critical path → prefer Tailwind or CSS Modules

---

## Advanced CI/CD Pipeline

### Three-Phase Validation

**Phase 1: Pre-push (local, < 5 seconds)**
```
Static analysis only:
- HTML structure (headings, semantic tags)
- JSON-LD syntax validation
- Meta tags presence
- noindex detection
- Bundle import analysis
```

**Phase 2: CI Build (GitHub Actions, < 2 minutes)**
```
Build + static checks:
- Full indxel check --ci
- Lighthouse CI with budgets
- Schema.org validation
- Broken link detection (internal only)
- Bundle size regression check
```

**Phase 3: Post-deploy (live site, < 5 minutes)**
```
Live crawl:
- indxel crawl <deploy-url>
- Cross-page analysis (duplicates, orphans)
- Asset verification (OG images, favicons)
- Sitemap completeness check
- robots.txt verification
- Performance on real infrastructure
```

### GitHub Actions — Full Pipeline Example

```yaml
name: SEO Gatekeeper
on: [pull_request]

jobs:
  static-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx indxel check --ci --json > seo-report.json
      - name: Upload report
        uses: actions/upload-artifact@v4
        with:
          name: seo-report
          path: seo-report.json

  build-and-lighthouse:
    runs-on: ubuntu-latest
    needs: static-check
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000/
            http://localhost:3000/pricing
            http://localhost:3000/blog
          budgetPath: .github/lighthouse/budget.json
          uploadArtifacts: true

  post-deploy-crawl:
    runs-on: ubuntu-latest
    needs: deploy  # Runs after deployment job
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx indxel crawl ${{ vars.PRODUCTION_URL }} --json > crawl-report.json
      - name: Check crawl score
        run: |
          SCORE=$(jq '.score' crawl-report.json)
          if [ "$SCORE" -lt 80 ]; then
            echo "::error::SEO crawl score $SCORE is below threshold (80)"
            exit 1
          fi
```

---

## data-nosnippet Strategy

Control what AI models can extract vs what requires a click-through.

```html
<!-- Visible to crawlers, CAN be cited -->
<p>Indxel validates 17 SEO rules and scores your pages 0-100.</p>

<!-- Visible to users, CANNOT be extracted for AI answers -->
<p data-nosnippet>
  Our proprietary analysis shows that teams using CI/CD SEO guards
  reduce SEO regressions by 73% in the first month.
</p>
```

**When to use:**
- Proprietary data that creates competitive advantage
- Detailed analysis that should drive traffic, not be summarized
- Premium content that justifies a click-through

**When NOT to use:**
- Basic definitions and descriptions (these SHOULD be cited)
- Product names and features (you want visibility)
- Public documentation (the whole point is discoverability)

---

## Playwright SEO Test Examples

For deep validation that requires JavaScript rendering:

```ts
// tests/seo.spec.ts
import { test, expect } from '@playwright/test'

test('homepage has correct metadata', async ({ page }) => {
  await page.goto('/')

  // Title
  const title = await page.title()
  expect(title.length).toBeGreaterThan(30)
  expect(title.length).toBeLessThan(65)

  // Meta description
  const description = await page.$eval(
    'meta[name="description"]',
    el => el.getAttribute('content')
  )
  expect(description).toBeTruthy()
  expect(description!.length).toBeGreaterThan(120)
  expect(description!.length).toBeLessThan(165)

  // Canonical
  const canonical = await page.$eval(
    'link[rel="canonical"]',
    el => el.getAttribute('href')
  )
  expect(canonical).toMatch(/^https:\/\//)

  // H1 count
  const h1Count = await page.$$eval('h1', els => els.length)
  expect(h1Count).toBe(1)

  // JSON-LD
  const jsonld = await page.$$eval(
    'script[type="application/ld+json"]',
    els => els.map(el => JSON.parse(el.textContent || '{}'))
  )
  expect(jsonld.length).toBeGreaterThan(0)

  // No noindex
  const robots = await page.$('meta[name="robots"][content*="noindex"]')
  expect(robots).toBeNull()
})

test('OG images are accessible', async ({ page, request }) => {
  await page.goto('/')

  const ogImage = await page.$eval(
    'meta[property="og:image"]',
    el => el.getAttribute('content')
  )

  if (ogImage) {
    const response = await request.get(ogImage)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toMatch(/image\//)
  }
})

test('no broken internal links', async ({ page, request }) => {
  await page.goto('/')

  const links = await page.$$eval('a[href^="/"]', els =>
    els.map(el => el.getAttribute('href'))
  )

  for (const link of links) {
    if (link) {
      const response = await request.get(link)
      expect(response.status(), `Broken link: ${link}`).toBeLessThan(400)
    }
  }
})
```
