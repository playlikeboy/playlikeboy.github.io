import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DATA } from "@/data/resume";
import { claims } from "@/data/claims";

const description =
  "Every number and award on Shaswat Raj's resume, with a link to where it can be checked, and whether it is a public record or self-reported.";

export const metadata: Metadata = {
  title: { absolute: `Proof — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/proof` },
  openGraph: { title: `Proof — ${DATA.name}`, description, url: `${DATA.url}/proof`, images: ["/og.png"] },
};

export default function ProofPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" aria-hidden="true" /> Home
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">Proof</p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight">Check every claim on my resume</h1>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        Each line links to its source. <strong className="text-foreground">Public record</strong> means you can verify it on
        GitHub or npm without trusting me. <strong className="text-foreground">Self-reported</strong> means the source is my
        own post or dashboard. The same list is available as{" "}
        <a href="/claims.json" className="underline underline-offset-2 hover:text-foreground">claims.json</a>.
      </p>

      <ul className="mt-8 space-y-3">
        {claims.map((c) => (
          <li key={c.claim} className="rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-sm font-semibold leading-snug">{c.claim}</h2>
              <span
                className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-medium ${
                  c.kind === "public record"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : "bg-accent text-muted-foreground"
                }`}
              >
                {c.kind}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Appears on: {c.where}</p>
            {c.note && <p className="mt-1.5 text-sm text-muted-foreground">{c.note}</p>}
            <div className="mt-2 flex flex-wrap gap-3 text-xs font-medium">
              {c.sources.map((s) =>
                s.url.startsWith("/") ? (
                  <Link key={s.url} href={s.url} className="underline-offset-2 hover:underline">
                    {s.label}
                  </Link>
                ) : (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
                    {s.label} <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                ),
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
