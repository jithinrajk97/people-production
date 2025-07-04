import { Figtree, Manrope } from "next/font/google"

export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300","400" , "500", "600", "700", "900"],
  variable: "--font-figtree",
  display: "swap",
})

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
  display: "swap",
})
