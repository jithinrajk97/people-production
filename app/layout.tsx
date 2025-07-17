import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { manrope, figtree } from "./fonts"
import { cn } from "@/lib/utils"
import { CustomCursor } from "@/src/components/custom-cursor"

export const metadata: Metadata = {
  title: "Happiest People Productions",
  description: "Crafting impactful video content that captivates audiences and drives results.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(manrope.variable, figtree.variable)}>
      <body>
      <CustomCursor />

        {children}</body>
    </html>
  )
}
