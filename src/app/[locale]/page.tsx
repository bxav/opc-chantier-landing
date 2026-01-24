import { setRequestLocale } from "next-intl/server"
import {
  Navbar,
  Hero,
  Features,
  Benefits,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing"
import { OrganizationSchema, SoftwareApplicationSchema } from "@/components/seo"
import { StickyMobileCTA } from "@/components/shared/sticky-mobile-cta"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <main id="main-content" className="min-h-screen">
        {/* Grain texture overlay */}
        <div className="grain-overlay" />

        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  )
}
