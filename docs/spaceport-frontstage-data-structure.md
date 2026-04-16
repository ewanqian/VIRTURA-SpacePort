# SpacePort 前台数据结构说明

> 状态：进行中
> 用途：给前端首页、station 独立页和后续 `3D frontstage` 一套可持续读取的数据组织方式。

---

## 现在为什么要多加一层数据

`SpacePort` 目前已经有很多有效内容，但这些内容分布在不同层里：

- README
- station README
- 长文
- 归档页
- 路线图
- sourcebook
- manifest

这对档案保存很好，但对前端直接做“公众首页 + station 独立主页”来说，仍然太散。

所以现在最适合的做法不是再挪一次档案，而是在现有母本之外，再加一层前台专用的 UI 数据层。

---

## 当前建议的 5 层结构

### 1. 仓库母本层

作用：保留真实档案、长文、研究文档和原始站点内容。

代表文件：

- `stations/*/README.md`
- `stations/*/**.md`
- `knowledge-network/**`
- `organization/**`

这层不能为了前端方便而被掏空。

---

### 2. Frontstage 总览层

作用：给公众快速看全 `stations`，知道每个 dock 在干什么。

代表文件：

- `stations/README.md`

这层应该越来越像一个前台首页，而不是 README 汇编。

---

### 3. Sourcebook 备份层

作用：保存从前台页压缩下来的长文说明、时间线和较完整的说明材料。

代表文件：

- `stations/stations-sourcebook.md`

如果前台页为了更清楚而变短，有效信息优先往这层沉。

---

### 4. Canonical Station Data 层

作用：保存 station 的核心结构数据，是当前最重要的统一站点底稿。

代表文件：

- `stations/station-manifest.json`

这层更偏：

- status
- tracker
- related stations
- source of truth
- frontstage unit

也就是“站点本体结构”。

---

### 5. Public Frontstage UI 层

作用：给前端首页和 station 页直接读取的 UI 数据。

代表文件：

- `stations/frontstage-manifest.json`

这层更偏：

- 首页 hero
- dock group
- station card copy
- station 独立页的 hero 文案
- primary / secondary routes
- poster / fallback visual strategy

也就是“前台展示结构”。

---

## 这几层怎么配合

推荐读取方式：

1. 首页先读 `stations/frontstage-manifest.json`
2. 再按 `slug` 对齐 `stations/station-manifest.json`
3. 需要更完整文案时，回到 `stations/stations-sourcebook.md`
4. 真正深层内容再回到 station 自己的 README 和归档页

一句话：

- `station-manifest.json` 管结构真相
- `frontstage-manifest.json` 管公众界面
- `stations-sourcebook.md` 管被压缩后的长文保留

---

## 和当前首页原型怎么对接

如果现在已经开始做 `index.html`、`assets/spaceport.css`、`assets/spaceport.js` 这类前端原型，推荐这样分工：

- `stations/station-manifest.json`：站点结构真相
- `stations/frontstage-manifest.json`：公众首页和 station 页直接读取的正式 UI 数据
- `assets/*` 或其他前端目录：表现层、路由层、动画层和运行时适配层

这一步最重要的边界是：

- 前端原型可以为了加载方便生成 runtime snapshot
- 但 snapshot 只应视为派生文件，不应变成手写维护的第二份 station registry
- 如果首页文案、dock 分组、station route 发生变化，应先改 `frontstage-manifest.json`
- 如果状态、tracker、related stations 发生变化，应先改 `station-manifest.json`

这样做的好处是：

- 首页原型可以继续快速迭代
- 档案层和前台层不会重新分叉
- 后续从网页升到 `3D` 时，不需要再从前端代码里反向挖数据

---

## 前端页面应该直接用哪些字段

当前网页前台已经开始直接读取 `stations/frontstage-manifest.json` 作为公众层母本，`assets/spaceport-frontstage.json` 只继续承担视觉 token、框架层标签与运行时表现层辅助。

## 首页

前端首页最适合直接读：

- `site.hero`
- `site.core_section`
- `site.network_section`
- `site.port_metrics`
- `site.dock_groups`
- `station_pages[].card`
- `station_pages[].dock_group`
- `station_pages[].dock_code`
- `station_pages[].media`

## Station 独立页

每个 station 页面最适合读：

- `station_pages[].page`
- `station_pages[].page.current_feature`
- `station_pages[].routes`
- `station-manifest.json` 中对应 station 的 `trackers`
- `station-manifest.json` 中对应 station 的 `current_focus`
- `station-manifest.json` 中对应 station 的 `related_stations`
- `station-manifest.json` 中对应 station 的 `source_of_truth`

这样页面既有公众文案，也不会丢掉结构信息。

---

## 什么信息应该放在哪一层

### 放在 `station-manifest.json`

- 当前状态
- tracker 状态
- source of truth
- related stations
- frontstage unit
- canonical current focus

### 放在 `frontstage-manifest.json`

- 公众首页标题
- dock 分组
- dock code
- card 文案
- hero 文案
- current feature / current route
- 推荐入口
- 推荐图像或图像策略

### 放在 `stations-sourcebook.md`

- 被首页压缩掉但仍然有效的长段说明
- 时间线
- 更完整的背景文字
- 原始说明页保留内容

---

## 当前前端最适合配合的做法

如果另一个窗口要直接开始做静态前台，最适合的工作方式是：

1. 首页用 `frontstage-manifest.json` 做 dock board
   - 首页的展示顺序优先是 `Core Stations -> Operational Layers -> Station Index`
2. station 页按 `slug` 读取 `frontstage-manifest + station-manifest`
3. tracker 直接从 `station-manifest` 读
4. reference 标题优先从 `page.current_feature + routes.primary + routes.secondary` 派生，再回落到 source path
5. 没有图的时候，不强行找图，用 typography-only 卡片
6. 如果原型需要额外运行时 JSON，把它当派生快照，不再手写第二份长期 station 数据
7. 对 event-driven station，在 `frontstage-manifest.json` 里优先给出 `page.current_feature`，让前台能直接告诉用户“现在先看这个”

这样就不会：

- 为了做前台而把 README 搬空
- 为了做图文卡片而硬塞不合适的作品图
- 为了做 station 页再造一套和当前 manifest 不兼容的数据
- 为了跑静态首页又在 `assets/` 里养一份长期脱节的 registry

---

## 当前最需要继续补的数据

虽然这层已经够前端开始做，但后面还适合继续补：

- 每个 station 的 dedicated public poster
- 更稳定的 homepage section order
- 更多 station 子页 route map
- 更细的 tracker 数值化字段
- 和后续 `3D frontstage` 共享的 node / edge / zone 字段

---

## 执行原则

前端可以大胆变前台，但不要直接越过这套层级去改母本。

优先顺序应该始终是：

1. 保留档案
2. 整理结构
3. 提炼前台
4. 再做视觉和交互
