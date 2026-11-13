import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101217" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Shaswat Raj — Software Engineer & Open-Source Builder",
    template: `%s | ${DATA.name}`,
  },
  description:
    "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
    url: DATA.url,
    siteName: "Shaswat Raj Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Shaswat",
    lastName: "Raj",
    username: "playlikeboy",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shaswat Raj — Software Engineer & Open-Source Builder",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswat Raj — Software Engineer & Open-Source Builder",
    description:
      "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
    creator: "@SH20RAJ",
    images: ["/og.png"],
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Shaswat Raj",
      alternateName: "SH20RAJ",
      url: "https://playlikeboy.github.io/",
      image: DATA.avatarUrl,
      jobTitle: "Software Engineer",
      description:
        "Software engineer and CS undergrad at BIT Mesra. Merged pull requests in Google's gemini-cli, Preact and Editor.js. Builds and runs full products: web systems, developer tooling, and AI.",
      email: "sh20raj@gmail.com",
      nationality: "Indian",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Birla Institute of Technology, Mesra",
      },
      seeks: {
        "@type": "Demand",
        name: "Software engineering, forward deployed engineering and DevOps internships and new-grad roles",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Cloudflare",
        "AI APIs",
        "MCP",
        "Go",
        "Rust",
        "PostgreSQL",
        "Redis",
        "Docker",
        "GitHub Actions",
        "Linux",
        "Observability",
        "Open Source",
        "RAG",
      ],
      sameAs: [
        "https://github.com/playlikeboy",
        "https://gitlab.com/SH20RAJ",
        "https://linkedin.com/in/sh20raj",
        "https://x.com/SH20RAJ",
        "https://www.youtube.com/@StackShade",
        "https://dev.to/sh20raj",
        "https://www.npmjs.com/~sh20raj",
        "https://codepen.io/sh20raj",
        "https://peerlist.io/sh20raj",
        "https://codeforces.com/profile/playlikeboy",
        "https://codolio.com/profile/sh20raj",
        "https://github.com/sh20raj-backup",
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shaswat Raj",
    url: "https://playlikeboy.github.io/",
    author: {
      "@type": "Person",
      name: "Shaswat Raj",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={fontMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={cn("min-h-dvh flex flex-col")}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:bg-background focus:px-3 focus:py-2 focus:font-mono focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main id="main" className="flex-1 print:pt-0">
            {children}
          </main>
          <Footer />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
