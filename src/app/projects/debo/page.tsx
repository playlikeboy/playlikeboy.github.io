import Link from "next/link";
import type { Metadata } from "next";
import { Page, PageHead } from "@/components/mail";

// The product was renamed, so its case study moved. Old links land here and
// are sent on to the new page instead of a 404.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function Moved() {
  return (
    <Page>
      <meta httpEquiv="refresh" content="0; url=/projects/daksha" />
      <link rel="canonical" href="https://playlikeboy.github.io/projects/daksha" />
      <PageHead subject="this page moved">
        <p>
          The product is now called Daksha. Taking you to{" "}
          <Link href="/projects/daksha" className="a-link">/projects/daksha</Link>.
        </p>
      </PageHead>
    </Page>
  );
}
