import { describe, expect, it } from "vitest";

import { splitTitleInitial } from "../splitTitleInitial";

describe("splitTitleInitial", () => {
  it("returns empty parts for empty or whitespace-only input after trimStart", () => {
    expect(splitTitleInitial("")).toEqual({ initial: "", rest: "" });
    expect(splitTitleInitial("   ")).toEqual({ initial: "", rest: "" });
  });

  it("splits first grapheme from the rest", () => {
    expect(splitTitleInitial("Hello")).toEqual({ initial: "H", rest: "ello" });
  });

  it("only trims the start, preserving trailing spaces in rest", () => {
    expect(splitTitleInitial("  Hi  ")).toEqual({ initial: "H", rest: "i  " });
  });

  it("handles a single character after leading space trim", () => {
    expect(splitTitleInitial("  X")).toEqual({ initial: "X", rest: "" });
  });

  it("splits a supplementary / multi-code-unit character as one initial", () => {
    expect(splitTitleInitial("😀yo")).toEqual({ initial: "😀", rest: "yo" });
  });
});
