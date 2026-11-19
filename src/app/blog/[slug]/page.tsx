import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { Page, PageHead } from "@/components/mail";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Posts retired on 2026-11-19: generic pieces whose claims had no sources.
// Old links land here and are sent on to the closest current page.
const RETIRED: Record<string, string> = {
  "ai-in-2026": "/blog",
  "aws-cloud": "/roles/devops",
  "building-resumeflow": "/projects",
  "devops-mastery": "/roles/devops",
  "hello-world": "/blog",
  "my-journey": "/story",
  "open-source-tips": "/#series",
  "seo-skills": "/blog",
  "sh20raj-profile": "/story",
  "why-nextjs-15": "/blog",
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return [...posts.map((post) => ({ slug: post.slug })), ...Object.keys(RETIRED).map((slug) => ({ slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  if (RETIRED[slug]) return { title: "Moved", robots: { index: false, follow: true } };
  let post = await getPost(slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og.png`;

  return {
    title,
    description,
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      siteName: "Shaswat Raj Portfolio",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@SH20RAJ",
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const to = RETIRED[slug];
  if (to) {
    return (
      <Page>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={`${DATA.url}${to === "/" ? "" : to}`} />
        <PageHead subject="This post was retired">
          <p>
            It has moved on. Continue to <a href={to} className="a-link">{to}</a>.
          </p>
        </PageHead>
      </Page>
    );
  }
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : DATA.avatarUrl,
            url: `${DATA.url}/blog/${post.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${DATA.url}/blog/${post.slug}`,
            },
            author: {
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
            publisher: {
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
            },
            isPartOf: {
              "@type": "Blog",
              name: "Shaswat Raj's Blog",
              url: `${DATA.url}/blog`,
            },
          }),
        }}
      />
      <Page>
        <PageHead
          subject={post.metadata.title}
          fields={[
            ["From", "Shaswat Raj"],
            ["Date", formatDate(post.metadata.publishedAt)],
          ]}
        >
          {post.metadata.summary && <p>{post.metadata.summary}</p>}
        </PageHead>
        <article className="letter mt-8" dangerouslySetInnerHTML={{ __html: post.source }} />
      </Page>
    </section>
  );
}
