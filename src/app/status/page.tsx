import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import { Ext, Page, PageHead } from "@/components/mail";
import { StatusClient } from "./status-client";

const description =
  "Live uptime of the products Shaswat Raj runs: SopKit, CampusLoop, IndexFast, Debo and MCP Pure, checked every hour by GitHub Actions.";

export const metadata: Metadata = {
  title: { absolute: `Status — ${DATA.name}` },
  description,
  alternates: { canonical: `${DATA.url}/status` },
};

export default function StatusPage() {
  return (
    <Page>
      <PageHead subject="products I run, checked every hour" fields={[["Checker", "GitHub Actions, hourly, 30 days kept"]]}>
        <p>
          A scheduled job requests each site and keeps the results on this repo&apos;s{" "}
          <Ext href="https://github.com/playlikeboy/playlikeboy.github.io/tree/status">status branch</Ext>. The{" "}
          <Ext href="https://github.com/playlikeboy/playlikeboy.github.io/blob/main/scripts/uptime.mjs">checker</Ext> is about
          60 lines of Node with no dependencies.
        </p>
      </PageHead>
      <StatusClient />
    </Page>
  );
}
