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
      <p className="mt-8 text-sm text-muted-foreground">
        No check results yet. The first hourly run of the uptime workflow creates them.
      </p>
    );
  }
  if (!data) return <p className="mt-8 text-sm text-muted-foreground">Loading the latest checks…</p>;

  return (
    <>
      <p className="mt-2 text-xs text-muted-foreground">
        Last check: {new Date(data.updated).toUTCString()}
      </p>
      <ul className="mt-6 divide-y divide-border rounded-lg border border-border">
        {data.sites.map((s) => (
          <li key={s.url} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline-offset-2 hover:underline">
                {s.name}
              </a>
              <p className="text-xs text-muted-foreground">
                {s.uptime30d !== null ? `${s.uptime30d}% up over ${s.checks} checks` : "no data"} · avg {s.avgMs} ms
              </p>
            </div>
            <span
              className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${
                s.current.ok
                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                  : "bg-red-500/10 text-red-700 dark:text-red-400"
              }`}
            >
              {s.current.ok ? `up · ${s.current.status}` : `down · ${s.current.status || "no response"}`}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
