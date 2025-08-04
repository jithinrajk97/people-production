import { useRef } from "react";
import { Power4, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/src/hooks/useGetDeviceType";

const useHomeBanner = () => {
  const main = useRef();
  const circleRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { width } = useGetDeviceType();

  useGSAP(() => {
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
            end: "bottom top-=30%",
            markers: true,
            scrub: true,
          },
        });
        
        // First: Scale up the circle
        tl.to(circleRef.current, { 
          scale: 2.50943, 
          duration: 2,
          ease: "power2.out"
        })
        // Second: Hide the main section
        .to(main.current, { 
          opacity: 0, 
          duration: 1,
          ease: "power2.in"
        });
      } 
    });
  }, { scope: main });

  return {
    main,
    circleRef,
    width,
  };
};

export default useHomeBanner;
