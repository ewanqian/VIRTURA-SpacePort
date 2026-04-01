# Skill Forge Overview

> VIRTURA SpacePort 中用于托管、发布、维护和分发可调用 skills 的中间站

---

## 这是什么

Skill Forge 是 `VIRTURA-SpacePort` 中专门承接 skills 的站点单元。

它不负责保存完整研究母本，也不直接承担运行时实现。  
它的作用是把 `Research Laboratory` 中已经形成的方法论、路线判断、工作流经验和高频动作，压缩成可调用、可发布、可维护的 skills，并进一步服务于：

- Agent 协作
- 较弱模型执行
- 训练模拟器
- 交互出版物
- 项目推演器
- 后续运行时层

一句话：

**Research Laboratory 负责母本，Skill Forge 负责技能。**

---

## 为什么现在需要它

当前仓库体系已经具备：

- 研究母本
- 路线收束
- Web-first / MR-optional 判断
- Digital Library / Digital Stage 路线
- 训练模拟器与推演器方向
- 多 agent 协作需求

但如果这些内容只停留在长文、README 和聊天里，就很难：

- 被较弱模型使用
- 被多个 agent 协同调用
- 被持续维护
- 被逐步转成 web-first 工具与运行时

Skill Forge 的存在，就是为了把这些母本压成**可执行的中间层**。

---

## 它在生态中的位置

当前生态可以理解为五层：

1. **Research Laboratory**  
   母本、理论、路线、归档、长期判断

2. **Skill Forge**  
   技能、prompt、checklist、registry、技能树

3. **SceneForge / 未来运行时层**  
   阅读器、训练器、推演器、查看器等 web-first 工具

4. **Newsroom / README / 公开页面**  
   对外发布版、摘要版、首次访问者入口

5. **RepoForge / Forge**  
   自动化运维、扫描、同步、校验、版本治理

---

## 当前已经建立的部分

### 基础治理层
- `AGENTS.md`
- `MEMORY.md`
- `memory/` 系列文件

### Skill Forge 结构层
- `README.md`
- `registry.md`
- `taxonomy.md`
- `prompts/`
- `checklists/`
- `logs/`

### 已建立 skills

#### Bootstrap
- `doc-archive`
- `salon-publish`
- `project-checkpoint`

#### P0
- `longform-to-skill-card`
- `route-update-sync`
- `training-simulator-framework-builder`

#### P1
- `research-reader-builder`
- `project-scenario-engine-builder`

---

## 当前最重要的作用

Skill Forge 当前最重要的作用，不是多写很多技能，而是先稳定这三类能力：

### 1. 母本压缩
把长研究、路线判断、工作流经验压成 skill card。

### 2. 多层同步
把 source-of-truth 的变化同步到不同仓库层，而不全文复制。

### 3. 应用化转译
把知识网络、课程和项目逻辑转成：
- 阅读器结构
- 训练器结构
- 推演器结构

---

## 接下来最值得补的部分

当前下一步最值的不是横向加很多新 skill，而是补齐中枢协调层：

- `skill-router`
- `source-to-public-handoff`
- `merge-gate-reviewer`

这三者会让 Skill Forge 从"技能目录"变成"可调度系统"。

---

## 当前一句话判断

Skill Forge 不是 prompt 仓，也不是理论仓。  
它是 VIRTURA 当前生态中，把研究母本、仓库结构、agent 协作和 web-first 工具层连接起来的关键中间站。