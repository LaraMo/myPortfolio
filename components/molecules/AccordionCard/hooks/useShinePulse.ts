"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_DURATION_MS = 750;

/**
 * Short-lived “pulse” flag for CSS animations, cleared after `durationMs`.
 */
export const useShinePulse = (
  durationMs: number = DEFAULT_DURATION_MS,
): [boolean, () => void] => {
  const [active, setActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  const trigger = useCallback(() => {
    setActive(true);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setActive(false);
      timerRef.current = null;
    }, durationMs);
  }, [durationMs]);

  useEffect(
    () => () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  return [active, trigger];
};
