#!/usr/bin/env tsx
/**
 * generate-content.ts — oracle-formation
 *
 * Génère du contenu riche (blog, métiers, secteurs) pour QuelleFormation et DeplacementPro
 * via Google Gemini. Output = JSON objets conformes aux interfaces TypeScript des data files.
 *
 * Deux modes d'authentification :
 *   1. Clé API (AI Studio) — GEMINI_API_KEY=xxx
 *   2. Vertex AI (Service Account) — GOOGLE_PROJECT + GOOGLE_LOCATION
 *
 * Usage :
 *   # Mode Vertex AI (crédits GCP, recommandé)
 *   GOOGLE_PROJECT=project-a506a272-c208-4fa1-8e4 GOOGLE_LOCATION=global \
 *     npx tsx scripts/generate-content.ts --app quelle-formation --type blog --limit 3
 *
 *   # Mode clé API (AI Studio)
 *   GEMINI_API_KEY=xxx npx tsx scripts/generate-content.ts --app deplacement-pro --type secteurs
 *
 *   # Batch (-50% coût)
 *   npx tsx scripts/generate-content.ts --app quelle-formation --type metiers --batch
 *
 *   # Poll batch results
 *   npx tsx scripts/generate-content.ts --poll <batch-name> --type blog --app quelle-formation
 *
 * Options :
 *   --app <name>       quelle-formation | deplacement-pro
 *   --type <type>      Voir CONTENT_TYPES ci-dessous
 *   --limit <n>        Nombre max d'items à générer
 *   --overwrite        Regénère les fichiers existants
 *   --batch            Mode batch Gemini (-50% coût, async)
 *   --poll <name>      Vérifie et télécharge un batch job
 *   --model <name>     Modèle Gemini (défaut: gemini-3.1-pro-preview)
 */

import { GoogleGenAI } from "@google/genai";
import { Storage } from "@google-cloud/storage";
import fs from "node:fs";
import path from "node:path";

// ─── CLI args ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const getArg = (name: string) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : undefined;
};
const hasFlag = (name: string) => args.includes(`--${name}`);

const APP_ARG = getArg("app") as "quelle-formation" | "deplacement-pro" | undefined;
const TYPE = getArg("type") as string | undefined;
const LIMIT = getArg("limit") ? parseInt(getArg("limit")!) : Infinity;
const OVERWRITE = hasFlag("overwrite");
const BATCH_MODE = hasFlag("batch");
const POLL_NAME = getArg("poll");
const MODEL = getArg("model") ?? "gemini-3.1-pro-preview";

// ─── Content types per app ───────────────────────────────────────────────

const CONTENT_TYPES: Record<string, string[]> = {
  "quelle-formation": ["blog", "metiers"],
  "deplacement-pro": ["blog", "secteurs"],
};

// ─── Validation ──────────────────────────────────────────────────────────

if (!POLL_NAME) {
  if (!APP_ARG || !["quelle-formation", "deplacement-pro"].includes(APP_ARG)) {
    console.error("❌  --app quelle-formation | deplacement-pro");
    process.exit(1);
  }
  const validTypes = CONTENT_TYPES[APP_ARG];
  if (!TYPE || !validTypes?.includes(TYPE)) {
    console.error(`❌  --type ${validTypes?.join(" | ")} (pour ${APP_ARG})`);
    process.exit(1);
  }
}

// ─── Gemini setup ────────────────────────────────────────────────────────

const GOOGLE_PROJECT = process.env.GOOGLE_PROJECT;
const GOOGLE_LOCATION = process.env.GOOGLE_LOCATION ?? "global";
const USE_VERTEX = !!GOOGLE_PROJECT;

if (!USE_VERTEX && !process.env.GEMINI_API_KEY) {
  console.error("❌  GEMINI_API_KEY ou GOOGLE_PROJECT requis");
  console.error("   Vertex AI : GOOGLE_PROJECT=xxx GOOGLE_LOCATION=global");
  console.error("   AI Studio : GEMINI_API_KEY=xxx");
  process.exit(1);
}

const ai = USE_VERTEX
  ? new GoogleGenAI({
      vertexai: true,
      project: GOOGLE_PROJECT,
      location: GOOGLE_LOCATION,
    })
  : new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// ─── Output helpers ──────────────────────────────────────────────────────

function outputPath(appName: string, type: string, slug: string) {
  return path.resolve(`scripts/generated/${appName}/${type}/${slug}.json`);
}

function ensureDir(filePath: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function today() {
  return new Date().toISOString().split("T")[0];
}

// ─── Prompts — calibrés oracle-formation ────────────────────────────────

const ANTI_SLOP = `
## CE QUE TU NE DOIS JAMAIS ÉCRIRE
Phrases interdites — si tu en écris une seule, le contenu est rejeté :
- "Dans le paysage concurrentiel…" / "Dans un monde où…" / "À l'ère du…"
- "Il est important de noter que…" / "Il convient de souligner…"
- "En conclusion" / "Pour conclure" / "En résumé"
- "N'hésitez pas à" / "Force est de constater"
- "Solution robuste" / "outil puissant" / "véritable couteau suisse"
- "Adapté à vos besoins spécifiques" / "répondre à vos attentes"
- "Offre une expérience utilisateur fluide" / "interface intuitive et moderne"
- "Que vous soyez…" / "Quel que soit votre…"
- Toute phrase qui pourrait apparaître mot pour mot dans 10 autres articles
- Tout paragraphe d'introduction qui commence par reformuler le titre

## SYNDROME "INFORMATION HISTORIQUE" — INTERDIT
Ne raconte pas l'histoire d'un organisme sauf si ça aide la décision. "Fondé en 2014 par…" = inutile. "Racheté par Adecco en 2022, ce qui explique le réseau emploi" = utile.

## STYLE ATTENDU
BON : "Le CPF finance 100 % de la formation si votre solde couvre le prix. Au-delà, vous payez la différence. Point."
MAUVAIS : "Le CPF offre une opportunité unique de financement adaptée à chaque profil professionnel."

BON : "Concrètement : 6 mois de bootcamp data chez Jedha, 6 500 €, et un taux d'insertion de 93 %. C'est le meilleur ratio temps/coût/résultat du marché."
MAUVAIS : "Jedha propose une formation de qualité avec un excellent accompagnement vers l'emploi."
`;

const VOICE_GUIDE = `
## TA VOIX ÉDITORIALE
Tu es le rédacteur en chef d'un comparateur indépendant français spécialisé.
Tu écris comme quelqu'un qui conseille un ami — direct, honnête, parfois sec.

Principes :
- Phrase courte quand c'est un fait. Phrase longue quand c'est une nuance.
- Tu donnes ton avis tranché, puis tu nuances dans la phrase suivante.
- Tu utilises des chiffres concrets : prix en EUR, durée en mois, taux d'insertion.
- Tu poses des questions rhétoriques au lecteur.
- Tu utilises le vouvoiement chaleureux et actif, pas administratif.
- Quand tu ne sais pas, tu dis "on n'a pas pu vérifier" plutôt qu'inventer.
- Tu ne résumes JAMAIS en fin d'article.

## RÈGLE D'INFORMATION SPÉCIFIQUE
Chaque paragraphe qui avance un avantage DOIT être lié à un cas d'usage concret OU une métrique. Pas d'affirmation vide.
- INTERDIT : "Une formation de qualité reconnue"
- OBLIGATOIRE : "Formation certifiée RNCP niveau 6 (Bac+3), taux d'insertion 87 % à 6 mois"

## PROXY D'EXPÉRIENCE (E-E-A-T)
Tu peux :
- Agréger les retours : "Ce que les apprenants remontent le plus souvent après 3 mois…"
- Citer des tendances vérifiables : "Sur Trustpilot, 4,2/5 avec 800+ avis"
- Décrire des workflows : "Vous suivez 2h de cours le soir, quiz le week-end, projet fil rouge sur 3 mois"

## FORMATAGE EXTRACTION-FIRST (GEO / AI Overviews)
- Formule tes H2 comme des questions quand c'est naturel
- Après chaque H2-question, PREMIÈRE phrase < 40 mots = réponse directe extractible
- Les tableaux doivent avoir des données comparables (pas "Bon"/"Correct" mais "4,2/5", "6 500 €")
`;

// ─── Sector contexts ─────────────────────────────────────────────────────

const SECTOR_CONTEXT: Record<string, string> = {
  "quelle-formation": `Contexte sectoriel : formation professionnelle continue en France.
Vocabulaire clé : CPF (Compte Personnel de Formation), RNCP (Répertoire National des Certifications Professionnelles), Qualiopi (certification qualité obligatoire), OPCO (Opérateurs de Compétences), France Travail (ex Pôle Emploi), PTP (Projet de Transition Professionnelle), VAE (Validation des Acquis de l'Expérience), bootcamp, e-learning, blended learning, titre professionnel, CQP, alternance, CPF de transition.
Organismes de référence : OpenClassrooms, Le Wagon, Jedha, DataScientest, Studi, CNAM, Wild Code School, Ironhack, LiveMentor, M2i Formation, AFPA, Cegos, Demos, Orsys.
Sources fiables : France Compétences, MonCompteFormation.gouv.fr, DARES, Cereq, DGEFP.`,

  "deplacement-pro": `Contexte sectoriel : gestion des déplacements professionnels en France.
Vocabulaire clé : TMC (Travel Management Company), SBT (Self-Booking Tool), politique voyage, GDS (Global Distribution System), NDC (New Distribution Capability), notes de frais, barème kilométrique URSSAF, indemnités de grand déplacement (IGD), carte corporate, travel policy, duty of care, RGPD voyageurs.
Solutions de référence : Navan, TravelPerk, Mooncard, Spendesk, SAP Concur, Expensya.
Sources fiables : URSSAF, Légifrance (Code du travail), DGCCRF, AFTM (Association Française du Travel Management), GBTA.`,
};

// ─── Items to generate (what's missing) ──────────────────────────────────

interface GenerationItem {
  slug: string;
  title: string;
  context: string;
}

const QF_BLOG_ITEMS: GenerationItem[] = [
  { slug: "top-bootcamps-france-2026", title: "Les meilleurs bootcamps en France en 2026", context: "Comparatif des bootcamps tech (Le Wagon, Jedha, Ironhack, Wild Code School). Prix, durée, taux d'insertion, spécialités." },
  { slug: "formation-ia-intelligence-artificielle-2026", title: "Se former à l'intelligence artificielle en 2026", context: "Formations IA/ML accessibles (bootcamps, masters, certifs). Prérequis, débouchés, salaires. GPT, prompt engineering, data science." },
  { slug: "reconversion-developpeur-web-guide", title: "Reconversion développeur web : le guide complet", context: "Étapes pour devenir dev web en reconversion. Bootcamp vs autodidacte vs alternance. Stack à apprendre. Salaires réalistes." },
  { slug: "alternance-formation-adulte-2026", title: "L'alternance pour les adultes en 2026 : mode d'emploi", context: "Alternance après 26 ans : contrat pro, avantages employeur, organismes compatibles, salaire pendant la formation." },
  { slug: "comparatif-formation-en-ligne-2026", title: "Comparatif des plateformes de formation en ligne 2026", context: "OpenClassrooms vs Studi vs LiveMentor vs Coursera. Prix, certifications, accompagnement, reconnaissance employeurs." },
  { slug: "metiers-qui-recrutent-2026", title: "Les 10 métiers qui recrutent le plus en 2026", context: "Métiers en tension : dev, data, cyber, UX, product, cloud. Salaires, nombre d'offres, formations pour y accéder." },
  { slug: "financement-formation-hors-cpf", title: "Financer sa formation sans CPF : toutes les options", context: "OPCO, AIF, PTP, Agefiph, aides régionales, prêt étudiant, paiement en plusieurs fois. Guide exhaustif." },
  { slug: "formation-cybersecurite-guide", title: "Se former à la cybersécurité en 2026", context: "Bootcamps cyber (Jedha, M2i, CNAM), certifications (CEH, CompTIA, CISSP), salaires, débouchés. Accessible aux reconvertis ?" },
  { slug: "avis-openclassrooms-2026", title: "OpenClassrooms en 2026 : avis, prix, diplômes", context: "Test complet d'OpenClassrooms : parcours disponibles, prix (390-590€/mois), mentor hebdo, garantie emploi. Avis apprenants." },
  { slug: "formation-marketing-digital-comparatif", title: "Formations marketing digital : comparatif 2026", context: "LiveMentor vs OpenClassrooms vs Google Certifs vs Studi. Prix, durée, compétences acquises, reconnaissance marché." },
];

const QF_METIER_ITEMS: GenerationItem[] = [
  { slug: "developpeur-web", title: "Développeur web", context: "Full-stack, front, back. Bootcamps 3-6 mois. Salaire 30-55k€. Très forte demande. JS, React, Node, Python." },
  { slug: "chef-de-projet-digital", title: "Chef de projet digital", context: "Coordination technique + marketing. Salaire 35-55k€. Formations certifiantes 6-12 mois." },
  { slug: "marketing-digital", title: "Responsable marketing digital", context: "SEO, SEA, social media, analytics. Salaire 32-50k€. Formations courtes + certifications Google/Meta." },
  { slug: "designer-ux-ui", title: "Designer UX/UI", context: "Conception d'interfaces. Figma, user research. Salaire 33-52k€. Bootcamps 3-6 mois. Creative + analytique." },
  { slug: "devops-cloud", title: "Ingénieur DevOps / Cloud", context: "CI/CD, Docker, Kubernetes, AWS/GCP. Salaire 42-70k€. Certifications cloud. Très forte demande." },
  { slug: "data-scientist", title: "Data Scientist", context: "ML, deep learning, Python, stats avancées. Salaire 40-65k€. Bac+5 ou bootcamp intensif." },
  { slug: "product-owner", title: "Product Owner / Product Manager", context: "Gestion de produit, user stories, priorisation. Salaire 38-60k€. Formations agile + product." },
  { slug: "commercial-b2b", title: "Commercial B2B / Business Developer", context: "Vente complexe, SaaS sales. Salaire 30-50k€ fixe + variable. Formations courtes." },
  { slug: "comptable", title: "Comptable", context: "DCG/DSCG, logiciels compta. Salaire 28-45k€. Formation longue ou VAE." },
  { slug: "gestionnaire-paie", title: "Gestionnaire de paie", context: "DSN, bulletins, charges. Salaire 26-40k€. Formations certifiantes 6-12 mois. Pénurie de profils." },
  { slug: "community-manager", title: "Community Manager", context: "Réseaux sociaux, stratégie contenu. Salaire 25-38k€. Formations courtes 3-6 mois." },
  { slug: "consultant-rh", title: "Consultant RH", context: "Recrutement, GPEC, formation. Salaire 32-50k€. Reconversion depuis management possible." },
];

const DP_BLOG_ITEMS: GenerationItem[] = [
  { slug: "politique-voyage-entreprise-modele", title: "Comment rédiger une politique voyage d'entreprise (modèle inclus)", context: "Étapes pour créer une travel policy. Plafonds hébergement/transport, process validation, conformité URSSAF." },
  { slug: "tmc-guide-complet-2026", title: "TMC en 2026 : faut-il encore passer par une agence de voyage d'affaires ?", context: "TMC traditionnelle vs SBT (Navan, TravelPerk). Coûts, autonomie, gains. Quand la TMC vaut encore le coup." },
  { slug: "notes-frais-automatiser-2026", title: "Automatiser ses notes de frais en 2026 : guide complet", context: "Comparatif OCR, cartes corporate, intégrations compta. ROI concret. Mooncard vs Expensya vs Spendesk." },
  { slug: "bareme-kilometrique-2026-guide", title: "Barème kilométrique 2026 : montants, calcul et déclaration", context: "Barème URSSAF 2026, calcul IK, avantages vs frais réels. Exemples chiffrés. Véhicule perso vs entreprise." },
  { slug: "carte-corporate-comparatif-2026", title: "Cartes corporate 2026 : comparatif Mooncard, Spendesk, Qonto", context: "Plafonds, cashback, intégrations, prix. Quelle carte pour quelle taille d'entreprise." },
  { slug: "voyage-affaires-empreinte-carbone", title: "Réduire l'empreinte carbone de ses voyages d'affaires", context: "Train vs avion, reporting RSE, compensation carbone. Outils TMC green (TravelPerk GreenPerk). Réglementation." },
  { slug: "duty-of-care-obligation-securite", title: "Duty of Care : obligation de sécurité pour les voyageurs d'affaires", context: "Responsabilité employeur, géolocalisation, assurance rapatriement. Article L4121-1 Code du travail." },
  { slug: "frais-repas-deplacement-2026", title: "Indemnités repas en déplacement 2026 : barèmes et règles URSSAF", context: "Barèmes repas URSSAF 2026, conditions d'exonération, justificatifs. Restauration hors zone habituelle." },
  { slug: "self-booking-tool-guide", title: "Self-Booking Tool : pourquoi adopter la réservation en ligne", context: "Gains vs agence traditionnelle. Taux d'adoption. Navan, TravelPerk, Amex GBT. Politique intégrée." },
];

const DP_SECTEUR_ITEMS: GenerationItem[] = [
  { slug: "tech-it", title: "Tech & IT", context: "Développeurs, ingénieurs cloud. Déplacements clients/conférences. Remote-first mais onsites fréquents. Budget moyen." },
  { slug: "pharma-sante", title: "Pharma & Santé", context: "Visiteurs médicaux, congrès internationaux. Réglementation DMOS. Budget élevé. Compliance stricte." },
  { slug: "industrie-manufacturing", title: "Industrie & Manufacturing", context: "Visites usines, audits fournisseurs. Sites industriels souvent excentrés. Véhicules de fonction." },
  { slug: "finance-banque", title: "Finance & Banque", context: "Rendez-vous clients, roadshows. Policy stricte. Classe business fréquente. Compliance forte." },
  { slug: "retail-distribution", title: "Retail & Distribution", context: "Directeurs régionaux, acheteurs. Visites magasins/entrepôts. Forte mobilité locale. Km élevés." },
  { slug: "formation-education", title: "Formation & Éducation", context: "Formateurs itinérants, salons. Budget limité. Déplacements planifiables. Train privilégié." },
  { slug: "immobilier", title: "Immobilier", context: "Agents, promoteurs. Visites terrain quotidiennes. Mobilité locale intense. Barème kilométrique." },
  { slug: "audit-expertise-comptable", title: "Audit & Expertise Comptable", context: "Missions chez clients 3-4j/sem. Refacturation. Similar to conseil but PME centric." },
];

// ─── Prompt builders ─────────────────────────────────────────────────────

function buildQFBlogPrompt(item: GenerationItem): string {
  return `${VOICE_GUIDE}
${ANTI_SLOP}

## TA MISSION
Génère un article de blog complet pour le comparateur QuelleFormation.fr.

${SECTOR_CONTEXT["quelle-formation"]}

Titre : **${item.title}**
Contexte : ${item.context}

## FORMAT DE SORTIE — JSON STRICT
Tu dois retourner un objet JSON valide (pas de markdown, pas de commentaires) qui respecte exactement cette interface TypeScript :

\`\`\`typescript
interface BlogArticle {
  slug: string;           // "${item.slug}"
  title: string;          // Le titre de l'article
  excerpt: string;        // 1-2 phrases résumant l'article (~150 chars)
  publishedAt: string;    // "${today()}"
  updatedAt: string;      // "${today()}"
  author: string;         // "QuelleFormation"
  readingTime: string;    // ex: "8 min"
  relatedDomaines: string[];  // slugs parmi: developpeur-web, data-analyst, cybersecurite, marketing-digital, design-ux-ui, gestion-de-projet, intelligence-artificielle, commerce-vente, comptabilite-gestion, ressources-humaines
  relatedOrganismes: string[]; // slugs parmi: openclassrooms, le-wagon, jedha, datascientest, studi, cnam, wild-code-school, ironhack, livementor, m2i-formation, afpa, cegos, demos, orsys, ib-cegos
  content: ContentBlock[];
  faq: { question: string; answer: string }[];
  metaTitle: string;      // 50-60 chars, keyword-first
  metaDescription: string; // 140-160 chars
}
\`\`\`

Les ContentBlock sont :
- { "type": "paragraph", "text": "..." }
- { "type": "heading", "text": "...", "level": 2 } ou { "type": "heading", "text": "...", "level": 3 }
- { "type": "list", "items": ["...", "..."] }
- { "type": "callout", "text": "...", "variant": "info" | "tip" | "warning" }
- { "type": "cta", "text": "...", "href": "/#domaines", "label": "..." }

## RÈGLES
- Au moins 1500 mots de contenu (répartis dans les ContentBlock)
- 15-25 ContentBlocks
- Formule les H2 comme des questions quand c'est naturel
- 2-4 callouts, 1 CTA vers QuelleFormation
- 4-5 FAQ avec réponses directes (< 40 mots la première phrase)
- Chiffres concrets : prix en EUR, durée, taux d'insertion
- Accent sur TOUS les mots français (éligible, présentation, métier, etc.)
- Retourne UNIQUEMENT le JSON, sans code fence, sans explication`;
}

function buildQFMetierPrompt(item: GenerationItem): string {
  return `${VOICE_GUIDE}
${ANTI_SLOP}

## TA MISSION
Génère une fiche métier complète pour le comparateur QuelleFormation.fr.

${SECTOR_CONTEXT["quelle-formation"]}

Métier : **${item.title}**
Contexte : ${item.context}

## FORMAT DE SORTIE — JSON STRICT
Objet JSON valide respectant cette interface :

\`\`\`typescript
interface Metier {
  slug: string;           // "${item.slug}"
  name: string;           // Nom du métier
  description: string;    // 200-300 chars, description riche
  salaryRange: string;    // ex: "32 000 € – 55 000 €/an"
  salaryJunior: string;   // ex: "32 000 – 38 000 €/an"
  salarySenior: string;   // ex: "48 000 – 65 000 €/an"
  demandLevel: "très forte" | "forte" | "moyenne";
  relatedDomaines: string[];    // 2-4 slugs parmi les domaines existants
  relatedOrganismes: string[];  // 3-5 slugs parmi les organismes existants
  skills: string[];             // 5-7 compétences clés
  dailyTasks: string[];         // 4-6 tâches quotidiennes concrètes
  careerPath: string[];         // 4-6 évolutions de carrière
  metaTitle: string;            // 50-60 chars
  metaDescription: string;      // 140-160 chars
  faq: { question: string; answer: string }[];  // 3-5 FAQ
}
\`\`\`

Domaines disponibles : developpeur-web, data-analyst, cybersecurite, marketing-digital, design-ux-ui, gestion-de-projet, intelligence-artificielle, commerce-vente, comptabilite-gestion, ressources-humaines, management, product-management, devops-cloud, graphisme, photographie, sante-securite-travail, langues, communication-digitale, webdesign, bureautique

Organismes disponibles : openclassrooms, le-wagon, jedha, datascientest, studi, cnam, wild-code-school, ironhack, livementor, m2i-formation, afpa, cegos, demos, orsys, ib-cegos, eni-ecole

## RÈGLES
- Salaires réalistes pour le marché français 2026
- Skills concrets (outils/technos spécifiques, pas "communication")
- FAQ avec réponses directes (< 40 mots la première phrase)
- Tous les accents français (développeur, cybersécurité, etc.)
- Retourne UNIQUEMENT le JSON, sans code fence, sans explication`;
}

function buildDPBlogPrompt(item: GenerationItem): string {
  return `${VOICE_GUIDE}
${ANTI_SLOP}

## TA MISSION
Génère un article de blog complet pour DeplacementPro.fr (comparateur de solutions de déplacement pro).

${SECTOR_CONTEXT["deplacement-pro"]}

Titre : **${item.title}**
Contexte : ${item.context}

## FORMAT DE SORTIE — JSON STRICT
Objet JSON valide respectant cette interface :

\`\`\`typescript
interface BlogPost {
  slug: string;           // "${item.slug}"
  title: string;
  excerpt: string;        // 1-2 phrases résumant l'article (~150 chars)
  content: string;        // Peut rester vide (le contenu est dans sections)
  author: string;         // "Rédaction DeplacementPro"
  publishedAt: string;    // "${today()}"
  updatedAt: string;      // "${today()}"
  readingTime: string;    // ex: "7 min"
  category: string;       // ex: "Gestion", "Réglementation", "Comparatif", "Guide"
  metaTitle: string;      // 50-60 chars
  metaDescription: string; // 140-160 chars
  sections: {
    title: string;        // H2 de la section
    content: string;      // 100-200 mots par section, texte brut
  }[];                    // 6-10 sections
}
\`\`\`

## RÈGLES
- 7-10 sections avec 100-200 mots chacune (total ~1500 mots)
- Chiffres concrets : barèmes URSSAF, prix outils, ROI
- Formule les titres de section comme des questions quand c'est naturel
- Chaque section commence par une phrase directe < 40 mots
- Tous les accents français
- Retourne UNIQUEMENT le JSON, sans code fence, sans explication`;
}

function buildDPSecteurPrompt(item: GenerationItem): string {
  return `${VOICE_GUIDE}
${ANTI_SLOP}

## TA MISSION
Génère une fiche secteur complète pour DeplacementPro.fr.

${SECTOR_CONTEXT["deplacement-pro"]}

Secteur : **${item.title}**
Contexte : ${item.context}

## FORMAT DE SORTIE — JSON STRICT
Objet JSON valide respectant cette interface :

\`\`\`typescript
interface Secteur {
  slug: string;           // "${item.slug}"
  name: string;           // Nom du secteur
  description: string;    // 200-300 chars, description riche
  icon: string;           // Nom d'icône Lucide React (ex: "Laptop", "Heart", "Factory", "Landmark", "ShoppingCart", "GraduationCap", "Home", "Calculator")
  challenges: string[];   // 4-6 défis spécifiques au secteur
  specificNeeds: string[]; // 4-6 besoins en gestion de déplacement
  recommendedSolutions: {
    slug: string;         // parmi: navan, travelperk, mooncard, spendesk, sap-concur, expensya
    reason: string;       // 1 phrase expliquant pourquoi
  }[];                    // 2-3 solutions
  relevantGuides: string[]; // 2-4 slugs de guides pertinents
  metaTitle: string;      // 50-60 chars
  metaDescription: string; // 140-160 chars
  faq: {
    question: string;
    answer: string;       // Première phrase < 40 mots
  }[];                    // 3-4 FAQ
}
\`\`\`

Guides disponibles : bareme-kilometrique-2026, urssaf-deplacement, politique-voyage-entreprise, indemnites-repas-2026, tva-recuperation-frais, deplacements-frontaliers, obligation-securite-voyageurs

## RÈGLES
- Challenges et needs concrets au secteur, pas génériques
- FAQ avec données chiffrées (barèmes URSSAF, budgets moyens)
- Tous les accents français
- Retourne UNIQUEMENT le JSON, sans code fence, sans explication`;
}

// ─── Prompt router ───────────────────────────────────────────────────────

function getItems(app: string, type: string): GenerationItem[] {
  if (app === "quelle-formation" && type === "blog") return QF_BLOG_ITEMS;
  if (app === "quelle-formation" && type === "metiers") return QF_METIER_ITEMS;
  if (app === "deplacement-pro" && type === "blog") return DP_BLOG_ITEMS;
  if (app === "deplacement-pro" && type === "secteurs") return DP_SECTEUR_ITEMS;
  return [];
}

function buildPrompt(app: string, type: string, item: GenerationItem): string {
  if (app === "quelle-formation" && type === "blog") return buildQFBlogPrompt(item);
  if (app === "quelle-formation" && type === "metiers") return buildQFMetierPrompt(item);
  if (app === "deplacement-pro" && type === "blog") return buildDPBlogPrompt(item);
  if (app === "deplacement-pro" && type === "secteurs") return buildDPSecteurPrompt(item);
  throw new Error(`Unknown app/type: ${app}/${type}`);
}

// ─── JSON cleanup ────────────────────────────────────────────────────────

function extractJSON(text: string): string {
  // Remove markdown code fences if present
  let clean = text.trim();
  if (clean.startsWith("```")) {
    clean = clean.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }
  return clean.trim();
}

// ─── Sync generator ─────────────────────────────────────────────────────

async function generateSync(app: string, type: string) {
  const items = getItems(app, type);
  if (!items.length) {
    console.log(`  (aucun item défini pour ${app}/${type})`);
    return;
  }

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const item of items) {
    if (generated + errors >= LIMIT) break;

    const out = outputPath(app, type, item.slug);
    if (!OVERWRITE && fs.existsSync(out)) {
      skipped++;
      process.stdout.write("·");
      continue;
    }

    const prompt = buildPrompt(app, type, item);

    try {
      const result = await ai.models.generateContent({
        model: MODEL,
        contents: prompt,
        config: {
          temperature: 0.8,
          maxOutputTokens: 16384,
          responseMimeType: "application/json",
        },
      });

      const raw = result.text ?? "";
      const jsonStr = extractJSON(raw);

      // Validate JSON
      JSON.parse(jsonStr);

      ensureDir(out);
      fs.writeFileSync(out, jsonStr, "utf-8");
      process.stdout.write("✓");
      generated++;
    } catch (e: any) {
      process.stdout.write("✗");
      console.error(`\n  ✗ ${item.slug}: ${e?.message ?? e}`);
      errors++;
    }

    // Rate limiting (600ms between requests)
    await new Promise((r) => setTimeout(r, 600));
  }

  console.log(
    `\n  ✓ ${generated} générés · ${skipped} ignorés (existants) · ${errors} erreurs`
  );
}

// ─── Batch generator ─────────────────────────────────────────────────────

interface BatchItem {
  key: string;
  appName: string;
  type: string;
  slug: string;
}

async function generateBatch(app: string, type: string) {
  const items = getItems(app, type);
  const batchItems: BatchItem[] = [];
  const jsonlLines: string[] = [];

  let count = 0;
  for (const item of items) {
    if (count >= LIMIT) break;

    const out = outputPath(app, type, item.slug);
    if (!OVERWRITE && fs.existsSync(out)) continue;

    const prompt = buildPrompt(app, type, item);
    const key = `${app}::${type}::${item.slug}`;
    batchItems.push({ key, appName: app, type, slug: item.slug });

    jsonlLines.push(JSON.stringify({
      key,
      request: {
        contents: [{ parts: [{ text: prompt }], role: "user" }],
        generation_config: {
          temperature: 0.8,
          max_output_tokens: 8192,
          response_mime_type: "application/json",
        },
      },
    }));

    count++;
  }

  if (!jsonlLines.length) {
    console.log("  Aucun contenu à générer (tout existe déjà).");
    return;
  }

  const jsonlPath = path.resolve(`scripts/.batch-${app}-${type}-${Date.now()}.jsonl`);
  fs.writeFileSync(jsonlPath, jsonlLines.join("\n"), "utf-8");
  console.log(`\n📦 ${jsonlLines.length} requêtes → ${jsonlPath}`);

  const manifestPath = jsonlPath.replace(".jsonl", "-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(batchItems, null, 2), "utf-8");
  console.log(`📋 Manifest → ${manifestPath}`);

  // Upload to GCS
  const GCS_BUCKET = process.env.GCS_BUCKET ?? "eclo-pseo-batch";
  const gcsFileName = `batch-formation-${app}-${type}-${Date.now()}.jsonl`;
  console.log(`⬆️  Upload gs://${GCS_BUCKET}/${gcsFileName}...`);
  const storage = new Storage({ projectId: GOOGLE_PROJECT });
  await storage.bucket(GCS_BUCKET).upload(jsonlPath, { destination: gcsFileName });

  // Create batch job
  console.log("🚀 Création du batch job...");
  const batchJob = await ai.batches.create({
    model: MODEL,
    src: `gs://${GCS_BUCKET}/${gcsFileName}`,
    config: {
      displayName: `oracle-formation-${app}-${type}-${Date.now()}`,
    },
  });

  console.log(`\n✅ Batch job créé !`);
  console.log(`   Nom  : ${batchJob.name}`);
  console.log(`   État : ${batchJob.state}`);
  console.log(`\n📌 Pour télécharger les résultats :`);
  console.log(`   npx tsx scripts/generate-content.ts --poll ${batchJob.name} --type ${type} --app ${app}`);
}

// ─── Poll & download ─────────────────────────────────────────────────────

async function pollAndDownload(batchName: string) {
  const completedStates = new Set([
    "JOB_STATE_SUCCEEDED",
    "JOB_STATE_FAILED",
    "JOB_STATE_CANCELLED",
    "JOB_STATE_EXPIRED",
  ]);

  console.log(`\n🔍 Batch : ${batchName}`);
  const batchJob = await ai.batches.get({ name: batchName });
  console.log(`   État : ${batchJob.state}`);

  if (!completedStates.has(batchJob.state!)) {
    console.log("\n⏳ Batch en cours. Relancez plus tard.");
    return;
  }

  if (batchJob.state !== "JOB_STATE_SUCCEEDED") {
    console.error(`\n❌ Batch terminé : ${batchJob.state}`);
    return;
  }

  console.log("\n✅ Batch terminé ! Téléchargement...");

  // Find manifest
  const manifestFiles = fs.readdirSync(path.resolve("scripts"))
    .filter((f) => f.endsWith("-manifest.json"))
    .sort()
    .reverse();

  if (!manifestFiles.length) {
    console.error("❌ Aucun manifest trouvé dans scripts/");
    return;
  }

  const manifest = manifestFiles[0];
  const manifestPath = path.resolve(`scripts/${manifest}`);
  const batchItems: BatchItem[] = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  const itemByKey = Object.fromEntries(batchItems.map((b) => [b.key, b]));
  console.log(`   Manifest : ${manifest} (${batchItems.length} items)`);

  // Download results
  let resultContent: string;
  const dest = (batchJob as any).dest;

  if (dest?.gcsUri) {
    const match = dest.gcsUri.match(/^gs:\/\/([^/]+)\/(.+)$/);
    if (!match) { console.error(`❌ URI GCS invalide : ${dest.gcsUri}`); return; }
    const storage = new Storage({ projectId: GOOGLE_PROJECT });
    const bucket = storage.bucket(match[1]);
    const prefix = match[2].endsWith("/") ? match[2] : match[2] + "/";
    const [files] = await bucket.getFiles({ prefix });
    const predFile = files.find((f) => f.name.endsWith("predictions.jsonl"));
    if (!predFile) { console.error(`❌ Pas de predictions.jsonl`); return; }
    const tmpPath = path.resolve(`scripts/.batch-results-${Date.now()}.jsonl`);
    await predFile.download({ destination: tmpPath });
    resultContent = fs.readFileSync(tmpPath, "utf-8");
    fs.unlinkSync(tmpPath);
  } else if (dest?.inlinedResponses) {
    resultContent = dest.inlinedResponses.map((r: any, i: number) => {
      const key = batchItems[i]?.key ?? `unknown-${i}`;
      return JSON.stringify({ key, response: r });
    }).join("\n");
  } else {
    console.error("❌ Pas de résultats dans le batch job.");
    return;
  }

  // Parse and write JSON files
  let written = 0;
  let errors = 0;

  for (const line of resultContent.split("\n")) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      const key = parsed.key;
      const item = itemByKey[key];
      if (!item) { console.warn(`  ⚠ Clé inconnue : ${key}`); continue; }
      if (parsed.error) { console.error(`  ✗ ${item.slug}: ${parsed.error}`); errors++; continue; }

      const body = parsed.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
      if (!body) { console.error(`  ✗ ${item.slug}: réponse vide`); errors++; continue; }

      const jsonStr = extractJSON(body);
      JSON.parse(jsonStr); // validate

      const out = outputPath(item.appName, item.type, item.slug);
      ensureDir(out);
      fs.writeFileSync(out, jsonStr, "utf-8");
      process.stdout.write("✓");
      written++;
    } catch (e: any) {
      console.error(`  ✗ Parse error: ${e.message}`);
      errors++;
    }
  }

  console.log(`\n\n✅ ${written} fichiers JSON écrits · ${errors} erreurs`);
}

// ─── Merge helper (post-generation) ──────────────────────────────────────

function printMergeInstructions(app: string, type: string) {
  const genDir = path.resolve(`scripts/generated/${app}/${type}`);
  if (!fs.existsSync(genDir)) return;
  const files = fs.readdirSync(genDir).filter((f) => f.endsWith(".json"));
  if (!files.length) return;

  const targetMap: Record<string, string> = {
    "quelle-formation::blog": "apps/quelle-formation/src/lib/data/blog.ts",
    "quelle-formation::metiers": "apps/quelle-formation/src/lib/data/metiers.ts",
    "deplacement-pro::blog": "apps/deplacement-pro/src/lib/data/blog.ts",
    "deplacement-pro::secteurs": "apps/deplacement-pro/src/lib/data/secteurs.ts",
  };

  const target = targetMap[`${app}::${type}`];
  console.log(`\n📝 Pour intégrer les ${files.length} fichiers générés :`);
  console.log(`   1. Ouvrez ${target}`);
  console.log(`   2. Ajoutez chaque objet JSON du dossier scripts/generated/${app}/${type}/`);
  console.log(`   3. Adaptez les imports si nécessaire`);
  console.log(`   Ou demandez à Claude : "merge les fichiers generated/${app}/${type} dans ${target}"`);
}

// ─── Entry point ─────────────────────────────────────────────────────────

async function main() {
  if (POLL_NAME) {
    await pollAndDownload(POLL_NAME);
    return;
  }

  const app = APP_ARG!;
  const type = TYPE!;

  const authLabel = USE_VERTEX
    ? `Vertex AI (${GOOGLE_PROJECT} / ${GOOGLE_LOCATION})`
    : "Clé API (AI Studio)";
  console.log(`\n🚀 generate-content — oracle-formation`);
  console.log(`   Model : ${MODEL}`);
  console.log(`   App   : ${app}`);
  console.log(`   Type  : ${type}`);
  console.log(`   Mode  : ${BATCH_MODE ? "BATCH (-50%)" : "sync"}`);
  console.log(`   Auth  : ${authLabel}`);
  if (LIMIT < Infinity) console.log(`   Limit : ${LIMIT}`);
  if (OVERWRITE) console.log(`   Mode --overwrite`);
  console.log();

  if (BATCH_MODE) {
    await generateBatch(app, type);
  } else {
    process.stdout.write(`▶ ${app}/${type} `.padEnd(40));
    await generateSync(app, type);
    printMergeInstructions(app, type);
  }

  console.log("\n✅  Terminé");
}

main().catch((e) => {
  console.error("❌", e);
  process.exit(1);
});
