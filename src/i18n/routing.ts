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
    "/tools": {
      en: "/tools",
      fr: "/outils",
    },
    "/tools/concrete-calculator": {
      en: "/tools/concrete-calculator",
      fr: "/outils/calculateur-beton",
    },
    "/tools/paint-calculator": {
      en: "/tools/paint-calculator",
      fr: "/outils/calculateur-peinture",
    },
    "/tools/tile-calculator": {
      en: "/tools/tile-calculator",
      fr: "/outils/calculateur-carrelage",
    },
    "/tools/flooring-calculator": {
      en: "/tools/flooring-calculator",
      fr: "/outils/calculateur-parquet",
    },
    "/tools/unit-converter": {
      en: "/tools/unit-converter",
      fr: "/outils/convertisseur-unites",
    },
  },
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
