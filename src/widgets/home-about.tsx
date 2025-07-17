import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HomeAbout() {

    const imageRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
  
    useEffect(() => {
      if (typeof window === "undefined") return
  
      const ctx = gsap.context(() => {
        // Subtle image rotation and scale animation with scroll scrub
        gsap.to(imageRef.current, {
          rotation: 40,
          scale: 1.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      })
  
      return () => ctx.revert()
    }, [])
  return (
    <section className="sec-padding bg-black" ref={sectionRef} >
      <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-400 uppercase text-sm font-medium tracking-wider">About Us</p>

              <h2 className="text-4xl md:text-5xl lg:text-8xl font-light leading-tight">
                We serve a<br />
                wide <span className="italic font-semibold">tailored</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Lorem ipsum solutions tailored to tackle specific challenges
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white hover:text-primary-brand transition-colors duration-300 group"
              >
                <span className="text-lg">About us</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right 3D Icon */}
           {/* Right 3D Image */}
           <div className="flex justify-start ">
            <div ref={imageRef} className="relative">
              <Image
                src="/images/camera.png"
                alt="3D Camera Icon"
                width={400}
                height={400}
                className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
