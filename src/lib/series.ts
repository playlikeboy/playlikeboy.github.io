import { bugs, type Bug } from "@/data/bugs";
import {
  communityContributions,
  mergedContributions,
  openContributions,
  upstreamDocsMerged,
  type Contribution,
} from "@/data/contributions";

export type PatchState = "merged" | "in review" | "draft";

export interface Patch extends Contribution {
  state: PatchState;
  project: string; // short project name, e.g. "gemini-cli"
  subject: string; // PR title without its conventional-commit scope noise
  bug?: Bug; // the bug this PR fixes, when it is in the bug journal
}

const shortName = (repo: string) => repo.split("/")[1];

function toPatch(c: Contribution, state: PatchState): Patch {
  return {
    ...c,
    state: c.draft ? "draft" : state,
    project: shortName(c.repo),
    subject: c.title,
    bug: bugs.find((b) => b.fixUrl === c.url),
  };
}

// Strongest first: the fix a reviewer will recognise, then the bug fixes, then the rest.
const MERGED_ORDER = [20778, 1577, 5331, 3040, 1587, 1594];
export const mergedPatches = [...mergedContributions]
  .sort((a, b) => {
    const ia = MERGED_ORDER.indexOf(a.number);
    const ib = MERGED_ORDER.indexOf(b.number);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  })
  .map((c) => toPatch(c, "merged"));
export const reviewPatches = openContributions.map((c) => toPatch(c, "in review"));
export const communityPatches = communityContributions.map((c) => toPatch(c, "merged"));

export const seriesStats = {
  merged: mergedPatches.length,
  inReview: reviewPatches.filter((p) => p.state === "in review").length,
  drafts: reviewPatches.filter((p) => p.state === "draft").length,
  docsMerged: upstreamDocsMerged,
  bugsFiled: bugs.filter((b) => b.issueUrl && !b.status.startsWith("fixed (merged)")).length,
  projects: new Set([...mergedPatches, ...reviewPatches].map((p) => p.repo)).size,
};
