import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "daksha",
  "Daksha: a friendly assistant that remembers your life",
  "Daksha keeps your journal, voice notes and videos in one place and answers questions about your own life with links to the entries it used. Early version, built solo.",
);

export default function DakshaCaseStudy() {
  return (
    <CaseStudy
      subject="Daksha: a friendly assistant that remembers your life"
      fields={[
        ["Date", "2025 – present"],
        ["Status", <span key="s"><State state="live" /> daksha.life (early version)</span>],
        ["Stack", "TypeScript, Expo / React Native, Hono, Cloudflare Workers, Postgres, LiveKit"],
      ]}
      lede={
        <p>
          Daksha keeps the bits of your life in one place: your journal, your voice notes and videos. You ask it about your
          own life in plain words, by text or by voice, and every answer links to the entry it came from. It is an early
          version, and I build it alone, end to end. It was called Debo until November 2026.
        </p>
      }
      trailers={[
        ["Live", "https://www.daksha.life/"],
        ["Code", "https://github.com/playlikeboy/daksha", "playlikeboy/daksha"],
        ["Android", "https://github.com/playlikeboy/daksha/releases/latest/download/daksha.apk", "daksha.apk (early test build)"],
        ["Launch", "https://www.producthunt.com/products/debo", "Product Hunt"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        What I save is scattered across voice memos, bookmarks and notes, and keyword search only finds it if I remember the
        exact words. A chat model alone doesn&apos;t know any of it, and when it guesses it doesn&apos;t say where the answer
        came from.
      </p>

      <h2>What it does today</h2>
      <ul>
        <li>A journal you keep by writing, by voice or by video.</li>
        <li>Questions about your own life, answered with links to the entries used. If it has nothing, it says so instead of guessing.</li>
        <li>Voice calls with built-in characters.</li>
        <li>Custom people you build from a description or your own chats, with an optional voice copy made only with permission.</li>
        <li>Connected apps that act only after you approve.</li>
        <li>Reminders.</li>
        <li>Your own model keys, if you want to bring them.</li>
        <li>An Android app, as an early test build, next to the web app.</li>
      </ul>
      <p>
        You can see, fix and forget what Daksha knows, download your data and delete it. Much of this is new and has had
        little real-world testing.
      </p>

      <h2>What I took from it</h2>
      <p>
        Pure vector search is weak on names, acronyms and IDs, which are exactly what people search their own notes for.
        Retrieval for personal memory has to handle exact matches as well as meaning.
      </p>
    </CaseStudy>
  );
}
