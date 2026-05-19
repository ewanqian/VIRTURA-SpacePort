# Public Graph Maintenance Log 2026-05-20

This log records the current state of the first four public VIRTURA repositories only:

- `portfolio`
- `VIRTURA-Newsroom`
- `VIRTURA-SpacePort`
- `VIRTURA-Collective`

Internal repositories, tracker packs, data reservoirs, and private governance workspaces are intentionally out of scope.

## GitHub Push State

| Repo | Branch state | Latest verified commit | Notes |
|---|---|---:|---|
| `portfolio` | `main...origin/main` | `cc0c8ca` | public object metadata normalized |
| `VIRTURA-Newsroom` | `main...origin/main` | `0433923` | `Balloon` spelling corrected; old recap slug preserved |
| `VIRTURA-SpacePort` | `main...origin/main` | `8993bd5` | canonical `balloon-live-space` station plus deprecated old slug pages |
| `VIRTURA-Collective` | `main...origin/main` | `3100da3` | formal independent member work pages added |

## Quality Checks

| Check | Result |
|---|---|
| Four public repos are on `main...origin/main` | pass |
| Public graph JSON parses | pass |
| `PUBLIC_LINK_MATRIX.csv` paths resolve where populated | pass |
| `Kashiwa / TITAN` absent from Collective team context | pass |
| Canonical spelling is `Balloon` | pass |
| Deprecated `baloon` links have compatibility stubs | pass |

## Anti-Duplication Result

The system now treats repeated content as view-specific pages instead of copy-pasted duplicates:

- `portfolio`: personal proof and practice method
- `VIRTURA-Collective`: team, member, public program, and collaboration context
- `VIRTURA-SpacePort`: station, source archive, and object graph
- `VIRTURA-Newsroom`: article, recap, review, and public explanation

The guardrail is the `object_id` plus `view_type` block. A new repeated public page should not be created unless it can name its object and its role.

## Red Team Notes

1. The public graph is structurally repaired, but some older roadmap and audit docs still describe earlier stages.
2. `VIRTURA-Collective` now has public member work pages, but the next quality step is artist-confirmed source media for Murphy and Sihui.
3. `Observation and Symbiosis` still needs a stronger Newsroom recap or MOVA exhibition route when public.
4. `MOVA` and `Research Laboratory` have links, but need stronger visitor-facing entry copy.
5. Deprecated `baloon` paths are useful for old links, but must stay clearly deprecated so the wrong spelling does not re-enter new content.
6. Kashiwa / TITAN is valuable proof, but must stay outside Collective team ownership language.

## Long-Term Goal Edits Still Needed

| Priority | Change | Why |
|---|---|---|
| P0 | Keep the four-repo public contract as the source of truth | prevents internal repos from leaking into public navigation |
| P0 | Add source media and credits to Murphy / Sihui work pages | makes independent work pages real, not placeholder-like |
| P1 | Refresh old Collective audit/status docs with current-stage notes | prevents future agents from following stale `Stage 2.x` plans |
| P1 | Add Newsroom route for `Observation and Symbiosis` when public | completes the object graph for that work |
| P1 | Frontstage QA for the Collective prototype on desktop/mobile | content is organized; public experience still needs visual validation |
| P2 | Consolidate old todo language into one current maintenance index | lowers future confusion without deleting historical records |

## Archive Rule

Canonical archive for this wave lives in `VIRTURA-SpacePort/docs/public-graph/`. Historical docs may remain in each repo, but any current cross-repo decision should point back here.
