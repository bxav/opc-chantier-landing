"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import NextLink from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-surface-dark text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-primary/30">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 10 L22 10 L27 15 L27 22 L5 22 Z"/>
                  <path d="M22 10 L22 15 L27 15"/>
                  <line x1="8" y1="16" x2="24" y2="16"/>
                  <line x1="8" y1="19" x2="18" y2="19"/>
                </svg>
              </div>
              <span className="font-bold text-lg">BrickNote</span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm mb-6">
              {t("description")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              {t("product")}
            </h4>
            <ul className="space-y-3">
              <li>
                <NextLink
                  href="/#features"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.features")}
                </NextLink>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.useCases")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.launchApp")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.tools")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              {t("resources")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.resources")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {t("links.support")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {t("legal.copyright")}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="/legal-notice" className="hover:text-primary transition-colors">
              {t("legal.legalNotice")}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("legal.terms")}
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              {t("legal.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
