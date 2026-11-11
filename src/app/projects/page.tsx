import Link from "next/link";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { Ext, Page, PageHead, State, ThreadHeading } from "@/components/mail";

const description =
  "Systems Shaswat Raj built and runs: Bitotsav '26, SopKit, CampusLoop, Debo, IndexFast and more, each with links to the code and the live product.";

export const metadata: Metadata = {
  title: { absolute: `Projects — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/projects` },
  openGraph: {
    title: `Projects — ${DATA.name}`,
    description,
    url: `${DATA.url}/projects`,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `Projects — ${DATA.name}`, description, creator: "@SH20RAJ" },
};

type Link_ = { type: string; href: string };
type Project = { title: string; href: string; dates: string; description: string; links?: Link_[] };

// One-line descriptions, worded the way the sources report them (see src/data/claims.ts).
const ONE_LINE: Record<string, string> = {
  "Google Gemini CLI (PR #20778)": "Merged fix: cancelling a turn now also cancels the in-flight chat-compression request.",
  "SopKit (formerly 30tools)": "605+ browser tools that run on the visitor's device; 4.3M requests and 213K visits in 30 days.",
  "Bitotsav '26 Tech Platform": "Festival platform for ~5,000 participants, with QR entry that works without network.",
  CampusLoop: "Student network gated by college email; sign-up accepts the domains of 1,350+ Indian colleges.",
  Debo: "Personal AI memory: ingests notes, links and audio, and retrieves them through chat.",
  SopPlayer: "Zero-dependency HTML5 video player served from jsDelivr.",
};

const CASE_STUDIES = ["gemini-cli", "bitotsav-2026", "sopkit", "campusloop", "debo", "sopplayer"];

function firstSentence(text: string) {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

function stateFor(p: Project) {
  if (p.title.startsWith("Google Gemini CLI")) return "merged";
  if (p.links?.some((l) => l.type === "Website")) return "live";
  return null;
}

function caseStudyHref(p: Project) {
  const own = p.links?.find((l) => l.type === "Case Study")?.href ?? (p.href.startsWith("/projects/") ? p.href : null);
  return own && CASE_STUDIES.some((slug) => own.endsWith(slug)) ? own : null;
}

function Row({ p }: { p: Project }) {
  const study = caseStudyHref(p);
  const state = stateFor(p);
  const external = p.links?.filter((l) => l.type !== "Case Study" && !l.href.startsWith("/")).slice(0, 3) ?? [];
  return (
    <li className="py-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="text-[0.9375rem] font-semibold">
          {study ? (
            <Link href={study} className="a-link">{p.title}</Link>
          ) : (
            p.title
          )}
        </h3>
        <span className="flex items-baseline gap-2 font-mono text-[0.75rem] text-muted-foreground">
          {state && <State state={state} />}
          {p.dates}
        </span>
      </div>
      <p className="mt-1 max-w-measure">{ONE_LINE[p.title] ?? firstSentence(p.description)}</p>
      {(study || external.length > 0) && (
        <p className="trailer mt-1 flex flex-wrap gap-x-3">
          {study && (
            <span>
              <b>Case-study:</b> <Link href={study} className="a-link">{study}</Link>
            </span>
          )}
          {external.map((l) => (
            <span key={l.href}>
              <b>{l.type.replace(/\s+/g, "-")}:</b>{" "}
              <Ext href={l.href}>{l.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</Ext>
            </span>
          ))}
        </p>
      )}
    </li>
  );
}

export default function ProjectsPage() {
  const projects = DATA.projects as unknown as Project[];
  const withStudy = projects.filter((p) => caseStudyHref(p));
  const rest = projects.filter((p) => !caseStudyHref(p));
  return (
    <Page>
      <PageHead
        subject="systems I built and run"
        fields={[
          ["Threads", `${projects.length} projects · ${withStudy.length} with a write-up`],
          ["Upstream", <Link key="u" href="/#series" className="a-link">fixes in code I don&apos;t maintain</Link>],
        ]}
      >
        <p>
          Projects with a write-up come first. Each row links to the code and, where it still runs, the live product.
          Numbers are the ones I can source; see <Link href="/proof" className="a-link">proof</Link>.
        </p>
      </PageHead>

      <ThreadHeading aside={`${withStudy.length} threads`}>
        <span className="font-normal text-muted-foreground">Re: </span>with a write-up
      </ThreadHeading>
      <ul className="thread divide-y divide-border">
        {withStudy.map((p) => (
          <Row key={p.title} p={p} />
        ))}
      </ul>

      <ThreadHeading aside={`${rest.length} threads`}>
        <span className="font-normal text-muted-foreground">Re: </span>everything else
      </ThreadHeading>
      <ul className="thread divide-y divide-border">
        {rest.map((p) => (
          <Row key={p.title} p={p} />
        ))}
      </ul>

      <p className="trailer mt-8">
        <b>Archive:</b> older experiments live at{" "}
        <Ext href="https://github.com/playlikeboy-archive">github.com/playlikeboy-archive</Ext>
      </p>
    </Page>
  );
}
