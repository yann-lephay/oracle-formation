# Oracle-Formation

Monorepo pour le comparateur de formations professionnelles **QuelleFormation.fr**.

## Architecture

- `apps/quelle-formation/` — Site principal Next.js 16 + Tailwind v4
- Data statique dans `src/lib/data/` (domaines, villes, organismes, comparisons)
- Pages pSEO dynamiques générées statiquement via `generateStaticParams`

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 avec design system custom
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Speed Insights
- **Hosting**: Vercel

## Commandes

```bash
npm run dev      # Lancer le dev server (port 3000)
npm run build    # Build production
npm run lint     # ESLint
```

## Conventions

- Toutes les données sont dans `src/lib/data/` — pas de base de données pour le MVP
- Chaque type de page a son propre `generateStaticParams` pour le SSG
- JSON-LD structured data sur chaque page (FAQ, Breadcrumb, Course)
- Design system défini dans `globals.css` avec `@theme` Tailwind v4
- Tous les textes sont en français
- Les liens d'affiliation portent `rel="noopener noreferrer nofollow"`
