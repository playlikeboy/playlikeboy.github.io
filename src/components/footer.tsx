import Link from "next/link";

// A mail signature: "-- " then who, and how to reply.
const LINKS = [
  ["email", "mailto:sh20raj@gmail.com"],
  ["github", "https://github.com/playlikeboy"],
  ["linkedin", "https://www.linkedin.com/in/sh20raj/"],
  ["peerlist", "https://peerlist.io/sh20raj"],
  ["gitlab", "https://gitlab.com/SH20RAJ"],
  ["dev.to", "https://dev.to/sh20raj"],
  ["codolio", "https://codolio.com/profile/sh20raj"],
] as const;

export default function Footer() {
  return (
    <footer className="print:hidden mt-16 border-t border-border">
      <div className="mx-auto max-w-page px-4 sm:px-6 py-8 font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
        <p aria-hidden="true">--&nbsp;</p>
        <p className="text-foreground">Shaswat Raj</p>
        <p>B.Tech CSE, BIT Mesra, graduating May 2028 · Ranchi, India</p>
        <p>Joint Secretary, ACM BIT Mesra (2026–27)</p>
        <p>Open to SDE, forward-deployed and DevOps internships and new-grad roles.</p>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="a-link"
            >
              {label}
            </a>
          ))}
          <Link href="/status" className="a-link">status</Link>
          <Link href="/story" className="a-link">story</Link>
          <Link href="/blog" className="a-link">blog</Link>
        </p>
      </div>
    </footer>
  );
}
