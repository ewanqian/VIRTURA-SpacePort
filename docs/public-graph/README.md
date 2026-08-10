# VIRTURA Public Graph Workspace

Original coordination layer: 2026-05-20  
Personal encyclopedia bridge added: 2026-08-10

This folder holds cross-repo coordination docs for the VIRTURA public system. It does not replace any repo. It defines what each repo should own, what should be linked, and what should be migrated later without losing information.

## Current Reading Order

1. [PUBLIC_REPO_ROLE_CONTRACT.md](./PUBLIC_REPO_ROLE_CONTRACT.md) — repo-level role contract
2. [PUBLIC_LINK_MATRIX.csv](./PUBLIC_LINK_MATRIX.csv) — historical object-level link matrix
3. [public-graph-v2.json](./public-graph-v2.json) — historical graph seed
4. [SpacePort API](../../api/index.json) — current machine-readable endpoints
5. [Ewan Portfolio Bridge](../../api/ewan-portfolio-bridge.json) — maps team/archive object IDs to Ewan's personal encyclopedia IDs
6. [Ewan Knowledge Map](https://github.com/ewanqian/portfolio/blob/main/docs/encyclopedia/KNOWLEDGE-MAP.md) — current human-readable personal navigation

## Current View Contract

Do not delete repeated content first. Convert repeated content into views of shared objects:

- `portfolio`: **personal view + personal fact layer**
- `VIRTURA-Collective`: team/network view
- `VIRTURA-SpacePort`: station/archive/source view
- `VIRTURA-Newsroom`: publication/context view

For Ewan-specific biography, role, education, awards or personal-project status, do **not** infer from team pages. Resolve through:

- [Ewan Encyclopedia](https://github.com/ewanqian/portfolio/blob/main/public/data/ewan-encyclopedia.json)
- [Ewan Claims Ledger](https://github.com/ewanqian/portfolio/blob/main/docs/encyclopedia/claims-ledger.md)
- [Ewan Media Index](https://github.com/ewanqian/portfolio/blob/main/public/data/ewan-media-index.json)

## Legacy Graph Files

`public-graph-v2.json` and `PUBLIC_LINK_MATRIX.csv` remain valuable historical coordination records. They are **not** the sole current source of truth and may contain legacy paths preserved for compatibility.

Canonical current paths should be resolved through the repo entry pages and API bridge before editing old graph snapshots.

## Files

- [PUBLIC_REPO_ROLE_CONTRACT.md](./PUBLIC_REPO_ROLE_CONTRACT.md)
- [LOCAL_REMOTE_DIFF_2026-05-20.md](./LOCAL_REMOTE_DIFF_2026-05-20.md)
- [PUBLIC_GRAPH_MAINTENANCE_LOG_2026-05-20.md](./PUBLIC_GRAPH_MAINTENANCE_LOG_2026-05-20.md)
- [public-graph-v2.json](./public-graph-v2.json)
- [PUBLIC_LINK_MATRIX.csv](./PUBLIC_LINK_MATRIX.csv)

Keep non-public or internal workspaces outside this public graph unless a selected public output is explicitly promoted.
