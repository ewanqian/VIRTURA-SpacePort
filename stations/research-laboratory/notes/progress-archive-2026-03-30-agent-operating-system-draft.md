---
title: 当前研究归档：Agent Operating System 初版与仓库治理文本结构
summary: 归档本轮关于 AGENTS.md、MEMORY.md、skills、memory files、脚本说明、复盘结构的初版设计，用于后续接入 Skill Forge 与自动化运维层。
status: active
repo_role: source-of-truth
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: self
updated: 2026-03-30
tags:
  - agent-operating-system
  - repository-governance
  - skills
  - memory
  - automation
  - research-laboratory
priority: P0
next_actions:
  - 将 AGENTS.md 放入 VIRTURA-SpacePort 根目录
  - 建立 memory/ 目录与 5 个 topic files
  - 建立 skills/ 目录与 3 个核心 skill
  - 将这套结构接入 stations/skill-forge/
  - 后续由 RepoForge / Forge 接手扫描与校验
---

# 当前研究归档：Agent Operating System 初版与仓库治理文本结构

这份文档用于归档本轮关于 Agent Operating System 的初版设计。

当前目标不是“让 AI 更聪明”，而是让仓库开始具备：

- 规矩
- 记忆
- 可继承性
- 可调用的 skills
- 可自动化的固定流程

这套结构后续将作为 Skill Forge、RepoForge 与私有 Forge 之间的接口层。

---

## 1. 当前最值得沉淀的不是 prompt，而是 5 类文本

### 1.1 总控文件
建议文件：`AGENTS.md`

作用：
- 告诉 agent 这个仓库是干什么的
- 哪些流程是强制的
- 哪些输出格式必须遵守
- 哪些文件是入口
- 做完后要如何验证、归档、更新

当前判断：
**AGENTS.md = VIRTURA 的工作宪法**

### 1.2 技能文件
建议目录：`skills/`

作用：
- 把高频工作压成可执行的专长模块
- 每个 skill 有用途、触发条件、输入、步骤、输出、检查

### 1.3 记忆文件
建议文件：`MEMORY.md` 与 `memory/` 目录

作用：
- 保存长期工作记忆
- 压缩经验、规则、失败模式与命名规范
- 让后续 agent 下次少犯错

### 1.4 自动化脚本说明文件
建议目录：`scripts/`

作用：
- 把重复劳动从语言变成动作
- 模型负责上下文判断
- 脚本负责确定性动作

### 1.5 复盘文件
建议目录：`retrospectives/` 或 `logs/agent-retros/`

作用：
- 让每轮 agent 工作反哺 skill / memory / scripts
- 把一次成功或失败转成长期可复用知识

---

## 2. 当前推荐的最小文件结构

```text
/AGENTS.md
/MEMORY.md

/memory/
  patterns.md
  archive-rules.md
  publishing.md
  agent-mistakes.md
  naming-conventions.md

/skills/
  /doc-archive/
    SKILL.md
  /salon-publish/
    SKILL.md
  /project-checkpoint/
    SKILL.md
```

这是当前阶段最适合落地的初版，不应一开始做得过大。

---

## 3. AGENTS.md 的核心判断

AGENTS.md 不应写成愿景文，而应写成：

- 仓库目的
- 核心原则
- 三层 working model
- 必须遵守的 workflow
- 输出期望
- 禁止事项
- 完成前 checklist

当前适合纳入的原则：

- Preserve structure before adding volume
- Important output should exist in the repo, not only in chats
- Prefer updating existing structured documents over creating scattered new files
- Public-facing pages must remain readable to first-time visitors
- Every meaningful project should have entry page / context / checkpoint / links / next-step hints

---

## 4. MEMORY 结构的核心判断

当前不适合把所有记忆堆在一个文件里。

推荐结构：
- `MEMORY.md`：总索引，只写核心原则
- `memory/patterns.md`：常用模式
- `memory/archive-rules.md`：归档规则
- `memory/publishing.md`：公开写作规则
- `memory/agent-mistakes.md`：高频错误
- `memory/naming-conventions.md`：命名规范

一句话：

**记忆文件不是日记，是让 agent 下次少犯错的压缩知识。**

---

## 5. 当前最值得先做的 3 个 skills

### 5.1 doc-archive
作用：
把聊天、会议纪要、草稿整理成结构化 Markdown，并挂到正确目录。

### 5.2 salon-publish
作用：
把 Space Salon / 活动内容更新到站点入口、活动页、摘要页。

### 5.3 project-checkpoint
作用：
在每次阶段性工作后自动生成：
- 做了什么
- 版本差异
- 下一步
- 相关文件链接

---

## 6. Skill 文件最小结构

每个 `SKILL.md` 当前至少包含：

- Description
- Use when
- Inputs
- Steps
- Outputs
- Checklist

这保证：
- 强模型可扩写
- 弱模型可执行
- 后续可迁移进 Skill Forge registry

---

## 7. Memory 文件当前应保存哪些内容

### patterns.md
保存：
- raw to structured
- internal to public
- checkpoint preservation
- library to stage

### archive-rules.md
保存：
- archive with context, not only files
- 归档不是 dump
- 每个重要归档都要可理解、可接手、可连接未来更新

### publishing.md
保存：
- public-facing text 是 entry point，不是内部 dump
- 起始句要简单有效
- public page 应具备 title / one-sentence description / why / key points / next

### agent-mistakes.md
保存：
- 新建了不该新建的文件
- 丢失主判断
- 没有保持 repo logic
- public / internal 混写
- 缺链接、缺 next-step path

### naming-conventions.md
保存：
- lowercase where possible
- hyphen-separated filenames
- 避免 new.md / temp.md / final-final.md 这类命名

---

## 8. 为什么这套结构适合当前仓库体系

### 与 Research Laboratory 的关系
Research Laboratory 负责母本、路线、研究与归档；AGENTS / MEMORY / skills 是其治理与操作层延伸。

### 与 Skill Forge 的关系
后续 `skills/` 目录会迁移或映射进 `stations/skill-forge/` 的 skill registry 中。

### 与 RepoForge / Forge 的关系
RepoForge 适合后续接手：
- front matter 检查
- skill registry 扫描
- README 轻更新
- 命名与目录校验

### 与 Newsroom 的关系
Newsroom 不是 source-of-truth，但可调用 `salon-publish`、`doc-archive`、`project-checkpoint` 生成公开层摘要和发布文本。

---

## 9. 当前阶段最重要的不是写更多 prompt

当前最值钱的动作只有三件：

1. 建 `AGENTS.md`
2. 建 `MEMORY.md` + `memory/` 目录
3. 建 3 个核心 skill

如果这三件成立，仓库就开始具备：
- 规矩
- 记忆
- 可继承性
- 可自动化升级的入口

否则，仍然只是零散的高质量聊天记录。

---

## 10. 一句话总结

这套系统的作用，不是让 AI “更聪明”，而是让当前仓库开始具备：

**规则、记忆、可调用 skills、可自动化动作，以及可持续增长的操作系统雏形。**
