# AGENT HANDOFF / 交接说明

## 1. 项目目标

把 `Live System Trainer` 从一个可玩的说明页，继续发展成一个：

- 可讲解
- 可训练
- 可速通
- 可对照真实演出问题
- 可作为 Beta 基础设施的一部分

的前端练习器。

## 2. 当前版本状态

当前文件：`live-system-trainer-v2.html`

当前状态：

- 已经比最初版更像真实软件逻辑
- 已加入更接近 Arena / Chataigne / Unity / TouchDesigner / AKAI 的近似 UI
- 十关流程已经能走通大部分逻辑
- 仍然存在完成判定、情境包装、失败机制、说明层不足的问题

## 3. 项目边界

### 不要做成：

- 原软件 1:1 UI 复刻
- 重资产多框架 app
- 真正远程控制外部软件的 production 工具（至少不是短期目标）

### 应该保持成：

- 单页 / 轻量 / 浏览器可开
- 方便录屏、分享、讲解
- 逻辑可扩展
- 以后可以逐步拆成模块

## 4. 当前核心抽象

这个项目目前最重要的不是 UI，而是它抽出来的中间语言：

- `clock`
- `section`
- `state`
- `energy`
- `manual override`
- `fail-safe`

这些概念应该贯穿 UI、关卡、日志、notes、briefing、roadmap。

## 5. 优先开发任务（按顺序）

### P0

1. 修复 level completion 不稳定
2. 增加关卡 checklist 的实时反馈
3. 给每关补一句“现实对应 / why this matters”
4. 给每关补 brief intro

### P1

1. 增加失败条件
2. 增加过关 debrief
3. 增加 speedrun mode
4. 增加 stress mode（随机漂拍 / source lost / fallback 触发）

### P2

1. 更贴近真实型号的 AKAI 布局
2. 更好的 Arena clip / layer 组织
3. 更好的 TD /perform 参考窗口
4. 导入 / 导出 notes preset

## 6. UI / 交互原则

- 深色、控制台感
- 可拖拽窗口
- 不能过于炫技，优先清楚
- 一个窗口只承担一个清楚角色
- 演出感 > 产品化堆料感

## 7. 内容原则

每个关卡都应该更像：

> “你在真实演出里会遇到的某个问题”

而不是：

> “请打开 A、B、C 三个按钮”

所以建议每关结构是：

1. 前情提要
2. 本关目标
3. 操作步骤
4. 危机 / 失败条件
5. 过关说明
6. 现实映射

## 8. 建议下一次提交的命名

- `v2.1-logic-fix`
- `v2.2-briefing-debrief`
- `v2.3-stress-mode`
- `v3.0-template-system`

## 9. 如果迁移到多文件工程

建议拆分为：

```text
src/
├─ data/
│  ├─ levels.js
│  ├─ windows.js
│  └─ presets.js
├─ ui/
│  ├─ window-manager.js
│  ├─ controller-akai.js
│  ├─ arena-panel.js
│  ├─ chataigne-panel.js
│  └─ notes-panel.js
├─ state/
│  ├─ app-state.js
│  └─ validation.js
└─ main.js
```

## 10. 最后一句

请始终记住：

这个项目的核心不是“模拟软件”，而是“训练一套现场系统的组织能力”。
