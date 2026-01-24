import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { ContactForm, ContactInfo } from "@/components/contact"
import { FAQSchema, BreadcrumbSchema } from "@/components/seo"

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "contact" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "contact" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`

  const faqItems = [
    {
      question: t("info.faq.items.free.question"),
      answer: t("info.faq.items.free.answer"),
    },
    {
      question: t("info.faq.items.dataSecure.question"),
      answer: t("info.faq.items.dataSecure.answer"),
    },
    {
      question: t("info.faq.items.offlineWork.question"),
      answer: t("info.faq.items.offlineWork.answer"),
    },
  ]

  const breadcrumbSchemaItems = [
    { name: tCommon("home"), url: `${baseUrl}${localePath}` },
    { name: t("pageTitle"), url: `${baseUrl}${localePath}/contact` },
  ]

  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: t("pageTitle") }]} />

        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          badge={t("badge")}
        />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
                <ContactForm />
              </div>
              <div className="lg:col-span-2 opacity-0 animate-fade-up delay-400" style={{ animationFillMode: "forwards" }}>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
