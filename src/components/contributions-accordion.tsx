"use client";

import { ExternalLink, GitMerge, GitPullRequest } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  mergedContributions,
  openContributions,
  type Contribution,
} from "@/data/contributions";

function ContributionList({ items }: { items: Contribution[] }) {
  return (
    <ul className="space-y-2">
      {items.map((pr) => (
        <li key={pr.url}>
          <a
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 rounded-md border border-border px-3 py-2 hover:bg-accent/50 transition-colors"
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
            <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-1" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContributionsAccordion() {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Open source</p>
      <h2 className="text-lg font-bold tracking-tight mt-1 mb-1">Upstream pull requests</h2>
      <p className="text-sm text-muted-foreground mb-3">
        Authored from{" "}
        <a
          href="https://github.com/playlikeboy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          @playlikeboy
        </a>
        . Each entry links to the pull request on GitHub.
      </p>
      <Accordion type="multiple" defaultValue={["merged"]}>
        <AccordionItem value="merged">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <GitMerge className="size-4 text-[var(--duo-feather)]" />
              Merged ({mergedContributions.length})
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ContributionList items={mergedContributions} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="open">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <GitPullRequest className="size-4 text-[var(--duo-feather)]" />
              In review ({openContributions.length})
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ContributionList items={openContributions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
