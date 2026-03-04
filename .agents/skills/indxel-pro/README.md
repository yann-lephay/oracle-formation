<p align="center">
  <a href="https://indxel.com">
    <img src="https://raw.githubusercontent.com/indxel/indxel/main/assets/logo.png" alt="Indxel" width="80" />
  </a>
</p>

<h1 align="center">indxel-pro-skill</h1>

<p align="center">
  <strong>Claude Code skill for crawling, keyword research, indexation, and performance.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/indxel"><img src="https://img.shields.io/npm/v/indxel?style=flat-square&color=C25E45" alt="npm version" /></a>
  <a href="https://github.com/indxel/indxel-pro-skill/blob/main/SKILL.md"><img src="https://img.shields.io/badge/skill-Claude_Code-7C3AED?style=flat-square" alt="Claude Code Skill" /></a>
  <a href="https://indxel.com"><img src="https://img.shields.io/badge/docs-indxel.com-blue?style=flat-square" alt="Docs" /></a>
</p>

<br />

## Install

```bash
claude install-skill indxel/indxel-pro-skill
```

Then ask Claude Code to crawl a site, research keywords, or manage indexation.

## What it does

This skill teaches Claude Code how to use [indxel](https://github.com/indxel/indxel) advanced features for live site analysis. It goes beyond static code checks — it interacts with live URLs and external APIs.

| Feature | Description |
|---------|-------------|
| Crawling | Crawl live sites, score every page, detect broken links and images |
| Keywords | Extract keywords via Google Autocomplete, analyze competition |
| Indexation | Submit URLs to Google (Indexing API + IndexNow), check index status |
| Performance | PageSpeed analysis, Core Web Vitals, asset verification |
| Sitemap | Parse, compare, validate sitemaps against crawled pages |
| Robots.txt | Fetch, parse, check URL access against directives |

## Example prompts

```
"Crawl my site and show me the worst pages"
"Find keywords related to 'seo tools for developers'"
"Check which of my pages are indexed by Google"
"Submit my new blog posts to Google for indexation"
"Run a PageSpeed test on my homepage"
"Compare my sitemap against what's actually live"
"Find broken links on my site"
```

## How it works

When triggered, Claude Code will:

1. Use the indxel SDK to crawl your site (browser-like UA, retry on 503/429)
2. Score each page on 17 SEO rules (0-100, A-F grading)
3. Identify broken links, missing images, duplicate content
4. Research keywords with competition analysis
5. Check Google indexation status and submit new URLs
6. Generate actionable reports with specific fix recommendations

## Trigger phrases

The skill activates when you mention:
- "crawl site", "keyword research", "indexation", "Google index"
- "submit URL", "site performance", "PageSpeed", "content gaps"
- "link analysis", "broken links", "sitemap check"

## Requires

This skill uses the `indxel` npm package programmatically. Claude Code will install it automatically when needed.

For Google Indexing API features, you'll need a Google service account JSON key.

## Related

| Resource | Link |
|----------|------|
| Indxel SDK + CLI + MCP | [github.com/indxel/indxel](https://github.com/indxel/indxel) |
| Indxel base skill | [github.com/indxel/indxel-skill](https://github.com/indxel/indxel-skill) |
| Documentation | [indxel.com](https://indxel.com) |

## License

[MIT](https://github.com/indxel/indxel/blob/main/LICENSE)

<p align="center">
  <sub>Built by <a href="https://indxel.com">Indxel</a> — ESLint for SEO.</sub>
</p>
