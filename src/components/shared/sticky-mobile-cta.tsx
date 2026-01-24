"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (roughly the hero)
      const scrolledPastHero = window.scrollY > 600
      setIsVisible(scrolledPastHero)

      // Check if footer is visible
      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setIsFooterVisible(footerRect.top < window.innerHeight)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const shouldShow = isVisible && !isFooterVisible

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-40
        md:hidden
        p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]
        bg-background/95 backdrop-blur-lg
        border-t border-border
        transition-transform duration-300 ease-out
        ${shouldShow ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <Button
        size="lg"
        asChild
        className="w-full rounded-xl min-h-[48px] text-base shadow-lg"
      >
        <Link href="/contact" className="gap-2">
          Commencer gratuitement
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  )
}
