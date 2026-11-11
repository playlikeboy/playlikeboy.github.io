# Design system: the patch series

The site reads like a public mail archive where maintainers review patches (public-inbox, lore.kernel.org). The work arrives as a series of patches with the trailers strangers signed; every page is a message in that archive. It replaces the earlier system, which was a copy of Duolingo's, and is deliberately unlike the category default of hero, avatar, stat cards and project grid.

Product truth lives in `PRODUCT.md`. This file records visual decisions only.

## Principles

1. **Proof is the decoration.** Links to issues, PRs and commits do the work that icons, gradients and illustrations do elsewhere.
2. **Mono for data, sans for prose.** Headers, subjects, trailers, state tags, diffstats and code are monospace because they are data. Paragraphs never are.
3. **State is the only colour.** Green means merged or live, amber means in review, grey means reported or self-reported. Blue means "this is a link".
4. **No chrome.** No cards, shadows, rounded tiles, eyebrow labels, metric grids or icons in headings. Hairline rules separate things.
5. **Works without JavaScript.** Expand-in-place uses `<details>`. Only the theme toggle, ⌘K palette and `/status` need JS.

## Colour

HSL tokens in `src/app/globals.css`, mapped through `tailwind.config.ts`.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | white | `222 16% 7%` | page ground |
| `--foreground` | `222 14% 12%` | `220 14% 90%` | ink |
| `--muted-foreground` | `220 9% 36%` | `220 8% 64%` | header field names, metadata (≥ 6:1 on ground) |
| `--link` | `221 72% 38%` | `218 90% 74%` | links, focus ring, selection tint |
| `--merged` | `146 64% 26%` | `145 50% 62%` | `[MERGED]`, `[LIVE]`, `[PUBLIC RECORD]` |
| `--review` | `30 90% 32%` | `36 90% 62%` | `[IN REVIEW]`, `[FIX READY]` |
| `--quote` | `170 35% 28%` | `165 35% 62%` | quoted lines (`>` gutter), blockquotes |
| `--border`, `--rule` | `220 12% 84–86%` | `220 9% 20–22%` | hairlines, thread tree |
| `--accent` | `220 24% 96%` | `222 14% 12%` | row hover, selected palette item |

Light is the default because reviewers read this at a desk in daylight, the way mail archives are read. Dark follows the system setting and the toggle.

## Type

- **Mono:** JetBrains Mono via `next/font` (`--font-mono`, self-hosted at build). Weight 600 for subjects and headings, 400 for fields and trailers.
- **Prose:** the platform UI sans (`--font-prose`: system-ui stack), 15px base, line-height 1.6, measure 70ch (`max-w-measure`).
- **Scale:** `--step--1` 13px (fields, trailers) · `--step-0` 15px (body) · `--step-1` 17px (lead, h3) · `--step-2` 20–24px (thread headings) · `--step-3` 24–36px (page Subject).
- Headings use `text-wrap: balance`, tracking -0.02em. Numerals are tabular.

## Components (`src/components/mail.tsx`)

| Component | What it is |
|---|---|
| `Page` | the one page width (`max-w-page`, 52rem) and gutters |
| `PageHead` | optional header fields, then `Subject: …` as the h1, then an intro |
| `MailHead` | aligned `Field: value` grid (`.mail-head`) |
| `ThreadHeading` | a section opening like a reply: `Re: …` with an optional right-aligned count |
| `Trailer` | `Key: value` line (`.trailer`), e.g. `Merged-commit:`, `Source:`, `Attachment:` |
| `State` | `[MERGED]` style tag coloured by state |
| `Ext` | archive link (`.a-link`), external links open in a new tab |

CSS classes in `globals.css`: `.thread` (hairline tree elbows on list items), `.quoted` (`>` gutter), `.letter` (long-form prose for case studies and posts), `.disclose` (the `›` that rotates when a `<details>` opens).

## Layout and rhythm

- One column, left-aligned, 52rem max. More space above a thread heading (`mt-14`) than below it (`mb-4`).
- Lists of messages are separated by `divide-y` hairlines inside a top and bottom rule, never boxed.
- The header bar is mono, 44px, sticky with a translucent ground; on phones the links wrap to a second row.
- The footer is a mail signature: `-- ` then name, school, availability and links.

## Motion

One moment: opening a patch (`<details>`) fades the body in with a 3px rise over 260ms on `cubic-bezier(0.16, 1, 0.3, 1)`, and the `›` rotates. Everything else is static. `prefers-reduced-motion` turns transitions off.

## Browser surfaces

Selection is tinted from `--link`; the caret is `--link`; focus is a 2px `--ring` outline offset 2px; scrollbars use `--rule`; link underlines sit 0.18em below the baseline at 1px.

## Resume

`/resume` and `/resume/{sde,fde,devops}` render `src/components/resume-document.tsx` on a white sheet in the system sans, with no archive styling, because it prints to an ATS-friendly one-page A4 PDF (`bun run resume:pdf`).

## Don't

- Don't add cards, drop shadows, gradients, glass, eyebrow labels above headings, or big-number stat tiles.
- Don't set paragraphs in monospace.
- Don't add colour that isn't a state or a link.
- Don't add a number without a link to its source (`src/data/claims.ts`).
