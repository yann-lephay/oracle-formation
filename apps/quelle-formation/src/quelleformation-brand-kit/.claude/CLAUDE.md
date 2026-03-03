# QuelleFormation: Votre guide indépendant pour la formation professionnelle en France.

## 🎨 Couleurs
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#006C71` | Actions principales, titres |
| `primary-foreground` | `#FFFFFF` | Texte sur primaire |
| `secondary` | `#E0F2F1` | Éléments de support, fonds subtils |
| `accent` | `#FF7E6B` | Accents visuels, notifications |
| `background` | `#F9FAFC` | Fond principal de l'application |
| `foreground` | `#1E293B` | Texte principal |
| `surface` | `#F1F5F9` | Cartes, panneaux |
| `muted` | `#CBD5E1` | Éléments désactivés, fonds secondaires |
| `muted-foreground` | `#64748B` | Texte secondaire |
| `border` | `#E2E8F0` | Bordures, séparateurs |
| `destructive` | `#EF4444` | Actions dangereuses |

## ✒️ Typographie
- **Titres**: Urbanist (`--font-heading`) - `wght@600;700;800`
- **Corps**: DM Sans (`--font-body`) - `wght@400;500;700`
- **Mono**: Source Code Pro (`--font-mono`) pour données techniques.

## 🖼️ Icônes
- **Bibliothèque**: `lucide-react`
- **Style**: Line (trait fin) - `stroke-width: 1.5`
- **Taille par défaut**: `24px`

| Contexte | Icône |
|---|---|
| Accueil | `home` |
| Recherche | `search` |
| Réglages | `settings` |
| Profil | `user` |
| Comparaison | `columns-3` |
| Évaluation | `star` |

## 🗣️ Voix de Marque
- Langage clair et concis.
- Ton professionnel et bienveillant.
- Objectivité dans les comparaisons.
- Mettre l'accent sur les bénéfices utilisateur.
- Formalité mais approche accessible.

## 🧩 Composants Clés
| Nom | But |
|---|---|
| **Matrice de Comparaison** | Afficher des comparaisons détaillées de formations. |
| **Carte d'Évaluation** | Présenter les avis et notes des utilisateurs. |
| **Visualiseur de Progression** | Illustrer les parcours de carrière potentiels. |

## ✨ Animations
| Déclencheur | Animation |
|---|---|
| **Hover** (boutons, cartes) | `lift` (légère élévation) |
| **Click** (boutons) | `press` (léger enfoncement) |
| **Entrée d'éléments** | `fade-up` (apparition par le bas) |
| **Chargement** | `smooth` (ressort doux) |

## 📐 Système Graphique
- **Fond**: Dégradé linéaire subtil pour ajouter de la profondeur (`linear-gradient(to top right, #F8F9FB, #F9FAFC)`).
- **Accents**: Crochets d'angle minimalistes (`┌`, `┐`) pour encadrer des blocs d'information clés.
- **Séparateurs**: Lignes fines de couleur `border` (`1px solid var(--border)`).

## ♿ Accessibilité
```css
*:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
```
- Contraste WCAG AA (min 4.5:1).
- Cibles tactiles minimum 44x44px.
- Navigation au clavier complète.
- Respecte `prefers-reduced-motion`.

## 🚫 À Éviter
- Noms de marque génériques ou clichés (`Aetheria`, `Lumina`, `Nexus`, etc.).
- Combinaisons de couleurs trop vues (Dark mode + orange/violet).
- Utilisation d'Inter/Roboto pour les titres ou le corps dans les apps grand public.
- Logos avec la lettre 'Q' (pour QuelleFormation).
- Polices de caractères identiques pour titres et corps.