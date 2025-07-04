import Link, { type LinkProps } from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedLink({ children, className, ...props }: AnimatedLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group flex items-center gap-2 text-2xl text-white transition-colors duration-300 hover:text-primary-brand",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
    </Link>
  )
}
