import { HomeClient } from "./home-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaswat Raj — Software Engineer & Open-Source Builder",
  description:
    "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
  openGraph: {
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
    creator: "@SH20RAJ",
  },
};

export default function Page() {
  return <HomeClient DATA={DATA} />;
}
