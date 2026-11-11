import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { roles } from "@/data/roles";

export const dynamic = "force-static";

const BASE = "https://playlikeboy.github.io";
const PROJECTS = ["sopkit", "campusloop", "bitotsav-2026", "gemini-cli", "debo", "sopplayer", "30tools"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  const posts = await getBlogPosts();
  return [
    page("", 1, "weekly"),
    page("/bugs", 0.9, "weekly"),
    page("/proof", 0.9),
    page("/resume", 0.9),
    ...roles.map((r) => page(`/roles/${r.slug}`, 0.9)),
    page("/projects", 0.8),
    ...PROJECTS.map((p) => page(`/projects/${p}`, 0.7)),
    page("/status", 0.5, "weekly"),
    page("/story", 0.5),
    page("/blog", 0.6, "weekly"),
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
