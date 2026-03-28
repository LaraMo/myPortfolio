import { tv as tailwindVariants } from "tailwind-variants";

export const accordionCardVariants = tailwindVariants({
  slots: {
    trigger:
      "flex w-full items-center justify-between gap-3 rounded-md text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    triggerInner: "flex min-w-0 flex-1 items-center gap-3",
    panel: "border-t border-border/40 px-4 pb-4 pt-4 group-data-[size=sm]/card:px-3",
    chevron:
      "size-8 shrink-0 text-muted-foreground transition-transform duration-200 ease-out md:size-9",
  },
  variants: {
    open: {
      true: { chevron: "rotate-180" },
      false: { chevron: "rotate-0" },
    },
  },
  defaultVariants: { open: false },
});
