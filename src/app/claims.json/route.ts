import { claims } from "@/data/claims";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

export function GET() {
  const absolute = (url: string) => (url.startsWith("/") ? `${DATA.url}${url}` : url);
  return Response.json({
    person: DATA.name,
    url: DATA.url,
    updated: "2026-11-11",
    claims: claims.map((c) => ({ ...c, sources: c.sources.map((s) => ({ ...s, url: absolute(s.url) })) })),
  });
}
