"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams, lenis]);

  return null;
};

export default ScrollToTop;
