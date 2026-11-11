import Link from "next/link";
import type { Metadata } from "next";
import { Page, PageHead } from "@/components/mail";

// Pages removed when the site became hiring-only. Old links land here and
// are sent on to the closest current page instead of a 404.
const MOVED: Record<string, string> = {
  services: "/",
  hire: "/",
  "saas-mvp": "/",
  "ai-automation": "/",
  "landing-pages": "/",
  "growth-systems": "/",
  "design-studio": "/projects",
  marketplace: "/projects",
  mentorship: "/",
  startups: "/projects",
  "founding-engineer": "/roles/fde",
  book: "/",
  "youtube-thumbnail": "/",
  editor: "/resume",
  "projects-dump": "/projects",
  building: "/projects",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(MOVED).map((legacy) => ({ legacy }));
}

export const metadata: Metadata = { robots: { index: false, follow: true } };

export default async function Moved({ params }: { params: Promise<{ legacy: string }> }) {
  const { legacy } = await params;
  const to = MOVED[legacy] ?? "/";
  return (
    <Page>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={`https://playlikeboy.github.io${to === "/" ? "" : to}`} />
      <PageHead subject="this page moved">
        <p>
          /{legacy} is gone; this site now covers engineering work only. Taking you to{" "}
          <Link href={to} className="a-link">{to}</Link>.
        </p>
      </PageHead>
    </Page>
  );
}
