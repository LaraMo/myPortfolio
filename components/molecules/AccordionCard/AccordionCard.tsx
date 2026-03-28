"use client";

import { ChevronDown } from "lucide-react";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import { SectionTitle } from "@/components/molecules/Card/SectionTitle";
import {
  Card as UiCard,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { classNames } from "@/libs/utils/classNames/classNames";

import { accordionCardVariants } from "./accordion-card-variants";

const MD_DOWN = "(max-width: 767px)";

export type AccordionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** Injected by AccordionCardGroup: first index open on desktop by default. */
  sectionIndex?: number;
};

export const AccordionCard = ({
  title,
  children,
  className,
  sectionIndex = 0,
}: AccordionCardProps) => {
  const panelId = useId();
  const headerId = `${panelId}-header`;

  const [open, setOpen] = useState(sectionIndex === 0);

  const applyLayoutDefault = useCallback(() => {
    const mq = window.matchMedia(MD_DOWN);
    if (mq.matches) {
      setOpen(true);
    } else {
      setOpen(sectionIndex === 0);
    }
  }, [sectionIndex]);

  useEffect(() => {
    applyLayoutDefault();
    const mq = window.matchMedia(MD_DOWN);
    mq.addEventListener("change", applyLayoutDefault);
    return () => mq.removeEventListener("change", applyLayoutDefault);
  }, [applyLayoutDefault]);

  const { trigger, triggerInner, panel, chevron } = useMemo(
    () => accordionCardVariants({ open }),
    [open]
  );

  return (
    <UiCard
      className={classNames(
        "border-[var(--glass-border)] bg-[var(--glass-surface)] shadow-lg backdrop-blur-xl",
        className
      )}
    >
      <CardHeader className="p-0">
        <button
          id={headerId}
          type="button"
          className={classNames(trigger(), "px-4 pb-0 pt-4")}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          aria-label={`${open ? "Collapse" : "Expand"} section: ${title.trim()}`}
        >
          <span className={triggerInner()}>
            <span
              data-slot="card-title"
              className="font-heading min-w-0 flex-1 text-base font-normal leading-snug group-data-[size=sm]/card:text-sm"
            >
              <SectionTitle title={title} mode="inTrigger" />
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
  );
};

AccordionCard.displayName = "AccordionCard";

export type AccordionCardGroupProps = {
  children: ReactNode;
  className?: string;
};

export const AccordionCardGroup = ({
  children,
  className,
}: AccordionCardGroupProps) => {
  const mapped = Children.map(children, (child, index) => {
    if (!isValidElement(child)) {
      return child;
    }
    return cloneElement(child as ReactElement<{ sectionIndex?: number }>, {
      sectionIndex: index,
    });
  });

  return (
    <div className={classNames("flex flex-col gap-8", className)}>
      {mapped}
    </div>
  );
};
