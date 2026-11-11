import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { ResumeDocument, VARIANTS } from "@/components/resume-document";
import { ResumeChrome } from "@/components/resume-chrome";

export const dynamicParams = false;

export function generateStaticParams() {
  return VARIANTS.map((v) => ({ role: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const v = VARIANTS.find((x) => x.slug === role);
  if (!v) return {};
  return {
    title: { absolute: `Resume (${v.title}) — ${DATA.name}` },
    description: `One-page resume of Shaswat Raj tailored for ${v.title} roles.`,
    alternates: { canonical: `${DATA.url}/resume/${v.slug}` },
  };
}

export default async function TailoredResume({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const v = VARIANTS.find((x) => x.slug === role);
  if (!v) notFound();
  return (
    <>
      <ResumeChrome pdf={v.pdf} current={v.slug} />
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 pb-8 print:p-0 print:max-w-none">
        <div className="border border-border p-5 sm:p-8 print:border-0 print:p-0">
          <ResumeDocument variant={v.slug} />
        </div>
      </div>
    </>
  );
}
