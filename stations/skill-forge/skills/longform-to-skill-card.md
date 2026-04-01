---
title: longform-to-skill-card
skill_id: longform-to-skill-card
skill_type: publishing
status: active
priority: P0
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: Research Laboratory longform notes / route archives / theory documents
input_type: longform-text
output_type: skill-card
runtime_target: none
updated: 2026-04-01
---

# Skill: Longform to Skill Card

## What this skill does
This skill converts a longform research document, route archive, or theory note into a reusable skill card.

Its job is not to make public-facing copy.  
Its job is to compress a source-of-truth document into a structure that weaker models, future agents, and operational workflows can execute.

## When to use it
Use this skill when:

- a research note has become stable enough to reuse
- a route archive contains repeatable workflow logic
- a theory document should become an operational skill
- a longform note is too dense for lighter models
- a workflow has appeared at least twice and should be compressed

## Required input
- source-of-truth document path
- one stable longform note, route archive, or theory note
- context on whether the output is internal-only or shared within Skill Forge

## Steps
1. Read the full source-of-truth document.
2. Identify the main judgment.
3. Identify the repeated action pattern inside the document.
4. Remove theory-only sections that do not affect execution.
5. Rebuild the content into 6 blocks:
   - What this skill does
   - When to use it
   - Required input
   - Steps
   - Good output
   - Failure modes
6. Keep input and output explicit.
7. Do not convert it into public summary language.
8. Add the new skill to the registry if it is stable enough.

## Good output
A good output:
- preserves the main judgment
- keeps execution structure clear
- can be used by a weaker model
- does not depend on re-reading the full mother text each time
- remains linked to its source-of-truth

## Failure modes
- turns the document into a loose summary instead of a skill
- preserves theory but loses execution
- invents new abstractions not present in the source
- hides the input/output relationship
- becomes too public-facing and loses operational clarity
