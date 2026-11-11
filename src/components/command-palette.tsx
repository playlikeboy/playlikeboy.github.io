"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { OPEN_PALETTE_EVENT } from "@/components/nav-actions";

interface Item {
  id: string;
  label: string;
  hint: string;
  run: () => void | Promise<void>;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [notice, setNotice] = useState("");
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const returnFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
    setNotice("");
    returnFocus.current?.focus?.();
  }, []);

  const go = useCallback(
    (href: string) => () => {
      if (href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
        window.open(href, href.startsWith("mailto:") ? "_self" : "_blank", "noopener");
      } else {
        router.push(href);
      }
      close();
    },
    [router, close],
  );

  const items: Item[] = useMemo(
    () => [
      { id: "home", label: "Home", hint: "the patch series", run: go("/") },
      { id: "bugs", label: "Bug journal", hint: "bugs found in code I don't maintain", run: go("/bugs") },
      { id: "proof", label: "Proof", hint: "every claim with its source", run: go("/proof") },
      { id: "sde", label: "Role: SDE", hint: "evidence for software engineering roles", run: go("/roles/sde") },
      { id: "fde", label: "Role: Forward Deployed Engineer", hint: "evidence for FDE roles", run: go("/roles/fde") },
      { id: "devops", label: "Role: DevOps / Platform", hint: "evidence for infra roles", run: go("/roles/devops") },
      { id: "projects", label: "Projects", hint: "systems I built and run", run: go("/projects") },
      { id: "status", label: "Status", hint: "live uptime of my products", run: go("/status") },
      { id: "resume", label: "Resume", hint: "one page", run: go("/resume") },
      { id: "pdf", label: "Download resume PDF", hint: "/resume.pdf", run: go("/resume.pdf") },
      { id: "story", label: "Story", hint: "how I got here", run: go("/story") },
      { id: "blog", label: "Blog", hint: "writing", run: go("/blog") },
      { id: "github", label: "GitHub", hint: "github.com/playlikeboy", run: go("https://github.com/playlikeboy") },
      { id: "linkedin", label: "LinkedIn", hint: "linkedin.com/in/sh20raj", run: go("https://www.linkedin.com/in/sh20raj/") },
      {
        id: "copy-email",
        label: "Copy email address",
        hint: "sh20raj@gmail.com",
        run: async () => {
          try {
            await navigator.clipboard.writeText("sh20raj@gmail.com");
            setNotice("Copied sh20raj@gmail.com");
          } catch {
            setNotice("Couldn't copy. The address is sh20raj@gmail.com");
          }
        },
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        hint: "theme",
        run: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          close();
        },
      },
    ],
    [go, resolvedTheme, setTheme, close],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const openPalette = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, openPalette);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, openPalette);
    };
  }, [open, close]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[index]?.run();
    } else if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-foreground/20 px-4 pt-[12vh]" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search pages and actions"
        className="w-full max-w-lg border border-border bg-background shadow-[0_12px_40px_-12px_hsl(var(--foreground)/0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 font-mono text-sm">
          <span className="text-muted-foreground" aria-hidden="true">search:</span>
          <input
            autoFocus
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={filtered[index] ? `palette-${filtered[index].id}` : undefined}
            aria-label="Search pages and actions"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="bugs, devops, resume…"
            className="h-11 flex-1 bg-transparent outline-none placeholder:text-muted-foreground/70"
          />
          <kbd className="text-[0.75rem] text-muted-foreground">esc</kbd>
        </div>
        <ul id="palette-list" role="listbox" className="max-h-[50vh] overflow-y-auto py-1 font-mono text-[0.8125rem]">
          {filtered.length === 0 && <li className="px-3 py-6 text-center text-muted-foreground">Nothing matches &ldquo;{query}&rdquo;.</li>}
          {filtered.map((item, i) => (
            <li
              key={item.id}
              id={`palette-${item.id}`}
              role="option"
              aria-selected={i === index}
              onMouseEnter={() => setIndex(i)}
              onClick={() => item.run()}
              className={`flex cursor-pointer items-baseline justify-between gap-4 px-3 py-1.5 ${i === index ? "bg-accent text-foreground" : "text-foreground/90"}`}
            >
              <span>
                <span className="text-muted-foreground" aria-hidden="true">{i === index ? "> " : "  "}</span>
                {item.label}
              </span>
              <span className="truncate text-muted-foreground">{item.hint}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-border px-3 py-1.5 font-mono text-[0.75rem] text-muted-foreground" aria-live="polite">
          {notice || "↑↓ to move · enter to open · esc to close"}
        </p>
      </div>
    </div>
  );
}
