export const BLOG_OWNER_REDIRECTS = new Map<string, string>([
  ["politique-voyage-entreprise-modele", "/guides/politique-voyage-modele"],
]);

export function isRedirectedBlogSlug(slug: string): boolean {
  return BLOG_OWNER_REDIRECTS.has(slug);
}
