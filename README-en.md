# VIRTURA-SpacePort

> Current English overview, updated 2026-05-20. The Chinese README is the fuller maintained version.
> 中文版本：[README.md](README.md)

VIRTURA-SpacePort is the public frontstage of VIRTURA.

It is a digital front hall for people who need orientation: first-time visitors can understand where to go next, while returning collaborators can find project archives, the knowledge network, stations, activities, and public source materials.

## Public Role

This repository owns:

- stations and station-level public pages
- knowledge-network entry points
- deep project archive and source-of-truth docs
- public trackers and frontstage data
- the route from web frontstage toward future 3D frontstage

The public graph seed lives in [docs/public-graph](./docs/public-graph/README.md). It defines canonical object ids and cross-repo links so works, people, stations, and articles do not get recreated from zero in every repository.

It does not own the main team identity or publication layer. Use [VIRTURA-Collective](https://github.com/ewanqian/VIRTURA-Collective) for the team entry and [VIRTURA-Newsroom](https://github.com/ewanqian/VIRTURA-Newsroom) for essays, reviews, recaps, and media materials.

## Start Here

| If you need | Go to | You will find |
|---|---|---|
| stations and public programs | [stations](./stations/README.md) | MOVA, Baloon Live Space, Research Laboratory, Space Salon, Skill Forge, and other station routes |
| learning paths and method structure | [knowledge-network](./knowledge-network/README.md) | learning paths, theory, production pipeline, spatial computing, live performance, and web publishing |
| detailed work archive | [organization/works](./organization/works/README.md) | project versions, exhibition records, source notes, and archive entries |
| frontstage data model | [docs/spaceport-frontstage-data-structure.md](./docs/spaceport-frontstage-data-structure.md) | how station manifests and public UI data connect |
| web and 3D roadmap | [docs/spaceport-web-3d-preparation-roadmap.md](./docs/spaceport-web-3d-preparation-roadmap.md) | how the 2D frontstage prepares the future 3D frontstage |

## Current Direction

SpacePort is no longer only a static archive. It is becoming a public frontstage made of archives, knowledge networks, stations, and skill-based workflows.

Stations are shifting from content sections into working stations. They hold concrete project behavior, research tasks, session records, exhibition routes, public programs, and reusable workflows.

The most important growth areas now are:

- **MOVA / Museum of Virtual Arts**: digital exhibition curation, viewing rooms, feedback, and post-exhibition records.
- **Research Laboratory**: research questions, experiments, route comparison, and method notes.
- **Baloon Live Space**: live practice, cue/state structure, session logs, and performance review.
- **Digital Library / Digital Stage**: archive/frontstage structure and public explanation.

## Related Repositories

- [portfolio](https://github.com/ewanqian/portfolio): Ewan Qian personal entry.
- [VIRTURA-Collective](https://github.com/ewanqian/VIRTURA-Collective): team entry.
- [VIRTURA-Newsroom](https://github.com/ewanqian/VIRTURA-Newsroom): publication outlet.
- [SceneForge](https://github.com/ewanqian/SceneForge): digital-stage tool and viewer experiment line.

---

## Legacy Notes

The following older English notes are kept for continuity. Some wording reflects the March 2026 system framing and should not override the current Chinese README or the current overview above.

> **VIRTURA SpacePort** - Core immersive digital space under the VIRTURA SpacePort system
> **Ecological Role**: Core content carrier of the ecosystem
> **Core Positioning**: Core immersive digital space under the VIRTURA SpacePort system, open-source digital worldview setting collection, VRchat maps, immersive experience platform, carrying all performances, exhibitions, and narrative experiences
> **Status**: Under preparation

---

## Version Update Log

### v2.0.1 (2026-03-01)
- Added Teahouse Forest Pavilion space station (VIRTURA SPACE PORT | 林中茶屋)
- Refactored Knowledge Network into 8 knowledge domain categories
- Added Web Publishing category
- Added Role System category
- Emphasized knowledge interconnection (interdisciplinary)
- Added困境预设 mechanism
- Added特色内容 markers

### v1.0.0 (2026-02-24)
- Initial version release
- Complete four-stage lifecycle knowledge system
- Unity lightweight operation module
- Topic selection guidance module
- Bilingual support
- Added stations/ directory (Seleiumeaves, MOVA Art Museum)
- Added tools/ directory
- Added organization/ directory

---

## 📚 Knowledge Network

Knowledge Network is the core learning and practice system of VIRTURA-SpacePort, providing a complete path from beginner to proficient for learners and creators in the immersive experience field.

With "Immersive Experience" as the core, we build a complete knowledge chain of "Enlightenment → Advanced Implementation → Operation & Maintenance → Sustainable Development"; taking undergraduate courses of world-class universities as the benchmark, we balance theoretical depth and practical implementation, focus on lowering the threshold of Unity operation, integrate lightweight operation skills and convenient plug-in usage.

[Enter Knowledge Network →](knowledge-network/README-en.md)

---

## What is VIRTURA-SpacePort?

VIRTURA-SpacePort is the **main port** and **container** of the VIRTURA SpacePort system, and the incubation center of the entire system:

- **SpacePort** - Main port, container, incubation status
- **SpaceStation** - Specific units (MOVA Art Museum, Digital Tea House, Performance Space, etc.)
- **Virtual-Real Symbiosis** - Treat digital space as real space

No space station can be completely independent yet, all are incubating in the SpacePort!

---

## VIRTURA SpacePort System Architecture

```
VIRTURA SpacePort System
│
├── 🚀 SpacePort Main Port (Here!
│   └── VIRTURA-SpacePort - Main port, container, incubation
│       ├── 📚 knowledge-network/ (Knowledge Network)
│       ├── 🛸 stations/ (Space Stations)
│       ├── 🔧 tools/ (Tools Layer)
│       └── 🏗️ organization/ (Organization Layer)
│
├── 📚 Knowledge Network
│   ├── 01-discover (Discover Phase)
│   ├── 02-build (Build Phase)
│   ├── 03-operate (Operate Phase)
│   └── 04-sustain (Sustain Phase)
│
├── 🛸 Space Stations (Specific Units)
│   ├── MOVA Art Museum (Space Station 1) - Museum of Virtura Art
│   ├── Seleiumeaves (Space Station 2)
│   ├── Performance Space (Space Station 3) - Under planning
│   └── ... More space stations
│
├── 🔧 Tools Layer
│   ├── SceneForge - Scene Forging (Building space stations)
│   ├── LiveForge - Live Forging
│   ├── Unity XR Plugin - Quick Demo creation
│   ├── EHNA - Immersive Narrative Specification Framework
│   └── ... More tools
│
└── 🏗️ Organization Layer
    ├── VIRTURA-Team - Decentralized organization,新人 welcome, team rules, Agent logs
    └── VIRTURA-Newsroom - VIRTURA Newsroom
```

---

## Core Repository List

### SpacePort Layer
| Repository | Status | Purpose |
|------------|--------|---------|
| **VIRTURA-SpacePort** (Here! | ✅ | SpacePort main port, container, incubation |
| **VIRTURA2114** | ✅ | Virtual space station in digital ruins - Text-based worldview setting collection, can be used for text games or other immersive experiences |

### Organization Layer
| Repository | Status | Purpose |
|------------|--------|---------|
| **VIRTURA-Team** | ✅ | Decentralized organization,新人 welcome, team rules, Agent logs |
| **VIRTURA-Newsroom** | ✅ | VIRTURA Newsroom, research articles, project retrospectives |

### Space Station Layer (Specific Units)
| Repository | Status | Purpose |
|------------|--------|---------|
| **MOVA Art Museum** | ✅ | Museum of Virtura Art - Digital Art Museum (Space Station 1) |
| **Seleiumeaves** | ✅ | Immersive digital space project (Space Station 2) |
| **Senia-Digital-Resort** | Under planning | Spatial perception experience experiment based on Minecraft |

### Tools Layer
| Repository | Status | Purpose |
|------------|--------|---------|
| **SceneForge** | ✅ | Scene Forging (Building space stations), immersive web publishing framework |
| **LiveForge** | ✅ | Live Forging, full-link performance workflow |
| **EHNA** | ✅ | Immersive Narrative Specification Framework |
| **cognitive-forge** | ✅ | Cognitive Forge, AI-assisted cognitive enhancement |
| **HyperFlow-SHM** | ✅ | HyperFlow Transmission Toolkit, ultra-low latency multimedia streaming |
| **Fortune-Gate** | ✅ | Fortune Gate (Commercial Interactive Quick Publishing Toolkit) |
| **RepoForge** | ✅ | Repo Forge (Automated Operation and Maintenance Tool) |

---

## Core Principles

1. **Virtual-Real Symbiosis Principle** - Treat digital space as real space
2. **Decentralization Principle** - Each space station is relatively independent, but incubates in the SpacePort
3. **Engineering Thinking Principle** - Systematic, reusable, iterable
4. **Long-termism Principle** - Build long-term industry barriers
5. **Minimalism Principle** - Grasp the main contradiction, don't be complicated
6. **Asset Precipitation Principle** - Create once, reuse in multiple scenarios

---

## SpacePort vs SpaceStation Concept Clarification

- **SpacePort** - Main port, container, incubation status
- **SpaceStation** - Specific units (MOVA, Digital Tea House, etc.)

No space station can be completely independent yet, all are incubating in the SpacePort!

---

## Contact

- **Main Port Repository**: VIRTURA-SpacePort (Here!
- **Knowledge Network**: [knowledge-network/](knowledge-network/README-en.md)
- **Team Repository**: VIRTURA-Team
- **Newsroom**: VIRTURA-Newsroom
- **System Overview**: See `docs/VIRTURA_SYSTEM_OVERVIEW.md` in Forge repository

---

*VIRTURA-SpacePort - VIRTURA SpacePort - Virtual-Real Symbiosis, Decentralization, Long-termism!*

---

## Open Source License

MIT
