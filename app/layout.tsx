import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { manrope, figtree } from "./fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Portfolio | JITHINRAJ",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
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
      <head>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>
        {children}</body>
    </html>
  )
}
