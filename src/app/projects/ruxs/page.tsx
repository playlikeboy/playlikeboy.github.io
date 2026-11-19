import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "ruxs",
  "RUXs: neighbourhood subscriptions",
  "RUXs gives tiffin and water-can vendors one web app in place of WhatsApp chats and a paper ledger, with household, merchant and admin surfaces on Cloudflare Workers.",
);

export default function RuxsCaseStudy() {
  return (
    <CaseStudy
      subject="RUXs: replacing a vendor's WhatsApp chats and paper khata"
      fields={[
        ["Date", "2026 – present"],
        ["Status", <span key="s"><State state="live" /> ruxs.in</span>],
        ["Stack", "Next.js 16, Cloudflare Workers (OpenNext), PostgreSQL, Drizzle, Bun, Playwright"],
        ["Role", "Founder; sole engineer"],
      ]}
      lede={
        <p>
          In Indian neighbourhoods, daily tiffin, milk and 20-litre water cans run on WhatsApp messages and a paper
          ledger (a <em>khata</em>). RUXs puts that routine in one web app: households skip or confirm a day, the vendor
          gets a locked count at the cutoff, and both sides see the same ledger and one bill a month.
        </p>
      }
      trailers={[
        ["Live", "https://ruxs.in"],
        ["Code", "https://github.com/playlikeboy/ruxs", "playlikeboy/ruxs"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        A tiffin vendor with 80 customers reconciles skips, extra meals and payments by hand every evening. Mistakes cost
        money on both sides, and nobody trusts the other&apos;s notebook.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>
          Four route groups in one Next.js app: a public site, the household app, a merchant panel and an admin console,
          each with its own access rules.
        </li>
        <li>
          Daily skip-or-confirm with a cutoff that locks the kitchen count, a driver run sheet, a shared ledger and a
          monthly UPI bill.
        </li>
        <li>
          A wider marketplace on the same core: local stores, children&apos;s classes and kits, fitness and
          physiotherapy. Each vendor type turns on only the workflows it needs.
        </li>
        <li>A per-minute Worker cron for scheduled jobs, and Playwright end-to-end tests over the main flows.</li>
      </ul>

      <h2>Decisions</h2>
      <ul>
        <li>
          The vendor pays; households and delivery staff use it free. Households don&apos;t even need an account: they get
          one private link to their khata and bills.
        </li>
        <li>
          Money and fulfilment correctness come before visual polish. Prices, schedules and service areas always come from
          the provider, never a platform-wide default.
        </li>
        <li>
          Kids&apos; services shipped with a written child-safeguarding policy, and I ran my own security and route audits
          before opening them up.
        </li>
      </ul>

      <h2>What I took from it</h2>
      <p>
        The hard part of local commerce is not the catalogue. It is the daily state machine: who skipped, what got
        delivered, what is owed. Getting that right is what earns a vendor&apos;s trust.
      </p>
    </CaseStudy>
  );
}
