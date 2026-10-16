# Architecture Design

## Delivery Unit Identifier

`portfolio-site`

## Architecture Objective

Replace the deleted Vue SPA with a predictable static Astro application whose pages are generated from typed local content, whose browser state is limited to isolated progressive-enhancement controls, and whose build artifact can be indexed and deployed without a server.

## Architecture Scope And Triggers

The framework, route ownership, content model, search pipeline, styling system, TypeScript context, automated tests, and deploy workflow all change. Both page and architecture design are required because this is an in-place greenfield surface over an existing repository history.

## Upstream Inputs And Assumptions

- All routes and states come from `requirements/modules/portfolio-site.md`.
- Layout/hierarchy/interaction decisions come from `design/page-design.md`.
- `artifacts/code-context.md` confirms no old runtime boundary should survive.
- Node 20 remains the deploy baseline from the PRD. Therefore Astro 5.18.x is intentionally selected; Astro 7 requires Node 22.22+.
- Official Astro minimal TypeScript starter is the scaffold baseline. It will be applied in the repository root rather than generating a nested project, preserving history and approved docs.

## Module Boundary Design

| Boundary | Responsibility |
| --- | --- |
| `site.config.ts` | verified identity, navigation, social/contact, skills, and site-wide copy/data |
| `content.config.ts` + `src/data/*` | authoritative typed project/blog content contracts and Markdown entries |
| `lib/content.ts` | draft filtering, deterministic sorting, tag derivation, reading-time and previous/next helpers |
| `layouts/*` | document shell/SEO and long-form project/blog composition |
| `components/*` | reusable presentational or progressive-enhancement primitives using `@lucide/astro` icons |
| `pages/*` | route orchestration and build-time collection queries only |
| `styles/global.css` | Tailwind 4 import, design tokens, typography, prose, focus, and shared primitives |
| `public/*` | optimized static media, resume placeholder policy, favicon, robots assets |
| `tests/*`, `e2e/*` | pure helper/schema tests and browser acceptance checks |

## File And Directory Structure

```text
src/
  components/
    Header.astro Footer.astro ThemeToggle.astro ScrollToTop.astro
    IconLink.astro SectionHeading.astro ProjectCard.astro BlogRow.astro
    ProjectFilter.astro SearchExperience.astro ContactForm.astro
  data/
    blog/*.md projects/*.md
  layouts/
    BaseLayout.astro BlogLayout.astro ProjectLayout.astro
  lib/
    content.ts format.ts
  pages/
    index.astro about.astro contact.astro search.astro 404.astro rss.xml.ts
    projects/index.astro projects/[slug].astro
    blog/index.astro blog/[slug].astro blog/tags/[tag].astro
  styles/global.css
  content.config.ts
  site.config.ts
public/
  images/{identity,projects,og}/...
tests/content.test.ts
e2e/site.spec.ts
```

## Code Relationship And Dependency Direction

```text
site config ───────────────► shared components ─► pages/layouts
Markdown ─► content config ─► content helpers ───► pages/layouts
global tokens ───────────────────────────────────► all UI
generated HTML ─► Pagefind build ─► search browser module
pages/layouts ─► static dist ─► preview tests ─► Pages deploy
```

Pages may depend on components, helpers, site config, and Astro content APIs. Components must not query collections implicitly. Helpers must not import UI. Browser scripts must not own source content or duplicate collection rules.

## Responsibility Split

- Page files select data and compose sections.
- Layouts own document metadata and repeated detail-page frames.
- Components own one visible/control responsibility and accept explicit props.
- `content.ts` owns every sorting/filtering/tag/adjacency rule once.
- Native browser scripts own only DOM state for menu/theme/filter/search/contact/scroll controls.
- No global client store, event bus, or hydrated framework island is justified.

## Function Design And Public Entrypoints

- `getPublishedPosts()` / `getPublishedProjects()` return filtered deterministic collections.
- `getAllTags(posts)` returns normalized label/count/slug records.
- `getAdjacentEntries(entries, id)` returns previous/next items in display order.
- `estimateReadingMinutes(body)` yields a bounded integer used when explicit time is absent.
- `formatDate(date)` centralizes Chinese display formatting.
- Search module exposes one `initSearch(root)` entrypoint and keeps Pagefind loading internal.
- Contact module exposes one submit handler that validates, focuses errors, and constructs the mail URL.

## State Ownership And Data Flow

| State | Owner | Persistence |
| --- | --- | --- |
| theme | document root + theme control | `localStorage` |
| mobile menu | header DOM | none |
| active project filter | project-list DOM | none; optional URL query is unnecessary |
| search query/results | search root DOM | query string may initialize/share state |
| contact form values/errors | native form DOM | none |
| content visibility/order | build-time helpers | generated HTML |

Astro produces fully usable links/content without JavaScript. JavaScript enhances filtering, search, theme, and form handoff.

## Data Structures And Type Strategy

- Use Astro 5 Content Layer with `glob()` loaders and Zod schemas in `src/content.config.ts`.
- `projects`: title, description, published date, `techStack[]`, `featured`, `order`, cover image path/alt, optional GitHub/demo, optional outcome, draft.
- `blog`: title, description, publication/update dates, `tags[]`, draft, optional featured image.
- Derive `CollectionEntry<'blog'>` and `CollectionEntry<'projects'>`; do not duplicate interfaces.
- Site configuration uses `satisfies` with narrow local types for navigation/social/skill groups.
- Old Vue ambient declarations and generated component types are deleted.

## Contract And Adapter Boundaries

There is no backend contract. Pagefind is the only third-party runtime boundary and is isolated behind `SearchExperience.astro` browser logic. The UI maps Pagefind's raw result object into a small local render shape (`url`, `title`, `excerpt`, `type`) before DOM rendering. Mail handoff is isolated in `ContactForm.astro`; pages never construct URI payloads.

## Pattern Decisions And Rejected Alternatives

- Approved pattern: thin adapter around Pagefind result loading because the third-party index API and dev/build availability differ from UI states.
- Direct functions are used for content rules; Strategy/Factory/Manager layers are rejected because there is one stable local-content provider.
- Global state/store is rejected because interactive states are local and independent.
- Vue/React islands are rejected because native controls are sufficient and zero-framework client JS improves performance.
- Nested project scaffold is rejected; an in-place Astro minimal scaffold preserves repository identity.

## Readability And Maintenance Guardrails

- Page files should remain composition-oriented; repeated cards/rows/control behavior move to named components.
- One source owns each rule: draft filtering, ordering, date formatting, tags, and adjacency.
- Browser scripts query only inside their component root and cleanly no-op when unavailable.
- Optional links are conditionally omitted, never rendered with `#`.
- Personal copy remains centralized or content-backed so later factual updates do not require layout edits.
- Avoid speculative directories such as services/stores/managers when no corresponding boundary exists.

## Architecture Risks

- Pagefind's generated module does not exist during ordinary Astro dev; search must render a clear development/failure state and be verified under production preview.
- Astro 5 is intentionally held for Node 20 compatibility; upgrades to Astro 7 require a coordinated deploy-runtime change.
- Tailwind 4 uses the Vite plugin, not the legacy `@astrojs/tailwind` integration.
- Static image paths must remain base-aware; this repository is a user Pages site with `/` base.
- Markdown headings/TOC structure must stay compatible with Astro-rendered heading IDs.

## Open Architecture Questions

None block specification. Future resume/portrait data are content changes within existing public boundaries.
