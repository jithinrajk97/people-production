import { useRef, useMemo } from "react";
import { Power4, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/src/hooks/useGetDeviceType";

const useHomeInfo = () => {
  const secondSection = useRef();
  const card7 = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { width } = useGetDeviceType();

  const isDesktop = useMemo(() => width > 991, [width]);

  useGSAP(() => {

    if (!isDesktop) return;

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        gsap.set(secondSection.current, { clipPath: "circle(0%)"}); 
        gsap.set(card7.current, { xPercent: -90, yPercent:0, scale: 1 });
        gsap.set(".badge", { xPercent: -20, yPercent:0, opacity: 0 });
        gsap.set(".content", { xPercent: 25, yPercent:0, opacity: 0 , });
        

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secondSection.current,
            pin: true,
            pinSpacing: true,
            animation: true,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        });
        
        tl.to(secondSection.current, { clipPath: "circle(100%)" })
        tl.to(card7.current, { xPercent: 0, yPercent:0, scale: 1.3},"<.2");
        tl.to(".badge", { xPercent: 0, yPercent:0, opacity: 1},"<.2");
        tl.to(".content", { xPercent: 0, yPercent:0, opacity: 1},"<.2");

      } 
    });
  }, { scope: secondSection, dependencies: [isDesktop] });

  return {
    secondSection,
    width,
    card7,
  };
};

export default useHomeInfo; 