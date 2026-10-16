# Clarifications

## 2026-10-16 Real Project Content Update

- Decision: replace all three conceptual project cases rather than mixing conceptual and public-repository entries.
- Approved selection: BiliCatch, SkillHub, and Visual Comprehensive Management Platform.
- Selection rule: owned, public, non-fork repositories with distinct representative value; forks and thin tutorial exercises are excluded.
- Evidence rule: project claims come from GitHub repository metadata, README/manifests, checked-in screenshots, and confirmed public deployments.
- Approval evidence: the user explicitly replied `确认` to the proposed selection and implementation shape on 2026-10-16.
- External-link recovery: the visualization repository advertises a Vercel homepage, but repeated browser and HTTP checks timed out on 2026-10-16. The project remains selected, its GitHub link remains public, and the dead demo action is omitted under the existing truthful-link rule.

| Question | Answer | Final decision | Affected spec area |
| --- | --- | --- | --- |
| Should illustrative PRD identity/history be published? | No; it is not verified personal data. | Use `wisdomWindy`, confirmed public contacts, and neutral 2021-present practice wording. | Home, About, Contact |
| How can a static GitHub Pages contact form submit? | No backend exists. | Validate locally and open an encoded `mailto:` draft; never claim delivery. | Contact |
| What happens without a resume PDF? | Rendering a dead link would violate link acceptance. | Show an unavailable state that can later become a download without layout change. | Home, About |
| What replaces the missing portrait? | A fabricated likeness is unacceptable. | Use a local abstract identity/monogram bitmap visual. | Home, About, assets |
| Does search work during plain Astro dev? | Pagefind output is generated after build. | Provide an explicit unavailable/failure state in dev; verify search in production preview. | Search, tests |
| Which Astro major is used? | Latest Astro 7 requires Node 22.22+, while PRD deploy uses Node 20. | Pin compatible Astro 5.18.x and matching integrations. | Tooling, deployment |
| Are project filter selections shareable? | PRD does not require it. | Keep filter state local and simple. | Projects |
| Is a code graph needed? | No legacy runtime module survives. | Record targeted fallback inspection instead of graph bootstrap. | Code context |

## Approval Gate

Status: approved by the user on 2026-10-16.
