import Link from "next/link";
import type { ReactNode } from "react";
import { Ext, Page, PageHead, Trailer } from "@/components/mail";

export type TrailerLink = [key: string, href: string, label?: string];

/** One case study = one message: Subject + header fields, a letter body, trailers. */
export function CaseStudy({
  subject,
  fields,
  lede,
  trailers,
  children,
}: {
  subject: ReactNode;
  fields: [string, ReactNode][];
  lede: ReactNode;
  trailers: TrailerLink[];
  children: ReactNode;
}) {
  return (
    <Page>
      <p className="mb-6 font-mono text-[0.8125rem]">
        <Link href="/projects" className="a-link">← projects</Link>
      </p>
      <PageHead subject={subject} fields={fields}>
        {lede}
      </PageHead>
      <div className="letter mt-8">{children}</div>
      <div className="mt-10 border-t border-border pt-4">
        {trailers.map(([k, href, label]) => (
          <Trailer key={k + href} k={k}>
            {href.startsWith("/") ? (
              <Link href={href} className="a-link">{label ?? href}</Link>
            ) : (
              <Ext href={href}>{label ?? href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</Ext>
            )}
          </Trailer>
        ))}
      </div>
    </Page>
  );
}

export function caseStudyMetadata(slug: string, title: string, description: string) {
  const url = `https://playlikeboy.github.io/projects/${slug}`;
  return {
    title: { absolute: `${title} — Shaswat Raj` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Shaswat Raj`,
      description,
      url,
      siteName: "Shaswat Raj",
      locale: "en_US",
      type: "article" as const,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" as const, title: `${title} — Shaswat Raj`, description, creator: "@SH20RAJ" },
  };
}
