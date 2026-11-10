"use client";

import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Systems", "AI", "Open Source", "Frontend"] as const;

function matchesFilter(project: any, filter: string) {
  if (filter === "All") return true;
  const text = (project.title + " " + project.description + " " + (project.technologies || []).join(" ")).toLowerCase();

  if (filter === "Systems") return /backend|system|redis|postgres|websocket|worker|api|infrastructure|distributed|server|database/.test(text);
  if (filter === "AI") return /ai|agent|gemini|openai|claude|rag|mcp|machine learning|vision/.test(text);
  if (filter === "Open Source") return /open source|github|npm|library|cli|mcp/.test(text);
  return /next\.js|react|frontend|ui\/ux|landing page|tailwind/.test(text);
}

export function ProjectsClient({ projects }: { projects: any[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const text = (project.title + " " + project.description + " " + (project.technologies || []).join(" ")).toLowerCase();
      return matchesFilter(project, filter) && (!normalized || text.includes(normalized));
    });
  }, [projects, filter, query]);

  const featured = filtered.slice(0, 5);
  const alsoBuilt = filtered.slice(5);

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Selected work + experiments</p>
          <h1 className="text-2xl font-bold tracking-tight mt-1">Projects</h1>
          <p className="text-sm text-muted-foreground mt-2">Products, systems, AI tooling, and open-source work — with the strongest work surfaced first.</p>

          <div className="relative mt-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or technologies..."
              aria-label="Search projects"
              className="w-full h-10 rounded-md border border-border bg-background pl-9 pr-9 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground">
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pt-3 pb-1 -mx-1 px-1" role="tablist" aria-label="Project filters">
            {FILTERS.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                role="tab"
                aria-selected={filter === item}
                className={"shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors " + (filter === item ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:bg-accent")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-10 text-center">
              <p className="text-sm font-medium">No projects found.</p>
              <button onClick={() => { setFilter("All"); setQuery(""); }} className="mt-2 text-sm text-muted-foreground underline underline-offset-4">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featured.map((project: any) => (
                  <ProjectCard
                    key={project.title}
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                ))}
              </div>

              {alsoBuilt.length > 0 && (
                <div className="mt-14 space-y-4">
                  <div className="border-b border-border pb-2">
                    <h2 className="text-base font-bold tracking-tight">More work</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Smaller tools, libraries, experiments, and earlier projects.</p>
                  </div>
                  <div className="divide-y divide-border">
                    {alsoBuilt.map((project: any) => (
                      <div key={project.title} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm">
                        <div className="min-w-0 pr-3">
                          <span className="font-medium text-foreground text-sm">{project.title}</span>
                          <span className="text-muted-foreground text-xs sm:text-sm ml-2">— {project.description}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto pt-1 sm:pt-0">
                          {project.links?.slice(0, 2).map((link: any) => (
                            <a key={link.href + link.type} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-0.5 rounded bg-accent/60 hover:bg-accent">
                              {link.type} <ExternalLink className="size-2.5 opacity-70" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {filtered.length} project{filtered.length === 1 ? "" : "s"} shown.{" "}
              <Link href="https://github.com/playlikeboy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
                View GitHub
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
