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
  useRef,
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
  const [shinePulse, setShinePulse] = useState(false);
  const pulseTimerRef = useRef<number | null>(null);

  const triggerShinePulse = useCallback(() => {
    setShinePulse(true);
    if (pulseTimerRef.current) {
      window.clearTimeout(pulseTimerRef.current);
    }
    pulseTimerRef.current = window.setTimeout(() => {
      setShinePulse(false);
      pulseTimerRef.current = null;
    }, 750);
  }, []);

  useEffect(
    () => () => {
      if (pulseTimerRef.current) {
        window.clearTimeout(pulseTimerRef.current);
      }
    },
    []
  );

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
    <div
      className={classNames(
        "accordion-card-shell group/accordion",
        shinePulse && "accordion-card-shell--pulse",
        className
      )}
      data-expanded={open ? "true" : "false"}
    >
      <div className="accordion-card-shell__rotor-wrap">
        <UiCard
          className={classNames(
            "accordion-card-shell__inner border-0 shadow-lg ring-0"
          )}
        >
          <CardHeader className="p-0">
            <button
              id={headerId}
              type="button"
              className={classNames(trigger(), "px-4 py-4")}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => {
                setOpen((value) => !value);
                triggerShinePulse();
              }}
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
      </div>
    </div>
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
