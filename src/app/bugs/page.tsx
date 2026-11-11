import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DATA } from "@/data/resume";
import { bugs, type BugStatus } from "@/data/bugs";

const description =
  "Bugs Shaswat Raj found in open-source projects maintained by others: Kmesh, Jaeger, gemini-cli, MoFA and more. Each one reproduced, filed upstream, and fixed where possible.";

export const metadata: Metadata = {
  title: { absolute: `Bug journal — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/bugs` },
  openGraph: { title: `Bug journal — ${DATA.name}`, description, url: `${DATA.url}/bugs`, images: ["/og.png"] },
};

const statusStyle: Record<BugStatus, string> = {
  "fixed (merged)": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "fix in review": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  "fix ready": "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  reported: "bg-accent text-muted-foreground",
};

const order: BugStatus[] = ["fixed (merged)", "fix in review", "fix ready", "reported"];

export default function BugsPage() {
  const sorted = [...bugs].sort(
    (a, b) => order.indexOf(a.status) - order.indexOf(b.status) || b.date.localeCompare(a.date),
  );
  const count = (s: BugStatus) => bugs.filter((b) => b.status === s).length;
  const projects = new Set(bugs.map((b) => b.project)).size;

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" aria-hidden="true" /> Home
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">Bug journal</p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight">Bugs I found in code I don&apos;t maintain</h1>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {bugs.length} bugs across {projects} projects. Each one I reproduced first, then filed with the maintainers. Where I
        could, I wrote the fix. {count("fixed (merged)")} fixes are merged, {count("fix in review")} are in review and{" "}
        {count("fix ready")} is ready on a branch. Every row links to the public issue or pull request.
      </p>

      <ol className="mt-8 space-y-4">
        {sorted.map((bug) => (
          <li key={(bug.issueUrl ?? bug.fixUrl) as string} className="rounded-lg border border-border p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{bug.project}</span>
              <span>· {bug.language}</span>
              <span>· {bug.date}</span>
              <span className={`ml-auto rounded px-1.5 py-0.5 font-medium ${statusStyle[bug.status]}`}>{bug.status}</span>
            </div>
            <h2 className="mt-2 text-sm font-semibold leading-snug">{bug.title}</h2>
            <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
              <div>
                <dt className="inline font-medium text-foreground">Symptom: </dt>
                <dd className="inline">{bug.symptom}</dd>
              </div>
              {bug.fix && (
                <div>
                  <dt className="inline font-medium text-foreground">Fix: </dt>
                  <dd className="inline">{bug.fix}</dd>
                </div>
              )}
            </dl>
            <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium">
              {bug.issueUrl && (
                <a href={bug.issueUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
                  Issue <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              )}
              {bug.fixUrl && (
                <a href={bug.fixUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
                  {bug.fixLabel ?? "Fix"} <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
