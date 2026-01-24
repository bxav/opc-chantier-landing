"use client"

import { useLocale, useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { Article, getCategoryLabel, categoryColors } from "@/content/articles"

interface ArticleContentProps {
  article: Article
}

function parseInlineMarkdown(text: string) {
  return text.split("**").map((part, j) =>
    j % 2 === 1 ? (
      <strong key={j} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

export function ArticleContent({ article }: ArticleContentProps) {
  const locale = useLocale()
  const t = useTranslations("common")

  const formattedDate = new Date(article.date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <article className="max-w-3xl mx-auto">
      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Badge
          variant="secondary"
          className={categoryColors[article.category]}
        >
          {getCategoryLabel(article.category, locale)}
        </Badge>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {formattedDate}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {t("readTime", { minutes: article.readTime })}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6">
        {article.title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg text-muted-foreground mb-8 pb-8 border-b">
        {article.excerpt}
      </p>

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        {article.content.split("\n").map((line, i) => {
          const trimmed = line.trim()

          if (trimmed.startsWith("# ")) {
            return null // Skip h1 as we already have the title
          }

          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={i} className="text-2xl font-serif font-semibold mt-10 mb-4">
                {trimmed.replace("## ", "")}
              </h2>
            )
          }

          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={i} className="text-xl font-serif font-semibold mt-8 mb-3">
                {trimmed.replace("### ", "")}
              </h3>
            )
          }

          if (trimmed.startsWith("- ")) {
            return (
              <li key={i} className="text-muted-foreground ml-4">
                {parseInlineMarkdown(trimmed.replace("- ", ""))}
              </li>
            )
          }

          if (/^\d+\.\s/.test(trimmed)) {
            return (
              <li key={i} className="text-muted-foreground ml-4 list-decimal">
                {parseInlineMarkdown(trimmed.replace(/^\d+\.\s/, ""))}
              </li>
            )
          }

          if (trimmed === "") {
            return null
          }

          return (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {parseInlineMarkdown(trimmed)}
            </p>
          )
        })}
      </div>
    </article>
  )
}
