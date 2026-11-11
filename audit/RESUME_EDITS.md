# Resume edits (`/resume` → `/resume.pdf`)

I audited the resume but didn't edit it. The PDF is printed from `src/app/resume/page.tsx`, so make the edits there and run `bun run resume:pdf`.

## Checks run

| Check | Result |
|---|---|
| Pages | 1 ✅ |
| Text layer / reading order (`pdftotext`) | Clean: name → contact → Education → Skills → Experience → Projects → Honors, one column ✅ |
| Clickable links in PDF | 8: email, GitHub, portfolio, LinkedIn, sopkit, campusloop, debo, indexfast. **No PR links** ⚠️ |
| career-ops `verify-ats.mjs` on `/resume` HTML | 82/100 (B). One critical: email sits inside a `<header>` element, which some parsers drop. The PDF text layer is unaffected; affects anyone pasting the HTML page |
| career-ops `cv-voice` banned phrases (27) | none ✅ |
| Keyword coverage for DevOps/SDE postings (20 common terms) | 12/20. Missing: Kubernetes, CI/CD, AWS, Terraform, observability, Prometheus, distributed systems, system design |
| Facts vs sources | `13 further pull requests in review` is stale (14 + 1 draft today). MoFA merges missing |

Six-second test (career-ops recruiter heuristics): the top third shows school and skills, but no target role and no headline proof.
A recruiter has to reach line 15 to find gemini-cli.

## Edits, highest impact first

1. **Add a one-line headline under your name** (six-second gate):
   `Software Engineer · SDE / DevOps · Merged upstream in gemini-cli, Preact, Editor.js and MoFA`

2. **Open source block: make it current and clickable.** Replace the three bullets with:
   - `Merged: google-gemini/gemini-cli #20778 — turn cancellation now reaches in-flight chat-compression requests (AbortSignal threaded through the execution layers).`
   - `Merged: mofa-org/mofa #1577, #1587, #1594 (Rust) — removed a panicking unwrap() in cron parsing; made public enums #[non_exhaustive]. Also preactjs/preact #5331 and codex-team/editor.js #3040.`
   - `In review: 4 Go fixes in kmesh-net/kmesh (CNI nil-pointer panic, duplicate DNS refresh loops) and jaegertracing/jaeger #10024 (reject out-of-range sampling config); each with a filed, reproduced issue.`

   Link each `#number` to its PR. Note the date range: "2022 – Present" is fine as long as you have 2022 work to point to.

3. **Add CGPA** to the Education line if it is 7.5 or higher. Indian campus and off-campus screens filter on it, and leaving it out reads as low.

4. **Bitotsav, replace the weakest bullet.** "Presented the design to college leadership" describes an activity, not a result. Swap in a number you can stand behind,
   e.g. `Scanned N entries at the gates over 3 days; peak N registrations/hour; zero entry outages.` (Fill N from your data. Don't estimate.)

5. **CampusLoop: say what 1,350+ counts.** Today it reads like reach. Use:
   `Student network gated by college email; sign-up accepts the domains of 1,350+ Indian colleges. N verified users.`
   Add the user count if you have it. Also fix the repo description, which says 1,400+.

6. **SopKit: date the window.** `4.3M+ requests and 213K+ visits in 30 days (Oct 2025)`, or whichever month the LinkedIn analytics post covers.
   213K visits is the stronger number for a recruiter; requests include every asset load.

7. **Skills: add only what the bullets prove.**
   - Add `Rust` (MoFA) and the phrase `CI/CD` next to GitHub Actions / GitLab CI (you wrote this site's pipeline).
   - Add `observability` only next to Jaeger evidence.
   - Do **not** add Kubernetes, AWS or Terraform unless you have used them on something you can link. kmesh fixes are Go/CNI code, not cluster operations.

8. **Honors:**
   - `Technical writing on Dev.to, 45K+ followers`: I couldn't verify this from here. Keep it only if your dashboard shows it.
   - Apify: `Apify hackathon prize ($100) for a production scraping actor` is more credible than "prize winner".

9. **HTML resume:** move the contact line out of `<header>` (use a `<div>`) so the ATS checker clears.

## What not to change

- One page, single column, plain headings: keep.
- Project bullets are specific and in your voice: keep. No buzzwords were found.
- Don't add a skills cloud or rating bars.
