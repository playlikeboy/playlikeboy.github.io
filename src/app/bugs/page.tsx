import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { bugs, type BugStatus } from "@/data/bugs";
import { Ext, Page, PageHead, State, Trailer } from "@/components/mail";

const description =
  "Bugs Shaswat Raj found in open-source projects maintained by others: Kmesh, Jaeger, gemini-cli, MoFA and more. Each one reproduced, filed upstream, and fixed where possible.";

export const metadata: Metadata = {
  title: { absolute: `Bug journal — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/bugs` },
  openGraph: { title: `Bug journal — ${DATA.name}`, description, url: `${DATA.url}/bugs`, images: ["/og.png"] },
};

const order: BugStatus[] = ["fixed (merged)", "fix in review", "fix ready", "reported"];

export default function BugsPage() {
  const sorted = [...bugs].sort(
    (a, b) => order.indexOf(a.status) - order.indexOf(b.status) || b.date.localeCompare(a.date),
  );
  const count = (s: BugStatus) => bugs.filter((b) => b.status === s).length;
  const projects = new Set(bugs.map((b) => b.project)).size;

  return (
    <Page>
      <PageHead
        subject="bugs I found in code I don't maintain"
        fields={[
          ["From", "Shaswat Raj"],
          ["Count", `${bugs.length} bugs, ${projects} projects: ${count("fixed (merged)")} fixed and merged, ${count("fix in review")} fixes in review, ${count("fix ready")} fix ready, ${count("reported")} reported`],
        ]}
      >
        <p>
          Each of these I reproduced first, then filed with the maintainers. Where I could, I wrote the fix. Every entry links to
          the public issue or pull request, so you can read the conversation with the maintainers yourself.
        </p>
      </PageHead>

      <ol className="divide-y divide-border">
        {sorted.map((bug) => (
          <li key={(bug.issueUrl ?? bug.fixUrl) as string} className="py-5">
            <p className="flex flex-wrap items-baseline gap-x-3 font-mono text-[0.8125rem] text-muted-foreground">
              <State state={bug.status} />
              <span className="text-foreground font-semibold">{bug.project}</span>
              <span>{bug.language}</span>
              <span>{bug.date}</span>
            </p>
            <h2 className="mt-1.5 text-[length:var(--step-1)]">{bug.title}</h2>
            <div className="mt-2 max-w-measure space-y-1.5">
              <p>
                <span className="font-mono text-[0.8125rem] text-muted-foreground">Bug: </span>
                {bug.symptom}
              </p>
              {bug.fix && (
                <p>
                  <span className="font-mono text-[0.8125rem] text-muted-foreground">Fix: </span>
                  {bug.fix}
                </p>
              )}
            </div>
            <div className="mt-2">
              {bug.issueUrl && (
                <Trailer k="Reported-in">
                  <Ext href={bug.issueUrl}>{bug.issueUrl.replace("https://github.com/", "").replace("/issues/", "#")}</Ext>
                </Trailer>
              )}
              {bug.fixUrl && (
                <Trailer k="Fix">
                  <Ext href={bug.fixUrl}>{bug.fixLabel ?? "link"}</Ext>
                </Trailer>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
