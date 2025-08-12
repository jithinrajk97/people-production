"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ChevronsDown } from "lucide-react";
import { AnimatedLink } from "@/components/ui/animated-link";
import { useRef } from "react";
import "./HomeInfo.scss";
import useHomeInfo from "./useHomeInfo";
import Image from "next/image";

export function HomeInfo() {
  const { secondSection, width, card7 } = useHomeInfo();

  return (
    <section
      className="relative flex h-screen overflow-hidden bg-[#000] text-white second align-middle items-center"
      ref={secondSection}
    >
      {/* Gradient Shape Image as Right Side Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-10">
        <Image
          src="/images/shapes.webp"
          alt="Gradient Shapes Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full max-w-[200px] h-full max-h-[400px] z-10 pointer-events-none">
        <Image
          src="/images/shapes.webp"
          alt="Gradient Shapes Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="content">
              <h1 className="lg:text-7xl text-5xl font-bold text-white lg:mb-5 mb-6 font-sans italic">
                Hi, I'm <span className="font-bold">Jithinraj</span>
              </h1>
              <h4 className="text-[#b1b6cb] text-2xl lg:text-3xl italic">
                As a seasoned Frontend / UI-UX developer with over a decade of experience,
                I specialize in creating seamless and intuitive digital
                experiences using the latest frameworks. My expertise in React,
                Next.js, and Spline allows me to craft engaging and responsive
                designs that elevate user interaction. Let's collaborate to
                enhance your online presence and bring your digital vision to
                life!
              </h4>
              {/* View All Button */}
              <div className="mt-10 lg:mt-8 flex ">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/JITHINRAJ -FRONTEND-DEVELOPER-RESUME.pdf';
                    link.download = 'JITHINRAJ -FRONTEND-DEVELOPER-RESUME.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group relative z-20 text-base  border border-white bg-transparent text-white px-6 py-2  font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:block hidden">
            <div className="relative">
              <figure
                className="aspect-[2/3] max-w-[400px] relative mx-auto"
                ref={card7}
              >
                <Image
                  src="/images/black.jpg"
                  alt="HomeInfo"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </figure>

              {/* Badges positioned around the figure */}
              <div className="absolute badge -left-1 top-1/4 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-purple-500/20">
                Intractive UI
              </div>
              <div className="absolute badge -right-4 top-1/4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20">
                UI/UX Design
              </div>
              <div className="absolute badge -bottom-4 right-1/4 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-orange-500/20">
                Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
