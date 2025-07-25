"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "About Us", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo-yellow.svg" alt="Agency Logo" width={84} height={58} className="h-16 w-auto" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-16">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-primary-brand">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black/90 text-white border-gray-800">
                <div className="p-4">
                  <Link href="/" className="mb-8 block">
                    <Image src="/logo-yellow.svg" alt="Agency Logo" width={64} height={45} />
                  </Link>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="font-medium text-lg text-gray-300 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
