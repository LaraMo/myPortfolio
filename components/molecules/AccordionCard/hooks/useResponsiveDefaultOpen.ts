"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

/**
 * Open state that follows `defaultOpen` on desktop and forces `true` when `isMobile`.
 * Still allows toggling via the returned `setOpen`.
 */
export const useResponsiveDefaultOpen = (
  isMobile: boolean,
  defaultOpen: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (isMobile) {
      setOpen(true);
    } else {
      setOpen(defaultOpen);
    }
  }, [isMobile, defaultOpen]);

  return [open, setOpen];
};
