"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#fonctionnalites", label: "Fonctionnalites" },
  { href: "/cas-utilisation", label: "Cas d'utilisation" },
  { href: "/ressources", label: "Ressources" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu()
    }
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleEsc)
      return () => window.removeEventListener("keydown", handleEsc)
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-105">
                <svg
                  className="w-5 h-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110"
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
              <span className="font-bold text-lg tracking-tight">BrickNote</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-px h-6 bg-border mx-2" />
              <Button asChild className="rounded-full px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Link href="/contact">Lancer l&apos;app</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 -mr-1 rounded-xl hover:bg-secondary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          id="mobile-menu"
          className={`absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-4 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all min-h-[44px]"
                onClick={closeMobileMenu}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full rounded-xl min-h-[44px] text-base">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Lancer l&apos;app
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
