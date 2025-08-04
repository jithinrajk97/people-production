"use client"
import { useSyncExternalStore } from "react";

// Throttle function to limit resize events
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const subscribe = (callback) => {
  const throttledCallback = throttle(callback, 100); // Throttle to 100ms
  window.addEventListener("resize", throttledCallback);
  return () => window.removeEventListener("resize", throttledCallback);
};

const useGetInnerWidth = () => {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => 0
  );
};

export default useGetInnerWidth;