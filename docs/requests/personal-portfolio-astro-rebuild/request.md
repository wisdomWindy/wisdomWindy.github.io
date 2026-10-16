# Personal Portfolio Astro Rebuild

## Request Identifier

`personal-portfolio-astro-rebuild`

## Source Link

- Local PRD: `个人网站prd.md`
- User direction: rebuild the existing project, deleting obsolete content where appropriate.
- Approved approach: replace the legacy Vue SPA with the PRD-aligned Astro static site.

## Business Summary

Rebuild the repository as a personal portfolio and technical publishing site for GitHub Pages. The site presents the author's profile, skills, projects, writing, and contact channels to employers, technical peers, collaborators, and other interested visitors.

## Goal Statement

Deliver a polished, responsive, content-first Astro website that implements every route and core interaction in the PRD, is maintainable through typed content collections, and can be built and deployed through GitHub Pages without retaining obsolete Vue application code.

## Initial Done Signal

- All PRD routes build and render at desktop and mobile widths.
- Light/dark theme, navigation, project filtering, blog/tag navigation, local search, contact workflow, and 404 recovery work.
- Blog and project entries are backed by typed Markdown content.
- Automated type/build/tests pass and deployment workflow targets GitHub Pages.
- Legacy Vue-only source, dependencies, tests, and unrelated media are removed.
- Verification and review artifacts record passing acceptance, clean-code, and design-pattern assessments.

## Trigger Condition

The user explicitly requested implementation from `个人网站prd.md` and subsequently approved the recommended full Astro rebuild.

## Initial Context Sources

- `个人网站prd.md`
- Current repository configuration and git history
- Public identity facts already present in the legacy site: `wisdomWindy`, GitHub profile, email address, and front-end practice beginning in 2021
- Astro, Tailwind CSS, Pagefind, and GitHub Pages official documentation where current integration details are required

## Human Handoff Point

Handoff occurs after the site passes build, automated checks, responsive browser verification, and framework review. Personal copy and private career details remain editable content and must not be invented.

## Affected Area

The entire application surface: package/tooling configuration, layouts, shared components, content schemas and entries, all routes, styling, browser interactions, tests, static assets, search indexing, and deployment automation.

## Participating Modules

- Global shell and theme
- Home
- About
- Projects
- Blog and tags
- Search
- Contact
- Error handling and deployment
