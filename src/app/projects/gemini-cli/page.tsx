import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { Ext, State } from "@/components/mail";

export const metadata: Metadata = caseStudyMetadata(
  "gemini-cli",
  "gemini-cli #20778: cancellation that reaches chat compression",
  "Merged fix in Google's gemini-cli: cancelling a turn did not cancel the background chat-compression request. I threaded the AbortSignal through the execution and compression layers.",
);

export default function GeminiCliCaseStudy() {
  return (
    <CaseStudy
      subject="gemini-cli: cancelling a turn now cancels chat compression"
      fields={[
        ["Repo", <Ext key="r" href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</Ext>],
        ["Status", <span key="s"><State state="merged" /> March 2026</span>],
        ["Stack", "TypeScript, Node.js"],
        ["Author", "@SH20RAJ, my previous GitHub account (GitHub now shows it as “ghost”)"],
      ]}
      lede={
        <p>
          Pressing Ctrl+C cancelled the visible turn but not the chat-compression request running behind it. I traced where
          the AbortSignal stopped being passed along and threaded it through. The maintainers merged it.
        </p>
      }
      trailers={[
        ["Link", "https://github.com/google-gemini/gemini-cli/pull/20778", "google-gemini/gemini-cli#20778"],
        ["Merged-commit", "https://github.com/google-gemini/gemini-cli/commit/f11bd3d0797f1626929b9d095efcb5816c18900c", "f11bd3d"],
        ["Reported-in", "https://github.com/google-gemini/gemini-cli/issues/20405", "google-gemini/gemini-cli#20405"],
      ]}
    >
      <h2>The bug</h2>
      <p>
        In a multi-turn chat, cancelling a turn stopped the stream the user was watching. Before that turn ran, though, the
        client could start a request to compress the chat history, and that request never received the turn&apos;s{" "}
        <code>AbortSignal</code>. So it kept running after the user had cancelled: a wasted model call, and work in flight
        that could finish late and race with the next prompt.
      </p>

      <h2>The fix</h2>
      <p>
        I followed the signal from where the turn is created down to the compression call and passed it through the layers
        that dropped it, so the compression request is cancelled together with the turn. The merged commit is titled{" "}
        <em>fix(core): thread AbortSignal to chat compression requests</em>.
      </p>
      <p>A simplified sketch of the shape of the change (the real diff is in the pull request):</p>
      <pre>{`async executeTurn(prompt: string, { signal }: { signal?: AbortSignal }) {
  if (this.shouldCompressHistory()) {
    // before: compress({ history }) with no signal
    await this.compressionService.compress({ history: this.chatHistory, signal });
  }
  return this.client.streamGenerateContent(prompt, { signal });
}`}</pre>

      <h2>What I took from it</h2>
      <ul>
        <li>Cancellation bugs hide in the calls that happen before the one you are watching.</li>
        <li>In an unfamiliar codebase, following one value end to end is faster than reading every file.</li>
        <li>A small, scoped diff with a clear reproduction is what gets through review.</li>
      </ul>
    </CaseStudy>
  );
}
