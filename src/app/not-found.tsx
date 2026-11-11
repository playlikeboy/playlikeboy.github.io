import Link from "next/link";
import { Page, PageHead, Trailer } from "@/components/mail";

export default function NotFound() {
  return (
    <Page>
      <PageHead subject="550 no such message" fields={[["Status", "404"]]}>
        <p>There&apos;s nothing at this address. It may have moved when the site was reorganised.</p>
      </PageHead>
      <div className="mt-6">
        <Trailer k="Try">
          <Link href="/" className="a-link">the patch series</Link> · <Link href="/bugs" className="a-link">bug journal</Link> ·{" "}
          <Link href="/projects" className="a-link">projects</Link> · <Link href="/resume" className="a-link">resume</Link>
        </Trailer>
      </div>
    </Page>
  );
}
