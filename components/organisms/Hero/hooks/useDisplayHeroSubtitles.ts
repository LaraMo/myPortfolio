"use client";

import { useEffect, useState } from "react";

const DEFAULT_INTERVAL_MS = 2000;

export const useDisplayHeroSubtitles = (
  subtitles: readonly string[],
  intervalMs: number = DEFAULT_INTERVAL_MS,
): number => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (subtitles.length <= 1) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % subtitles.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [subtitles.length, intervalMs]);

  return index;
};
