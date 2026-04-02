import { tv as tailwindVariants } from "tailwind-variants";

export const accordionCardVariants = tailwindVariants({
  slots: {
    trigger:
      "flex w-full cursor-pointer items-center justify-between gap-3 rounded-t-xl text-left outline-none transition-colors duration-200 hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    triggerInner:
      "flex min-w-0 flex-1 items-center gap-3 px-5 group-data-[size=sm]/card:px-4",
    panel:
      "border-t border-border/40 px-5 pb-5 pt-5 group-data-[size=sm]/card:px-4 group-data-[size=sm]/card:pb-4 group-data-[size=sm]/card:pt-4",
    chevron:
      "size-8 shrink-0 self-center text-muted-foreground transition-transform duration-200 ease-out md:size-9",
  },
  variants: {
    open: {
      true: { chevron: "rotate-180" },
      false: { chevron: "rotate-0" },
    },
  },
  defaultVariants: { open: false },
});
