"use client";

import { ArrowRight, Mail, Phone, FileText, Github, Linkedin, ExternalLink, Code } from "lucide-react";
import { useEffect, useRef, useMemo, useCallback, memo } from "react";
import { gsap } from "gsap";

// Move static arrays outside component to prevent recreation
const contactInfo = [
  {
    type: "email",
    value: "jithinraj.k97@gmail.com",
    icon: <Mail className="w-4 h-4" />,
    href: "mailto:jithinraj.k97@gmail.com"
  },
  {
    type: "phone",
    value: "+971 562590464",
    icon: <Phone className="w-4 h-4 " />,
    href: "tel:+971562590464"
  },
  {
    type: "phone",
    value: "+91 9746067693",
    icon: <Phone className="w-4 h-4" />,
    href: "tel:+919746067693"
  }
];

const socialLinks = [
  { name: "CV", icon: <FileText className="w-4 h-4" />, href: "/Jithin_Raj_CV.pdf" },
  { name: "GitHub", icon: <Github className="w-4 h-4" />, href: "https://github.com/jithinrajk97?tab=repositories" },
  { name: "Linkedin", icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/jithin-raj-066855184/" },
  { name: "Codepen", icon: <Code className="w-4 h-4" />, href: "#" }
];

export const Footer = memo(function Footer() {
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP hover animations for buttons
    buttonRefs.current.forEach((button, index) => {
      if (!button) return;

      // Initial state
      gsap.set(button, { 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(0, 0, 0, 0.05)"
      });

      // Hover animations
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -5,
          scale: 1.05,
          backgroundColor: "rgba(0, 0, 0, 1)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Animate icon and text
        const icon = button.querySelector("div:first-child");
        const text = button.querySelector("span");
        
        if (icon) {
          gsap.to(icon, {
            scale: 1.1,
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out"
          });
        }
        
        if (text) {
          gsap.to(text, {
            x: 5,
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0,
          scale: 1,
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out"
        });

        // Reset icon and text
        const icon = button.querySelector("div:first-child");
        const text = button.querySelector("span");
        
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            color: "rgba(0, 0, 0, 0.6)",
            duration: 0.3,
            ease: "power2.out"
          });
        }
        
        if (text) {
          gsap.to(text, {
            x: 0,
            color: "#000000",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    });

    // Circle rotation animation
    if (circleRef.current) {
      // Continuous rotation
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 9,
        ease: "none",
        repeat: -1
      });

      // Hover scale effect
      circleRef.current.addEventListener("mouseenter", () => {
        gsap.to(circleRef.current, {
          scale: 1.2,
          duration: 0.1,
          ease: "power2.out"
        });
      });

      circleRef.current.addEventListener("mouseleave", () => {
        gsap.to(circleRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        });
      });

      // Click to redirect to WhatsApp
      circleRef.current.addEventListener("click", () => {
        window.open(`https://wa.me/971562590464`, '_blank');
      });
    }
  }, []);

  return (
    <section id="contact" className="bg-white text-black h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-between py-16">
        {/* Top section - Heading and divider */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-6xl lg:text-6xl xl:text-8xl font-semibold leading-8">
                Let's work<br />
                together
              </h2>
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </div>
            <div className="w-full h-px bg-black/20"></div>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                href={contact.href}
                className="contact-button group relative flex items-center gap-3 border border-black/20 rounded-full px-6 py-4 transition-all duration-300"
              >
                <div className="text-black/60">
                  {contact.icon}
                </div>
                <span className="text-black font-medium">{contact.value}</span>
              </a>
            ))}
          </div>

          {/* Circle Rotate */}
          <div className="circle-rotate hidden md:flex justify-center items-center my-8 absolute bottom-0  right-0">
            <div 
              ref={circleRef}
              className="w-24 h-24 md:w-32 md:h-32 cursor-pointer transition-all duration-300"
            >
              <img 
                src="/images/circle.png" 
                alt="Rotating Circle" 
                className="w-full h-full object-contain border rounded-full"
              />
            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10">
          {/* Copyright */}
          <div className="text-black/60 text-sm mb-4 md:mb-0">
            2025 © Edition
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="social-link group flex items-center gap-2 text-black/60 hover:text-black transition-colors duration-300"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
          
        </div>


      </div>
    </section>
  );
});
