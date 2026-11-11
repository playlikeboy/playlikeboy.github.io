"use client";

import { useEffect, useState } from "react";

const SUMMARY_URL =
  "https://raw.githubusercontent.com/playlikeboy/playlikeboy.github.io/status/summary.json";

interface SiteSummary {
  name: string;
  url: string;
  current: { status: number; ok: boolean; ms: number; at?: string };
  uptime30d: number | null;
  checks: number;
  avgMs: number;
}

export function StatusClient() {
  const [data, setData] = useState<{ updated: string; sites: SiteSummary[] } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(SUMMARY_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(setData)
      .catch(() => setFailed(true));
  }, []);

  if (failed) {
    return (
      <p className="mt-6 font-mono text-[0.8125rem] text-muted-foreground">
        No check results yet. The first hourly run of the uptime workflow creates them.
      </p>
    );
  }
  if (!data) return <p className="mt-6 font-mono text-[0.8125rem] text-muted-foreground">Loading the latest checks…</p>;

  return (
    <>
      <p className="trailer mt-4">
        <b>Last-check:</b> {new Date(data.updated).toUTCString()}
      </p>
      <ul className="mt-3 divide-y divide-border border-y border-border font-mono text-[0.8125rem]">
        {data.sites.map((s) => (
          <li key={s.url} className="flex items-baseline justify-between gap-3 py-2.5">
            <div className="min-w-0">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="a-link font-semibold">
                {s.name}
              </a>
              <p className="text-xs text-muted-foreground">
                {s.uptime30d !== null ? `${s.uptime30d}% up over ${s.checks} checks` : "no data"} · avg {s.avgMs} ms
              </p>
            </div>
            <span className={`shrink-0 font-medium uppercase ${s.current.ok ? "state-merged" : "text-destructive"}`}>
              [{s.current.ok ? `up ${s.current.status}` : `down ${s.current.status || "no response"}`}]
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
