export type SplitTitleInitialResult = {
  initial: string;
  rest: string;
};

export const splitTitleInitial = (raw: string): SplitTitleInitialResult => {
  const trimmed = raw.trimStart();
  if (trimmed.length === 0) {
    return { initial: "", rest: "" };
  }
  const chars = Array.from(trimmed);
  const initial = chars[0] ?? "";
  const rest = chars.slice(1).join("");
  return { initial, rest };
};
