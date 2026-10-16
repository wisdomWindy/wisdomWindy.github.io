# Page Design

## Delivery Unit Identifier

`portfolio-site`

## Page Objective

Create a focused engineering portfolio that communicates identity, capability, project evidence, and writing within the first few interactions. It should feel authored and professional rather than like a generic SaaS landing page or decorative template.

## Target Users Or Scenarios

- A recruiter scans role, experience direction, skills, and representative work in under two minutes.
- A technical peer opens a project or article and evaluates reasoning and implementation depth.
- A collaborator searches for a topic, checks contact channels, and drafts an email.
- A returning reader uses tags, search, and theme preference efficiently.

## Layout Structure

### Global frame

- A 64px sticky header sits on an opaque/translucent surface with a crisp bottom rule; content never slides beneath it unreadably.
- Desktop navigation stays inline. Mobile uses a single icon menu button and a full-width disclosure below the header, not a floating card.
- Main sections are full-width bands with constrained inner containers, alternating only when content grouping benefits scanning.
- Default content cap is 1200px; long-form reading cap is 720px; article-with-TOC uses a 720px body plus a 220px right rail.
- Footer is a quiet full-width band with identity, primary social links, RSS, and current year.
- Scroll-to-top is a fixed icon button that appears only after the initial viewport.

### Home

- First viewport is an unframed two-column hero: left contains name, role, concise positioning, public links, and primary project/contact actions; right contains a local identity visual with a stable square ratio.
- The first viewport leaves a visible hint of the skills band below on common desktop/mobile sizes.
- Skills form a compact taxonomy, not a cloud of arbitrarily sized words.
- Featured projects use three equal cards with real cover imagery, bounded descriptions, tags, and a single clear detail action.
- Latest writing is a dense three-row editorial list, emphasizing title/date/topic rather than cards.
- The closing contact band uses a direct invitation with one action.

### About

- Intro uses a narrow text column plus a compact facts rail.
- Skill groups use an unframed responsive grid with headings and token rows.
- Experience is a vertical timeline with year, role focus, and verified practice statements; no fake employer logos.
- Interests and resume state appear as supporting content, visually subordinate to experience.

### Projects

- Header combines title, concise framing copy, and result count.
- Filter is a horizontally scrollable segmented control on small screens and wrapping control row elsewhere.
- Cards use a fixed 16:10 cover, title, two-line description, technology swatches/tags, and arrow-link affordance.
- Detail pages open with a full-width project cover, then split into a 720px narrative and a sticky metadata rail on desktop.
- Narrative sections follow the PRD sequence: context, responsibility, highlights, challenge/solution, outcome. Screenshot media stays unframed or in simple figure frames, never nested cards.

### Blog

- Blog index is a single readable column with a small tag navigator and editorial rows separated by rules.
- Article header contains title, summary, date, reading time, and tags; prose starts without a card wrapper.
- Desktop TOC is sticky in the right rail. Mobile/tablet uses a native disclosure placed before prose.
- Code blocks have high contrast, horizontal overflow, copy affordance only if it remains lightweight, and stable spacing.
- Tag page mirrors the blog list and foregrounds tag/count context.

### Search

- Search input is the dominant first control, with a search icon, clear action, and visible result count.
- Results are unframed rows labeled as article or project; path and summary support scanning.
- Initial, loading, empty, and failure states occupy a stable minimum area to avoid layout jumps.

### Contact

- Desktop/tablet uses a 3:2 split: form left, alternate contact details right, separated by whitespace/rule rather than nested cards.
- Mobile stacks form and contact channels.
- Labels remain visible above fields; validation messages sit below their fields and use both color and text.
- Submit action explicitly says it opens the visitor's mail app.

### 404

- Large but bounded `404`, concise explanation, and home action centered within the content band.
- Header/footer remain available so the visitor is never trapped.

## Visual Hierarchy

1. Identity or page title is the primary signal.
2. One-sentence context explains why the page matters.
3. Primary content uses clear headings, dates, and outcomes.
4. Metadata and tags remain compact and secondary.
5. Calls to action appear at decision points only, not on every block.

Hero typography is reserved for the home identity. Inner page headings remain compact and proportional to their local containers.

## Section Breakdown

| Route | Ordered sections |
| --- | --- |
| `/` | hero, skill taxonomy, featured projects, latest writing, contact band |
| `/about` | introduction/facts, skills, experience, interests, contact link |
| `/projects` | page header, filters/count, project grid |
| `/projects/[slug]` | project hero, metadata, narrative/media, previous/next |
| `/blog` | page header, tag navigator, chronological article list |
| `/blog/[slug]` | article header, mobile TOC, prose + desktop TOC, previous/next |
| `/blog/tags/[tag]` | tag header/count, article list, return link |
| `/search` | header, search field, result status, result rows/fallback links |
| `/contact` | invitation, form, public contact channels |
| `/404` | error code, explanation, home action |

## Styling Direction

- Light surface: white primary, cool near-white secondary, charcoal text, muted gray metadata.
- Dark surface: near-black neutral rather than blue slate, elevated charcoal secondary, off-white text.
- Primary blue expresses links/selected controls; green indicates availability/success; warm coral is reserved for small highlights and error-adjacent contrast. The interface must not read as a one-hue palette.
- Rules and subtle background bands organize content; page sections do not float as decorative cards.
- Individual project cards use 6-8px radius, 1px border, and restrained elevation on hover.
- Typography uses a local/system-first sans stack compatible with Chinese and Latin text; code uses a local monospace stack. Letter spacing remains zero.
- Icons come from an installed icon set and carry tooltips or accessible labels where meaning is not obvious.
- Motion is limited to 120-200ms opacity/transform/color changes and disabled under reduced motion.

## Interaction Skeleton

- Theme toggle: initialize -> announce current action -> toggle -> persist -> update browser color scheme.
- Mobile menu: button controls `aria-expanded` and menu visibility; Escape/link selection closes it.
- Project filter: selected segment updates count/cards without changing card dimensions; “All” restores list.
- Search: query input loads Pagefind once, debounces minimally, renders state/result rows, and supports keyboard focus.
- Contact: native validation plus custom error summary/focus; successful validation creates encoded `mailto:` URL.
- TOC: links to stable heading IDs; active highlighting is optional and must not require heavy hydration.
- Scroll top: visibility follows scroll threshold; activation returns to the document top and respects reduced motion.

## Responsive Behavior

| Surface | Mobile `<640` | Tablet `640-1024` | Desktop `>1024` |
| --- | --- | --- | --- |
| Header | brand + menu + theme icons | inline or compact nav based on fit | full inline nav |
| Home hero | visual above copy; CTA wraps vertically when needed | balanced two-column | two-column with 45/55 ratio |
| Project grid | one column | two columns | three columns |
| About skills | one column | two columns | three columns |
| Project detail | single column | single column | narrative + sticky metadata rail |
| Blog detail | mobile disclosure; no side rail | disclosure; no side rail | prose + sticky TOC |
| Contact | single column | two columns | two columns |

All fixed controls have stable sizes; the longest Chinese labels wrap without clipping. Hero and first content hint fit common viewport heights without viewport-scaled font sizes.

## Design Risks

- Sparse verified personal data could make About feel generic; counter with concrete front-end practice focus and project evidence, not invented history.
- Generated/local cover art could overpower content; use restrained, inspectable visual systems tied to each project concept.
- Pagefind dev mode can be unavailable; design includes a deliberate index-unavailable state.
- Dark code blocks and dark theme can merge visually; use border/surface contrast rather than stronger saturation.
- Fixed header/mobile disclosure can obscure anchors; apply scroll margin to headings.

## Open UI Questions

- A future real portrait can replace the local identity visual without layout changes.
- A future resume PDF can turn the unavailable secondary action into a download link without changing component structure.
- LinkedIn and city remain hidden until supplied; the contact layout must not reserve empty placeholders.
