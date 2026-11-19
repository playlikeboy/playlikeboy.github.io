// Role-specific landing pages (/roles/sde, /roles/fde, /roles/devops, /roles/ai,
// /roles/fullstack, /roles/founding).
// Send the matching link with an application so the reviewer sees the
// evidence for that role first.
//
// Keep this factual: every evidence item must link to something a reviewer
// can open. PR statuses were last checked on 2026-11-19 — refresh them
// together with src/data/contributions.ts.

export interface RoleEvidence {
  title: string;
  detail: string;
  href: string;
  status?: "merged" | "in review" | "live" | "in progress";
}

export interface Role {
  slug: string;
  short: string;
  title: string;
  headline: string;
  summary: string;
  lookingFor: string;
  evidence: RoleEvidence[];
  stack: string[];
  howIWork: string[];
}

export const roles: Role[] = [
  {
    slug: "sde",
    short: "SDE",
    title: "Software Development Engineer",
    headline: "I write code that passes review from people who don't know me.",
    summary:
      "Most of my proof is in other people's repositories: reading an unfamiliar codebase, finding the actual cause, writing the fix with tests, and getting it through maintainer review. Alongside that I build and run my own products for real users.",
    lookingFor:
      "SDE internships and new-grad roles on product or infrastructure teams. B.Tech CSE, BIT Mesra, graduating 2028.",
    evidence: [
      {
        title: "google-gemini/gemini-cli #20778 — cancellation bug in the core package",
        detail:
          "Cancelling a turn did not cancel the background chat-compression request. Traced where AbortSignal propagation stopped and threaded it through the execution and compression layers.",
        href: "/projects/gemini-cli",
        status: "merged",
      },
      {
        title: "preactjs/preact #5331 and codex-team/editor.js #3040",
        detail:
          "A type-definition fix in Preact (the list attribute on valid input types) and an inline-toolbar fix in Editor.js. Small, scoped changes in widely used libraries.",
        href: "https://github.com/preactjs/preact/pull/5331",
        status: "merged",
      },
      {
        title: "mofa-org/mofa #1577, #1587, #1594 — Rust agent framework",
        detail:
          "Replaced an unwrap() that panicked on a bad cron expression with real error handling, and marked public enums #[non_exhaustive] so new variants stop being breaking changes. Merged April 2026 (authored as @SH20RAJ).",
        href: "https://github.com/mofa-org/mofa/pull/1577",
        status: "merged",
      },
      {
        title: "Parser and UI edge cases in Lexical, micromark and Radix UI",
        detail:
          "Markdown import/ordered-list handling in Lexical, a CommonMark list-interruption case in micromark, and pointer/focus fixes in Radix Select and DismissableLayer.",
        href: "/#series",
        status: "in review",
      },
      {
        title: "SopKit — 605+ browser tools, 4.3M+ requests in 30 days",
        detail:
          "A client-side utility platform I built and run solo. Processing happens in the browser (WebAssembly and Web APIs), so there are no uploads and no server compute.",
        href: "/projects/sopkit",
        status: "live",
      },
      {
        title: "Data structures and algorithms",
        detail:
          "My coding-platform profiles in one place on Codolio, plus AlgoForge — an interview-prep platform I built around pattern-based problem sets.",
        href: "https://codolio.com/profile/sh20raj",
      },
    ],
    stack: ["TypeScript", "JavaScript", "C++", "Python", "Go", "Rust", "SQL", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Git"],
    howIWork: [
      "Reproduce first, then fix: every upstream PR starts from a failing case.",
      "Small diffs with tests, written so a reviewer can say yes quickly.",
      "I respond to review instead of defending the first draft.",
    ],
  },
  {
    slug: "fde",
    short: "FDE",
    title: "Forward Deployed Engineer",
    headline: "I ship in the user's environment, with their constraints, on their deadline.",
    summary:
      "Forward-deployed work is building next to the people who use the thing: unclear requirements, messy data, and a date that does not move. That is how I have worked on every project that had real users on the other side.",
    lookingFor:
      "Forward-deployed, solutions and founding-engineer internships or new-grad roles at startups, where I own a customer problem end to end.",
    evidence: [
      {
        title: "Bitotsav '26 — tech lead for a ~5,000-participant festival",
        detail:
          "The users were organisers, gate volunteers and college administration. The constraints were no-network zones, bad data and last-minute changes. I built the entry, team, points and admin systems and ran them live during the event.",
        href: "/projects/bitotsav-2026",
        status: "live",
      },
      {
        title: "Kishan AI — an assistant farmers reach through Telegram",
        detail:
          "Crop-disease diagnosis from photos, weather, mandi prices and scheme lookup, delivered where the users already are instead of in a new app. Shortlisted in the Top 500 of the AICTE Productization Fellowship 2025.",
        href: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM",
      },
      {
        title: "AI systems wired into real workflows",
        detail:
          "Daksha is an assistant that answers questions about your own journal, voice notes and videos, with links to its sources. IndexFast lets an AI agent run search indexing end to end through an MCP server, REST API or CLI.",
        href: "/projects/daksha",
        status: "live",
      },
      {
        title: "Dhwani — delivered for a client, not for myself",
        detail:
          "The music society's site: requirements from a non-technical team, a fixed event date, design and build end to end.",
        href: "https://dhwanibitmesra.in",
        status: "live",
      },
      {
        title: "Explaining technical work to non-engineers",
        detail:
          "I write publicly on Dev.to and have presented system designs to college leadership. Clear writing is most of the job when the user is not an engineer.",
        href: "https://dev.to/sh20raj",
      },
    ],
    stack: ["TypeScript", "Python", "Next.js", "FastAPI", "PostgreSQL", "OpenAI / Claude / Gemini APIs", "RAG", "MCP", "Cloudflare Workers", "SQL"],
    howIWork: [
      "Start from the user's day, not from the architecture.",
      "Ship the smallest thing that works on site, then harden it.",
      "Design for the failure cases first: no network, wrong data, a changed plan.",
    ],
  },
  {
    slug: "devops",
    short: "DevOps",
    title: "DevOps / Platform Engineer",
    headline: "I care about what happens after the merge: deploys, failure modes and observability.",
    summary:
      "My infrastructure experience comes from two places: contributing to cloud-native projects (tracing and service mesh), and deploying and operating my own services on edge and container platforms with CI/CD that I wrote.",
    lookingFor:
      "DevOps, platform, SRE and infrastructure internships or new-grad roles.",
    evidence: [
      {
        title: "jaegertracing/jaeger #10024 — sampling strategy validation",
        detail:
          "Rejects out-of-range parameters in file-based sampling strategies instead of accepting a config that silently misbehaves. Go, in the CNCF tracing project.",
        href: "https://github.com/jaegertracing/jaeger/pull/10024",
        status: "in review",
      },
      {
        title: "kmesh-net/kmesh #1977, #1983, #1987, #1989 — service-mesh dataplane",
        detail:
          "Four Go fixes, each with a filed issue: a nil-pointer panic in the CNI plugin when CNI_ARGS cannot be loaded, DNS refresh loops duplicated per xDS update, command success judged by stderr instead of exit status, and a case-sensitive label check that disagreed with the daemon.",
        href: "https://github.com/kmesh-net/kmesh/pull/1977",
        status: "in review",
      },
      {
        title: "CI/CD for this site — build, deploy and mirror on every push",
        detail:
          "GitHub Actions builds the static export and deploys it to Pages with scoped permissions and a concurrency group. A second workflow mirrors main to GitLab, which runs its own Pages pipeline.",
        href: "https://github.com/playlikeboy/playlikeboy.github.io/tree/main/.github/workflows",
        status: "live",
      },
      {
        title: "Services in production on Cloudflare Workers",
        detail:
          "IndexFast, RUXs and ScriptlyStore (Next.js via OpenNext), plus MCP Pure and Solus (Hono), run on Workers with Neon Postgres, Drizzle, R2 and cron triggers — deployed and operated by me.",
        href: "https://mcppure.shraj.workers.dev/",
        status: "live",
      },
      {
        title: "Bitotsav '26 — operating a system during a live event",
        detail:
          "Redis in front of PostgreSQL for hot paths, entry scanning that degrades gracefully without network, and on-call through the festival.",
        href: "/projects/bitotsav-2026",
        status: "live",
      },
      {
        title: "NetScopeX — observability platform",
        detail:
          "A metrics and traces platform in strict TypeScript on PostgreSQL, built to understand the reliability tooling I contribute to.",
        href: "https://github.com/playlikeboy/netscopex",
        status: "in progress",
      },
    ],
    stack: ["Linux", "Bash", "Docker", "GitHub Actions", "GitLab CI", "Cloudflare Workers", "PostgreSQL", "Redis", "Go", "TypeScript"],
    howIWork: [
      "Fail loudly on bad config instead of running with it.",
      "Automate the deploy before the second deploy.",
      "Assume the network will fail and decide what the system does then.",
    ],
  },
  {
    slug: "ai",
    short: "AI",
    title: "AI Engineer",
    headline: "I build LLM systems that run in production, and I fix bugs inside the agent tools other engineers use.",
    summary:
      "Two kinds of evidence. Upstream, my fixes are merged in Google's gemini-cli, T3 Code and the MoFA agent framework. In my own products, I run retrieval, MCP servers and agent-facing APIs that real users and real agents call.",
    lookingFor:
      "AI engineer, applied AI and LLM product internships or new-grad roles, at AI startups or AI teams in larger companies.",
    evidence: [
      {
        title: "google-gemini/gemini-cli #20778 — cancellation inside an agent CLI",
        detail:
          "Pressing Ctrl+C ended the turn but left the chat-compression model calls running. I threaded the turn's AbortSignal into compression in the client and in subagents.",
        href: "/blog/cancelling-a-turn-in-gemini-cli",
        status: "merged",
      },
      {
        title: "pingdotgg/t3code #23775 — no more phantom “keybindings updated” toasts",
        detail:
          "Windows file-access events made the server announce a keybindings change on every revalidation. It now compares the resolved state structurally and only emits when something actually changed.",
        href: "https://github.com/pingdotgg/t3code/pull/23775",
        status: "merged",
      },
      {
        title: "IndexFast — an MCP server built for agents first",
        detail:
          "Protocol version negotiation, tool failures returned as readable results, every argument accepting what an agent already knows, and one core shared with the REST API and CLI. Runs on Cloudflare Workers.",
        href: "/blog/an-mcp-server-agents-can-use",
        status: "live",
      },
      {
        title: "Daksha — an assistant that remembers a person's own life",
        detail:
          "Journals by writing, voice or video, answers with links to the entries used, voice calls with characters, connected apps with approval and an Android app. Early version, built solo end to end.",
        href: "/projects/daksha",
        status: "live",
      },
      {
        title: "mofa-org/mofa #1577, #1587, #1594 — Rust agent framework",
        detail:
          "Replaced a panicking unwrap() in cron parsing with real errors, and made public enums #[non_exhaustive] so new variants stop being breaking changes.",
        href: "https://github.com/mofa-org/mofa/pull/1577",
        status: "merged",
      },
      {
        title: "OmniAudit-GEO — Adobe University Hackathon 2026, Round 3",
        detail:
          "Audits how visible a brand is to AI search engines and agents and turns the findings into a readiness score. CLI, FastAPI service and Streamlit app; team of two.",
        href: "https://github.com/playlikeboy/omniaudit",
      },
    ],
    stack: ["TypeScript", "Python", "Rust", "OpenAI / Claude / Gemini APIs", "RAG", "Vector search", "Model Context Protocol", "AI SDK", "FastAPI", "Cloudflare Workers"],
    howIWork: [
      "Treat the model's output as untrusted input, and design for the call that fails.",
      "Write tool responses a model can act on: what happened, and what to do next.",
      "Evaluate on real data before tuning prompts.",
    ],
  },
  {
    slug: "fullstack",
    short: "Full-stack",
    title: "Full-Stack / Product Engineer",
    headline: "I take a product from an empty repo to people using it, and own every layer in between.",
    summary:
      "I've shipped and run student, commerce and developer products alone: schema, API, UI, payments, deploys and support. Upstream, my frontend fixes are merged in Preact and Editor.js, with more in review at Lexical and Radix UI.",
    lookingFor:
      "Full-stack, product and frontend engineering internships or new-grad roles, from early-stage startups to large product teams.",
    evidence: [
      {
        title: "CampusLoop — a student network gated by college email",
        detail:
          "Sign-up accepts the email domains of 1,350+ Indian colleges. Feeds, marketplace, polls and time capsules on Next.js, PostgreSQL, Cloudflare Workers and WebSockets.",
        href: "/projects/campusloop",
        status: "live",
      },
      {
        title: "RUXs — daily subscriptions for neighbourhood vendors",
        detail:
          "A household app, a merchant panel and an admin console in one Next.js app: skip-or-confirm with a cutoff, driver run sheets, a shared ledger and one monthly UPI bill.",
        href: "/projects/ruxs",
        status: "live",
      },
      {
        title: "ScriptlyStore — payments done on the server",
        detail:
          "Razorpay checkout where the server recomputes every price in integer cents, downloads that stream only after a verified purchase, and AES-256-GCM payment links.",
        href: "/projects/scriptly",
        status: "live",
      },
      {
        title: "SopKit — 605+ browser tools, 4.3M+ requests in 30 days",
        detail: "File tools that run on the visitor's device, so there are no uploads and no server to pay for. Built and run solo.",
        href: "/projects/sopkit",
        status: "live",
      },
      {
        title: "Frontend fixes in Preact, Editor.js, Lexical and Radix UI",
        detail:
          "Merged: Preact's input list-attribute types and Editor.js's inline toolbar. In review: Lexical markdown import, Radix Select and DismissableLayer focus handling.",
        href: "/#series",
        status: "merged",
      },
    ],
    stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Hono", "PostgreSQL", "Drizzle", "Redis", "Razorpay", "Cloudflare Workers", "Playwright"],
    howIWork: [
      "Money and data correctness before visual polish.",
      "Server-first: the database does the filtering, the client only handles what's interactive.",
      "Ship a thin slice to real users, then widen it.",
    ],
  },
  {
    slug: "founding",
    short: "Founding",
    title: "Founding Engineer",
    headline: "I've built products from zero and run them alone, and I've led a team through a live event.",
    summary:
      "I found and run my own products as the only engineer, so I also own billing, deploys, outages and support. In college I went from one member of the Bitotsav web team to leading its whole platform a year later, and I'm Joint Secretary of the ACM chapter.",
    lookingFor:
      "Founding and early engineer roles at YC-stage startups, or zero-to-one teams inside larger companies.",
    evidence: [
      {
        title: "Bitotsav '26 — tech lead, ~5,000 participants",
        detail:
          "Took requirements from organisers, volunteers and administration, built the platform, and ran it live through the festival, including entry scanning that worked without network.",
        href: "/projects/bitotsav-2026",
        status: "live",
      },
      {
        title: "IndexFast — founder and sole engineer",
        detail:
          "Product, pricing and billing (Razorpay prepaid plans), an agent-first MCP server, REST API and npm CLI, and a Workers cron that runs the submission queue.",
        href: "/projects/indexfast",
        status: "live",
      },
      {
        title: "RUXs — a business model, not just an app",
        detail:
          "Vendors pay and households use it free, with no account needed. Launch scoped to tiffin and water-can vendors in one neighbourhood cluster before widening.",
        href: "/projects/ruxs",
        status: "live",
      },
      {
        title: "CampusLoop, ScriptlyStore and Daksha",
        detail:
          "Three more products I started and run: a verified campus network, a code marketplace, and an assistant that remembers your life, launched on Product Hunt.",
        href: "/projects",
        status: "live",
      },
      {
        title: "ACM BIT Mesra — Joint Secretary, 2026–27",
        detail: "Built the chapter's student developer platform with verified identities and rankings.",
        href: "https://github.com/acm-bitmesra/acm-bitmesra.github.io/pull/3",
        status: "merged",
      },
    ],
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle", "Cloudflare Workers", "Razorpay", "MCP", "Python", "Go"],
    howIWork: [
      "Talk to the user before writing the schema.",
      "Scope the launch to one group I can actually serve, then widen.",
      "Own the outcome: if it breaks at 2 a.m., it's mine to fix.",
    ],
  },
];

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
