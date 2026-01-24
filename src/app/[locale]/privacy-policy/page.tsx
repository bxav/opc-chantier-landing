import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"
import { Link } from "@/i18n/routing"

interface PrivacyPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal.privacy" })

  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
  }
}

export default async function PolitiqueConfidentialitePage({ params }: PrivacyPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "legal.privacy" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const baseUrl = "https://www.bricknote.ai"
  const localePath = locale === "en" ? "" : `/${locale}`
  const pagePath = locale === "en" ? "/privacy-policy" : "/politique-confidentialite"

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

        <Breadcrumb items={[{ label: t("title") }]} />

        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          badge={t("badge")}
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "1. Responsable du traitement" : "1. Data Controller"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Le responsable du traitement des donnees est :" : "The data controller is:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">APITHINGS</strong></li>
                  <li>SIREN : 890 251 184</li>
                  <li>Email : contact@bricknote.ai</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "2. Donnees collectees" : "2. Data Collected"}</h2>

                <h3 className="text-xl font-serif font-semibold mt-6 mb-3">{isFr ? "2.1 Donnees stockees localement" : "2.1 Locally Stored Data"}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "L'application BrickNote stocke les donnees suivantes "
                    : "The BrickNote application stores the following data "}
                  <strong className="text-foreground font-semibold">{isFr ? "uniquement sur votre appareil" : "only on your device"}</strong> :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>{isFr ? "Notes vocales et transcriptions" : "Voice notes and transcriptions"}</li>
                  <li>{isFr ? "Photos et annotations" : "Photos and annotations"}</li>
                  <li>{isFr ? "Projets et comptes-rendus" : "Projects and reports"}</li>
                  <li>{isFr ? "Preferences de l'application" : "Application preferences"}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">{isFr ? "Ces donnees ne sont pas envoyees a nos serveurs" : "This data is not sent to our servers"}</strong>{" "}
                  {isFr ? "sauf si vous activez explicitement la synchronisation." : "unless you explicitly enable synchronization."}
                </p>

                <h3 className="text-xl font-serif font-semibold mt-6 mb-3">{isFr ? "2.2 Donnees de compte (optionnel)" : "2.2 Account Data (optional)"}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Si vous creez un compte, nous collectons :" : "If you create an account, we collect:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "Adresse email" : "Email address"}</li>
                  <li>{isFr ? "Nom (optionnel)" : "Name (optional)"}</li>
                </ul>

                <h3 className="text-xl font-serif font-semibold mt-6 mb-3">{isFr ? "2.3 Donnees techniques" : "2.3 Technical Data"}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "Pour ameliorer le service, nous pouvons collecter des donnees techniques anonymisees :"
                    : "To improve the service, we may collect anonymized technical data:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "Type d'appareil et version iOS" : "Device type and iOS version"}</li>
                  <li>{isFr ? "Rapports de crash (anonymises)" : "Crash reports (anonymized)"}</li>
                  <li>{isFr ? "Statistiques d'utilisation (anonymisees)" : "Usage statistics (anonymized)"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "3. Finalites du traitement" : "3. Processing Purposes"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Vos donnees sont utilisees pour :" : "Your data is used to:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "Fournir les fonctionnalites de l'application" : "Provide application features"}</li>
                  <li>{isFr ? "Ameliorer le service" : "Improve the service"}</li>
                  <li>{isFr ? "Assurer le support technique" : "Provide technical support"}</li>
                  <li>{isFr ? "Communiquer avec vous (si vous nous contactez)" : "Communicate with you (if you contact us)"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "4. Base legale" : "4. Legal Basis"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Le traitement de vos donnees repose sur :" : "Processing of your data is based on:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">{isFr ? "L'execution du contrat" : "Contract execution"}</strong> : {isFr ? "fourniture du service" : "service provision"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Le consentement" : "Consent"}</strong> : {isFr ? "pour les fonctionnalites optionnelles" : "for optional features"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "L'interet legitime" : "Legitimate interest"}</strong> : {isFr ? "amelioration du service, securite" : "service improvement, security"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "5. Partage des donnees" : "5. Data Sharing"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Nous ne vendons pas vos donnees personnelles." : "We do not sell your personal data."}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Vos donnees peuvent etre partagees avec :" : "Your data may be shared with:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">{isFr ? "Prestataires techniques" : "Technical providers"}</strong> : {isFr ? "hebergement, infrastructure (sous contrat de confidentialite)" : "hosting, infrastructure (under confidentiality agreement)"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Services d'IA" : "AI services"}</strong> : {isFr ? "pour la transcription et la generation de texte (donnees traitees sans conservation)" : "for transcription and text generation (data processed without retention)"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "6. Transferts internationaux" : "6. International Transfers"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Certains de nos prestataires peuvent etre situes hors de l'Union Europeenne. Dans ce cas, nous nous assurons que des garanties appropriees sont en place (clauses contractuelles types, adequation)."
                    : "Some of our providers may be located outside the European Union. In this case, we ensure appropriate safeguards are in place (standard contractual clauses, adequacy)."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "7. Conservation des donnees" : "7. Data Retention"}</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground font-semibold">{isFr ? "Donnees locales" : "Local data"}</strong> : {isFr ? "conservees sur votre appareil jusqu'a suppression" : "retained on your device until deletion"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Donnees de compte" : "Account data"}</strong> : {isFr ? "conservees tant que le compte est actif, puis 3 ans apres suppression" : "retained while account is active, then 3 years after deletion"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Donnees techniques" : "Technical data"}</strong> : {isFr ? "13 mois maximum" : "13 months maximum"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "8. Vos droits" : "8. Your Rights"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Conformement au RGPD, vous disposez des droits suivants :" : "Under GDPR, you have the following rights:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit d'acces" : "Right of access"}</strong> : {isFr ? "obtenir une copie de vos donnees" : "obtain a copy of your data"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit de rectification" : "Right of rectification"}</strong> : {isFr ? "corriger vos donnees" : "correct your data"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit d'effacement" : "Right of erasure"}</strong> : {isFr ? "supprimer vos donnees" : "delete your data"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit a la portabilite" : "Right to portability"}</strong> : {isFr ? "recevoir vos donnees dans un format structure" : "receive your data in structured format"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit d'opposition" : "Right to object"}</strong> : {isFr ? "vous opposer a certains traitements" : "object to certain processing"}</li>
                  <li><strong className="text-foreground font-semibold">{isFr ? "Droit de limitation" : "Right to restriction"}</strong> : {isFr ? "limiter le traitement de vos donnees" : "restrict processing of your data"}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr ? "Pour exercer vos droits, contactez-nous a : " : "To exercise your rights, contact us at: "}
                  <strong className="text-foreground font-semibold">contact@bricknote.ai</strong>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "9. Securite" : "9. Security"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr
                    ? "Nous mettons en oeuvre des mesures de securite appropriees pour proteger vos donnees :"
                    : "We implement appropriate security measures to protect your data:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isFr ? "Chiffrement des donnees en transit (HTTPS/TLS)" : "Data encryption in transit (HTTPS/TLS)"}</li>
                  <li>{isFr ? "Chiffrement des donnees au repos" : "Data encryption at rest"}</li>
                  <li>{isFr ? "Acces restreint aux donnees" : "Restricted data access"}</li>
                  <li>{isFr ? "Audits de securite reguliers" : "Regular security audits"}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">10. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Le site web bricknote.ai utilise uniquement des cookies essentiels au fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilise."
                    : "The bricknote.ai website uses only essential cookies. No advertising or tracking cookies are used."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "11. Mineurs" : "11. Minors"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "L'application BrickNote est destinee aux professionnels du BTP. Elle n'est pas concue pour etre utilisee par des mineurs de moins de 16 ans."
                    : "The BrickNote application is intended for construction professionals. It is not designed for use by minors under 16."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">12. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Nous pouvons modifier cette politique de confidentialite. En cas de modification substantielle, nous vous en informerons via l'application."
                    : "We may modify this privacy policy. In case of substantial modification, we will notify you via the application."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">{isFr ? "13. Reclamation" : "13. Complaints"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isFr
                    ? "Si vous estimez que vos droits ne sont pas respectes, vous pouvez deposer une reclamation aupres de la CNIL (www.cnil.fr)."
                    : "If you believe your rights are not being respected, you can file a complaint with the CNIL (www.cnil.fr) or your local data protection authority."}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">14. Contact</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {isFr ? "Pour toute question concernant cette politique de confidentialite :" : "For any questions regarding this privacy policy:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Email : contact@bricknote.ai</li>
                  <li>{isFr ? "Formulaire : " : "Form: "}
                    <Link href="/contact" className="text-primary hover:underline">
                      {isFr ? "Page contact" : "Contact page"}
                    </Link>
                  </li>
                </ul>
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
