import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

const links = {
  product: [
    { label: "Fonctionnalites", href: "/#fonctionnalites" },
    { label: "Cas d'utilisation", href: "/cas-utilisation" },
    { label: "Lancer l'app", href: "/contact" },
  ],
  resources: [
    { label: "Ressources", href: "/ressources" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/contact" },
  ],
}

const socials = [
  { icon: Linkedin, href: "/contact", label: "LinkedIn" },
  { icon: Twitter, href: "/contact", label: "Twitter" },
  { icon: Github, href: "/contact", label: "GitHub" },
]

export function Footer() {
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-bold text-lg">OptiChantier</span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm mb-6">
              L&apos;application iOS de gestion de chantier. Notes, photos annotees, reunions et assistant IA.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              Produit
            </h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">
              Ressources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; 2026 OptiChantier. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions legales
            </Link>
            <Link href="/cgu" className="hover:text-primary transition-colors">
              CGU
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
