import { posts } from "#site/content"

export type Post = (typeof posts)[number]
export type ArticleCategory = "guide" | "conseil" | "actualite"

export const categoryLabels: Record<string, Record<ArticleCategory, string>> = {
  fr: {
    guide: "Guide",
    conseil: "Conseil",
    actualite: "Actualite",
  },
  en: {
    guide: "Guide",
    conseil: "Tip",
    actualite: "News",
  },
}

export const categoryColors: Record<ArticleCategory, string> = {
  guide: "bg-blue-100 text-blue-700",
  conseil: "bg-green-100 text-green-700",
  actualite: "bg-purple-100 text-purple-700",
}

export function getBlogPosts(locale: string): Post[] {
  return posts
    .filter((post) => post.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string, locale: string): Post | undefined {
  return posts.find((post) => post.slug === slug && post.locale === locale)
}

export function getRelatedPosts(
  currentSlug: string,
  locale: string,
  limit = 2
): Post[] {
  return posts
    .filter((post) => post.slug !== currentSlug && post.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getTranslation(
  translationKey: string,
  targetLocale: string
): Post | undefined {
  return posts.find(
    (post) =>
      post.translationKey === translationKey && post.locale === targetLocale
  )
}

export function getCategoryLabel(
  category: ArticleCategory,
  locale: string
): string {
  return categoryLabels[locale]?.[category] ?? categoryLabels.fr[category]
}

export function getAllTranslationKeys(): string[] {
  return [...new Set(posts.map((post) => post.translationKey))]
}
