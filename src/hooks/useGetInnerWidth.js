"use client"
import { useSyncExternalStore } from "react";

// Throttle function to limit resize events - moved outside to prevent recreation
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

// Create a single throttled callback store to reuse across subscriptions
const throttledCallbacks = new WeakMap();

const subscribe = (callback) => {
  // Reuse throttled callback if it exists
  let throttledCallback = throttledCallbacks.get(callback);
  if (!throttledCallback) {
    throttledCallback = throttle(callback, 100); // Throttle to 100ms
    throttledCallbacks.set(callback, throttledCallback);
  }
  
  window.addEventListener("resize", throttledCallback, { passive: true });
  return () => {
    window.removeEventListener("resize", throttledCallback);
    throttledCallbacks.delete(callback);
  };
};

const useGetInnerWidth = () => {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => 0
  );
};

export default useGetInnerWidth;