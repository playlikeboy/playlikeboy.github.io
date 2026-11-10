# Job-readiness plan

Goal: SDE, forward-deployed (FDE) and DevOps/platform internships and new-grad
roles at startups, YC companies and large companies such as Microsoft.

A portfolio does not get an offer by itself. It gets the résumé screen passed
and gives interviewers something real to ask about. The interview loop
(DSA, system design, behavioural) is still yours to win. This plan covers both.

## 1. Done in this pass

| Area | Change |
|------|--------|
| Positioning | Hero now says who you are (B.Tech CSE, BIT Mesra '28), the strongest proof (named merged PRs: gemini-cli, Preact, Editor.js) and what you are open to. One `h1` instead of two. |
| Role pages | `/roles/sde`, `/roles/fde`, `/roles/devops` — each lists linked evidence for that role. Send the matching link with every application. |
| Résumé | New `/resume` page and a regenerated one-page `resume.pdf` (text-selectable, ATS-safe headings). The old PDF pointed to `sh20raj.github.io` and `github.com/sh20raj`. |
| Experience | Home page now has Experience and Education sections (they were empty). |
| Credibility | Removed numbers nobody can verify (99.99% uptime, <40 ms scans, <150 ms retrieval, "0 breaches", "100% merged by Google"). The Gemini code block is labelled as an illustration, not the real diff. |
| Consistency | One set of numbers everywhere: 605+ tools, 4.3M+ requests / 213K+ visits in 30 days, ~5,000 participants, graduation 2028. |
| Links | 30+ canonical/OG URLs pointed at the old GitLab domain; all now point to `playlikeboy.github.io`. Removed the yellow GitLab banner. |
| Projects | Strongest first (Gemini CLI, SopKit, Bitotsav, CampusLoop). Removed the duplicate SopKit card and the placeholder "Baby" project. |
| Repo | Professional README; `llms.txt`, `resume.md` and `main.tex` updated to match. |

## 2. Confirm these facts (I could not verify them)

0. **The "79 external PRs merged" claim — removed.** GitHub's public search shows 4 merged PRs for `playlikeboy` (Preact, Editor.js, dsaloop, acm-bitmesra), and the old `SH20RAJ` account no longer exists, so nobody can check 79. The live widget on the home page also showed "4" right under a "79" headline. The site now names the PRs instead of counting them. If the old PRs are still attributed to you somewhere checkable, add them to `src/data/contributions.ts` and the count comes back by itself.
   - **Open gemini-cli #20778 in a private window.** I could not confirm the author shown there. If it shows your current username, good. If it shows `ghost` or someone else, remove the gemini-cli claim from the site and résumé — it is the first link every reviewer will click.
1. **Graduation year.** The résumé said 2028, the site said "2022 – 2026". I used **2028** everywhere. If wrong, fix `src/data/resume.tsx` and `src/app/resume/page.tsx`.
2. **Bitotsav '26 dates and title.** Shown as "Tech Lead, 2025 – 2026".
3. **Claims left out of the new résumé** because nothing in the repo backs them: "10+ hackathon wins", "1M+ monthly npm downloads", "300+ merged PRs", "15,000+ contributions". Add them back only with a link that proves each one.
4. **Bitotsav case study details** (HMAC-signed QR tokens, bloom filters on scanner devices, write-behind logging, rate limiting). Delete any line you cannot explain on a whiteboard for ten minutes — interviewers will ask.
5. **Client testimonials on the service pages** (`src/data/services.tsx`, initials only, e.g. "A.K."). If they are not real quotes from real clients, remove them. A recruiter who finds an invented testimonial stops trusting the rest of the site.
6. **Phone number.** Left off the web résumé and PDF on purpose (public site). Add it to the PDF you upload to applications if you want.

## 3. Next two weeks — highest return

- [ ] **GitHub profile**: pin 6 repos (gemini-cli fork or PR, sopkit, campusloop, netscopex, index-fast, debo). Add a profile README that links to the three role pages.
- [ ] **Get the in-review PRs merged**: Jaeger #10024, Kmesh #1977/#1983, Lexical, Radix. A merged CNCF PR is the strongest DevOps line you can have. Update `src/data/contributions.ts` and `src/data/roles.ts` when they land.
- [ ] **Write up the Gemini CLI fix properly**: replace the illustration with the real before/after diff and how you found the bug.
- [ ] **DSA**: 2 problems a day, one timed contest a week. Put your Codeforces rating / LeetCode count on the SDE page once it is a number you are proud of.
- [ ] **LinkedIn**: headline "CS @ BIT Mesra '28 · merged PRs in Google gemini-cli, Preact, Editor.js"; set the portfolio as the featured link.
- [ ] **Deploy and check** the live site on your phone after merging.

## 4. Closing the gaps, by role

**SDE (Microsoft and similar)**
- [ ] Core CS: OS, DBMS, networks, OOP — Microsoft interviews ask these directly.
- [ ] One project in C++, Java or C# with tests. The portfolio is almost all TypeScript.
- [ ] Add a short "Design" section to SopKit and CampusLoop: architecture diagram, one trade-off, one thing you would redo.
- [ ] Microsoft-specific: apply through the careers site **and** campus placement; the Engage / Explore programmes open around July–September. Ask a BIT Mesra alum at Microsoft for a referral with the SDE link.

**FDE (startups, YC)**
- [ ] One case study written from the customer's side: the problem in their words, what you shipped in week one, what changed for them. Bitotsav is the best candidate.
- [ ] A 2-minute Loom demo of Debo or IndexFast. Founders watch videos; they rarely read.
- [ ] Apply on workatastartup.com with the FDE link; write to founders directly with one line about their product and one about your closest project.

**DevOps / Platform**
- [ ] This is the thinnest track today. Build one infrastructure project in public: deploy NetScopeX on Kubernetes (kind or k3s) with Terraform, Prometheus + Grafana and a CI pipeline, and document one failure you injected and how the system recovered.
- [ ] Add a `Dockerfile` and CI test job to your top three repos.
- [ ] Consider CKA or AWS Cloud Practitioner only after the project above — the project matters more.
- [ ] Add Kubernetes / Terraform / AWS to the DevOps page **after** there is a repo that shows them.

## 5. Applying

- Send the role link, not the home page: `playlikeboy.github.io/roles/sde`, `/roles/fde`, `/roles/devops`.
- Tailor the top three résumé bullets to the job description; keep it one page.
- Track applications in a sheet: company, role, link sent, referral, date, status.
- Referrals convert far better than cold applications. Aim for 5 referral requests a week.
- Refresh `src/data/contributions.ts` whenever a PR merges, then run `bun run build && bun run resume:pdf`.

## 6. Site backlog (optional)

- Service, marketplace and design-studio pages are still published but no longer linked from the main navigation. Decide whether a freelance storefront belongs on the same domain as the job-seeking portfolio; if not, move it.
- `ACTION-PLAN.md`, `FULL-AUDIT-REPORT.md`, `todo.md` and `sh20raj_profile_research.md` are old working notes in the repo root — delete or move to `docs/`.
- Images in `public/images/design-studio` total about 25 MB; convert to WebP.
- Host the avatar locally instead of loading it from GitLab.
