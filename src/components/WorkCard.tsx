"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { memo } from "react"

interface WorkCardProps {
  image: string
  title: string
  ctaText?: string
  onClick?: () => void
}

const WorkCard = memo(function WorkCard({ image, title, ctaText = "Watch Now", onClick }: WorkCardProps) {
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
      <div className="mt-5 lg:mt-8">
        <h3 className="text-3xl font-light text-gray-900 mb-4 lg:mb-5">{title}</h3>
        <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 group/btn text-lg">
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
})

export default WorkCard
