"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">OptiChantier</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/#fonctionnalites"
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
            >
              Fonctionnalites
            </Link>
            <Link
              href="/cas-utilisation"
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
            >
              Cas d&apos;utilisation
            </Link>
            <Link
              href="/ressources"
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
            >
              Ressources
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
            >
              Contact
            </Link>
            <div className="w-px h-6 bg-border mx-2" />
            <Button asChild className="rounded-full px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Link href="/contact">Lancer l&apos;app</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-border/50 px-4 py-4 space-y-2">
          <Link
            href="/#fonctionnalites"
            className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fonctionnalites
          </Link>
          <Link
            href="/cas-utilisation"
            className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cas d&apos;utilisation
          </Link>
          <Link
            href="/ressources"
            className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ressources
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full rounded-xl mt-2">
            <Link href="/contact">Lancer l&apos;app</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
