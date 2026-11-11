// Bugs I found in other people's projects: reproduced, filed upstream, and
// (where possible) fixed. Every entry links to a public issue, PR or commit.
// Only describe what the issue and PR themselves say; no extra claims.
// Last checked: 2026-11-11.

export type BugStatus = "fixed (merged)" | "fix in review" | "fix ready" | "reported";

export interface Bug {
  project: string;
  language: string;
  title: string;
  symptom: string;
  fix?: string; // what the fix changes, when there is one
  issueUrl?: string;
  fixUrl?: string;
  fixLabel?: string;
  status: BugStatus;
  date: string; // date the issue was filed (or the fix merged, for older work)
}

export const bugs: Bug[] = [
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "kmesh-cni panics with a nil dereference when CNI_ARGS cannot be loaded",
    symptom: "CmdAdd dereferenced a nil result when CNI_ARGS failed to parse, crashing the CNI plugin instead of passing the previous result through.",
    fix: "Print the previous CNI result instead of dereferencing nil.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1988",
    fixUrl: "https://github.com/kmesh-net/kmesh/pull/1989",
    fixLabel: "PR #1989",
    status: "fix in review",
    date: "2026-11-10",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "Repeated AddDomainInQueue calls start duplicate DNS refresh loops that never stop",
    symptom: "Every xDS update for the same hostname started another refresh loop, so loops accumulated for the life of the process.",
    fix: "Key the refresh queue by domain so one hostname has one loop.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1978",
    fixUrl: "https://github.com/kmesh-net/kmesh/pull/1987",
    fixLabel: "PR #1987",
    status: "fix in review",
    date: "2026-11-01",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "utils.Execute reports failure whenever a command writes to stderr, even on exit 0",
    symptom: "Harmless stderr output, such as iptables-legacy warnings, made successful commands count as failures.",
    fix: "Decide success by exit status, not by stderr.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1976",
    fixUrl: "https://github.com/kmesh-net/kmesh/pull/1977",
    fixLabel: "PR #1977",
    status: "fix in review",
    date: "2026-11-01",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "kmeshctl waypoint compares the dataplane-mode label case-sensitively",
    symptom: "kmeshctl and the daemon disagreed about whether a namespace was enrolled when the istio.io/dataplane-mode label used different casing.",
    fix: "Compare the label case-insensitively, the same way the daemon does.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1982",
    fixUrl: "https://github.com/kmesh-net/kmesh/pull/1983",
    fixLabel: "PR #1983",
    status: "fix in review",
    date: "2026-11-05",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "HashName maps read by the dual-engine BPF dump while the workload processor writes them",
    symptom: "Concurrent map read and write between two goroutines, which Go treats as a fatal crash.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1980",
    status: "reported",
    date: "2026-11-01",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "MCP get_mesh_namespaces misses namespaces labelled with a different case",
    symptom: "The same label case mismatch as the waypoint bug, in the MCP server's namespace listing.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1990",
    status: "reported",
    date: "2026-11-10",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "MCP config_dump returns 404 when the optional mode argument is omitted",
    symptom: "An optional argument behaved as required.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1979",
    status: "reported",
    date: "2026-11-01",
  },
  {
    project: "kmesh-net/kmesh",
    language: "Go",
    title: "kmeshctl secret create fails with AlreadyExists when the existing secret has no SPI",
    symptom: "Creating the IPsec secret failed instead of updating an existing secret that lacked the SPI field.",
    issueUrl: "https://github.com/kmesh-net/kmesh/issues/1991",
    status: "reported",
    date: "2026-11-10",
  },
  {
    project: "jaegertracing/jaeger",
    language: "Go",
    title: "File sampling provider serves out-of-range probabilistic and rate-limiting params",
    symptom: "A sampling strategy file with a probability outside [0, 1] or a rate limit outside int32 was accepted and served to SDKs.",
    fix: "Reject those values at startup and on hot reload.",
    issueUrl: "https://github.com/jaegertracing/jaeger/issues/10023",
    fixUrl: "https://github.com/jaegertracing/jaeger/pull/10024",
    fixLabel: "PR #10024",
    status: "fix in review",
    date: "2026-11-02",
  },
  {
    project: "jaegertracing/jaeger",
    language: "Go",
    title: "Prometheus metrics reader sends the wrong rate window for multi-unit ratePer values",
    symptom: "SPM rate queries used the wrong window when ratePer was not a single unit.",
    issueUrl: "https://github.com/jaegertracing/jaeger/issues/10114",
    status: "reported",
    date: "2026-11-10",
  },
  {
    project: "jaegertracing/jaeger",
    language: "Go",
    title: "Elasticsearch SPM call rates are low by (lookback-1)/lookback, and zero when ratePer <= step",
    symptom: "Service Performance Monitoring under-reported call rates on Elasticsearch.",
    issueUrl: "https://github.com/jaegertracing/jaeger/issues/10115",
    status: "reported",
    date: "2026-11-10",
  },
  {
    project: "jaegertracing/jaeger",
    language: "Go",
    title: "ES/OpenSearch SPM queries grouped by operation are capped at 10 operations per service",
    symptom: "Services with more than 10 operations silently lost the rest in SPM.",
    issueUrl: "https://github.com/jaegertracing/jaeger/issues/10116",
    status: "reported",
    date: "2026-11-10",
  },
  {
    project: "drizzle-team/drizzle-orm",
    language: "TypeScript",
    title: "drizzle-kit pull with camel casing turns FIRST_NAME into firstNAME since rc.5",
    symptom: "Introspection produced wrong field names for SCREAMING_SNAKE_CASE columns.",
    fix: "Fix with tests on a fork branch, linked from the issue (the repo limits PRs to collaborators).",
    issueUrl: "https://github.com/drizzle-team/drizzle-orm/issues/6667",
    fixUrl: "https://github.com/playlikeboy/drizzle-orm/tree/fix/kit-pull-camel-screaming-snake",
    fixLabel: "fix branch",
    status: "fix ready",
    date: "2026-11-10",
  },
  {
    project: "json-schema-org/website",
    language: "TypeScript",
    title: "Headings with inline code or formatting produce truncated anchor IDs",
    symptom: "Table-of-contents and internal links broke for any heading containing code or formatting.",
    issueUrl: "https://github.com/json-schema-org/website/issues/2576",
    status: "reported",
    date: "2026-10-21",
  },
  {
    project: "google-gemini/gemini-cli",
    language: "TypeScript",
    title: "Cancelling a turn did not cancel the in-flight chat-compression request",
    symptom: "The AbortSignal stopped propagating before the compression call, so a cancelled turn kept a model request running.",
    fix: "Thread the AbortSignal through the execution and compression layers.",
    issueUrl: "https://github.com/google-gemini/gemini-cli/issues/20405",
    fixUrl: "https://github.com/google-gemini/gemini-cli/pull/20778",
    fixLabel: "PR #20778 (as @SH20RAJ)",
    status: "fixed (merged)",
    date: "2026-03-25",
  },
  {
    project: "mofa-org/mofa",
    language: "Rust",
    title: "Cron schedule parsing panicked on invalid input",
    symptom: "An unwrap() in cron parsing turned a bad schedule string into a panic.",
    fix: "Return a proper error instead of unwrapping.",
    issueUrl: "https://github.com/mofa-org/mofa/issues/1476",
    fixUrl: "https://github.com/mofa-org/mofa/pull/1577",
    fixLabel: "PR #1577 (as @SH20RAJ)",
    status: "fixed (merged)",
    date: "2026-04-05",
  },
];
