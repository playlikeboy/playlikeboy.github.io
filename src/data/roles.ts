// Role-specific landing pages (/roles/sde, /roles/fde, /roles/devops).
// Send the matching link with an application so the reviewer sees the
// evidence for that role first.
//
// Keep this factual: every evidence item must link to something a reviewer
// can open. PR statuses were last checked on 2026-11-05 — refresh them
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
        title: "Parser and UI edge cases in Lexical, micromark and Radix UI",
        detail:
          "Markdown import/ordered-list handling in Lexical, a CommonMark list-interruption case in micromark, and pointer/focus fixes in Radix Select and DismissableLayer.",
        href: "/#open-source",
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
          "Competitive programming on Codeforces, plus AlgoForge — an interview-prep platform I built around pattern-based problem sets.",
        href: "https://codeforces.com/profile/sh20raj",
      },
    ],
    stack: ["TypeScript", "JavaScript", "C++", "Python", "SQL", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Git"],
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
          "Debo is a retrieval pipeline over personal notes, links and audio. IndexFast is an MCP server that submits URLs to Google, Bing and IndexNow from inside an IDE.",
        href: "/projects/debo",
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
        title: "kmesh-net/kmesh #1977 and #1983 — service-mesh dataplane tooling",
        detail:
          "Decide command success by exit status rather than stderr output, and match the dataplane-mode label the same way the daemon does. Go.",
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
          "IndexFast, MCP Pure and Solus run on Workers with Hono, Neon Postgres, Drizzle and R2 — deployed and operated by me.",
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
];

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
