import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "indexfast",
  "IndexFast: agent-native indexing",
  "IndexFast finds pages search engines have not picked up and submits them through official channels (IndexNow, Bing, Search Console), driven by an MCP server, REST API and CLI. Built and run solo.",
);

export default function IndexFastCaseStudy() {
  return (
    <CaseStudy
      subject="IndexFast: indexing work an AI agent can run end to end"
      fields={[
        ["Date", "2025 – present"],
        ["Status", <span key="s"><State state="live" /> indexfast.co</span>],
        ["Stack", "Next.js 16, Cloudflare Workers (OpenNext), Neon Postgres, Drizzle, MCP"],
        ["Role", "Founder; sole engineer"],
      ]}
      lede={
        <p>
          New pages on fast-moving sites often sit undiscovered for weeks. IndexFast watches a site&apos;s sitemaps, finds
          the URLs search engines haven&apos;t picked up, and pushes them through the channels the engines officially
          accept. A person sets it up once; after that an agent in Claude Code or Cursor can run it.
        </p>
      }
      trailers={[
        ["Live", "https://indexfast.co"],
        ["Code", "https://github.com/playlikeboy/indexfast", "playlikeboy/indexfast"],
        ["CLI", "https://www.npmjs.com/package/indexfast", "npm: indexfast"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        Programmatic-SEO sites, directories and AI-built apps publish pages faster than crawlers visit them. Most
        &quot;instant indexing&quot; tools paper over this with grey-hat tricks. I wanted the honest version: send each URL
        to every engine that accepts submissions, and keep a record of what each engine answered.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>
          Ownership by key file: adding a domain generates an IndexNow key, and the site hosting <code>/&lt;key&gt;.txt</code>{" "}
          is the proof. Nothing is submitted for an unverified site.
        </li>
        <li>
          A Cloudflare Worker cron that syncs sitemaps and drains a submission queue, with retries that respect each
          engine&apos;s throttling.
        </li>
        <li>
          Four ways in, one core: a dashboard, a REST API with scoped <code>idxf_</code> keys, a CLI published to npm, and
          an authenticated MCP server (Streamable HTTP). The MCP layer only translates calls; business logic lives in one
          operations module.
        </li>
        <li>Prepaid plans on Razorpay, and free public SEO tools that need no sign-up.</li>
      </ul>

      <h2>Decisions</h2>
      <ul>
        <li>
          Google&apos;s Indexing API is used only for the page types Google allows (job postings and livestreams). The
          product never promises Google indexing.
        </li>
        <li>
          The MCP server negotiates protocol versions from 2024-11-05 to 2025-11-25 and returns tool failures as{" "}
          <code>isError</code> results instead of transport errors, so an agent can read the failure and react.
        </li>
        <li>Workers have 128 MB and short CPU budgets, so sitemap parsing and submission run in small batches.</li>
      </ul>

      <h2>What I took from it</h2>
      <p>
        Building for agents first changes the API. Every response has to explain the next step in plain words, because the
        caller is a model reading it, not a person looking at a screen.
      </p>
    </CaseStudy>
  );
}
