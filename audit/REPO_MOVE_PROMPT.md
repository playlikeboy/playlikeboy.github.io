# Claude Code prompt: clean up @playlikeboy and move old repos to playlikeboy-archive

Run this from an empty folder on your own machine, with `gh` logged in as `playlikeboy`.
Paste everything below the line into Claude Code.

---

You are cleaning up my GitHub account @playlikeboy. Older work moves to my org `playlikeboy-archive`. Copies of other people's projects, finished forks and empty repos get deleted. The repo lists below are final; follow them exactly, with the safety rules. Deleting a repo can't be undone, so be careful and show me what you're about to do before you do it.

## The lists (208 repos)

Save this block as `lists.sh` exactly as written:

```bash
OWNER=playlikeboy
ARCHIVE=playlikeboy-archive

# A. Keep on @playlikeboy (21). Never touch
KEEP=(
  algoforge AudiPlay campusloop CodeSeek debo.life DHWANI faithscroll indexfast KishanAI netscopex
  omniaudit picser playlikeboy playlikeboy.github.io ruxs sanskrit sketchflow solus Sopplayer
  universal-filter-engine-js video-studio
)

# B. Forks that back open PRs (10). Never touch
KEEP_FORKS=(
  asyncapi-studio asyncapi-website drizzle-orm editor.js jaeger kmesh lexical micromark primitives
  t3code
)

# C. Transfer to playlikeboy-archive (113)
TRANSFER=(
  100-days-of-code 30tools acm-bitmesra.github.io aisanta algorithms-course animation-videos anwita
  apify-apis asta-insite-platform AttendX aura-music-player automations awesome-build-in-public
  awesome-sh20raj-projects beat-alan-turing bitsyll build-mode-21 chatbot clarity-ui clearcli
  cloudflare-email-mcp-api-wrapper codeforces-ui-inhancer codevisualiser compilerdesignlab components
  create-gi create-tanstack-app createevminutes debo devart devart-react digital-observatory DriveGit
  DSA EncriptorJS finance-club ga4viewer getParameterByName google-mcp hack heydebo hoardify hours
  ias-project ideas ieee-website image-bg-remover index-fast kishan-ai labs leadx linepedia
  linespedia-bot linespedia-community mac-cleanup-wizard markdown-notes-app medium-clone momopure
  nativecontent ncc-bit-mesra-preview Netrava nodebot notesflow offline-website OpenDictionaryAPI
  pantheon performance-gain personal-blog phpgram PixabayAPI portfolio pshychology resend-mcp saarthi
  saas-boilerplate scriptly-codes scriptlyhq ScrollProgressJS search-folio sh sh20raj
  sh20raj.github.io shade-vscode-theme shadertheme ShadeV3 shadev4 shinken-karate-academy ShowdownCSS
  sketchflow-old sketchflow-workspace SnapAttend sp-flamingo startups steamlit strivio study tanstack
  tanstack-start teach teaching-skills terabeer terabox terabox-hive toggle-search-engine tomato
  traceveil truemailer uishelf unstory unstory-blog unstory-old WebScrapperJS wifymy
)

# D. Delete: other people's projects re-uploaded as originals (30)
DELETE_COPIES=(
  animate-ui apidash awesome-cursorrules awesome-design-md Awesome-Design-Tools awesome-devtools
  awesome-free-online-tools awesome-nextjs awesome-nextjs-1 awesome-nodejs-projects awesome-
  productivity-tools awesome-react awesome-seo-tools cli corsair DemoForge gemini-cli LibreChat mofa-
  studio omegaup open_spiel OpenMAIC OpenManus p5.js query sim studio talawa-admin website zulip
)

# E. Delete: forks with no open PR (12)
DELETE_FORKS=(
  hast-util-to-text json-schema-website lint-staged mdast-util-find-and-replace mdast-util-to-markdown
  p5js-web-editor pentagi preact ui unist-util-visit vitest zod
)

# F. Delete: empty or placeholder (9)
DELETE_EMPTY=(
  apify DSA-PATTERNS gsoc meshery movie-explainer ncc-website posthog sux test-repo-check
)

# G. Ask me per repo: delete or make private (7)
ASK_RISKY=(
  Get-Unlimited-Blog-Views Google-Drive-Video-Player instaxdownload JSTikTok junlimitmp3 terabox-
  worker-gateway TubeSonic
)

# H. Leave private on @playlikeboy (6). Never touch
KEEP_PRIVATE=(
  bitotsav26 campusloop-media mygirl outreach ramgarh-dmft-work-monitoring-portal stackshade-shorts
)
```

Pin these six by hand at the end (Profile → Customize your pins): campusloop, indexfast, netscopex, sanskrit, debo.life, playlikeboy.github.io.

## Why (so you can explain any edge case to me)
- **KEEP:** the work recruiters should see. Some repos can't move without breaking things people use:
  - video-studio and universal-filter-engine-js are served at playlikeboy.github.io/<repo>.
  - Sopplayer, AudiPlay and picser are served via jsDelivr `gh/playlikeboy/<repo>` paths.
- **KEEP_FORKS:** each holds the head branch of an open upstream PR (drizzle-orm holds a fix branch linked from an issue). Moving or deleting the fork can close the PR.
- **TRANSFER:** my own older work. Commits still count on my graph after the move, and GitHub redirects old URLs.
- **DELETE_COPIES:** other projects re-uploaded without a fork link, so they show as my originals; 0–2 of their commits are mine. The archive would still show them under my name.
- **DELETE_FORKS:** their PRs are merged or closed (or none was opened). A PR keeps its commits after the fork is deleted.
- **DELETE_EMPTY:** nothing in them.
- **ASK_RISKY:** downloader or "unlimited views" style names that read badly wherever they sit.
- **KEEP_PRIVATE:** private and personal, client or event data.

## Step 0: Checks (stop if any fail)
1. `gh auth status` must show `playlikeboy` with the `repo` and `delete_repo` scopes. If not, tell me to run `gh auth refresh -h github.com -s repo,delete_repo,admin:org` and stop.
2. `gh api user/memberships/orgs/$ARCHIVE --jq .role` must print `admin`.
3. Inventory everything I own:
```bash
gh repo list $OWNER --limit 500 --json name,isFork,isPrivate,isArchived,diskUsage,stargazerCount,homepageUrl > inventory.json
```
4. Compare the inventory with lists.sh:
   - **Missing:** a listed repo no longer exists. Report it and skip it.
   - **Unlisted:** a repo I own that's in no list. These are mostly private repos the earlier audit couldn't see. Print them with name, visibility, size and last push, propose keep / transfer / delete for each with one line of reasoning, and wait for my answer. Default for unlisted private repos: TRANSFER, keeping them private.
   - **Duplicate:** a name in two lists. Stop and ask me.

## Step 1: Dry run
Write `cleanup.sh`, which sources `lists.sh`, takes `--dry-run` (the default) or `--apply`, and takes a phase name (`delete`, `risky`, `transfer`, `fixlinks`). Run every phase with `--dry-run` and show me one table: repo, list, action, the exact command. Wait for me to type `go` before any `--apply`.

## Step 2: Back up everything that will be deleted
For each repo in DELETE_COPIES, DELETE_FORKS, DELETE_EMPTY and ASK_RISKY:
```bash
git clone --mirror "https://github.com/$OWNER/$REPO.git" "backups/$REPO.git"
```
Record each one in `backups/INDEX.md` (name, size, HEAD sha). If a backup fails, that repo must not be deleted.

## Step 3: Delete phase (`./cleanup.sh delete --apply`)
Re-check every repo before its delete command runs:
- **DELETE_COPIES:** count my commits in the mirror:
```bash
git -C backups/$REPO.git log --all --format='%an %ae' | grep -ciE 'shaswat|sh20raj|playlikeboy'
```
  If the count is above 0, show me those commits and ask: delete, make private, or keep. Only delete on my answer.
- **DELETE_FORKS:** find the parent with `gh repo view $OWNER/$REPO --json parent --jq .parent.nameWithOwner`. If `gh search prs --author $OWNER --repo <parent> --state open` returns anything, skip it and move it to KEEP_FORKS.
- **Any repo** with stars above 0, a github.io homepage, or Pages enabled: ask me first.

Then:
```bash
gh repo delete "$OWNER/$REPO" --yes
```

## Step 4: Risky names (`./cleanup.sh risky --apply`)
For each repo in ASK_RISKY, ask me "delete or make private?".
- **Private:**
```bash
gh repo edit "$OWNER/$REPO" --visibility private --accept-visibility-change-consequences
```
- **Delete:** as in step 3.

## Step 5: Transfer phase (`./cleanup.sh transfer --apply`)
Before transferring:
- Ask me whether unstory, unstory-blog and unstory-old go to `unstory-app` instead, and whether 30tools goes to `SopKit` instead. Use that org as the target for those repos.
- For debo and index-fast, add this line to the top of their README, then commit and push:
```
> Superseded by https://github.com/playlikeboy/debo.life
```
  (use `/indexfast` for index-fast).

For each repo:
```bash
gh api -X POST "repos/$OWNER/$REPO/transfer" -f new_owner="$ARCHIVE"
```
Poll every 3 seconds, for up to 60 seconds, until `gh repo view "$ARCHIVE/$REPO"` succeeds. Then:
```bash
gh repo archive "$ARCHIVE/$REPO" --yes
```
Rules:
- Private repos stay private.
- Log every result to `transfer.log`.
- If a transfer fails because a repo with that name already exists in the target, skip it and report it.

## Step 6: The archive org's front page
Create the repo `$ARCHIVE/.github` with `profile/README.md`:
```
# playlikeboy-archive
Older projects, experiments and coursework by Shaswat Raj. Read-only and not maintained.
Current work: https://github.com/playlikeboy · Portfolio: https://playlikeboy.github.io
```
Then set the org description:
```bash
gh api -X PATCH orgs/$ARCHIVE -f description="Older projects and experiments by Shaswat Raj. Not maintained."
```

## Step 7: Fix links and kept-repo metadata (`./cleanup.sh fixlinks`)
1. Clone `playlikeboy/playlikeboy.github.io` and `playlikeboy/playlikeboy`. On a new branch `chore/repo-archive-links`, update the links in `src/**`, `public/**`, `README.md` and `scripts/**`:
   - `github.com/playlikeboy/debo` → `github.com/playlikeboy/debo.life`
   - `github.com/playlikeboy/index-fast` → `github.com/playlikeboy/indexfast`
   - `github.com/playlikeboy/<repo>` for any transferred repo → `github.com/playlikeboy-archive/<repo>`

   Build the portfolio (`bun install && bun run build`), push the branch and show me the diff. **Don't merge to main without my `go`**, because main deploys the live site.
2. Fix the kept repos' metadata:
```bash
gh repo edit playlikeboy/indexfast --homepage https://indexfast.co
```
```bash
gh repo edit playlikeboy/netscopex --homepage https://playlikeboy.github.io/roles/devops
```
```bash
gh repo edit playlikeboy/campusloop --description "Student-only campus network gated by college email (1,350+ Indian college domains). Next.js, PostgreSQL, Cloudflare Workers."
```
```bash
gh repo edit playlikeboy/playlikeboy.github.io --description "Portfolio of Shaswat Raj: SDE, DevOps and open-source evidence. Next.js static export, deployed by GitHub Actions."
```
3. Remind me to set the six pins listed above.

## Final report
Write `REPO_CLEANUP_REPORT.md` with:
- counts before and after (public / private / forks on @playlikeboy, repos in the archive)
- every action with its result
- everything skipped, and why
- the backup location

Tell me to keep `backups/` for at least 30 days.
