---
title: route-update-sync
skill_id: route-update-sync
skill_type: agent-ops
status: active
priority: P0
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: Research Laboratory route archives
input_type: route-archive
output_type: sync-pack
runtime_target: repo-update
updated: 2026-04-01
---

# Skill: Route Update Sync

## What this skill does
This skill takes a route change or a new high-level judgment and turns it into coordinated update suggestions across repository layers.

It exists to prevent one strong judgment from remaining trapped in a single archive note.

## When to use it
Use this skill when:

- a route judgment changed
- a new direction became stable
- a new product priority was confirmed
- multiple repositories may need coordinated updates
- a new archive should influence public and structural layers

## Required input
- source-of-truth archive path
- summary of what changed
- list of affected repository layers

## Steps
1. Read the source-of-truth route archive.
2. Extract:
   - the main judgment
   - what changed
   - what is now deprioritized
   - what layers are affected
3. Separate outputs into four layers:
   - SpacePort source-of-truth update
   - Newsroom publication suggestion
   - portfolio personal-direction update
   - Collective concise team-direction update
4. Keep each layer in its proper voice and role.
5. Do not copy the full source text into every layer.
6. Generate a short actionable update pack.
7. If the route becomes recurrent, log reusable patterns into memory or skill logs.

## Good output
A good output:
- keeps SpacePort as source-of-truth
- keeps Newsroom readable
- keeps portfolio personal
- keeps Collective concise
- avoids duplication
- makes the next update action obvious

## Failure modes
- duplicates the same text everywhere
- loses the main judgment while simplifying
- confuses source-of-truth with publication
- writes Collective as if it were a research container
- turns personal direction into institutional language
