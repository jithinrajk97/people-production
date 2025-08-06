"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useThrottle } from "@/src/lib/performance"

// Nav links moved outside component to prevent recreation
const navLinks = [
  { name: "Works", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  // Use the optimized throttle hook
  const throttledHandleScroll = useThrottle(handleScroll, 16) // ~60fps

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll)
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
    }
  }, [throttledHandleScroll])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.svg" alt="Agency Logo" width={92} height={92} className="h-18 w-auto" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-16 lg:pr-20">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg  font-medium text-white hover:text-primary-brand">
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
