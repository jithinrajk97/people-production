import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t sec-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left Section - Logo */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="w-32 lg:w-40">
              <Image
                src="/footer-logo.svg"
                alt="Happiest People Productions"
                width={356}
                height={259}
                className="w-full h-auto"
                style={{ aspectRatio: "356/259" }}
              />
            </div>

            {/* Email */}
            <div>
              <p className="text-gray-500 text-sm mb-1">Email</p>
              <p className="text-black text-sm font-medium">easyhydromechanical@gmail.com</p>
            </div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Testimonials
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Industry Vertical
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Blogs
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Features
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Solutions
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Products
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary-brand transition-colors duration-300 ease-in-out">
                Key Features
              </Link>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out group"
            >
              <Facebook className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out group"
            >
              <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out group"
            >
              <Instagram className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
