"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { ArticleCard } from "./article-card"
import {
  getBlogPosts,
  getCategoryLabel,
  type ArticleCategory,
} from "@/lib/content"

const categories: (ArticleCategory | "all")[] = [
  "all",
  "guide",
  "conseil",
  "actualite",
]

export function ArticleList() {
  const [activeCategory, setActiveCategory] = useState<
    ArticleCategory | "all"
  >("all")
  const locale = useLocale()
  const t = useTranslations("resources")

  const posts = getBlogPosts(locale)

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category === "all" ? t("all") : getCategoryLabel(category, locale)}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, i) => (
          <div
            key={post.slug}
            className="opacity-0 animate-fade-up"
            style={{
              animationDelay: `${i * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <ArticleCard post={post} />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t("noArticles")}
        </div>
      )}
    </div>
  )
}
