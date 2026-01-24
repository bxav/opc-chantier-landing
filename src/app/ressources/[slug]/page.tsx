import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar, Footer } from "@/components/landing"
import { Breadcrumb } from "@/components/shared"
import { ArticleContent, ArticleCard } from "@/components/blog"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { articles, getArticleBySlug, getRelatedArticles } from "@/content/articles"
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article non trouve - BrickNote",
    }
  }

  return {
    title: `${article.title} - BrickNote`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug)

  const articleUrl = `https://www.bricknote.ai/ressources/${article.slug}`

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        datePublished={article.date}
        url={articleUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.bricknote.ai" },
          { name: "Ressources", url: "https://www.bricknote.ai/ressources" },
          { name: article.title, url: articleUrl },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb
          items={[
            { label: "Ressources", href: "/ressources" },
            { label: article.title },
          ]}
        />

        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/ressources" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour aux ressources
              </Link>
            </Button>

            <ArticleContent article={article} />

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-16 border-t">
                <h2 className="text-2xl font-serif font-semibold mb-8">
                  Articles similaires
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
