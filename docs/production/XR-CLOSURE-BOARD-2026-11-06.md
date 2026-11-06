# XR Project Closure Board / 2026-11-06

Owner: VIRTURA / Experience Production. Purpose: **finish tested experiences**, not accumulate proposals. This public board intentionally omits internal production sources and any unapproved client assets.

## Current projects

| Priority | Project | Observed baseline | Next verifiable outcome | Evidence |
|---|---|---|---|---|
| P0 | Greenhouse in Transit / MG-17 | Lore archive and MG17 intake; XR engine merged and allowlisted in public Pages bundle (PR #2, #4) | Desktop browser QA; six objects and four cues verified, then Quest 3 | [Implementation PR](https://github.com/ewanqian/Greenhouse-in-Transit/pull/2), [hardware QA](https://github.com/ewanqian/Greenhouse-in-Transit/issues/3) |
| P0 | CNG commercial-safe archive | Public archive: 8 areas, 12 visible panoramas, 0 missing runtime asset paths; partial lobby mesh | Rights-cleared tour, reliable desktop preview, tested sharing link | [Public QA](https://github.com/ewanqian/cng-design-archive/issues/1) |
| P1 | VIRTURA SpacePort | Station frontstage and world-bible documentation exist | One working 3D station and at least two verified public routes | [Release QA](https://github.com/ewanqian/VIRTURA-SpacePort/issues/20) |
| P1 | World Remix 2026 | Images and references in Greenhouse asset set; canonical engine repo not yet verified | Locate authorized source, create optimized desktop walkthrough, only then headset LOD | Source audit pending |
| Shared R&D | Stage Casting / Spatial Instrument | WebXR → OSC → Max/MSP/Ableton research in progress | Reusable input adapter; do not gate the above public deliveries on it | Separate research track |

## Device policy

- Desktop WebGL/HTML is the unconditional access layer for all projects.
- Quest 3 is preferred for accessible repeatable WebXR exhibits. Quest 3S is a reduced-legibility/performance QA variant; do not assume identical texture budgets.
- Apple Vision Pro Safari WebXR is a premium immersive VR layer, not a guarantee of true passthrough AR.
- Vision Pro RealityKit, object tracking and precise physical case anchoring are justified only by spatial storytelling outcomes and a real visitor test.
- Dense Gaussian scenes should be prepared and captured on PC first, then aggressively budgeted for mobile HMDs.
- Runtime feature detection takes precedence over device naming.

## Relative effort: incremental person-days, estimates only

| Upgrade | Estimate | Release priority |
|---|---:|---|
| Desktop preview QA + visual polish | 2–4 | First |
| Quest WebXR input and performance | 2–5 | Second |
| Quest MR placement/anchors | 3–7 | Conditional |
| Vision Pro WebXR VR testing | 2–4 | Conditional |
| Vision Pro native physical-object anchored MR | 8–15 | Commissioned/premium phase |
| Mobile Gaussian splatting optimization | 5–12 | World Remix phase |

These exclude authoring models, license procurement, hardware and ongoing operation. Track actual hours after implementation instead of treating estimates as procurement prices.

## Closure gates: four proofs, not a concept deck

1. **RUN:** one tested link or reproducible local package, works without a developer explaining how to start it.
2. **SHOW:** one 60–120-second uninterrupted capture, correct scale/materials/text and a valid audience route.
3. **OPERATE:** operator setup, fallback path, reset and visitor turnover procedure tested.
4. **TRANSFER:** source files, rights/attribution, model/export manifest, known defects and version tags documented.

A project only earns DONE when all four are evidenced. Before that, mark SOURCE / BROWSER / HMD / CONTENT independently.

## Project manager protocol in chat

- STATUS: refresh four-project evidence-backed report.
- NEXT: choose the single highest-leverage task with a runnable/visible result.
- QA: verify code, device behavior, content or rights; distinguish observed versus inferred.
- CLOSE: produce the final delivery checklist, live URL, files, operator runbook and accepted limitations.
- PARK: stop an idea from expanding scope; link it to a later phase.

**WIP limit: 1 active build + 1 directly dependent validation task.** Do not expand World Remix 2026 or invent new stations before Greenhouse's test and CNG's client-safe preview.

## Immediate blockers

- Greenhouse: JavaScript syntax parsed and public whitelist repaired; no browser-render or headset certification yet. Procedural 3D proxies.
- CNG: 12 publicly configured viewpoints have no missing image paths; model regeneration still needs authorized source on the local PC. Do not claim whole-building 3D from the partial lobby mesh.
- SpacePort: links must be validated after MG17 publication.
- World Remix: canonical repo ownership and asset source must be confirmed before publishing derivative experience.

Last edited: 2026-11-06.

## Agent subscription / work-round budget (2026-11-06)

This replaces conventional person-day estimates with **reviewable Agent work rounds**. One round = scoped task, actual repository edit, local/static test, evidence, and human acceptance decision. A round may entail many model/tool requests and is **not** one API request or a guaranteed quota unit.

Existing paid capacity (user-reported): OpenCode Go $10/month and Codex subscription. Verify current remaining allowances in each product; do not assume a full or unspent five-hour window. OpenCode Go enforces 5h/weekly/monthly model-specific limits; Codex usage depends on model and task.

| Deliverable | Estimated rounds | Scope guard |
|---|---:|---|
| CNG desktop client-safe preview | 4–8 | Existing panoramas; does not rebuild full 3D building; original video source and rights need human validation |
| Greenhouse Quest 3 interaction proof | 8–15 | Hand/controller selection → latch/evidence → greenhouse expansion; real headset tests must be done by operator |
| SpacePort verified public entry | 4–7 | No fresh station lore, only working public links and a single useful 3D route |
| World Remix first explorable Gaussian zone | 10–20 | One environment zone, optimized assets; not the festival-scale park |
| Spatial Instrument reusable input module | 5–10 | WebXR hand events → bridge/OSC; avoid unrelated music production scope |

Decision: **CNG commercial-safe preview first for immediate deliverability, Quest Greenhouse hand interactions second for differentiated XR research**. Small SpacePort link/publication tasks may use otherwise unfilled OpenCode allowance but must not displace these two P0 outcomes. Defer unbounded World Remix model/world design to pre-scoped asset batches, starting one reusable environment.

### Daily practice loop

1. Choose **one** deliverable (not a new project idea); write objective + test + stop condition.
2. OpenCode Go: low-risk code, regression tests, asset manifests, texture/Lod batch scripts, documentation and link checking.
3. Codex: hard cross-file engine changes, spatial input problems, performance/debugging and independent review when needed.
4. End each session with a working commit/PR, artifact screenshot/capture, blockers and a short NEXT instruction. Small completed task is better than exhausting a quota without evidence.
5. Keep WIP <= 1 build + 1 validation. Human checks: Quest/AVP headset input, artistic selection, actual Blender source asset permissions, commercial publication approval.

### Current first tasks

- Greenhouse Quest 3 interaction: https://github.com/ewanqian/Greenhouse-in-Transit/issues/5
- Greenhouse overall QA: https://github.com/ewanqian/Greenhouse-in-Transit/issues/3
- CNG internal 27-panorama delivery: https://github.com/ewanqian/cng-spatial-tour/issues/1
- CNG public archive QA: https://github.com/ewanqian/cng-design-archive/issues/1

Guidance: when extra 5-hour window remains, run bounded, independently valuable tests and asset inventory tasks. Do not create filler output, simulate hardware validation, or use a more expensive model merely to use credits.
