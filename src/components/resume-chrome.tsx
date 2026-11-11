import Link from "next/link";
import { Trailer } from "@/components/mail";
import { VARIANTS } from "@/components/resume-document";

export function ResumeChrome({ pdf, current }: { pdf: string; current?: string }) {
  return (
    <div className="print:hidden mx-auto max-w-[800px] px-4 sm:px-6 pt-8 pb-4">
      <Trailer k="Attachment">
        <a href={pdf} download className="a-link">{pdf.slice(1)}</a> (1 page, A4)
      </Trailer>
      <Trailer k="Tailored">
        <Link href="/resume" className={current ? "a-link" : "font-semibold text-foreground"}>general</Link>
        {VARIANTS.map((v) => (
          <span key={v.slug}>
            {" · "}
            <Link href={`/resume/${v.slug}`} className={current === v.slug ? "font-semibold text-foreground" : "a-link"}>
              {v.slug}
            </Link>
          </span>
        ))}
      </Trailer>
    </div>
  );
}

