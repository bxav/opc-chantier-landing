import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PaintCalculator } from "@/components/tools"
import { WebApplicationSchema } from "@/components/seo/structured-data"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.items.paint" })
  const baseUrl = "https://www.bricknote.ai"

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/tools/paint-calculator` : `${baseUrl}/fr/outils/calculateur-peinture`,
      languages: {
        en: `${baseUrl}/tools/paint-calculator`,
        fr: `${baseUrl}/fr/outils/calculateur-peinture`,
      },
    },
  }
}

export default async function PaintCalculatorPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "tools.items.paint" })
  const baseUrl = "https://www.bricknote.ai"
  const path = locale === "en" ? "/tools/paint-calculator" : "/outils/calculateur-peinture"
  const prefix = locale === "fr" ? "/fr" : ""

  return (
    <>
      <WebApplicationSchema
        name={t("title")}
        description={t("metaDescription")}
        url={`${baseUrl}${prefix}${path}`}
        category="ConstructionTool"
      />
      <Navbar />
      <main>
        <PaintCalculator />
      </main>
      <Footer />
    </>
  )
}
