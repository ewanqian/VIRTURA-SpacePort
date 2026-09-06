# VIRTURA SPACEPORT — ARCHITECTURE BIBLE v1.0

> Status: CANONICAL DESIGN STANDARD  
> Date: 2026-09-06  
> Scope: spatial planning, scale, ports, architectural language, materials, lighting, interaction, QA

## 0. Purpose

This document defines how VIRTURA Spaceport architecture is planned, built, reviewed, and expanded.

It is not a style guide for making all Stations look the same.

It defines compatibility and quality.

A Station may have a highly distinct identity while remaining part of one spatial system.

---

## 1. Coordinate Standard

Canonical runtime coordinates:

- 1 unit = 1 meter;
- +Y = up;
- +X = east;
- -Z = north;
- station origin = center of local planning datum;
- primary docking rotations = 60° increments.

Blender may remain Z-up during authoring, but export must resolve correctly to runtime coordinates.

No Station may invent an incompatible coordinate standard.

---

## 2. Station Envelopes

### H24
- nominal planning radius: 24 m;
- compact public or technical facility.

### H48
- nominal planning radius: 48 m;
- default standard Station.

### H96
- nominal planning radius: 96 m;
- major civic or infrastructure Station.

The envelope controls:
- adjacency;
- docking;
- loading;
- service planning;
- world topology.

It does not dictate the building silhouette.

---

## 3. Port Standard

Every major Station may expose up to six horizontal public or service ports:

- P0 north;
- P1 north-east;
- P2 south-east;
- P3 south;
- P4 south-west;
- P5 north-west.

Connector types:

### WALK-06
6 m clear pedestrian connector.

### PUBLIC-12
12 m public concourse.

### LOGISTICS-18
18 m service or freight connector.

### MEDIA
Logical or data route without required physical bridge.

Every port must declare:
- type;
- destination;
- access;
- state;
- transition;
- loading behavior;
- architectural treatment.

---

## 4. Public / Service Separation

Every substantial Station should distinguish:

### Frontstage
Visitor-facing:
- arrival;
- exhibition;
- performance;
- meeting;
- landscape;
- public route.

### Backstage
Operational:
- storage;
- staff circulation;
- technical access;
- maintenance;
- equipment;
- loading;
- emergency systems.

A believable public building requires both.

Do not design only what the camera sees.

---

## 5. Human Scale

Critical architecture must be validated at human eye height.

Reference:
- standing eye height: approximately 1.65–1.75 m;
- seated eye height: approximately 1.15–1.3 m.

Doors, rails, stairs, seating, counters, screens, circulation, and view framing must be plausible.

Large scale is valuable only when it remains readable from human scale.

---

## 6. Spatial Sequence

Every Station must define a spatial sequence before detailed modeling.

Minimum sequence:

```
THRESHOLD
→ ORIENTATION
→ PRIMARY EXPERIENCE
→ SECONDARY EXPERIENCE
→ REST / VIEW
→ EXIT / ROUTE
```

A Station should not be designed as a beautiful object with no clear experience path.

---

## 7. Wayfinding

Wayfinding should be architectural before it becomes graphical.

Use:
- light;
- material;
- proportion;
- visible destination;
- floor direction;
- acoustic difference;
- landscape;
- thresholds;
- portal depth.

UI labels should reinforce spatial information, not replace it.

A visitor should often know where to go before reading text.

---

## 8. Architectural Character

Amplify:
- contemporary public architecture;
- aerospace precision;
- museum clarity;
- resort calm;
- scientific-campus legibility;
- transport infrastructure;
- structural lightness;
- clear spans;
- large negative space;
- controlled natural light;
- credible construction systems.

Avoid:
- generic spaceship interior;
- military language;
- random greeble;
- decorative pipes;
- empty white luxury showroom;
- cyberpunk clutter;
- concept-art structures with no build logic.

---

## 9. Material System

Canonical material families:

- structural alloy;
- dark anodized metal;
- ceramic / mineral panel;
- glass;
- diffused translucent panel;
- timber;
- stone;
- plaster / mineral surface;
- acoustic fabric;
- membrane;
- water;
- vegetation;
- captured natural surface.

Do not create new unique materials when a shared family already serves the function.

Material variation should arise from:
- finish;
- roughness;
- scale;
- age;
- context;
- lighting.

Not from arbitrary texture proliferation.

---

## 10. Captured Reality

Gaussian splat, photogrammetry, and scans are treated as special spatial material classes.

Best uses:
- vegetation;
- rocks;
- irregular landscape;
- heritage fragments;
- memory spaces;
- real interiors;
- captured natural environments.

Do not use Gaussian as the sole basis for navigation or collision.

Conventional mesh must provide:
- collision;
- floor;
- navigation;
- interaction;
- fallback.

---

## 11. Lighting Standard

Lighting is an authored system and versioned asset.

Priority:

1. physically legible source logic;
2. architectural ambient / skylight logic;
3. baked or precomputed environment where useful;
4. minimal dynamic lights;
5. local interaction lighting only where needed.

Lighting must not depend on bloom.

A room should still work in a clean non-postprocessed render.

---

## 12. Required Lighting Conditions

Major Stations should define at least one canonical condition.

High-priority benchmark Stations may define several.

Example T-House:
- morning;
- overcast / mist;
- dusk / warm interior.

Lighting variants must preserve:
- navigation;
- scale;
- material readability;
- safety;
- visual identity.

---

## 13. Sound

Spatial audio should be treated as architectural material.

Possible layers:
- mechanical bed;
- air;
- structure;
- water;
- landscape;
- distant activity;
- local object sounds;
- route chimes;
- live media bleed.

Avoid constant explanatory announcements unless programmatically necessary.

---

## 14. Camera Standard

Every Station under review must support fixed QA cameras:

- CAM_01_EXTERIOR
- CAM_02_ARRIVAL
- CAM_03_INTERIOR
- CAM_04_HERO
- CAM_05_HUMAN_SCALE
- CAM_06_XR

These cameras provide repeatable review over time.

---

## 15. Interaction Standard

Interaction must support the architecture rather than cover it.

Default priorities:
- select destination;
- enter;
- sit / focus;
- inspect;
- watch;
- listen;
- join;
- return.

Avoid turning every surface into a button.

Avoid floating interface panels as the default solution.

---

## 16. XR Comfort

XR Stations must prioritize:
- stable horizon;
- real scale;
- no forced camera animation;
- no artificial head bob;
- limited acceleration;
- teleport or route-based movement where appropriate;
- seated and standing use where relevant.

A Station that looks good on desktop but becomes uncomfortable in XR has not passed architectural QA.

---

## 17. Asset Naming

Preferred asset pattern:

```
SP_[station]_[category]_[object]_[variant]_[lod]
```

Examples:

```
SP_A00_STR_column_A_LOD0
SP_A02_STAGE_ring_main_LOD1
SP_A04_NAT_tree_scan_014
```

Forbidden production names:
- final_final2;
- cube.001;
- copy-new;
- untitled;
- temp2.

---

## 18. Transform Rules

Before export:
- intentional origin;
- applied scale;
- valid normals;
- no negative runtime scale;
- no hidden authoring debris;
- correct pivot;
- correct collision assignment.

---

## 19. LOD

Reusable assets should support:
- LOD0 hero;
- LOD1 normal;
- LOD2 distance;
- optional proxy / impostor.

Station-level streaming is more important than excessive per-object LOD complexity.

---

## 20. Texture Standard

Default:
- 1024–2048 px;
- 4096 only where visually justified;
- runtime compression preferred;
- reuse atlases, trim sheets, and shared materials where quality allows.

Avoid many near-identical unique texture sets.

---

## 21. Architecture Review Gate

Before high-fidelity production, review:

### Function
Does the building serve a real use?

### Sequence
Does the visitor know how to enter, use, and leave?

### Scale
Does it remain believable at human height?

### Structure
Can the architecture plausibly be constructed?

### Material
Are materials coherent and correctly scaled?

### Light
Is lighting source logic visible?

### Wayfinding
Can visitors orient themselves without reading everything?

### Backstage
Does the building acknowledge real operational needs?

### XR
Does the spatial experience remain comfortable?

### Performance
Can the spatial intent survive runtime constraints?

---

## 22. First Architecture Priorities

### A00 Arrival
Must prove:
- orientation;
- public routing;
- destination visibility;
- public/service separation;
- web-to-space transition.

### A02 Balloon
Must prove:
- performance scale;
- live-media surfaces;
- audience / artist separation;
- transformable atmosphere;
- strong contrast with A00.

### A03 T-House
Must prove:
- material fidelity;
- light;
- sound;
- seated experience;
- slow movement;
- captured nature;
- XR comfort.

These three Stations define the first architectural quality bar.
