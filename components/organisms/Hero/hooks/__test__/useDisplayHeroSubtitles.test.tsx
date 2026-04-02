import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useDisplayHeroSubtitles } from "../useDisplayHeroSubtitles";

const mockMatchMedia = (matches: boolean) =>
  vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));

describe("useDisplayHeroSubtitles", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.matchMedia = mockMatchMedia(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("stays at 0 when there is at most one subtitle", () => {
    const { result, rerender } = renderHook(
      ({ subtitles }: { subtitles: string[] }) => useDisplayHeroSubtitles(subtitles),
      { initialProps: { subtitles: [] as string[] } },
    );

    expect(result.current).toBe(0);

    rerender({ subtitles: ["only"] });
    act(() => {
      vi.advanceTimersByTime(10_000);
    });
    expect(result.current).toBe(0);
  });

  it("advances index on interval and wraps modulo length", () => {
    const subtitles = ["a", "b", "c"];
    const { result } = renderHook(() => useDisplayHeroSubtitles(subtitles, 1000));

    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toBe(1);

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current).toBe(0);
  });

  it("does not advance when prefers-reduced-motion is reduce", () => {
    window.matchMedia = mockMatchMedia(true);
    const subtitles = ["a", "b"];
    const { result } = renderHook(() => useDisplayHeroSubtitles(subtitles, 1000));

    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(result.current).toBe(0);
  });

  it("clears the interval on unmount", () => {
    const clearSpy = vi.spyOn(window, "clearInterval");
    const subtitles = ["a", "b"];
    const { unmount } = renderHook(() => useDisplayHeroSubtitles(subtitles, 500));

    unmount();
    expect(clearSpy).toHaveBeenCalled();
    clearSpy.mockRestore();
  });
});
