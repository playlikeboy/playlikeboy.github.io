import type { ReactNode } from "react";
import { DATA } from "@/data/resume";

// One-page resumes. /resume is the general version; /resume/{sde,fde,devops}
// reorder and re-weight the same facts for one role. Nothing here may appear
// in one variant that is not true in all of them. Each is printed to a PDF in
// public/ by scripts/resume-pdf.mjs.

export type Variant = "general" | "sde" | "fde" | "devops";

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="underline decoration-neutral-400 underline-offset-2">
      {children}
    </a>
  );
}

const PRS = {
  gemini: <A href="https://github.com/google-gemini/gemini-cli/pull/20778">google-gemini/gemini-cli #20778</A>,
  mofa: (
    <>
      <A href="https://github.com/mofa-org/mofa/pull/1577">mofa-org/mofa #1577</A>,{" "}
      <A href="https://github.com/mofa-org/mofa/pull/1587">#1587</A>, <A href="https://github.com/mofa-org/mofa/pull/1594">#1594</A>
    </>
  ),
  preact: <A href="https://github.com/preactjs/preact/pull/5331">preactjs/preact #5331</A>,
  editorjs: <A href="https://github.com/codex-team/editor.js/pull/3040">codex-team/editor.js #3040</A>,
  kmesh: <A href="https://github.com/kmesh-net/kmesh/pulls?q=author%3Aplaylikeboy">kmesh-net/kmesh</A>,
  jaeger: <A href="https://github.com/jaegertracing/jaeger/pull/10024">jaegertracing/jaeger #10024</A>,
};

const OSS = {
  gemini: <>Merged: {PRS.gemini}, turn cancellation now reaches in-flight chat-compression requests (AbortSignal threaded through the execution layers).</>,
  mofa: <>Merged: {PRS.mofa} (Rust): replaced a panicking unwrap() in cron parsing; #[non_exhaustive] public enums. Also {PRS.preact} and {PRS.editorjs}.</>,
  review: <>In review: Go fixes in {PRS.kmesh} (CNI nil-pointer panic, duplicate DNS refresh loops) and {PRS.jaeger} (reject out-of-range sampling config); 14 open upstream PRs in all, each from a reproduced, filed issue.</>,
  infra: <>In review: four Go fixes in the {PRS.kmesh} service-mesh dataplane: a nil-pointer panic in the CNI plugin, DNS refresh loops duplicated per xDS update, success judged by stderr instead of exit status, and a label check that disagreed with the daemon.</>,
  jaeger: <>In review: {PRS.jaeger} rejects out-of-range sampling parameters at startup and on hot reload instead of serving them to SDKs; filed three more Jaeger SPM metrics bugs.</>,
  merged: <>Merged: {PRS.gemini} (TypeScript), {PRS.mofa} (Rust), {PRS.preact}, {PRS.editorjs}.</>,
};

const BITOTSAV = {
  build: "Led and built the tech platform for ~5,000 participants: website, registration, team workflows, points system, admin panel and internal tools.",
  qr: "Built signed-QR entry verification with a scanner that keeps working in no-network zones; Redis in front of PostgreSQL for hot paths.",
  ops: "Ran live operations through the festival: on call for organisers and gate volunteers, fixing data and flow problems as they came up.",
  users: "Gathered requirements from organisers, volunteers and college administration, and shipped changes against a date that did not move.",
};

const P = {
  sopkit: { name: "SopKit", stack: "Next.js, TypeScript, WebAssembly", link: "sopkit.github.io", points: ["605+ privacy-first browser tools that process files client-side, with no uploads and no server compute.", "4.3M+ requests and 213K+ visits in 30 days, built and operated solo."] },
  sopkitInfra: { name: "SopKit", stack: "Static export, GitHub Pages, WebAssembly", link: "sopkit.github.io", points: ["605+ tools served as static files with zero server compute; 4.3M+ requests and 213K+ visits in 30 days, operated solo."] },
  campusloop: { name: "CampusLoop", stack: "Next.js, PostgreSQL, Cloudflare Workers, WebSockets", link: "campusloop.space", points: ["Student network gated by college email; sign-up accepts the domains of 1,350+ Indian colleges. Feeds, marketplace, polls and time capsules."] },
  debo: { name: "Debo", stack: "Next.js, TypeScript, vector search, OpenAI", link: "debo.life", points: ["Personal AI memory: ingests notes, links and audio, embeds them, and retrieves context through a chat interface. Built solo."] },
  indexfast: { name: "IndexFast and MCP Pure", stack: "TypeScript, Hono, Cloudflare Workers, MCP", link: "indexfast.co", points: ["MCP servers on the edge; IndexFast submits URLs to Google, Bing and IndexNow from inside an IDE."] },
  indexfastInfra: { name: "IndexFast, MCP Pure, Solus", stack: "Cloudflare Workers, Hono, Neon Postgres, Drizzle, R2", link: "indexfast.co", points: ["Services I deploy and operate on Cloudflare Workers; IndexFast submits URLs to Google, Bing and IndexNow from an IDE over MCP."] },
  portfolio: { name: "playlikeboy.github.io", stack: "GitHub Actions, GitHub Pages, GitLab CI", link: "playlikeboy.github.io/status", points: ["CI/CD that builds and deploys on push with scoped permissions, mirrors to GitLab, and runs hourly uptime checks on my products with 30 days of history."] },
  kishan: { name: "Kishan AI", stack: "Python, computer vision, Telegram Bot API", link: "", points: ["Assistant for farmers: crop-disease diagnosis from photos, weather and mandi prices. Top 500 nationally, AICTE Productization Fellowship 2025."] },
  kishanFde: { name: "Kishan AI", stack: "Python, computer vision, Telegram Bot API", link: "", points: ["Built for farmers where they already are (Telegram, not a new app): crop-disease diagnosis from photos, weather and mandi prices. AICTE Productization Fellowship 2025, national Top 500."] },
  dhwani: { name: "Dhwani, BIT Mesra music society", stack: "Next.js, TypeScript", link: "dhwanibitmesra.in", points: ["Delivered the society's site for a non-technical team against a fixed event date: requirements, design and build end to end."] },
};

type Project = (typeof P)[keyof typeof P];

interface Spec {
  headline: string;
  skills: [string, string][];
  bitotsav: string[];
  oss: ReactNode[];
  projects: Project[];
}

const SPECS: Record<Variant, Spec> = {
  general: {
    headline: "Software Engineer · SDE / DevOps · Merged upstream in gemini-cli, MoFA, Preact and Editor.js",
    skills: [
      ["Languages", "TypeScript, JavaScript, Go, Rust, C++, Python, SQL, Bash"],
      ["Backend", "Node.js, Express, Hono, FastAPI, PostgreSQL, Redis, REST, WebSockets"],
      ["Infrastructure", "Docker, CI/CD (GitHub Actions, GitLab CI), Cloudflare Workers, Linux"],
      ["Frontend", "React, Next.js, Tailwind CSS, WebAssembly"],
      ["AI", "OpenAI / Claude / Gemini APIs, RAG, vector search, Model Context Protocol"],
    ],
    bitotsav: [BITOTSAV.build, BITOTSAV.qr, BITOTSAV.ops],
    oss: [OSS.gemini, OSS.mofa, OSS.review],
    projects: [P.sopkit, P.campusloop, P.debo, P.indexfast, P.kishan],
  },
  sde: {
    headline: "Software Development Engineer · TypeScript, Go, C++ · Merged upstream in gemini-cli, MoFA, Preact and Editor.js",
    skills: [
      ["Languages", "TypeScript, JavaScript, C++, Go, Rust, Python, SQL"],
      ["CS fundamentals", "Data structures & algorithms, operating systems, DBMS, computer networks, OOP"],
      ["Backend", "Node.js, Express, Hono, FastAPI, PostgreSQL, Redis, REST, WebSockets"],
      ["Frontend", "React, Next.js, Tailwind CSS, WebAssembly"],
      ["Tools", "Git, Docker, GitHub Actions, Jest, Linux"],
    ],
    bitotsav: [BITOTSAV.build, BITOTSAV.qr, BITOTSAV.ops],
    oss: [OSS.gemini, OSS.mofa, OSS.review],
    projects: [P.sopkit, P.campusloop, P.debo, P.indexfast, P.kishan],
  },
  fde: {
    headline: "Forward Deployed Engineer · builds in the user's environment · Tech lead, Bitotsav '26 (~5,000 participants)",
    skills: [
      ["Languages", "TypeScript, Python, Go, SQL, Bash"],
      ["Product & backend", "Next.js, Node.js, FastAPI, PostgreSQL, Redis, REST, WebSockets"],
      ["AI", "OpenAI / Claude / Gemini APIs, RAG, vector search, Model Context Protocol"],
      ["Deploy", "Cloudflare Workers, Docker, GitHub Actions, Linux"],
    ],
    bitotsav: [BITOTSAV.users, BITOTSAV.build, BITOTSAV.qr, BITOTSAV.ops],
    oss: [OSS.gemini, OSS.mofa],
    projects: [P.kishanFde, P.dhwani, P.indexfast, P.debo, P.sopkit],
  },
  devops: {
    headline: "DevOps / Platform Engineer · Go, Linux, Docker, CI/CD · Fixes in Kmesh (service mesh) and Jaeger (tracing)",
    skills: [
      ["Infrastructure", "Linux, Docker, CI/CD (GitHub Actions, GitLab CI), Cloudflare Workers, GitHub Pages"],
      ["Languages", "Go, Bash, TypeScript, Python, Rust, SQL"],
      ["Data & runtime", "PostgreSQL, Redis, Node.js, Hono"],
      ["Observability & mesh", "Jaeger (tracing, sampling, SPM), Kmesh / Istio ambient (contributions)"],
    ],
    bitotsav: [BITOTSAV.ops, BITOTSAV.qr, BITOTSAV.build],
    oss: [OSS.infra, OSS.jaeger, OSS.merged],
    projects: [P.portfolio, P.indexfastInfra, P.sopkitInfra, P.campusloop],
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-4">
      <h2 className="font-sans text-[11px] font-bold uppercase tracking-normal border-b border-neutral-300 pb-0.5 mb-1.5">{title}</h2>
      {children}
    </section>
  );
}

export function ResumeDocument({ variant }: { variant: Variant }) {
  const spec = SPECS[variant];
  return (
    <article className="font-sans bg-white text-[12.5px] leading-[1.42] text-neutral-900 print:text-black print:text-[11.5px] print:leading-[1.42] [&_h1]:font-sans [&_h1]:tracking-tight">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{DATA.name}</h1>
        <p className="mt-0.5 font-semibold">{spec.headline}</p>
        <p className="mt-0.5">
          Ranchi, India · <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a> ·{" "}
          <a href={DATA.url}>playlikeboy.github.io</a> · <a href="https://github.com/playlikeboy">github.com/playlikeboy</a> ·{" "}
          <a href="https://linkedin.com/in/sh20raj">linkedin.com/in/sh20raj</a>
        </p>
      </div>

      <Section title="Education">
        <div className="flex justify-between gap-4">
          <p>
            <strong>Birla Institute of Technology, Mesra</strong> — B.Tech, Computer Science &amp; Engineering
          </p>
          <p className="shrink-0">Expected May 2028</p>
        </div>
        {variant !== "sde" && (
          <p>
            Coursework: Data Structures &amp; Algorithms, Operating Systems, Database Management Systems, Computer Networks,
            Object-Oriented Programming, Software Engineering.
          </p>
        )}
      </Section>

      <Section title="Skills">
        {spec.skills.map(([label, value]) => (
          <p key={label}>
            <strong>{label}:</strong> {value}
          </p>
        ))}
      </Section>

      <Section title="Experience">
        <div className="mb-1.5 break-inside-avoid">
          <div className="flex justify-between gap-4">
            <p>
              <strong>Bitotsav &apos;26 — BIT Mesra annual festival</strong> — Tech Lead
            </p>
            <p className="shrink-0">2025 – 2026</p>
          </div>
          <ul className="list-disc pl-4">
            {spec.bitotsav.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mb-1.5 break-inside-avoid">
          <div className="flex justify-between gap-4">
            <p>
              <strong>Open source</strong> — Contributor
            </p>
            <p className="shrink-0">2022 – Present</p>
          </div>
          <ul className="list-disc pl-4">
            {spec.oss.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Projects">
        {spec.projects.map((item) => (
          <div key={item.name} className="mb-1.5 break-inside-avoid">
            <div className="flex justify-between gap-4">
              <p>
                <strong>{item.name}</strong> — <em>{item.stack}</em>
              </p>
              {item.link && (
                <a href={`https://${item.link}`} className="shrink-0">
                  {item.link}
                </a>
              )}
            </div>
            <ul className="list-disc pl-4">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Honors">
        <ul className="list-disc pl-4">
          <li>AICTE Productization Fellowship 2025 — shortlisted in the national Top 500 (Kishan AI).</li>
          <li>Apify hackathon — prize ($100) for a production web-scraping actor.</li>
          <li>Technical writing on Dev.to, 45K+ followers.</li>
        </ul>
      </Section>
    </article>
  );
}

export const VARIANTS: { slug: Exclude<Variant, "general">; title: string; pdf: string }[] = [
  { slug: "sde", title: "Software Development Engineer", pdf: "/resume-sde.pdf" },
  { slug: "fde", title: "Forward Deployed Engineer", pdf: "/resume-fde.pdf" },
  { slug: "devops", title: "DevOps / Platform Engineer", pdf: "/resume-devops.pdf" },
];
