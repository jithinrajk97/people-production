"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ChevronsDown } from "lucide-react";
import { AnimatedLink } from "@/components/ui/animated-link";
import { useEffect, useRef } from "react";
import "./HomeInfo.scss";
import useHomeInfo from "./useHomeInfo";
import Image from "next/image";

export function HomeInfo() {
  const { secondSection, width, card7 } = useHomeInfo();

  useEffect(() => {
    // Add any initialization logic here
    console.log("HomeInfo component mounted");
  }, []);

  return (
    <section
      className="relative flex h-screen overflow-hidden bg-[#000] text-white second align-middle items-center"
      ref={secondSection}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="content">
              <h1 className="text-7xl font-bold text-white mb-5 font-sans italic">
                Hi, I'm <span className="font-bold">Jithinraj</span>
              </h1>
              <h4 className="text-[#b1b6cb] text-4xl italic">
                I enjoy creating products from scratch and improve existing
                ones. In simple terms, I design websites that make a profit or
                enhance business.
              </h4>
              {/* View All Button */}
              <div className="lg:mt-8 flex ">
                <button className="group text-base relative border border-white bg-transparent text-white px-6 py-2  font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
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
              <div className="absolute badge -left-4 top-1/4 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-purple-500/20">
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
