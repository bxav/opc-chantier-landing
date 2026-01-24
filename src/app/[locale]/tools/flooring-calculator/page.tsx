import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { FlooringCalculator } from "@/components/tools"
import { WebApplicationSchema } from "@/components/seo/structured-data"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.items.flooring" })
  const baseUrl = "https://www.bricknote.ai"

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/tools/flooring-calculator` : `${baseUrl}/fr/outils/calculateur-parquet`,
      languages: {
        en: `${baseUrl}/tools/flooring-calculator`,
        fr: `${baseUrl}/fr/outils/calculateur-parquet`,
      },
    },
  }
}

export default async function FlooringCalculatorPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "tools.items.flooring" })
  const baseUrl = "https://www.bricknote.ai"
  const path = locale === "en" ? "/tools/flooring-calculator" : "/outils/calculateur-parquet"
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
        <FlooringCalculator />
      </main>
      <Footer />
    </>
  )
}
