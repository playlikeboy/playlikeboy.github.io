# Developer profile audit — Shaswat Raj (@playlikeboy)

2026-11-11 · Targets: SDE, Forward-Deployed and DevOps/Platform internships and new-grad roles (India and remote).

Method and skills applied:
- **career-ops:** recruiter-side heuristics, six-second gate, `verify-ats.mjs`, `cv-voice` banned list, no-fabrication rule.
- **github-profile-optimization:** scorecard, fix order, pin rules.
- **readme-optimization.**
- **webapp-testing:** Playwright crawl.
- **frontend-design.**
- **linkedin-profile-optimizer.**
- **tech-resume-optimizer** and **resume-ats-optimizer.**
- `openclaw/skills` resume-reviewer could not be fetched (the repo needs a login) and was skipped.

The audit environment could reach GitHub and package registries only. LinkedIn, Peerlist and the live site were blocked, so
those surfaces are scored from the sources that link to them and marked *(est.)*. Details: [LINK_REPORT.md](LINK_REPORT.md).

Branch with all code changes: `claude/brave-pascal-bonhq1` in both repos. **Nothing is on `main` yet.** Pushing to
`main` deploys the live site; see "Ship it" at the end.

## 1. Scorecard (0–10)

| Surface | Before | After | Why |
|---|---|---|---|
| GitHub profile README | 4 | 7 | Before: AI-builder framing, an unverifiable Rocket.Chat claim, the inflated "330+" repo count, 4 "upstream" merges of which 2 were own org, gemini-cli missing from the merged list, 6 widgets. After: positioning line, 4 proof projects, verified merged table, honest counts. To reach 9: pins, bio and repo descriptions (manual) |
| GitHub account (pins, bio, repos) | 3 | 3 | Unchanged until you do the manual steps: no pins; company field "Shade"; bio still "AI products, SaaS & developer tools"; 0 followers; 151 of 186 public repos without descriptions; duplicate repos. Your logged-in view shows 280+ because it includes private repos; visitors see 186 |
| Portfolio | 6 | 8 | Before: empty-looking In-review list, gemini missing from Merged, own org counted upstream, duplicate "Open source" heading, "0 Followers", 15k contributions fallback, a11y 90. After: honest grouping, every metric names its source, a11y 100 |
| Resume | 7 | 7 | Audit only. Strong one-pager; stale PR count, no headline, no CGPA, no PR links. See [RESUME_EDITS.md](RESUME_EDITS.md) |
| LinkedIn *(est.)* | ? | — | Not readable. Drafts in [LINKEDIN_REWRITE.md](LINKEDIN_REWRITE.md) |
| Peerlist *(est.)* | ? | — | Not readable. Drafts in [PEERLIST_REWRITE.md](PEERLIST_REWRITE.md) |
| Cross-platform consistency | 4 | 7 | See matrix. Remaining gaps are on surfaces only you can edit |

## 2. Top 10 fixes, ranked by impact per hour

| # | Fix | State |
|---|---|---|
| 1 | Gemini-cli #20778 proven merged (commit `f11bd3d`, as @SH20RAJ) and shown everywhere with the "ghost" explanation and a commit link | ✅ pushed (portfolio + README) |
| 2 | Upstream vs own-org split: dsaloop and acm-bitmesra moved out of the upstream counts on the site and in the README auto-refresh script | ✅ pushed |
| 3 | Found 8 merged MoFA PRs (3 Rust code, 5 docs) from the old account and added them | ✅ pushed |
| 4 | Removed false or unverifiable claims: Rocket.Chat, "330+ repositories", `main.tex` (300+ merged PRs, 15k contributions, 45k active users), `/resume.md`, live-stats 15k fallback, "0 Followers" | ✅ pushed |
| 5 | Pin six repos and fix their descriptions (campusloop says 1,400+, indexfast homepage typo, netscopex links the dead account) | 📝 manual, see §5 |
| 6 | GitHub bio and company field ("Shade") | 📝 manual, see §5 |
| 7 | Resume: headline line, current PR counts with links, MoFA, CGPA | 📝 manual, see RESUME_EDITS.md |
| 8 | Every home-page metric links to its evidence; 213K = visits (not MAU), 1,350+ = college domains (not users), ~5,000 participants | ✅ pushed |
| 9 | Accessibility 90 → 100: contrast, labelled icon buttons, Cmd+K palette exposed as dialog/combobox/listbox | ✅ pushed |
| 10 | LinkedIn / Peerlist headline and About | 📝 manual, drafts ready |

Also pushed:
- The DevOps and SDE role pages gain the kmesh #1987/#1989 and MoFA evidence.
- Person JSON-LD cleaned up and the keywords meta dropped.
- Codeforces now links to `playlikeboy`.
- Contact adds Peerlist and GitLab.
- The Apify honor no longer uses a GitHub avatar.
- `/story` no longer 404s while prefetching the PDF.
- The README hero is retitled and the snake workflow removed.

## 3. 30-second recruiter test

| Surface | Before | After |
|---|---|---|
| GitHub profile | "AI/full-stack builder, lots of badges and stat cards. Claims Rocket.Chat and 330+ repos I can't see. 4 merged PRs, 2 into their own org. Popular repos: an audio player and a scraper." | "SDE/DevOps student. Merged in Google's gemini-cli and MoFA (Rust), Go fixes in review at Kmesh/Jaeger. Ran a 5,000-person event platform. Resume link at the top." *(Popular repos still weak until pins are set.)* |
| Portfolio | "Strong headline and role pages, but the merged list doesn't include the gemini PR the hero brags about, and 0 followers is shown." | "Six upstream merges with links, counts that add up, each big number links to a source. The role page for my opening is one click away." |
| Resume | "Clean, specific. Has to read to line 15 to find the open-source proof. No CGPA." | Same until the edits land. With them: "SDE/DevOps, merged upstream, festival-scale ops", all visible in the top third. |

## 4. Consistency matrix

⚠️ = a mismatch that remains. ✅ = consistent now.

| Field | Resume PDF | Portfolio | GitHub README | GitHub account | LinkedIn | Peerlist |
|---|---|---|---|---|---|---|
| Name | Shaswat Raj ✅ | Shaswat Raj ✅ | Shaswat Raj ✅ | check display name | ? | ? |
| Handle | playlikeboy / sh20raj | playlikeboy, sh20raj ✅ | playlikeboy, explains @SH20RAJ ✅ | playlikeboy | sh20raj (posts also use `shaswatraj_` ⚠️) | sh20raj |
| Headline | none ⚠️ | "Software Engineer · B.Tech CSE, BIT Mesra '28" | "Software engineer…" ✅ | bio "AI products, SaaS & developer tools", company "Shade" ⚠️ | ? → draft A | ? → draft |
| Education | BIT Mesra, B.Tech CSE, Expected May 2028 | "'28" / "Expected 2028" ✅ | "graduating May 2028" ✅ | — | ? | ? |
| Upstream merged | gemini-cli, Preact, Editor.js (no MoFA ⚠️) | 6 code + 5 docs ✅ | same 4 projects ✅; auto block counts @playlikeboy only (2) and says so | — | ? | ? |
| In review | "13 further" ⚠️ (14 + 1 draft) | 15 ✅ | 14 + 1 draft ✅ | — | ? | ? |
| Bitotsav | ~5,000 | ~5,000 ✅ (was 5,000+/5K+) | ~5,000 ✅ | — | ? | ? |
| SopKit | 605+, 4.3M req, 213K visits / 30 days | same ✅ (was "213K MAU" on 2 pages) | same ✅ | repo desc "600+" (fine), homepage sopkit.space ⚠️ | ? | ? |
| CampusLoop | 1,350+ colleges | 1,350+ college domains ✅ | 1,350+ ✅ | repo desc **1,400+** ⚠️ | ? | ? |
| Codeforces | — | playlikeboy (per your brief; confirm) | playlikeboy | — | — | — |

## 5. Your manual checklist

**GitHub account** (run with your own `gh`, logged in as playlikeboy):

- [ ] Bio, company and location (bio is 147 chars; clears the "Shade" company field):
```bash
gh api -X PATCH user -f bio="Software engineer, BIT Mesra '28. Merged upstream: gemini-cli, Preact, Editor.js, MoFA. Go fixes in Kmesh/Jaeger. Open to SDE & DevOps internships." -f company="" -f location="Ranchi, India" -f blog="https://playlikeboy.github.io" -f twitter_username="SH20RAJ"
```
- [ ] Pins (no API; Profile → "Customize your pins"), in this order:
  1. `SopKit/sopkit.github.io` (or `playlikeboy/30tools`; pick one and archive the other's description to point to it)
  2. `playlikeboy/campusloop`
  3. `playlikeboy/index-fast`
  4. `playlikeboy/netscopex` (DevOps/observability)
  5. `playlikeboy/debo`
  6. `playlikeboy/playlikeboy.github.io` (shows your CI/CD and the role pages)
- [ ] Fix pinned-repo metadata:
```bash
gh repo edit playlikeboy/campusloop --description "Student-only campus network gated by college email (1,350+ Indian college domains). Next.js, PostgreSQL, Cloudflare Workers."
```
```bash
gh repo edit playlikeboy/indexfast --homepage "https://indexfast.co"
```
```bash
gh repo edit playlikeboy/netscopex --homepage "https://playlikeboy.github.io/roles/devops"
```
```bash
gh repo edit playlikeboy/playlikeboy.github.io --description "Portfolio of Shaswat Raj: SDE, DevOps and open-source evidence. Next.js static export, deployed by GitHub Actions." --add-topic portfolio --add-topic nextjs --add-topic github-actions
```
```bash
gh repo edit SopKit/sopkit.github.io --homepage "https://sopkit.github.io"
```
- [ ] Merge the duplicate repos `debo`/`debo.life` and `index-fast`/`indexfast`: archive one of each, with a README line pointing to the other.
- [ ] Archive or make private obvious throwaways (e.g. `test-repo-check`). Add descriptions to your top ~20 repos (151 of 186 have none).
- [ ] Settings → Profile → turn on "Include private contributions on my profile".
- [ ] Add a LICENSE to `index-fast`, `debo.life` and `indexfast`.

**Account sprawl:** keep `playlikeboy` as the only account you link. `sh20raj-backup` stays as the archive, linked once from the README.
LinkedIn/Peerlist/dev.to keep `sh20raj`; the README and site explain the move. Don't recreate @SH20RAJ: the old PRs stay "ghost" either way,
and a new account with that name would look like someone else.

**Elsewhere**
- [ ] LinkedIn: paste your current text and I'll score it; or apply LINKEDIN_REWRITE.md directly. Confirm `linkedin.com/in/sh20raj` resolves.
- [ ] Peerlist: apply PEERLIST_REWRITE.md.
- [ ] Resume: apply RESUME_EDITS.md, then run `bun run resume:pdf`.
- [ ] Confirm the Codeforces handle (`playlikeboy` vs `sh20raj`) and the Dev.to 45K-followers figure.
- [ ] If you did contribute to Rocket.Chat, find the PR link; otherwise leave it off.
- [ ] Repo hygiene: `todo.md`, `PLAN.md`, `sh20raj_profile_research.md` and `FULL-AUDIT-REPORT.md` sit in the public portfolio repo root. Move them out or delete them.

## Ship it

Review the branch diffs, then merge `claude/brave-pascal-bonhq1` into `main` in both repos (or ask me to open the PRs). The Pages
workflow deploys on push to `main`. The README's "Refresh upstream PR list" Action will regenerate the auto block with the new own-org filter on its next run.

Follow-up work, not done here:
- Performance: home LCP is ~6 s in lab runs because the home page ships as a single client component (~285 KiB unused JS). Split it into server-rendered sections with small client islands.
- Top-6 repo READMEs: I couldn't edit them from this session. Each needs a one-line description, a screenshot or GIF, setup steps and an architecture note.
