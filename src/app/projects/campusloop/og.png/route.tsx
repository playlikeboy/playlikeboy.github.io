import { caseStudyOg } from "../../og";

export const dynamic = "force-static";

// CampusLoop: a student network gated by college email
export function GET() {
  return caseStudyOg("CampusLoop: a student network gated by college email", "LIVE", "campusloop.space");
}
