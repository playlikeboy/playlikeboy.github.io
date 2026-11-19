# Shaswat Raj — Portfolio

Source for **[playlikeboy.github.io](https://playlikeboy.github.io)**.

Software engineer and founder, B.Tech CSE student at BIT Mesra (2028), Tech Lead for Bitotsav '26 and Joint Secretary of ACM BIT Mesra. Open to SDE, AI, full-stack, founding, forward-deployed and DevOps/platform internships and new-grad roles.

- [Résumé](https://playlikeboy.github.io/resume) · [PDF](https://playlikeboy.github.io/resume.pdf)
- Evidence by role (each with a tailored résumé PDF): [SDE](https://playlikeboy.github.io/roles/sde) · [AI Engineer](https://playlikeboy.github.io/roles/ai) · [Full-Stack / Product](https://playlikeboy.github.io/roles/fullstack) · [Founding Engineer](https://playlikeboy.github.io/roles/founding) · [Forward Deployed](https://playlikeboy.github.io/roles/fde) · [DevOps / Platform](https://playlikeboy.github.io/roles/devops)
- [Projects](https://playlikeboy.github.io/projects) · [Story](https://playlikeboy.github.io/story) · [Blog](https://playlikeboy.github.io/blog)

## Highlights

- Merged pull requests in [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/commit/f11bd3d0797f1626929b9d095efcb5816c18900c), [T3 Code](https://github.com/pingdotgg/t3code/pull/23775), [MoFA](https://github.com/mofa-org/mofa/pull/1577), [Preact](https://github.com/preactjs/preact/pull/5331) and [Editor.js](https://github.com/codex-team/editor.js/pull/3040); more in review at Jaeger, Kmesh, Lexical and Radix UI.
- Tech lead for Bitotsav '26 — the platform behind a ~5,000-participant festival.
- [SopKit](https://sopkit.github.io) — 605+ client-side browser tools, 4.3M+ requests in 30 days.
- Founder and sole engineer of [IndexFast](https://playlikeboy.github.io/projects/indexfast), [RUXs](https://playlikeboy.github.io/projects/ruxs), [ScriptlyStore](https://playlikeboy.github.io/projects/scriptly), [CampusLoop](https://playlikeboy.github.io/projects/campusloop) and [Debo](https://playlikeboy.github.io/projects/debo).

## How this site is built

| Part | Choice |
|------|--------|
| Framework | Next.js (App Router, static export), React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Content | `src/data/*.ts(x)` and MDX in `content/` |
| Deploy | GitHub Actions → GitHub Pages on every push to `main` |
| Mirror | A second workflow pushes `main` to GitLab |

Where to edit:

- `src/data/resume.tsx` — profile, experience, education, projects
- `src/data/roles.ts` — the three role pages
- `src/data/contributions.ts` — upstream pull requests
- `src/app/resume/page.tsx` — the one-page résumé (`public/resume.pdf` is printed from it)

## Local development

```bash
bun install
bun run dev
```

Regenerate the résumé PDF after editing the résumé page (needs `playwright` installed):

```bash
bun run build && bun run resume:pdf
```

`PLAN.md` tracks what is done and what is next for job applications.

## Contact

[sh20raj@gmail.com](mailto:sh20raj@gmail.com) · [GitHub](https://github.com/playlikeboy) · [LinkedIn](https://linkedin.com/in/sh20raj)

## License

MIT
