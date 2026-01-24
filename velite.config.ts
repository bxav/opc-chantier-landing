import { defineConfig, s } from "velite"

const blog = {
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      category: s.enum(["guide", "conseil", "actualite"]),
      image: s.string().optional(),
      readTime: s.number(),
      translationKey: s.string(),
      content: s.mdx(),
    })
    .transform((data, { meta }) => {
      // Extract locale from path using regex: /blog/(en|fr)/filename.mdx
      const localeMatch = meta.path.match(/\/blog\/(en|fr)\//)
      const locale = localeMatch ? localeMatch[1] : "en"
      const filename = meta.path.split("/").pop() || ""
      const slug = filename.replace(/\.mdx$/, "")

      return {
        ...data,
        locale,
        slug,
        permalink: `/${locale === "en" ? "" : locale + "/"}${locale === "en" ? "resources" : "ressources"}/${slug}`,
      }
    }),
}

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts: blog },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
