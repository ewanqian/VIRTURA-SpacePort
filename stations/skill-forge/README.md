# Skill Forge

> 给 Agent、协作者与后续运行时使用的技能托管与发布站点

---

## 这是什么

Skill Forge 是 `VIRTURA-SpacePort` 中一个新的站点单元。

它的作用不是保存完整研究长文，而是把 `Research Laboratory` 中已经形成的方法论、路线判断、工作流经验与高频动作，压缩成可调用、可发布、可维护的 skills。

一句话：

**Research Laboratory 负责母本，Skill Forge 负责技能。**

---

## 它在生态里做什么

Skill Forge 当前主要承担四件事：

1. **托管 skills**  
   把训练模拟器、交互出版物、智力装备包、项目推演器与高频运维动作整理成可执行 skill。

2. **发布 skills**  
   让 Agent 与协作者能清楚知道当前有哪些技能可用。

3. **维护 skills**  
   记录状态、优先级、source-of-truth、适用场景与失败模式。

4. **分发给较弱模型 / 轻量 Agent**  
   把高质量研究文本压成结构化 skill 卡、checklist 和 prompt pack，让能力较低的模型也能稳定完成更新与运维动作。

---

## 它不做什么

Skill Forge 不承担：

- 完整理论主文写作
- 替代 Research Laboratory 的源文档角色
- 直接成为重型运行时平台
- 存放未经整理的 prompt 杂项

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

**先把知识、路径和动作压成可调用单元，再决定哪些值得进入 SceneForge 等运行时层。

---

## 目录建议

当前建议结构：

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

## 当前状态

当前版本处于 **bootstrap** 阶段，但已建立第一批真正可调用的核心 skills。

重点不是一次性堆很多 skill，而是先把：

- registry
- taxonomy
- 3 个 P0 核心 skill
- 基础 memory / AGENTS 结构

真正建起来。

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
