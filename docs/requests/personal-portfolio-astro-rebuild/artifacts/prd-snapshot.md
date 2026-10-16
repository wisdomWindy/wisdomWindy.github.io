# PRD Snapshot

## Source Summary

The source requests a GitHub Pages personal website built with Astro, Tailwind CSS, Astro Content Collections, minimal client-side JavaScript, Pagefind search, and GitHub Actions deployment. It replaces the existing application rather than incrementally extending it.

## Key Business Goals

- Establish a credible personal brand.
- Present professional skills and project experience.
- Publish technical articles and personal engineering notes.
- Offer clear, accessible contact paths.
- Serve potential employers, peers, collaborators, and interested visitors.

## Explicit Behavior Constraints

### Global shell

- Fixed 64px header with logo, Home, About, Projects, Blog, Contact, and theme toggle.
- Footer carries copyright and GitHub, LinkedIn, and RSS links.
- A scroll-to-top control is available on long pages.
- Main content width is capped at 1200px; article reading width is 720px.
- Light and dark palettes follow the PRD color tokens and preserve WCAG 2.1 AA contrast.
- Mobile below 640px uses a single column and hamburger navigation; tablet is 640-1024px; desktop is above 1024px.

### Home (`/`)

- Hero displays avatar, name, role, short introduction, social links, project CTA, and resume CTA.
- Skills appear as a tag cloud or grouped presentation.
- Show 3-4 featured projects and the three newest blog posts.
- End with a contact invitation and contact link.

### About (`/about`)

- Present an extended introduction, categorized skill matrix, reverse-chronological experience timeline, interests, and resume download state.
- Skills cover front end, back end, databases, DevOps, and tools where supported by real profile data.

### Projects (`/projects`, `/projects/[slug]`)

- List page has title, introduction, optional technology filter, and responsive cards.
- Cards display cover, title, description, technology tags, and detail navigation.
- Detail pages display title, description, technology stack, GitHub/demo links when available, background, responsibilities, highlights, challenges, solutions, screenshots, outcomes, and previous/next navigation.
- Grid is one column on mobile, two on tablet, and three on desktop.

### Blog (`/blog`, `/blog/[slug]`, `/blog/tags/[tag]`)

- Blog list displays title, summary, date, reading time, and tags in reverse chronological order.
- Desktop article pages show a right-side table of contents; tablet/mobile hide the sidebar and expose a collapsible directory control.
- Article pages provide title metadata, Markdown/MDX content, syntax-highlighted code, and previous/next navigation.
- Tag pages display the active tag, count, matching posts, and a return link.

### Contact (`/contact`)

- Form fields are name, email, and message with a submit control.
- Alternate contact channels include email and social links, with optional city.
- Mobile is single-column; tablet and desktop show form and contact information side by side.
- Because the deployment target is static GitHub Pages and the PRD defines no backend, delivery must use a transparent client-side email handoff rather than pretending to persist data.

### Search (`/search`)

- Search field accepts a keyword and returns matching articles/projects in real time.
- Results show type, title, route, and summary.
- Empty query and no-result states are explicit.

### 404 (`/404`)

- Show a clear 404 message, explanation, and return-home action.

### Quality and deployment

- Images are lazy-loaded when below the fold.
- Semantic HTML and keyboard navigation are required.
- Target latest two versions of Chrome/Edge, Firefox, and Safari plus mobile browsers.
- Target Lighthouse performance above 90 and first-page load below two seconds under normal audit conditions.
- GitHub Actions builds with Node 20, uploads `dist`, and deploys using GitHub Pages permissions.

## Forms, Tables, Displays, And Interactions Extracted From Source

| Functional unit | Fields/displays | Trigger | Outcome/state |
| --- | --- | --- | --- |
| Header | logo, five primary links, theme icon | link click, menu toggle, theme toggle | navigate, expand/collapse mobile menu, persist selected theme |
| Project filter | All and technology tags | filter selection | update visible cards; show stable empty state when no cards match |
| Contact form | name, email, message | submit | validate required/email fields, then open an encoded email handoff; show validation errors accessibly |
| Search | keyword input | typing/query change | show result count and matching page entries; show empty/no-result state |
| Blog contents | headings from rendered article | contents link click | navigate to heading anchor; mobile disclosure expands/collapses |
| Scroll to top | icon control | page scroll and click | becomes available after scrolling and returns focus/viewport to top |

## Workflow And State Rules Extracted From Source

- Theme initializes from saved preference, otherwise system preference; the control updates the document theme and persists the choice.
- Mobile navigation is closed by default and closes after route selection.
- Content collection entries marked draft are excluded from production-facing lists and static routes.
- Featured projects are ordered by their explicit order field; blog entries are sorted by publication date.
- Pagefind indexing occurs after the static Astro build and feeds the search route.
- Deployment runs on pushes to `main` and manual dispatch, then publishes the generated `dist` artifact.

## Relevant Modules Or Pages

- `/`
- `/about`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/blog/tags/[tag]`
- `/contact`
- `/search`
- `/404`
- Shared header, footer, theme, SEO, cards, content schemas, and styles

## Confirmed Facts

- Repository owner/brand handle: `wisdomWindy`.
- Public GitHub profile: `https://github.com/wisdomWindy`.
- Existing public contact email: `me@1659140773@qq.com`.
- Existing profile states front-end development practice began in 2021.
- The user approved removal of obsolete legacy content and the full Astro rebuild approach.

## Notable Open Questions

- A real portrait, resume PDF, LinkedIn profile, city, employer history, and education history were not supplied.
- These gaps must be represented honestly through neutral visual/content states; the implementation must not fabricate personal history or third-party profiles.
- Lighthouse score and production URL availability depend on the final GitHub Pages environment and cannot be proven solely by a local source build.
