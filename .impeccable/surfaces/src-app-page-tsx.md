---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx"]
---

Scope: whole portfolio site (home first), Experience mode. Audience: recruiters and hiring managers for SDE/FDE/DevOps roles, plus maintainers arriving from PRs. Job: verify in one screen that Shaswat fixes code he does not own; reach any source in one click.

## Direction contract

THESIS: The site is a patch series sent to the reviewer. It refuses the category default of hero, avatar, stat cards and project grid; the work arrives as patches with trailers that strangers signed.

OWN-WORLD: A public-inbox mail archive. White ground, near-black ink, archive blue links, state colours only for review state (merged green, in-review amber, reported grey). JetBrains Mono sets headers, subjects, trailers, diffstat and data; a plain system sans sets prose. Thread tree rules in hairline grey. Quoted lines indented with a `>` gutter. No cards, no shadows, no rounded tiles.

STORY: From/To/Subject header names who and why; the cover letter says what the series proves; each patch shows the bug, the fix and who merged it; a diffstat line sums the series; production systems follow as a second thread.

FIRST VIEWPORT: Mail header block, a three-line cover letter, and the first patches of the series with their trailers, all above the fold at 1440 and 390.

SIGNATURE: Each patch line expands in place (native details) into symptom, fix and links, like opening a message in a thread view; no JavaScript needed.

RISK: Austere and retro; prose must stay readable for non-kernel reviewers, so prose is never monospace.

FORM: seed:07c1538464b77c85 (degraded roll, no challengers)
