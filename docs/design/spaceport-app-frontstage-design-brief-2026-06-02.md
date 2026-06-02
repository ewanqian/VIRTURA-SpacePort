# SpacePort App Frontstage Design Brief / 2026-06-02

> Status: design brief / product research required  
> Owner: design working group  
> Related issue: NEXT-GEN Frontstage Upgrade / Creation Network / WorkspaceManager  
> Core judgment: 当前 SpacePort 前台虽然已经能运行，但产品形态仍然更像一个网页目录或技术 demo，而不是一个被打磨过的应用化前台。

---

## 1. Current Problem

当前 SpacePort 前台的问题不是“功能完全不能用”，而是**产品形态判断不够清楚**。

现有版本已经做到：

- 首页可进入；
- station 可点击；
- station detail 可展示；
- `frontstage-manifest.json` 与 `station-manifest.json` 已经接入；
- 基础 demo 能跑通。

但目前仍存在以下设计失败点：

1. **太像普通网页。**  
   入口、卡片、section、文本结构仍然像一套文档型 landing page，而不是一个可进入、可操作、可扩展的 SpacePort 前台。

2. **视觉语言没有统一标准。**  
   目前黑底、细线、绿色光晕、terminal-like card、poster card 等语言混在一起，缺少明确的设计系统。绿色和多色 accent 没有形成品牌秩序，容易显得随机。

3. **空间港口 / 应用前台的产品感不够。**  
   SpacePort 不应该只是“看文字 + 点链接”，而应该更像一个图形化应用前台：进入后看到一组可以打开的应用 / dock / station。

4. **缺少 App Shell / Launcher 逻辑。**  
   目前 stations 是卡片列表，但还不是“应用图标 + 应用窗口 + 状态面板”的逻辑。用户不应该感觉自己在读 README，而应该感觉自己进入了一个系统。

5. **没有建立 Vision Pro / 空间界面的延续性。**  
   当前设计没有为未来 visionOS / spatial UI 做好语言准备。它应该先在网页中成立为 2D app frontstage，再自然升维为 3D / spatial frontstage。

---

## 2. Product Reference Direction

### 2.1 iCloud / App Launcher Logic

参考对象不是照抄 iCloud 视觉，而是借鉴它的产品组织逻辑：

- 进入后看到一组可识别应用；
- 每个应用有明确图标、名称和用途；
- 用户知道“点开后进入某个功能”；
- 应用不是文章卡片，而是可使用的工作入口；
- 整体像一个系统，而不是普通网页。

SpacePort 的对应关系：

| iCloud-style app logic | SpacePort 对应 |
|---|---|
| App grid | Station / Dock grid |
| App icon | Station icon / object tile |
| App window | Station detail panel / route panel |
| Account / confirm entry | Join Creation Network / enter SpacePort confirmation |
| iCloud services | MOVA / Balloon Live Space / Space Salon / Research Lab / Skill Forge |
| Calendar app | Lu.ma activity calendar |
| Shared album / files | Media packages / project archives |

### 2.2 Application-like, not webpage-like

SpacePort 首页应该像一个 app shell：

1. 初始屏：Creation Network / SpacePort identity
2. 进入按钮：Enter SpacePort / Open Network
3. 确认层：说明这是 VIRTURA 的公众前台
4. App launcher：显示一组可打开的 station apps
5. Detail layer：点击 station 后打开应用式面板，而不是滚到 README
6. Activity layer：显示 Lu.ma 活动日历、最新 salon、最新展映、最新 live session

---

## 3. New Product Model

### 3.1 SpacePort is an App Frontstage

新的定义：

> SpacePort is an app-like public frontstage for VIRTURA's creation network.

中文：

> SpacePort 是 VIRTURA 创作网络的应用化公众前台。

它不是：

- GitHub README 美化版；
- 项目目录；
- 随机卡片集合；
- 科技感 landing page；
- 太空概念 UI；
- 赛博绿色终端界面。

它应该是：

- 应用前台；
- dock board；
- station launcher；
- 活动和展映入口；
- 团队能力的可进入界面；
- 未来 Vision Pro / spatial interface 的 2D 前身。

---

## 4. Required Stations / Apps

第一版 app launcher 至少包含：

### Core Apps

1. **MOVA**  
   Digital Museum / Viewing Room  
   数字美术馆、线上展映、观看室。

2. **Balloon Live Space**  
   Browser Stage / Live Session Space  
   线上演出空间、浏览器舞台、live session 记录。

3. **Space Salon**  
   Public Conversation / Event Archive  
   公共活动、沙龙、对话档案。

4. **Research Laboratory**  
   Research Threads / Method Base  
   研究线、方法沉淀、判断母本。

5. **Skill Forge**  
   Skills / Workflow / Protocol Layer  
   技能、工作流、协议、自动化操作层。

6. **Activity Calendar**  
   Lu.ma Calendar / Upcoming Events  
   官方活动日历，应作为首页显性入口，而不是藏在文字链接里。

### Secondary Apps

7. **Digital Library / Digital Stage**  
   内容发布、知识归档、公共界面层。

8. **Teahouse Forest Pavilion**  
   空间样本 / 3D 方向 / 后续 Vision Pro 或 spatial demo 入口。

9. **Media Packages**  
   Stage Visuals / Spatial Screens / Audiovisual Systems / Digital Exhibition / AI Production Tools。

---

## 5. Visual Language Direction

### 5.1 Palette

当前绿色不应继续作为默认主视觉。绿色光晕容易把系统带向“黑客终端 / 赛博工具”而不是“精致应用前台”。

建议第一版色彩系统：

```txt
Base Black: #080808
Panel Black: #111111
Soft White: #F4F1EA
Muted Gray: #8C8A84
Line Gray: rgba(255,255,255,0.10)
Glass Panel: rgba(255,255,255,0.055)
Primary Accent: #D8D2C4
Secondary Accent: #8FA7B7
Alert Accent: #D86C55
Success Accent: #8AA37B
```

原则：

- 不再用随机彩虹 accent；
- 不让绿色主导；
- 每个 app 可以有轻微色相，但整体必须统一；
- 默认是黑、灰、白、玻璃、细线、少量暖灰；
- accent 只用于状态、选中、提醒、图标细节。

### 5.2 Typography

方向：

- 大标题克制；
- UI label 用窄小大写；
- 中文不堆长句；
- 每个 station 只给一句功能定位；
- 首页避免解释性长文。

建议层级：

- Display: SpacePort / Creation Network
- App title: MOVA / Balloon Live Space / Research Laboratory
- App subtitle: one-line role
- Meta: status / latest / route / tracker
- CTA: Open / View / Join / Follow / Launch

### 5.3 UI Components

必须建立统一组件：

- App tile
- Dock group
- Station window
- Activity card
- Calendar preview
- Media package card
- Confirmation modal
- Network join panel
- App toolbar
- Status badge
- Route list
- Tracker chip

---

## 6. Interaction Model

### 6.1 Entry Flow

1. User opens SpacePort.
2. Sees a clean identity screen:
   - VIRTURA SpacePort
   - Creation Network Frontstage
   - Enter SpacePort
   - Join Creation Network
3. Clicks **Enter SpacePort**.
4. A small confirmation / introduction panel appears:
   - This is VIRTURA's public frontstage.
   - Choose an app to enter.
5. User lands on App Launcher.

### 6.2 App Launcher

Launcher contains:

- Core Apps group;
- Current Signals group;
- Activity Calendar;
- Media Packages;
- Operational Tools.

Each app tile has:

- icon / symbol;
- title;
- one-line role;
- status;
- latest update;
- open button.

### 6.3 Station Detail

When opening a station:

- do not navigate to a normal article page first;
- open a panel / window-like detail;
- show current feature, route, tracker, related station;
- allow deep link to Markdown archive after the interface-level summary.

---

## 7. Design Research Tasks

Create a temporary design working group task list:

### P0 — Product Definition

- [ ] Define SpacePort as app-like public frontstage.
- [ ] Decide exact first-screen flow: intro -> confirm -> app launcher.
- [ ] Decide whether Join Creation Network is primary or secondary CTA.
- [ ] Decide how Lu.ma calendar appears on homepage.

### P0 — Visual System

- [ ] Replace current green-dominant visual impression.
- [ ] Establish one palette and no more random station accents.
- [ ] Define app tile component.
- [ ] Define station window component.
- [ ] Define icon / symbol system for all stations.
- [ ] Define typography scale.
- [ ] Define motion rules.

### P1 — Reference Study

- [ ] Study iCloud web app launcher logic.
- [ ] Study Apple-style app grid / app window / account entry logic.
- [ ] Study visionOS spatial UI only for future direction, not immediate imitation.
- [ ] Study dashboard products, but avoid SaaS dashboard look.
- [ ] Study launcher / dock / file-system UI, but avoid fake retro OS.

### P1 — Asset Ingestion

- [ ] Ingest Guangzhou expo viewer materials.
- [ ] Ingest team intro web pages.
- [ ] Ingest images and media packs from local asset packages.
- [ ] Select 6–10 public-safe visuals for SpacePort launcher and media package previews.
- [ ] Build asset index before front-end rewrite.

### P2 — Spatial Future

- [ ] Ensure 2D app launcher can later become Vision Pro spatial launcher.
- [ ] Keep station data compatible with future 3D node / room / panel mapping.
- [ ] Do not build game map yet.
- [ ] Do not force 3D before app-frontstage logic is clear.

---

## 8. Technical Implementation Direction

Do not rewrite everything first.

First implementation should touch:

- `assets/spaceport.css`
- `assets/spaceport.js`
- `assets/spaceport-frontstage.json`
- `stations/frontstage-manifest.json`

The data source rule remains:

- `frontstage-manifest.json` = public copy and routes;
- `station-manifest.json` = canonical structure;
- `assets/spaceport-frontstage.json` = runtime visual layer only;
- no second station registry.

---

## 9. Acceptance Criteria

This issue is complete when:

- SpacePort no longer feels like a normal webpage.
- First screen feels like an app / frontstage entry.
- Core stations look like applications, not article cards.
- Color system is controlled and no longer random green / accent chaos.
- Lu.ma calendar is visible as a real public entry.
- Users can understand what to click within 10 seconds.
- The design could plausibly evolve into a Vision Pro spatial launcher.
- Existing manifest logic is preserved.
- Public-safe team materials can be plugged into launcher / media package previews.

---

## 10. Direct Design Principle

> Do not design SpacePort as a website.
> Design it as the first 2D version of a public operating frontstage for VIRTURA's creation network.

中文：

> 不要把 SpacePort 继续做成网页。先把它做成 VIRTURA 创作网络的 2D 应用前台。
