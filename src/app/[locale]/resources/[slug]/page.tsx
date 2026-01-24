import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { Breadcrumb } from "@/components/shared"
import { ArticleContent, ArticleCard } from "@/components/blog"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getArticleBySlug, getRelatedArticles, getArticlesByLocale } from "@/content/articles"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo"
import { Link } from "@/i18n/routing"
import { locales } from "@/i18n/config"

interface ArticlePageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  // Generate params for all locales and all articles
  return locales.flatMap((locale) => {
    const articles = getArticlesByLocale(locale)
    return articles.map((article) => ({
      slug: article.slug,
      locale,
    }))
  })
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })
  const article = getArticleBySlug(slug, locale)

  if (!article) {
    return {
      title: t("articleNotFound"),
    }
  }

  return {
    title: `${article.title} - BrickNote`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "resources" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const article = getArticleBySlug(slug, locale)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, locale)

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const resourcesPath = locale === "en" ? "/resources" : "/ressources"
  const articleUrl = `${baseUrl}${localePath}${resourcesPath}/${article.slug}`

  const breadcrumbSchemaItems = [
    { name: tCommon("home"), url: `${baseUrl}${localePath}` },
    { name: t("title"), url: `${baseUrl}${localePath}${resourcesPath}` },
    { name: article.title, url: articleUrl },
  ]

  // Get the localized breadcrumb label
  const resourcesLabel = locale === "fr" ? "Ressources" : "Resources"

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        datePublished={article.date}
        url={articleUrl}
      />
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb
          items={[
            { label: resourcesLabel, href: "/resources" },
            { label: article.title },
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

            <ArticleContent article={article} />

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h2 className="text-2xl font-serif font-semibold mb-8">
                  {tCommon("relatedArticles")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <ArticleCard key={related.slug} article={related} />
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
