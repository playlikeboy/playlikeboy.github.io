import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

const POST =
  "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn";

export const metadata: Metadata = caseStudyMetadata(
  "bitotsav-2026",
  "Bitotsav '26: festival platform for ~5,000 participants",
  "Tech lead for BIT Mesra's annual festival: website, registration, team and points workflows, admin panel, and signed-QR entry that keeps working without network.",
);

export default function BitotsavCaseStudy() {
  return (
    <CaseStudy
      subject="Bitotsav '26: festival platform for ~5,000 participants"
      fields={[
        ["Role", "Tech Lead, BIT Mesra annual festival"],
        ["Date", "2025 – 2026"],
        ["Status", <span key="s"><State state="live" /> ran through the event</span>],
        ["Stack", "Next.js, PostgreSQL, Redis, Cloudflare"],
      ]}
      lede={
        <p>
          I led and built the technology for Bitotsav &apos;26, BIT Mesra&apos;s annual festival, for about 5,000
          participants, then ran it live through the event.
        </p>
      }
      trailers={[
        ["Source", POST, "LinkedIn post about the event"],
        ["Resume", "/resume", "/resume"],
      ]}
    >
      <h2>What I built</h2>
      <ul>
        <li>The festival website and registration.</li>
        <li>Team creation and joining, and the points system.</li>
        <li>An admin panel and internal tools for organisers and volunteers.</li>
        <li>Signed-QR entry with a scanner that keeps working in no-network zones.</li>
        <li>Redis in front of PostgreSQL for the hot paths.</li>
      </ul>

      <h2>The hard constraint: no network at the gate</h2>
      <p>
        Entry points are where everyone arrives at once, and that is exactly where mobile data gives out. A scanner that has
        to call a server for every QR code fails when it is needed most. So entry passes are signed, and the volunteer
        scanner can check a pass on the device itself and keep working when the network does not.
      </p>

      <h2>Running it</h2>
      <p>
        The users were organisers, gate volunteers and college administration, not engineers. Requirements changed up to
        the last day. I ran operations through the festival and presented the design to the college leadership.
      </p>

      <h2>What I took from it</h2>
      <p>
        Design for the failure cases first: no network, wrong data, a plan that changes the night before. The happy path
        takes care of itself.
      </p>
    </CaseStudy>
  );
}
