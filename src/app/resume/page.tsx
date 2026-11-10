import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import { DATA } from "@/data/resume";

// One-page résumé. public/resume.pdf is printed from this page, so edit the
// content here and regenerate the PDF with `bun run resume:pdf`.

export const metadata: Metadata = {
  title: { absolute: `Résumé — ${DATA.name}` },
  description:
    "One-page résumé of Shaswat Raj: B.Tech CSE at BIT Mesra (2028), open-source contributor, and builder of production web, AI and infrastructure systems.",
  alternates: { canonical: `${DATA.url}/resume` },
};

const skills: [string, string][] = [
  ["Languages", "TypeScript, JavaScript, C++, Python, Go, SQL, Bash"],
  ["Backend", "Node.js, Express, Hono, FastAPI, PostgreSQL, Redis, REST, WebSockets"],
  ["Infrastructure", "Docker, GitHub Actions, GitLab CI, Cloudflare Workers, Linux"],
  ["Frontend", "React, Next.js, Tailwind CSS, WebAssembly"],
  ["AI", "OpenAI / Claude / Gemini APIs, RAG, vector search, Model Context Protocol"],
];

const experience = [
  {
    org: "Bitotsav '26 — BIT Mesra annual festival",
    role: "Tech Lead",
    when: "2025 – 2026",
    points: [
      "Led and built the tech platform for ~5,000 participants: website, registration, team workflows, points system, admin panel and internal tools.",
      "Built signed-QR entry verification with a scanner that keeps working in no-network zones; Redis in front of PostgreSQL for hot paths.",
      "Ran live operations through the festival and presented the design to college leadership.",
    ],
  },
  {
    org: "Open source",
    role: "Contributor and maintainer",
    when: "2022 – Present",
    points: [
            "google-gemini/gemini-cli #20778: fixed turn cancellation not reaching chat-compression requests by threading AbortSignal through the execution layers.",
      "Merged fixes in preactjs/preact (#5331, input type definitions) and codex-team/editor.js (#3040, inline toolbar).",
      "13 further pull requests in review, including jaegertracing/jaeger, kmesh-net/kmesh (Go), meta/lexical and radix-ui/primitives.",
    ],
  },
];

const projects = [
  {
    name: "SopKit",
    stack: "Next.js, TypeScript, WebAssembly",
    link: "sopkit.github.io",
    points: [
      "605+ privacy-first browser tools that process files client-side, with no uploads and no server compute.",
      "4.3M+ requests and 213K+ visits in 30 days, built and operated solo.",
    ],
  },
  {
    name: "CampusLoop",
    stack: "Next.js, PostgreSQL, Cloudflare Workers, WebSockets",
    link: "campusloop.space",
    points: [
      "Verified student network for 1,350+ Indian colleges, gated by institutional email; feeds, marketplace, polls and time capsules.",
    ],
  },
  {
    name: "Debo",
    stack: "Next.js, TypeScript, vector search, OpenAI",
    link: "debo.life",
    points: [
      "Personal AI memory: ingests notes, links and audio, embeds them, and retrieves context through a chat interface. Built solo.",
    ],
  },
  {
    name: "IndexFast and MCP Pure",
    stack: "TypeScript, Hono, Cloudflare Workers, MCP",
    link: "indexfast.co",
    points: [
      "MCP servers on the edge; IndexFast submits URLs to Google, Bing and IndexNow from inside an IDE.",
    ],
  },
  {
    name: "Kishan AI",
    stack: "Python, computer vision, Telegram Bot API",
    link: "",
    points: [
      "Assistant for farmers: crop-disease diagnosis from photos, weather and mandi prices. Top 500 nationally, AICTE Productization Fellowship 2025.",
    ],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-4">
      <h2 className="text-[11px] font-bold uppercase border-b border-neutral-300 pb-0.5 mb-1.5">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-[800px] px-6 py-8 print:p-0 print:max-w-none">
      <div className="flex justify-end mb-4 print:hidden">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          <FileDown className="size-4" /> Download PDF
        </a>
      </div>

      <article className="text-[12.5px] leading-[1.42] text-neutral-900 dark:text-neutral-100 print:text-black print:text-[11.5px] print:leading-[1.42]">
        <header className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">{DATA.name}</h1>
          <p className="mt-1">
            Ranchi, India ·{" "}
            <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a> ·{" "}
            <a href={DATA.url}>playlikeboy.github.io</a> ·{" "}
            <a href="https://github.com/playlikeboy">github.com/playlikeboy</a> ·{" "}
            <a href="https://linkedin.com/in/sh20raj">linkedin.com/in/sh20raj</a>
          </p>
        </header>

        <Section title="Education">
          <div className="flex justify-between gap-4">
            <p>
              <strong>Birla Institute of Technology, Mesra</strong> — B.Tech, Computer Science &amp; Engineering
            </p>
            <p className="shrink-0">Expected May 2028</p>
          </div>
          <p>
            Coursework: Data Structures &amp; Algorithms, Operating Systems, Database Management Systems,
            Computer Networks, Object-Oriented Programming, Software Engineering.
          </p>
        </Section>

        <Section title="Skills">
          {skills.map(([label, value]) => (
            <p key={label}>
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </Section>

        <Section title="Experience">
          {experience.map((item) => (
            <div key={item.org} className="mb-1.5 break-inside-avoid">
              <div className="flex justify-between gap-4">
                <p>
                  <strong>{item.org}</strong> — {item.role}
                </p>
                <p className="shrink-0">{item.when}</p>
              </div>
              <ul className="list-disc pl-4">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          {projects.map((item) => (
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
            <li>Apify hackathon — prize winner for a production web-scraping actor.</li>
            <li>Technical writing on Dev.to, 45K+ followers.</li>
          </ul>
        </Section>
      </article>
    </main>
  );
}
