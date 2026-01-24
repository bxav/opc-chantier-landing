import { MetadataRoute } from "next"
import { getBlogPosts, getTranslation } from "@/lib/content"
import { locales, defaultLocale } from "@/i18n/config"

// Pathname mappings for each locale (English canonical paths as keys)
const pathnames: Record<string, Record<string, string>> = {
  "/": { en: "/", fr: "/" },
  "/use-cases": { en: "/use-cases", fr: "/cas-utilisation" },
  "/contact": { en: "/contact", fr: "/contact" },
  "/resources": { en: "/resources", fr: "/ressources" },
  "/legal-notice": { en: "/legal-notice", fr: "/mentions-legales" },
  "/terms": { en: "/terms", fr: "/cgu" },
  "/privacy-policy": { en: "/privacy-policy", fr: "/politique-confidentialite" },
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bricknote.ai"

  // Helper to generate alternates for a path
  function getAlternates(path: string) {
    const mapping = pathnames[path]
    if (!mapping) return undefined

    const languages: Record<string, string> = {}
    for (const locale of locales) {
      const localizedPath = mapping[locale] || path
      const prefix = locale === defaultLocale ? "" : `/${locale}`
      languages[locale] = `${baseUrl}${prefix}${localizedPath === "/" ? "" : localizedPath}`
    }
    return { languages }
  }

  // Static pages with their localized versions
  const staticRoutes = Object.keys(pathnames)

  const staticPages: MetadataRoute.Sitemap = []

  for (const route of staticRoutes) {
    for (const locale of locales) {
      const mapping = pathnames[route]
      const localizedPath = mapping[locale] || route
      const prefix = locale === defaultLocale ? "" : `/${locale}`
      const url = `${baseUrl}${prefix}${localizedPath === "/" ? "" : localizedPath}`

      staticPages.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : route === "/contact" ? 0.7 : 0.8,
        alternates: getAlternates(route),
      })
    }
  }

  // Article pages for each locale
  const articlePages: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const posts = getBlogPosts(locale)
    const resourcesPath = locale === "en" ? "/resources" : "/ressources"
    const prefix = locale === defaultLocale ? "" : `/${locale}`

    for (const post of posts) {
      // Build alternates using translationKey
      const languages: Record<string, string> = {}
      languages[locale] = `${baseUrl}${prefix}${resourcesPath}/${post.slug}`

      const altLocale = locale === "en" ? "fr" : "en"
      const translation = getTranslation(post.translationKey, altLocale)
      if (translation) {
        const altPrefix = altLocale === defaultLocale ? "" : `/${altLocale}`
        const altResourcesPath = altLocale === "en" ? "/resources" : "/ressources"
        languages[altLocale] = `${baseUrl}${altPrefix}${altResourcesPath}/${translation.slug}`
      }

      articlePages.push({
        url: `${baseUrl}${prefix}${resourcesPath}/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      })
    }
  }

  return [...staticPages, ...articlePages]
}
