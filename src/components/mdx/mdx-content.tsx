"use client"

import { useMemo, type ComponentProps } from "react"
import * as runtime from "react/jsx-runtime"
import { cn } from "@/lib/utils"

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode
  type?: "info" | "warning" | "tip"
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    tip: "bg-green-50 border-green-200 text-green-900",
  }

  return (
    <div className={cn("p-4 my-6 border-l-4 rounded-r-lg", styles[type])}>
      {children}
    </div>
  )
}

const mdxComponents = {
  Callout,
  h1: ({ children, ...props }: ComponentProps<"h1">) => (
    <h1 className="text-3xl font-serif font-bold mt-10 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 className="text-2xl font-serif font-semibold mt-10 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <h3 className="text-xl font-serif font-semibold mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ComponentProps<"p">) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 mb-4 space-y-1" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentProps<"li">) => (
    <li className="text-muted-foreground" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: ComponentProps<"strong">) => (
    <strong className="text-foreground font-semibold" {...props}>
      {children}
    </strong>
  ),
  a: ({ children, ...props }: ComponentProps<"a">) => (
    <a className="text-primary hover:underline" {...props}>
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-6"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }: ComponentProps<"pre">) => (
    <pre
      {...props}
      className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-6"
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentProps<"code">) => (
    <code
      {...props}
      className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono"
    >
      {children}
    </code>
  ),
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
  }, [code])

  return <Component components={mdxComponents} />
}
