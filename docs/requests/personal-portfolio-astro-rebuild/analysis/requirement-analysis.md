# Requirement Analysis

## Analysis Summary

This is a full-surface static-site rebuild, not a visual refresh of the current Vue SPA. The implementation must preserve the PRD's routes, content-first model, responsive behavior, accessibility, search, and deployment model while replacing legacy framework code. The main requirement tension is that the PRD contains illustrative personal data; only repository-backed public facts may be published as real information.

## Source Inventory And Reading Stance

| Source | Role | Reading stance |
| --- | --- | --- |
| `个人网站prd.md` | Primary product authority | Defines routes, modules, responsive rules, technology direction, quality goals, and deployment workflow. |
| Approved chat decision | Scope authority | Confirms the full Astro rebuild and permits removal of obsolete content. |
| Legacy `src/views/About.vue` at `HEAD` | Historical public profile reference | Supplies only public handle/contact/start-year facts; its layout and remote quote behavior are not requirements. |
| Current package/config files | Existing technical baseline | Demonstrate Vue/Vite ownership and identify replacement scope. |
| Official framework documentation | Integration reference | Used only to resolve current Astro/Tailwind/Pagefind/GitHub Pages integration details. |

No external prototype, private resume, employer record, education record, portrait, LinkedIn profile, or backend contract was supplied. Those omissions constrain copy and feature states but do not block the static-site mainline.

Precedence is: explicit user direction and approved approach, then PRD, then repository-backed public facts, then implementation documentation. Illustrative PRD values such as “张三” and “某公司” are not personal facts.

## Confirmed Scope

- Replace the Vue SPA with an Astro static content site.
- Deliver all ten PRD route patterns and their shared shell.
- Add typed Markdown content collections for projects and blog posts.
- Provide responsive navigation, theme persistence, project filtering, article contents navigation, local search, contact handoff, and scroll-to-top behavior.
- Provide SEO metadata, sitemap/RSS-compatible discovery, static search indexing, automated checks, and GitHub Pages deployment configuration.
- Remove Vue, Pinia, Element Plus, ffmpeg/document-preview dependencies, Vue tests, obsolete build settings, and unrelated media that no longer serve the portfolio.
- Preserve truthful public identity facts already in the repository.

## Out Of Scope And Non-Goals

- No CMS, authentication, comments, analytics dashboard, database, contact backend, or server runtime.
- No fabricated employers, education, client outcomes, LinkedIn account, portrait, or location.
- No migration of the old entertainment carousel or browser-tool screens unless represented honestly as prior project concepts.
- No custom domain setup; GitHub Pages default domain remains the target.
- No guarantee of a deployed production URL from local work alone.
- No decorative component system or abstraction layer beyond recurring site primitives.

## Confirmed Decisions And Invariants

- Astro owns routing and static rendering; client JavaScript is limited to interactive controls.
- Content Collections are the source of truth for project/blog metadata and bodies.
- Draft entries never appear in production lists, search, tag pages, or generated detail routes.
- Search is local/static and must not call a hosted search service.
- Contact submission uses an honest `mailto:` handoff because no backend exists.
- Theme works before hydration to avoid a visible incorrect-theme flash.
- All user-facing pages share the same semantic header/footer shell and accessible focus behavior.
- Missing personal artifacts appear as explicit unavailable/coming-later states, never fake links or invented data.
- Existing user deletions are preserved; the refactor may complete removal of obsolete files.

## System Boundaries And Ownership

| Boundary | Ownership |
| --- | --- |
| Astro source, content, UI, tests, and build | This repository and request |
| GitHub Pages hosting and GitHub Actions runtime | External platform configured by repository workflow |
| Pagefind index generation | Build-time dependency operating on generated `dist` |
| Email delivery | Visitor's local mail client and configured email provider |
| GitHub profile/avatar availability | External public profile; the site must degrade without relying on runtime fetches |
| Personal resume/portrait/private history | User-owned source material, currently absent |

## Source-Backed Behavior Inventory

| Area | Required display | Required interaction/state |
| --- | --- | --- |
| Header | brand, Home/About/Projects/Blog/Contact, theme icon | fixed desktop header; keyboard-operable mobile menu; active/focus states |
| Home | identity hero, skills, featured projects, latest posts, contact CTA | link navigation; content derived from collections |
| About | biography, skill groups, timeline, interests, resume state | download only when a real file exists |
| Projects | cards with cover/title/description/tags; rich detail sections | technology filter; detail and previous/next navigation |
| Blog | dated summaries/tags; Markdown detail; contents | chronological sorting; tag navigation; desktop/mobile contents variants |
| Search | keyword, result count, typed result cards | live query; loading/empty/no-results/error states |
| Contact | name/email/message and alternate channels | client validation; encoded mail handoff; no false success claim |
| 404 | 404 code, explanatory text | return-home action |
| Theme | light and dark token sets | saved preference, system fallback, accessible label updates |
| Deployment | static artifact | build on `main` push/manual run; Pages artifact deployment |

## Developer-Facing Behavior Details

### Roles and permissions

The only role is an anonymous public visitor. All content is read-only. Contact fields exist only in browser memory; no submission is persisted by the site.

### Collections and ordering

- Projects require title, description, technology stack, featured flag, order, visual cover reference, and optional GitHub/demo URLs.
- Blog posts require title, description, publication date, tags, and draft flag; update date is optional.
- Featured projects sort by ascending explicit order. Blog posts sort by descending publication date.
- Tags are derived from visible posts and route values must be URL-safe.

### Form validation and outcomes

- Name, email, and message are required.
- Email uses native semantic validation plus clear field-level error text.
- Invalid submission keeps focus in the form and moves focus to the first invalid field.
- Valid submission opens a pre-addressed, URI-encoded email draft. The UI describes this result before submission and does not display “sent” because delivery is outside site control.

### Search states

- Before a query: prompt to enter keywords.
- During index startup: restrained loading state without layout shift.
- Successful query: result count and links with type/path/summary.
- No matches: explicit no-result message and suggested navigation.
- Index load failure: a recoverable error plus direct links to Blog and Projects.

### Responsive and accessibility behavior

- Breakpoints follow `<640`, `640-1024`, and `>1024` intent without depending on exact device names.
- Navigation, disclosures, filters, form controls, and theme controls are keyboard operable and visibly focused.
- Motion respects `prefers-reduced-motion`.
- Fixed-format cards/media use stable aspect ratios to avoid layout shift.
- Content remains readable at 320px width and does not require horizontal scrolling.

## Implicit Requirements And Hidden Assumptions

| Source clue | Hidden question | Current stance | Impact and handling |
| --- | --- | --- | --- |
| GitHub Pages target plus contact form | Where is form data sent? | Confirmed static constraint | Use mail-client handoff; disclose outcome. |
| Pagefind named in stack | When can index be generated? | Confirmed build-time dependency | Build Astro first, then Pagefind over `dist`; dev search may show an index-unavailable state. |
| GitHub default domain | Is repository a user site or project site? | Inferred user-site from repository name | Configure root base and canonical site for `wisdomWindy.github.io`; keep URL centralized. |
| Resume CTA but no PDF | Should a fake placeholder download exist? | Non-blocking, source absent | Render an honest unavailable state; document where a future file belongs. |
| Hero requires avatar but no portrait | Can GitHub avatar be fetched at runtime? | Non-blocking | Use a local branded monogram/profile visual; avoid runtime dependency and false likeness. |
| PRD lists example skills/history | Are examples factual? | Confirmed as illustrative only | Use repository-backed front-end skills and neutral practice timeline; do not publish example employers. |
| Search covers posts/projects | How are projects indexed? | Confirmed user-visible requirement | Ensure project detail pages contain searchable descriptions and Pagefind metadata/type labels. |

## Workflow And Dependency Assessment

The shell, content schema, and design tokens are foundational. Home, list pages, detail pages, tags, and search depend on those foundations. Pagefind depends on the completed static build. End-to-end route and responsive verification depends on representative content existing. Deployment depends on a successful deterministic production build.

## Ambiguity And Clarification Register

| Ambiguity | Why it matters | Classification | Downstream stance |
| --- | --- | --- | --- |
| Real name not supplied | Hero/footer copy | Non-blocking | Use public handle `wisdomWindy`. |
| Resume PDF missing | Required CTA destination | Non-blocking | Render unavailable state; no broken link. |
| Portrait missing | Hero visual | Non-blocking | Use local brand visual, not a fabricated portrait. |
| LinkedIn/city absent | Contact details | Non-blocking | Omit unsupported facts while retaining GitHub/email. |
| Pagefind dev availability | Local UX | External integration pending | Provide graceful error/dev state; prove production index in build preview. |
| Lighthouse >90 | Environment-sensitive metric | Non-blocking | Optimize structurally and record local audit only if tooling/environment permits. |

No unresolved item changes the main business flow, data ownership, permission model, or route contract; there is no business blocker.

## Risk And Constraint Assessment

| Risk | Trigger | Affected area | Likely failure | Required handling |
| --- | --- | --- | --- | --- |
| Legacy/new tooling mixture | Partial migration | all builds | conflicting configs/dependencies | Replace root tooling coherently and verify no Vue imports/config remain. |
| Static search mismatch | Pagefind runs before/without pages | search | blank/broken search | Post-build index command and preview E2E coverage. |
| Incorrect GitHub Pages URLs | hard-coded root/assets | all routes | 404 assets/canonical links | central site URL and Astro URL helpers; verify generated files. |
| Theme flash | theme set after paint | global | visible incorrect theme | inline head initializer and CSS token themes. |
| Fabricated profile content | treating examples as facts | profile credibility | misleading public site | allow only confirmed public facts; label unavailable content. |
| Accessibility regression | icon-only controls/mobile menu | global interactions | inaccessible navigation | semantic controls, labels, focus, reduced-motion checks. |
| Card/layout shift | variable media/content | lists | unstable scanning and poor CLS | fixed media aspect ratios and bounded card layout. |

## Blocker Classification And Handling Stance

- `业务阻塞`: none.
- `外部接口待补`: Pagefind build integration must be confirmed against current official usage; GitHub Pages deployment availability is external but configuration is in scope.
- `非阻塞`: personal portrait, real name, resume, LinkedIn, city, and detailed career timeline. Implement honest fallbacks and keep content replacement straightforward.

## Confirmation-Reduction Notes

- Do not reopen the framework choice, static hosting model, route list, content source of truth, or legacy removal decision.
- Do not ask for a backend for contact; use the confirmed mail-client boundary.
- Do not invent personal data to fill visual layouts.
- Make missing resume/portrait data explicit in content/config so future replacement is localized.
- Turn search startup/failure, invalid form submission, mobile navigation, theme persistence, and absent optional links into concrete automated/manual verification cases.

## Splitting Strategy

Keep the request as one sequential delivery module, `portfolio-site`, because the routes share one content schema, global shell, design system, search index, and deployment artifact. Splitting by page would force repeated downstream gates while leaving each module unable to build or verify independently. Within the module, functional units remain separately specified and implemented: platform/shell, content, projects, blog, search/contact, and deployment/quality.

## Downstream Stage Signals

- `page-design`: required for the complete site because layout, visual hierarchy, responsive behavior, and interaction structure are central.
- `architecture-design`: required because the repository changes framework, routing, content model, build pipeline, and test boundaries.
- `requirement-splitting`: should emit one sequential module containing traceable functional units rather than independent page modules.
- Special sequence: shell/content foundations before routes; static build before Pagefind; build/index before preview E2E and deployment validation.
