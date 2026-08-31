const TITLE_MAX = 60;
const TITLE_TRUNCATION_FLOOR = 50;
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
  if (title.length <= TITLE_MAX) return title;
  return truncateAtWord(title, TITLE_MAX, TITLE_TRUNCATION_FLOOR);
}

export function fitSeoDescription(value: string) {
  let description = normalize(value);
  if (description.length < DESCRIPTION_MIN) {
    description += " Comparez les formats, les coûts, les financements et les critères qui changent réellement le choix.";
  }
  return truncateAtWord(description, DESCRIPTION_MAX, DESCRIPTION_MIN);
}
