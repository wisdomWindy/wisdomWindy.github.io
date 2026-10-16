# Requirement Map

## Request Summary

Rebuild the legacy Vue repository as one cohesive Astro personal portfolio delivery with shared content, routing, design, search, quality, and deployment foundations.

## Analysis Carry-Forward

- Scope includes every PRD route, shared shell, content collections, theme, search, contact handoff, tests, and Pages deployment.
- The rebuild removes obsolete Vue/tooling/media rather than running both stacks.
- No backend, CMS, authentication, fabricated personal data, custom domain, or production deployment guarantee enters scope.
- Missing portrait/resume/LinkedIn/location/history are non-blocking and require honest fallbacks.
- Page design and architecture design are both required before specification.

## Splitting Principles

The site is one module because its pages cannot be delivered or verified independently of the shared Astro build, design tokens, content schemas, and static search index. Functional units remain explicit inside that module so no route or state is lost downstream.

## Source Inventory

- `个人网站prd.md` sections 1-9
- `artifacts/prd-snapshot.md`
- `analysis/requirement-analysis.md`
- Approved full Astro rebuild decision

## Markdown Normalization Notes

The source PRD is already valid Markdown. Its ASCII wireframes were interpreted together with the accompanying module tables; no content required lossy format normalization, and no separate raw/normalized companion files are required.

## Module List

| ID | Name | Type | Source mapping | Scope | Order | Page design | Architecture design | Artifact root |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `portfolio-site` | Personal portfolio site | cross-module rule with page/form/list/detail units | PRD §§1-9 | Complete static portfolio, publishing, search, contact, quality, and deployment surface | 1 | required | required | `module-runs/portfolio-site/` |

Downstream spec and plan must retain all functional units below rather than treating the single module as a vague monolith.

## Module Dependency And Sequencing Notes

- Global shell, content schemas, tokens, and representative content precede collection-driven pages.
- Home depends on project and blog collection queries.
- Tag routes depend on visible blog entries.
- Search depends on rendered project/blog pages and Pagefind indexing.
- Preview E2E depends on build plus search indexing.
- Deployment depends on the verified production artifact.

## Module Execution Sequence

1. `portfolio-site` starts at `page-design`.
2. It then completes `architecture-design -> spec -> plan -> execute -> verify -> review`.
3. No later module exists; passing review completes the request.

## Page-Design Candidates

All public routes and shared navigation require page design. Particular attention is required for the hero first viewport, dense but readable content lists, article table of contents, responsive menu, search states, contact form, light/dark tokens, and 320px layout integrity.

## Spec Carry-Forward Checklist

- [ ] Header navigation, mobile disclosure, theme persistence, active/focus states, footer, and scroll-to-top.
- [ ] Home identity hero, skills, featured projects, latest posts, contact CTA, and honest resume state.
- [ ] About biography, categorized skills, neutral timeline, interests, and optional resume behavior.
- [ ] Project collection fields, ordering, list filter states, cards, detail blocks, optional external links, and previous/next navigation.
- [ ] Blog collection fields, chronological lists, tags, Markdown rendering, code highlighting, desktop/mobile TOC, and previous/next navigation.
- [ ] Search initial/loading/result/empty/error states and project/blog result labeling.
- [ ] Contact name/email/message validation, first-error focus, encoded mail-client handoff, and alternate channels.
- [ ] 404 recovery, SEO/canonical/OG basics, sitemap/RSS discovery, and GitHub Pages workflow.
- [ ] Responsive breakpoints, semantic HTML, WCAG AA contrast, keyboard navigation, reduced motion, stable media dimensions, and lazy loading.
- [ ] Draft exclusion, truthful public data, and no broken optional links.

## Open Questions And Unresolved Ambiguities

No mainline blocker remains. Real portrait, resume, LinkedIn, location, employer, and education data remain user-owned future content and must not delay or contaminate the implementation.
