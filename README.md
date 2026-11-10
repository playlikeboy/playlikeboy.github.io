# Shaswat Raj — Portfolio

Source for **[playlikeboy.github.io](https://playlikeboy.github.io)**.

Software engineer and B.Tech CSE student at BIT Mesra (2028). Open to SDE, forward-deployed and DevOps/platform internships and new-grad roles.

- [Résumé](https://playlikeboy.github.io/resume) · [PDF](https://playlikeboy.github.io/resume.pdf)
- Evidence by role: [SDE](https://playlikeboy.github.io/roles/sde) · [Forward Deployed](https://playlikeboy.github.io/roles/fde) · [DevOps / Platform](https://playlikeboy.github.io/roles/devops)
- [Projects](https://playlikeboy.github.io/projects)

## Highlights

- Merged pull requests in [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/pull/20778), [Preact](https://github.com/preactjs/preact/pull/5331) and [Editor.js](https://github.com/codex-team/editor.js/pull/3040); more in review at Jaeger, Kmesh, Lexical and Radix UI.
- Tech lead for Bitotsav '26 — the platform behind a ~5,000-participant festival.
- [SopKit](https://sopkit.github.io) — 605+ client-side browser tools, 4.3M+ requests in 30 days.

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
