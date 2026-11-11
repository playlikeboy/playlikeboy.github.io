"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const chapters = [
  {
    year: "Class 7 →",
    title: "Curiosity came first",
    text: "I started coding before I had a career plan. The first projects were small, sometimes messy, and mostly driven by one question: “Can I build this myself?” That habit stayed. I still learn fastest by turning an idea into something people can actually use.",
  },
  {
    year: "College",
    title: "From assignments to real systems",
    text: "At BIT Mesra, software stopped being just a subject. I started treating every project as a chance to understand the whole system — product thinking, UI, APIs, databases, deployment, performance, and what happens when real users show up.",
  },
  {
    year: "Open source",
    title: "Proof matters more than labels",
    text: "I began contributing beyond repositories I own. My pull requests have been merged into projects like Google's gemini-cli, Preact, Editor.js and MoFA, with more in review at Jaeger, Kmesh, Lexical and Radix UI. Open source taught me to read unfamiliar code, explain trade-offs, respond to review, and ship changes that have to survive someone else's standards.",
  },
  {
    year: "Products",
    title: "I like taking ideas all the way",
    text: "I've built developer tools, AI systems, web products, infrastructure, and experiments — from SopKit and SopPlayer to Debo, IndexFast, MCP Pure, and CampusLoop. The common thread is ownership: I enjoy going from “this could be useful” to architecture, implementation, deployment, iteration, and feedback.",
  },
];

const proof = [
  {
    metric: "17",
    label: "upstream PRs",
    detail: "Opened in repositories I don't own; see the list on the home page.",
  },
  {
    metric: "4.3M+",
    label: "SopKit requests",
    detail: "A privacy-first browser tool platform.",
  },
  {
    metric: "~5,000",
    label: "live participants",
    detail: "Event infrastructure built for Bitotsav.",
  },
  {
    metric: "1,350+",
    label: "college network target",
    detail: "CampusLoop's verified student network.",
  },
];

export default function StoryPage() {
  return (
    <main className="min-h-[100dvh] pb-20">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The story behind the portfolio
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            I didn't set out to build a career.
            <br />
            <span className="text-muted-foreground">I set out to build things.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I'm Shaswat Raj — a computer science student, software engineer,
            open-source contributor, and persistent builder. My journey has
            been less about collecting technologies and more about repeatedly
            turning curiosity into working software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              See what I've built <ArrowRight className="size-4" />
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Read my resume
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-12 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {proof.map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-accent/20 p-4">
                <p className="text-xl font-bold tracking-tight">{item.metric}</p>
                <p className="mt-1 text-xs font-medium text-foreground">{item.label}</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="space-y-12">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className="grid gap-4 sm:grid-cols-[110px_1fr] sm:gap-8"
              >
                <p className="pt-1 text-xs font-mono text-muted-foreground">{chapter.year}</p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    0{index + 1}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">{chapter.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {chapter.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent/20 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            A few things I'm proud of
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            The interesting part isn't the number. It's what the number represents.
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
            <p>
              <strong className="text-foreground">SopKit</strong> taught me how
              performance, SEO, product design, and infrastructure meet in one
              product. It grew into a privacy-first suite of browser tools with
              millions of requests while keeping processing client-side.
            </p>
            <p>
              <strong className="text-foreground">Bitotsav</strong> taught me
              that software behaves differently when thousands of people depend
              on it at the same time. I worked on event infrastructure,
              verification, real-time systems, and operational reliability.
            </p>
            <p>
              <strong className="text-foreground">Open source</strong> taught
              me humility. A contribution is not finished because it works on
              my machine. It has to make sense in an unfamiliar codebase,
              survive review, and be useful to people I may never meet.
            </p>
            <p>
              <strong className="text-foreground">CampusLoop</strong> represents
              the kind of product I want to keep building: something with a
              real user problem behind it, technical depth underneath it, and
              enough ambition to force me to learn along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">How I work</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ["Start with the problem", "I prefer understanding who needs something and why before deciding what to build."],
              ["Learn by shipping", "I don't wait until I know everything. I build a small version, measure what breaks, and learn from reality."],
              ["Own the whole loop", "Frontend, backend, infrastructure, deployment, debugging, documentation — I'm comfortable crossing boundaries."],
              ["Leave things better", "Whether it is a product or an open-source codebase, I want my contribution to be easier to understand and maintain."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-border p-5">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="mx-auto w-full max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">What comes next</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            I'm looking for environments where I can be trusted with meaningful
            engineering problems, learn from people who are better than me,
            and contribute beyond the narrow definition of a job description.
            I care about strong engineering, thoughtful products, and teams
            that value ownership.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="https://gitlab.com/SH20RAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <Github className="size-4" /> GitHub <ExternalLink className="size-3" />
            </Link>
            <Link
              href="https://linkedin.com/in/sh20raj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="size-4" /> LinkedIn <ExternalLink className="size-3" />
            </Link>
            <Link
              href="mailto:sh20raj@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <Mail className="size-4" /> Email
            </Link>
          </div>

          <p className="mt-12 border-l-2 border-border pl-4 text-sm italic leading-7 text-muted-foreground">
            I still have a lot to learn. That's part of the point.
          </p>
        </div>
      </section>
    </main>
  );
}
