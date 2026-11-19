import { caseStudyOg } from "../../og";

export const dynamic = "force-static";

// gemini-cli #20778: cancellation that reaches chat compression
export function GET() {
  return caseStudyOg("gemini-cli #20778: cancellation that reaches chat compression", "MERGED", "github.com/google-gemini/gemini-cli");
}
