# Code Context

## Context Requirement

Architecture design first required structural context because this is a full repository refactor. A graph was preferred only if surviving application boundaries existed; it was not required once inspection confirmed the old runtime is fully replaced.

## Graph Availability Check

- Repository graph status: `missing`
- Detection method: repository file/config inspection found no graph configuration or generated graph artifact.
- Tool/runtime found: none.
- Iteration context: architecture-design iteration 5.

## Installation Or Bootstrap Record

- Attempted: no.
- Method: not applicable.
- Result: `not_needed`.
- Summary: legacy application source is already deleted and no old symbol boundary will be integrated.
- Next step: use targeted repository/history inspection and define the new dependency graph explicitly.

## Fallback Record

A code graph was not bootstrapped. Fallback was used with high confidence because the repository is being rebuilt in place, the legacy `src/` application files are already deleted in the working tree, and no surviving application module will be integrated into the new runtime. A graph of `HEAD` would describe code explicitly approved for removal and would not improve dependency safety.

- Enumerated all tracked/remaining files with repository search.
- Read root package, Vite, TypeScript, Vitest, Playwright, and generated declaration configuration.
- Inspected the previous `Home.vue` and `About.vue` directly from `HEAD` for public identity facts.
- Read git status and recent history to distinguish user deletions from new work.

## Existing Technical Shape

- Vue 3 SPA using Vite 4, Vue Router, Pinia, Element Plus, auto-import/component resolvers, and browser-heavy tool dependencies.
- Build output is customized to `docs/` with timestamped bundles.
- TypeScript extends Vue/node configs and includes generated Vue/Element Plus declarations.
- Vitest is coupled to the Vite/Vue setup; Playwright starts Vite directly.
- Current source and public images are already marked deleted by the user.

## Replacement Impact

All existing runtime, generated declarations, Vue TypeScript references, Vite plugin configuration, Vue-oriented tests, and legacy `index.html` are obsolete. The new Astro project must replace them coherently rather than leaving mixed framework artifacts.

## Governing Type Context

The old `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `tsconfig.vitest.json`, `env.d.ts`, `auto-imports.d.ts`, and `components.d.ts` were read. They govern only the deleted Vue app and will be replaced by Astro's strict TypeScript preset plus Astro-generated environment declarations. No backend-owned or generated business contract types survive into the new project.

## Relevant Entrypoints

- Old: `index.html -> src/main.ts -> App.vue/router` (approved for removal).
- New: Astro filesystem routes under `src/pages`, build through `astro build`, index through `pagefind --site dist`, and preview through `astro preview`.

## Key Symbols And Modules

No legacy symbol is retained. New key exports are content collections, site configuration, content-query helpers, and Astro component/page props defined in the architecture artifact.

## Dependency And Side-Effect Boundaries

Build-time collection querying is separate from browser scripts. Browser side effects are limited to theme persistence, local control state, Pagefind index loading, and mail-client navigation.

## Impact Scope

All root tool configuration, application source, tests, static assets, and deployment files are replaced or recreated. Documentation and the PRD remain intact.

## Open Follow-Up Checks

- Resolved: Astro generated `.astro/types.d.ts`; `astro check` passed under the strict root config.
- Resolved: Pagefind generated and loaded `/pagefind/pagefind.js` under production preview.
- Resolved: tooling and deployment contract tests confirm no Vue runtime dependencies or entry files remain.
