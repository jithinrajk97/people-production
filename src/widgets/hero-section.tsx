"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { AnimatedLink } from "@/components/ui/animated-link";

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 relative z-10 h-full flex flex-col items-start justify-end text-left p-8 md:p-16 lg:pb-[150px]">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[114px] font-light tracking-tight text-white  lg:max-w-[70%]">
            Crafting a Impactful{" "}
            <span className="font-semibold italic">ads</span>
          </h1>
          <div className=" mt-6 lg:mt-14 px-3">
            <AnimatedLink href="/contact" className="text-[22px]">Contact Us</AnimatedLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronsDown className="h-8 w-8 text-white animate-scroll-down" />
      </div>
    </section>
  );
}
