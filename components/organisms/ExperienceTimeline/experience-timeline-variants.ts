import { tv as tailwindVariants } from "tailwind-variants";

export const experienceTimelineVariants = tailwindVariants({
  slots: {
    root: "relative isolate m-0 list-none p-0",
    spine: [
      "pointer-events-none absolute bottom-8 left-[calc(1.75rem-1px)] top-8 z-0 w-0.5 rounded-full bg-border/80",
    ].join(" "),
    item: "relative z-[1] grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-0 pb-14 last:pb-4",
    nodeCell: "col-start-1 row-start-1 flex justify-center pt-1",
    nodeShell: [
      "flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full",
      "border-2 border-[var(--glass-border)] bg-background/95 shadow-lg ring-2 ring-white/30",
      "dark:bg-card/95 dark:ring-white/10",
    ].join(" "),
    content: "col-start-2 row-start-1 min-w-0 max-w-2xl",
    roleRow: "flex flex-wrap items-baseline gap-x-1.5",
    roleTitle:
      "text-lg font-semibold tracking-tight text-foreground sm:text-xl",
    companyInline:
      "text-sm font-semibold text-black sm:text-base dark:text-white",
    period: "mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
    description: "mt-2 text-muted-foreground",
  },
});
