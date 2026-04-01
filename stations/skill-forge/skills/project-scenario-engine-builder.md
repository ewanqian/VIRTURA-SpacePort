---
title: project-scenario-engine-builder
skill_id: project-scenario-engine-builder
skill_type: scenario
status: active
priority: P1
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: project briefs / route archives / production notes / Digital Stage materials
input_type: project-brief-or-production-logic
output_type: scenario-framework
runtime_target: web-tool
updated: 2026-04-01
---

# Skill: Project Scenario Engine Builder

## What this skill does
This skill converts a project brief, production logic, or stage/library workflow into a scenario framework that can later become a project simulator or decision-support tool.

Its role is to turn implicit experience into explicit scenario structure.

## When to use it
Use this skill when:

- a project should be turned into a scenario simulator
- a production process needs comparison paths
- a stage / library / exhibition / brand space project needs a structured planning engine
- a team needs a reusable project decision frame
- a Digital Stage or Digital Library workflow should become an interactive scenario system

## Required input
- project brief or workflow source
- target scenario type
- expected users
- key variables
- expected output form

## Steps
1. Read the project source fully.
2. Identify:
   - core objective
   - user type
   - key constraints
   - critical decisions
   - possible branches
3. Separate the project into:
   - fixed conditions
   - variable conditions
   - optional enhancements
   - risk points
4. Convert the material into a scenario framework with:
   - scenario goal
   - player / operator role
   - available inputs
   - decision nodes
   - branch logic
   - validation or scoring logic
   - output format
5. Keep the structure modular enough for future web implementation.
6. Preserve reality-based logic instead of abstract storytelling.
7. Indicate which part could later become:
   - a project simulator
   - a scenario comparison tool
   - a pitch support tool
   - a Digital Stage planning layer

## Good output
A good output:
- makes project logic explicit
- distinguishes fixed vs variable conditions
- creates reusable decision nodes
- supports comparison and iteration
- can later become a web-first simulator or planning system

## Failure modes
- treats the project as a narrative only
- fails to separate conditions from decisions
- adds theme without operational value
- ignores constraints and risks
- produces something too abstract to test
