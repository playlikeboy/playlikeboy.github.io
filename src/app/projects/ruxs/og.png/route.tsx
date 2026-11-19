import { caseStudyOg } from "../../og";

export const dynamic = "force-static";

// RUXs: neighbourhood subscriptions
export function GET() {
  return caseStudyOg("RUXs: neighbourhood subscriptions", "LIVE", "ruxs.in");
}
