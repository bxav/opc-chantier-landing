import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ConcreteCalculator } from "@/components/tools"
import { WebApplicationSchema } from "@/components/seo/structured-data"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.items.concrete" })
  const baseUrl = "https://www.bricknote.ai"

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/tools/concrete-calculator` : `${baseUrl}/fr/outils/calculateur-beton`,
      languages: {
        en: `${baseUrl}/tools/concrete-calculator`,
        fr: `${baseUrl}/fr/outils/calculateur-beton`,
      },
    },
  }
}

export default async function ConcreteCalculatorPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "tools.items.concrete" })
  const baseUrl = "https://www.bricknote.ai"
  const path = locale === "en" ? "/tools/concrete-calculator" : "/outils/calculateur-beton"
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
        <ConcreteCalculator />
      </main>
      <Footer />
    </>
  )
}
