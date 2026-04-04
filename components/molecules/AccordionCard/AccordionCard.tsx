"use client";

import { useId, useMemo, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { SectionTitle } from "@/components/molecules/SectionTitle";
import { CardContent, CardHeader, Card as UiCard } from "@/components/ui/card";
import { classNames } from "@/lib/utils/classNames/classNames";
import { useIsMobile, useResponsiveDefaultOpen, useShinePulse } from "@/lib/hooks";
import { accordionCardVariants } from "./accordionCardVariants";

export type AccordionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** When true, panel starts open on desktop. Omit or false for collapsed by default. */
  defaultOpen?: boolean;
};

export const AccordionCard = ({
  title,
  children,
  className,
  defaultOpen = false,
}: AccordionCardProps) => {
  const panelId = useId();
  const headerId = `${panelId}-header`;

  const isMobile = useIsMobile();
  const [open, setOpen] = useResponsiveDefaultOpen(isMobile, defaultOpen);
  const [shinePulse, triggerShinePulse] = useShinePulse();

  const { trigger, triggerInner, panel, chevron } = useMemo(
    () => accordionCardVariants({ open }),
    [open],
  );

  return (
    <div
      className={classNames(
        "accordion-card-shell group/accordion shadow-xl shadow-black/10 ring-1 ring-border/50 dark:shadow-black/40 dark:ring-border/40",
        shinePulse && "accordion-card-shell--pulse",
        className,
      )}
      data-expanded={open ? "true" : "false"}
    >
      <div className="accordion-card-shell__rotor-wrap">
        <UiCard
          className={classNames(
            "accordion-card-shell__inner border-0 shadow-lg ring-0 gap-0 py-0",
          )}
        >
          <CardHeader className="p-0">
            <button
              id={headerId}
              type="button"
              className={classNames(trigger(), "py-5")}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => {
                setOpen((value) => !value);
                triggerShinePulse();
              }}
              aria-label={`${open ? "Collapse" : "Expand"} section: ${title.trim()}`}
            >
              <span className={triggerInner()} aria-hidden="true">
                <span
                  data-slot="card-title"
                  className="font-heading min-w-0 flex-1 text-base font-normal leading-snug group-data-[size=sm]/card:text-sm"
                >
                  <SectionTitle title={title} />
                </span>
                <ChevronDown className={chevron()} aria-hidden />
              </span>
            </button>
          </CardHeader>
          <CardContent
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            hidden={!open}
            className={panel()}
          >
            {children}
          </CardContent>
        </UiCard>
      </div>
    </div>
  );
};

export type AccordionCardGroupProps = {
  children: ReactNode;
  className?: string;
};

export const AccordionCardGroup = ({ children, className }: AccordionCardGroupProps) => (
  <div className={classNames("flex flex-col gap-8", className)}>{children}</div>
);
