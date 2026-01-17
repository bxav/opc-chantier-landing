import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { ContactForm, ContactInfo } from "@/components/contact"
import { FAQSchema, BreadcrumbSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'equipe OptiChantier. Nous repondons a toutes vos questions sous 24h.",
}

const faqs = [
  {
    question: "OptiChantier est-il vraiment gratuit ?",
    answer: "Oui, l'application est entierement gratuite et fonctionne sans inscription.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer: "Vos donnees restent sur votre appareil. Aucune information n'est envoyee a nos serveurs sans votre consentement.",
  },
  {
    question: "L'app fonctionne-t-elle hors ligne ?",
    answer: "Oui, toutes les fonctionnalites principales sont disponibles sans connexion internet.",
  },
  {
    question: "Sur quels appareils fonctionne OptiChantier ?",
    answer: "OptiChantier sera disponible sur iPhone via l'App Store. Une version iPad est egalement prevue.",
  },
]

export default function ContactPage() {
  return (
    <>
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://optichantier.fr" },
          { name: "Contact", url: "https://optichantier.fr/contact" },
        ]}
      />
      <main className="min-h-screen">
      <div className="grain-overlay" />
      <Navbar />

      <Breadcrumb items={[{ label: "Contact" }]} />

      <PageHeader
        title="Contactez-nous"
        subtitle="Une question, une suggestion ou besoin d'aide ? Notre equipe vous repond sous 24 heures."
        badge="Support"
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
