import { Metadata } from "next"
import { Navbar, Footer } from "@/components/landing"
import { PageHeader, Breadcrumb } from "@/components/shared"
import { BreadcrumbSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite d'OptiChantier. Comment nous collectons, utilisons et protegeons vos donnees personnelles.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://www.optichantier.com" },
          { name: "Politique de confidentialite", url: "https://www.optichantier.com/politique-confidentialite" },
        ]}
      />
      <main className="min-h-screen">
        <div className="grain-overlay" />
        <Navbar />

        <Breadcrumb items={[{ label: "Politique de confidentialite" }]} />

        <PageHeader
          title="Politique de confidentialite"
          subtitle="Comment nous protegeons vos donnees"
          badge="RGPD"
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <h2>1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des donnees est :
              </p>
              <ul>
                <li><strong>APITHINGS</strong></li>
                <li>SIREN : 890 251 184</li>
                <li>Email : contact@optichantier.com</li>
              </ul>

              <h2>2. Donnees collectees</h2>
              <h3>2.1 Donnees stockees localement</h3>
              <p>
                L&apos;application OptiChantier stocke les donnees suivantes <strong>uniquement sur votre appareil</strong> :
              </p>
              <ul>
                <li>Notes vocales et transcriptions</li>
                <li>Photos et annotations</li>
                <li>Projets et comptes-rendus</li>
                <li>Preferences de l&apos;application</li>
              </ul>
              <p>
                <strong>Ces donnees ne sont pas envoyees a nos serveurs</strong> sauf si vous activez explicitement
                la synchronisation.
              </p>

              <h3>2.2 Donnees de compte (optionnel)</h3>
              <p>
                Si vous creez un compte, nous collectons :
              </p>
              <ul>
                <li>Adresse email</li>
                <li>Nom (optionnel)</li>
              </ul>

              <h3>2.3 Donnees techniques</h3>
              <p>
                Pour ameliorer le service, nous pouvons collecter des donnees techniques anonymisees :
              </p>
              <ul>
                <li>Type d&apos;appareil et version iOS</li>
                <li>Rapports de crash (anonymises)</li>
                <li>Statistiques d&apos;utilisation (anonymisees)</li>
              </ul>

              <h2>3. Finalites du traitement</h2>
              <p>Vos donnees sont utilisees pour :</p>
              <ul>
                <li>Fournir les fonctionnalites de l&apos;application</li>
                <li>Ameliorer le service</li>
                <li>Assurer le support technique</li>
                <li>Communiquer avec vous (si vous nous contactez)</li>
              </ul>

              <h2>4. Base legale</h2>
              <p>Le traitement de vos donnees repose sur :</p>
              <ul>
                <li><strong>L&apos;execution du contrat</strong> : fourniture du service</li>
                <li><strong>Le consentement</strong> : pour les fonctionnalites optionnelles</li>
                <li><strong>L&apos;interet legitime</strong> : amelioration du service, securite</li>
              </ul>

              <h2>5. Partage des donnees</h2>
              <p>
                Nous ne vendons pas vos donnees personnelles.
              </p>
              <p>
                Vos donnees peuvent etre partagees avec :
              </p>
              <ul>
                <li><strong>Prestataires techniques</strong> : hebergement, infrastructure (sous contrat de confidentialite)</li>
                <li><strong>Services d&apos;IA</strong> : pour la transcription et la generation de texte (donnees traitees sans conservation)</li>
              </ul>

              <h2>6. Transferts internationaux</h2>
              <p>
                Certains de nos prestataires peuvent etre situes hors de l&apos;Union Europeenne.
                Dans ce cas, nous nous assurons que des garanties appropriees sont en place
                (clauses contractuelles types, adequation).
              </p>

              <h2>7. Conservation des donnees</h2>
              <ul>
                <li><strong>Donnees locales</strong> : conservees sur votre appareil jusqu&apos;a suppression</li>
                <li><strong>Donnees de compte</strong> : conservees tant que le compte est actif, puis 3 ans apres suppression</li>
                <li><strong>Donnees techniques</strong> : 13 mois maximum</li>
              </ul>

              <h2>8. Vos droits</h2>
              <p>
                Conformement au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d&apos;acces</strong> : obtenir une copie de vos donnees</li>
                <li><strong>Droit de rectification</strong> : corriger vos donnees</li>
                <li><strong>Droit d&apos;effacement</strong> : supprimer vos donnees</li>
                <li><strong>Droit a la portabilite</strong> : recevoir vos donnees dans un format structure</li>
                <li><strong>Droit d&apos;opposition</strong> : vous opposer a certains traitements</li>
                <li><strong>Droit de limitation</strong> : limiter le traitement de vos donnees</li>
              </ul>
              <p>
                Pour exercer vos droits, contactez-nous a : <strong>contact@optichantier.com</strong>
              </p>

              <h2>9. Securite</h2>
              <p>
                Nous mettons en oeuvre des mesures de securite appropriees pour proteger vos donnees :
              </p>
              <ul>
                <li>Chiffrement des donnees en transit (HTTPS/TLS)</li>
                <li>Chiffrement des donnees au repos</li>
                <li>Acces restreint aux donnees</li>
                <li>Audits de securite reguliers</li>
              </ul>

              <h2>10. Cookies</h2>
              <p>
                Le site web optichantier.com utilise uniquement des cookies essentiels au fonctionnement.
                Aucun cookie publicitaire ou de tracking n&apos;est utilise.
              </p>

              <h2>11. Mineurs</h2>
              <p>
                L&apos;application OptiChantier est destinee aux professionnels du BTP.
                Elle n&apos;est pas concue pour etre utilisee par des mineurs de moins de 16 ans.
              </p>

              <h2>12. Modifications</h2>
              <p>
                Nous pouvons modifier cette politique de confidentialite.
                En cas de modification substantielle, nous vous en informerons via l&apos;application.
              </p>

              <h2>13. Reclamation</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectes, vous pouvez deposer
                une reclamation aupres de la CNIL (www.cnil.fr).
              </p>

              <h2>14. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialite :
              </p>
              <ul>
                <li>Email : contact@optichantier.com</li>
                <li>Formulaire : <a href="/contact" className="text-primary hover:underline">Page contact</a></li>
              </ul>

              <p className="text-sm text-muted-foreground mt-8">
                Derniere mise a jour : Janvier 2026
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
