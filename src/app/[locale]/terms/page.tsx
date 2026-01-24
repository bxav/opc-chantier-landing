import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"
import { Link } from "@/i18n/routing"

interface TermsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal.terms" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function CGUPage({ params }: TermsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "legal.terms" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const pagePath = locale === "en" ? "/terms" : "/cgu"

  // Articles content - keeping in FR for legal validity, with translated headers
  const isFr = locale === "fr"

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: tCommon("home"), url: `${baseUrl}${localePath}` },
          { name: t("title"), url: `${baseUrl}${localePath}${pagePath}` },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: locale === "fr" ? "CGU" : "Terms" }]} />

        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          badge={t("badge")}
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 1 - Objet" : "Article 1 - Purpose"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "Les presentes Conditions Generales d'Utilisation (CGU) regissent l'acces et l'utilisation de l'application mobile BrickNote, editee par APITHINGS (SIREN 890 251 184)."
                    : "These Terms of Service govern access to and use of the BrickNote mobile application, published by APITHINGS (SIREN 890 251 184)."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "L'utilisation de l'application implique l'acceptation pleine et entiere des presentes CGU."
                    : "Use of the application implies full acceptance of these Terms."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 2 - Description du service" : "Article 2 - Service Description"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "BrickNote est une application mobile iOS destinee aux professionnels du BTP (OPC, conducteurs de travaux, chefs de chantier). Elle permet :"
                    : "BrickNote is an iOS mobile application designed for construction professionals (OPC, site supervisors, site managers). It enables:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "L'enregistrement de notes vocales et leur transcription par IA" : "Voice note recording and AI transcription"}</li>
                  <li>{isFr ? "La prise de photos et leur annotation" : "Photo capture and annotation"}</li>
                  <li>{isFr ? "La generation de comptes-rendus assistes par IA" : "AI-assisted report generation"}</li>
                  <li>{isFr ? "La gestion multi-projets" : "Multi-project management"}</li>
                  <li>{isFr ? "Le fonctionnement hors ligne" : "Offline functionality"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 3 - Acces au service" : "Article 3 - Service Access"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "L'application est accessible gratuitement sur l'App Store pour les appareils iOS compatibles."
                    : "The application is available for free on the App Store for compatible iOS devices."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "L'utilisateur est responsable de son equipement (smartphone, connexion internet) et des frais eventuels y afferents."
                    : "The user is responsible for their equipment (smartphone, internet connection) and any associated costs."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 4 - Inscription" : "Article 4 - Registration"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "L'utilisation basique de l'application ne necessite pas de creation de compte. Certaines fonctionnalites avancees peuvent necessiter une inscription."
                    : "Basic use of the application does not require account creation. Some advanced features may require registration."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "L'utilisateur s'engage a fournir des informations exactes et a les maintenir a jour."
                    : "The user agrees to provide accurate information and keep it up to date."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 5 - Utilisation du service" : "Article 5 - Service Usage"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "L'utilisateur s'engage a :" : "The user agrees to:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "Utiliser l'application conformement a sa destination" : "Use the application for its intended purpose"}</li>
                  <li>{isFr ? "Ne pas utiliser l'application a des fins illicites" : "Not use the application for illegal purposes"}</li>
                  <li>{isFr ? "Ne pas tenter de compromettre la securite de l'application" : "Not attempt to compromise application security"}</li>
                  <li>{isFr ? "Respecter les droits de propriete intellectuelle" : "Respect intellectual property rights"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 6 - Donnees utilisateur" : "Article 6 - User Data"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "Les donnees creees par l'utilisateur (notes, photos, projets) restent sa propriete."
                    : "Data created by the user (notes, photos, projects) remains their property."}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "Les donnees sont stockees localement sur l'appareil de l'utilisateur. En cas d'activation de la synchronisation, les donnees sont chiffrees et stockees de maniere securisee."
                    : "Data is stored locally on the user's device. If synchronization is enabled, data is encrypted and stored securely."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr ? "Pour plus d'informations, consultez notre " : "For more information, see our "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    {isFr ? "Politique de confidentialite" : "Privacy Policy"}
                  </Link>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 7 - Intelligence artificielle" : "Article 7 - Artificial Intelligence"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "L'application utilise des technologies d'intelligence artificielle pour :" : "The application uses artificial intelligence technologies for:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>{isFr ? "La transcription des enregistrements audio" : "Audio recording transcription"}</li>
                  <li>{isFr ? "La generation de comptes-rendus" : "Report generation"}</li>
                  <li>{isFr ? "L'assistance contextuelle" : "Contextual assistance"}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Les resultats fournis par l'IA sont indicatifs et doivent etre verifies par l'utilisateur. APITHINGS ne garantit pas l'exactitude des contenus generes par IA."
                    : "AI-provided results are indicative and must be verified by the user. APITHINGS does not guarantee the accuracy of AI-generated content."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 8 - Propriete intellectuelle" : "Article 8 - Intellectual Property"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "L'application BrickNote, son interface, son code source et tous les elements qui la composent sont la propriete exclusive de APITHINGS."
                    : "The BrickNote application, its interface, source code and all its elements are the exclusive property of APITHINGS."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Toute reproduction, modification ou distribution non autorisee est interdite."
                    : "Any unauthorized reproduction, modification or distribution is prohibited."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 9 - Responsabilite" : "Article 9 - Liability"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "APITHINGS s'efforce d'assurer la disponibilite et le bon fonctionnement de l'application, mais ne peut garantir un service exempt de toute interruption ou erreur."
                    : "APITHINGS strives to ensure availability and proper functioning of the application, but cannot guarantee a service free from interruption or error."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "APITHINGS ne saurait etre tenu responsable des dommages directs ou indirects resultant de l'utilisation de l'application."
                    : "APITHINGS shall not be liable for direct or indirect damages resulting from use of the application."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 10 - Modification des CGU" : "Article 10 - Terms Modification"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "APITHINGS se reserve le droit de modifier les presentes CGU a tout moment. Les utilisateurs seront informes des modifications via l'application."
                    : "APITHINGS reserves the right to modify these Terms at any time. Users will be notified of changes via the application."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "La poursuite de l'utilisation de l'application apres modification des CGU vaut acceptation des nouvelles conditions."
                    : "Continued use of the application after Terms modification constitutes acceptance of the new conditions."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 11 - Droit applicable" : "Article 11 - Applicable Law"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Les presentes CGU sont soumises au droit francais. En cas de litige, les tribunaux francais seront seuls competents."
                    : "These Terms are governed by French law. In case of dispute, French courts shall have sole jurisdiction."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "Article 12 - Contact" : "Article 12 - Contact"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr ? "Pour toute question relative aux presentes CGU, contactez-nous via notre " : "For any questions regarding these Terms, contact us via our "}
                  <Link href="/contact" className="text-primary hover:underline">
                    {isFr ? "formulaire de contact" : "contact form"}
                  </Link>.
                </p>
              </div>

              <p className="text-sm text-muted-foreground pt-8 border-t">
                {tCommon("lastUpdated")}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
