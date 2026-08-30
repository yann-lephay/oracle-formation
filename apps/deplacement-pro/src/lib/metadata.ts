const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 160;

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function truncateAtWord(value: string, maxLength: number, minLength = 0) {
  if (value.length <= maxLength) return value;
  const candidate = value.slice(0, maxLength - 1);
  const lastSpace = candidate.lastIndexOf(" ");
  const wordCut = lastSpace >= minLength ? candidate.slice(0, lastSpace) : candidate;
  const cleanedWordCut = wordCut.replace(/[,:;–—-]+$/, "").trim();
  const cleanedCandidate = candidate.replace(/[,:;–—-]+$/, "").trim();
  const cut = cleanedWordCut.length >= minLength - 1 ? cleanedWordCut : cleanedCandidate;
  return `${cut}…`;
}

export function fitSeoTitle(value: string) {
  const title = normalize(value);
  if (title.length > TITLE_MAX) return truncateAtWord(title, TITLE_MAX, TITLE_MIN);
  if (title.length >= TITLE_MIN) return title;
  if (/\b2026\b/.test(title)) return title;

  for (const suffix of [" — guide 2026", " — déplacements pro", " — comparatif"]) {
    const candidate = `${title}${suffix}`;
    if (candidate.length >= TITLE_MIN && candidate.length <= TITLE_MAX) return candidate;
  }

  return truncateAtWord(
    `${title} — guide des déplacements professionnels 2026`,
    TITLE_MAX,
    TITLE_MIN,
  );
}

export function fitSeoDescription(value: string) {
  let description = normalize(value);
  if (description.length < DESCRIPTION_MIN) {
    description += " Comparez le périmètre, les coûts, les limites et les points à vérifier avant de choisir.";
  }
  return truncateAtWord(description, DESCRIPTION_MAX, DESCRIPTION_MIN);
}
