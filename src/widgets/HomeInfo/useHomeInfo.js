import { useRef } from "react";
import { Power4, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/src/hooks/useGetDeviceType";

const useHomeInfo = () => {
  const secondSection = useRef();
  const card7 = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const { width } = useGetDeviceType();

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {

        

        gsap.set(secondSection.current, { clipPath: "circle(0%)"});

        gsap.set(card7.current, { xPercent: -80, yPercent:0, scale: 1 });
        // const card_item = gsap.utils.toArray(`.badge`);
        // gsap.set(card_item, { xPercent: -80, yPercent:0, opacity: 0 });




        // Pin the first section (hero) on top
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secondSection.current,
            pin: true,
            pinSpacing: true,
            animation: true,
            start: "top top",
            end: "bottom 60%",
            scrub: true,
          },
        });
        

        tl.to(secondSection.current, { clipPath: "circle(100%)", duration: 1, })
        tl.to(card7.current, { xPercent: 0, yPercent:0, scale: 1.3, duration: 1},"<.2");
        // tl.to(card_item, { xPercent: 0, yPercent:0, scale: 1.3,opacity: 1, duration: 1},"<");
        

    
      } 
    });
  }, { scope: secondSection });

  return {
    secondSection,
    width,
    card7,
  };
};

export default useHomeInfo; 