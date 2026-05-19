# Local / Remote Diff Preservation Summary

Date: 2026-05-20

This file records high-risk divergence before any cleanup or migration. It is a preservation guard, not a merge decision.

## Remote Clones

| Repo | Path | State |
|---|---|---|
| `portfolio` | `/Users/ewanqian/Documents/Sync/Workspace/portfolio` | clean remote clone at `cefc8b3` |
| `VIRTURA-Newsroom` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-Newsroom` | clean remote clone at `06fd6b1` |
| `VIRTURA-SpacePort` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-SpacePort` | canonical remote clone; local iCloud conflict duplicate removed |
| `VIRTURA-Collective` | `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-Collective/repo` | fetched, not behind remote, but dirty working tree |

## Local Candidate Sources

| Path | Candidate value | Merge caution |
|---|---|---|
| `/Users/ewanqian/Documents/Sync/Workspace/_workspace_candidates/portfolio-local-candidate-2026-05-20` | broader local portfolio content, generated bundle, local assets, `siteTaxonomy.js`, public writing guide | no commits on `master`; must snapshot before merge |
| `/Users/ewanqian/Documents/Sync/Workspace/_workspace_candidates/VIRTURA-SpacePort-local-candidate-2026-05-20` | extra AVP, Blender, VR training, MOVA viewing room, local SpacePort pages | not a git repo; treat as candidate source |
| `/Users/ewanqian/Documents/Sync/Workspace/VIRTURA-Collective/local` | internal ops layer: agents, boards, inspectors, intake, issues, ops | do not merge into public repo wholesale |
| `/Users/ewanqian/Documents/Sync/Workspace/virtura_content_system` | large asset/object reservoir | use as canonical data candidate, not public nav |

## Known Divergence

### `portfolio` vs `portfolio-local-candidate-2026-05-20`

Local-only / changed areas:

- `AGENTS.md`
- many `README` and about/support docs differ
- `content/portfolio-public-writing-guide.md`
- many `content/works`, `content/nodes`, `content/writings` JSON files differ
- `database/*.json` differ
- React UI/data files differ
- local generated bundle differs
- extra asset folder: `assets/yujiayun-45ping`

Risk:

- remote clone is cleaner, but local tree likely contains latest content work.
- do not replace local tree with remote.

### `VIRTURA-SpacePort` vs `VIRTURA-SpacePort-local-candidate-2026-05-20`

Local-only / changed areas:

- `knowledge-network/learning-paths/immersive-space-production-track.md`
- `production-pipeline/codex-blender-mcp-asset-loop.md`
- `spatial-computing/apple-vision-pro-codex-demo.md`
- `spatial-computing/vr-practice-training-unity-openxr.md`
- MOVA drop-flow viewing room `index.html`, `viewing-room.css`, `viewing-room.js`
- station manifests and sourcebook differ
- duplicate iCloud conflict file was identical to the tracked README and has been removed

Risk:

- local SpacePort has valuable new applied docs and demo work.
- remote clone has latest Git history.

### `VIRTURA-Collective/repo` vs `VIRTURA-Collective/local`

Intentional split:

- `repo`: public team content
- `local`: internal operating system

Risk:

- merging `local` into `repo` would leak internal work.
- public repo should only receive selected outputs, not ops machinery.

## Safe Merge Order

1. Snapshot local-only trees.
2. Compare candidate docs by role, not by folder name.
3. Promote only public-facing, source-safe content.
4. Keep internal ops under `local` or a private repo.
5. Add object ids before copying repeated text.

## Do Not Do

- do not run destructive reset.
- do not mass copy local over remote.
- do not delete duplicate text before mapping where it goes.
- do not expose internal agents / boards / prompts in public front pages.
