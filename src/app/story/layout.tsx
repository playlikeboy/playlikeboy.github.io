import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story — Shaswat Raj",
  description:
    "The story behind Shaswat Raj's journey from learning to code in Class 7 to building products, contributing to open source, and engineering real-world systems.",
  alternates: {
    canonical: "https://sh20raj.github.io/story",
  },
  openGraph: {
    title: "My Story — Shaswat Raj",
    description:
      "From curiosity in Class 7 to open source, products, AI systems, and real-world engineering.",
    url: "https://sh20raj.github.io/story",
    siteName: "Shaswat Raj",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "My Story — Shaswat Raj",
    description:
      "The story behind the builder, open-source contributor, and software engineer.",
    creator: "@SH20RAJ",
  },
};

export default function StoryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "My Story — Shaswat Raj",
            url: "https://sh20raj.github.io/story",
            mainEntity: {
              "@type": "Person",
              name: "Shaswat Raj",
              url: "https://sh20raj.github.io",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/SH20RAJ",
                "https://linkedin.com/in/sh20raj",
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
