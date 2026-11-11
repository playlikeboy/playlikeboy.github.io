import type { Metadata } from "next";
import SopKitCaseStudy from "../sopkit/page";
import { caseStudyMetadata } from "../case-study";

// 30tools was SopKit's earlier name; this page keeps the old URL working.
export const metadata: Metadata = {
  ...caseStudyMetadata(
    "sopkit",
    "SopKit (formerly 30tools)",
    "30tools is now SopKit: 605+ browser tools that run on the visitor's device. 4.3M+ requests and 213K+ visits in 30 days.",
  ),
};

export default function ThirtyToolsPage() {
  return <SopKitCaseStudy />;
}
