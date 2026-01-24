import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { Breadcrumb } from "@/components/shared"
import { ArticleContent, ArticleCard } from "@/components/blog"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, getRelatedPosts, getBlogPosts, getTranslation } from "@/lib/content"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo"
import { Link } from "@/i18n/routing"
import { locales } from "@/i18n/config"

interface ArticlePageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  // Generate params for all locales and all posts
  return locales.flatMap((locale) => {
    const posts = getBlogPosts(locale)
    return posts.map((post) => ({
      slug: post.slug,
      locale,
    }))
  })
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })
  const post = getBlogPost(slug, locale)

  if (!post) {
    return {
      title: t("articleNotFound"),
    }
  }

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const resourcesPath = locale === "en" ? "/resources" : "/ressources"

  // Build alternate language links
  const languages: Record<string, string> = {}
  const translation = getTranslation(post.translationKey, locale === "en" ? "fr" : "en")

  if (translation) {
    const altLocale = translation.locale
    const altPath = altLocale === "en" ? "" : `/${altLocale}`
    const altResourcesPath = altLocale === "en" ? "/resources" : "/ressources"
    languages[altLocale] = `${baseUrl}${altPath}${altResourcesPath}/${translation.slug}`
  }
  languages[locale] = `${baseUrl}${localePath}${resourcesPath}/${slug}`

  return {
    title: `${post.title} - BrickNote`,
    description: post.description,
    alternates: {
      languages,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "resources" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const post = getBlogPost(slug, locale)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, locale)

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const resourcesPath = locale === "en" ? "/resources" : "/ressources"
  const articleUrl = `${baseUrl}${localePath}${resourcesPath}/${post.slug}`

  // Get the translated article URL for the language switcher
  const otherLocale = locale === "en" ? "fr" : "en"
  const translation = getTranslation(post.translationKey, otherLocale)
  const alternateLocaleHref = translation
    ? `/${otherLocale === "en" ? "" : otherLocale}${otherLocale === "en" ? "/resources" : "/ressources"}/${translation.slug}`.replace(/^\/\//, "/")
    : undefined

  const breadcrumbSchemaItems = [
    { name: tCommon("home"), url: `${baseUrl}${localePath}` },
    { name: t("title"), url: `${baseUrl}${localePath}${resourcesPath}` },
    { name: post.title, url: articleUrl },
  ]

  // Get the localized breadcrumb label
  const resourcesLabel = locale === "fr" ? "Ressources" : "Resources"

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        url={articleUrl}
      />
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar alternateLocaleHref={alternateLocaleHref} />

        <Breadcrumb
          items={[
            { label: resourcesLabel, href: "/resources" as const },
            { label: post.title },
          ]}
        />

        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/resources" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("backToResources")}
              </Link>
            </Button>

            <ArticleContent post={post} />

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h2 className="text-2xl font-serif font-semibold mb-8">
                  {tCommon("relatedArticles")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <ArticleCard key={related.slug} post={related} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
