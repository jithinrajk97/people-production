"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsDown } from "lucide-react";
import { AnimatedLink } from "@/components/ui/animated-link";
import { useEffect, useRef, useCallback, useMemo } from "react";
import useHomeBanner from "./useHomeBanner";
import "./HomeBanner.scss";

export function HeroSection() {
  const { main, circleRef, width ,layerRef} = useHomeBanner();

  const sliderRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Memoize the animation function to prevent recreation
  const animate = useCallback(() => {
    let animationId: number;
    let translateValue = 0;
    const speed = 0.2; // Speed of movement in pixels per frame

    const animateFrame = () => {
      if (sliderRef.current && paragraphRefs.current.length > 0) {
        translateValue -= speed;

        // Reset when text has moved completely off screen
        if (translateValue <= -100) {
          translateValue = 0;
        }

        // Apply transform to all paragraph elements
        paragraphRefs.current.forEach((p) => {
          if (p) {
            p.style.transform = `translate(${translateValue}%, 0%)`;
          }
        });
      }
      animationId = requestAnimationFrame(animateFrame);
    };

    animateFrame();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  return (
    <>
      <section
        className="relative flex h-screen overflow-hidden bg-[#000] text-white"
        ref={main}
      >
        {/* Background Layer with Circles */}
        <div>
          <div
            className="bg-layer bgCircleLayer"
            style={{ transform: "rotate(-25.5deg)" }}
            ref={layerRef}
          >
            {/* Level Box 1 */}
            <div className="levelBox">
              <i>29deg</i>
            </div>

            {/* Level Box 2 */}
            <div className="levelBox">
              <i>-29deg</i>
            </div>
          </div>

          {/* UI/UX Div */}
          <div className="ui_ux">
            <span className="ui">UI</span>
            <span className="ux">UX</span>
          </div>

          {/* Slide */}
          <div className="sliderContainer">
            <div ref={sliderRef} className="slider flex">
              <p
                ref={(el) => {
                  paragraphRefs.current[0] = el;
                }}
                style={{ transform: "translate(0%, 0%)" }}
              >
                Frontend Developer -
              </p>
              <p
                ref={(el) => {
                  paragraphRefs.current[1] = el;
                }}
                style={{ transform: "translate(0%, 0%)" }}
              >
                Frontend Developer -
              </p>
              <p
                ref={(el) => {
                  paragraphRefs.current[2] = el;
                }}
                style={{ transform: "translate(0%, 0%)" }}
              >
                Frontend Developer -
              </p>
            </div>
          </div>
        </div>

        {/* Circle Element */}
        <div className="circle" ref={circleRef}>
          <span className="circleSpan">&</span>
        </div>
      </section>
    </>
  );
}
