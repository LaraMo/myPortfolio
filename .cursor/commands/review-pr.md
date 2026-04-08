# PR review (LaraMo)

Run a **thorough review** before pushing. This command is **manual** (type `/review-pr` in chat). It does **not** replace CI—it applies this repo’s Cursor rules in order.

## Context to provide

Ask the user if missing:

1. **Diff or scope** — Paste `git diff main...HEAD` / `git diff origin/main...` or **@** changed files. If they only have a branch name, suggest: `git diff main...HEAD` (adjust base branch to match their workflow).
2. **Intent** — Feature, fix, refactor, chore, or content-only?

## Rules to apply (in order)

Follow the **workflows and output shapes** from these project rules (paths for @-mention):

| Phase | Rule file | Focus |
|-------|-----------|--------|
| 1 | `.cursor/rules/analyze-pr-changes.mdc` | Scope, App Router/RSC, layers, content, risks, review checklist |
| 2 | `.cursor/rules/detect-code-smells.mdc` | Smells: boundaries, structure, TS, styling, tests |
| 3 | `.cursor/rules/suggest-improvements.mdc` | Actionable improvements (small, mergeable) |
| 4 | `.cursor/rules/propose-test-cases.mdc` | Vitest / Testing Library ideas, gaps |

**Cross-checks** (spot-check against changed files):

- `.cursor/rules/component-standards.mdc` — folders, barrels, `classNames` / `tailwindVariants`
- `.cursor/rules/react-next-best-practices.mdc` — Server vs client, data fetching, `next/image`
- `.cursor/rules/typescript-module-filenames.mdc` — if only `types/`, `content/`, `lib/` files changed
- `.cursor/rules/ui-styling-a11y.mdc` — if UI/`.tsx` changed heavily

## Output

Produce **one combined report** with clear headings:

1. **Summary** — TL;DR + merge recommendation (approve / approve with nits / request changes) if enough context exists.
2. **Analyze** — Per `analyze-pr-changes` (overview, architecture, security, perf, risks, positives, review focus).
3. **Smells** — Per `detect-code-smells` (severity, file refs).
4. **Improvements** — Per `suggest-improvements` (top wins + backlog).
5. **Tests** — Per `propose-test-cases` (new/updated tests).

Use ```startLine:endLine:path``` citations when pointing at code.

## Not in scope for this command

- **Automated** lint/tsc/test on `git push` — that is **`npm run check`** via **Lefthook** (see `lefthook.yml`). Tell the user to run `npm run check` locally or rely on pre-push if installed.

## Tone

Direct, constructive, specific. No engagement bait at the end.
