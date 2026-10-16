# Module: Personal Portfolio Site

## Module Identifier

`portfolio-site`

## Module Name

Personal portfolio, projects, writing, search, and contact experience.

## Source Snapshot

The source requires:

- Global Header, Footer, ThemeToggle, SEO, and ScrollToTop components.
- `/`: avatar/name/role/introduction/social/CTA hero, skills, 3-4 featured projects, three latest posts, contact CTA.
- `/about`: detailed introduction, categorized skill matrix, reverse-chronological experience, interests, resume download.
- `/projects`: introduction, optional technology filter, responsive project-card grid.
- `/projects/[slug]`: title/description, technology stack, GitHub/demo links, background, responsibilities, highlights, challenges/solutions, screenshots, outcomes, and previous/next.
- `/blog`: reverse-chronological article summaries with dates, reading time, and tags.
- `/blog/[slug]`: article metadata, Markdown/MDX content, syntax-highlighted code, table of contents, and previous/next.
- `/blog/tags/[tag]`: active tag, count, matching articles, and return link.
- `/contact`: name, email, message, submit action, alternate contact channels, and optional location.
- `/search`: keyword field, live project/article results, result count, and no-result state.
- `/404`: error message and return-home action.
- Breakpoints: mobile `<640`, tablet `640-1024`, desktop `>1024`; mobile single-column/menu/hidden desktop TOC, tablet two-column where noted, desktop up to three-column and visible article TOC.
- Astro, Tailwind CSS, typed content collections, minimal islands/native JS, Pagefind, GitHub Pages/Actions.
- Lighthouse performance above 90 target, first load below two seconds target, lazy images, semantic HTML, keyboard navigation, WCAG 2.1 AA, and current mainstream browser support.

## Markdown-Normalized Snapshot

The source is already Markdown. The list above is the exact execution-relevant textual equivalent of the PRD's module tables and ASCII layouts; detailed field/state obligations are retained below.

## Source-Trace References

- PRD §1: background, goals, users
- PRD §2: module/route map
- PRD §3.1: global components
- PRD §§3.2-3.8: route content and layouts
- PRD §4: breakpoints and responsive behavior
- PRD §5: visual, type, spacing, layout, and component tokens
- PRD §6: technology, structure, collections, and deployment
- PRD §§7-9: quality, development scope, and acceptance

## Business Intent

Provide a credible, fast, searchable personal presence that lets visitors understand the author's front-end focus, inspect representative work, read technical writing, and initiate contact.

## User-Visible Scope

- Public read-only navigation across all routes.
- Responsive layouts and accessible interactive controls.
- Content-driven project/blog browsing and local search.
- Honest contact and optional-content states.
- Light and dark presentation with consistent identity.

## Forms, Tables, Displays, And Interactions

| Unit | Required content | Interaction/state |
| --- | --- | --- |
| Navigation | brand and five routes | mobile open/close; current/focus styling; keyboard support |
| Theme | icon control | system fallback, persistence, label update, no flash |
| Project grid | cover, title, description, technologies, detail link | filter by technology; all/empty states |
| Article list | title, summary, date, reading time, tags | chronological order; tag/detail links |
| Article detail | metadata, prose/code, headings | desktop sticky TOC; mobile disclosure; previous/next |
| Search | keyword and result list | startup/loading/results/no-results/error |
| Contact | required name/email/message | validate; focus first invalid field; open encoded email draft |
| Scroll top | icon button | appears after meaningful scroll; smooth or reduced-motion jump |

## Workflow And State Rules

- Theme state initializes before paint and persists locally.
- Mobile menu is initially closed and closes after navigation.
- Production content queries exclude drafts.
- Projects and posts use deterministic ordering.
- Contact never claims server delivery.
- Search loads the post-build index and degrades to navigational links on failure.
- GitHub Actions builds/indexes first, then publishes `dist`.

## Dependencies And Impacted Neighbors

Astro configuration, TypeScript configuration, package scripts, global CSS, content schemas, layouts, components, routes, tests, Pagefind output, and GitHub workflow all belong to the same delivery boundary. Legacy Vue files and dependency declarations are directly replaced.

## Page-Design Routing Decision

Required. The request materially changes layout, responsive hierarchy, visual system, and interaction states across every public route.

## Architecture-Design Routing Decision

Required. The request replaces the framework, routing, content model, client-boundary strategy, search build sequence, and test/deployment pipeline.

## Downstream Spec Obligations

- Define concrete route/component/content contracts and optional data behavior.
- Define the local identity/content source and prevent fabricated data.
- Define exact interaction state semantics and accessible control behavior.
- Define build/index/preview/deploy command sequence.
- Define measurable acceptance checks for routes, content, responsiveness, theme, filters, search, form, 404, and legacy removal.
- Keep abstractions limited to repeated site primitives and content-query helpers.

## Open Questions

Personal portrait, resume, LinkedIn, city, employer, and education sources are absent. They are non-blocking and must retain honest fallback behavior.
