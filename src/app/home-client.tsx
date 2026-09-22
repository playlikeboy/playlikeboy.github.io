"use client";

import { ProjectCard } from "@/components/project-card";
import { GitHubStats } from "@/components/github-stats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRightIcon,
  FileDown,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
} from "lucide-react";

const proofPosts = [
  {
    title: "SopKit — 605+ tools, 4.3M+ requests",
    text: "A privacy-first browser utility platform where processing happens client-side. Reported 4.3M+ requests and 213K+ visits, driven by product execution and programmatic SEO.",
    tech: ["Next.js", "TypeScript", "WebAssembly", "SEO"],
    href: "/projects/sopkit",
  },
  {
    title: "Google Gemini CLI — merged upstream contribution",
    text: "Traced a cancellation bug where AbortSignal propagation stopped before chat compression, then threaded cancellation through the execution and compression layers. The fix was reviewed and merged upstream.",
    tech: ["TypeScript", "Node.js", "Gemini", "Open Source"],
    href: "https://github.com/google-gemini/gemini-cli/pull/20778",
  },
  {
    title: "Bitotsav '26 — production event infrastructure",
    text: "Architected the technology platform for 5,000+ participants, including QR access verification, Redis-backed state, real-time leaderboard systems, admin tooling, and AI features.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Cloudflare"],
    href: "/projects/bitotsav-2026",
  },
  {
    title: "CampusLoop — campus network",
    text: "Building a verified student network for 1,350+ Indian colleges with institutional email verification, campus feeds, marketplace workflows, polls, and time capsules.",
    tech: ["Next.js", "PostgreSQL", "Workers", "PWA"],
    href: "https://campusloop.space/",
  },
];

export function HomeClient({ DATA }: { DATA: any }) {
  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      {/* Hero */}
      <section id="hero" className="pt-10 pb-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-start gap-5">
            <Avatar className="size-20 border border-border shrink-0">
              <AvatarImage alt="Shaswat Raj" src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold tracking-tight">Shaswat Raj</h1>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Software Engineer · Open-Source Builder
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">
                I build software that survives real users.
              </h1>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl">
                I build high-performance web systems, developer infrastructure, and AI tooling end-to-end — from architecture and APIs to production and iteration.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
                >
                  <FileDown className="size-4" /> Resume
                </a>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
                >
                  View work <ArrowRightIcon className="size-3.5" />
                </Link>
                <Link
                  href="https://github.com/SH20RAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Github className="size-4" /> GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/sh20raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </Link>
                <a
                  href="mailto:sh20raj@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Mail className="size-4" /> Email
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-lg border border-border bg-border mt-8">
            {[
              ["79", "external PRs merged"],
              ["4.3M+", "SopKit requests"],
              ["213K+", "SopKit visits"],
              ["5K+", "event participants"],
            ].map(([value, label]) => (
              <div key={label} className="bg-background px-3 py-3 text-center">
                <p className="text-base sm:text-lg font-bold tracking-tight">{value}</p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Key Engineering Highlights */}
      <section id="proof" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Proof</p>
          <h2 className="text-lg font-bold tracking-tight mt-1 mb-5">Engineering highlights</h2>
          <div className="space-y-4">
            {proofPosts.map((post) => {
              const isInternal = post.href.startsWith("/");
              const CardComponent = isInternal ? Link : "a";
              const cardProps = isInternal
                ? { href: post.href }
                : { href: post.href, target: "_blank", rel: "noopener noreferrer" };

              return (
                <CardComponent
                  key={post.title}
                  {...cardProps}
                  className="group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    {isInternal ? (
                      <ArrowRightIcon className="size-3.5 text-muted-foreground shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    ) : (
                      <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {post.text}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section id="open-source" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <GitHubStats />
        </div>
      </section>

      {/* Performance & Quality */}
      <section id="performance" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight">Site Architecture &amp; Performance</h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Fully static export deployed to GitHub Pages and edge CDN. Zero tracking scripts, minimal client runtime, and ultra-low latency static asset delivery.
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div className="p-3 bg-accent/40 rounded-lg border border-border">
              <p className="text-base font-semibold text-foreground">&lt; 100ms</p>
              <p className="text-xs text-muted-foreground mt-0.5">TTFB Globally</p>
            </div>
            <div className="p-3 bg-accent/40 rounded-lg border border-border">
              <p className="text-base font-semibold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground mt-0.5">Static Edge SSG</p>
            </div>
            <div className="p-3 bg-accent/40 rounded-lg border border-border">
              <p className="text-base font-semibold text-foreground">0</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tracking Scripts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold tracking-tight">Featured Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(0, 4).map((project: any) => (
              <ProjectCard
                key={project.title}
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Depth / Skills */}
      <section id="skills" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Capabilities</p>
          <h2 className="text-lg font-bold tracking-tight mt-1 mb-5">What I work with</h2>
          <div className="space-y-4">
            {[
              {
                category: "Systems & Languages",
                skills: ["TypeScript", "JavaScript", "Python", "C++", "Go", "SQL", "Bash / Shell"],
              },
              {
                category: "Backend & Distributed Systems",
                skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma", "Database Optimization", "WebSockets", "REST / GraphQL"],
              },
              {
                category: "AI & Agentic Architectures",
                skills: ["Model Context Protocol (MCP)", "Gemini API", "Claude API", "OpenAI", "RAG Pipelines", "Vector Search", "Multimodal Agents"],
              },
              {
                category: "Cloud, Edge & Infrastructure",
                skills: ["Cloudflare Workers / Edge", "Docker", "Vercel", "AWS", "GitHub Actions CI/CD", "Linux Server Admin"],
              },
              {
                category: "Frontend & Performance",
                skills: ["Next.js (App Router)", "React", "Tailwind CSS", "State Machines", "Web Vitals & Performance", "Programmatic SEO"],
              },
            ].map((group) => (
              <div key={group.category}>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded px-2 py-0.5 text-xs font-normal border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fellowships & Achievements */}
      <section id="hackathons" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Honors &amp; Fellowships</h2>
          <div className="space-y-3">
            {DATA.hackathons.map((project: any) => (
              <div
                key={project.title + project.dates}
                className="flex items-start gap-3 py-2"
              >
                {project.image ? (
                  <div className="relative size-8 shrink-0 mt-0.5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-8 rounded object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.removeAttribute("hidden");
                      }}
                    />
                    <div
                      hidden
                      className="absolute inset-0 flex items-center justify-center rounded bg-accent text-[10px] font-bold text-muted-foreground"
                    >
                      {project.title
                        .split(/\s+/)
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((word: string) => word[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  </div>
                ) : (
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-accent text-[10px] font-bold text-muted-foreground">
                    {project.title
                      .split(/\s+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((word: string) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-xs text-muted-foreground">{project.dates}</p>
                  {project.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-3">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I like owning the whole path: understanding the problem, choosing the architecture, writing the product, deploying it, measuring what happens, and iterating. My open-source work includes 79 external PRs, including a merged contribution to Google&apos;s gemini-cli.
          </p>
          <Link
            href="/story"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Read the story behind the work <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6 text-center space-y-3">
          <h2 className="text-lg font-bold tracking-tight">Get in touch</h2>
          <p className="text-sm text-muted-foreground">
            Open to software engineering and founding-engineer opportunities, especially around systems, developer tooling, and AI infrastructure.{" "}
            <Link href="/hire" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
              Contact me
            </Link>
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/60 border border-border text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for full-time roles · Remote / relocation</span>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a
              href="mailto:sh20raj@gmail.com"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              sh20raj@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
