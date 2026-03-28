import { tv as tailwindVariants } from "tailwind-variants";

export const brandLmMarkVariants = tailwindVariants({
  slots: {
    root: [
      "inline-flex items-center justify-center rounded-2xl",
      "border border-white/25 bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] backdrop-blur-md",
      "ring-1 ring-black/5 dark:border-white/15 dark:bg-white/[0.08] dark:ring-white/10",
    ].join(" "),
    text: [
      "relative font-heading text-2xl font-black tracking-tight sm:text-3xl",
      "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-700 bg-clip-text text-transparent",
      "dark:from-fuchsia-400 dark:via-purple-400 dark:to-violet-400",
      "[text-shadow:0_0.06em_0_rgb(88_28_120_/_0.35),0_0.12em_0.3em_rgb(60_20_100_/_0.4)]",
    ].join(" "),
  },
});
