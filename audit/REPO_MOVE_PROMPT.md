# Claude Code prompt: clean up @playlikeboy and move old repos to playlikeboy-archive

Run this from an empty folder on your own machine, with `gh` logged in as `playlikeboy`.
Paste everything below the line into Claude Code.

---

You are cleaning up my GitHub account @playlikeboy. Older work moves to my org `playlikeboy-archive`; copies of other people's projects and dead repos get deleted. The plan is in `audit/REPO_PLAN.md` of `playlikeboy/playlikeboy.github.io` (branch `claude/brave-pascal-bonhq1`). Follow it exactly, with the safety rules below. Deleting a repo can't be undone, so be careful and show me what you're about to do before you do it.

## Setup
1. Run `gh auth status`. If I'm not logged in as `playlikeboy`, or the token lacks the `repo` and `delete_repo` scopes, stop and tell me to run `gh auth refresh -h github.com -s repo,delete_repo,admin:org`.
2. Run `gh api orgs/playlikeboy-archive --jq .login` to confirm the org exists and I'm an owner (`gh api user/memberships/orgs/playlikeboy-archive --jq .role` must print `admin`).
3. Fetch the plan:
```bash
gh api "repos/playlikeboy/playlikeboy.github.io/contents/audit/REPO_PLAN.md?ref=claude/brave-pascal-bonhq1" --jq .content | base64 -d > REPO_PLAN.md
```
4. Parse sections A–H into lists. Also list every repo I own (`gh repo list playlikeboy --limit 400 --json name,isFork,isPrivate,isArchived,pushedAt,diskUsage,hasPagesEnabled`). That includes the private repos the plan couldn't see. Any repo missing from the plan goes in a list "Unclassified": classify it with the same rules (keep / archive / delete) and show me your reasoning before acting on it.

## Safety rules (apply to every step)
- **Back up before any delete:** `git clone --mirror https://github.com/playlikeboy/REPO backups/REPO.git` (skip empty repos). Write `backups/INDEX.md` listing each one. Never delete a repo whose backup failed.
- **Re-check before deleting each repo:**
  - Copies (section D): re-count my commits with `git log --format='%an %ae' | grep -ciE 'shaswat|sh20raj|playlikeboy'` on the mirror. If there are any, list the commits and ask me whether to delete, make private, or push them to a real fork first.
  - Forks (section E): run `gh search prs --author playlikeboy --repo <upstream> --state open`. If any PR is still open, don't delete; move the fork to "keep".
  - Any repo with Pages enabled, a homepage on github.io, or more than 0 stars, watchers or open issues: flag it and ask me first.
- **Dry run first:** print one table of every action (repo, action, reason) and wait for me to type `go`. Then run it phase by phase, and pause after each phase with a summary.
- Never touch repos in section A or B, or anything not owned by `playlikeboy`.
- If a command fails, log it and continue. Don't retry destructive commands blindly.

## Phase 1: Delete (sections D, E, F, G)
- **D**, other people's projects uploaded as originals: back up, then `gh repo delete playlikeboy/REPO --yes`.
- **E**, forks with no open PR: back up, re-check for open PRs, then delete.
- **F**, empty repos: delete (no backup needed if `diskUsage` is 0).
- **G**, risky names: ask me per repo, "delete or make private?". For private: `gh repo edit playlikeboy/REPO --visibility private --accept-visibility-change-consequences`.

## Phase 2: Transfer (section C, plus unclassified repos I approve)
For each repo:
```bash
gh api -X POST repos/playlikeboy/REPO/transfer -f new_owner=playlikeboy-archive
```
Wait until `gh repo view playlikeboy-archive/REPO` succeeds (transfers are async; poll every few seconds, up to 60 s). Then:
```bash
gh repo archive playlikeboy-archive/REPO --yes
```
Exceptions:
- `unstory`, `unstory-blog`, `unstory-old`: ask me whether they go to `unstory-app` instead.
- `30tools`: ask me whether it goes to the `SopKit` org instead.
- `debo` and `index-fast`: before transferring, add one line to the top of their README: "Superseded by https://github.com/playlikeboy/debo.life" (or `/indexfast`). Commit and push that, then transfer.
- Private repos stay private; don't change visibility.

## Phase 3: The org's front page
Create `playlikeboy-archive/.github` with `profile/README.md`:
```
# playlikeboy-archive
Older projects, experiments and coursework by Shaswat Raj. Read-only and not maintained.
Current work: https://github.com/playlikeboy · Portfolio: https://playlikeboy.github.io
```
Set the org description to the same first line.

## Phase 4: Fix what moved
1. In `playlikeboy/playlikeboy.github.io` and `playlikeboy/playlikeboy`, replace links to:
   - `github.com/playlikeboy/debo` with `github.com/playlikeboy/debo.life`
   - `github.com/playlikeboy/index-fast` with `github.com/playlikeboy/indexfast`
   - any repo now in the archive with its `playlikeboy-archive/...` URL. Search all `src/**`, `public/**`, `README.md` and `scripts/**`.

   Open a branch, commit, push, and show me the diff. Don't merge to main without my `go`.
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
3. Tell me to set the 6 pins by hand (Profile → Customize your pins): campusloop, indexfast, netscopex, sanskrit, debo.life, playlikeboy.github.io.

## Final report
Write `REPO_CLEANUP_REPORT.md` with:
- counts before and after (public / private / forks on @playlikeboy, repos in the archive)
- every action taken, with its result
- everything skipped, and why
- where the backups are

Keep `backups/` locally until I confirm, at least 30 days.
