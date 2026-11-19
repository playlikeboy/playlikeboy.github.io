import Link from "next/link";
import { Ext, Page, PageHead, Trailer } from "@/components/mail";

export default function StoryPage() {
  return (
    <Page>
      <PageHead
        subject="how I got here"
        fields={[
          ["From", "Shaswat Raj"],
          ["Started", "Class 7"],
        ]}
      >
        <p>I didn&apos;t set out to build a career. I set out to build things, and kept going.</p>
      </PageHead>

      <div className="letter mt-8">
        <h2>Curiosity came first</h2>
        <p>
          I started coding before I had a career plan. The first projects were small, sometimes messy, and mostly driven by one
          question: &ldquo;Can I build this myself?&rdquo; That habit stayed. I still learn fastest by turning an idea into something
          people can use.
        </p>

        <h2>From assignments to real systems</h2>
        <p>
          At BIT Mesra, software stopped being just a subject. I started treating every project as a chance to understand the whole
          system: product thinking, UI, APIs, databases, deployment, performance, and what happens when real users show up.
        </p>
        <p>
          <strong>Bitotsav</strong> taught me that software behaves differently when thousands of people depend on it at the same
          time. I was tech lead for a festival of about 5,000 participants, and the hardest part wasn&apos;t the code; it was the gate
          with no network and a queue of people.
        </p>
        <p>
          <strong>SopKit</strong> taught me how performance, SEO, product design and infrastructure meet in one product: 605+ tools
          that run on the visitor&apos;s device, which served 4.3M requests in one 30-day window.
        </p>

        <h2>From building to leading</h2>
        <p>
          In 2025 I was one person on the Bitotsav web team, building the frontend and the first QR entry system. A year later
          I led the whole platform. In 2026 I also became Joint Secretary of BIT Mesra&apos;s ACM chapter. Leading taught me
          something different from coding: most of the job is getting requirements out of people who aren&apos;t engineers, and
          keeping a date that won&apos;t move.
        </p>
        <p>
          Outside college I found and build my own products, and I run each one alone in production:{" "}
          <Link href="/projects/campusloop" className="a-link">CampusLoop</Link> (a verified student network),{" "}
          <Link href="/projects/indexfast" className="a-link">IndexFast</Link> (indexing that an AI agent can run),{" "}
          <Link href="/projects/ruxs" className="a-link">RUXs</Link> (daily subscriptions for neighbourhood vendors),{" "}
          <Link href="/projects/scriptly" className="a-link">ScriptlyStore</Link> (a code marketplace) and{" "}
          <Link href="/projects/debo" className="a-link">Debo</Link> (personal AI memory). Being the only engineer means I
          also own the billing, the outages and the support inbox, not just the code.
        </p>

        <h2>Proof matters more than labels</h2>
        <p>
          Then I started contributing to code I don&apos;t own. My pull requests have been merged into Google&apos;s gemini-cli, MoFA,
          Preact and Editor.js, with more in review at Kmesh, Jaeger, Lexical and Radix UI. Open source taught me humility: a fix
          isn&apos;t finished because it works on my machine. It has to make sense in an unfamiliar codebase, survive review, and be
          useful to people I may never meet.
        </p>

        <h2>How I work</h2>
        <ul>
          <li><strong>Start with the problem.</strong> Who needs this, and why, before what to build.</li>
          <li><strong>Learn by shipping.</strong> Build a small version, see what breaks, learn from that.</li>
          <li><strong>Own the whole loop.</strong> Frontend, backend, infrastructure, deployment, debugging, documentation.</li>
          <li><strong>Leave things better.</strong> In a product or someone else&apos;s codebase, the next person should find it easier.</li>
        </ul>

        <h2>What comes next</h2>
        <p>
          I&apos;m looking for a team that will trust me with real engineering problems, where I can learn from people better than
          me. SDE, forward-deployed or DevOps/platform, as an intern or a new grad, at an early-stage startup or a large engineering
          company.
        </p>
        <blockquote>I still have a lot to learn. That&apos;s part of the point.</blockquote>
      </div>

      <div className="mt-8">
        <Trailer k="See-also">
          <Link href="/" className="a-link">the patch series</Link> · <Link href="/projects" className="a-link">projects</Link> ·{" "}
          <a href="/resume.pdf" className="a-link">resume.pdf</a> · <Ext href="mailto:sh20raj@gmail.com">email</Ext>
        </Trailer>
      </div>
    </Page>
  );
}
