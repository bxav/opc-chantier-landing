import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"
import { locales, defaultLocale } from "./config"

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/contact": "/contact",
    "/use-cases": {
      en: "/use-cases",
      fr: "/cas-utilisation",
    },
    "/resources": {
      en: "/resources",
      fr: "/ressources",
    },
    "/resources/[slug]": {
      en: "/resources/[slug]",
      fr: "/ressources/[slug]",
    },
    "/legal-notice": {
      en: "/legal-notice",
      fr: "/mentions-legales",
    },
    "/terms": {
      en: "/terms",
      fr: "/cgu",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      fr: "/politique-confidentialite",
    },
  },
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
