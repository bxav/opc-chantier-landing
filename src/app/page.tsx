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

export default function Home() {
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
