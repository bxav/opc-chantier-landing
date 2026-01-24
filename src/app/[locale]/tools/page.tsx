import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { locales } from "@/i18n/config"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { ToolCard } from "@/components/tools"
import { Layers, Paintbrush, Grid3X3, LayoutGrid, ArrowRightLeft } from "lucide-react"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools" })
  const baseUrl = "https://www.bricknote.ai"

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/tools` : `${baseUrl}/fr/outils`,
      languages: {
        en: `${baseUrl}/tools`,
        fr: `${baseUrl}/fr/outils`,
      },
    },
  }
}

export default async function ToolsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "tools" })

  const tools = [
    {
      href: "/tools/concrete-calculator" as const,
      titleKey: "items.concrete.title",
      descKey: "items.concrete.description",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      href: "/tools/paint-calculator" as const,
      titleKey: "items.paint.title",
      descKey: "items.paint.description",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
    },
    {
      href: "/tools/tile-calculator" as const,
      titleKey: "items.tile.title",
      descKey: "items.tile.description",
      icon: <Grid3X3 className="w-6 h-6 text-primary" />,
    },
    {
      href: "/tools/flooring-calculator" as const,
      titleKey: "items.flooring.title",
      descKey: "items.flooring.description",
      icon: <LayoutGrid className="w-6 h-6 text-primary" />,
    },
    {
      href: "/tools/unit-converter" as const,
      titleKey: "items.converter.title",
      descKey: "items.converter.description",
      icon: <ArrowRightLeft className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t("badge")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Tools grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard
                key={tool.href}
                href={tool.href}
                title={t(tool.titleKey)}
                description={t(tool.descKey)}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
