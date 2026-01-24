"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, MessageCircle, HelpCircle } from "lucide-react"

const faqKeys = ["free", "dataSecure", "offlineWork"]

export function ContactInfo() {
  const t = useTranslations("contact.info")

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
              <h4 className="font-medium mb-1">{t("responseTime.title")}</h4>
              <p className="text-muted-foreground">{t("responseTime.value")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">{t("support.title")}</h4>
              <p className="text-muted-foreground">
                {t("support.value")}
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
            <h3 className="font-semibold">{t("faq.title")}</h3>
          </div>
          <div className="space-y-4">
            {faqKeys.map((key, i) => (
              <div key={i} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                <h4 className="font-medium mb-1 text-sm">{t(`faq.items.${key}.question`)}</h4>
                <p className="text-sm text-muted-foreground">{t(`faq.items.${key}.answer`)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
