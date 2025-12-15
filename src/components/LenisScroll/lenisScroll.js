"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { useEffect, useRef, useMemo } from "react";

// Move options outside component to prevent recreation
const lenisOptions = {
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 0.2,
  smoothTouch: false,
  touchMultiplier: 0.2,
  infinite: false,
};

const LenisScroll = ({ children }) => {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1500);
    }

    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} option={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default LenisScroll;
