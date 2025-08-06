import { useCallback, useMemo, useRef } from 'react';

/**
 * Custom hook to debounce function calls
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  ) as T;
}

/**
 * Custom hook to throttle function calls
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0);
  const lastCallTimer = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        callback(...args);
        lastCall.current = now;
      } else {
        if (lastCallTimer.current) {
          clearTimeout(lastCallTimer.current);
        }
        lastCallTimer.current = setTimeout(() => {
          callback(...args);
          lastCall.current = Date.now();
        }, delay - (now - lastCall.current));
      }
    },
    [callback, delay]
  ) as T;
}

/**
 * Memoize expensive calculations with a custom equality function
 */
export function useMemoizedValue<T>(
  factory: () => T,
  deps: React.DependencyList,
  equalityFn?: (prev: T, next: T) => boolean
): T {
  const prevValue = useRef<T>();
  const prevDeps = useRef<React.DependencyList>();

  return useMemo(() => {
    const newValue = factory();
    
    // If we have a custom equality function, use it
    if (equalityFn && prevValue.current !== undefined) {
      if (equalityFn(prevValue.current, newValue)) {
        return prevValue.current;
      }
    }
    
    // Check if dependencies have actually changed
    if (prevDeps.current && deps.length === prevDeps.current.length) {
      const depsChanged = deps.some((dep, index) => dep !== prevDeps.current![index]);
      if (!depsChanged && prevValue.current !== undefined) {
        return prevValue.current;
      }
    }
    
    prevValue.current = newValue;
    prevDeps.current = deps;
    return newValue;
  }, deps);
}

/**
 * Hook to prevent unnecessary re-renders of child components
 */
export function useStableCallback<T extends (...args: any[]) => any>(callback: T): T {
  return useCallback(callback, []);
}

/**
 * Hook to create stable object references
 */
export function useStableObject<T extends object>(obj: T): T {
  return useMemo(() => obj, []);
}

/**
 * Hook to create stable array references
 */
export function useStableArray<T>(arr: T[]): T[] {
  return useMemo(() => arr, []);
} 