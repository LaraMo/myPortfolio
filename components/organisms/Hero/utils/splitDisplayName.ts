export const splitDisplayName = (full: string): [string, string] => {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) {
    return [full, ""];
  }
  const last = parts.pop() ?? "";
  return [parts.join(" "), last];
};
