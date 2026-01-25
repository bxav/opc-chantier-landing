"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export function CalculatorCta() {
  const t = useTranslations("tools")

  return (
    <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Smartphone className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-1">{t("cta.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("cta.description")}</p>
        </div>
        <Button asChild>
          <Link href="/contact">{t("cta.button")}</Link>
        </Button>
      </div>
    </div>
  )
}
