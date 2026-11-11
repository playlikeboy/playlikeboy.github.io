import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/data/resume";
import { StatusClient } from "./status-client";

const description =
  "Live uptime of the products Shaswat Raj runs: SopKit, CampusLoop, IndexFast, Debo and MCP Pure, checked every hour by GitHub Actions.";

export const metadata: Metadata = {
  title: { absolute: `Status — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/status` },
};

export default function StatusPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" aria-hidden="true" /> Home
      </Link>
      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight">Products I run, checked every hour</h1>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        A GitHub Actions job requests each site hourly and keeps 30 days of results on the{" "}
        <a
          href="https://github.com/playlikeboy/playlikeboy.github.io/tree/status"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          status branch
        </a>
        . The{" "}
        <a
          href="https://github.com/playlikeboy/playlikeboy.github.io/blob/main/scripts/uptime.mjs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          checker
        </a>{" "}
        is 60 lines of Node with no dependencies.
      </p>
      <StatusClient />
    </main>
  );
}
