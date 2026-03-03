# Oracle-B2B

Monorepo pour les comparateurs B2B : **QuelleFormation.fr** et **DeplacementPro.fr**.

## Architecture

- `apps/quelle-formation/` — Comparateur de formations professionnelles (Next.js 16 + Tailwind v4)
- `apps/deplacement-pro/` — Comparateur de déplacements professionnels (Next.js 16 + Tailwind v4)
- Data statique dans chaque `src/lib/data/` — pas de base de données pour le MVP
- Pages pSEO dynamiques générées statiquement via `generateStaticParams`

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 avec design system custom par app
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Speed Insights
- **Hosting**: Vercel

## Commandes

```bash
# QuelleFormation
npm run dev      # Lancer le dev server (port 3000)
npm run build    # Build production
npm run lint     # ESLint

# DeplacementPro
npm run dev:dp   # Lancer le dev server (port 3001)
npm run build:dp # Build production
npm run lint:dp  # ESLint
```

## Conventions

- Toutes les données sont dans `src/lib/data/` — pas de base de données pour le MVP
- Chaque type de page a son propre `generateStaticParams` pour le SSG
- JSON-LD structured data sur chaque page (FAQ, Breadcrumb, Course/Product)
- Design system défini dans `globals.css` avec `@theme` Tailwind v4
- Tous les textes sont en français
- Les liens d'affiliation portent `rel="noopener noreferrer nofollow"`
