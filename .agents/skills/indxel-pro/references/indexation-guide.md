# Indexation Management Guide

## How Search Engine Indexation Works

1. **Discovery** — Search engines find your pages via sitemap, internal links, or external links
2. **Crawling** — They fetch and render the page
3. **Indexing** — They process the content and add it to their index
4. **Ranking** — They determine where the page appears in results

Indxel helps at every stage.

---

## IndexNow (Instant, Free)

IndexNow is a protocol supported by Bing, Yandex, and Naver. When you publish or update a page, you ping their API and they crawl it immediately.

### Setup (automatic)

`npx indxel init` generates:
- A unique verification key
- A `public/<key>.txt` file for verification

On deploy, Vercel/your host serves this file, and search engines can verify ownership.

### How it works

When you deploy, indxel notifies IndexNow endpoints:
```
POST https://api.indexnow.org/indexnow
{
  "host": "monsaas.fr",
  "key": "<your-key>",
  "urlList": [
    "https://monsaas.fr/pricing",
    "https://monsaas.fr/blog/new-post"
  ]
}
```

Bing, Yandex, and Naver will crawl these URLs within minutes.

### Limitations
- Google does NOT support IndexNow (yet)
- Max 10,000 URLs per submission
- Rate limited to reasonable usage

---

## Google Indexing API (Pro/Agence plan)

For Google, indxel uses the Google Indexing API (via Search Console) to request indexing.

### Prerequisites
1. Project connected to dashboard (`npx indxel link`)
2. Google Search Console connected (OAuth flow in dashboard)
3. Pro or Agence plan

### How it works

1. Dashboard detects new/updated pages (via check results or crawl)
2. Submits URLs to Google Indexing API
3. Monitors indexation status via Search Console API
4. Retries failed submissions automatically
5. Reports status in dashboard UI

### Checking indexation status

```bash
# Single URL
npx indxel index https://monsaas.fr/pricing

# All pages in sitemap
npx indxel index https://monsaas.fr --all
```

### Status values

| Status | Meaning |
|--------|---------|
| `indexed` | Page is in Google's index |
| `submitted` | Indexing requested, pending |
| `discovered` | Google knows about it but hasn't indexed |
| `crawled` | Google fetched it but didn't index |
| `excluded` | Google chose not to index (check reason) |
| `error` | Submission failed |

### Common exclusion reasons and fixes

| Reason | Fix |
|--------|-----|
| `noindex` | Remove `noindex` from robots meta or page config |
| `Duplicate without canonical` | Add canonical URL via `createMetadata()` |
| `Blocked by robots.txt` | Update robots.txt to allow crawling |
| `Soft 404` | Add real content — Google thinks the page is empty |
| `Page with redirect` | Fix redirect chains, point to final URL |
| `Not found (404)` | Page was deleted — remove from sitemap |

---

## Indexation Strategy

### Priority order for submitting

1. **Homepage and key landing pages** — Highest business value
2. **New content** (blog posts, product pages) — Time-sensitive
3. **Updated content** — Show Google the freshness signal
4. **Long-tail pages** (programmatic SEO) — Volume play

### Monitoring cadence

- **Daily:** Check new submissions status
- **Weekly:** Review overall indexation rate
- **Monthly:** Audit exclusions and fix underlying issues

### Target indexation rate

- **90%+** of public pages indexed = healthy
- **70-89%** = needs attention (check exclusion reasons)
- **<70%** = serious issues (sitemap errors, thin content, crawl budget)

---

## Background Jobs (Dashboard)

The dashboard runs two cron jobs:

### 1. Check Google Status
- Queries Google Search Console for indexation status
- Updates page status in database
- Frequency: Every 6 hours

### 2. Retry Indexation
- Finds pages that failed indexing submission
- Retries with exponential backoff
- Max 3 retries per URL
- Frequency: Every 12 hours

---

## Debugging Indexation Issues

### Page not getting indexed?

1. **Check robots.txt:** `npx indxel crawl <url>` includes robots check
2. **Check canonical:** Does the canonical point to the right URL?
3. **Check content quality:** Thin content gets excluded
4. **Check internal links:** Is the page linked from other pages?
5. **Check sitemap:** Is the page in sitemap.xml?
6. **Manual request:** Submit in Google Search Console > URL Inspection

### Site-wide indexation drop?

1. **Check for accidental noindex:** Did someone add noindex to a layout?
2. **Check robots.txt changes:** Did a deploy break robots.txt?
3. **Check server errors:** Are pages returning 500s?
4. **Check for penalties:** Manual actions in Google Search Console
