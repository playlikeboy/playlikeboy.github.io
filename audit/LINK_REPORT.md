# Link and page report

Run on 2026-11-11 against a local build of this repo (before: `main` at 033fd64; after: this branch).
The cloud session that ran it could reach GitHub (git) and package registries only. Every other host,
including the live site, LinkedIn, Peerlist and the project domains, was blocked at the proxy, so:

- **Internal pages and links** were crawled with Playwright at 390px and 1440px and checked for status.
- **GitHub links** were checked with `git ls-remote` (repos) and the GitHub search API (PRs, issues).
- **Everything else** is listed as `not reachable from audit env`. Open those once by hand (checklist in AUDIT.md).

## Pages crawled (14 pages × 2 viewports)

| Page | Status | Console errors (excluding blocked third-party hosts) | Horizontal scroll | CLS |
|---|---|---|---|---|
| `/` | 200 | none | no | 0 |
| `/projects` | 200 | none | no | 0 |
| `/projects/sopkit` | 200 | none | no | 0.007 |
| `/projects/campusloop`, `/bitotsav-2026`, `/gemini-cli`, `/debo`, `/sopplayer` | 200 | none | no | 0 |
| `/roles/sde`, `/roles/fde`, `/roles/devops` | 200 | none | no | 0 |
| `/story` | 200 | **before:** 404 on `/resume.pdf/__next._tree.txt` (Next `<Link>` prefetching a PDF as a route). **After:** fixed (plain `<a>`) | no | 0 |
| `/building`, `/resume` | 200 | none | no | 0 |

Every image had an `alt` attribute and none were broken. `next-size-adjust` is an empty meta tag that `next/font` adds itself. It is harmless, and you can't remove it from app code.

## Internal links

All internal links on the 14 pages returned 200, before and after.

## Lighthouse (local build, mobile emulation)

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Home, before | 77 | 90 | 96 | 100 |
| Home, after | 76 | **100** | **100** | 100 |
| `/projects/sopkit`, before | 79 | 90 | 96 | 100 |
| `/projects/sopkit`, after | 79 | **100** | 96 | 100 |

The accessibility failures before were: muted text contrast below WCAG AA, and the theme toggle button had no accessible name.
Performance: LCP 5.8–6.9 s, driven by ~285 KiB of unused JavaScript (the home page is one client component) and render-blocking CSS.
The LCP number is pessimistic here because font and avatar requests to blocked hosts hang until timeout. Re-run on the live site:
`npx lighthouse https://playlikeboy.github.io --only-categories=performance`. Converting `home-client.tsx` to a server component, with
small client islands for the accordion and palette, is the real fix and is listed as follow-up work.

## GitHub repositories linked from the site or profile README

All exist (`git ls-remote` returned heads):

| Repo | Linked from | Note |
|---|---|---|
| playlikeboy/campusloop | README, site | description says **1,400+** colleges; site and resume say 1,350+. Pick one |
| playlikeboy/index-fast | README, site | duplicate of playlikeboy/indexfast; no license |
| playlikeboy/indexfast | (not linked) | homepage field has a typo: `https://indexfact.co` |
| playlikeboy/debo | README, site | duplicate of playlikeboy/debo.life |
| playlikeboy/netscopex | site (DevOps role page) | homepage field points at `github.com/SH20RAJ/netscopex`, the old account, which no longer exists |
| SopKit/sopkit.github.io | site | homepage is `sopkit.space`; site uses `sopkit.github.io` |
| playlikeboy/30tools | old README | same product as SopKit; description says "Ultimate Free Online Toolkit" |
| playlikeboy/Sopplayer, algoforge, omniaudit, ruxs, sanskrit, KishanAI, solus, linepedia, SnapAttend, sketchflow, CodeSeek, picser | site / old README | exist |
| sh20raj-backup/DrivePlyr20 | old README | exists; removed from the new README |
| unstory-app/storix | site | exists |

## Pull requests and issues linked

Checked with the GitHub search API on 2026-11-11, plus git history for the older account.

| Claim | Verified state |
|---|---|
| google-gemini/gemini-cli #20778 merged | **Merged.** Commit `f11bd3d` on main, 2026-03-25, author "Shaswat Raj". Authored as @SH20RAJ, so GitHub search under playlikeboy can't find it |
| preactjs/preact #5331 | merged 2026-10-25 |
| codex-team/editor.js #3040 | merged 2026-11-01 |
| mofa-org/mofa #1577, #1587, #1594 (+ docs #1095, #1097–#1100) | merged 2026-03-10 to 2026-04-12 as @SH20RAJ (merge commits name `SH20RAJ/<branch>`) |
| "Rocket.Chat contributions" (old README) | **Not found.** No PR by playlikeboy, and no commit naming Shaswat/SH20RAJ on Rocket.Chat's default branch since 2025-09. Removed from the README. Restore it only with a link |
| campusloop-space/dsaloop #1, acm-bitmesra #3 | merged, but own org / college club. Now listed separately, not as upstream |
| 15 open upstream PRs (14 + 1 draft) | open: kmesh ×4, editor.js, jaeger, asyncapi ×2, radix ×2, lexical ×3 (1 draft), micromark, t3code |
| campusloop-space/opportunities #1 (draft) | own org, removed from the upstream list |

## External links not reachable from the audit environment

Open each once and confirm it loads and shows the right account:

| URL | Where | Expected |
|---|---|---|
| https://playlikeboy.github.io (and `/og.png`, `/resume.pdf`) | everywhere | live site, OG image 1200×630 |
| https://www.linkedin.com/in/sh20raj/ | site, README, resume | your profile |
| https://peerlist.io/sh20raj | site, README | your profile |
| https://gitlab.com/SH20RAJ | site, README | reachable (200 from this env) |
| https://dev.to/sh20raj · https://codepen.io/sh20raj · https://sh20raj.21st.dev | site, old README | your profiles |
| https://www.youtube.com/@StackShade · https://x.com/SH20RAJ | site, README | your channel / account |
| https://codeforces.com/profile/playlikeboy | site (changed from `sh20raj` per your brief) | your Codeforces. If the real handle is `sh20raj`, change it back in `src/data/roles.ts`, `src/data/resume.tsx`, `src/app/layout.tsx` |
| https://campusloop.space · https://debo.life · https://indexfast.co · https://sopkit.github.io · https://mcppure.shraj.workers.dev · https://algoforge.shraj.workers.dev · https://dhwanibitmesra.in · https://omniaudit-geo.onrender.com · https://unstory.app · https://storix.linespedia.com | site, README, resume | live product |
| LinkedIn posts (Bitotsav, SopKit analytics, SopPlayer, APF 2025) | site, README | post loads while logged out |
| github-stats-extended / github-profile-summary-cards / skillicons / shields.io | old README only | removed from the README; nothing to check |
