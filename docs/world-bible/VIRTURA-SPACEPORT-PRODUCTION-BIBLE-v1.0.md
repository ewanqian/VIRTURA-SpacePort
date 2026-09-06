# VIRTURA SPACEPORT — PRODUCTION BIBLE v1.0

> Status: CANONICAL PRODUCTION STANDARD  
> Date: 2026-09-06  
> Scope: runtime stack, repository roles, asset pipeline, AI/Harness rules, QA, release, cost control

## 0. Principle

The production system must allow VIRTURA Spaceport to grow for years without collapsing into incompatible experiments.

The system must support:
- incremental construction;
- independent Station deployment;
- web-first access;
- XR;
- archive;
- version history;
- automated QA;
- human final judgment.

Do not optimize for a one-off demo.

---

## 1. Repository Roles

### VIRTURA-SpacePort
Canonical world, station data, public structure, archives, World Bible, frontstage data.

### SceneForge
Primary browser 3D / WebXR runtime.

### VIRTURA-Collective
People, works, activities, collaboration network.

### VIRTURA-Newsroom
Articles, public updates, retrospectives.

### VIRTURA2114
Historical simulation / legacy world archive.

### RepoForge / Forge
Governance, maintenance, automation, reusable repository rules.

Do not duplicate canonical information unnecessarily across repositories.

---

## 2. Canonical Runtime Stack

Primary:
- TypeScript;
- React;
- React Three Fiber;
- Three.js;
- WebGL2;
- WebXR;
- Vite;
- Zod;
- Biome;
- Vitest;
- GitHub Actions;
- GitHub Pages / static hosting where appropriate.

WebGPU:
- progressive enhancement only;
- never required for baseline access.

---

## 3. SceneForge Role

SceneForge remains the runtime foundation.

It should evolve into the Spaceport runtime kernel for:
- venue / Station loading;
- cameras;
- cue / state;
- media surfaces;
- WebXR;
- capability detection;
- scene manifests;
- routing;
- quality tiers;
- preview environments.

Do not replace SceneForge because a new framework looks attractive.

---

## 4. Needle Engine Role

Needle Engine is an optional capability adapter.

Use when it materially reduces work for:
- WebXR prototypes;
- multiplayer prototypes;
- browser screen capture;
- WebRTC rooms;
- Gaussian experiments;
- Unity-assisted authoring.

Needle must not become the sole source of truth unless a Station is explicitly classified as a Needle-only experiment.

---

## 5. VRChat Role

VRChat is a derivative platform.

Share:
- source geometry;
- scale;
- textures;
- audio;
- naming;
- spatial coordinates;
- interaction specification.

Keep separate:
- Unity project;
- VRChat SDK;
- platform scripts;
- platform-specific interaction.

Do not force the web runtime into Unity.

---

## 6. Station Package

Target package:

```
station/
  station.yaml
  README.md

  architecture/
    master.glb
    collision.glb
    lod/

  materials/
    materials.json

  lighting/
    lighting.json

  audio/
    ambience/

  scans/
    gaussian/
    photogrammetry/

  experience/
    interactions.json
    events.json
    tour.json

  cameras/
    cameras.json

  content/
    about.md
    current.md

  variants/
    web.json
    xr.json
    vrchat.json
```

A Station should remain intelligible from its files without requiring a conversation transcript.

---

## 7. Manifest Minimum

Every Station manifest must define:
- id;
- slug;
- name;
- class;
- status;
- runtime;
- capabilities;
- ports;
- quality targets;
- source-of-truth references.

Optional:
- live media;
- multiplayer;
- Gaussian;
- archive links;
- event state;
- current program.

---

## 8. Asset Pipeline

Preferred source and runtime formats:

### Authoring
- Blender .blend;
- source textures;
- scan sources;
- audio sources.

### Runtime
- GLB / glTF;
- compressed textures;
- validated mesh compression;
- streamed Gaussian formats when justified.

### Derivatives
- USD / USDZ;
- VRChat / Unity packages;
- stills;
- video;
- thumbnails.

The source asset must remain recoverable and editable.

---

## 9. Scan Pipeline

Captured reality pipeline:

```
CAPTURE
→ CLEAN
→ REGISTER
→ OPTIMIZE
→ COLLISION PROXY
→ MATERIAL / SPLAT CLASSIFICATION
→ WEB PREVIEW
→ XR TEST
→ ARCHIVE SOURCE
```

Scanned reality is never treated as disposable output.

Source capture and processed derivatives must be distinguishable.

---

## 10. Live Media

Phase 0:
- local video;
- local media;
- browser screen capture;
- WebRTC prototype.

Later:
- HLS for one-to-many viewing;
- SFU architecture for interactive rooms;
- TURN where needed;
- self-hostable or portable service choices preferred.

Do not make paid real-time infrastructure a prerequisite for early development.

---

## 11. Performance Targets

Performance is a quality requirement.

### Web shell
Preferred transferred size:
- < 3–5 MB where practical.

### Initial Station preview
Preferred:
- < 20 MB.

### Standard Station
Preferred:
- < 30–40 MB before optional high-detail streams.

### Desktop guidance
- visible triangles: around 1–1.5M or less in normal public views;
- draw calls: preferred < 300.

### XR guidance
- visible triangles: approximately 400k–800k depending on device and material complexity;
- draw calls: preferred < 150;
- minimal dynamic shadows;
- restrained post processing.

These are targets, not substitutes for profiling.

---

## 12. Quality Tiers

Every significant Station should support capability-based quality levels.

Suggested:
- LOW;
- STANDARD;
- HIGH;
- XR.

Quality tiers may vary:
- texture resolution;
- shadow quality;
- scan density;
- post processing;
- particle count;
- reflection quality;
- distant geometry.

Interaction and navigation should remain consistent.

---

## 13. AI / Harness Model

AI is production infrastructure, not world authority.

Only four canonical modes:

### /PLAN
Reads:
- World Bible;
- Architecture Bible;
- Production Bible;
- Station registry;
- existing assets;
- related archives.

Outputs:
- Build Card;
- dependencies;
- risks;
- acceptance criteria.

### /BUILD
May:
- edit code;
- build Blender assets;
- create materials;
- write manifests;
- create pages;
- create tests.

May not:
- silently rewrite canon;
- change coordinate systems;
- rename Stations without approval;
- bypass performance targets;
- remove historical information without reason.

### /REVIEW
Checks:
- fixed cameras;
- visual continuity;
- scale;
- clipping;
- material;
- lighting;
- navigation;
- performance;
- device behavior;
- accessibility;
- archive completeness.

### /PUBLISH
Allowed only after:
- manifest validation;
- lint;
- typecheck;
- tests;
- build;
- visual QA;
- device QA where applicable;
- human approval for world-changing decisions.

---

## 14. Build Card

No major spatial build begins from a vague prompt.

Required Build Card fields:

```
ID
NAME
ROLE
PRIMARY USER
STATION CLASS
PORTS
NEIGHBORS
PRIMARY EXPERIENCE
SPATIAL SEQUENCE
ARCHITECTURAL LANGUAGE
MATERIAL FAMILY
LIGHTING
SOUND
LIVE FEATURES
XR FEATURES
SCAN / GAUSSIAN
PERFORMANCE CLASS
REQUIRED ASSETS
FORBIDDEN CLICHES
DELIVERABLE
QUALITY GATE
```

Concept art should answer a Build Card.

It should not invent the project from scratch.

---

## 15. Review Cameras

Required:
- CAM_01_EXTERIOR;
- CAM_02_ARRIVAL;
- CAM_03_INTERIOR;
- CAM_04_HERO;
- CAM_05_HUMAN_SCALE;
- CAM_06_XR.

These views should remain stable enough for version-to-version comparison.

---

## 16. Versioning

Every meaningful update should produce:
- source change;
- manifest change if relevant;
- changelog;
- preview;
- review state.

Recommended lifecycle:

```
PLANNING
→ BUILD
→ REVIEW
→ COMMISSIONING
→ OPEN
→ MAINTENANCE
→ ARCHIVE
```

Do not overwrite significant historical versions without an archive path.

---

## 17. Public WIP

WIP may be public when clearly labeled.

Valid states:
- concept;
- under construction;
- commissioning;
- prototype;
- preview;
- open;
- archive.

Public WIP should communicate actual project state rather than pretend completeness.

---

## 18. Cost Rule

Phase 0–1 should remain possible with low-cost or free infrastructure.

Default:
- GitHub;
- GitHub Pages / static hosting;
- local Blender;
- open web stack;
- local testing;
- static manifests;
- self-contained assets where practical.

Paid services are introduced only for real needs:
- large storage / CDN;
- TURN;
- multiplayer SFU;
- broadcast;
- auth;
- analytics;
- database.

Every recurring paid service must document:
- purpose;
- cost class;
- dependency;
- migration / exit strategy;
- self-hosting alternative where reasonable.

No paid SaaS becomes the canonical source of truth.

---

## 19. Archive Rule

Important output must exist in repositories, not only in chats.

Preserve:
- design decisions;
- source files;
- manifests;
- concept references;
- review notes;
- build cards;
- screenshots;
- historical versions.

AI-generated work must be recoverable by future collaborators without relying on model memory.

---

## 20. Priority Build Order

Current production order:

### P0
A00 Arrival Terminal

Proves:
- routing;
- public entry;
- shared data;
- 2D/3D relationship;
- future XR entry.

### P1
A02 Balloon Live Space

Proves:
- live media;
- performance;
- high-energy spatial state;
- interactive room architecture.

### P2
A03 T-House

Proves:
- high-fidelity space;
- lighting;
- sound;
- captured nature;
- XR comfort.

Then:
MOVA → Senia → Lab → Archive → Forum.

Do not attempt equal-fidelity production across all Stations simultaneously.

---

## 21. Production Success Condition

The production system succeeds when a new Station can be added without:
- inventing a new engine;
- creating a new coordinate system;
- duplicating all content;
- breaking old Stations;
- losing archive history;
- requiring a new paid platform;
- depending on one conversation.

That is the operational definition of a scalable Spaceport.
