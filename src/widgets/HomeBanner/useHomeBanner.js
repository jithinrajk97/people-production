import { useRef, useMemo } from "react";
import { Power4, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/src/hooks/useGetDeviceType";

const useHomeBanner = () => {
  const main = useRef();
  const circleRef = useRef();
  const layerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { width } = useGetDeviceType();

  // Memoize device type to prevent unnecessary re-renders
  const isDesktop = useMemo(() => width > 991, [width]);

  useGSAP(() => {
    // Only run animations on desktop
    if (!isDesktop) return;

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
          },
        });
        
        // First: Scale up the circle
      
        tl.to(layerRef.current, { 
          rotate: 0,
        }, "<");
        tl.to(circleRef.current, { 
          scale: 3, 
          backgroundColor: "#000",
        }, "<")

        tl.to(".circleSpan", { 
         color: "#fff",
         opacity: 0,
        }, "<")
        
     

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
  };
};

export default useHomeBanner;
