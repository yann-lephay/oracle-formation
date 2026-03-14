# AI-CONTEXT — oracle-formation

> Monorepo pSEO : **QuelleFormation** (quelleformationpro.fr) + **DeplacementPro** (deplacement-pro.fr)
> Derniere MAJ : 2026-03-13

## Architecture

```
oracle-formation/
├── apps/
│   ├── quelle-formation/   # Comparateur formations pro (Next.js 16.1.6)
│   └── deplacement-pro/    # Comparateur deplacements pro (Next.js 16.1.6)
├── CLAUDE.md                # Conventions monorepo
└── package.json             # npm workspaces
```

## Stack

- Next.js 16.1.6 (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion, Lucide React
- Vercel Analytics + SpeedInsights
- Pure SSG (revalidate = false) — pas de DB, pas d'auth
- Data 100% TypeScript dans `src/lib/data/`

## QuelleFormation (quelleformationpro.fr)

### Metriques
- **~900 pages** (dont ~800 combinaisons domaine x ville)
- 20 domaines, 14 organismes, 10 comparaisons, 5 guides, 5 blog, 4 metiers, 20 personas, 10 glossaire, 40 villes
- Monetisation : **lead gen** (formulaire devis vers organismes)

### Routes dynamiques
- `/formation/[domaine]` — 20 domaines de formation
- `/formation/[domaine]/[ville]` — 20 x 40 = 800 combinaisons
- `/organisme/[slug]` — 14 organismes certifies Qualiopi
- `/comparer/[slug]` — 10 comparaisons tete-a-tete
- `/blog/[slug]` — 5 articles
- `/guide/[slug]` — 5 guides pratiques (CPF, Qualiopi, reconversion)
- `/pour/[segment]` — 20 personas (reconversion, demandeur emploi, freelance...)
- `/metier/[slug]` — 4 fiches metier (salaires, debouches)
- `/glossaire/[slug]` — 10 termes

### Design
- Brand kit : `src/quelleformation-brand-kit/`
- Couleurs : Teal (#006C71) accent + Coral (#FF7E6B) primary
- Fonts : Urbanist (heading) + DM Sans (body) + Source Code Pro (mono)

## DeplacementPro (deplacement-pro.fr)

### Metriques
- **~150 pages**
- 4 categories, 6 solutions, 15 comparaisons, 7 guides, 1 blog, 31 personas, 18 integrations, 19 glossaire, 28 villes, 11 secteurs
- Monetisation : **affiliation** (affiliateUrl dans solutions.ts) + lead gen (DevisForm)

### Routes dynamiques
- `/[categorie]` — TMC, self-booking, carte-corporate, notes-de-frais
- `/solution/[slug]` — 6 solutions (Navan, TravelPerk, Mooncard, etc.)
- `/comparer/[slug]` — 15 comparaisons
- `/guides/[slug]` — 7 guides reglementaires
- `/blog/[slug]` — 1 article (a scaler)
- `/pour/[segment]` — 31 profils entreprise
- `/integrations/[slug]` — 18 integrations (solution x outil)
- `/glossaire/[slug]` — 19 termes
- `/villes/[slug]` — 28 villes
- `/secteurs/[slug]` — 11 secteurs
- `/go/[slug]` — link cloaking affiliation

### Design
- Brand kit : `src/deplacement-pro-brand-kit/`
- Couleurs : Steel blue (#2A5A6D) primary + Plum (#A04E6D) accent
- Fonts : Urbanist (heading) + DM Sans (body) + JetBrains Mono (mono)

## SEO

- robots.ts : AI bots autorises (GPTBot, ChatGPT-User, PerplexityBot, Claude-Web, Google-Extended)
- sitemap.ts : toutes les routes couvertes, revalidate = false
- max-image-preview:large dans layout.tsx
- JSON-LD : Organization, WebSite, WebPage (primaryImageOfPage + Speakable), FAQ, Breadcrumb
- QF specifique : Course, EducationalOrganization, Article, Guide, Glossary, Comparison
- DP specifique : SoftwareApplication, BlogPosting, Comparison, Guide, Glossary
- OG images dynamiques (opengraph-image.tsx) sur toutes les routes dynamiques
- SourceCitations E-E-A-T sur pages solution/organisme
- data-speakable sur h1, verdict, FAQ answers

## Securite

- Headers : HSTS, X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- poweredByHeader: false
- security.txt dans public/.well-known/
- /api/ et /_next/ bloques dans robots.ts

## Domaines

- quelleformationpro.fr — QuelleFormation
- deplacement-pro.fr — DeplacementPro

## Statut QC (2026-03-13)

- T1 : 24/24 (100%) — tous bloquants corriges
- T2 : en cours — SourceCitations, data-speakable, loading.tsx par route ajoutes
- T3 : blog a scaler (QF 5 → 15+, DP 1 → 10+)
