"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

interface CopyResultsButtonProps {
  copyText: string
}

export function CopyResultsButton({ copyText }: CopyResultsButtonProps) {
  const t = useTranslations("tools")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      toast.success(t("copied"))
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea")
      textarea.value = copyText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      toast.success(t("copied"))
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-8 text-xs"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 mr-1.5" />
      ) : (
        <Copy className="w-3.5 h-3.5 mr-1.5" />
      )}
      {t("copy")}
    </Button>
  )
}
