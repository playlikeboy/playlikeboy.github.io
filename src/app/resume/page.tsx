import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { ResumeDocument } from "@/components/resume-document";
import { ResumeChrome } from "@/components/resume-chrome";

export const metadata: Metadata = {
  title: { absolute: `Resume — ${DATA.name}` },
  description:
    "One-page resume of Shaswat Raj: B.Tech CSE at BIT Mesra (2028), merged upstream in gemini-cli, MoFA, Preact and Editor.js, tech lead for Bitotsav '26.",
  alternates: { canonical: `${DATA.url}/resume` },
};

export default function ResumePage() {
  return (
    <>
      <ResumeChrome pdf="/resume.pdf" />
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 pb-8 print:p-0 print:max-w-none">
        <div className="border border-border p-5 sm:p-8 print:border-0 print:p-0">
          <ResumeDocument variant="general" />
        </div>
      </div>
    </>
  );
}
