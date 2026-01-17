import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, FileText, Camera, Cpu } from "lucide-react"
import { Article, categoryLabels, categoryColors } from "@/content/articles"

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
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const Icon = categoryIcons[article.category]

  return (
    <Link href={`/ressources/${article.slug}`}>
      <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className={`aspect-video bg-gradient-to-br ${categoryGradients[article.category]} flex items-center justify-center relative overflow-hidden`}>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 w-20 h-20 border-2 border-current rounded-full opacity-20" />
            <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-current rounded-full opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-current rounded-full opacity-10" />
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>

        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className={categoryColors[article.category]}
            >
              {categoryLabels[article.category]}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {article.readTime} min
            </div>
          </div>

          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-2">
            <time className="text-xs text-muted-foreground">{formattedDate}</time>
            <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Lire
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
