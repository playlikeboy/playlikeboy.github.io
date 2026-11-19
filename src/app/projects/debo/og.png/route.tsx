import { caseStudyOg } from "../../og";

export const dynamic = "force-static";

// Debo: personal AI memory
export function GET() {
  return caseStudyOg("Debo: personal AI memory", "LIVE", "debo.life");
}
