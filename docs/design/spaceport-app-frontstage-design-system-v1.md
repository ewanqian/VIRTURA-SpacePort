# SpacePort App Frontstage Design System v1

> Status: master design draft  
> Date: 2026-06-02  
> Owner: Design Working Group / WorkspaceManager  
> Related: `docs/design/spaceport-app-frontstage-design-brief-2026-06-02.md`  
> Related issue: `#8 NEXT-GEN Frontstage Upgrade`  
> Goal: 建立一套经得起长期维护的 SpacePort 应用化前台设计系统。

---

## 0. Executive Decision

SpacePort 不再被设计成一个网站。

它应被设计成：

> **VIRTURA Creation Network 的 2D App Frontstage。**

英文口径：

> SpacePort is the app-like public frontstage for VIRTURA's creation network.

中文口径：

> SpacePort 是 VIRTURA 创作网络的应用化公众前台。

这意味着：

- 用户进入的不是一个 README 美化页面；
- 也不是一个普通 landing page；
- 更不是一个“太空港概念网页”；
- 而是一组可以打开、进入、订阅和继续探索的应用入口。

SpacePort 第一版应像一个经过打磨的 **app launcher / public operating frontstage**：

- MOVA 是一个 app；
- Balloon Live Space 是一个 app；
- Space Salon 是一个 app；
- Research Laboratory 是一个 app；
- Skill Forge 是一个 app；
- Activity Calendar 是一个 app；
- Media Packages 是一个 app group。

---

## 1. Why the Current Design Fails

当前版本不是功能性失败，而是产品形态失败。

### 1.1 It Still Feels Like a Website

当前首页仍然由 hero、section、card、detail route 组成。虽然结构已经跑通，但用户进入后感受到的是：

- 这是一个网页；
- 这是一个目录；
- 这是一个 README 的视觉化版本；
- 我需要读很多文字才能知道去哪。

这与 SpacePort 的目标不一致。

SpacePort 应该让用户产生：

> 我进入了一个系统。这里有几个应用，每个应用都能打开。

### 1.2 Visual System Is Not Yet Governed

当前设计仍然存在：

- 绿色光晕主导；
- 多个 station accent 色彩随机；
- terminal / cyber / dock / editorial / poster 卡片语言并存；
- 没有明确的主色、辅助色、状态色、图像策略；
- 视觉像技术 demo，而不是经过设计部门打磨的产品。

### 1.3 Stations Are Cards, Not Applications

station card 目前只是信息卡。它们需要升级为应用入口。

每个 station 应该具备：

- app icon / symbol；
- app name；
- one-line function；
- latest signal；
- status；
- open action；
- detail window；
- related routes；
- archive links。

### 1.4 The Future Spatial Interface Is Not Prepared

SpacePort 未来可能进入 Vision Pro / spatial UI / 3D frontstage，但当前网页没有建立稳定的 spatial-ready 语法。

正确做法不是现在就做 3D 地图，而是先把 2D app frontstage 做清楚：

- app launcher；
- app window；
- dock；
- panel；
- calendar；
- media package；
- confirm / join flow。

这些都可以自然升维为空间窗口和空间节点。

---

## 2. Product Principles

### Principle 01: Application, Not Website

每个 station 都必须被当作 application 设计，而不是文章、README 或页面区块。

### Principle 02: Action Before Explanation

用户进入后先看到可以点什么，而不是先读大段解释。

### Principle 03: Calm, Not Cyber

视觉应冷静、清楚、长期有效，不追求赛博感、霓虹感或黑客终端感。

### Principle 04: App Shell First, 3D Later

先建立 2D app shell，再考虑 3D frontstage。不要直接跳到游戏地图。

### Principle 05: Public-Safe By Default

所有前台内容只显示经过压缩和审查的公开信息。深层档案留在 manifest / sourcebook / station README。

### Principle 06: One Source of Truth

- `frontstage-manifest.json` 管公众文案和 route；
- `station-manifest.json` 管 station 结构真相；
- `spaceport-frontstage.json` 管运行时视觉 token 和表现层；
- CSS / JS 不成为第二份内容 registry。

---

## 3. Product Architecture

### 3.1 Main Layers

```txt
Layer 0: Entry / Identity
Layer 1: Confirmation / Orientation
Layer 2: App Launcher
Layer 3: Station Window
Layer 4: Archive / Deep Route
Layer 5: Future Spatial Frontstage
```

### 3.2 Entry Flow

```txt
Open SpacePort
  -> Identity Screen
  -> Enter SpacePort
  -> Confirmation Panel
  -> App Launcher
  -> Open Station Window
  -> Deep Route / Archive / Calendar / Media Package
```

### 3.3 First Screen

The first screen should contain:

```txt
VIRTURA SpacePort
Creation Network Frontstage

[Enter SpacePort]
[Join Creation Network]
[View Current Events]
```

Do not show all station cards immediately above the fold. First establish identity and intention, then open the launcher.

### 3.4 Confirmation Panel

After clicking Enter SpacePort:

```txt
This is VIRTURA's public frontstage.
Choose an app to enter:
- Digital Museum
- Live Space
- Public Salon
- Research Lab
- Activity Calendar
```

The confirmation panel should be short and app-like.

---

## 4. App Launcher Model

### 4.1 App Groups

```txt
Core Apps
  MOVA
  Balloon Live Space
  Space Salon
  Research Laboratory
  Skill Forge
  Activity Calendar

Media Packages
  Stage Visuals
  Spatial Screens
  Audiovisual Systems
  Digital Exhibition
  AI Production Tools

Operational Apps
  Digital Library / Digital Stage
  Content Audit
  WorkspaceManager

Spatial / Future Apps
  Teahouse Forest Pavilion
  SceneForge
```

### 4.2 App Tile Anatomy

Every app tile must include:

```txt
[Symbol]
Title
One-line role
Status
Latest signal
Open action
```

Example:

```txt
MOVA
Digital Museum / Viewing Room
Current: Drop Flow Viewing Room
[Open]
```

### 4.3 App Tile Rules

- no long text;
- no paragraph copy;
- no random color glow;
- no fake OS chrome unless functional;
- no card purely as decoration;
- icons must be semantically distinguishable;
- every tile must answer “what can I open here?”

---

## 5. Core Applications

### 5.1 MOVA

Role:

> Digital Museum / Viewing Room

Function:

- online exhibitions;
- digital viewing rooms;
- work presentation;
- project archive entry;
- curated image and video path.

Primary CTA:

```txt
Open Exhibition
```

### 5.2 Balloon Live Space

Role:

> Browser Stage / Live Session Space

Function:

- live set records;
- browser-based stage testing;
- audiovisual session archive;
- rehearsal / cue / state documentation.

Primary CTA:

```txt
Open Session
```

### 5.3 Space Salon

Role:

> Public Conversation / Event Archive

Function:

- public conversations;
- salon archives;
- Lu.ma events;
- community and reference nights.

Primary CTA:

```txt
View Events
```

### 5.4 Research Laboratory

Role:

> Research Threads / Method Base

Function:

- long-term research threads;
- reading lists;
- method notes;
- collaborator and research profiles.

Primary CTA:

```txt
Open Research
```

### 5.5 Skill Forge

Role:

> Skills / Workflow / Protocol Layer

Function:

- reusable skills;
- workflow registry;
- protocol documents;
- WorkspaceManager-compatible task units.

Primary CTA:

```txt
Open Registry
```

### 5.6 Activity Calendar

Role:

> Public Event Calendar

Function:

- Lu.ma activity feed;
- upcoming public salon;
- current sessions;
- public subscription path.

Primary CTA:

```txt
View Calendar
```

This must be visible on the launcher. Do not bury it in footer text.

---

## 6. Station Window Model

When opening a station, do not immediately navigate to a normal long article.

Open an app-like window / panel.

### 6.1 Station Window Anatomy

```txt
Window Header
  App Icon
  App Name
  Status
  Close / Back

Hero Area
  One-line role
  Current feature

Primary Actions
  Open current feature
  View archive
  View related stations

Content Panel
  Latest signal
  Tracker
  Routes
  Public-safe summary

Footer
  Source of truth
  Deep archive link
```

### 6.2 Station Window Rules

- one screen should explain the station;
- deep archive is available but not first impression;
- public route labels must be readable;
- tracker must be simple;
- no README-style walls of text;
- no unverified internal process language.

---

## 7. Visual System

### 7.1 Design Mood

Keywords:

```txt
quiet
precise
app-like
spatial-ready
dark glass
editorial
soft technical
museum-grade
long-term
```

Avoid:

```txt
cyberpunk
hacker terminal
neon green
random accent
SaaS dashboard
metaverse cliché
full-screen particle gimmick
retro fake OS
```

### 7.2 Color Tokens

The design should use a restrained neutral base.

```css
:root {
  --sp-bg: #080808;
  --sp-bg-soft: #0f0f0f;
  --sp-panel: rgba(255, 255, 255, 0.055);
  --sp-panel-strong: rgba(255, 255, 255, 0.085);
  --sp-glass: rgba(255, 255, 255, 0.075);

  --sp-text: #f4f1ea;
  --sp-text-soft: #d8d2c4;
  --sp-muted: #8c8a84;
  --sp-muted-deep: #5f5d58;

  --sp-line: rgba(255, 255, 255, 0.10);
  --sp-line-strong: rgba(255, 255, 255, 0.18);

  --sp-accent-primary: #d8d2c4;
  --sp-accent-blue: #8fa7b7;
  --sp-accent-warm: #d8a66d;
  --sp-accent-alert: #d86c55;
  --sp-accent-success: #8aa37b;
}
```

### 7.3 Green Rule

Green is no longer a brand-leading accent.

Allowed:

- as a very small status color;
- as part of selected image content;
- as a one-off station detail when semantically required.

Not allowed:

- global glow;
- default hero accent;
- Research Laboratory default dominant color;
- random neon system color.

### 7.4 Accent Rule

Each app may have a subtle accent, but accents must sit inside one palette.

Recommended mapping:

| App | Accent |
|---|---|
| MOVA | warm white / clay |
| Balloon Live Space | soft blue-gray |
| Space Salon | muted amber |
| Research Laboratory | neutral silver |
| Skill Forge | graphite / pale gold |
| Activity Calendar | soft blue |
| Media Packages | off-white / image-led |

---

## 8. Typography System

### 8.1 Type Direction

Typography should feel closer to:

- software interface;
- cultural institution;
- stage archive;
- Apple-like app label clarity;
- contemporary design studio.

Not:

- cyber terminal;
- gaming HUD;
- over-designed sci-fi poster;
- academic README.

### 8.2 Type Scale

```css
--type-display: clamp(48px, 8vw, 96px);
--type-title: clamp(28px, 4vw, 48px);
--type-app-title: 18px;
--type-body: 14px;
--type-small: 12px;
--type-micro: 10px;
```

### 8.3 Copy Rules

- app tile summary: max 1 line;
- station window summary: max 2 lines;
- hero summary: max 2 short sentences;
- no paragraph-heavy homepage;
- no concept stacking;
- use verbs: Open, View, Join, Follow, Launch.

---

## 9. Layout System

### 9.1 Shell

```txt
Top System Bar
Main App Canvas
Dock / Launcher Grid
Floating Station Window
Bottom Status / Calendar Strip
```

### 9.2 Grid

Desktop:

```txt
12-column layout
max width: 1280px
app tile grid: 5 columns or responsive auto-fit
window max width: 920px
```

Tablet:

```txt
3-column app grid
window becomes full-width panel
```

Mobile:

```txt
1-column or 2-column compact launcher
station windows become stacked sheets
```

### 9.3 App Tile Size

Desktop tile:

```txt
min width: 160px
height: 180–220px
radius: 24px
padding: 18–22px
```

Mobile tile:

```txt
height: 140–170px
radius: 18px
```

---

## 10. Component Library

### 10.1 `<SpacePortEntry />`

Purpose:

- first impression;
- identity;
- enter action;
- join action.

Contains:

- title;
- subtitle;
- three primary actions.

### 10.2 `<EntryConfirm />`

Purpose:

- explain what SpacePort is;
- confirm user intent;
- introduce launcher.

### 10.3 `<AppLauncher />`

Purpose:

- show all primary apps;
- group apps by function;
- reveal activity and media packages.

### 10.4 `<AppTile />`

Purpose:

- station app entry;
- status-aware interactive tile.

Props:

```ts
type AppTileProps = {
  slug: string
  title: string
  role: string
  status: string
  latest?: string
  icon: string
  accent?: string
  primaryAction: string
}
```

### 10.5 `<StationWindow />`

Purpose:

- open app-like detail;
- avoid immediate README navigation.

### 10.6 `<ActivityCalendarCard />`

Purpose:

- Lu.ma activity calendar entry;
- upcoming events;
- subscription action.

### 10.7 `<MediaPackageCard />`

Purpose:

- external-facing capability packages;
- Stage Visuals / Spatial Screens / Audiovisual Systems / Digital Exhibition / AI Tools.

### 10.8 `<NetworkJoinPanel />`

Purpose:

- explain how to join / follow / collaborate;
- not a vague community pitch.

### 10.9 `<SystemStatusBar />`

Purpose:

- show current mode;
- show data source;
- show update state;
- reinforce app-shell feeling.

### 10.10 `<CommandMenu />` / Later

Purpose:

- quick jump;
- search stations;
- open route;
- future power-user function.

Not necessary for v1.

---

## 11. Icon / Symbol System

### 11.1 Rules

- icons must be simple;
- icons must be distinguishable at small sizes;
- no random emoji as final icon;
- no overly detailed illustrations;
- no generic tech icons;
- each station needs one stable symbol.

### 11.2 Suggested Symbols

| App | Symbol Direction |
|---|---|
| MOVA | frame / aperture / room |
| Balloon Live Space | stage / balloon / waveform |
| Space Salon | circle / table / speech ring |
| Research Lab | thread / node / prism |
| Skill Forge | tool mark / module / gear-square |
| Activity Calendar | calendar block / pulse mark |
| Media Packages | stacked cards / reel strip |
| Teahouse Pavilion | pavilion / leaf / spatial cube |

---

## 12. Motion System

### 12.1 Motion Principles

- motion should clarify state;
- no decorative glitch;
- no aggressive parallax;
- no fake loading unless needed;
- no excessive hover animation;
- transitions should feel like opening apps.

### 12.2 Timing

```txt
Micro hover: 120–180ms
Tile focus: 180–240ms
Window open: 280–420ms
Entry confirmation: 320–480ms
Page-level transition: 420–640ms
```

### 12.3 Easing

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
--ease-snap: cubic-bezier(0.2, 0.8, 0.2, 1);
```

### 12.4 Motion Examples

- app tiles appear with slight y-offset and fade;
- station window opens from selected tile position;
- background slightly darkens when window opens;
- calendar preview slides in as lower strip;
- join panel opens as right-side sheet;
- deep route opens as normal page only after app summary.

---

## 13. Information Architecture

### 13.1 Public Frontstage

```txt
/
  Entry
  Launcher
  Current Signals
  Activity Calendar
  Media Packages
  Join Network
```

### 13.2 App Routes

```txt
/#/apps/mova
/#/apps/balloon-live-space
/#/apps/space-salon
/#/apps/research-laboratory
/#/apps/skill-forge
/#/apps/activity-calendar
/#/apps/media-packages
```

Existing station routes can continue to work:

```txt
/#/stations/<slug>
```

But public UI should begin using app language.

### 13.3 Archive Routes

Deep routes stay as Markdown / GitHub links:

```txt
stations/mova/README.md
stations/mova/exhibitions/...
stations/research-laboratory/research-threads.md
```

Do not replace archive with app shell; app shell is an access layer.

---

## 14. Data Mapping

### 14.1 Existing Source Mapping

| Data Need | Source |
|---|---|
| app title | `frontstage-manifest.json station_pages[].card.title` |
| app role | new field or `card.summary` |
| app group | `dock_group` |
| app code | `dock_code` |
| current feature | `station_pages[].page.current_feature` |
| route labels | `station_pages[].routes` |
| status / tracker | `station-manifest.json` |
| visual token | `spaceport-frontstage.json` |
| source docs | station README / sourcebook |

### 14.2 Required New Fields

Add to `frontstage-manifest.json` later:

```json
{
  "app_shell": {
    "enabled": true,
    "entry_title": "VIRTURA SpacePort",
    "entry_subtitle": "Creation Network Frontstage",
    "primary_action": "Enter SpacePort",
    "secondary_action": "Join Creation Network"
  }
}
```

For each station:

```json
{
  "app": {
    "icon_id": "mova-frame",
    "app_role": "Digital Museum / Viewing Room",
    "open_label": "Open Exhibition",
    "window_mode": "station-window",
    "launcher_priority": 1
  }
}
```

---

## 15. Calendar Integration

Lu.ma calendar should be elevated from link to app.

### 15.1 Calendar Card

```txt
Activity Calendar
Upcoming public sessions and salon events
[View Calendar]
```

### 15.2 Future Data

If API or manual sync exists later:

```json
{
  "events": [
    {
      "title": "Space Salon Vol.05",
      "date": "2026-06-XX",
      "status": "upcoming",
      "href": "https://lu.ma/VIRTURA"
    }
  ]
}
```

For now, use Lu.ma as external canonical event source.

---

## 16. Join Creation Network

This should be a visible entry, but not the primary pressure.

### 16.1 Join Panel Copy

```txt
Join Creation Network

For artists, musicians, curators, venues, and creative technologists who want to build stage visuals, spatial screens, digital exhibitions, or audiovisual systems with VIRTURA.

[Start a conversation]
[Follow public events]
[View media packages]
```

### 16.2 Do Not Say

- join our future ecosystem;
- enter the metaverse;
- become a node;
- join decentralized soul space;
- vague collective language without action.

---

## 17. Media Packages in App Frontstage

Media Packages are external-facing apps.

```txt
Stage Visuals
Spatial Screens
Audiovisual Systems
Digital Exhibition
AI Production Tools
```

Each package should include:

- one-line offer;
- proof projects;
- media preview;
- format list;
- contact CTA.

This makes SpacePort useful for people who need something concrete.

---

## 18. Asset Strategy

### 18.1 Asset Sources

Upcoming asset ingestion should include:

- Guangzhou expo viewer materials;
- team intro web pages;
- project stills;
- stage documentation;
- Drop Flow / TIMER visual strips;
- BO LIVE / CAN Festival / WPÜ Japan visuals if public-safe;
- Apple Vision Pro / MR viewer demo screenshots if public-safe.

### 18.2 Asset Index Required

Before large front-end polish, create:

```txt
assets-index/frontstage-assets.md
```

or JSON:

```json
{
  "id": "guangzhou-viewer-01",
  "type": "screenshot",
  "public_safe": true,
  "related_app": "media-packages",
  "recommended_use": "launcher-preview"
}
```

---

## 19. Implementation Plan

### Phase 1: Design System Lock

Files:

- this document;
- `docs/design/spaceport-app-frontstage-design-brief-2026-06-02.md`;
- #8 issue.

Output:

- product model;
- color tokens;
- component list;
- IA;
- acceptance criteria.

### Phase 2: Data Preparation

Files:

- `stations/frontstage-manifest.json`;
- `stations/station-manifest.json`;
- `assets/spaceport-frontstage.json`.

Tasks:

- add app shell fields;
- add app role fields;
- add icon IDs;
- normalize station actions;
- add calendar app entry;
- add media package group.

### Phase 3: Front-End Shell

Files:

- `assets/spaceport.css`;
- `assets/spaceport.js`;
- `index.html`.

Tasks:

- implement entry screen;
- implement confirm panel;
- implement app launcher;
- implement station window;
- implement activity calendar card;
- implement join panel.

### Phase 4: Visual Polish

Tasks:

- replace green-dominant glow;
- implement neutral palette;
- refine glass panels;
- create station icon system;
- reduce section page feel;
- test mobile launcher.

### Phase 5: Spatial Readiness

Tasks:

- map app tiles to future spatial nodes;
- define window depth / layer logic;
- keep 3D map deferred;
- document Vision Pro extension.

---

## 20. Acceptance Criteria

The design is acceptable when:

- first-time users understand what SpacePort is in 10 seconds;
- it feels like an app frontstage, not a website;
- all core stations feel like applications;
- app tiles are visually unified;
- green no longer dominates;
- Lu.ma calendar is a visible app;
- Join Creation Network is clear and actionable;
- media packages are discoverable;
- station details open as window-like summaries before archive routes;
- manifest source-of-truth is preserved;
- the interface can later become Vision Pro / spatial launcher without conceptual rewrite.

---

## 21. Red-Team Checklist

Before shipping, ask:

- Does this still look like a README with CSS?
- Does the first screen explain too much?
- Are station cards actually app entries?
- Are colors controlled?
- Is green overused?
- Are there too many random accent colors?
- Can a musician understand where to click?
- Can a curator understand where to click?
- Can someone find current events?
- Can someone understand how to work with VIRTURA?
- Can this become a spatial interface later?

If not, do not ship.

---

## 22. Final Design Sentence

> SpacePort is not a website. It is the first 2D operating frontstage for VIRTURA's creation network.

中文：

> SpacePort 不是网页，而是 VIRTURA 创作网络的第一版 2D 应用前台。
