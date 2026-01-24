"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { ChevronRight, Home } from "lucide-react"

type StaticPathname = "/" | "/contact" | "/use-cases" | "/resources" | "/legal-notice" | "/terms" | "/privacy-policy"

interface BreadcrumbItem {
  label: string
  href?: StaticPathname
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations("common")

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">{t("home")}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 min-w-0">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors truncate"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
