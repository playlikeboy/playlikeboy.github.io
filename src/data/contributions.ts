// Pull requests behind the "Open source" section and the role pages.
// Keep this list factual: every entry must be a real PR URL.
//
// Two groups, kept apart on purpose:
//   - upstream: projects maintained by people outside my own orgs
//   - community: my own org (campusloop-space) and my college club (acm-bitmesra)
// Counting community PRs as "upstream" reads as padding, so they never feed
// the upstream totals.
//
// Work before October 2026 was authored from my old account @SH20RAJ, which
// no longer exists; GitHub now shows those PRs under "ghost". Those entries
// carry `formerAccount: true` and link the merged commit as well.
//
// Refresh with:
//   gh search prs --author playlikeboy --merged
//   gh search prs --author playlikeboy --state open
// Last refreshed: 2026-11-11.

export interface Contribution {
  repo: string;
  number: number;
  title: string;
  url: string;
  date: string; // merged date for merged PRs, opened date for open PRs (YYYY-MM-DD)
  draft?: boolean;
  formerAccount?: boolean; // authored as @SH20RAJ before the account move
  commitUrl?: string; // merged commit, for PRs whose author now shows as "ghost"
}

export const mergedContributions: Contribution[] = [
  {
    repo: "codex-team/editor.js",
    number: 3040,
    title: 'fix(inline-toolbar): do not show "Convert to" when there is nothing to convert to',
    url: "https://github.com/codex-team/editor.js/pull/3040",
    date: "2026-11-01",
  },
  {
    repo: "preactjs/preact",
    number: 5331,
    title: "fix(types): allow list attribute on all valid input types",
    url: "https://github.com/preactjs/preact/pull/5331",
    date: "2026-10-25",
  },
  {
    repo: "mofa-org/mofa",
    number: 1594,
    title: "refactor(foundation): add #[non_exhaustive] to Backoff and CircuitState enums",
    url: "https://github.com/mofa-org/mofa/pull/1594",
    date: "2026-04-12",
    formerAccount: true,
  },
  {
    repo: "mofa-org/mofa",
    number: 1587,
    title: "refactor(kernel): add #[non_exhaustive] to all public enums in mofa-kernel",
    url: "https://github.com/mofa-org/mofa/pull/1587",
    date: "2026-04-12",
    formerAccount: true,
  },
  {
    repo: "mofa-org/mofa",
    number: 1577,
    title: "fix(foundation): replace unwrap() with error handling in cron schedule parsing",
    url: "https://github.com/mofa-org/mofa/pull/1577",
    date: "2026-04-05",
    formerAccount: true,
  },
  {
    repo: "google-gemini/gemini-cli",
    number: 20778,
    title: "fix(core): thread AbortSignal to chat compression requests",
    url: "https://github.com/google-gemini/gemini-cli/pull/20778",
    date: "2026-03-25",
    formerAccount: true,
    commitUrl:
      "https://github.com/google-gemini/gemini-cli/commit/f11bd3d0797f1626929b9d095efcb5816c18900c",
  },
];

// Five documentation PRs to mofa-org/mofa (#1095, #1097, #1098, #1099, #1100,
// merged 2026-03-10) are real but are counted separately from code changes.
export const upstreamDocsMerged = 5;

// Merged PRs to my own org and my college club. Shown, but not counted as upstream.
export const communityContributions: Contribution[] = [
  {
    repo: "campusloop-space/dsaloop",
    number: 1,
    title: "feat: full online compiler, CodeMirror 6 workspace, and multi-language support",
    url: "https://github.com/campusloop-space/dsaloop/pull/1",
    date: "2026-10-22",
  },
  {
    repo: "acm-bitmesra/acm-bitmesra.github.io",
    number: 3,
    title: "feat: student developer platform with verified identities and rankings",
    url: "https://github.com/acm-bitmesra/acm-bitmesra.github.io/pull/3",
    date: "2026-10-22",
  },
];

export const openContributions: Contribution[] = [
  {
    repo: "kmesh-net/kmesh",
    number: 1989,
    title: "fix(cni): print the previous result when CNI_ARGS cannot be loaded",
    url: "https://github.com/kmesh-net/kmesh/pull/1989",
    date: "2026-11-10",
  },
  {
    repo: "kmesh-net/kmesh",
    number: 1987,
    title: "fix(dns): key the refresh queue by domain to avoid duplicate loops",
    url: "https://github.com/kmesh-net/kmesh/pull/1987",
    date: "2026-11-10",
  },
  {
    repo: "kmesh-net/kmesh",
    number: 1983,
    title: "waypoint: compare dataplane-mode label case-insensitively like the daemon",
    url: "https://github.com/kmesh-net/kmesh/pull/1983",
    date: "2026-11-05",
  },
  {
    repo: "codex-team/editor.js",
    number: 3041,
    title: "fix(sanitizer): merge sanitize rules for the same tag instead of overwriting them",
    url: "https://github.com/codex-team/editor.js/pull/3041",
    date: "2026-11-02",
  },
  {
    repo: "jaegertracing/jaeger",
    number: 10024,
    title: "fix(sampling): reject out-of-range params in file strategies",
    url: "https://github.com/jaegertracing/jaeger/pull/10024",
    date: "2026-11-02",
  },
  {
    repo: "meta/lexical",
    number: 9705,
    title: "[lexical-react][lexical-playground] Feature: draggable individual list items",
    url: "https://github.com/meta/lexical/pull/9705",
    date: "2026-11-01",
    draft: true,
  },
  {
    repo: "kmesh-net/kmesh",
    number: 1977,
    title: "utils: decide command success by exit status, not stderr",
    url: "https://github.com/kmesh-net/kmesh/pull/1977",
    date: "2026-11-01",
  },
  {
    repo: "asyncapi/website",
    number: 5880,
    title: "fix: resolve edit links that 404 for bindings and specification pages",
    url: "https://github.com/asyncapi/website/pull/5880",
    date: "2026-10-31",
  },
  {
    repo: "asyncapi/studio",
    number: 1397,
    title: "test(studio): add jest runner and unit tests for server-api and specification services",
    url: "https://github.com/asyncapi/studio/pull/1397",
    date: "2026-10-31",
  },
  {
    repo: "radix-ui/primitives",
    number: 4252,
    title: "fix(Select): gate hideOthers on positioned state to avoid hiding active trigger",
    url: "https://github.com/radix-ui/primitives/pull/4252",
    date: "2026-10-25",
  },
  {
    repo: "radix-ui/primitives",
    number: 4251,
    title: "fix(DismissableLayer): tie inside pointer capture mark to event identity",
    url: "https://github.com/radix-ui/primitives/pull/4251",
    date: "2026-10-25",
  },
  {
    repo: "meta/lexical",
    number: 9458,
    title: "[lexical-markdown] Feature: support ordered lists that use the ')' delimiter",
    url: "https://github.com/meta/lexical/pull/9458",
    date: "2026-10-24",
  },
  {
    repo: "meta/lexical",
    number: 9447,
    title: "[lexical-markdown] Bug fix: preserve NodeState, mode and detail of text nodes with tabs on import",
    url: "https://github.com/meta/lexical/pull/9447",
    date: "2026-10-22",
  },
  {
    repo: "micromark/micromark",
    number: 255,
    title: "fix(core-commonmark): allow ordered list with leading zeros to interrupt paragraph",
    url: "https://github.com/micromark/micromark/pull/255",
    date: "2026-10-22",
  },
  {
    repo: "pingdotgg/t3code",
    number: 23775,
    title: "fix(server): suppress redundant keybindings change emission on unchanged revalidation",
    url: "https://github.com/pingdotgg/t3code/pull/23775",
    date: "2026-10-22",
  },
];
