import Link from "next/link";
import { Ext, Page, PageHead, State, ThreadHeading, Trailer } from "@/components/mail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { roles, getRole } from "@/data/roles";

export const dynamicParams = false;

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  const title = `${role.title} — ${DATA.name}`;
  const url = `${DATA.url}/roles/${role.slug}`;
  return {
    title: { absolute: title },
    description: role.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: role.summary,
      url,
      siteName: "Shaswat Raj Portfolio",
      locale: "en_US",
      type: "profile",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: role.summary,
      creator: "@SH20RAJ",
      images: ["/og.png"],
    },
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();
  const others = roles.filter((r) => r.slug !== role.slug);

  return (
    <Page>
      <PageHead
        subject={role.title}
        fields={[
          ["From", "Shaswat Raj"],
          ["Looking-for", role.lookingFor],
        ]}
      >
        <p className="font-semibold">{role.headline}</p>
        <p className="mt-2">{role.summary}</p>
        <div className="mt-4">
          <Trailer k="Attachment">
            <a href="/resume.pdf" className="a-link">resume.pdf</a> · <Ext href="mailto:sh20raj@gmail.com">sh20raj@gmail.com</Ext> ·{" "}
            <Ext href="https://github.com/playlikeboy">github</Ext>
          </Trailer>
        </div>
      </PageHead>

      <ThreadHeading aside={`${role.evidence.length} items`}>Evidence</ThreadHeading>
      <ol className="divide-y divide-border border-y border-border">
        {role.evidence.map((e) => (
          <li key={e.title} className="py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-[length:var(--step-1)]">
                {e.href.startsWith("/") ? (
                  <Link href={e.href} className="hover:text-link">{e.title}</Link>
                ) : (
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="hover:text-link">{e.title}</a>
                )}
              </h3>
              {e.status && <State state={e.status} />}
            </div>
            <p className="mt-1.5 max-w-measure">{e.detail}</p>
          </li>
        ))}
      </ol>

      <ThreadHeading>Stack</ThreadHeading>
      <p className="font-mono text-[0.875rem]">{role.stack.join(" · ")}</p>

      <ThreadHeading>How I work</ThreadHeading>
      <ul className="max-w-measure space-y-2">
        {role.howIWork.map((h) => (
          <li key={h} className="quoted">{h}</li>
        ))}
      </ul>

      <ThreadHeading>Other roles</ThreadHeading>
      <ul className="thread">
        {others.map((r) => (
          <li key={r.slug} className="py-1">
            <Link href={`/roles/${r.slug}`} className="a-link font-mono text-[0.875rem]">{r.title}</Link>
            <span className="text-muted-foreground"> · {r.headline}</span>
          </li>
        ))}
      </ul>
    </Page>
  );
}
