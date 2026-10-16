# Portfolio Site Engineering Specification

## Delivery Unit Identifier

`portfolio-site`

## Background And Goals

The current Vue SPA no longer matches the repository's approved purpose. This delivery replaces it with a static Astro portfolio that presents `wisdomWindy` as a front-end engineer, makes project evidence and technical writing discoverable, provides truthful contact paths, and deploys efficiently on GitHub Pages.

## In Scope

- All PRD route patterns: `/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/blog/tags/[tag]`, `/contact`, `/search`, `/404`.
- Shared document shell, SEO, header/footer, theme, scroll-to-top, responsive behavior, accessibility, and local visual assets.
- Typed project/blog Markdown content, tag derivation, sorting, draft exclusion, previous/next navigation, reading time, and RSS.
- Project filtering, Pagefind search, contact mail handoff, article TOC, and graceful states.
- Astro/Tailwind/Pagefind tooling, unit tests, Playwright acceptance coverage, and GitHub Pages workflow.
- Removal of legacy Vue source/config/dependencies/tests and unrelated assets.

## Out Of Scope

- Backend form delivery, CMS, comments, authentication, analytics dashboard, database, or server rendering.
- Fabricated personal name, portrait, resume, employer, education, city, LinkedIn, testimonials, or metrics.
- Custom domain and guaranteed external deployment completion.
- Preserving unrelated carousel/tool functionality from the old SPA.

## Trigger And Start Conditions

Implementation starts only after this spec and the subsequent plan receive approval in `state.json`. Inputs are the approved PRD snapshot, single-module requirement map, page design, architecture design, and recovered TypeScript/code context.

## Requirement Split Summary

One sequential module contains six explicit functional units: platform/shell, identity/home/about, projects, blog/tags, search/contact, and quality/deployment. They share one static artifact and cannot pass final review independently.

## User Flow

1. A visitor lands on Home and sees identity, role, focus, primary project/contact actions, skills, featured work, and latest writing.
2. The visitor can browse About, Projects, Blog, or Contact from a consistent keyboard-accessible header.
3. Projects can be filtered by technology and opened into full case-study pages.
4. Blog entries can be opened, navigated by tag, scanned with a TOC, or found through Search.
5. Contact validates name/email/message and opens a prepared email draft; alternate GitHub/email links remain available.
6. Broken routes retain navigation and offer a return-home action.

## Page And Module Design

- Use the full-width-band/constrained-content layouts in `design/page-design.md` without nested cards.
- Home uses an unframed two-column identity hero with a local identity image and visible next-section hint.
- Project cards are the main repeated framed objects; blog results remain editorial rows.
- Article/project detail pages use a 720px narrative and optional desktop metadata/TOC rail.
- Styling uses neutral light/dark surfaces, primary blue, green state accents, and limited warm coral. No decorative gradient/orb backgrounds.
- All icons use `@lucide/astro`; icon-only controls have accessible names and tooltips when unfamiliar.
- Local optimized bitmap assets include one identity visual, three project covers, and a default social preview. Images declare dimensions/aspect ratio and meaningful alt text.

## Function-Complete Behavior Breakdown

### Global shell and SEO

- `BaseLayout` accepts title, description, optional image, type, and indexing flag.
- It renders canonical URL, viewport, color-scheme, description, Open Graph, Twitter card, favicon, RSS discovery, and a skip link.
- Header is sticky at 64px. Desktop shows brand and five links; mobile shows brand, theme, and menu icon.
- Menu button maintains `aria-expanded`, opens/closes its controlled panel, closes on Escape and on link selection, and restores focus to the button on Escape.
- Theme initialization runs in the document head before paint: stored `light|dark` wins, otherwise system preference. Toggle updates `data-theme`, `color-scheme`, storage, pressed state, and accessible label.
- Scroll-to-top remains hidden below 640px scroll distance, then appears without reflow; activation focuses/scrolls the document start with reduced-motion fallback.
- Footer shows `wisdomWindy`, current year, GitHub, email, and RSS; absent social profiles are not rendered.

### Home

- Hero renders public handle, “前端开发工程师”, a concise 2021-present practice statement, GitHub/email links, “查看作品” primary CTA, and “联系我” secondary CTA.
- Resume does not render as an enabled download while the file is absent; About explains how it will become available.
- Skills render from one site configuration grouped by engineering area.
- Featured projects query non-draft entries where `featured=true`, sort by `order`, and show at most three.
- Latest posts query non-draft entries by descending `pubDate` and show at most three.
- Content sections link to their full indexes; no empty section silently disappears without an explanatory state.

### About

- Intro uses only confirmed public facts and a neutral “2021 至今” front-end practice timeline.
- Skills share the same configuration as Home; duplicated literal lists are forbidden.
- Interests may use non-sensitive general engineering/reading/open-source copy.
- Resume control is visibly unavailable with descriptive text and cannot produce a broken request.

### Project list and filter

- Every card shows local cover, title, two-line description, up to four visible technology tags, publication year, and detail link.
- Filter options derive from published project technologies plus “全部”.
- Default is “全部”. Selection updates `aria-pressed`, visible cards, and result count without navigation.
- If no project matches, render an explicit empty message while retaining filters.
- With JavaScript disabled, every published project remains visible.

### Project detail

- Static paths are generated from published project IDs.
- Header renders cover, title, description, date/year, all technologies, and only defined GitHub/demo links.
- Body supports headings, paragraphs, lists, code, and figures; semantic sections cover background, responsibility, highlights, challenge/solution, and outcome.
- Previous/next uses deterministic project order and omits unavailable direction without dead anchors.

### Blog list and tags

- Published posts sort newest first and display title, summary, formatted date, computed/declared reading time, and tags.
- Tag navigator derives case-preserving labels with URL-safe lower-case slugs and counts.
- Tag pages generate only for tags present on published posts, show count, matching rows, and return link.
- Empty collection states remain readable and link to other relevant pages.

### Blog detail and TOC

- Static paths are generated from published post IDs.
- Article header includes title, description, publication date, optional update date, reading time, and tags.
- Astro Markdown rendering supplies headings/code. Desktop TOC uses rendered heading data and links to stable IDs; mobile/tablet uses a native `details` disclosure.
- Heading anchors receive scroll margin for the fixed header.
- Previous/next follows reverse chronological display order.

### Search

- Search root renders a labeled search input, search icon, clear icon button, status region, stable results container, and Blog/Projects fallback links.
- Initial state requests a keyword. Query normalization trims ends and collapses internal whitespace; whitespace-only becomes empty.
- Search begins for any non-empty normalized query after a 150ms debounce.
- Pagefind loads once from `/pagefind/pagefind.js`. The adapter maps each result to `url`, `title`, `excerpt`, and `type` from metadata.
- Loading text uses `aria-live=polite`; stale responses cannot replace results for a newer query.
- Results show count and linked rows. No match shows a dedicated message. Load/search failure shows a recoverable explanation and fallback links.
- A `q` URL parameter initializes the field; updates use `history.replaceState` without navigation.

### Contact form

- Fields: `name` text, `email` email, `message` textarea. All are required and have visible labels/autocomplete attributes.
- Name normalization trims leading/trailing whitespace and preserves internal spacing; valid length is 2-60 Unicode characters after trim.
- Email trims leading/trailing whitespace, lowercases for the generated address header only, uses native email syntax, and permits at most 254 characters.
- Message normalizes CRLF to LF, trims leading/trailing whitespace, preserves internal spaces/line breaks, and requires 20-2000 characters after normalization.
- Whitespace-only values are empty. No unsupported character blacklist is applied.
- Validation runs on blur and submit; input clears an existing field error once the value becomes valid.
- Submit prevents navigation when invalid, exposes field errors and an error summary, and focuses the first invalid field.
- Valid submit constructs a URI-encoded `mailto:me@1659140773@qq.com` with subject containing the normalized name and body containing name/email/message. It then assigns `window.location.href` to the URI.
- The page states before submit that the mail application will open and never displays a false “sent” confirmation.

### 404 and discovery

- 404 keeps the global shell, displays “404 / 页面不存在”, explains the route may have moved, and links home.
- RSS includes published posts only.
- Sitemap is generated from canonical `https://wisdomWindy.github.io`.
- Search indexing includes only project/blog detail main content via Pagefind metadata/body attributes; navigation/footer are excluded.

## Design Constraints

### Responsibility and boundaries

- Pages orchestrate data and components; components do not issue collection queries.
- `lib/content.ts` owns draft filtering, sorting, tags, reading time, and adjacency.
- DOM side effects stay within owning Astro components and use one initialization entrypoint each.

### Naming and domain language

Use `project`, `post`, `tag`, `published`, `featured`, `readingTime`, and `adjacent` consistently. Do not reuse legacy “work sets”, carousel, or tool vocabulary.

### Duplication and ownership

Site identity, contacts, skills, date formatting, content visibility/order, and tag normalization each have one owner. Repeated markup may be componentized only when it represents the same user-facing concept.

### Side effects and dependencies

Only theme writes local storage; only search loads Pagefind; only contact initiates mail navigation. No component mutates cross-component state or installs a global store.

### Complexity and readability

- Prefer guard clauses and named local helpers over nested branches.
- No component combines data querying, rich rendering, and unrelated browser workflow.
- No factories, managers, generic services, event buses, or speculative hooks.

## Project Bootstrap And Scaffold Decision

- Baseline: official Astro minimal TypeScript scaffold, applied in place at repository root.
- Fixed compatibility: `astro@5.18.x` because it supports Node 20; `@astrojs/mdx@4`, `@astrojs/sitemap@3`, Tailwind 4 via `@tailwindcss/vite`.
- Allowed deviations: add content loaders/schemas, MDX/sitemap integrations, Tailwind Vite plugin, Pagefind post-build script, `@lucide/astro`, Vitest/Playwright, and the approved directory structure.
- Removed scaffold material: generic welcome page/copy. A nested generated project is forbidden.
- Legacy Vue configs/dependencies are replaced, not adapted.

## Change Axes And Pattern Decision

- Pagefind varies by availability and result shape between dev/build; a small Adapter boundary is approved.
- Content provider, contact provider, and theme strategy each have one stable variant; direct functions are required and pattern layers are rejected.
- Reassess only if a future approved requirement adds a second search or content provider.

## Code Context And Impact Assumptions

The old Vue TypeScript config chain and generated ambient declarations were read and are obsolete. New source is governed by root `tsconfig.json` extending `astro/tsconfigs/strict`, with `moduleResolution` and Astro/Vite types inherited. `src/env.d.ts` references `astro/client`. Content entry types derive from Astro; no repository-wide declaration scan or duplicated DTO interface is allowed.

## API And Data Contracts

### Content collections

Source: local Markdown frontmatter validated by Astro Zod schemas.

`project` contract:

| Field | Type | Rules |
| --- | --- | --- |
| `title` | string | required, non-empty |
| `description` | string | required, non-empty |
| `pubDate` | coerced Date | required |
| `techStack` | string[] | required, at least one |
| `github`, `demo` | URL | optional; omit UI when absent |
| `cover.src`, `cover.alt` | string | required local asset path and meaningful alt |
| `featured`, `draft` | boolean | default false |
| `order` | number | default 0 |
| `outcome` | string | optional summary |

`blog` contract mirrors the PRD: required title/description/pubDate, optional updatedDate, tags default empty, draft default false, optional cover.

### Pagefind adapter

Contract source: generated Pagefind browser module. Raw result objects are not exported beyond the search component. Missing metadata falls back to page title/path; adapter errors become the search failure state.

### Mail handoff

Contract source: standard `mailto:` URI. No response, retry, or success event exists; the site hands control to the operating system.

## Context And Dependency Sources

- PRD, requirement map/module snapshot, page design, architecture design, and code context artifacts.
- Astro 5 content loader and route APIs.
- Tailwind 4 Vite integration.
- Pagefind build and browser search API.
- GitHub Pages Actions contract.

## Edge Cases

- No published projects/posts, no featured projects, no tags, optional external links absent.
- Deep links and trailing-slash behavior under GitHub Pages.
- Very long Chinese/English titles, technology labels, and unbroken code tokens.
- Theme storage unavailable or corrupt; system preference changes after load.
- Menu open during viewport resize, Escape behavior, focus visibility.
- Pagefind unavailable in dev or index corrupted; rapid queries returning out of order.
- Contact whitespace-only input, pasted multiline text, Unicode names, mail client absent.
- Reduced-motion users and 320px viewport.

## Acceptance Criteria

- `AC-01`: `pnpm check`, unit tests, production build, Pagefind indexing, and Playwright acceptance suite exit successfully.
- `AC-02`: every required route and generated project/post/tag route returns a visible page with shared navigation and no console/page errors.
- `AC-03`: desktop and 390px mobile screenshots show no overlap, clipping, horizontal page overflow, or blank primary imagery.
- `AC-04`: keyboard users can reach and operate skip link, navigation/menu, theme, filters, article TOC, search, contact, and primary links with visible focus.
- `AC-05`: theme initializes without incorrect-theme flash, toggles correctly, persists, and maintains readable contrast.
- `AC-06`: project filter changes cards/count and preserves all content without JavaScript.
- `AC-07`: posts/projects render from validated Markdown; drafts are excluded; sort/tag/previous-next rules are deterministic.
- `AC-08`: production-preview search returns both a blog and project result, and initial/no-result/failure states remain understandable.
- `AC-09`: invalid contact inputs surface the specified messages/focus; valid input creates the correctly encoded mail URI without claiming delivery.
- `AC-10`: 404, canonical metadata, sitemap, RSS, and GitHub Pages workflow exist and reference the user-site domain.
- `AC-11`: `package.json`, imports, TypeScript config, tests, and source contain no Vue/Pinia/Element Plus/legacy tool runtime dependencies.
- `AC-12`: local identity/project/OG images load with stable dimensions and meaningful alt text; below-fold images are lazy.
- `AC-13`: verification records `spec constraint compliance: pass`; review records `clean-code assessment: pass` and `design-pattern assessment: pass` with no blockers.

## Human Review And Handoff

The user approves this spec, then the plan. Final handoff includes local URL, build/test evidence, known environment-dependent limits, and content locations for future personal updates.

## Risks

- Node 20 pins the project to Astro 5; dependency upgrades must respect deployment runtime.
- Pagefind search can only be fully proved after production build/index.
- Missing real portrait/resume narrows content richness but must not be papered over with false data.
- Lighthouse score varies by machine; structural performance requirements are enforceable, exact hosted audit is not guaranteed locally.

## Approved Content Update - 2026-10-16

The user approved replacing the three conceptual project entries with three real, public, non-fork repositories owned by `wisdomWindy`:

1. `bili-catch`: a Tauri 2 desktop application using Vue 3, TypeScript, and Rust for Bilibili media downloads, local transcription, task recovery, and signed release updates.
2. `skill-hub`: a Vue 3 + Vite SSG skill catalog sourced from repository YAML content and deployed through GitHub Pages.
3. `visual-comprehensive-management-platform`: a Vue 3 + ECharts visualization case collection with a public Vercel demo.

The Projects index and Home featured section must show exactly these three entries in the order above. Each detail page must keep the existing five-section narrative contract, expose its GitHub link, expose the live demo only where it is both confirmed and reachable, and use a local 1200x750 cover derived from an actual project interface. Repository README, manifests, checked-in screenshots, and deployed pages are the factual sources; invented metrics, clients, or outcomes remain forbidden.

Additional acceptance criteria:

- `AC-14`: Projects and Home render BiliCatch, SkillHub, and the visualization collection; the former placeholder project titles and routes are absent from generated content.
- `AC-15`: each new detail page includes its confirmed GitHub link, confirmed technology labels, the required narrative headings, and working deterministic adjacency.
- `AC-16`: each new cover is a nonblank local 1200x750 WebP derived from a real project interface; SkillHub links to its confirmed GitHub Pages deployment, while an unreachable demo URL must be omitted rather than rendered as a dead action.
