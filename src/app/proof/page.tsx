import Link from "next/link";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { claims } from "@/data/claims";
import { Ext, Page, PageHead, State, Trailer } from "@/components/mail";

const description =
  "Every number and award on Shaswat Raj's resume, with a link to where it can be checked, and whether it is a public record or self-reported.";

export const metadata: Metadata = {
  title: { absolute: `Proof — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/proof` },
  openGraph: { title: `Proof — ${DATA.name}`, description, url: `${DATA.url}/proof`, images: ["/og.png"] },
};

export default function ProofPage() {
  const pub = claims.filter((c) => c.kind === "public record").length;
  return (
    <Page>
      <PageHead
        subject="check every claim on my resume"
        fields={[
          ["Claims", `${claims.length}: ${pub} public record, ${claims.length - pub} self-reported`],
          ["Also-as", <a key="j" href="/claims.json" className="a-link">claims.json</a>],
        ]}
      >
        <p>
          <strong className="font-semibold">Public record</strong> means you can verify it on GitHub or npm without trusting me.{" "}
          <strong className="font-semibold">Self-reported</strong> means the source is my own post or dashboard: the link shows it,
          but the data behind it is mine.
        </p>
      </PageHead>

      <ul className="divide-y divide-border">
        {claims.map((c) => (
          <li key={c.claim} className="py-5">
            <p className="flex flex-wrap items-baseline gap-x-3">
              <State state={c.kind} />
              <span className="font-mono text-[0.75rem] text-muted-foreground">appears on: {c.where}</span>
            </p>
            <h2 className="mt-1.5 text-[length:var(--step-1)]">{c.claim}</h2>
            {c.note && <p className="mt-1.5 max-w-measure text-muted-foreground">{c.note}</p>}
            <div className="mt-2">
              <Trailer k="Source">
                {c.sources.map((s, i) => (
                  <span key={s.url}>
                    {i > 0 && " · "}
                    {s.url.startsWith("/") ? (
                      <Link href={s.url} className="a-link">{s.label}</Link>
                    ) : (
                      <Ext href={s.url}>{s.label}</Ext>
                    )}
                  </span>
                ))}
              </Trailer>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  );
}
