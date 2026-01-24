"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { locales, localeFlags, type Locale } from "@/i18n/config"

export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("localeSwitcher")

  const otherLocale = locales.find((l) => l !== locale) as Locale

  const handleSwitch = () => {
    // Type assertion needed as pathname can include dynamic routes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: otherLocale })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="text-sm font-medium"
      aria-label={t("switchTo", { locale: otherLocale.toUpperCase() })}
    >
      {localeFlags[otherLocale]}
    </Button>
  )
}
