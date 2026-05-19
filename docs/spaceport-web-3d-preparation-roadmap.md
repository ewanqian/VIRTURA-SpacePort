# SpacePort 网页化与 3D 升维准备路线图

> 状态：进行中
> 目标：把 `VIRTURA-SpacePort` 从文档型前台整理成一个可进入、可追踪、可继续升维到 `3D` 的网页前台。

---

## 这次要解决什么

`SpacePort` 接下来不是只补文档，也不是最后再补网页壳。

现在就要开始做的，是把下面三件事一起准备起来：

1. 所有 `stations` 都能在网页前台被统一看见
2. 每个 `station` 都有自己的文字界面、状态信息和 tracker
3. 这套网页层后面可以自然升到 `3D frontstage`，而不是重做一套新系统

这里的判断很简单：

- 网页层不是临时展示层，而是 `SpacePort` 的主工作前台
- `3D` 不是另起一套内容，而是网页层之上的空间化界面
- 在进入 `3D` 之前，数据库、目录、文档关系、站点字段和信息丰富度要先整理好

---

## 目标体验

### 第一层：网页前台

用户进入 `SpacePort` 之后，应该先看到的是一个完整的 `stations` 前台，而不是散落的 README 列表。

这一层至少要做到：

- 所有 `stations` 同时出现
- 每个 `station` 都有一张清楚的入口卡片
- 点进任意 `station`，都能看到对应的文字界面
- 每个 `station` 都带有最小 tracker，而不只是静态介绍
- 读者可以继续进入活动、归档、研究、作品或相关站点

这层网页的气质可以更接近：

- 数字信息城市
- 模拟经营 / 系统管理界面
- 文本驱动但结构清楚的图形界面

---

### 第二层：网页中的 station 界面

每个 `station` 不应该只是一个 README，而应逐步具备：

- 名称
- 一句话定位
- 当前状态
- 当前重点
- tracker
- 最佳进入入口
- 关联站点
- 下一步

也就是说，之后的网页不是“把 markdown 搬上去”，而是把 `station` 整理成一个可被界面读取的单元。

---

### 第三层：从网页升到 3D

后续 `3D` 层最自然的做法，不是推翻网页，而是直接建立在网页层之上。

理想状态是：

- 网页中的 `station card / tracker / route` 先成立
- `station` 之间的关系先能在 2D 前台被读清楚
- 再把这些节点、关系和状态升为 `3D` 中的空间节点

所以“网页怎么升成 3D”，本质上不是先做场景，而是先统一：

- 站点字段
- 状态字段
- 关系字段
- 入口字段
- tracker 字段

这样后面才有可能做到“直接往上翻”，而不是重新搭建第二套内容系统。

---

## 当前 station 总表

| Station | 当前主要职责 | 网页前台最小单位 | 应补 tracker |
|---|---|---|---|
| `Space Salon` | 交流客厅、系列活动、归档 | 系列首页 + 单期页 | 系列时间线 / 当前期数 / 下一入口 |
| `Balloon Live Space` | live set、音画实验、演出测试 | 站点页 + session 页 | 演出状态 / 系统状态 / 下一轮测试 |
| `MOVA` | 线上展映、观看室、数字展览 | 展映索引 + 单展页 | 展映状态 / 观看路线 / 后续入口 |
| `在制内容审计会` | 结构批评、版本复盘、问题整理 | 系列页 + 问题项目页 | 问题状态 / 优先级 / 是否已修 |
| `Digital Library / Digital Stage` | 归档结构、前台结构、公开说明 | 系列页 + session 页 | 路线状态 / 入口关系 / 补图补例进度 |
| `Research Laboratory` | 研究母本、实验、路线判断 | 实验室首页 + 研究线页 | 研究线状态 / 实验进度 / 相关项目 |
| `Skill Forge` | skill 托管、维护、发布 | 总入口 + registry / taxonomy / skills | 打包状态 / 发布状态 / source-of-truth |
| `Seleiumeaves` | 旧茶屋方向档案 | 档案页 | 档案完整度 / 是否继续生长 |
| `Teahouse Forest Pavilion` | 高保真茶屋 demo 方向 | 项目方向页 | 场景进度 / 媒体进度 / 导出准备度 |

---

## Stations 统一规范

后续每个 `station` 至少应统一出下面这些字段。

### 公开字段

- `station_name`
- `slug`
- `one_line_role`
- `current_status`
- `current_focus`
- `best_entry`
- `related_stations`
- `next_step`

### tracker 字段

- `archive_tracker`
- `web_tracker`
- `system_tracker`
- `3d_tracker`

### 可继续扩展字段

- `related_repositories`
- `current_cycle`
- `latest_update`
- `linked_sessions`
- `scene_ready`
- `asset_ready`

---

## 建议统一的状态语言

当前仓库里，`station` 状态、活动状态、展映状态混用了中英文字段，后面网页化会越来越乱。

建议拆成三套：

### 1. Station 状态

- `筹备中`
- `生长中`
- `运行中`
- `维护中`
- `归档保留`

### 2. 活动 / 展映状态

- `待发布`
- `已公开`
- `进行中`
- `已结束`
- `已归档`

### 3. 网页 / 3D 准备状态

- `md-only`
- `web-ready`
- `ui-ready`
- `3d-ready`

---

## 当前技术债与待办

### P0：现在就要清的

- `stations/README.md` 目前更像活动说明页，还不是“所有 station 同时可见”的前台索引
- `stations` 层还没有统一的 station registry / manifest
- `Balloon / Balloon` 命名不统一，后续做网页会直接影响品牌与字段稳定性
- 多个站点首页还是模板式站点定义，没有进入“网页前台可读取”的结构
- `station` 状态词混用 `Active / Growing / planned / open / 已公开 / 已归档`
- 中间目录有些缺 README，结构上有内容，但没有路由页
- `Balloon Live Space Beta` 的 README 里写了还不存在的目录和文件，文档结构与真实结构不一致
- `Research Laboratory` 虽然已经有 `profile / members / reading-list / research-threads`，但主入口还没把它们挂出来

### P1：网页化准备项

- 给每个 `station` 补齐统一字段
- 做一个可长期维护的 `station manifest`
- 明确公众首页原型应直接读取 `stations/frontstage-manifest.json`，不长期维护第二份前台 station 数据
- 把 `stations` 首页改成“总览 + 入口 + tracker 总图”
- 为每个 `station` 提供一致的文字界面骨架
- 整理 `station card` 需要的最小字段
- 整理 `tracker panel` 需要的最小字段
- 统一 `station` 与活动页、研究页、作品页之间的跳转关系
- 建立适合网页前台的视觉 token 和信息层级

### P2：3D 升维准备项

- 把 `station` 当成统一节点，而不是不同页面模板
- 为每个 `station` 准备 `2D / 3D` 共用的数据层
- 定义站点之间的边、组、层级关系
- 明确“从列表页 -> station 页 -> 节点图 -> 3D 场景”的升维路径
- 给后续 `SceneForge / DigitalStageViewer` 预留可接入字段
- 为 `3D` 界面准备最小的状态映射关系

---

## 本轮已经处理

作为这一轮清洁的基础动作，已经先做了几件低风险但必要的事：

- 修掉了 `stations` 内部的本地坏链
- 把误生成的 ` 2.md` 副本整理回正常文件名
- 修掉了一个会影响 README 渲染的格式问题
- 新增了 `stations/stations-sourcebook.md` 作为长文信息备份层
- 新增了 `stations/station-manifest.json` 作为结构化底稿
- 新增了 `stations/frontstage-manifest.json` 作为公众首页和 station 页面共享的正式前台数据层
- 新增了 `docs/spaceport-frontstage-data-structure.md` 作为当前前端原型和仓库数据层之间的协作说明

这部分不是终点，只是把后续网页化准备前最明显的低层问题先扫掉。

---

## 现在建议直接开做的 6 件事

1. 重写 `stations/README.md`，把它改成真正的 station 总览页
2. 给每个 `station` 确定统一字段和统一状态
3. 先把 `Balloon Live Space`、`MOVA`、`Research Laboratory` 这三个站点首页重写到可作为网页详情页的程度
4. 补齐中间目录 README，让网页层之后有稳定路由
5. 整理一版 `station manifest`，让网页端和后续 `3D` 都能直接读取
6. 基于同一套字段定义“网页怎么升成 3D”，避免后面做出两套互不相认的系统

---

## 这份路线图的作用

这份文档不是最后的产品说明，而是当前 `SpacePort` 的基础工程说明。

它负责把三件事先钉住：

- `SpacePort` 要网页化
- 网页化不是只做壳，而是先整理站点和数据
- `3D` 是网页层的升维，不是另一套分裂系统

后面不管继续改 README、整理站点、做网页前台还是接 `3D`，都以这份路线图为一份当前底稿。

配套每日执行协议：

- [SpacePort 每日 Station 整理协议](./spaceport-daily-station-ops-protocol.md)
