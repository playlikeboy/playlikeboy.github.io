import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRightIcon, ExternalLink, FileDown, Github, Mail } from "lucide-react";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { roles, getRole } from "@/data/roles";

export const dynamicParams = false;

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  const title = `${role.title} — ${DATA.name}`;
  const url = `${DATA.url}/roles/${role.slug}`;
  return {
    title: { absolute: title },
    description: role.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: role.summary,
      url,
      siteName: "Shaswat Raj Portfolio",
      locale: "en_US",
      type: "profile",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: role.summary,
      creator: "@SH20RAJ",
      images: ["/og.png"],
    },
  };
}

const statusStyle: Record<string, string> = {
  merged: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "in review": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  "in progress": "bg-accent text-muted-foreground",
};

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {DATA.name} · {role.title}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">{role.headline}</h1>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{role.summary}</p>
          <p className="text-sm mt-3 leading-relaxed">
            <span className="font-medium">Looking for:</span>{" "}
            <span className="text-muted-foreground">{role.lookingFor}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              <FileDown className="size-4" /> Resume
            </a>
            <a
              href={`mailto:${DATA.contact.email}?subject=${encodeURIComponent(role.title + " role")}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Mail className="size-4" /> {DATA.contact.email}
            </a>
            <a
              href="https://github.com/playlikeboy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Evidence</p>
          <h2 className="text-lg font-bold tracking-tight mt-1 mb-5">What I have done that is relevant</h2>
          <ol className="space-y-3">
            {role.evidence.map((item) => {
              const internal = item.href.startsWith("/");
              const body = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {internal ? (
                      <ArrowRightIcon className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    ) : (
                      <ExternalLink className="size-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.detail}</p>
                  {item.status && (
                    <span
                      className={`inline-block mt-2.5 rounded px-2 py-0.5 text-xs font-medium ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  )}
                </>
              );
              const className =
                "group block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors";
              return (
                <li key={item.title}>
                  {internal ? (
                    <Link href={item.href} className={className}>
                      {body}
                    </Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {body}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-3">Tools I have shipped with</h2>
            <div className="flex flex-wrap gap-1.5">
              {role.stack.map((skill) => (
                <span key={skill} className="rounded bg-accent px-2 py-0.5 text-xs text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-3">How I work</h2>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4">
              {role.howIWork.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h2 className="text-lg font-bold tracking-tight mb-3">Other roles I fit</h2>
          <div className="flex flex-wrap gap-2">
            {roles
              .filter((other) => other.slug !== role.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/roles/${other.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
                >
                  {other.title} <ArrowRightIcon className="size-3.5" />
                </Link>
              ))}
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              All projects <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
