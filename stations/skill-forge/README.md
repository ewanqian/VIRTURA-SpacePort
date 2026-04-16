# Skill Forge

> 给 Agent、协作者与后续运行时使用的技能托管与发布站点

---

## 当前状态

- Station 状态：`生长中`
- Web 状态：`md-only`
- 3D 准备：`待准备`

当前版本仍处于 `bootstrap` 阶段，但已经建立起第一批真正可调用的核心 skills、prompts、checklists 和 registry。

---

## 这个 station 现在负责什么

Skill Forge 不是保存完整研究长文的地方，而是把 `Research Laboratory` 里已经形成的方法、路线判断、工作流经验与高频动作压成可调用单元。

一句话：

**Research Laboratory 负责母本，Skill Forge 负责技能。**

它当前主要承担四件事：

1. 托管 skills
2. 发布 skills
3. 维护 skills
4. 分发给较弱模型 / 轻量 Agent

---

## 最值得先看的入口

- [registry](./registry.md)
- [taxonomy](./taxonomy.md)
- [skill overview](./skill-overview.md)
- [skill tree](./skill-tree.md)
- [publishing protocol](./publishing-protocol.md)
- [maintenance protocol](./maintenance-protocol.md)

---

## Tracker

| 维度 | 状态 | 说明 |
|---|---|---|
| Archive | `已建立` | registry、taxonomy、prompts、checklists、skills 已成形 |
| Web | `md-only` | 很适合最早做成系统面板式网页界面 |
| System | `生长中` | 当前仍处于 bootstrap 阶段 |
| 3D | `待准备` | 优先级低于网页界面，但后续可接入信息城市式前台 |

---

## 当前最优先的 skill 类型

### Reading Skills
把高质量研究压成可进入阅读系统。

### Training Skills
把课程和知识网络压成关卡式训练器。

### Scenario Skills
把真实项目逻辑压成推演器。

### Production Skills
服务生产线与确定性流程。

### Publishing Skills
服务 README、Newsroom 与公开摘要。

### Agent Ops Skills
服务较弱模型、轻量 Agent 与自动化运维。

---

## 当前路线

Skill Forge 是 `Web-first / MR-optional` 路线中的中间层。

当前优先级为：

1. 交互出版物 / 节点化阅读器
2. 训练模拟器 / 智力装备
3. 项目推演器 / Digital Library 与 Digital Stage 工具层
4. MR / 空间计算展示层（可选）

因此，Skill Forge 的职责是：

**先把知识、路径和动作压成可调用单元，再决定哪些值得进入 SceneForge 等运行时层。**

---

## 当前目录建议

```text
stations/
└── skill-forge/
    ├── README.md
    ├── registry.md
    ├── taxonomy.md
    ├── publishing-protocol.md
    ├── maintenance-protocol.md
    ├── skills/
    ├── prompts/
    ├── checklists/
    └── logs/
```

---

## 相关站点

- [Research Laboratory](../research-laboratory/README.md)
- [Digital Library / Digital Stage](../digital-library-stage/README.md)
- [Stations 首页](../README.md)

---

## 第一批 P0 核心 skills

当前已建立的 3 个 P0 核心 skills 分别承担：

1. **母本压缩** (`longform-to-skill-card`)
   - 把长文母本、路线归档、理论笔记压成可执行的 skill card
2. **路线同步** (`route-update-sync`)
   - 把路线判断同步到不同仓库层（SpacePort / Newsroom / portfolio / Collective）
3. **训练框架生成** (`training-simulator-framework-builder`)
   - 把课程、工作流、知识网络转成 web-first 训练模拟器框架

下一阶段才会进入更细的 reading / scenario / newsroom packaging 方向。

---

## 当前已形成的应用化路径

当前 Skill Forge 已形成两条更具体的应用化路径：

1. **Research Reader**
   - 让理论、归档、知识网络更适合被进入和阅读
   - 相关 skill：`research-reader-builder`

2. **Project Scenario Engine**
   - 让项目逻辑、条件、风险和分支更适合被推演和比较
   - 相关 skill：`project-scenario-engine-builder`

---

## 更多阅读

- [Skill Overview](./skill-overview.md) —— Skill Forge 整体介绍与当前状态
- [Skill Tree](./skill-tree.md) —— 当前 Skill Forge 能力树、优先级和发展方向
