# VIRTURA SPACEPORT — WORLD BIBLE v1.0

> Status: FOUNDATION / 2026 REBUILD  
> Canonical home: VIRTURA-SpacePort  
> Runtime reference: SceneForge  
> Legacy archive: VIRTURA2114  
> Date: 2026-09-06

## 0. Core Definition

VIRTURA Spaceport is a continuously constructed online spatial-cultural campus.

It is not a single game map, not a portfolio with 3D decoration, and not a default cyberpunk role-playing world. It is a network of persistent digital buildings connected by shared spatial standards, routes, public infrastructure, archives, and runtime protocols.

Each Station can work independently as a URL and application, while remaining part of the same expandable orbital campus.

The project must support four levels of access:

1. Browse — ordinary web app and information layer.
2. Walk — interactive 3D spatial layer.
3. XR — WebXR on supported Vision Pro / Quest-class devices.
4. Port — derivative builds such as VRChat or native platform exports.

The 3D world never replaces the 2D information layer. Both consume the same canonical data.

---

## 1. What This World Is / Is Not

### It is

- a digital headquarters campus;
- an orbital cultural district;
- a public arrival terminal;
- a museum and exhibition network;
- a live performance infrastructure;
- a research and prototyping facility;
- a high-fidelity rest / healing environment;
- a garden and scan habitat;
- an archive and memory infrastructure;
- a meeting / presentation venue;
- an expandable destination network.

### It is not

- generic cyberpunk;
- a permanent post-apocalyptic ruin;
- a military sci-fi base;
- a spaceship collection;
- a random neon HUD environment;
- a single huge monolithic 3D scene;
- a mandatory social game;
- a system that requires login before viewing;
- a world whose lore is more important than its actual functions.

The legacy VIRTURA2114 “Collapse Era” remains valid as an archival / historical simulation layer, not as the default public present.

---

## 2. Spatial Grammar — Hex Station System

The entire Spaceport uses a modular hexagonal station grammar.

### 2.1 Coordinate standard

Runtime canonical coordinates:

- unit: 1 unit = 1 meter;
- up: +Y;
- east: +X;
- north: -Z;
- station datum: local origin = center of station ground plane;
- rotation: Y-axis increments of 60 degrees for docking alignment;
- world positions are stored in manifests, not baked into asset filenames.

Blender may remain Z-up during authoring, but export must resolve to the runtime canonical coordinate system and pass transform validation.

### 2.2 Module classes

**H24 / Micro**
- nominal radius: 24 m;
- workshops, observation decks, service nodes, kiosks.

**H48 / Standard**
- nominal radius: 48 m;
- default public station module;
- museum rooms, labs, meeting stations, tea houses.

**H96 / Major**
- nominal radius: 96 m;
- live venues, major terminals, large gardens, major cultural facilities.

A station can combine multiple hex modules but must preserve the 60° port logic.

### 2.3 Port standard

Every major station may expose up to six horizontal ports:

- P0 north;
- P1 north-east;
- P2 south-east;
- P3 south;
- P4 south-west;
- P5 north-west.

Standard connector hierarchy:

- WALK-06: 6 m clear pedestrian connector;
- PUBLIC-12: 12 m public concourse;
- LOGISTICS-18: 18 m service / freight connector;
- MEDIA: logical connection only, for linked online spaces that do not need a physical bridge.

A port must declare: type, state, destination, visual language, loading rule, and access rule.

### 2.4 Expansion principle

Never remodel the whole Spaceport merely to add one destination.

New growth follows:

Station → free port → route record → new Station.

This is both the worldbuilding rule and the software streaming rule.

---

## 3. First Canonical Stations

### A00 — Orbital Arrival Terminal
Role: arrival, orientation, route selection, current events, public concierge, XR entry.

Spatial tone:
- luminous;
- quiet;
- large span;
- airport lounge + museum lobby + scientific facility;
- no fake spaceship cockpit aesthetic.

### A01 — MOVA / Museum of VIRTURA Art
Role: exhibitions, viewing rooms, artist archives, digital art research, screenings.

### A02 — Balloon Live Space
Role: live AV, DJ / performance rooms, broadcast decks, audience rings, rehearsal, replay archive.

Balloon is the highest-energy public station.

### A03 — T-House / Forest Pavilion
Role: tea, slow experience, rest, breathing, sound, light, water, high-fidelity interior.

T-House is the low-energy counterpoint to Balloon.

### A04 — Senia Gardens
Role: digital garden, greenhouse, scan habitat, Gaussian-splat natural material, resort landscape.

### A05 — Perceptual Engine Lab
Role: spatial media research, SceneForge prototypes, WebXR, sensing, live visual, point cloud, Gaussian workflows, audiovisual systems.

### A06 — Digital Memory Archive
Role: projects, people, events, versions, recordings, scenes, scans, documents, source-of-truth objects.

The archive should feel like a library + repository + cold storage facility, not a fantasy database room.

### A07 — Orbital Forum
Role: meetings, presentations, private salons, residency lounge, project rooms, client visits.

---

## 4. Spaceport Fabrication Infrastructure — In-World Manufacturing System

The Spaceport needs a believable construction economy. It does not magically generate finished architecture.

### F00 — Fabrication Ring
Primary modular construction yard.

Functions:
- structural module fabrication;
- facade panel assembly;
- connector production;
- station refurbishment;
- robotic assembly;
- temporary dry-dock.

Visual language:
- open truss;
- gantry;
- rails;
- modular jigs;
- large clear working zones;
- minimal military language.

### F01 — Material Bank
Stores canonical material families rather than arbitrary textures.

Families:
- structural metal;
- translucent membrane;
- ceramic/composite panel;
- timber / biogenic surfaces;
- glass;
- water / atmosphere systems;
- scanned natural matter.

In production terms, Material Bank maps directly to the shared digital material library.

### F02 — Assembly Dry Dock
A vacuum / controlled-environment bay for assembling H48/H96 modules before route deployment.

### F03 — Robotics & Maintenance Bay
Robotic movers, inspection drones, facade maintenance, replacement components.

### F04 — Environmental Systems Plant
Supports believable permanent occupancy:

- power distribution;
- thermal rejection;
- water loop;
- air loop;
- waste recovery;
- emergency life support;
- lighting grid;
- network / data backbone.

These systems should exist in the world even if they are not all simulated.

### F05 — Logistics Spine
Service-only circulation between fabrication, storage, archive, venue back-of-house, and gardens.

Public visitor routes should not expose all logistics by default.

### F06 — Scan & Capture Lab
The bridge between physical reality and the digital campus:

- photogrammetry;
- LiDAR;
- Gaussian splat;
- material capture;
- spatial audio capture;
- object scanning.

### F07 — Simulation / Commissioning Room
Before a Station is opened, it is validated here:

- scale;
- navigation;
- lighting;
- XR comfort;
- multiplayer;
- accessibility;
- performance;
- fallback behavior.

This maps directly to the real production quality gate.

---

## 5. Real Production Infrastructure

The real-world production system mirrors the fictional fabrication system.

| In-world | Real production equivalent |
|---|---|
| Fabrication Ring | Blender + asset build pipeline |
| Material Bank | shared material / texture registry |
| Dry Dock | staging branch + preview build |
| Robotics Bay | automation / scripts / agents |
| Environmental Plant | runtime platform services |
| Logistics Spine | asset routing + CDN/storage |
| Scan Lab | photogrammetry / LiDAR / Gaussian pipeline |
| Commissioning Room | CI + visual QA + device test |

This parallel is deliberate: fictional infrastructure should explain the actual production workflow.

---

## 6. Canonical Technology Stack — 2026

### 6.1 Primary runtime

Keep SceneForge as the runtime foundation.

Current canonical stack:

- TypeScript;
- React;
- React Three Fiber;
- Three.js;
- WebGL2 as the reliable baseline;
- WebXR;
- Vite;
- Zod for manifest validation;
- Biome;
- Vitest;
- GitHub Actions / Pages.

WebGPU is progressive enhancement only. It must not break WebGL2/WebXR fallback.

### 6.2 Needle Engine role

Needle is an adapter / experimental capability layer, not the single source of truth.

Use Needle where it materially reduces work:

- WebXR room prototypes;
- multiplayer prototypes;
- browser screen / camera streaming;
- Gaussian splat experiments;
- Unity-assisted scene authoring when useful.

A Station must not become impossible to run outside Needle unless explicitly classified as a Needle-only experiment.

### 6.3 XR

Web:
- desktop / mobile browser;
- graceful 2D and 3D fallback.

Vision Pro / Quest:
- WebXR immersive VR when available;
- platform capability detection before presenting XR actions;
- no assumption that browser passthrough AR is available.

### 6.4 VRChat

VRChat is a derivative runtime, not the master runtime.

Shared:
- geometry;
- textures;
- source lighting;
- audio assets;
- scale;
- naming;
- station coordinates;
- interaction specification.

Separate:
- Unity project;
- VRChat SDK;
- runtime scripts;
- platform-specific interaction logic.

### 6.5 Live media

Prototype:
- local video;
- browser screen capture;
- WebRTC.

Later:
- HLS for one-to-many viewing;
- WebRTC SFU for small interactive rooms;
- self-hostable LiveKit-compatible/SFU approach when justified;
- coturn-class TURN service where NAT traversal requires it.

Do not make paid real-time infrastructure a Phase-0 dependency.

### 6.6 Gaussian / scan media

Gaussian splats are a special material class, not the default world representation.

Use for:
- vegetation;
- rocks;
- heritage / captured interiors;
- irregular natural surfaces;
- memory gardens;
- real-world fragments.

Keep architectural collision and navigation on conventional mesh.

---

## 7. Asset Standard

### 7.1 Master asset

Preferred interchange:
- .blend source;
- GLB/glTF runtime;
- KTX2/Basis-compressed textures;
- mesh compression where validated;
- USDZ/export derivatives only where needed.

### 7.2 Naming

```
SP_[station]_[category]_[object]_[variant]_[lod]
```

Examples:

```
SP_A00_STR_column_A_LOD0
SP_A02_STAGE_ring_main_LOD1
SP_A04_NAT_tree_scan_014
```

No filenames such as:
- final_final2;
- untitled;
- cube.001;
- copy-new.

### 7.3 Transform rules

Before export:
- intentional origin;
- applied scale;
- no negative scale in runtime assets;
- valid normals;
- no hidden production junk;
- pivots placed for interaction or assembly purpose.

### 7.4 LOD

Every major reusable asset should support:

- LOD0 hero;
- LOD1 normal;
- LOD2 distance;
- optional proxy / impostor.

Station-level streaming is more important than extreme per-object LOD complexity.

### 7.5 Textures

Default:
- 1024–2048;
- 4096 only for justified hero assets;
- KTX2 for runtime;
- avoid many unique near-identical texture sets;
- use trim sheets / atlases / reusable materials where quality allows.

### 7.6 Lighting

Preferred order:
1. physically plausible authored lighting;
2. baked/static lighting for expensive environment illumination;
3. a small number of dynamic lights;
4. local hero lights where interaction needs them.

Lighting is a designed asset and receives versioning.

---

## 8. Runtime Performance Standard

Performance is a quality feature.

### First-load target

2D shell should become usable before heavy 3D.

Targets:
- application shell: as small as practical, preferred < 3–5 MB transferred;
- initial station preview: preferred < 20 MB;
- full standard station: preferred < 30–40 MB transferred before optional detail;
- hero / exhibition exceptions must stream progressively.

### Scene budget guidance

Desktop:
- target visible triangles: ~1–1.5M or less in normal public views;
- draw calls preferred < 300;
- avoid full-resolution assets outside camera interest.

XR:
- use more aggressive quality tiers;
- preferred visible triangles: ~400k–800k depending on device and material complexity;
- draw calls preferred < 150;
- avoid heavy full-screen post processing;
- dynamic shadow count kept minimal.

These are quality targets, not excuses to reduce spatial design. Profiling decides final limits.

### Frame-rate philosophy

- maintain device-native comfortable interaction;
- no Station ships without on-device profiling;
- XR quality tier may reduce detail before reducing interaction stability.

---

## 9. Station Package Standard

Each Station should converge toward:

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

Minimum station manifest:

```yaml
id: a02-balloon
name: Balloon Live Space
class: H96
status: growing
runtime: sceneforge

capabilities:
  web3d: true
  webxr: true
  multiplayer: experimental
  live_media: true
  gaussian: false

ports:
  P0:
    type: PUBLIC-12
    destination: a00-arrival
  P3:
    type: MEDIA
    destination: archive

quality:
  web: target
  xr: target
  vrchat: derivative
```

---

## 10. User Experience Standard

A visitor must never be forced to understand the entire world before doing something useful.

Default information architecture:

```
SPACEPORT

NOW
VISIT
LIVE
EXHIBITIONS
SPACES
RESEARCH

[ENTER SPACE]
```

Modes:

- Browse — page-first;
- Walk — 3D;
- XR — immersive;
- Join — social/live room when available.

### Deep linking

Every Station and significant room should have a stable URL.

A visitor can open:
- the Spaceport;
- one Station;
- one exhibition;
- one live room;
- one meeting;
without traversing a mandatory 3D lobby.

### Fast travel

Fast travel is canonical and should be presented as the VIRTURA Routes / virtual airline layer.

Travel is a navigation metaphor and loading boundary.

---

## 11. Route Standard

Canonical route object:

```json
{
  "from": "a00-arrival",
  "to": "a02-balloon",
  "mode": "public",
  "duration_class": "short",
  "transition": "orbital-transfer",
  "preload": ["shell", "audio-preview"]
}
```

Future external worlds can join the route network without being hosted by the same runtime.

---

## 12. AI / Harness Production Protocol

Do not let an agent redesign the whole world in one pass.

Only four operational modes are canonical.

### /PLAN

Reads:
- World Bible;
- station registry;
- masterplan;
- asset rules;
- existing source-of-truth.

Outputs a Build Card.

### /BUILD

May:
- edit code;
- create Blender assets;
- create materials;
- create scene manifests;
- create station content.

May not:
- silently rewrite canonical world rules;
- create a new incompatible coordinate system;
- bypass naming and performance standards.

### /REVIEW

Required standard cameras:

- CAM_01 exterior;
- CAM_02 arrival;
- CAM_03 interior;
- CAM_04 hero;
- CAM_05 human-scale;
- CAM_06 XR / headset-oriented.

Review:
- scale;
- composition;
- lighting;
- materials;
- navigation;
- clipping;
- accessibility;
- frame-time;
- loading;
- visual continuity.

### /PUBLISH

Only after:
- manifest validation;
- lint/typecheck/test/build;
- visual QA;
- device capability check;
- human approval for world-changing decisions.

Then:
- merge;
- deploy;
- update station registry;
- update archive;
- update changelog.

---

## 13. Build Card Standard

Every new building begins as text.

```
BUILD CARD
ID:
NAME:
ROLE:
USER:
CLASS:
PORTS:
NEIGHBORS:
PRIMARY EXPERIENCE:
SPATIAL SEQUENCE:
ARCHITECTURAL LANGUAGE:
MATERIAL FAMILY:
LIGHTING:
SOUND:
LIVE FEATURES:
XR FEATURES:
SCAN / GAUSSIAN:
PERFORMANCE CLASS:
REQUIRED ASSETS:
FORBIDDEN CLICHES:
DELIVERABLE:
QUALITY GATE:
```

No concept art is commissioned/generated before the Build Card is accepted.

---

## 14. Visual Language

Amplify:

- aerospace infrastructure without military styling;
- contemporary museum architecture;
- resort and wellness architecture;
- scientific instrument precision;
- airport / ferry / cruise terminal circulation;
- lightweight structural systems;
- natural light;
- calibrated artificial light;
- large quiet surfaces;
- real furniture scale;
- gardens and water;
- captured reality embedded in precise artificial structures.

Forbid by default:

- generic cyberpunk;
- permanent neon;
- random greeble;
- random pipe clutter;
- spaceship corridor cliché;
- blue hologram everywhere;
- military sci-fi;
- default post-apocalypse;
- concept-art architecture that cannot be modeled coherently.

The future should feel usable.

---

## 15. Cost / Service Rule

Phase 0–1 must remain buildable with low-cost or free infrastructure.

Default:
- GitHub repository;
- GitHub Pages / existing static hosting;
- local Blender;
- open web stack;
- self-contained static assets where practical.

Introduce recurring infrastructure cost only when a feature has a real user:

- object storage / CDN for large media;
- TURN server;
- multiplayer/SFU;
- live video distribution;
- analytics;
- authentication;
- database.

Every paid service must have:
- purpose;
- estimated recurring cost class;
- exit strategy;
- self-hosting or migration note where reasonable.

No paid platform becomes the canonical source of truth.

---

## 16. Archive Relationship With VIRTURA2114

VIRTURA2114 becomes:

```
VIRTURA SPACEPORT
└── ARCHIVE
    └── HISTORICAL SIMULATIONS
        └── VIRTURA 2114
            ├── Collapse Era
            ├── Old City
            ├── faction material
            └── legacy visitor narratives
```

Keep:
- old city;
- collapse era;
- historical airline material;
- old visitor guides;
- factions when useful as historical fiction;
- earlier architectural proposals.

Do not use those as default current public truth.

---

## 17. Phase 1 Construction Order

Do not build eight high-fidelity stations at once.

### 1. Arrival Terminal
Proves:
- masterplan;
- routing;
- information layer;
- loading;
- camera;
- WebXR entry.

### 2. Balloon Live Space
Proves:
- live media;
- performance;
- high-energy spatial logic;
- social room prototype.

### 3. T-House / Forest Pavilion
Proves:
- high-fidelity interior;
- lighting;
- sound;
- slow interaction;
- XR comfort.

After these three pass quality gates, expand to:
MOVA → Senia → Lab → Archive → Forum.

---

## 18. v1.0 Acceptance Criteria

World Bible v1.0 is considered active when:

- the public present is no longer defined by the Collapse Era;
- the hex station grammar is used by new planning;
- SceneForge remains runtime foundation;
- station data and 3D share source-of-truth;
- Arrival / Balloon / T-House have Build Cards;
- a lightweight browser masterplan demo exists;
- a route can target an independently loadable Station;
- new concept art follows a Build Card rather than free-form prompting;
- VIRTURA2114 is explicitly treated as legacy archive / historical simulation.

---

## 19. One-Sentence Canon

**VIRTURA Spaceport is a continuously expanding online spatial-cultural campus in which independently usable digital buildings are connected by a shared orbital infrastructure, route system, archive, and production standard across web and XR.**
