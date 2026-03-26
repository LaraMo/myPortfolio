import { describe, expect, it } from "vitest";
import { siteConfig } from "./site";

describe("siteConfig", () => {
  it("has a display name", () => {
    expect(siteConfig.name.length).toBeGreaterThan(0);
  });

  it("has a tagline", () => {
    expect(siteConfig.tagline).toBeDefined();
    expect(siteConfig.tagline.length).toBeGreaterThan(0);
  });
});
