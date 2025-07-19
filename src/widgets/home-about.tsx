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
    const gradientTextRef = useRef<HTMLSpanElement>(null)
  
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

        // Animate background-size for gradient reveal
        if (gradientTextRef.current) {
          gsap.fromTo(
            gradientTextRef.current,
            { backgroundSize: "0% 100%" ,
              color:"#fff"

            },
            {
              backgroundSize: "104% 105%",
              color:"transparent",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "50% 80%",
                end: "50% 60%",
                scrub: 1,
                markers:true,
              },
            }
          )
        }
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
              <div className=" uppercase text-sm font-medium tracking-wider bg-white/20 tex-white inline-block px-4 py-2 rounded-full ">
              <p className="text-white">About Us</p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-8xl font-light leading-tight">
                We serve a<br />
                wide <span
                  ref={gradientTextRef}
                  className="italic font-semibold pr-6  bg-gradient-to-r from-[#E9E9EE] to-[#FBCF1D] bg-clip-text text-transparent  bg-no-repeat"
                  style={{ backgroundSize: "0% 100%" }}
                >
                  tailored
                </span>
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


        <div className="counter w-full flex flex-col md:flex-row justify-between items-center bg-black rounded-xl py-8 mt-16 shadow-lg">
          {/* Counter Item 1 */}
          <div className="flex-1 flex flex-col   px-4 pl-0">
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">300<span className="text-primary-brand">+</span></span>
            <span className="mt-2 text-gray-400 text-base md:text-lg">Customer globally</span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-16 border-l border-gray-700 mx-2"></div>
          {/* Counter Item 2 */}
          <div className="flex-1 flex flex-col   px-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">200<span className="text-primary-brand">+</span></span>
            <span className="mt-2 text-gray-400 text-base md:text-lg">Experts of team</span>
          </div>
          <div className="hidden md:block h-16 border-l border-gray-700 mx-2"></div>
          {/* Counter Item 3 */}
          <div className="flex-1 flex flex-col   px-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">36<span className="text-primary-brand">+</span></span>
            <span className="mt-2 text-gray-400 text-base md:text-lg">Countries served</span>
          </div>
          <div className="hidden md:block h-16 border-l border-gray-700 mx-2"></div>
          {/* Counter Item 4 */}
          <div className="flex-1 flex flex-col   px-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">12<span className="text-primary-brand">+</span></span>
            <span className="mt-2 text-gray-400 text-base md:text-lg">Year of experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
