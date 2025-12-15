import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { manrope, figtree } from "./fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Jithinraj | Frontend Developer | UI-Developer | Web Developer",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(manrope.variable, figtree.variable)}>
      <body>
        {children}</body>
    </html>
  )
}
