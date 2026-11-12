# LinkedIn rewrite — linkedin.com/in/sh20raj

**Status: draft built from verified sources (resume, portfolio, GitHub).** LinkedIn needs a login, so I couldn't read your current
headline, About or experience. The before/after audit and the buzzword scan need your current text. Paste a "Save to PDF" export or the
section text, and I'll score it and tighten these blocks against it. Everything below sticks to facts verified in this audit; nothing is invented.

One thing to check first: your post URLs use two different slugs, `linkedin.com/posts/sh20raj_…` and
`linkedin.com/posts/shaswatraj_…` (the Bitotsav post in the old README). If you changed your custom URL, make sure
`linkedin.com/in/sh20raj` still resolves, because the resume, site and README all point there.

## Audit of the live profile (2026-11-12)

Read via the LinkedIn API through Composio (connection removed afterwards). The API returns only name, headline, photo and URL; Experience, About and Skills need the "Save to PDF" export or a public-profile read (Composio's scraper was out of credits).

**Current headline (145 chars):**
`CSE @ BIT Mesra - ACM JS | Building CampusLoop 🚀 & Shipping Web Products | Full-Stack Developer | AI + SaaS | Open Source | Community Builder`

| Check | Finding | Fix |
|---|---|---|
| Positioning | Says Full-Stack / AI + SaaS; resume, site and README now say SDE / DevOps | Use headline A below |
| Proof | No proof a stranger can check (no gemini-cli, Kmesh, Bitotsav numbers) | Put one checkable item in the headline |
| "ACM JS" | Recruiters won't decode "JS" (reads as JavaScript) | Spell out "Joint Secretary, ACM BIT Mesra" |
| Vague words | "Shipping Web Products", "Community Builder", "AI + SaaS" are not searchable proof | Replace with role keywords + evidence |
| Emoji | 🚀 adds nothing and breaks some ATS/LinkedIn search snippets | Drop |
| Former name | Profile has a "former name" field set to "Sh" | Settings → Name → clear "Former name" |
| URL | Custom URL `sh20raj` resolves; post slugs also show `shaswatraj_` | Keep `sh20raj` |

**Items to add to the Experience section** (all now on the resume and in /proof):
- Joint Secretary, ACM BIT Mesra — 2026–27
- Bitotsav — Web team (2025), Tech Lead (2026)
- Adobe University Hackathon 2026 — reached Round 3 with OmniAudit-GEO (Honors & awards)

---

## Headline (≤220 characters)

**A, recommended (186 chars):**
```
Software Engineer | SDE · DevOps · Open Source | Merged in Google's gemini-cli & MoFA | Tech Lead, Bitotsav '26 (~5,000) | Joint Secretary, ACM BIT Mesra | CSE '28
```

**B, DevOps-leaning (163 chars):**
```
Software Engineer | SDE · DevOps · Open Source | Go fixes in Kmesh & Jaeger, merged in gemini-cli & MoFA | Built SopKit: 4.3M requests in 30 days | BIT Mesra '28
```

**C, outcome-first (188 chars):**
```
Software Engineer | SDE · DevOps · Open Source | I ship software real users rely on: ~5,000-person festival platform, 605-tool browser suite | Merged upstream in gemini-cli, Preact, MoFA
```

Start with A. It puts the recruiter search terms first ("Software Engineer", "SDE", "DevOps") and the proof a stranger can check
(Google's repo) right after them. Switch to B for a month if most of what you apply to is platform/SRE.

---

## About (≈190 words, first person)

```
My code has been merged into Google's gemini-cli, Preact, Editor.js and MoFA by maintainers who had never heard of me. That's the bar I hold my own projects to.

I'm a B.Tech CSE student at BIT Mesra (graduating 2028) and I build software that real people depend on:

• Bitotsav '26: I was tech lead for a festival of ~5,000 participants. I built registration, team and points workflows, the admin panel and signed-QR entry that keeps working in no-network zones, then ran it live through the event.
• SopKit: 605+ browser tools that process files on the user's device. I built and run it alone; it served 4.3M+ requests and 213K+ visits in 30 days.
• Open source: merged fixes in gemini-cli (TypeScript) and MoFA (Rust); Go fixes in review at Kmesh and Jaeger, each starting from a bug I reproduced and filed.

Stack: TypeScript, Go, Python, Node.js, PostgreSQL, Redis, Docker, GitHub Actions, Cloudflare Workers, Linux.

I'm looking for SDE, forward-deployed and DevOps/platform internships and new-grad roles, in India or remote. If you're hiring for one, my portfolio has a page of evidence per role: playlikeboy.github.io. Or email sh20raj@gmail.com.
```

---

## Experience (titles and dates match the resume word for word)

```
Tech Lead
Bitotsav '26 — BIT Mesra annual festival · Volunteer / Leadership
2025 – 2026 · Ranchi, India

• Led and built the tech platform for ~5,000 participants: website, registration, team workflows, points system, admin panel and internal tools.
• Built signed-QR entry verification with a scanner that keeps working in no-network zones; Redis in front of PostgreSQL for hot paths.
• Ran live operations through the festival.
Skills: Next.js · PostgreSQL · Redis · Cloudflare
```

```
Joint Secretary
ACM BIT Mesra (student chapter)
2026 – 2027 · Ranchi, India

• Built the chapter's student developer platform with verified identities and rankings (acm-bitmesra.github.io #3, merged).
```

```
Open Source Contributor
Self-employed / Open source
2022 – Present

• Merged: google-gemini/gemini-cli #20778 (turn cancellation now reaches in-flight chat-compression requests).
• Merged: mofa-org/mofa #1577, #1587, #1594 (Rust: panic-free cron parsing, #[non_exhaustive] public enums); preactjs/preact #5331; codex-team/editor.js #3040.
• In review: kmesh-net/kmesh (Go: CNI nil-pointer panic, duplicate DNS refresh loops) and jaegertracing/jaeger #10024 (reject out-of-range sampling config).
Skills: TypeScript · Go · Rust · Git
```

Add SopKit, CampusLoop, IndexFast and Kishan AI under **Projects** (not Experience), each with the live link and the one-line description from the resume.

**Education:** Birla Institute of Technology, Mesra — Bachelor of Technology, Computer Science & Engineering — 2024 – 2028 (use your real start year). Add CGPA if it's 7.5 or higher.

**Honors:** AICTE Productization Fellowship 2025 — national Top 500 (Kishan AI). Apify hackathon prize.

---

## Featured (in this order)

1. **Link:** https://playlikeboy.github.io — "Portfolio, with a page of evidence each for SDE, FDE and DevOps roles"
2. **Link:** https://github.com/google-gemini/gemini-cli/pull/20778 — "Merged fix in Google's gemini-cli"
3. **Link:** https://playlikeboy.github.io/projects/sopkit — "SopKit: 605+ browser tools, 4.3M requests in 30 days"
4. **Post:** your Bitotsav '26 post (activity 7442608760193216512)

---

## Skills (top 50, ordered by recruiter search value for SDE / DevOps; only skills your work shows)

```
Software Development, TypeScript, JavaScript, Go (Programming Language), Python, Node.js, React.js, Next.js, PostgreSQL, Redis,
SQL, Docker, Linux, GitHub Actions, Continuous Integration and Continuous Delivery (CI/CD), Git, REST APIs, Data Structures,
Algorithms, C++, Rust (Programming Language), Cloudflare Workers, Web Development, Back-End Web Development, Full-Stack Development,
Open-Source Software, Debugging, Unit Testing, Jest, Bash, Shell Scripting, WebSockets, Express.js, Hono, FastAPI, Drizzle ORM,
Large Language Models (LLM), Retrieval-Augmented Generation (RAG), Model Context Protocol, OpenAI API, Vector Databases,
WebAssembly, Tailwind CSS, Search Engine Optimization (SEO), Technical Writing, GitLab CI, Distributed Tracing, Service Mesh,
Observability, Problem Solving
```
Pin these three: **Software Development**, **Go**, **CI/CD**.

---

## Custom URL, banner, Open to Work

- **Custom URL:** keep `linkedin.com/in/sh20raj`, because it's printed on the resume and linked everywhere. Don't change it during a job search.
- **Banner (1584×396):** plain dark background; left side: "Software Engineer · SDE · DevOps · Open Source"; right side: three small proof lines
  ("Merged: gemini-cli · MoFA · Preact", "~5,000-person festival platform", "playlikeboy.github.io"). No stock imagery.
- **Open to Work:** set to **Recruiters only**, not the public green frame. Job titles: Software Engineer Intern, Software Development Engineer,
  DevOps Engineer, Platform Engineer, Site Reliability Engineer, Forward Deployed Engineer. Locations: Bengaluru, Hyderabad, Pune, Gurugram, Remote.
  Start date: "Flexible". Employment types: Internship, Full-time.
