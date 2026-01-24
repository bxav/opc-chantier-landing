"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  threshold?: number
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  "scale-in": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "slide-left": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold })
  const { initial, animate } = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? animate : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Staggered children container
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
}: StaggerContainerProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isInView ? `${index * staggerDelay}ms` : "0ms" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
