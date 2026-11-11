"use client";

import { ProjectCard } from "@/components/project-card";
import { ContributionsAccordion } from "@/components/contributions-accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { roles } from "@/data/roles";
import { mergedContributions, openContributions } from "@/data/contributions";
import {
  ArrowRightIcon,
  FileDown,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
} from "lucide-react";

const SOPKIT_STATS_POST =
  "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_";
const BITOTSAV_POST =
  "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn";

const proofPosts = [
  {
    title: "SopKit — 605+ tools, 4.3M+ requests in 30 days",
    text: "A privacy-first browser utility platform where files are processed client-side, built and run solo. 4.3M+ requests and 213K+ visits in one 30-day window (analytics posted on LinkedIn, linked from the case study).",
    tech: ["Next.js", "TypeScript", "WebAssembly", "SEO"],
    href: "/projects/sopkit",
  },
  {
    title: "Google Gemini CLI #20778 — merged upstream",
    text: "Cancelling a turn did not cancel the background chat-compression request. Traced where AbortSignal propagation stopped and threaded it through the execution and compression layers. Merged March 2026 (authored as @SH20RAJ, my previous account).",
    tech: ["TypeScript", "Node.js", "Gemini", "Open Source"],
    href: "https://github.com/google-gemini/gemini-cli/pull/20778",
  },
  {
    title: "Bitotsav '26 — tech lead, ~5,000 participants",
    text: "Led and built the festival platform: website, registration, team and points workflows, admin panel, and signed-QR entry scanning that keeps working in no-network zones, with Redis in front of PostgreSQL for hot paths. Ran it live through the event.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Cloudflare"],
    href: "/projects/bitotsav-2026",
  },
  {
    title: "CampusLoop — verified campus network",
    text: "A student-only network gated by institutional email: sign-up checks against the email domains of 1,350+ Indian colleges. Campus feeds, marketplace, polls and time capsules.",
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
                Software Engineer · B.Tech CSE, BIT Mesra &apos;28
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">
                I build software that survives real users.
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl">
                Merged pull requests in Google&apos;s gemini-cli, Preact, Editor.js and MoFA, with more in review at Jaeger, Kmesh, Lexical and Radix UI. I build and run web systems, developer tooling and AI products end to end — from the first commit to production.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/60 border border-border text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Open to SDE, forward-deployed and DevOps internships &amp; new-grad roles</span>
              </div>
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
                  href="https://github.com/playlikeboy"
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
              [String(mergedContributions.length), "upstream PRs merged", "#open-source"],
              [String(openContributions.length), "upstream PRs in review", "#open-source"],
              ["4.3M+", "SopKit requests / 30 days", SOPKIT_STATS_POST],
              ["~5,000", "Bitotsav participants", BITOTSAV_POST],
            ].map(([value, label, href]) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="bg-background px-3 py-3 text-center hover:bg-accent/50 transition-colors"
                title={href.startsWith("http") ? "Source: LinkedIn post" : "See the list below"}
              >
                <p className="text-base sm:text-lg font-bold tracking-tight">{value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Every number here links to its source.{" "}
            <Link href="/proof" className="underline underline-offset-2 hover:text-foreground">Check all of them</Link>
            {" · "}
            <Link href="/status" className="underline underline-offset-2 hover:text-foreground">Live product status</Link>
          </p>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-10 border-b border-border scroll-mt-12">
        <div className="mx-auto w-full max-w-2xl px-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Hiring for a specific role?</p>
          <h2 className="text-lg font-bold tracking-tight mt-1 mb-5">Start with the evidence for it</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/roles/${role.slug}`}
                className="group flex flex-col rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
              >
                <p className="text-sm font-semibold">{role.title}</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed flex-1">{role.headline}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium mt-3">
                  {role.evidence.length} proof points
                  <ArrowRightIcon className="size-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
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
      <section id="open-source" className="py-10 border-b border-border scroll-mt-12">
        <div className="mx-auto w-full max-w-2xl px-6">
          <ContributionsAccordion />
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <Link href="/bugs" className="inline-flex items-center gap-1 hover:text-muted-foreground">
              Bug journal: every bug I reproduced and filed upstream <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Experience</h2>
          <div className="space-y-5">
            {DATA.work.map((job: any) => (
              <div key={job.company + job.start}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold">
                    {job.title} <span className="font-normal text-muted-foreground">· {job.company}</span>
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {job.start === job.end ? job.start : `${job.start} – ${job.end}`}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold tracking-tight mt-8 mb-3">Education</h2>
          {DATA.education.map((edu: any) => (
            <div key={edu.school} className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-semibold">
                {edu.school} <span className="font-normal text-muted-foreground">· {edu.degree}</span>
              </p>
              <p className="text-xs text-muted-foreground whitespace-nowrap">{edu.end}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold tracking-tight">More projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.projects.slice(4, 8).map((project: any) => (
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
            I like owning the whole path: understanding the problem, choosing the architecture, writing the product, deploying it, measuring what happens, and iterating. My open-source work includes merged contributions to Google&apos;s gemini-cli, Preact, Editor.js and MoFA.
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
            Open to SDE, forward-deployed and DevOps/platform internships and new-grad roles — at startups and large engineering teams alike.{" "}
            <Link href="/resume" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
              Read my résumé
            </Link>
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/60 border border-border text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Graduating 2028 · Remote or relocation</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm font-medium">
            {[
              ["sh20raj@gmail.com", "mailto:sh20raj@gmail.com"],
              ["GitHub", "https://github.com/playlikeboy"],
              ["LinkedIn", "https://www.linkedin.com/in/sh20raj/"],
              ["Peerlist", "https://peerlist.io/sh20raj"],
              ["GitLab", "https://gitlab.com/SH20RAJ"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-foreground underline-offset-4 hover:underline hover:text-muted-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
