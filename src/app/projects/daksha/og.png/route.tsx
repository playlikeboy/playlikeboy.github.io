import { caseStudyOg } from "../../og";

export const dynamic = "force-static";

// Daksha: a friendly assistant that remembers your life
export function GET() {
  return caseStudyOg("Daksha: an assistant that remembers your life", "LIVE", "daksha.life");
}
