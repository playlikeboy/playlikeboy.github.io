// Every number and award on the resume, with where to check it.
// "public record" = a reviewer can verify it on GitHub/npm without trusting me.
// "self-reported" = my own post or dashboard screenshot; the link shows it, but
// the underlying data is mine.
// Rendered at /proof and published as /claims.json. Last checked: 2026-11-11.

export type ClaimKind = "public record" | "self-reported";

export interface Claim {
  claim: string;
  where: string; // where the claim appears
  kind: ClaimKind;
  sources: { label: string; url: string }[];
  note?: string;
}

export const claims: Claim[] = [
  {
    claim: "Merged fix in google-gemini/gemini-cli (#20778)",
    where: "Resume, portfolio, GitHub README",
    kind: "public record",
    sources: [
      { label: "Pull request", url: "https://github.com/google-gemini/gemini-cli/pull/20778" },
      { label: "Merged commit", url: "https://github.com/google-gemini/gemini-cli/commit/f11bd3d0797f1626929b9d095efcb5816c18900c" },
    ],
    note: "Authored as @SH20RAJ, my previous account; GitHub shows the PR author as \"ghost\". The commit carries my name.",
  },
  {
    claim: "3 merged code PRs and 5 merged docs PRs in mofa-org/mofa (Rust)",
    where: "Portfolio, GitHub README",
    kind: "public record",
    sources: [
      { label: "#1577", url: "https://github.com/mofa-org/mofa/pull/1577" },
      { label: "#1587", url: "https://github.com/mofa-org/mofa/pull/1587" },
      { label: "#1594", url: "https://github.com/mofa-org/mofa/pull/1594" },
    ],
    note: "Authored as @SH20RAJ. Docs PRs: #1095, #1097, #1098, #1099, #1100.",
  },
  {
    claim: "Merged fixes in preactjs/preact (#5331) and codex-team/editor.js (#3040)",
    where: "Resume, portfolio, GitHub README",
    kind: "public record",
    sources: [
      { label: "preact #5331", url: "https://github.com/preactjs/preact/pull/5331" },
      { label: "editor.js #3040", url: "https://github.com/codex-team/editor.js/pull/3040" },
    ],
  },
  {
    claim: "Pull requests in review at Kmesh, Jaeger, Lexical, Radix UI and others",
    where: "Resume, portfolio, GitHub README",
    kind: "public record",
    sources: [
      { label: "Open PRs by @playlikeboy", url: "https://github.com/search?q=author%3Aplaylikeboy+is%3Apr+is%3Aopen&type=pullrequests" },
      { label: "List on this site", url: "/#open-source" },
    ],
  },
  {
    claim: "Upstream bugs reproduced and filed (Kmesh, Jaeger, drizzle-orm, JSON Schema)",
    where: "Portfolio, GitHub README",
    kind: "public record",
    sources: [
      { label: "Issues by @playlikeboy", url: "https://github.com/search?q=author%3Aplaylikeboy+is%3Aissue&type=issues" },
      { label: "Bug journal", url: "/bugs" },
    ],
  },
  {
    claim: "50+ npm packages published",
    where: "Resume (older versions), GitHub README (older versions)",
    kind: "public record",
    sources: [{ label: "npm ~sh20raj", url: "https://www.npmjs.com/~sh20raj" }],
    note: "npm search for maintainer:sh20raj returned 57 packages on 2026-11-11.",
  },
  {
    claim: "SopKit: 605+ tools; 4.3M+ requests and 213K+ visits in 30 days",
    where: "Resume, portfolio, GitHub README",
    kind: "self-reported",
    sources: [
      { label: "Analytics post", url: "https://www.linkedin.com/posts/sh20raj_indiedev-seo-growthhacking-activity-7392263918737498112-Adp_" },
      { label: "Live site", url: "https://sopkit.github.io" },
      { label: "Code", url: "https://github.com/SopKit/sopkit.github.io" },
    ],
  },
  {
    claim: "Bitotsav '26: tech lead for a festival of ~5,000 participants",
    where: "Resume, portfolio, GitHub README",
    kind: "self-reported",
    sources: [
      { label: "Post", url: "https://www.linkedin.com/posts/sh20raj_bitotsav-2026-what-a-journey-what-a-responsibility-activity-7442608760193216512-Y_nn" },
      { label: "Case study", url: "/projects/bitotsav-2026" },
    ],
  },
  {
    claim: "CampusLoop: sign-up accepts the email domains of 1,350+ Indian colleges",
    where: "Resume, portfolio, GitHub README",
    kind: "self-reported",
    sources: [
      { label: "Live site", url: "https://campusloop.space" },
      { label: "Code", url: "https://github.com/playlikeboy/campusloop" },
    ],
    note: "This counts supported college domains, not users.",
  },
  {
    claim: "AICTE Productization Fellowship 2025: national Top 500 (Kishan AI)",
    where: "Resume, portfolio",
    kind: "self-reported",
    sources: [
      { label: "Post", url: "https://www.linkedin.com/posts/sh20raj_apf2025-yukti2025-aicte-activity-7396536427284447233-9KYM" },
      { label: "Code", url: "https://github.com/playlikeboy/KishanAI" },
    ],
  },
  {
    claim: "Apify hackathon prize ($100) for a web-scraping actor",
    where: "Resume, portfolio",
    kind: "self-reported",
    sources: [{ label: "Apify profile", url: "https://apify.com/express_kingfisher" }],
  },
  {
    claim: "Technical writing on Dev.to",
    where: "Resume",
    kind: "self-reported",
    sources: [{ label: "Dev.to profile", url: "https://dev.to/sh20raj" }],
    note: "The follower count on the resume is from my Dev.to dashboard.",
  },
];
