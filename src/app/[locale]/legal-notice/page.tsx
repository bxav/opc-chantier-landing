import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"
import { Link } from "@/i18n/routing"

interface LegalNoticePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LegalNoticePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal.legalNotice" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function MentionsLegalesPage({ params }: LegalNoticePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "legal.legalNotice" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const pagePath = locale === "en" ? "/legal-notice" : "/mentions-legales"

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: tCommon("home"), url: `${baseUrl}${localePath}` },
          { name: t("title"), url: `${baseUrl}${localePath}${pagePath}` },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: t("title") }]} />

        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          badge={t("badge")}
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.editor.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("sections.editor.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">{t("sections.editor.companyName")}</strong> APITHINGS</li>
                  <li><strong className="text-foreground font-semibold">{t("sections.editor.legalForm")}</strong> SAS (Societe par actions simplifiee)</li>
                  <li><strong className="text-foreground font-semibold">{t("sections.editor.siren")}</strong> 890 251 184</li>
                  <li><strong className="text-foreground font-semibold">{t("sections.editor.headquarters")}</strong> France</li>
                  <li><strong className="text-foreground font-semibold">{t("sections.editor.email")}</strong> contact@bricknote.ai</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.director.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.director.content")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.hosting.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("sections.hosting.intro")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">Vercel Inc.</strong></li>
                  <li>340 S Lemon Ave #4133</li>
                  <li>Walnut, CA 91789, USA</li>
                  <li>https://vercel.com</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.intellectualProperty.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("sections.intellectualProperty.content1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.intellectualProperty.content2")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.personalData.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.personalData.content")}{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    {t("sections.personalData.linkText")}
                  </Link>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.cookies.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.cookies.content")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.hyperlinks.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.hyperlinks.content")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.applicableLaw.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.applicableLaw.content")}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{t("sections.contact.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("sections.contact.content")}{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    {t("sections.contact.linkText")}
                  </Link>.
                </p>
              </div>

              <p className="text-sm text-muted-foreground pt-8 border-t">
                {tCommon("lastUpdated")}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
