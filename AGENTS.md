# AGENTS

## Purpose
This repository is a living production system for VIRTURA’s research, salons, project archives, digital library, digital stage, and public-facing knowledge structures.

Its purpose is not only to store files, but to preserve working context, checkpoints, reusable knowledge, and readable public entry points.

## Core principles
- Preserve structure before adding volume.
- Important output should exist in the repo, not only in chats.
- Prefer updating existing structured documents over creating scattered new files.
- Public-facing pages must remain readable to first-time visitors.
- Internal notes can be denser, but should link to public entry points when relevant.
- Every meaningful project should have:
  - an entry page
  - context
  - version/checkpoint notes
  - related links
  - next-step hints when possible

## Repository working model
This repository operates in three layers:

1. Library
   - research
   - notes
   - methods
   - archives
   - reusable knowledge
   - references
   - summaries

2. Stage
   - public entry pages
   - salon pages
   - project presentation pages
   - readable paths for first-time visitors
   - external-facing summaries

3. Production
   - raw working notes
   - checkpoints
   - scripts
   - templates
   - experiments
   - internal records

## Required workflows
When handling new material, follow this order:

1. Identify what the material is
   - salon record
   - project note
   - research draft
   - archive update
   - public summary
   - workflow retrospective

2. Place it in the correct station or folder.

3. Convert raw material into structure
   - title
   - purpose
   - context
   - key points
   - related links
   - next step if relevant

4. Create or update an entry page if the material needs to be discoverable.

5. Preserve checkpoints
   - what changed
   - why it changed
   - what the current usable state is

6. Record reusable lessons in memory files when a repeatable pattern appears.

## Output expectations
Good output in this repo should be:
- readable
- structured
- linkable
- reusable
- expandable later

## Never do
- Do not leave important conclusions only in chat logs.
- Do not create duplicate entry pages for the same topic without clear reason.
- Do not overwrite historical notes without preserving the previous context.
- Do not publish internal rough notes as public-facing text without cleaning structure.
- Do not treat file storage as equivalent to knowledge organization.
- Do not publish draft, proof, source-path, approval, TODO, or verification language inside final public pages.
- Do not expose process phrases such as "if you want to read", "needs", "fix", "verify before publishing", or "not team-owned" in final public copy.
- Do not use SpacePort public pages as a place for cache text. Put cache in `_workspace_cache/virtura-publication/` or `docs/site-upgrade/`.

## Final Quality Gate

Before a SpacePort page, public HTML, API-facing text, media kit text, or public demo is considered final, run:

`python3 /Users/ewanqian/.codex/skills/virtura-final-quality-gate/scripts/final_quality_gate.py <paths>`

SpacePort can store object IDs, authority records, and source relationships, but visible public pages must read as complete visitor-facing pages.

Use final labels:

- `Archive`
- `Works`
- `Entities`
- `Media Kit`
- `Public Graph`
- `Coming Soon`

Avoid final-page process labels:

- `Draft`
- `Proof`
- `Source path`
- `Needs review`
- `Approval`
- `TODO`

## Preferred style
- Clear and direct
- Minimal but not vague
- Human-readable first
- Structured enough for AI reuse
- Preserve key judgments, not only raw material

## Completion checklist
Before finishing a task, check:
- Is the file in the right place?
- Is there a readable title?
- Is the context clear?
- Is this public, internal, or mixed?
- Does this need an entry page or summary?
- Should a reusable lesson be added to memory?
