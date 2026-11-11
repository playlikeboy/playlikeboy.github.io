import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "debo",
  "Debo: personal AI memory",
  "Debo ingests notes, links and audio, embeds them for retrieval, and brings back the relevant context in a chat interface. Built solo.",
);

export default function DeboCaseStudy() {
  return (
    <CaseStudy
      subject="Debo: an assistant that remembers what you saved"
      fields={[
        ["Date", "2025 – present"],
        ["Status", <span key="s"><State state="live" /> debo.life</span>],
        ["Stack", "Next.js, TypeScript, vector search, OpenAI"],
      ]}
      lede={
        <p>
          Debo ingests notes, links and audio, embeds them for retrieval, and brings back the relevant pieces when you ask
          about them in a chat. I built it alone, end to end.
        </p>
      }
      trailers={[
        ["Live", "https://debo.life"],
        ["Code", "https://github.com/playlikeboy/debo.life", "playlikeboy/debo.life"],
        ["Launch", "https://www.producthunt.com/products/debo", "Product Hunt"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        What I save is scattered across voice memos, bookmarks and notes, and keyword search only finds it if I remember the
        exact words. A chat model alone doesn&apos;t know any of it.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>Ingestion for notes, web links and audio, split into chunks along natural boundaries.</li>
        <li>Embeddings stored for semantic search, so a question finds a note by meaning, not just by matching words.</li>
        <li>A chat interface that answers from the retrieved notes.</li>
      </ul>

      <h2>What I took from it</h2>
      <p>
        Pure vector search is weak on names, acronyms and IDs, which are exactly what people search their own notes for.
        Retrieval for personal memory has to handle exact matches as well as meaning.
      </p>
    </CaseStudy>
  );
}
