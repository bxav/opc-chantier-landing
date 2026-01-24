"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { getCategoryLabel, categoryColors, type Post } from "@/lib/content"
import { MDXContent } from "@/components/mdx"

interface ArticleContentProps {
  post: Post
}

export function ArticleContent({ post }: ArticleContentProps) {
  const locale = useLocale()
  const t = useTranslations("common")

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "en" ? "en-US" : "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  )

  return (
    <article className="max-w-3xl mx-auto">
      {/* Hero image */}
      {post.image && (
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Badge
          variant="secondary"
          className={categoryColors[post.category]}
        >
          {getCategoryLabel(post.category, locale)}
        </Badge>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {formattedDate}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {t("readTime", { minutes: post.readTime })}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-6">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg text-muted-foreground mb-8 pb-8 border-b">
        {post.description}
      </p>

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold">
        <MDXContent code={post.content} />
      </div>
    </article>
  )
}
