import { tv as tailwindVariants, type VariantProps } from "tailwind-variants";

export const badgeVariants = tailwindVariants({
  base: [
    "group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-4xl border font-normal whitespace-nowrap transition-all",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "[&>svg]:pointer-events-none [&>svg]:shrink-0",
  ].join(" "),
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
      outline:
        "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
      ghost:
        "border-transparent hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
      link: "border-transparent text-primary underline-offset-4 hover:underline",
      glass:
        "border-[var(--glass-border)] bg-[var(--glass-surface)] text-foreground shadow-sm backdrop-blur-md [a]:hover:bg-[var(--glass-surface)]/90 [&>svg]:text-primary",
    },
    size: {
      sm: "h-5 min-h-5 gap-0.5 px-1.5 py-0 text-[0.65rem] leading-none [&>svg]:!size-2.5",
      md: "h-6 min-h-6 gap-1 px-2 py-0.5 text-xs [&>svg]:!size-3",
      lg: "min-h-8 gap-2 px-3 py-1.5 text-sm [&>svg]:!size-3.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
