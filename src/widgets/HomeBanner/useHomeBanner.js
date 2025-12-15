import { useRef, useMemo, useState, useCallback } from "react";
import { Power4, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/src/hooks/useGetDeviceType";

// Register plugin once outside component
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useHomeBanner = () => {
  const main = useRef();
  const circleRef = useRef();
  const layerRef = useRef();
  const [rotationDegrees, setRotationDegrees] = useState(null);
  const rotationRef = useRef(null);
  const { width } = useGetDeviceType();

  // Memoize device type to prevent unnecessary re-renders
  const isDesktop = useMemo(() => width > 991, [width]);

  useGSAP(() => {
    // Set initial rotation value for mobile (0deg)
    if (!isDesktop) {
      setRotationDegrees(0);
      return;
    }

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        gsap.set(main.current, { backgroundColor: '#000'});

        // Pin the first section (hero) on top
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            pin: true,
            pinSpacing: false,
            start: "top top",
            animation: true,
            end: "+=200%",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
              // Get the current rotation value from the timeline
              const progress = self.progress;
              // Calculate rotation: starts at -25.5deg, ends at 0deg
              const currentRotation = -25.5 + (progress * 25.5);
              // Only update state if rotation changed significantly (reduce rerenders)
              if (rotationRef.current === null || Math.abs(rotationRef.current - currentRotation) > 0.5) {
                rotationRef.current = currentRotation;
                setRotationDegrees(currentRotation);
              }
            },
          },
        });
        
        // Set initial rotation value
        setRotationDegrees(-25.5);
        
        // First: Scale up the circle
      
        tl.to(layerRef.current, { 
          rotate: 0,
        }, "<");
        tl.to(circleRef.current, { 
          scale: 2.5, 
          backgroundColor: "#000",
        }, "<")

        // tl.to(".circleSpan", { 
        //  color: "#fff",
        //  opacity: 0,
        // }, "<")
        
     

        // Animate the UI/UX spans
        tl.to(".ui_ux .ui", { 
         xPercent: -30,
          opacity: .2,
        }, "<")

        tl.to(".ui_ux .ux", { 
          xPercent: 30,
           opacity: .2,
         }, "<")
        // Second: Hide the main section
       
      } 
    });
  }, { scope: main, dependencies: [isDesktop] });

  return {
    main,
    circleRef,
    width,
    layerRef,
    rotationDegrees,
  };
};

export default useHomeBanner;
