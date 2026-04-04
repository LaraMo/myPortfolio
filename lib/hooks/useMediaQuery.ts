"use client";

import { useCallback, useSyncExternalStore } from "react";

import { tailwindMaxMdQuery, tailwindMdOnlyQuery, tailwindMinLgQuery } from "./tailwindBreakpoints";

const serverSnapshot = () => false;

/**
 * Subscribes to `window.matchMedia(query)`. SSR snapshot is always `false` — first client
 * paint may differ until hydration (same class of flash as `useEffect` + `matchMedia`).
 */
export const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, serverSnapshot);
};

/** Viewport width is below Tailwind `md` (767px and down). */
export const useIsMobile = (): boolean => useMediaQuery(tailwindMaxMdQuery);

/**
 * Viewport is `md` through below `lg` (768px–1023px).
 * For layout rules that treat “tablet like desktop”, prefer `useIsDesktop` / `!useIsMobile`.
 */
export const useIsTablet = (): boolean => useMediaQuery(tailwindMdOnlyQuery);

/** Viewport width is Tailwind `lg` or wider (1024px+). */
export const useIsDesktop = (): boolean => useMediaQuery(tailwindMinLgQuery);
