import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

const POST = "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_";

export const metadata: Metadata = caseStudyMetadata(
  "sopkit",
  "SopKit: 605+ browser tools, 4.3M requests in 30 days",
  "SopKit (formerly 30tools): 605+ developer, image and PDF tools that run on the visitor's device. 4.3M+ requests and 213K+ visits in 30 days, built and run solo.",
);

export default function SopKitCaseStudy() {
  return (
    <CaseStudy
      subject="SopKit: 605+ browser tools that never upload your files"
      fields={[
        ["Date", "2024 – present"],
        ["Status", <span key="s"><State state="live" /> sopkit.github.io</span>],
        ["Stack", "Next.js, TypeScript, WebAssembly, Web APIs"],
        ["Formerly", "30tools.com"],
      ]}
      lede={
        <p>
          A suite of 605+ developer, image and PDF tools that run on the visitor&apos;s device. Nothing is uploaded and there
          is no server to pay for. I built and run it alone. In one 30-day window it served 4.3M+ requests and 213K+ visits.
        </p>
      }
      trailers={[
        ["Live", "https://sopkit.github.io"],
        ["Code", "https://github.com/SopKit/sopkit.github.io", "SopKit/sopkit.github.io"],
        ["Source", POST, "LinkedIn post with the analytics (self-reported)"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        Most tool sites (PDF mergers, image compressors, JSON formatters) upload your file to a server for work the browser
        can already do. That leaks private documents, adds a round trip for no reason, and usually comes with sign-up walls
        and quotas.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>Tools that process files in the browser with WebAssembly and standard Web APIs, so files stay on the device.</li>
        <li>A static site with no backend to run: the cost of serving one more visitor is close to zero.</li>
        <li>
          Generated pages per tool and category, with structured data and IndexNow submission so new tools are found quickly
          by search engines.
        </li>
      </ul>

      <h2>Moving to sopkit.github.io</h2>
      <p>
        It started as 30tools.com and outgrew both the name and the domain. I moved it to <code>sopkit.github.io</code> so
        it stays up without a domain to renew, and the code is public for anyone to inspect.
      </p>

      <h2>Results</h2>
      <p>
        In the 30-day window in my analytics post: 4.3M+ requests, 213K+ visits, and over 500K search impressions. These
        numbers are self-reported; the post shows the dashboards.
      </p>

      <h2>What I took from it</h2>
      <p>
        When the browser can do the work, a server is a liability: it costs money, holds data you should not have, and adds
        latency. Pushing work to the client let one person run something at this scale.
      </p>
    </CaseStudy>
  );
}
