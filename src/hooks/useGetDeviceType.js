"use client"
import { useMemo } from "react";
import useGetInnerWidth from "./useGetInnerWidth";

const useGetDeviceType = () => {
  const width = useGetInnerWidth();

  // Memoize device type calculations to prevent unnecessary re-renders
  const deviceTypes = useMemo(() => {
    const isDesktop = width > 991;
    const isTablet = width <= 991 && width > 576;
    const isMobile = width <= 576;

    return {
      width,
      isDesktop,
      isTablet,
      isMobile,
    };
  }, [width]);

  return deviceTypes;
};

export default useGetDeviceType;