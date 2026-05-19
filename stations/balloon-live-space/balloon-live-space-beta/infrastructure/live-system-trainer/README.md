# Live System Trainer / 现场演出系统练习器

> 状态：`Beta / Prototype / Internal Training Tool`
> 
> 所属项目线：`stations/balloon-live-space/balloon-live-space-beta`
> 
> 当前版本：`v2-realistic-ui`

## 这是什么

`Live System Trainer` 是一个单文件 HTML 练习器，用来把一套现场视觉 / 数字舞台系统拆成可练的层级与关卡。

它并不是原软件的完整复刻，而是一个 **更接近真实工作流的功能近似模拟器**：

- 总控层：`Chataigne`
- 演出层：`Resolume Arena`
- 空间层：`Unity`
- 资产层：`Blender`
- 控制器层：`AKAI APC-style MIDI Controller`
- 说明层：`Ops Notes / Patch Notes`

目标不是做“软件教学页面”，而是做一个能帮助排练、讲解、内化系统分层思维的训练工具。

---

## 为什么它应该放在 balloon-live-space-beta 下面

这个练习器更适合放在 `balloon-live-space-beta` 下，而不是 alpha 或独立仓库，原因有三个：

1. **它服务的是 Beta 阶段的核心任务**：修正形象、积累时长、优化手感。
2. **它直接对应 balloon-live-space 的下一步**：state、timeline、MIDI、clips、BPM / tap / resync、多空间模板。
3. **它更像基础设施和练习系统**，不是一次性文档，也不是单场演出素材。

推荐路径：

```text
stations/
└─ balloon-live-space/
   └─ balloon-live-space-beta/
      └─ infrastructure/
         └─ live-system-trainer/
            ├─ README.md
            ├─ live-system-trainer-v2.html
            ├─ AGENT_HANDOFF.md
            ├─ DEV_NOTES.md
            ├─ ROADMAP_NEXT.md
            └─ CHANGELOG.md
```

---

## 当前版本包含什么

### 1. 可拖拽窗口

当前版本包含以下窗口节点：

- Ableton Live（时钟 / section / macro 抽象输出）
- Chataigne（route clock / state machine / dashboard / panic）
- Resolume Arena（clip bank / BPM sync / tap & resync / FFT）
- Unity Stage Shell（stage mode / OSC in / blackout fallback）
- Blender A / B / C（资产或可视化源）
- TouchDesigner /perform（作为未来扩展参考窗口）
- AKAI APC-style MIDI Controller（pads + faders）
- Ops Notes / Patch Notes（演出说明 / patch note）

### 2. 十个训练关卡

关卡从 `Clock Online` 到 `20-minute Rehearsal`，用来训练：

- 主时钟归属
- route / sync 基本链路
- Chataigne → Unity 控制
- Blender → Arena → 演出层的接入逻辑
- fail-safe / panic / blackout
- MIDI 控制器映射
- section language / music semantics
- tap / resync 救回能力
- 不同艺人模板
- 20 分钟 rehearsal 级的系统拼接

### 3. 近似真实的软件逻辑

v2 不是抽象色块版，而是改成了更接近真实工作流的 UI：

- Arena 更像 clip / layer / transport / FFT 面板
- Chataigne 更像总控中枢
- AKAI 控制器可以看到推子和 pad
- Notes 节点变成了可编辑的 patch note 区域

---

## 它不是什么

为了避免误解，这个项目需要明确说明：

- 它 **不是** Resolume / Chataigne / Unity / TouchDesigner 的 1:1 UI 复刻。
- 它 **不是** 真正接入这些软件 API 的实时远程控制台。
- 它 **不是** 用来证明“真实工程一定这样接”的最终标准答案。

它是一个：

> 用接近真实软件语言和舞台问题，训练系统思维、操作顺序、故障意识和 rehearsal 感的模拟器。

---

## 当前适用场景

### 适合

- 公开分享时，给别人快速解释这套系统怎么分层
- 在进入真实工程前，先练一遍逻辑与顺序
- 对外部协作者说明：谁负责 clock、谁负责 state、谁负责 live、谁负责 space
- 给未来 agent / Cursor 工程师一个清楚的起点

### 不适合

- 直接替代真实演出排练
- 作为软件功能事实表
- 作为 TD、Arena、Chataigne 的完整入门教程

---

## 建议怎么在 GitHub 展示

### 仓库内定位

建议把它作为：

`Balloon Live Space Beta → infrastructure → live-system-trainer`

### 对外描述

推荐一句话：

> 一个把 Chataigne / Arena / Unity / Blender 现场系统拆成十个训练关卡的 beta 练习器，用来练系统分层、时钟逻辑、fail-safe 和 rehearsal 手感。

### README 首页可放内容

- 一张截图或录屏 GIF
- 一句项目定位
- 当前版本状态：`beta`
- 适用场景
- 接下来要修什么

---

## 本地运行

这是一个单文件 HTML 项目。

### 直接打开

```bash
open live-system-trainer-v2.html
```

或双击文件直接在浏览器打开。

### 如果后面拆成多文件

建议改为：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000/
```

---

## 建议给 Cursor / Agent 的第一批任务

1. 修复关卡完成判定不稳定的问题
2. 增加每关前情提要（briefing）
3. 增加失败机制与 debrief
4. 让 AKAI 控制器更贴近真实型号
5. 让 Arena / TD / Chataigne 的近似 UI 更统一
6. 增加模板模式：ambient / club / hybrid live
7. 逐步把“模拟逻辑”和“真实工程逻辑”分开展示

---

## 文件说明

- `live-system-trainer-v2.html`：当前版本主文件
- `AGENT_HANDOFF.md`：给后续 agent / Cursor 的交接说明
- `DEV_NOTES.md`：本项目目前积累出的研发心得
- `ROADMAP_NEXT.md`：下一版本路线图
- `CHANGELOG.md`：本轮版本变更记录

---

## 当前结论

这个项目最有价值的地方，不是“做了一个网页”，而是把一套现场系统抽成了可以训练的中间层：

- clock
- section
- state
- energy
- manual override
- fail-safe

等这套中间层练顺以后，再迁移到真实的 Chataigne / Arena / Unity / Blender 工程里，价值才会开始变大。
