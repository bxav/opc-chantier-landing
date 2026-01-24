import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { ArticleList } from "@/components/blog"

interface ResourcesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "resources" })

  // Get the localized breadcrumb label
  const breadcrumbLabel = locale === "fr" ? "Ressources" : "Resources"

  return (
    <main className="min-h-screen">
      <div className="grain-overlay" />
      <Navbar />

      <Breadcrumb items={[{ label: breadcrumbLabel }]} />

      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        badge={t("badge")}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleList />
        </div>
      </section>

      <Footer />
    </main>
  )
}
