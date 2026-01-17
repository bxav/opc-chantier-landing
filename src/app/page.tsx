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

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <main className="min-h-screen">
        {/* Grain texture overlay */}
        <div className="grain-overlay" />

        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
