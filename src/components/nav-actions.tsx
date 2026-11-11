"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Search, Sun } from "lucide-react";

export const OPEN_PALETTE_EVENT = "open-command-palette";

export function NavActions() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex shrink-0 items-center gap-1">
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
        aria-label="Search the site"
        aria-keyshortcuts="Meta+K Control+K"
        className="inline-flex h-7 items-center gap-1.5 border border-border px-2 text-muted-foreground hover:text-foreground hover:border-foreground/40"
      >
        <Search className="size-3.5" aria-hidden="true" />
        <kbd className="hidden sm:inline font-mono text-[0.75rem]">⌘K</kbd>
      </button>
      <button
        type="button"
        onClick={() => setTheme(dark ? "light" : "dark")}
        aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        className="inline-flex size-7 items-center justify-center text-muted-foreground hover:text-foreground"
      >
        {dark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
