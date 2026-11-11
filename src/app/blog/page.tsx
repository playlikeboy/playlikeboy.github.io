import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Page, PageHead } from "@/components/mail";

export const metadata = {
  title: "Blog — Shaswat Raj",
  description: "Thoughts on software engineering, open source, AI, and building products.",
  alternates: {
    canonical: "https://playlikeboy.github.io/blog",
  },
  openGraph: {
    title: "Blog — Shaswat Raj",
    description: "Thoughts on software engineering, open source, AI, and building products.",
    url: "https://playlikeboy.github.io/blog",
    siteName: "Shaswat Raj",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Shaswat Raj",
    description: "Thoughts on software engineering, open source, AI, and building products.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
};

export default async function BlogPage() {
  const posts = (await getBlogPosts()).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  return (
    <Page>
      <PageHead subject="writing" fields={[["Posts", String(posts.length)]]}>
        <p>Notes on software, open source and building products. Longer pieces are on <a href="https://dev.to/sh20raj" className="a-link" target="_blank" rel="noopener noreferrer">Dev.to</a>.</p>
      </PageHead>
      {posts.length === 0 ? (
        <p className="mt-6 font-mono text-[0.8125rem] text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group grid grid-cols-[1fr_auto] items-baseline gap-4 py-3">
                <span className="font-mono text-[0.875rem] font-semibold group-hover:text-link">{post.metadata.title}</span>
                <time className="font-mono text-[0.75rem] text-muted-foreground">{post.metadata.publishedAt}</time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}
