# wisdomWindy Portfolio

Astro-powered personal portfolio, project archive, and technical blog for `https://wisdomWindy.github.io`.

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm test
pnpm build
pnpm preview
pnpm test:e2e
```

`pnpm build` renders the Astro site to `dist/` and then generates the static Pagefind index.

## Content

- Project entries: `src/data/projects/`
- Blog entries: `src/data/blog/`
- Public identity and links: `src/site.config.ts`
- Static media: `public/images/`

The site intentionally omits unverified personal history and unavailable social profiles.

## Deployment

GitHub Actions builds and deploys `dist/` to GitHub Pages. Configure the repository Pages source as **GitHub Actions**.
