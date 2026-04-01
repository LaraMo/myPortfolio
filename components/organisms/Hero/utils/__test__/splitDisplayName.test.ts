import { describe, expect, it } from "vitest";

import { splitDisplayName } from "../splitDisplayName";

describe("splitDisplayName", () => {
  it("returns full string and empty second line when there is one word", () => {
    expect(splitDisplayName("Ada")).toEqual(["Ada", ""]);
  });

  it("splits first and last token when there are two words", () => {
    expect(splitDisplayName("Ada Lovelace")).toEqual(["Ada", "Lovelace"]);
  });

  it("joins all but the last word for the first line", () => {
    expect(splitDisplayName("Ada King Lovelace")).toEqual([
      "Ada King",
      "Lovelace",
    ]);
  });

  it("trims and collapses internal whitespace", () => {
    expect(splitDisplayName("  Ada   Lovelace  ")).toEqual([
      "Ada",
      "Lovelace",
    ]);
  });
});
