# Four Public Repo Status

Date: 2026-05-20

This file tracks only the first four public repositories:

- `portfolio`
- `VIRTURA-Collective`
- `VIRTURA-SpacePort`
- `VIRTURA-Newsroom`

It does not document internal repos, tool repos, tracker packs, data reservoirs, or private governance workspaces.

## Current Public Repo State

| Repo | Local path | Public role | Current state |
|---|---|---|---|
| `portfolio` | `/Users/ewanqian/Documents/Sync/Workspace/portfolio` | personal entry | clean; pushed through `cc0c8ca` |
| `VIRTURA-Newsroom` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-Newsroom` | publication outlet | clean; pushed through `0433923` |
| `VIRTURA-SpacePort` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-SpacePort` | public frontstage and deep archive | clean; pushed through `8993bd5` |
| `VIRTURA-Collective` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-Collective/repo` | team entry | clean; pushed through `3100da3` |

## Latest Public Pushes

| Repo | Latest public maintenance commit | What changed |
|---|---:|---|
| `portfolio` | `cc0c8ca` | normalized repeated work metadata with `object_id` and `personal_view` |
| `VIRTURA-Newsroom` | `0433923` | corrected `Balloon` naming and kept a deprecated old recap slug as a compatibility page |
| `VIRTURA-SpacePort` | `8993bd5` | corrected the `balloon-live-space` station slug and kept deprecated old station slug pages |
| `VIRTURA-Collective` | `3100da3` | added formal member work pages for `control-uptime-protocol` and `desire-machining-center` |

## Archive State

- Canonical public graph archive: `VIRTURA-SpacePort/docs/public-graph/`
- Local coordination copy, not public source of truth: `/Users/ewanqian/Documents/Sync/Workspace/docs/virtura-public-graph/`
- Deprecated `baloon` URLs are preserved only as forwarding/compatibility pages. Canonical public spelling is `Balloon`.
- `Kashiwa / TITAN` remains portfolio, deck, and external collaboration context only. It must not become a `VIRTURA-Collective` team work page.

## Repetition Handling

The same object can appear in more than one repo, but every appearance must act as a different view:

- `portfolio`: personal proof and individual method.
- `VIRTURA-Collective`: team, people, programs, activities, collaboration route.
- `VIRTURA-SpacePort`: source, station, archive, version, deep evidence.
- `VIRTURA-Newsroom`: article, recap, public explanation, review.

Repeated text should be reduced only after the view is clear. Do not delete rich source material just because it appears in more than one place.

## First Public Wave

Wave 1 links these objects across the four public repos:

- `drop-flow`
- `timer`
- `observation-and-symbiosis`
- `kashiwa-titan`
- `control-uptime-protocol`
- `desire-machining-center`
- `mova`
- `research-laboratory`
- `balloon-live-space`
- `digital-library-stage`

See [PUBLIC_LINK_MATRIX.csv](./PUBLIC_LINK_MATRIX.csv) for the exact view paths.

## Boundary Rules

- Do not promote internal ops, tracker state, data reservoirs, private prompts, or working caches into public navigation.
- Do not make `VIRTURA-Collective` absorb the deep archive role of `VIRTURA-SpacePort`.
- Do not make `portfolio` carry team identity.
- Do not make `VIRTURA-Newsroom` act as a homepage.
- Keep source links instead of copying whole deep archives into every repo.

## Completion Signal

This four-repo wave is considered organized when:

1. All four repos are clean against `origin/main`.
2. Each repo README states its public role.
3. Public graph docs list only the first four public repos.
4. Key objects have view-specific cross-links.
5. Remaining duplicate content is marked as view-specific rather than silently merged.

As of the latest scan, all five signals are true for the first public wave. The next work is quality maintenance, not basic rescue.
