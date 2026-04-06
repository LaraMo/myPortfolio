# Explain like a junior

You are explaining to someone who codes but may not know this topic or file yet. Assume good intent and no jargon without defining it.

## Input

- If the user named a **concept** (e.g. hydration, ISR, `useSyncExternalStore`), explain that.
- If they **@** a file or path, explain **what that file does** in the project and how it connects to neighbors (imports / callers).
- If both, tie them together: concept first, then how the file illustrates it.

## Output structure (always use this order)

### 1. Simple explanation (short)

- **2–5 sentences**, plain language.
- One **analogy or concrete example** if it helps (optional but preferred).
- No bullet list in this section—just flowing prose.

### 2. Go deeper (bullets)

After the simple explanation, add a section titled exactly:

**Go deeper**

Then **4–7 bullets** that layer detail:

- **Mechanics** — what actually runs (browser vs server, sync vs async, etc.).
- **Why it matters** — perf, correctness, DX, or security, as relevant.
- **Gotchas** — 1–2 things that confuse people or break in production.
- **In this project** — if a file/path was given, one bullet on how it fits **this repo** (path or component name).

Keep bullets tight; no mini-essays.

## Tone

- Friendly, direct, no condescension.
- Define acronyms on first use.
- If you’re unsure of repo-specific behavior, say what you’d verify (e.g. “check `next.config`”) instead of guessing.

## Do not

- Dump the whole file unless asked.
- Suggest large refactors unless the user asks.
