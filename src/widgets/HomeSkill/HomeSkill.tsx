"use client";

import { useEffect, useRef, useMemo, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Circle, Square, Star, Layers, Diamond, Palette, Code, Zap, Database, Box, Globe, Layers3, Sparkles, FileCode, Type, Server } from "lucide-react";
import "./HomeSkill.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HomeSkill = memo(function HomeSkill() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Memoize the skills data structure (without JSX icons to prevent recreation)
  const skillsData = useMemo(() => [
    {
      id: 1,
      iconType: "Circle",
      title: "UI/UX Designing",
      description: "Creating intuitive and engaging user experiences through thoughtful interface design. Specializing in user research, wireframing, prototyping, and crafting pixel-perfect designs that balance aesthetics with functionality.",
      tools: [
        { name: "Figma", iconType: "Palette", color: "from-orange-400 to-pink-500" },
        { name: "Adobe XD", iconType: "Type", color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      id: 2,
      iconType: "Square",
      title: "Frontend Development",
      description: "Building responsive and performant web applications using modern JavaScript frameworks. Focused on creating seamless user experiences with clean, maintainable code and optimal performance.",
      tools: [
        { name: "Next Js", iconType: "Globe", color: "from-gray-400 to-gray-600" },
        { name: "React Js", iconType: "Layers3", color: "from-blue-400 to-cyan-500" },
        { name: "Tailwind", iconType: "Sparkles", color: "from-cyan-400 to-blue-500" },
        { name: "Bootstrap", iconType: "FileCode", color: "from-purple-400 to-indigo-500" },
        { name: "Ant Design", iconType: "Layers3", color: "from-purple-300 to-indigo-400" },
        { name: "MUI", iconType: "Sparkles", color: "from-purple-100 to-indigo-200" }
      ]
    },
    {
      id: 3,
      iconType: "Star",
      title: "Interactive Development",
      description: "Developing dynamic and engaging web experiences through advanced animations and interactive elements. Implementing smooth transitions and micro-interactions that enhance user engagement.",
      tools: [
        { name: "GSAP", iconType: "Zap", color: "from-green-400 to-emerald-500" },
        { name: "Three JS", iconType: "Box", color: "from-gray-400 to-gray-600" },
        { name: "Framer Motion", iconType: "FileCode", color: "from-gray-400 to-gray-600" }
      ]
    },
    {
      id: 4,
      iconType: "Layers",
      title: "CMS Development",
      description: "Implementing flexible content management solutions that empower clients to easily update and maintain their websites. Creating custom themes and plugins while ensuring security and performance.",
      tools: [
        { name: "Strapi", iconType: "Server", color: "from-purple-400 to-pink-500" },
        { name: "Wordpress", iconType: "Database", color: "from-blue-400 to-indigo-500" },
      ]
    },
  ], []);

  // Icon mapping to avoid recreating JSX
  const iconMap: Record<string, React.ReactNode> = {
    Circle: <Circle className="w-8 h-8" />,
    Square: <Square className="w-8 h-8" />,
    Star: <Star className="w-8 h-8" />,
    Layers: <Layers className="w-8 h-8" />,
    Palette: <Palette className="w-4 h-4" />,
    Type: <Type className="w-4 h-4" />,
    Globe: <Globe className="w-4 h-4" />,
    Layers3: <Layers3 className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    FileCode: <FileCode className="w-4 h-4" />,
    Zap: <Zap className="w-4 h-4" />,
    Box: <Box className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
  };

  // Memoize the GSAP animation setup
  const setupAnimations = useCallback(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { 
          y: 50, 
          opacity: 0,
          backgroundSize: "0% 100%"
        },
        {
          y: 0,
          opacity: 1,
          backgroundSize: "100% 100%",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Animate skill cards
      gsap.fromTo(
        ".skill-card",
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });

    return ctx;
  }, []);

  useEffect(() => {
    const ctx = setupAnimations();
    return () => ctx?.revert();
  }, [setupAnimations]);

  return (
    <section id="skills" className="sec-padding bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-medium text-gray-400 mb-4">My Skills</h1>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white bg-clip-text text-transparent"
            style={{ backgroundSize: "0% 100%" }}
          >
            What I can do for you
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <div className="text-white">
                    {iconMap[skill.iconType]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1.5 hover:border-gray-600 transition-colors">
                    <div className={`w-4 h-4 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center`}>
                      <div className="text-white">
                        {iconMap[tool.iconType]}
                      </div>
                    </div>
                    <span className="text-xs text-gray-300 font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}); 