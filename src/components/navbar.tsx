import Link from "next/link";
import { NavActions } from "@/components/nav-actions";

// The archive's header bar: where you are, the folders, and search.
export const NAV = [
  { href: "/#series", label: "patches" },
  { href: "/bugs", label: "bugs" },
  { href: "/proof", label: "proof" },
  { href: "/projects", label: "projects" },
  { href: "/roles/sde", label: "roles" },
  { href: "/resume", label: "resume" },
] as const;

export default function Navbar() {
  return (
    <header className="print:hidden border-b border-border bg-background/95 supports-[backdrop-filter]:bg-background/85 supports-[backdrop-filter]:backdrop-blur sticky top-0 z-50">
      <nav
        aria-label="Site"
        className="mx-auto flex max-w-page flex-wrap items-center gap-x-5 gap-y-1 px-4 sm:px-6 py-2 sm:py-0 sm:h-11 font-mono text-[0.8125rem]"
      >
        <Link href="/" className="shrink-0 font-semibold tracking-tight hover:text-link">
          playlikeboy<span className="hidden sm:inline text-muted-foreground">.github.io</span>
        </Link>
        <ul className="order-last sm:order-none flex w-full sm:w-auto min-w-0 sm:flex-1 flex-wrap items-center gap-x-4 gap-y-1">
          {NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto sm:ml-0"><NavActions /></div>
      </nav>
    </header>
  );
}
