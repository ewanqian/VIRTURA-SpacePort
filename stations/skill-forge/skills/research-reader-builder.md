---
title: research-reader-builder
skill_id: research-reader-builder
skill_type: reading
status: active
priority: P1
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: Research Laboratory notes / theory docs / route archives / knowledge-network blocks
input_type: research-block-or-longform
output_type: reader-structure
runtime_target: web-tool
updated: 2026-04-01
---

# Skill: Research Reader Builder

## What this skill does
This skill converts a research block, theory note, route archive, or knowledge-network section into a structured reader system.

Its purpose is not to rewrite the document as a generic article, but to reorganize dense material into a format suitable for:
- node-based reading
- layered public entry
- interactive publication
- future web-first reader tools

## When to use it
Use this skill when:

- a longform research note should become easier to enter
- a knowledge block needs a first-time-reader path
- a theory section should become a node-based reading structure
- a Digital Library block should become a readable system instead of a file pile
- a future reading runtime may be needed

## Required input
- source-of-truth document or folder
- target reading layer (internal / public / mixed)
- core judgment to preserve
- whether the output is entry-page-first or node-first

## Steps
1. Read the source material fully.
2. Identify the main judgment.
3. Separate:
   - entry sentence
   - core nodes
   - supporting nodes
   - deeper references
4. Decide whether the reading structure should be:
   - entry-page-led
   - node-led
   - summary-led
5. Rebuild the material into:
   - title
   - one-sentence orientation
   - what this reader is for
   - main nodes
   - related links
   - next-step path
6. Preserve readability for first-time visitors.
7. Preserve structural clarity for future Agent and runtime use.
8. If useful, indicate what could later become:
   - a Skill Forge reader
   - a SceneForge reader/viewer
   - a Digital Library public entry

## Good output
A good output:
- keeps the main judgment visible
- reduces entry friction
- creates a clear path through the material
- distinguishes core nodes from deeper material
- supports future web-first reader implementation

## Failure modes
- turns the source into another dense article
- loses the node logic
- overloads the entry page
- summarizes too aggressively and removes structure
- writes for experts only and ignores first-time readers
