import type { Metadata } from "next";
import { CaseStudy, caseStudyMetadata } from "../case-study";
import { State } from "@/components/mail";

const POST =
  "https://www.linkedin.com/posts/sh20raj_sopplayer-html5videoplayer-opensourcelove-activity-7279897143249715201-4gO6";

export const metadata: Metadata = caseStudyMetadata(
  "sopplayer",
  "SopPlayer: zero-dependency HTML5 video player",
  "SopPlayer is a zero-dependency HTML5 video player you add with one script tag from jsDelivr, with custom skins, playback-rate controls and Picture-in-Picture.",
);

export default function SopPlayerCaseStudy() {
  return (
    <CaseStudy
      subject="SopPlayer: a video player you add with one script tag"
      fields={[
        ["Date", "2024 – present"],
        ["Status", <span key="s"><State state="live" /> served from jsDelivr</span>],
        ["Stack", "JavaScript, HTML5 Media APIs, CSS"],
      ]}
      lede={
        <p>
          An open-source HTML5 video player with no dependencies. You add one script tag from jsDelivr and mark a{" "}
          <code>&lt;video&gt;</code> element; it handles the controls, skins and Picture-in-Picture.
        </p>
      }
      trailers={[
        ["Code", "https://github.com/playlikeboy/Sopplayer", "playlikeboy/Sopplayer"],
        ["Source", POST, "LinkedIn post with jsDelivr usage (self-reported)"],
      ]}
    >
      <h2>The problem</h2>
      <p>
        Full-featured player libraries are heavy and often expect a build step. For a blog or a small site that just wants
        a decent-looking player, that is too much.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>Plain JavaScript on top of the browser&apos;s own media APIs, with no framework and no dependencies.</li>
        <li>Seek bar with buffered progress, volume, playback-rate selection, fullscreen and Picture-in-Picture.</li>
        <li>CSS skins, so the player can match the site it is embedded in.</li>
      </ul>
      <pre>{`<script src="https://cdn.jsdelivr.net/gh/playlikeboy/Sopplayer/dist/sopplayer.min.js"></script>
<video class="sopplayer" controls>
  <source src="video.mp4" type="video/mp4" />
</video>`}</pre>

      <h2>Usage</h2>
      <p>
        My LinkedIn post shows jsDelivr statistics of about 1.18M requests and 38 GB served. These are self-reported. jsDelivr
        paths include the GitHub owner, which is why this repo stays on my profile rather than moving to an archive.
      </p>
    </CaseStudy>
  );
}
