import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { PersonaCard, ScenarioSection } from "@/components/use-cases"
import { ClipboardList, HardHat, Users } from "lucide-react"

interface UseCasesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: UseCasesPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "useCases" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function UseCasesPage({ params }: UseCasesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "useCases" })

  const personas = [
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: t("personas.opc.title"),
      description: t("personas.opc.description"),
      painPoints: [
        t("personas.opc.painPoints.0"),
        t("personas.opc.painPoints.1"),
        t("personas.opc.painPoints.2"),
        t("personas.opc.painPoints.3"),
      ],
      features: [
        t("personas.opc.features.0"),
        t("personas.opc.features.1"),
        t("personas.opc.features.2"),
        t("personas.opc.features.3"),
      ],
      color: "oklch(0.62 0.24 30)",
      scrollToId: "opc",
    },
    {
      icon: <HardHat className="w-7 h-7" />,
      title: t("personas.conducteur.title"),
      description: t("personas.conducteur.description"),
      painPoints: [
        t("personas.conducteur.painPoints.0"),
        t("personas.conducteur.painPoints.1"),
        t("personas.conducteur.painPoints.2"),
        t("personas.conducteur.painPoints.3"),
      ],
      features: [
        t("personas.conducteur.features.0"),
        t("personas.conducteur.features.1"),
        t("personas.conducteur.features.2"),
        t("personas.conducteur.features.3"),
      ],
      color: "oklch(0.55 0.20 250)",
      scrollToId: locale === "fr" ? "conducteur-de-travaux" : "site-supervisor",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: t("personas.chef.title"),
      description: t("personas.chef.description"),
      painPoints: [
        t("personas.chef.painPoints.0"),
        t("personas.chef.painPoints.1"),
        t("personas.chef.painPoints.2"),
        t("personas.chef.painPoints.3"),
      ],
      features: [
        t("personas.chef.features.0"),
        t("personas.chef.features.1"),
        t("personas.chef.features.2"),
        t("personas.chef.features.3"),
      ],
      color: "oklch(0.60 0.18 150)",
      scrollToId: locale === "fr" ? "chef-de-chantier" : "site-manager",
    },
  ]

  const typicalDayLabel = locale === "fr" ? "Une journee type" : "A typical day"

  const scenarios = [
    {
      role: t("personas.opc.title"),
      color: "oklch(0.62 0.24 30)",
      typicalDayLabel,
      workflow: [
        { time: t("scenarios.opc.workflow.0.time"), action: t("scenarios.opc.workflow.0.action") },
        { time: t("scenarios.opc.workflow.1.time"), action: t("scenarios.opc.workflow.1.action") },
        { time: t("scenarios.opc.workflow.2.time"), action: t("scenarios.opc.workflow.2.action") },
        { time: t("scenarios.opc.workflow.3.time"), action: t("scenarios.opc.workflow.3.action") },
        { time: t("scenarios.opc.workflow.4.time"), action: t("scenarios.opc.workflow.4.action") },
      ],
      benefits: [
        t("scenarios.opc.benefits.0"),
        t("scenarios.opc.benefits.1"),
        t("scenarios.opc.benefits.2"),
        t("scenarios.opc.benefits.3"),
      ],
      quote: {
        text: t("scenarios.opc.quote.text"),
        author: t("scenarios.opc.quote.author"),
        company: t("scenarios.opc.quote.company"),
      },
    },
    {
      role: t("personas.conducteur.title"),
      color: "oklch(0.55 0.20 250)",
      typicalDayLabel,
      workflow: [
        { time: t("scenarios.conducteur.workflow.0.time"), action: t("scenarios.conducteur.workflow.0.action") },
        { time: t("scenarios.conducteur.workflow.1.time"), action: t("scenarios.conducteur.workflow.1.action") },
        { time: t("scenarios.conducteur.workflow.2.time"), action: t("scenarios.conducteur.workflow.2.action") },
        { time: t("scenarios.conducteur.workflow.3.time"), action: t("scenarios.conducteur.workflow.3.action") },
        { time: t("scenarios.conducteur.workflow.4.time"), action: t("scenarios.conducteur.workflow.4.action") },
      ],
      benefits: [
        t("scenarios.conducteur.benefits.0"),
        t("scenarios.conducteur.benefits.1"),
        t("scenarios.conducteur.benefits.2"),
        t("scenarios.conducteur.benefits.3"),
      ],
      quote: {
        text: t("scenarios.conducteur.quote.text"),
        author: t("scenarios.conducteur.quote.author"),
        company: t("scenarios.conducteur.quote.company"),
      },
    },
    {
      role: t("personas.chef.title"),
      color: "oklch(0.60 0.18 150)",
      typicalDayLabel,
      workflow: [
        { time: t("scenarios.chef.workflow.0.time"), action: t("scenarios.chef.workflow.0.action") },
        { time: t("scenarios.chef.workflow.1.time"), action: t("scenarios.chef.workflow.1.action") },
        { time: t("scenarios.chef.workflow.2.time"), action: t("scenarios.chef.workflow.2.action") },
        { time: t("scenarios.chef.workflow.3.time"), action: t("scenarios.chef.workflow.3.action") },
        { time: t("scenarios.chef.workflow.4.time"), action: t("scenarios.chef.workflow.4.action") },
      ],
      benefits: [
        t("scenarios.chef.benefits.0"),
        t("scenarios.chef.benefits.1"),
        t("scenarios.chef.benefits.2"),
        t("scenarios.chef.benefits.3"),
      ],
      quote: {
        text: t("scenarios.chef.quote.text"),
        author: t("scenarios.chef.quote.author"),
        company: t("scenarios.chef.quote.company"),
      },
    },
  ]

  // Get the localized breadcrumb label
  const breadcrumbLabel = locale === "fr" ? "Cas d'utilisation" : "Use Cases"

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

      {/* Persona Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, i) => (
              <div
                key={persona.title}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 100 + 300}ms`, animationFillMode: "forwards" }}
              >
                <PersonaCard {...persona} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Scenarios */}
      {scenarios.map((scenario) => (
        <ScenarioSection key={scenario.role} {...scenario} />
      ))}

      <Footer />
    </main>
  )
}
