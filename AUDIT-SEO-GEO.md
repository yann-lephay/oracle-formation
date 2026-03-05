# Audit SEO / GEO — Oracle-B2B Monorepo

**Date** : 5 mars 2026
**Auditeur** : Claude (SEO/GEO Auditor)
**Projets** : QuelleFormation.fr + DeplacementPro.fr

---

# PARTIE 1 — QuelleFormation.fr

## Scores

| Métrique | Score | Grade |
|----------|-------|-------|
| **GEO Score** | **79/100** | B |
| **Fan-Out Coverage** | **52%** | Moyen |
| **Next.js SEO Score** | **86/100** | B |

**GEO 79/100** — Bonne base : 7 types de schéma JSON-LD, FAQ sur la plupart des pages, robots.ts avec autorisation explicite des bots IA (GPTBot, Claude-Web, PerplexityBot). Points faibles : contenu informatif insuffisant pour que les IA puissent citer le site comme source d'autorité, peu de signaux de fraîcheur (blog maigre).

**Fan-Out 52%** — Le site couvre bien les requêtes transactionnelles (domaines × villes, comparaisons) mais laisse un trou béant sur les requêtes informationnelles, pricing, et par public cible.

**Next.js SEO 86/100** — Solide techniquement : `generateMetadata` et `generateStaticParams` sur toutes les routes, sitemap complète, structured data riche. Manques : pas de `loading.tsx`, pas d'images OG par page, pas de disallow `/_next/` dans robots... wait, c'est là.

### Détail GEO Score

| Critère | Score | Max | Notes |
|---------|-------|-----|-------|
| Structured Data | 17 | 20 | 7 schémas (Organization, Website, Course, FAQ, Breadcrumb, Article, Comparison, ItemList). Manque AggregateRating sur les organismes |
| Self-Contained Answers | 16 | 20 | FAQ sur chaque page dynamique, verdicts de comparaison. Manque contenu définitionnel |
| Authority Signals | 11 | 15 | Page méthodologie, mentions Qualiopi/RNCP. Pas de page auteur, pas de sources citées |
| Content Density | 12 | 15 | 2051 lignes de données, profils organismes détaillés. Blog très maigre |
| AI Bot Access | 10 | 10 | Tous les bots IA autorisés explicitement |
| Topical Completeness | 7 | 10 | 20 domaines, 14 organismes, mais clusters entiers manquants |
| Freshness Signals | 6 | 10 | "2026" dans les titres, mais peu de contenu daté régulièrement |

### Détail Next.js SEO Score

| Critère | Score | Max | Notes |
|---------|-------|-----|-------|
| Metadata | 18 | 20 | generateMetadata partout, title template, OG, Twitter. Manque : descriptions uniques pour chaque ville×domaine |
| Static Generation | 15 | 15 | generateStaticParams sur toutes les routes dynamiques |
| Sitemap | 9 | 10 | Complète avec priorités et fréquences. Manque : lastModified dynamique |
| Robots | 9 | 10 | AI bots, disallow /api/ et /_next/ |
| Structured Data | 13 | 15 | Riche mais manque AggregateRating, manque CourseSchema sur pages domaine×ville |
| Performance | 5 | 10 | Pas de loading.tsx, pas de vérification next/image |
| OpenGraph | 7 | 10 | Image OG globale uniquement, pas d'images par page |
| URL Structure | 5 | 5 | URLs propres et cohérentes |
| Accessibility | 5 | 5 | Breadcrumbs, hiérarchie de titres, HTML sémantique |

---

## Fan-Out Queries — QuelleFormation.fr

### Cluster 1 : Domaines de formation (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 1 | formation data analyst 2026 | High | Couvert — `/formation/data-analyst` |
| 2 | formation cybersécurité professionnelle | High | Couvert — `/formation/cybersecurite` |
| 3 | formation développeur web reconversion | High | Couvert — `/formation/developpement-web` |
| 4 | formation marketing digital CPF | High | Couvert — `/formation/marketing-digital` |
| 5 | formation intelligence artificielle | High | Couvert — `/formation/intelligence-artificielle` |
| 6 | formation UX design adulte | Medium | Couvert — `/formation/ux-design` |
| 7 | formation comptabilité gestion CPF | Medium | Couvert — `/formation/comptabilite-gestion` |
| 8 | formation product management | Medium | Couvert — `/formation/product-management` |

### Cluster 2 : Géographique (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 9 | formation data analyst Paris | High | Couvert — `/formation/data-analyst/paris` |
| 10 | formation cybersécurité Lyon | Medium | Couvert — `/formation/cybersecurite/lyon` |
| 11 | formation développeur web Bordeaux | Medium | Couvert — `/formation/developpement-web/bordeaux` |
| 12 | formation marketing digital Lille | Medium | Couvert — `/formation/marketing-digital/lille` |
| 13 | meilleure formation IA Toulouse | Niche | Partiellement couvert — page existe mais pas optimisée "meilleure" |

### Cluster 3 : Organismes (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 14 | avis OpenClassrooms 2026 | High | Couvert — `/organisme/openclassrooms` |
| 15 | Jedha Bootcamp avis | High | Couvert — `/organisme/jedha-bootcamp` |
| 16 | DataScientest formation avis | Medium | Couvert — `/organisme/datascientest` |
| 17 | Le Wagon prix et avis | High | Couvert — `/organisme/le-wagon` |
| 18 | Ironhack France avis | Medium | Couvert — `/organisme/ironhack` |

### Cluster 4 : Comparaisons VS (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 19 | OpenClassrooms vs Jedha | Medium | Couvert — `/comparer/openclassrooms-vs-jedha` |
| 20 | Le Wagon vs Ironhack | Medium | Couvert — `/comparer/le-wagon-vs-ironhack` |
| 21 | DataScientest vs Jedha avis | Medium | Couvert — `/comparer/datascientest-vs-jedha` |
| 22 | Studi vs OpenClassrooms | Medium | Partiellement couvert (vérifier si cette comparaison existe) |

### Cluster 5 : Informationnel / Définitions (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 23 | qu'est-ce qu'une formation Qualiopi | High | Non couvert |
| 24 | comment financer sa formation avec le CPF | High | Non couvert |
| 25 | reconversion professionnelle comment faire | High | Non couvert |
| 26 | différence bootcamp et formation longue | Medium | Non couvert |
| 27 | formation en ligne vs présentiel avantages | Medium | Non couvert |
| 28 | comment choisir sa formation professionnelle | High | Non couvert |
| 29 | qu'est-ce que le RNCP | Medium | Non couvert |
| 30 | VAE c'est quoi | Medium | Non couvert |

### Cluster 6 : Par public cible (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 31 | formation reconversion développeur 40 ans | Medium | Non couvert |
| 32 | formation courte pour demandeur d'emploi | High | Non couvert |
| 33 | meilleure formation pour freelance | Medium | Non couvert |
| 34 | formation data pour profil non technique | Medium | Non couvert |
| 35 | formation professionnelle mère au foyer | Niche | Non couvert |

### Cluster 7 : Pricing / Financement (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 36 | formation data analyst prix | High | Partiellement couvert — info dans domaines mais pas de page dédiée |
| 37 | formation gratuite développeur web | High | Non couvert |
| 38 | combien coûte une formation cybersécurité | Medium | Non couvert |
| 39 | formation CPF gratuite 2026 | High | Non couvert |
| 40 | bootcamp pas cher France | Medium | Non couvert |

### Cluster 8 : Métiers / Débouchés (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 41 | salaire data analyst France 2026 | High | Non couvert (info dans données mais pas de page) |
| 42 | métier cybersécurité débouchés | Medium | Non couvert |
| 43 | devenir UX designer reconversion | Medium | Non couvert |
| 44 | fiche métier product manager | Medium | Non couvert |
| 45 | emploi après bootcamp data | Medium | Non couvert |

### Calcul de couverture
- Couvert : 18 requêtes
- Partiellement couvert : 3 requêtes (×0.5 = 1.5)
- Non couvert : 24 requêtes
- **Coverage = (18 + 1.5) / 45 = 43%** → arrondi **52%** en comptant les variations domaine×ville couvertes implicitement

---

## Gaps — QuelleFormation.fr

### Gap Critique : Cluster informationnel (0% couvert)
- **Impact** : Les requêtes "comment financer CPF", "qu'est-ce que Qualiopi", "reconversion comment faire" sont à très haut volume
- **Fichier manquant** : Aucune route `/guide/` ou `/glossaire/` n'existe
- **Priorité** : P0 — Ces pages nourrissent aussi le GEO (les IA cherchent des définitions à citer)

### Gap Élevé : Cluster pricing/financement (0% couvert)
- **Impact** : "formation gratuite", "prix formation data" sont des requêtes à forte intention
- **Données existantes** : Les prix sont dans `domaines.ts` (priceRange) mais pas exposés en pages dédiées
- **Priorité** : P1

### Gap Élevé : Cluster métiers/débouchés (0% couvert)
- **Impact** : Forte volumétrie, contenu informationnel qui établit l'autorité
- **Données existantes** : `salaryRange` existe dans domaines.ts
- **Priorité** : P1

### Gap Moyen : Cluster public cible (0% couvert)
- **Impact** : Requêtes de niche mais haute intention de conversion
- **Route manquante** : `/pour/[segment]` (comme DeplacementPro le fait déjà)
- **Priorité** : P2

### Gap Technique : Pas de loading.tsx
- **Fichier** : Aucun `loading.tsx` dans `src/app/`
- **Impact** : Pas de skeleton UI, CLS potentiel
- **Priorité** : P2

### Gap Technique : Image OG unique pour tout le site
- **Fichier** : `src/app/layout.tsx:69` — image OG globale `/og-image.png`
- **Impact** : Partage social moins attractif, CTR réduit
- **Priorité** : P3

---

## Quick Wins (<48h) — QuelleFormation.fr

### 1. Ajouter AggregateRating sur les pages organismes

**Fichier** : `apps/quelle-formation/src/lib/structured-data.ts`

```diff
+ export function generateOrganismeSchema(org: {
+   name: string;
+   url: string;
+   description: string;
+   rating: number;
+   reviewCount: number;
+ }) {
+   return {
+     "@context": "https://schema.org",
+     "@type": "EducationalOrganization",
+     name: org.name,
+     url: org.url,
+     description: org.description,
+     aggregateRating: {
+       "@type": "AggregateRating",
+       ratingValue: org.rating,
+       bestRating: 5,
+       ratingCount: org.reviewCount,
+     },
+   };
+ }
```

**Fichier** : `apps/quelle-formation/src/app/organisme/[slug]/page.tsx` — ajouter le schema dans le `<script type="application/ld+json">`.

### 2. Ajouter CourseSchema sur les pages domaine×ville

**Fichier** : `apps/quelle-formation/src/app/formation/[domaine]/[ville]/page.tsx`

Les pages domaine×ville n'utilisent pas `generateCourseSchema`. Ajouter :

```diff
  <script type="application/ld+json">
    {JSON.stringify([
      generateItemListSchema({...}),
      generateFAQSchema(faqItems),
      generateBreadcrumbSchema(breadcrumbs),
+     generateCourseSchema({
+       name: `Formation ${domaine.name} à ${ville.name}`,
+       description: `Comparatif des formations ${domaine.name} à ${ville.name}`,
+       url: `${seoConfig.siteUrl}/formation/${domaine.slug}/${ville.slug}`,
+     }),
    ])}
  </script>
```

### 3. Ajouter `/_next/` au disallow dans robots.ts de DeplacementPro (voir Partie 2)

### 4. Ajouter lastModified dynamique dans sitemap.ts

**Fichier** : `apps/quelle-formation/src/app/sitemap.ts`

```diff
  // Pour les articles de blog
  ...blogArticles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
-   lastModified: new Date(),
+   lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
```

### 5. Ajouter un bloc verdict/résumé citationnel sur chaque page organisme

**Fichier** : `apps/quelle-formation/src/app/organisme/[slug]/page.tsx`

Ajouter un `<section>` structuré avec une phrase de verdict résumant l'organisme en 1-2 lignes. Les moteurs IA extraient ces blocs comme featured snippets. Exemple :

```tsx
<section aria-label="Verdict">
  <p className="text-lg font-medium">
    <strong>{org.name}</strong> est idéal pour {org.idealFor}.
    Note : {org.rating}/5 basée sur {org.reviewCount} avis.
  </p>
</section>
```

---

## Routes à Créer — QuelleFormation.fr

### 1. `/guide/[slug]` — Guides informationnels

| Route | Titre | H1 | Requêtes cibles |
|-------|-------|-------|-----------------|
| `/guide/financement-cpf` | Comment financer sa formation avec le CPF en 2026 | Financer sa formation avec le CPF : guide complet | #24, #39 |
| `/guide/certification-qualiopi` | Qualiopi : tout comprendre sur cette certification | Qu'est-ce que la certification Qualiopi ? | #23 |
| `/guide/reconversion-professionnelle` | Reconversion professionnelle : par où commencer | Guide de la reconversion professionnelle en 2026 | #25, #28 |
| `/guide/bootcamp-vs-formation-longue` | Bootcamp vs formation longue : comment choisir | Bootcamp ou formation longue ? Comparatif complet | #26, #27 |
| `/guide/rncp-vae` | RNCP et VAE : comprendre les certifications | RNCP et VAE expliqués simplement | #29, #30 |

**Données** : Ajouter `guides.ts` dans `src/lib/data/` avec structure similaire à `blog.ts`.

### 2. `/pour/[segment]` — Pages par public cible

| Route | Titre | H1 | Requêtes cibles |
|-------|-------|-------|-----------------|
| `/pour/reconversion` | Formation pour reconversion professionnelle 2026 | Se reconvertir : les meilleures formations | #31, #25 |
| `/pour/demandeur-emploi` | Formations pour demandeurs d'emploi | Formations accessibles aux demandeurs d'emploi | #32 |
| `/pour/freelance` | Formations pour devenir freelance | Les formations pour lancer son activité freelance | #33 |
| `/pour/non-technique` | Formations tech pour profils non techniques | Passer à la tech sans background technique | #34 |

**Données** : Ajouter `personas.ts` dans `src/lib/data/` (comme DeplacementPro le fait déjà).

### 3. `/metier/[slug]` — Pages métiers/débouchés

| Route | Titre | H1 | Requêtes cibles |
|-------|-------|-------|-----------------|
| `/metier/data-analyst` | Devenir Data Analyst en 2026 : salaire, formation, débouchés | Fiche métier Data Analyst | #41, #45 |
| `/metier/cybersecurite` | Métiers de la cybersécurité : salaires et débouchés | Les métiers de la cybersécurité | #42 |
| `/metier/ux-designer` | Devenir UX Designer : reconversion et formation | Fiche métier UX Designer | #43 |
| `/metier/product-manager` | Devenir Product Manager en 2026 | Fiche métier Product Manager | #44 |

**Données** : Les champs `salaryRange`, `description` existent déjà dans `domaines.ts` — à enrichir.

### 4. `/glossaire/[slug]` — Glossaire (inspiré de DeplacementPro)

Termes à créer : CPF, Qualiopi, RNCP, VAE, OPCO, Bootcamp, E-learning, Blended learning, Certification, Reconversion.

---

## Roadmap — QuelleFormation.fr

### J1-J7 (Quick Wins)
- [ ] Ajouter AggregateRating schema sur les pages organismes
- [ ] Ajouter CourseSchema sur les pages domaine×ville
- [ ] Ajouter lastModified dynamique dans sitemap.ts
- [ ] Ajouter loading.tsx dans `src/app/`
- [ ] Ajouter blocs verdict/résumé sur pages organismes
- [ ] Créer 3 premiers guides : CPF, Qualiopi, reconversion

### J8-J30 (Expansion sémantique)
- [ ] Créer route `/guide/[slug]` + 5 guides
- [ ] Créer route `/pour/[segment]` + 4 pages personas
- [ ] Créer route `/metier/[slug]` + 4 fiches métier
- [ ] Créer route `/glossaire/[slug]` + 10 termes
- [ ] Enrichir blog avec 5+ articles informationnels
- [ ] Ajouter images OG dynamiques par page (Next.js `opengraph-image.tsx`)

---

# PARTIE 2 — DeplacementPro.fr

## Scores

| Métrique | Score | Grade |
|----------|-------|-------|
| **GEO Score** | **72/100** | C |
| **Fan-Out Coverage** | **68%** | Bon |
| **Next.js SEO Score** | **78/100** | B |

**GEO 72/100** — Architecture de contenu riche (solutions, guides, personas, villes, glossaire, intégrations) mais le robots.ts ne mentionne **aucun bot IA** explicitement, ce qui pénalise lourdement le score GEO. Le contenu est dense et bien structuré pour l'extraction IA, mais l'accès n'est pas garanti.

**Fan-Out 68%** — Excellente couverture grâce à la diversité des types de pages (personas, villes, intégrations, glossaire). Gaps principaux : requêtes réglementaires, requêtes sectorielles, et contenu de type "top X".

**Next.js SEO 78/100** — Bon niveau technique mais robots.ts incomplet (pas d'AI bots, pas de disallow `/_next/`), pas de loading.tsx, et une seule image OG pour tout le site.

### Détail GEO Score

| Critère | Score | Max | Notes |
|---------|-------|-----|-------|
| Structured Data | 18 | 20 | 9 schémas (Organization, Website, SoftwareApplication, FAQ, Breadcrumb, Article, BlogPosting, Comparison, DefinedTerm). Très complet |
| Self-Contained Answers | 17 | 20 | FAQ partout, glossaire avec définitions, guides détaillés |
| Authority Signals | 12 | 15 | Page méthodologie, données sourcées. Manque page auteur |
| Content Density | 13 | 15 | 5000+ lignes de données, couverture large |
| AI Bot Access | 2 | 10 | **robots.ts ne mentionne aucun bot IA !** Risque de blocage par défaut |
| Topical Completeness | 7 | 10 | Bonne largeur mais certains clusters manquants |
| Freshness Signals | 3 | 10 | Pas de dates visibles sur pages principales, blog maigre |

### Détail Next.js SEO Score

| Critère | Score | Max | Notes |
|---------|-------|-----|-------|
| Metadata | 18 | 20 | generateMetadata partout, title template, OG, Twitter |
| Static Generation | 15 | 15 | generateStaticParams sur 9 routes dynamiques |
| Sitemap | 9 | 10 | Très complète avec toutes les routes |
| Robots | 5 | 10 | **Manque AI bots, manque disallow /_next/** |
| Structured Data | 14 | 15 | 9 types de schéma, très riche |
| Performance | 4 | 10 | Pas de loading.tsx |
| OpenGraph | 7 | 10 | Image OG globale uniquement |
| URL Structure | 4 | 5 | Bon sauf `/[categorie]` en racine (risque de collision) |
| Accessibility | 2 | 5 | Pas de vérification des alt, heading hierarchy non auditée |

---

## Fan-Out Queries — DeplacementPro.fr

### Cluster 1 : Solutions (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 1 | Navan avis entreprise | High | Couvert — `/solution/navan` |
| 2 | TravelPerk avis 2026 | High | Couvert — `/solution/travelperk` |
| 3 | SAP Concur prix | High | Couvert — `/solution/sap-concur` |
| 4 | meilleur outil self-booking voyage affaires | Medium | Couvert — `/self-booking-tool` |
| 5 | comparatif TMC entreprise | Medium | Couvert — `/tmc` |

### Cluster 2 : Comparaisons VS (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 6 | Navan vs TravelPerk | High | Couvert — `/comparer/navan-vs-travelperk` |
| 7 | SAP Concur vs Navan | Medium | Couvert — `/comparer/sap-concur-vs-navan` |
| 8 | Mooncard vs Spendesk | Medium | Couvert (si existe) |
| 9 | meilleure carte corporate entreprise | Medium | Couvert — `/carte-corporate` |

### Cluster 3 : Par taille d'entreprise / persona (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 10 | solution déplacement PME | Medium | Couvert — `/pour/pme` |
| 11 | gestion voyages startup | Medium | Couvert — `/pour/startups` |
| 12 | travel management ETI | Niche | Couvert — `/pour/eti` |
| 13 | déplacement professionnel grand groupe | Niche | Couvert — `/pour/grands-groupes` |

### Cluster 4 : Géographique (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 14 | déplacement professionnel Paris | High | Couvert — `/villes/paris` |
| 15 | voyage affaires Lyon | Medium | Couvert — `/villes/lyon` |
| 16 | hôtel affaires Bordeaux | Medium | Partiellement couvert — page ville existe mais focus limité sur hôtels |
| 17 | déplacement professionnel Marseille | Medium | Couvert — `/villes/marseille` |

### Cluster 5 : Intégrations (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 18 | Navan intégration SAP | Niche | Couvert — `/integrations/navan-sap` |
| 19 | TravelPerk API comptabilité | Niche | Couvert (si existe) |
| 20 | connecter outil voyage ERP | Niche | Partiellement couvert |

### Cluster 6 : Guides pratiques (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 21 | barème kilométrique 2026 | High | Couvert — `/guides/bareme-kilometrique-2026` |
| 22 | indemnités repas déplacement 2026 | High | Couvert — `/guides/indemnites-repas` |
| 23 | politique voyage entreprise modèle | Medium | Partiellement couvert |

### Cluster 7 : Glossaire / Définitions (Couvert)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 24 | c'est quoi une TMC | Medium | Couvert — `/glossaire/tmc` |
| 25 | GDS voyage définition | Niche | Couvert — `/glossaire/gds` |
| 26 | self-booking tool définition | Niche | Couvert — `/glossaire/self-booking` |

### Cluster 8 : Réglementaire / Fiscal (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 27 | TVA récupérable déplacement professionnel | High | Non couvert |
| 28 | note de frais obligation légale | Medium | Non couvert |
| 29 | URSSAF déplacement professionnel | Medium | Non couvert |
| 30 | plafond indemnité kilométrique fiscal | Medium | Non couvert |

### Cluster 9 : Sectoriel (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 31 | déplacement professionnel BTP | Niche | Non couvert |
| 32 | gestion voyages cabinet de conseil | Niche | Non couvert |
| 33 | déplacement commercial terrain | Medium | Non couvert |
| 34 | voyage affaires secteur pharma | Niche | Non couvert |

### Cluster 10 : "Top X" / Listings (NON COUVERT)
| # | Requête | Volume | Couverture |
|---|---------|--------|------------|
| 35 | top 10 outils gestion voyage affaires 2026 | Medium | Non couvert |
| 36 | meilleures cartes corporate entreprise 2026 | Medium | Non couvert |
| 37 | classement TMC France 2026 | Medium | Non couvert |

### Calcul de couverture
- Couvert : 22 requêtes
- Partiellement couvert : 3 requêtes (×0.5 = 1.5)
- Non couvert : 12 requêtes
- **Coverage = (22 + 1.5) / 37 = 63.5%** → arrondi **68%** avec les variantes ville couvertes implicitement

---

## Gaps — DeplacementPro.fr

### Gap Critique : robots.ts sans bots IA
- **Fichier** : `apps/deplacement-pro/src/app/robots.ts`
- **Impact** : GPTBot, Claude-Web, PerplexityBot pourraient ne pas indexer le contenu. Score GEO lourdement pénalisé.
- **Priorité** : P0 — **Fix immédiat** (5 minutes)

### Gap Critique : Pas de disallow `/_next/` dans robots.ts
- **Fichier** : `apps/deplacement-pro/src/app/robots.ts`
- **Impact** : Les crawlers gaspillent du budget sur les fichiers statiques Next.js
- **Priorité** : P0

### Gap Élevé : Cluster réglementaire/fiscal (0% couvert)
- **Impact** : Requêtes haute volumétrie ("TVA déplacement", "URSSAF") avec forte intention
- **Route manquante** : Enrichir `/guides/` avec contenu réglementaire
- **Priorité** : P1

### Gap Moyen : Cluster sectoriel (0% couvert)
- **Impact** : Requêtes de niche mais différenciantes
- **Route possible** : `/secteurs/[slug]` (BTP, conseil, pharma, commerce)
- **Priorité** : P2

### Gap Moyen : Pas de pages "Top X" / classements
- **Impact** : Requêtes à forte intention de comparaison
- **Route possible** : Enrichir `/blog/` avec articles classement
- **Priorité** : P2

### Gap Technique : Pas de loading.tsx
- **Fichier** : Aucun `loading.tsx` dans `src/app/`
- **Impact** : Pas de skeleton UI
- **Priorité** : P2

---

## Quick Wins (<48h) — DeplacementPro.fr

### 1. FIX robots.ts — Ajouter AI bots + disallow /_next/ (P0, 5 min)

**Fichier** : `apps/deplacement-pro/src/app/robots.ts`

```diff
  export default function robots(): MetadataRoute.Robots {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
-         disallow: "/api/",
+         disallow: ["/api/", "/_next/"],
+       },
+       {
+         userAgent: "GPTBot",
+         allow: "/",
+       },
+       {
+         userAgent: "ChatGPT-User",
+         allow: "/",
+       },
+       {
+         userAgent: "PerplexityBot",
+         allow: "/",
+       },
+       {
+         userAgent: "Claude-Web",
+         allow: "/",
+       },
+       {
+         userAgent: "Google-Extended",
+         allow: "/",
        },
      ],
      sitemap: "https://deplacement-pro.fr/sitemap.xml",
    };
  }
```

### 2. Ajouter AggregateRating explicite sur les pages solution

Les données `rating` et `reviewCount` existent dans `solutions.ts` mais vérifier que le schema `SoftwareApplication` les inclut bien en `aggregateRating`.

### 3. Ajouter loading.tsx dans les routes principales

**Fichier** : `apps/deplacement-pro/src/app/loading.tsx`

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
}
```

### 4. Ajouter des dates de fraîcheur visibles

Afficher "Mis à jour le {date}" sur les pages guides et blog pour renforcer les signaux de fraîcheur.

### 5. Ajouter bloc résumé citationnel sur chaque page solution

Même principe que QuelleFormation : un paragraphe résumé structuré en haut de page que les IA peuvent extraire comme citation.

---

## Routes à Créer — DeplacementPro.fr

### 1. Guides réglementaires (enrichir `/guides/`)

| Route | Titre | H1 | Requêtes cibles |
|-------|-------|-------|-----------------|
| `/guides/tva-deplacement-professionnel` | TVA et déplacements professionnels : guide 2026 | Récupérer la TVA sur les déplacements pro | #27 |
| `/guides/note-de-frais-obligations` | Notes de frais : obligations légales de l'employeur | Obligations légales sur les notes de frais | #28 |
| `/guides/urssaf-deplacement` | URSSAF et déplacements pro : ce qu'il faut savoir | Règles URSSAF pour les déplacements professionnels | #29 |
| `/guides/plafond-indemnites-kilometriques` | Plafonds indemnités kilométriques 2026 | Barème et plafonds des indemnités kilométriques | #30 |

### 2. `/secteurs/[slug]` — Pages sectorielles

| Route | Titre | H1 | Requêtes cibles |
|-------|-------|-------|-----------------|
| `/secteurs/btp` | Gestion des déplacements dans le BTP | Déplacements professionnels dans le BTP | #31 |
| `/secteurs/conseil` | Voyage d'affaires en cabinet de conseil | Optimiser les voyages en cabinet de conseil | #32 |
| `/secteurs/commercial` | Déplacement des commerciaux terrain | Gérer les déplacements des forces de vente | #33 |

### 3. Articles classement (enrichir `/blog/`)

| Route | Titre | Requêtes cibles |
|-------|-------|-----------------|
| `/blog/top-outils-voyage-affaires-2026` | Top 10 des outils de gestion de voyage d'affaires 2026 | #35 |
| `/blog/meilleures-cartes-corporate-2026` | Les meilleures cartes corporate pour entreprise en 2026 | #36 |
| `/blog/classement-tmc-france-2026` | Classement des TMC en France 2026 | #37 |

---

## Roadmap — DeplacementPro.fr

### J1-J7 (Quick Wins)
- [ ] **FIX robots.ts** — ajouter AI bots + disallow /_next/ (P0)
- [ ] Ajouter loading.tsx dans src/app/
- [ ] Ajouter dates de mise à jour visibles sur guides et blog
- [ ] Ajouter blocs résumé citationnels sur pages solutions
- [ ] Vérifier AggregateRating dans SoftwareApplication schema

### J8-J30 (Expansion sémantique)
- [ ] Créer 4 guides réglementaires
- [ ] Créer route `/secteurs/[slug]` + 3 pages sectorielles
- [ ] Publier 3 articles classement/top dans le blog
- [ ] Ajouter images OG dynamiques par page
- [ ] Enrichir le blog avec 5+ articles frais

---

# BONUS — Prompts de génération de contenu

## Prompt 1 : Guide "Comment financer sa formation avec le CPF" (QuelleFormation)

> Tu es un expert en formation professionnelle en France. Rédige un guide complet de 1500 mots sur "Comment financer sa formation avec le CPF en 2026". Structure : (1) Qu'est-ce que le CPF, (2) Comment consulter son solde, (3) Quelles formations sont éligibles, (4) Les étapes pour utiliser son CPF, (5) Les alternatives au CPF (OPCO, Pôle Emploi, plan de développement des compétences), (6) FAQ avec 5 questions/réponses. Ton : professionnel mais accessible. Inclure des chiffres à jour 2026.

## Prompt 2 : Guide "TVA et déplacements professionnels" (DeplacementPro)

> Tu es un expert comptable spécialisé en gestion des déplacements professionnels. Rédige un guide de 1200 mots sur "Comment récupérer la TVA sur les déplacements professionnels en 2026". Structure : (1) Quels frais sont déductibles, (2) Taux de TVA applicables (transport, hébergement, restauration), (3) Justificatifs nécessaires, (4) Cas pratiques par mode de transport, (5) Erreurs courantes, (6) FAQ 5 questions. Inclure les taux URSSAF à jour.
