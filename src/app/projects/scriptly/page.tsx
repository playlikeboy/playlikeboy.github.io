import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "scriptly",
  "ScriptlyStore: a code marketplace",
  "ScriptlyStore is an edge-rendered marketplace for production-ready code: verified-purchase downloads, Razorpay checkout, encrypted payment links and an agent API. Built and run solo.",
);

export default function ScriptlyCaseStudy() {
  return (
    <CaseStudy
      subject="ScriptlyStore: selling code without leaking it"
      fields={[
        ["Date", "2026 – present"],
        ["Status", <span key="s"><State state="live" /> scriptly.store</span>],
        ["Stack", "Next.js 16, Cloudflare Workers (OpenNext), Neon Postgres, Drizzle, Razorpay"],
        ["Role", "Founder; sole engineer"],
      ]}
      lede={
        <p>
          ScriptlyStore is a marketplace for SaaS templates, scripts, landing pages and UI kits. Creators keep 95% of direct
          sales, and every listing is a real downloadable asset that only a verified buyer can fetch.
        </p>
      }
      trailers={[
        ["Live", "https://scriptly.store"],
        ["Code", "https://github.com/playlikeboy/scriptly.store", "playlikeboy/scriptly.store"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        A code marketplace has two jobs that pull against each other: let anyone browse and buy in one step, and never let
        the files out before payment clears. It also has to charge Indian cards in rupees while listing prices in dollars.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>
          Server-first pages: filtering, sorting, pagination and counts run in Postgres, and client code is limited to the
          cart, checkout and filters.
        </li>
        <li>
          Checkout on Razorpay: the server recomputes every price from the database in US cents, converts to paise at the
          live rate, and confirms orders by signature and webhook.
        </li>
        <li>
          Private archives: the download route streams a file only after the buyer&apos;s completed order is checked.
          Nothing sits at a public URL.
        </li>
        <li>
          Payment links as signed tokens or AES-256-GCM encrypted tokens, a public products JSON feed, and an agent/MCP
          API.
        </li>
        <li>A creator studio with listings, coupons, payouts, a sales ledger, affiliates and a public storefront.</li>
      </ul>

      <h2>Supply</h2>
      <p>
        A sister workspace produces first-party listings: improved, credited versions of permissively licensed open-source
        templates. Every candidate&apos;s licence is checked through the GitHub API (MIT, Apache-2.0, BSD and similar only),
        bundled assets are audited, and anything that copies another creator&apos;s brand is rejected.
      </p>

      <h2>What I took from it</h2>
      <p>
        Money stays integer and server-owned. The client can show a price, but only the server decides what gets charged.
      </p>
    </CaseStudy>
  );
}
