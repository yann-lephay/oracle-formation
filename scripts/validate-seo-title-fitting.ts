import assert from "node:assert/strict";

import { fitSeoTitle as fitQuelleFormationTitle } from "../apps/quelle-formation/src/lib/metadata.ts";
import { fitSeoTitle as fitDeplacementProTitle } from "../apps/deplacement-pro/src/lib/metadata.ts";

const unchangedQuelleFormationTitles = [
  ["organisme/OpenClassrooms", "OpenClassrooms : avis, prix et format en 2026"],
  ["organisme/Jedha", "Jedha Avis 2026 : Prix, Bootcamps Data/IA et Test"],
  ["organisme/LiveMentor", "LiveMentor Avis 2026 : Prix, Formations et Test"],
  ["organisme/CréActifs", "CréActifs Avis 2026 : Prix, Formations et CPF"],
  ["organisme/AFPA", "AFPA Avis 2026 : Prix, Formations et Test Complet"],
  ["organisme/CNAM", "CNAM Avis 2026 : Prix, Formations et Diplômes"],
  ["glossaire/CPF", "CPF — Définition, Fonctionnement et Droits 2026"],
  ["glossaire/RNCP", "RNCP — Définition, Niveaux et Vérification 2026"],
  ["glossaire/OPCO", "OPCO — Rôle, Liste et Financement Formation"],
  ["glossaire/Bootcamp", "Bootcamp — Définition, Prix et Avantages 2026"],
  ["glossaire/Blended Learning", "Blended Learning — Définition et Avantages"],
  ["métier", "Devenir Chef de Projet Digital : Salaires et Formations"],
  ["persona", "Formations pour Devenir Freelance 2026 — Comparatif"],
  ["blog", "Reconversion professionnelle 2026 : Le guide complet"],
] as const;

for (const [pageFamily, sourceTitle] of unchangedQuelleFormationTitles) {
  assert.equal(
    fitQuelleFormationTitle(sourceTitle),
    sourceTitle,
    `${pageFamily}: un title court doit rester inchangé`,
  );
}

const longTitle =
  "Comparatif Formation en Ligne 2026 : OpenClassrooms, Studi, LiveMentor";
assert.equal(
  fitQuelleFormationTitle(longTitle),
  "Comparatif Formation en Ligne 2026 : OpenClassrooms…",
  "un title QuelleFormation trop long doit conserver sa troncature au mot",
);

const shortDeplacementTitle = "Voyage d'affaires : définition 2026";
assert.equal(
  fitDeplacementProTitle(shortDeplacementTitle),
  shortDeplacementTitle,
  "un title DeplacementPro court doit rester inchangé",
);

const longDeplacementTitle =
  "Comparatif des meilleures solutions de déplacement professionnel en 2026";
assert.equal(
  fitDeplacementProTitle(longDeplacementTitle),
  "Comparatif des meilleures solutions de déplacement…",
  "un title DeplacementPro trop long doit conserver sa troncature au mot",
);

console.log(
  `SEO titles: ${unchangedQuelleFormationTitles.length + 3} régressions validées.`,
);
