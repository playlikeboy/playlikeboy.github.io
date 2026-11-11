# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and engineering hiring managers screening Shaswat Raj for SDE, forward-deployed and DevOps/platform internships and new-grad roles, in India and remote. They arrive from a resume link, a LinkedIn profile or a GitHub profile, usually on a laptop between other candidates, with 30 to 90 seconds to decide whether to keep reading. Many open the site to check something the resume claims.

Secondary: open-source maintainers and engineers who land from a pull request, issue or the GitHub profile and want to know who this contributor is.

## Product Purpose

A personal portfolio whose only job is hiring. It must let a reviewer verify, fast, that Shaswat reads unfamiliar codebases, finds root causes and gets fixes past maintainers, and that he builds and runs software real people use. Success: a reviewer can name his strongest proof after one screen and reach any source behind a claim in one click.

(Confirmed 2026-11-11: freelance and agency pages are out of scope and removed.)

## Positioning

Leads with work in code he does not own: bugs reproduced, filed and fixed upstream in Kmesh, Jaeger, gemini-cli, MoFA, Preact and Editor.js, with every claim linked to a public issue, PR or commit. Most student portfolios lead with self-built projects; this one leads with code review by strangers, and backs it with production systems (Bitotsav '26, SopKit).

## Operating Context

- Static Next.js export on GitHub Pages, deployed by GitHub Actions on push to main and mirrored to GitLab.
- Reviewers move between this site, `/resume.pdf`, github.com/playlikeboy and LinkedIn.
- Routes that matter: home, `/roles/{sde,fde,devops}` (one evidence page per target role), `/bugs`, `/proof`, `/status`, `/projects` and case studies, `/resume`, `/story`, `/blog`.
- `/resume` is also printed to a one-page A4 PDF by `scripts/resume-pdf.mjs`; its print layout must stay one page.

## Capabilities and Constraints

- No backend. Data lives in `src/data/*.ts`; `/status` reads JSON from the repo's `status` branch at runtime.
- Must work with JavaScript disabled for all content except the status page and the command palette.
- Old URLs of removed pages must not 404 for people holding old links.

## Brand Commitments

- Name: Shaswat Raj. Handles: playlikeboy (GitHub, site), sh20raj (LinkedIn, Peerlist, email, npm, Dev.to).
- Voice: plain, specific, first person, numbers with their source. No hype words.
- No visual commitments carried over: the previous design system was a copy of Duolingo's and is retired.

## Evidence on Hand

- Upstream PRs and issues: `src/data/contributions.ts`, `src/data/bugs.ts` (6 merged code PRs, 15 in review, 14 filed issues).
- Claims with sources: `src/data/claims.ts`.
- Projects and case studies: `src/data/resume.tsx`, `src/app/projects/*`.
- Photo: GitLab avatar URL in `DATA.avatarUrl`; `public/profile.jpg`.
- Absent, must not be fabricated: CGPA, CampusLoop user counts, Bitotsav load figures, testimonials, employer names.

## Product Principles

1. Every number links to its source, or it does not appear.
2. Proof before biography: show the work, then the person.
3. One audience: a reviewer deciding whether to interview.
4. Fast and readable on a mid-range laptop and a phone; content works without JavaScript.
5. Say what is not true or not finished (drafts, self-reported numbers) instead of rounding up.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, keyboard access to every control including the Cmd+K palette, visible focus, reduced-motion support.
