import { Typography } from "@/components/atoms/Typography";

export const splitTitleInitial = (raw: string): { initial: string; rest: string } => {
  const trimmed = raw.trimStart();
  if (trimmed.length === 0) {
    return { initial: "", rest: "" };
  }
  const chars = Array.from(trimmed);
  const initial = chars[0] ?? "";
  const rest = chars.slice(1).join("");
  return { initial, rest };
};

export type SectionTitleProps = {
  title: string;
  /**
   * `standalone` — section heading (aria-label on wrapper).
   * `inTrigger` — inside a `<button>`; no nested heading role; visuals are aria-hidden.
   */
  mode?: "standalone" | "inTrigger";
};

/**
 * Drop-cap heading used by portfolio Card and AccordionCard headers.
 */
export const SectionTitle = ({ title, mode = "standalone" }: SectionTitleProps) => {
  const { initial, rest } = splitTitleInitial(title);

  if (initial.length === 0) {
    return (
      <Typography
        variant="h2"
        as={mode === "inTrigger" ? "span" : "h2"}
        className="font-heading !text-2xl !font-normal !leading-snug !tracking-normal sm:!text-2xl group-data-[size=sm]/card:!text-xl"
      >
        {title}
      </Typography>
    );
  }

  const inTrigger = mode === "inTrigger";
  const Wrapper: "div" | "span" = inTrigger ? "span" : "div";

  if (inTrigger) {
    return (
      <Wrapper className="flex min-w-0 flex-1 flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
        <span
          className="shrink-0 font-heading text-5xl font-bold leading-none tracking-tight text-fuchsia-600 md:text-6xl dark:text-fuchsia-400"
          aria-hidden
        >
          {initial}
        </span>
        {rest.length > 0 ? (
          <Typography
            variant="h2"
            as="span"
            className="min-w-0 pb-0 font-heading !text-2xl !font-normal !leading-snug !tracking-normal sm:!text-2xl group-data-[size=sm]/card:!text-xl"
            aria-hidden
          >
            {rest}
          </Typography>
        ) : null}
      </Wrapper>
    );
  }

  const content = (
    <>
      <span className="flex shrink-0 flex-col items-start leading-none">
        <span
          className="text-5xl font-bold tracking-tight text-fuchsia-600 md:text-6xl dark:text-fuchsia-400"
          aria-hidden
        >
          {initial}
        </span>
        <span
          className="mt-1.5 h-1.5 w-[1.2em] min-w-8 rounded-sm bg-fuchsia-600 dark:bg-fuchsia-400"
          aria-hidden
        />
      </span>
      {rest.length > 0 ? (
        <Typography
          variant="h2"
          as="span"
          className="pb-1 font-heading !text-2xl !font-normal !leading-snug !tracking-normal sm:!text-2xl"
          aria-hidden
        >
          {rest}
        </Typography>
      ) : null}
    </>
  );

  return (
    <Wrapper
      className="flex flex-wrap items-end gap-x-2 gap-y-1"
      role="heading"
      aria-level={2}
      aria-label={title.trim()}
    >
      {content}
    </Wrapper>
  );
};
