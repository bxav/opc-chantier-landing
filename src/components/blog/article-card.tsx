"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, FileText, Camera, Cpu } from "lucide-react"
import { getCategoryLabel, categoryColors, type Post } from "@/lib/content"

const categoryIcons = {
  guide: FileText,
  conseil: Camera,
  actualite: Cpu,
}

const categoryGradients = {
  guide: "from-blue-500/20 via-blue-400/10 to-indigo-500/20",
  conseil: "from-green-500/20 via-emerald-400/10 to-teal-500/20",
  actualite: "from-purple-500/20 via-violet-400/10 to-fuchsia-500/20",
}

interface ArticleCardProps {
  post: Post
}

export function ArticleCard({ post }: ArticleCardProps) {
  const locale = useLocale()
  const t = useTranslations("resources")

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "en" ? "en-US" : "fr-FR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  )

  const Icon = categoryIcons[post.category]

  return (
    <Link href={{ pathname: "/resources/[slug]", params: { slug: post.slug } }}>
      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Thumbnail */}
        <div
          className={`aspect-video bg-gradient-to-br ${categoryGradients[post.category]} flex items-center justify-center relative overflow-hidden`}
        >
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <>
              {/* Decorative pattern fallback */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-current rounded-full opacity-20" />
                <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-current rounded-full opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-current rounded-full opacity-10" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </>
          )}
        </div>

        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className={categoryColors[post.category]}
            >
              {getCategoryLabel(post.category, locale)}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </div>
          </div>

          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <time className="text-xs text-muted-foreground">{formattedDate}</time>
            <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              {t("read")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
