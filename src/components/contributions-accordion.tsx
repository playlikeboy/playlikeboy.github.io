"use client";

import { ExternalLink, GitMerge, GitPullRequest, Users } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  communityContributions,
  mergedContributions,
  openContributions,
  upstreamDocsMerged,
  type Contribution,
} from "@/data/contributions";

function ContributionList({ items }: { items: Contribution[] }) {
  return (
    <ul className="space-y-2">
      {items.map((pr) => (
        <li key={pr.url} className="rounded-md border border-border px-3 py-2 hover:bg-accent/50 transition-colors">
          <a
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                {pr.repo}
                <span className="mx-1">#{pr.number}</span>
                <span>· {pr.date}</span>
                {pr.draft && <span className="ml-1 rounded bg-accent px-1.5 py-0.5">draft</span>}
              </p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors break-words">
                {pr.title}
              </p>
            </div>
            <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-1" aria-hidden="true" />
          </a>
          {pr.formerAccount && (
            <p className="mt-1 text-xs text-muted-foreground">
              Authored as @SH20RAJ, my previous account (GitHub now shows the author as &ldquo;ghost&rdquo;).
              {pr.commitUrl && (
                <>
                  {" "}
                  <a
                    href={pr.commitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Merged commit
                  </a>
                </>
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ContributionsAccordion() {
  const upstreamRepos = new Set([...mergedContributions, ...openContributions].map((pr) => pr.repo)).size;
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Open source</p>
      <h2 className="text-lg font-bold tracking-tight mt-1 mb-1">Upstream pull requests</h2>
      <p className="text-sm text-muted-foreground mb-3">
        {mergedContributions.length} code PRs merged and {openContributions.length} in review, across{" "}
        {upstreamRepos} projects I don&apos;t maintain, plus {upstreamDocsMerged} merged documentation PRs in MoFA.
        Authored from{" "}
        <a
          href="https://github.com/playlikeboy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          @playlikeboy
        </a>{" "}
        (and @SH20RAJ before October 2026). Each entry links to the pull request.
      </p>
      <Accordion type="multiple" defaultValue={["merged", "open"]}>
        <AccordionItem value="merged">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <GitMerge className="size-4 text-[var(--duo-feather)]" aria-hidden="true" />
              Merged upstream ({mergedContributions.length})
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ContributionList items={mergedContributions} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="open">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <GitPullRequest className="size-4 text-[var(--duo-feather)]" aria-hidden="true" />
              In review upstream ({openContributions.length})
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ContributionList items={openContributions} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Users className="size-4 text-[var(--duo-feather)]" aria-hidden="true" />
              Own org &amp; college club ({communityContributions.length})
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xs text-muted-foreground mb-2">
              Merged into campusloop-space (my own org) and acm-bitmesra (my college&apos;s ACM chapter). Not counted as upstream.
            </p>
            <ContributionList items={communityContributions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
