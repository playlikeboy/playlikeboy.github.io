import Link from "next/link";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { roles } from "@/data/roles";
import { Ext, MailHead, Page, State, ThreadHeading, Trailer } from "@/components/mail";
import { communityPatches, mergedPatches, reviewPatches, seriesStats, type Patch } from "@/lib/series";

const description =
  "Shaswat Raj, software engineer (BIT Mesra '28). Tech Lead of Bitotsav '26, Joint Secretary of ACM BIT Mesra, founder of CampusLoop, IndexFast, RUXs and ScriptlyStore. Merged fixes in Google's gemini-cli, T3 Code, MoFA, Preact and Editor.js. Open to SDE, FDE and DevOps roles.";

export const metadata: Metadata = {
  title: { absolute: "Shaswat Raj — fixes in code I don't maintain" },
  description,
  alternates: { canonical: DATA.url },
  openGraph: {
    title: "Shaswat Raj — fixes in code I don't maintain",
    description,
    url: DATA.url,
    siteName: DATA.name,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title: "Shaswat Raj — fixes in code I don't maintain", description, creator: "@SH20RAJ" },
};

const UPDATED = "21 Nov 2026";

function PatchRow({ patch, n, of }: { patch: Patch; n: number; of: number }) {
  const bug = patch.bug;
  return (
    <li>
      <details className="group">
        <summary className="grid grid-cols-[1fr_auto] items-baseline gap-x-3 py-1.5 hover:bg-accent/70 -mx-2 px-2">
          <span className="min-w-0 font-mono text-[0.875rem] leading-snug">
            <span className="disclose" aria-hidden="true">›</span>
            <span className="text-muted-foreground">[PATCH {n}/{of}]</span>{" "}
            <span className="font-semibold">{patch.project}:</span> {patch.subject}
          </span>
          <span className="flex items-baseline gap-2 whitespace-nowrap">
            <State state={patch.state} />
            <span className="hidden sm:inline font-mono text-[0.75rem] text-muted-foreground">{patch.date}</span>
          </span>
        </summary>
        <div className="patch-body ml-[1.5ch] border-l border-rule pl-4 pb-4 pt-1">
          {bug ? (
            <div className="max-w-measure space-y-2 text-[0.9375rem]">
              <p>
                <span className="font-mono text-[0.8125rem] text-muted-foreground">Bug: </span>
                {bug.symptom}
              </p>
              {bug.fix && (
                <p>
                  <span className="font-mono text-[0.8125rem] text-muted-foreground">Fix: </span>
                  {bug.fix}
                </p>
              )}
            </div>
          ) : (
            <p className="max-w-measure text-[0.9375rem]">{patch.title}</p>
          )}
          <div className="mt-3">
            <Trailer k="Link">
              <Ext href={patch.url}>{patch.repo}#{patch.number}</Ext>
            </Trailer>
            {bug?.issueUrl && (
              <Trailer k="Reported-in">
                <Ext href={bug.issueUrl}>{bug.issueUrl.replace("https://github.com/", "").replace("/issues/", "#")}</Ext>
              </Trailer>
            )}
            {patch.commitUrl && (
              <Trailer k="Merged-commit">
                <Ext href={patch.commitUrl}>{patch.commitUrl.split("/commit/")[1].slice(0, 7)}</Ext>
              </Trailer>
            )}
            {patch.formerAccount && (
              <Trailer k="Note">authored as @SH20RAJ, my previous GitHub account; GitHub shows its author as &ldquo;ghost&rdquo;</Trailer>
            )}
          </div>
        </div>
      </details>
    </li>
  );
}

function Diffstat() {
  const rows: [string, number, string, string][] = [
    ["merged", seriesStats.merged, "+", "state-merged"],
    ["in review", seriesStats.inReview, "~", "state-review"],
    ["bugs reported", seriesStats.bugsFiled, "!", "state-reported"],
  ];
  return (
    <pre className="mt-6 overflow-x-auto font-mono text-[0.8125rem] leading-relaxed" aria-label="Summary of the series">
      {rows.map(([label, n, mark, cls]) => (
        <span key={label} className="block">
          {" "}
          {label.padEnd(14)}| {String(n).padStart(2)} <span className={cls}>{mark.repeat(n)}</span>
        </span>
      ))}
      <span className="block text-muted-foreground">
        {" "}
        {seriesStats.projects} projects changed, {seriesStats.merged} merged(+), {seriesStats.inReview} in review(~),{" "}
        {seriesStats.bugsFiled} bugs reported(!), {seriesStats.docsMerged} docs patches merged
      </span>
    </pre>
  );
}

const founded = [
  ["SopKit", "/projects/sopkit"],
  ["CampusLoop", "/projects/campusloop"],
  ["IndexFast", "/projects/indexfast"],
  ["RUXs", "/projects/ruxs"],
  ["ScriptlyStore", "/projects/scriptly"],
  ["Debo", "/projects/debo"],
] as const;

const systems = [
  {
    name: "Bitotsav '26",
    subject: "festival platform for ~5,000 participants, run live",
    body: "Tech lead for BIT Mesra's annual festival. I built registration, team and points workflows, the admin panel, and signed-QR entry that keeps scanning in no-network zones, with Redis in front of PostgreSQL for hot paths. Then I ran it through the event.",
    links: [
      ["Case-study", "/projects/bitotsav-2026"],
      ["Source", "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn"],
    ],
  },
  {
    name: "SopKit",
    subject: "605+ browser tools; 4.3M requests and 213K visits in 30 days",
    body: "File tools that run on the visitor's device, so nothing is uploaded and there is no server to pay for. Built and run alone.",
    links: [
      ["Live", "https://sopkit.github.io"],
      ["Source", "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_"],
      ["Case-study", "/projects/sopkit"],
    ],
  },
  {
    name: "CampusLoop",
    subject: "student network gated by college email",
    body: "Sign-up accepts the email domains of 1,350+ Indian colleges. Feeds, marketplace, polls and time capsules on Next.js, PostgreSQL and Cloudflare Workers.",
    links: [
      ["Case-study", "/projects/campusloop"],
      ["Live", "https://campusloop.space"],
      ["Code", "https://github.com/playlikeboy/campusloop"],
    ],
  },
  {
    name: "RUXs",
    subject: "daily tiffin and water-can subscriptions for neighbourhood vendors",
    body: "Replaces a vendor's WhatsApp chats and paper ledger: skip-or-confirm with a locked cutoff count, driver run sheets, a shared ledger and one monthly UPI bill.",
    links: [
      ["Case-study", "/projects/ruxs"],
      ["Live", "https://ruxs.in"],
      ["Code", "https://github.com/playlikeboy/ruxs"],
    ],
  },
  {
    name: "IndexFast",
    subject: "agent-native indexing: MCP server, API and CLI",
    body: "Finds pages search engines haven't picked up and submits them through IndexNow, Bing and Search Console. Next.js on Cloudflare Workers, with a cron draining the queue; an agent in an IDE can run it end to end.",
    links: [
      ["Case-study", "/projects/indexfast"],
      ["Live", "https://indexfast.co"],
      ["Code", "https://github.com/playlikeboy/indexfast"],
    ],
  },
  {
    name: "ScriptlyStore",
    subject: "edge-rendered marketplace for production-ready code",
    body: "Downloads stream only after a verified purchase. Razorpay checkout recomputes prices on the server (USD cents to INR paise), payment links are AES-256-GCM encrypted, and it has an agent/MCP API. Next.js on Cloudflare Workers with Neon Postgres.",
    links: [
      ["Case-study", "/projects/scriptly"],
      ["Live", "https://scriptly.store"],
      ["Code", "https://github.com/playlikeboy/scriptly.store"],
    ],
  },
] as const;

export default function Home() {
  const of = mergedPatches.length;
  return (
    <Page>
      <article aria-labelledby="subject">
        <MailHead
          fields={[
            ["From", <>Shaswat Raj &lt;<Ext href="mailto:sh20raj@gmail.com">sh20raj@gmail.com</Ext>&gt;</>],
            ["To", "you, hiring for SDE · Forward-Deployed · DevOps roles"],
            ["Date", UPDATED],
          ]}
        />
        <h1 id="subject" className="mt-3 text-[length:var(--step-3)]">
          <span className="font-normal text-muted-foreground">[PATCH 0/{of}] </span>
          fixes in code I don&apos;t maintain
        </h1>

        <div className="mt-4 max-w-measure space-y-3 text-[length:var(--step-0)] sm:text-[length:var(--step-1)] leading-relaxed">
          <p>
            I&apos;m Shaswat, a B.Tech CSE student at BIT Mesra (graduating May 2028). I led the tech team that built and ran Bitotsav &apos;26 for
            ~5,000 participants, I&apos;m Joint Secretary of the college&apos;s ACM chapter, and I&apos;ve founded and shipped products of my own,
            from a 605-tool site that served 4.3M requests in 30 days to subscription billing for neighbourhood vendors.
          </p>
          <p>
            This series is the part strangers checked: bugs I found in other people&apos;s code, reproduced, and fixed until their maintainers
            merged the patch. Google&apos;s gemini-cli, T3 Code, MoFA, Preact (twice) and Editor.js have merged mine; Kmesh and Jaeger are
            reviewing Go fixes for a CNI crash and bad sampling config.
          </p>
        </div>

        <div className="mt-4 font-mono text-[0.8125rem]">
          <Trailer k="Led">
            <Link href="/projects/bitotsav-2026" className="a-link">Bitotsav &apos;26</Link> (Tech Lead, 2025–26) ·{" "}
            <Ext href="https://acm-bitmesra.github.io">ACM BIT Mesra</Ext> (Joint Secretary, 2026–27)
          </Trailer>
          <Trailer k="Founded">
            {founded.map(([name, href], i) => (
              <span key={href}>
                {i > 0 && " · "}
                <Link href={href} className="a-link">{name}</Link>
              </span>
            ))}
          </Trailer>
          <Trailer k="Attachment">
            <a href="/resume.pdf" className="a-link">resume.pdf</a> (1 page) · <Link href="/resume" className="a-link">read online</Link>
          </Trailer>
        </div>

        <section aria-labelledby="series-h" id="series" className="mt-6 sm:mt-8 scroll-mt-16">
          <h2 id="series-h" className="sr-only">Merged patches</h2>
          <ul className="border-y border-border py-2">
            {mergedPatches.map((p, i) => (
              <PatchRow key={p.url} patch={p} n={i + 1} of={of} />
            ))}
          </ul>
          <Diffstat />
          <div className="mt-5">
            <Trailer k="Reply-To">
              <Ext href="mailto:sh20raj@gmail.com">sh20raj@gmail.com</Ext> · <Ext href="https://github.com/playlikeboy">github</Ext> ·{" "}
              <Ext href="https://www.linkedin.com/in/sh20raj/">linkedin</Ext>
            </Trailer>
            <Trailer k="Verify">
              <Link href="/proof" className="a-link">every claim with its source</Link> ·{" "}
              <Link href="/bugs" className="a-link">bug journal</Link>
            </Trailer>
          </div>
        </section>
      </article>

      <ThreadHeading id="review" aside={`${seriesStats.inReview} open · ${seriesStats.drafts} draft`}>
        <span className="font-normal text-muted-foreground">Re: </span>still in review
      </ThreadHeading>
      <ul className="thread space-y-0.5">
        {reviewPatches.map((p) => (
          <li key={p.url} className="py-0.5">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[1fr_auto] items-baseline gap-x-3 hover:bg-accent/70 -mx-1 px-1">
              <span className="min-w-0 font-mono text-[0.8125rem] leading-snug">
                <span className="font-semibold">{p.project}#{p.number}:</span>{" "}
                <span className="group-hover:underline decoration-link/40 underline-offset-2">{p.subject}</span>
              </span>
              <State state={p.state} />
            </a>
          </li>
        ))}
      </ul>

      <ThreadHeading id="systems">
        <span className="font-normal text-muted-foreground">[PATCH 0/{systems.length}] </span>systems I led, founded and run
      </ThreadHeading>
      <div className="divide-y divide-border border-y border-border">
        {systems.map((s) => (
          <article key={s.name} className="py-5">
            <h3 className="text-[length:var(--step-1)]">
              {s.name}: <span className="font-normal">{s.subject}</span>
            </h3>
            <p className="mt-2 max-w-measure">{s.body}</p>
            <p className="trailer mt-2 flex flex-wrap gap-x-4">
              {s.links.map(([k, href]) => (
                <span key={href}>
                  <b>{k}:</b>{" "}
                  {href.startsWith("/") ? (
                    <Link href={href} className="a-link">{href}</Link>
                  ) : (
                    <Ext href={href}>{href.replace(/^https:\/\/(www\.)?/, "").split("/")[0]}</Ext>
                  )}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>

      <ThreadHeading id="roles">
        <span className="font-normal text-muted-foreground">Re: </span>which role are you hiring for?
      </ThreadHeading>
      <ul className="thread">
        {roles.map((r) => (
          <li key={r.slug} className="py-1.5">
            <Link href={`/roles/${r.slug}`} className="a-link font-mono text-[0.875rem] font-semibold">
              {r.title}
            </Link>
            <span className="text-muted-foreground"> · {r.evidence.length} pieces of evidence</span>
            <p className="max-w-measure text-[0.9375rem]">{r.headline}</p>
          </li>
        ))}
      </ul>

      <ThreadHeading id="community">
        <span className="font-normal text-muted-foreground">Re: </span>also merged, in my own org and ACM BIT Mesra
      </ThreadHeading>
      <ul className="thread">
        {communityPatches.map((p) => (
          <li key={p.url} className="py-0.5 font-mono text-[0.8125rem]">
            <Ext href={p.url}>{p.repo}#{p.number}</Ext>: {p.subject}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-muted-foreground">Not counted in the series above. I&apos;m Joint Secretary of ACM BIT Mesra for 2026–27.</p>
    </Page>
  );
}
