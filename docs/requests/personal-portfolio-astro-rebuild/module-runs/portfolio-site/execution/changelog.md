# Execution Changelog

## Context

- Execution mode: inline, sequential, explicitly approved by the user.
- Workspace: existing `main` checkout, retained because approved user deletions and the new PRD are uncommitted here.
- TDD policy: testable behaviors use observed red -> green -> refactor. Configuration and generated raster assets are verified through contract/build/image checks.

## Task Log

### T01 - Astro scaffold, types, and test baseline

- Status: in progress.
- RED: added `tests/tooling.test.ts` to assert approved commands, Node 20 compatibility, and absence of the legacy Vue runtime.
- Dependency adjustment: replaced deprecated `lucide-astro` with maintained `@lucide/astro`, which declares Astro 5 support.
- GREEN: tooling contract passed 3/3; `astro check` passed with zero diagnostics; the minimal Astro production build passed.
- Refactor: narrowed `tsconfig.json` to new source/tests/configs so ignored legacy `docs/` output no longer produced 442 irrelevant hints.
- Status: done.

### T02 - Visual assets, design tokens, and global shell

- Status: done.
- RED: `e2e/shell.spec.ts` failed on the missing desktop brand/navigation and missing mobile menu controls.
- GREEN: desktop skip-link/navigation/theme persistence/footer and mobile menu/Escape/focus behavior passed in the two Playwright projects; `astro check` reported zero diagnostics.
- Asset mode: the built-in image generator was unavailable. A checked-in Playwright renderer produces one identity bitmap, three project covers, and the default OG image in `public/images/`; all five outputs were visually inspected.
- Recovery: the first renderer version URL-encoded the Chinese Windows path and wrote five generated files into a sibling `%E9...` directory. That directory was verified to contain only those outputs, deleted, and the script corrected with `fileURLToPath`.
- Structure: site identity and navigation live in `site.config.ts`; `BaseLayout` owns metadata/skip link and shared shell components own their DOM side effects.

### T03 - Content collections, pure rules, and source content

- Status: done.
- RED: `tests/content.test.ts` first failed because the rule module did not exist, then exposed a mixed-language tag ordering mismatch.
- GREEN: six unit tests cover draft exclusion, deterministic post/project sorting, tag merging and slugs, adjacency edges, bilingual reading time, and UTC-stable Chinese date formatting.
- Content: added Zod-validated loaders plus three project case studies and three technical articles grounded in the repository's prior tool/navigation/content themes without invented clients or metrics.
- Verification: targeted unit tests, zero-diagnostic `astro check`, and the Astro production build passed.

### T04 - Home, About, and Projects

- Status: done.
- RED: four desktop E2E flows failed against the temporary home and missing About/Projects routes.
- GREEN: Home identity/shared skills/three featured cards, factual About/resume fallback, project filtering/counts, and case-study narrative/adjacency passed 4/4.
- Structure: project queries stay in pages; the reusable card only renders entry data; filtering is a progressively enhanced component and leaves all cards visible without JavaScript.

### T05 - Blog, tags, TOC, and RSS

- Status: done.
- RED: index, tag, detail, and RSS acceptance tests all failed on their missing routes.
- GREEN: all four desktop and all four 390x844 Chromium flows passed; article TOC switches between a sticky desktop rail and native mobile disclosure.
- Discovery: Astro headings drive TOC anchors; published post rules drive lists, tag pages, adjacency, and the static RSS response.

### T06 - Search and contact form

- Status: done.
- RED: pure tests first failed on missing contact/search modules; the full build then exposed an eager Vite resolution of the generated Pagefind browser module.
- GREEN: five pure tests cover query normalization, result mapping, contact normalization/validation, and mailto encoding; search and contact passed in both approved viewports.
- Search: the production index contains six detail pages. It loads once at runtime, rejects stale responses, preserves URL query state, and exposes initial/loading/empty/failure states.
- Contact: validation owns all field errors and first-error focus; valid data prepares an encoded mail draft and hands control to the visitor's mail application without claiming delivery.

### T07 - 404, deployment, and legacy cleanup

- Status: done.
- RED: the deployment contract failed on the missing Pages workflow; discovery tests failed until the custom 404 route existed.
- GREEN: the workflow uses the current GitHub Pages action sequence, runs check/unit/build gates, and deploys the `dist` artifact with minimal permissions; legacy Vue dependency/entry assertions pass.
- Discovery: 404 shell, canonical/OG/RSS metadata, primary bitmap dimensions, robots, sitemap, and RSS are covered in desktop/mobile tests.

### T08 - Full verification and evidence

- Status: done.
- Initial full E2E: 28 passed, 2 skipped, 2 failed. One failure was a strict locator ambiguity; the real visual failure was a 390px home overflow caused by the hero word's minimum content width.
- Correction: scoped the footer locator, gave the mobile hero a stable 3rem title/min-width boundary, replaced viewport-scaled typography with explicit responsive sizes, and made visual evidence trigger lazy images before capture.
- Final fresh gates: 16/16 unit tests; `astro check` 0 errors/warnings/hints; build 20 pages and Pagefind 6 pages; Playwright 30 passed and 2 device-inapplicable tests skipped.
- Visual evidence: six reviewed full-page screenshots cover Home, Projects, and article detail at 1440x1000 and 390x844.

### T09 - Real GitHub project content update

- Status: done.
- RED: the updated Projects E2E passed the unchanged Home/About checks and failed on the missing BiliCatch, SkillHub, and visualization titles, detail routes, and external links.
- Content sources: GitHub repository metadata, README files, package manifests, BiliCatch checked-in verification screenshots, SkillHub GitHub Pages, and a locally rendered visualization repository route.
- External-link recovery: the visualization repository's advertised Vercel homepage timed out in both Playwright and direct HTTP checks, so the implementation omits that demo action and retains the confirmed GitHub link.
- Visual assets: BiliCatch and SkillHub covers use their actual interfaces. The visualization cover was captured from `/demo9` in a clean temporary clone at its 1920px design viewport, then scaled to 1200x750; all three outputs were visually inspected.
- GREEN: project selection/detail/link tests passed 5/5 on desktop, then the complete suite passed 32 checks with 2 device-inapplicable skips across desktop and mobile.
- Regression recovery: discovery and search checks still named the removed conceptual project; they were updated to the new sitemap route and a TypeScript query that proves both article and real-project results. A tokenized underscore query accidentally matched content and was replaced with a literal absent token.
- Final gates: 16/16 unit tests; `astro check` 0 errors/warnings/hints; build 20 pages and Pagefind 6 pages; Playwright 32 passed and 2 skipped. Desktop and 390px Projects screenshots were reviewed with no overlap, page overflow, clipped card content, or blank images.
