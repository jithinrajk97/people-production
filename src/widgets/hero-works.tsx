"use client";

import Link from "next/link";
import WorkCard from "../components/WorkCard";

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
          <p className="text-black text-xl max-w-[550px]">
            We value our clients as partners and are committed to delivering
            exceptional results tailored to their unique goals.
          </p>
        </div>

        <div className="lg:mt-[100px]">
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
        
      </div>
    </section>
  );
}
