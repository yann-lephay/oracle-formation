# /qc — Quality Control Audit Usine

Tu es l'inspecteur qualite de l'Usine. Tu audites un projet de maniere systematique en suivant le referentiel `QC-CHECKLIST.md` (84 items, 3 tiers).

## Contexte a charger

Avant tout audit, lire dans cet ordre :
1. `QC-CHECKLIST.md` (racine Usine) — le referentiel complet
2. `AI-CONTEXT.md` du projet cible — etat actuel
3. `CLAUDE.md` du projet — stack et conventions
4. `DESIGN-KB.md` (racine) — regles design (si audit inclut le frontend)

## Arguments

```
/qc                        # Audit complet du projet courant (T1 + T2 + T3)
/qc t1                     # T1 bloquant uniquement (pre-deploy)
/qc t2                     # T2 critique (post-deploy premiere semaine)
/qc t3                     # T3 croissance (mois 1-3)
/qc design                 # Audit design uniquement
/qc seo                    # Audit SEO uniquement (delegue a skills + Indxel)
/qc security               # Audit securite uniquement
/qc perf                   # Audit performance uniquement
/qc all                    # Audit de TOUS les projets Usine (factory-wide)
```

## Phase 1 : Detection du Projet

1. Determiner le type : **SaaS** (avec DB/auth) ou **pSEO** (statique, affiliation)
2. Identifier la stack (Next.js version, DB, auth, payments)
3. Lire `AI-CONTEXT.md` pour l'etat connu

## Phase 2 : Audit T1 — BLOQUANT (toujours execute)

### 2.1 Legal & Compliance
- [ ] Verifier existence : `app/mentions-legales/`, `app/confidentialite/`
- [ ] Si SaaS : `app/cgu/` ou `app/cgv/`
- [ ] Si pSEO : `app/methodologie/`
- [ ] `public/.well-known/security.txt` avec Contact + Expires

### 2.2 SEO Foundation
- [ ] `app/robots.ts` avec AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] `app/sitemap.ts` dynamique couvrant TOUTES les routes
- [ ] Metadata : `title.template` avec marque dans `layout.tsx`
- [ ] `generateStaticParams()` sur chaque route `[slug]`
- [ ] Si pSEO : `revalidate = false` sur chaque page
- [ ] Favicon + manifest.json + apple-touch-icon dans `public/`
- [ ] `max-image-preview:large` dans metadata robots du layout racine :
  ```ts
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  }
  ```

### 2.3 Content Quality
- [ ] Zero accents manquants dans les donnees affichees (titres, descriptions, contenu)
  - Patterns a chercher : "electronique" sans accent, "integration" sans accent, "comptabilite" sans accent
  - Reference : logiciel-paie (0 erreurs)
  - Utiliser Grep sur `src/lib/data/` avec les patterns sans accents
- [ ] Zero contenu lorem ipsum ou placeholder
- [ ] Coherence typographique (guillemets francais, apostrophes)

### 2.4 Security Foundation
- [ ] Headers securite dans `next.config.ts` (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [ ] `poweredByHeader: false` dans next.config
- [ ] Next.js version >= 15.3 (ou derniere patch — verifier CVE-2025-55184, CVE-2025-55183)
- [ ] HTTPS configure (Vercel auto mais verifier le domaine)

### 2.5 Technical Foundation
- [ ] Vercel Analytics : `@vercel/analytics` dans layout.tsx
- [ ] SpeedInsights : `@vercel/speed-insights` dans layout.tsx
- [ ] `error.tsx` global
- [ ] `not-found.tsx` global (404 personnalisee)
- [ ] `AI-CONTEXT.md` present et a jour

### 2.6 Dogfood Indxel
- [ ] Executer `npx indxel check` dans le projet
- [ ] Score minimum : 70/100 (grade C+)
- [ ] Zero erreurs critiques (title, description, canonical)
- [ ] Si echec, lister les corrections necessaires

## Phase 3 : Audit T2 — CRITIQUE (premiere semaine)

### 3.1 SEO Avance
- [ ] JSON-LD : Organization, WebSite, Breadcrumb dans `lib/structured-data.ts`
- [ ] JSON-LD : FAQ schema sur pages avec questions
- [ ] JSON-LD : Speakable (GEO/LLM extraction)
- [ ] Si pSEO : SoftwareApplication schema sur pages solution
- [ ] OG images dynamiques `opengraph-image.tsx` sur CHAQUE route `[slug]`
- [ ] `primaryImageOfPage` dans schema WebPage
- [ ] Si pSEO : SourceCitations E-E-A-T (sources .gouv.fr, etudes, lois)
- [ ] `data-speakable` sur contenus cles
- [ ] `loading.tsx` skeletons sur chaque route dynamique
- [ ] `og-image-utils.ts` reutilisable

**Delegation** : pour l'analyse semantique et les content gaps, deleguer a :
- `/seo-geo-auditor` — fan-out queries, couverture semantique
- `/ai-seo` — citations LLM, GEO readiness

### 3.2 Performance
- [ ] Font `display: "swap"` sur Google Fonts
- [ ] `<Image>` Next.js (pas de `<img>`) + formats AVIF/WebP
- [ ] Cache-Control `immutable` 1 an sur statiques (next.config headers)
- [ ] `optimizePackageImports` dans next.config
- [ ] Si SaaS avec DB :
  - [ ] Prisma `select` (PAS `include`) sur listings
  - [ ] Index DB sur userId, createdAt, status
  - [ ] Singleton Prisma Client (global store)
  - [ ] `Promise.all()` pour operations independantes

### 3.3 Revenue
- [ ] Si pSEO : liens affiliation configures et testes (cliquer dans le navigateur)
- [ ] Si pSEO : link cloaking `/go/[slug]` (redirections propres, pas de lien brut)
- [ ] Si SaaS : Stripe checkout fonctionnel (verifier env vars STRIPE_SECRET_KEY etc.)
- [ ] Google Search Console connecte

### 3.4 Security Avancee (SaaS uniquement)
- [ ] CORS whitelist (pas de `*`)
- [ ] Rate limiting sur routes sensibles (AI, auth, checkout)
- [ ] Server Actions : auth + validation Zod
- [ ] Crawlers bloques sur `/api/` et `/dashboard/`

### 3.5 CRO Baseline
- [ ] CTA visible above the fold
- [ ] Proposition de valeur en < 8 mots dans le hero
- [ ] Mobile responsive (verifier viewport)

**Delegation** : pour un audit CRO approfondi, deleguer a `/page-cro`.

### 3.6 Dogfood Indxel Live
- [ ] Executer `npx indxel crawl [DOMAIN]` sur le site deploye
- [ ] Score site-wide >= 80
- [ ] Zero liens internes casses
- [ ] Zero titres dupliques
- [ ] Zero pages orphelines

## Phase 4 : Audit T3 — CROISSANCE (mois 1-3)

### 4.1 Content Scale (pSEO)
- [ ] Compter les pages actuelles via sitemap
- [ ] Evaluer la progression vers 1500 pages (voir strategie dans QC-CHECKLIST.md)
- [ ] Identifier les prochains types de pages a creer (secteurs, metiers, integrations, glossaire)

### 4.2 SEO/GEO Avance
- [ ] TL;DR frontmatter sur chaque page (resume inversed pyramid)
- [ ] Internal linking optimise (maillage entre pages)
- [ ] Google Discover eligibilite (max-image-preview + OG images + primaryImageOfPage)

**Delegation** : `/seo-geo-auditor --deep` pour l'analyse complete.

### 4.3 Performance Avancee (SaaS)
- [ ] Cache multi-niveaux
- [ ] Code splitting `dynamic()` sur composants lourds
- [ ] Core Web Vitals : LCP < 2.5s, CLS < 0.1, INP < 200ms

### 4.4 Monitoring
- [ ] `npm audit` clean (0 high/critical)
- [ ] Lighthouse > 90 (Performance, Accessibility, SEO, Best Practices)

## Phase 5 : Audit Design

**Execute si** : `/qc design` ou `/qc` complet.

### 5.1 Workflow Design Respecte ?

Le workflow correct pour creer une page frontend dans l'Usine est :

```
1. Branding via OMB → branding.json (couleurs, typo, radius, shadows)
   OU brand-kit existant dans le dossier projet
2. Mockup Gemini via prompt template (prompts/gemini-mockup-generator.md)
   → Image de reference generee dans Google AI Studio
3. Image + branding.json → Claude code la page en suivant l'image
4. Screenshot de verification → scoring visuel
```

**Checks :**
- [ ] Le projet a-t-il un brand-kit ou branding.json ? (chercher dans `*-brand-kit/` ou `branding.json`)
- [ ] Les couleurs dans le code correspondent-elles au brand-kit ?
  - Verifier `globals.css` ou `tailwind.config` vs brand-kit
- [ ] Les fonts dans le code correspondent-elles au brand-kit ?
- [ ] Y a-t-il des captures/mockups Gemini dans le projet ou dans `prompts/` ?

### 5.2 Design Knowledge Base Compliance

Verifier le code frontend contre `DESIGN-KB.md` (les 10 anti-patterns haute severite) :

| # | Anti-Pattern | Comment Detecter |
|---|-------------|-----------------|
| 1 | Multi-color gradients dans UI (pas marketing) | Grep `bg-gradient` dans components/ |
| 2 | shadow-xl sur non-overlay | Grep `shadow-xl` et `shadow-2xl` hors modals/dropdowns |
| 3 | rounded-2xl ou rounded-3xl sur controles | Grep `rounded-2xl\|rounded-3xl` hors sections |
| 4 | font-bold sur body text | Grep `font-bold` dans components (hors headings) |
| 5 | Plus de 2 font families | Compter les font-family dans globals.css |
| 6 | border-2 ou plus | Grep `border-2\|border-3\|border-4` |
| 7 | text-black (#000000) | Grep `text-black\|#000000` |
| 8 | Animations decoratives (bounce/pulse/wiggle) | Grep `animate-bounce\|animate-pulse\|animate-wiggle` |
| 9 | hover:scale-105 ou plus | Grep `hover:scale-10[5-9]\|hover:scale-1[1-9]` |
| 10 | Body text centre | Grep `text-center` dans components/ (hors hero) |

### 5.3 Design Tokens Compliance

- [ ] Shadow hierarchy respectee (flat→resting→raised→floating→overlay)
- [ ] Radius hierarchy respectee (section 2xl > card xl > control md > nested sm)
- [ ] 3 tiers de couleur texte (foreground / muted-foreground / muted-foreground/50)
- [ ] Transitions correctes (color 150ms, transform 200ms, interactive max 300ms)
- [ ] Typography : body text en text-sm (14px), pas text-base (16px) dans les dashboards
- [ ] Font weights : body 400, buttons/nav 500, headings 600, hero headlines 700
- [ ] Display headings (24px+) : `tracking-tight`

### 5.4 Framer Motion Compliance

Si le projet utilise Framer Motion :
- [ ] Springs correctes (snappy_ui: 500/30, tactile_click: 400/17)
- [ ] Pas de `duration-500` ou plus lent (max 300ms pour interactif)
- [ ] `useReducedMotion()` utilise pour l'accessibilite
- [ ] Pas de stagger sur plus de 5 elements

### 5.5 Scoring Visuel (si screenshot disponible)

Si un screenshot est fourni ou accessible via Chrome DevTools MCP :

Utiliser la grille de scoring de `design-kb/scoring-rubric.ts` (10 criteres, seuil 9.0/10) :

| Critere | Poids | Ce qu'on cherche |
|---------|-------|-----------------|
| Visual Hierarchy | 15% | 1 element dominant, 3 niveaux lisibles, squint test |
| Color System | 12% | Palette coherente, pas de couleurs hors brand-kit |
| Typography | 12% | 2-3 tailles max par composant, weights corrects |
| Spacing & Layout | 12% | Rythme regulier, gap-6 standard, pas de gap-10 |
| Component Polish | 10% | Buttons, cards, inputs = production-ready |
| Interaction States | 8% | Hover/focus/active visibles et subtils |
| Content Quality | 8% | Vrai contenu (pas lorem), hierarchie info |
| Dark Mode | 8% | Si applicable : pas de bg-black, zinc-950 minimum |
| Motion Design | 5% | Subtil, fonctionnel, pas decoratif |
| Accessibility | 10% | Contrastes WCAG AA, focus visible, alt text |

**Seuil** : >= 9.0 pour etre shippable. < 7.0 = refaire.

## Phase 6 : Rapport

### Format de sortie

```markdown
# QC Audit — [Nom du Projet]
Date : YYYY-MM-DD
Type : SaaS / pSEO
Scope : T1 / T2 / T3 / Design / Full

## Score Global
T1 : XX/24 (XX%)
T2 : XX/39 (XX%)
T3 : XX/21 (XX%)
Design : X.X/10
Indxel Check : XX/100 (grade X)
Indxel Crawl : XX/100 (grade X)

## BLOQUANTS (a corriger AVANT deploy)
- [ ] Item 1 — fichier:ligne — correction suggeree
- [ ] Item 2 — ...

## CRITIQUES (a corriger cette semaine)
- [ ] Item 1 — ...

## WARNINGS (a planifier)
- Item 1 — ...

## PASS (ce qui est bon)
- Item 1 OK
- Item 2 OK
- ...

## Actions Recommandees (par priorite)
1. ...
2. ...
3. ...
```

### Regles du rapport

- **Jamais "A VERIFIER"** — l'audit DOIT trancher OK ou FAIL pour chaque item
- **Toujours donner le fichier et la ligne** pour chaque FAIL
- **Toujours donner la correction** (code ou commande)
- **Deleguer aux skills existants** quand pertinent (citer le skill utilise)
- **Comparer au gold standard** (LeCapybara pour design/legal, logiciel-paie pour accents, OMB pour perf)

## Skills Delegues

| Domaine | Skill | Quand |
|---------|-------|-------|
| SEO semantique / content gaps | `/seo-geo-auditor` | T2 SEO + T3 |
| GEO / AI citations | `/ai-seo` | T2 SEO |
| CRO pages | `/page-cro` | T2 CRO |
| UI/accessibilite | `/web-design-guidelines` | Design |
| pSEO structure | `/programmatic-seo` | T3 Content Scale |
| SEO setup Indxel | `/indxel` | T1 SEO |
| Crawl / perf live | `/indxel-pro` | T2 Live |

## Referentiel

- `QC-CHECKLIST.md` — 84 items, matrice d'audit, strategie 1500 pages
- `DESIGN-KB.md` — regles design (~400 lignes)
- `design-kb/scoring-rubric.ts` — 10 criteres, seuil 9.0
- `design-kb/anti-patterns.ts` — 906 lignes d'anti-patterns
- `design-kb/component-patterns.ts` — 1002 lignes de patterns composants
- `PERFORMANCE-PLAYBOOK.md` — 17 pratiques (dans `oneminutebranding/apps/omb/`)
- `SECURITY-PLAYBOOK.md` — 10 pratiques securite
- `oracle-pseo/docs/seo-images-best-practices.md` — OG images + Google Discover
- `prompts/gemini-mockup-generator.md` — workflow mockup Gemini
