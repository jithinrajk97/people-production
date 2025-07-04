import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {/* Logo + Text */}
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-md flex items-center justify-center">
              <span className="text-xl">📹</span>
            </div>
            <div className="text-black font-bold text-lg leading-tight">
              <div>HAPPIEST</div>
              <div>PEOPLE</div>
              <div className="text-sm font-semibold">PRODUCTIONS</div>
            </div>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-sm break-all">easyhydromechanical@gmail.com</p>
          </div>
        </div>

        {/* Center Section – Links */}
        <div className="grid grid-cols-2 gap-6 w-full md:w-1/3 text-sm">
          <div className="flex flex-col gap-2">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
            <a href="#">Industry Vertical</a>
            <a href="#">Blogs</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Services</a>
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Products</a>
            <a href="#">Key Features</a>
          </div>
        </div>

        {/* Right Section – Social Icons */}
        <div className="flex md:justify-end gap-4 w-full md:w-1/3">
          {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
            <Card key={idx} className="w-10 h-10 rounded-full">
              <CardContent className="p-2 flex items-center justify-center">
                <Icon className="h-4 w-4 text-black" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </footer>
  )
}
