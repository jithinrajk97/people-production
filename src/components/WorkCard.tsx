"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface WorkCardProps {
  image: string
  title: string
  ctaText?: string
  onClick?: () => void
}

export default function WorkCard({ image, title, ctaText = "Watch Now", onClick }: WorkCardProps) {
  return (
    <div
      className="bg-white  overflow-hidden  transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="py-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
        <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 group/btn">
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
}
