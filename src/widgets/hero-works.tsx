"use client";

import Link from "next/link";
import WorkCard from "../components/WorkCard";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Project {
  id: number;
  title: string;
  category: string;
  previewImage: string;
  link: string;
}

// Move projects array outside component to prevent recreation
const projects: Project[] = [
  {
    id: 1,
    title: "Webandcrafts",
    category: "Development",
    previewImage: "/images/webandcrafts_logo.jpeg",
    link: "https://webandcrafts.com/",
  },
  {
    id: 2,
    title: "Cafs",
    category: "Development",
    previewImage: "/images/cafs.webp",
    link: "https://www.cafs.in/",
  },
  {
    id: 3,
    title: "Kent Construction",
    category: "Development",
    previewImage: "/images/kent.webp",
    link: "https://www.kenthomes.in/",
  },
  {
    id: 4,
    title: "Nestu Health",
    category: "Design & Development",
    previewImage: "/images/nestu-1.webp",
    link: "https://nestu.health",
  },
  {
    id: 5,
    title: "Airbooking",
    category: "Development",
    previewImage: "/images/image-2.webp",
    link: "https://airbooking.com/",
  },

  {
    id: 6,
    title: "Happiest People Production",
    category: "Development",
    previewImage: "/images/hpp.jpg",
    link: "https://happiest-people-production.vercel.app/",
  },
];

export const HomeWorks = memo(function HomeWorks() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [smoothMousePosition, setSmoothMousePosition] = useState({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const viewButtonRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const animationRefs = useRef<{ [key: string]: gsap.core.Tween }>({});
  const mouseAnimationRef = useRef<gsap.core.Tween | null>(null);
  
  // Memoize project lookup to prevent recalculation
  const hoveredProjectData = useMemo(() => {
    return hoveredProject ? projects.find((p) => p.id === hoveredProject) : null;
  }, [hoveredProject]);

  // Smooth mouse tracking with interpolation - use ref to avoid state updates
  useEffect(() => {
    const smoothPosRef = { x: smoothMousePosition.x, y: smoothMousePosition.y };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Update smooth position directly via GSAP without state updates
      if (mouseAnimationRef.current) {
        mouseAnimationRef.current.kill();
      }

      mouseAnimationRef.current = gsap.to(smoothPosRef, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
        onUpdate: function() {
          setSmoothMousePosition({ x: smoothPosRef.x, y: smoothPosRef.y });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseAnimationRef.current) {
        mouseAnimationRef.current.kill();
      }
    };
  }, []);

  // Cleanup animations on unmount
  useEffect(() => {
    return () => {
      Object.values(animationRefs.current).forEach(anim => anim.kill());
      if (mouseAnimationRef.current) {
        mouseAnimationRef.current.kill();
      }
    };
  }, []);

  const handleProjectHover = useCallback((projectId: number) => {
    setHoveredProject(projectId);

    // Kill existing animations
    Object.values(animationRefs.current).forEach(anim => anim.kill());

         // Animate preview image in with enhanced easing
     if (previewRef.current) {
       animationRefs.current.preview = gsap.fromTo(
         previewRef.current,
         {
           scale: 0.8,
           opacity: 0,
           rotation: -8,
         },
         {
           scale: 1,
           opacity: 1,
           rotation: 0,
           duration: 0.6,
           ease: "power3.out",
         }
       );
     }

    // Animate view button in with staggered delay
    if (viewButtonRef.current) {
      animationRefs.current.viewButton = gsap.fromTo(
        viewButtonRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      );
    }

    // Enhanced project dimming with staggered animation
    projectRefs.current.forEach((ref, index) => {
      if (ref && index !== projectId - 1) {
        const delay = index * 0.05; // Staggered delay
        animationRefs.current[`project-${index}`] = gsap.to(ref, {
          opacity: 1,
          filter: "grayscale(70%)",
          scale: 0.98,
          duration: 0.4,
          delay,
          ease: "power2.out",
        });
      }
    });

    // Subtle scale animation for hovered project
    const hoveredRef = projectRefs.current[projectId - 1];
    if (hoveredRef) {
      animationRefs.current[`hovered-${projectId}`] = gsap.to(hoveredRef, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const handleProjectLeave = useCallback(() => {
    setHoveredProject(null);

    // Kill existing animations
    Object.values(animationRefs.current).forEach(anim => anim.kill());

         // Animate preview image out with smooth transition
     if (previewRef.current) {
       animationRefs.current.previewOut = gsap.to(previewRef.current, {
         scale: 0.8,
         opacity: 0,
         rotation: 8,
         duration: 0.4,
         ease: "power2.in",
       });
     }

    // Restore all projects with enhanced animation
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const delay = index * 0.03; // Faster staggered restore
        animationRefs.current[`restore-${index}`] = gsap.to(ref, {
          opacity: 1,
          filter: "grayscale(0%)",
          scale: 1,
          duration: 0.5,
          delay,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <section className="sec-padding bg-white" id="works">
      <div className="container">
        <div className="lg:mt-0">
          <div className="">
            <div className="space-y-0">
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  className="border-b border-gray-200 py-8 md:py-12 cursor-pointer group block"
                  onMouseEnter={() => handleProjectHover(project.id)}
                  onMouseLeave={handleProjectLeave}
                >
                  <div className="flex items-center justify-between w-full transition-transform duration-300 group-hover:translate-x-2">
                                         <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-black tracking-tight transition-colors duration-300">
                       {project.title}
                     </h2>
                    <span className="text-lg md:text-xl text-gray-500 font-light transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1">
                      {project.category}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Preview Image */}
          {hoveredProject && (
            <div
              ref={previewRef}
              className="fixed pointer-events-none z-50"
              style={{
                left: smoothMousePosition.x - 150,
                top: smoothMousePosition.y - 112.5,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative w-[300px] h-[225px] rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                {hoveredProjectData && (
                  <Image
                    src={hoveredProjectData.previewImage}
                    alt={hoveredProjectData.title}
                    fill
                    className="object-cover"
                  />
                )}

                                 {/* Enhanced View Button */}
                 <div
                   ref={viewButtonRef}
                   className="absolute inset-0 flex items-center justify-center"
                 >
                  <div className="w-20 h-20 bg-black bg-opacity-90 rounded-full flex items-center justify-center text-black font-semibold text-sm shadow-2xl hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});
