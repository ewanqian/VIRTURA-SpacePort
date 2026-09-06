# BUILD CARD — A00 Orbital Arrival Terminal v0.1

## Identity

- ID: A00
- Name: Orbital Arrival Terminal / 轨道到达港
- Role: public arrival, orientation, route selection, current-program gateway
- Class: H96 / Major
- Runtime: SceneForge
- Status: Foundation
- Priority: P0

## Primary user

First-time visitor who has opened a VIRTURA link without prior knowledge of the project.

Secondary users:
- returning audience;
- artist;
- collaborator / client;
- researcher;
- XR visitor.

## Main test question

Can a visitor enter VIRTURA through a high-quality spatial interface without being forced to understand the entire worldbuilding system first?

## Geometry

Nominal station module:
- H96;
- 96 m nominal planning radius;
- central public hall occupies approximately 48–60 m diameter;
- primary public clear height: 9–18 m depending on zone;
- all critical doors / gates use credible human scale.

The first prototype does **not** model the entire H96 exterior at final fidelity. It validates a representative arrival hall and six route ports.

## Ports

- P0 — MOVA / PUBLIC-12
- P1 — Balloon / PUBLIC-12
- P2 — Senia / PUBLIC-12
- P3 — T-House / PUBLIC-12
- P4 — Research Lab / PUBLIC-12
- P5 — Archive / Forum route cluster / PUBLIC-12

Service access is separated from public ports.

## Program

### Z00 / Arrival Threshold
Purpose:
- transition from web shell / loading state to spatial presence;
- establish scale and direction.

### Z01 / Orientation Hall
Purpose:
- spatial identity;
- current Spaceport state;
- visible destination logic.

### Z02 / Route Table
Purpose:
- select destination without opening a conventional menu;
- mirror the 2D frontstage navigation.

### Z03 / Current Program Wall
Purpose:
- live events;
- exhibitions;
- meetings;
- research;
- current open Stations.

### Z04 / Public Ports
Purpose:
- deep link into independently loadable Stations.

### Z05 / XR Gate
Purpose:
- capability detection;
- enter immersive mode only when supported.

### Z06 / Quiet Edge
Purpose:
- sit, observe, wait, or use the Spaceport as a meeting threshold.

## Spatial sequence

1. Web shell becomes usable first.
2. User selects Enter Space.
3. A lightweight A00 shell loads.
4. Camera enters at standing human scale.
5. Route Table and at least three visible destinations establish orientation.
6. User selects one destination.
7. Destination begins preloading.
8. Transition / virtual route hides the loading boundary.
9. Target Station opens as a new independently addressable route.

## Architectural language

Amplify:
- large clear span;
- precise structure;
- pale metal;
- warm white surface;
- controlled glass;
- quiet daylight;
- one or two material accents;
- readable architectural wayfinding;
- physical-looking route objects rather than floating HUD.

Avoid:
- spaceship bridge;
- command center;
- airport cliché copied literally;
- luxury mall;
- excessive white plastic;
- uncontrolled glossy reflections.

## Material family

Primary:
- satin light structural alloy;
- pale mineral / ceramic floor;
- clear + lightly diffused glass;
- warm neutral acoustic surfaces.

Accent:
- dark anodized metal;
- restrained station identity color only where needed.

## Lighting

Day:
- broad high-angle ambient light;
- skylight logic;
- soft architectural bounce.

Night:
- low glare;
- indirect path lighting;
- route gates slightly brighter than waiting areas.

No permanent colored neon.

## Sound

- extremely low mechanical bed;
- sparse route chime;
- distant air / structure tone;
- current live Station may leak a very controlled audio preview.

No constant airport announcement loop.

## Interaction

Required v0.1:
- orbit / inspect masterplan;
- enter arrival hall;
- select destination;
- focus a route gate;
- return to overview;
- 2D fallback navigation.

Later:
- avatar presence;
- meeting join;
- live program;
- XR portal;
- concierge.

## Web / XR

Web:
- full functionality.

XR:
- first comfort target;
- no forced locomotion;
- teleport / route selection preferred;
- maintain stable horizon;
- avoid aggressive camera animation.

## Performance class

P0 / Core Infrastructure.

Initial prototype:
- procedural geometry;
- negligible asset download;
- no large textures;
- no baked heavy environment.

Later target:
- shell before 3D;
- station preview < 20 MB preferred;
- progressive high-fidelity assets.

## Required assets for concept-art phase

1. masterplan aerial;
2. A00 exterior hero;
3. arrival threshold;
4. orientation hall;
5. route table;
6. public port detail;
7. human-scale seating / waiting edge;
8. night lighting variant.

## Forbidden clichés

- neon blue hologram room;
- glowing transparent UI everywhere;
- military checkpoint;
- random cables / pipes;
- spacecraft cockpit;
- chrome-only Apple-store imitation;
- huge empty white room without public behavior.

## v0.1 Quality Gate

Pass if:
- route logic is understandable without explanatory text;
- a visitor sees at least three meaningful destinations from the hall;
- scale reads as believable;
- 2D route list and 3D portals share the same station names;
- mobile does not fail;
- XR can be added without rebuilding the information architecture;
- no paid backend is required.
