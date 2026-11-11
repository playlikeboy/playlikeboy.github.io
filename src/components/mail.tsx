import type { ReactNode } from "react";

/** From/To/Subject style field list. */
export function MailHead({ fields, className = "" }: { fields: [string, ReactNode][]; className?: string }) {
  return (
    <dl className={`mail-head ${className}`}>
      {fields.map(([k, v]) => (
        <div key={k} className="contents">
          <dt>{k}:</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

const stateClass: Record<string, string> = {
  merged: "state-merged",
  "fixed (merged)": "state-merged",
  "in review": "state-review",
  "fix in review": "state-review",
  "fix ready": "state-review",
  draft: "state-reported",
  reported: "state-reported",
  live: "state-merged",
  "in progress": "state-review",
  "public record": "state-merged",
  "self-reported": "state-reported",
};

/** Review state, written the way a mail archive tags a thread: [MERGED]. */
export function State({ state }: { state: string }) {
  return (
    <span className={`font-mono text-[0.75rem] font-medium uppercase tracking-wide ${stateClass[state] ?? "state-reported"}`}>
      [{state}]
    </span>
  );
}

/** Trailer line: "Key: value". */
export function Trailer({ k, children }: { k: string; children: ReactNode }) {
  return (
    <p className="trailer">
      <b>{k}:</b> {children}
    </p>
  );
}

export function Ext({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = /^(https?:|mailto:)/.test(href);
  return (
    <a
      href={href}
      className={`a-link ${className}`}
      {...(external && !href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Standard page head: a Subject line as the h1, then header fields and an intro. */
export function PageHead({
  subject,
  fields = [],
  children,
}: {
  subject: ReactNode;
  fields?: [string, ReactNode][];
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border pb-6">
      {fields.length > 0 && <MailHead fields={fields} className="mb-3" />}
      <h1 className="text-[length:var(--step-3)]">
        <span className="text-muted-foreground font-normal">Subject: </span>
        {subject}
      </h1>
      {children && <div className="mt-4 max-w-measure text-[length:var(--step-1)] leading-relaxed">{children}</div>}
    </header>
  );
}

/** Page container: one width for the whole archive. */
export function Page({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 sm:px-6 pt-8 sm:pt-12 ${className}`}>{children}</div>;
}

/** A section opens like a reply in the thread: a quieter Subject line. */
export function ThreadHeading({ id, children, aside }: { id?: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div id={id} className="mt-14 mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 scroll-mt-16">
      <h2 className="text-[length:var(--step-2)]">{children}</h2>
      {aside && <div className="font-mono text-[0.8125rem] text-muted-foreground">{aside}</div>}
    </div>
  );
}
