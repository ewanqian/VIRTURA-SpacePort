# VIRTURA Public Graph v2 Workspace

Date: 2026-05-20

This folder holds cross-repo coordination docs for the VIRTURA public system. It does not replace any repo. It defines what each repo should own, what should be linked, and what should be migrated later without losing information.

## Files

- [PUBLIC_REPO_ROLE_CONTRACT.md](./PUBLIC_REPO_ROLE_CONTRACT.md): shared role contract for `portfolio`, `VIRTURA-Collective`, `VIRTURA-SpacePort`, and `VIRTURA-Newsroom`.
- [LOCAL_REMOTE_DIFF_2026-05-20.md](./LOCAL_REMOTE_DIFF_2026-05-20.md): current status and boundary notes for the four public repos only.
- [public-graph-v2.json](./public-graph-v2.json): first object graph seed across works, people, stations, and articles.
- [PUBLIC_LINK_MATRIX.csv](./PUBLIC_LINK_MATRIX.csv): object-level link matrix for the first migration wave.

## Working Rule

Do not delete repeated content first. Convert repeated content into views of shared objects:

- `portfolio`: personal proof view
- `VIRTURA-Collective`: team/network view
- `VIRTURA-SpacePort`: station/archive/source view
- `VIRTURA-Newsroom`: publication/context view

Keep non-public or internal workspaces outside this public graph unless a selected public output is explicitly promoted.
