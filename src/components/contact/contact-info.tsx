import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, MessageCircle, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "BrickNote est-il vraiment gratuit ?",
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
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details */}
      <Card className="bg-card/50">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <a
                href="mailto:contact@bricknote.ai"
                className="text-primary hover:underline"
              >
                contact@bricknote.ai
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Delai de reponse</h4>
              <p className="text-muted-foreground">Reponse sous 24h ouvrées</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Support</h4>
              <p className="text-muted-foreground">
                Notre equipe est disponible du lundi au vendredi, 9h-18h.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="bg-card/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Questions frequentes</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                <h4 className="font-medium mb-1 text-sm">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
