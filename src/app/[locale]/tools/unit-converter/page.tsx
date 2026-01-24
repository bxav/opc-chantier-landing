import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { UnitConverter } from "@/components/tools"
import { WebApplicationSchema } from "@/components/seo/structured-data"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.items.converter" })
  const baseUrl = "https://www.bricknote.ai"

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/tools/unit-converter` : `${baseUrl}/fr/outils/convertisseur-unites`,
      languages: {
        en: `${baseUrl}/tools/unit-converter`,
        fr: `${baseUrl}/fr/outils/convertisseur-unites`,
      },
    },
  }
}

export default async function UnitConverterPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "tools.items.converter" })
  const baseUrl = "https://www.bricknote.ai"
  const path = locale === "en" ? "/tools/unit-converter" : "/outils/convertisseur-unites"
  const prefix = locale === "fr" ? "/fr" : ""

  return (
    <>
      <WebApplicationSchema
        name={t("title")}
        description={t("metaDescription")}
        url={`${baseUrl}${prefix}${path}`}
        category="Utility"
      />
      <Navbar />
      <main>
        <UnitConverter />
      </main>
      <Footer />
    </>
  )
}
