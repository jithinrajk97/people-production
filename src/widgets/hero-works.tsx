"use client";

import Link from "next/link";
import WorkCard from "../components/WorkCard";
import { ChevronRight } from "lucide-react";

const workItems = [
  {
    id: 1,
    image: "/images/work-1.png",
    title: "Shoot for world best head phones nirvana",
  },
  {
    id: 2,
    image: "/images/work-2.png",
    title: "Creative video production for modern brands",
  },
];

export function HomeWorks() {
  return (
    <section className="sec-padding  bg-white">
      <div className="container">
        <div className="lg:flex lg:justify-between items-center">
          <h2 className="text-7xl text-black font-light">
            Our <span className="italic font-semibold">Works</span>{" "}
          </h2>
          <p className="text-black text-xl max-w-[550px] leading-[1.5]">
            We value our clients as partners and are committed to delivering
            exceptional results tailored to their unique goals.
          </p>
        </div>

        <div className="lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
            {workItems.map((item) => (
              <WorkCard
                key={item.id}
                image={item.image}
                title={item.title}
                onClick={() => console.log(`Clicked on ${item.title}`)}
              />
            ))}
          </div>
        </div>

          {/* View All Button */}
          <div className="lg:mt-16 flex justify-center">
              <button className="group relative border border-black bg-transparent text-black px-12 py-4 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                <span className="flex items-center justify-center gap-3">
                  View All
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
        
      </div>
    </section>
  );
}
