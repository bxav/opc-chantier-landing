"use client"

import { useParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { locales, localeFlags, type Locale } from "@/i18n/config"

interface LocaleSwitcherProps {
  /** Override URL for the alternate locale (useful for translated content with different slugs) */
  alternateLocaleHref?: string
}

export function LocaleSwitcher({ alternateLocaleHref }: LocaleSwitcherProps = {}) {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const t = useTranslations("localeSwitcher")

  const otherLocale = locales.find((l) => l !== locale) as Locale

  const handleSwitch = () => {
    if (alternateLocaleHref) {
      // Set the NEXT_LOCALE cookie to prevent middleware from redirecting back
      document.cookie = `NEXT_LOCALE=${otherLocale};path=/;max-age=31536000`
      // Use direct navigation for translated content with different slugs
      window.location.href = alternateLocaleHref
    } else {
      // Pass params for dynamic routes (e.g., slug for /resources/[slug])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.replace({ pathname: pathname as any, params: params as any }, { locale: otherLocale })
    }
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
