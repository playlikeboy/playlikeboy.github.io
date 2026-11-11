import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "campusloop",
  "CampusLoop: a student network gated by college email",
  "CampusLoop is a student-only network: sign-up accepts the email domains of 1,350+ Indian colleges. Feeds, marketplace, polls and time capsules on Next.js, PostgreSQL and Cloudflare Workers.",
);

export default function CampusLoopCaseStudy() {
  return (
    <CaseStudy
      subject="CampusLoop: a student network gated by college email"
      fields={[
        ["Date", "2026 – present"],
        ["Status", <span key="s"><State state="live" /> campusloop.space</span>],
        ["Stack", "Next.js, TypeScript, PostgreSQL, Cloudflare Workers, WebSockets, PWA"],
      ]}
      lede={
        <p>
          A social network where only students can get in: you sign up with your college email, and the sign-up accepts the
          email domains of 1,350+ Indian colleges. Inside are campus feeds, a student marketplace, polls and time capsules.
        </p>
      }
      trailers={[
        ["Live", "https://campusloop.space"],
        ["Code", "https://github.com/playlikeboy/campusloop", "playlikeboy/campusloop"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        Students talk across WhatsApp groups that expose phone numbers, public subreddits that anyone can flood, and
        anonymous apps with no verification at all. None of them can tell you that the person posting is actually at your
        college.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>
          Sign-up checked against a directory of college email domains (<code>.ac.in</code>, <code>.edu.in</code> and
          college-specific domains), 1,350+ colleges so far.
        </li>
        <li>Data scoped per college, so one campus never sees another&apos;s posts.</li>
        <li>Pseudonymous posting kept separate from the verified account, for confessions and sensitive topics.</li>
        <li>Live campus feeds over WebSockets, a buy-and-sell marketplace, canteen and mess polls, and batch time capsules.</li>
      </ul>

      <h2>The trade-off</h2>
      <p>
        Verification and anonymity pull against each other: the system has to know you are a student and still let you
        post without your name. Keeping the verified identity and the posting identity in separate records is how CampusLoop
        holds both.
      </p>

      <h2>Where it stands</h2>
      <p>
        It is live and in active development. 1,350+ is the number of college domains sign-up accepts, not a user count.
      </p>
    </CaseStudy>
  );
}
