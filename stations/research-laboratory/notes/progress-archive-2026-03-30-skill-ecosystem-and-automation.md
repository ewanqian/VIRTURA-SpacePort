---
title: 当前研究归档：Skill 生态、自动化流程与 Digital Library / Digital Stage 技能化
summary: 归档本轮关于 Skill 生态系统、自动化流程、Agent 运维、Digital Library / Digital Stage 技能化，以及低能力模型分发机制的阶段性判断。
status: active
repo_role: source-of-truth
human_owner: Ewan Qian
ai_assisted: true
source_of_truth: self
updated: 2026-03-30
tags:
  - skill-ecosystem
  - automation
  - agent-ops
  - digital-library
  - digital-stage
  - research-laboratory
priority: P0
next_actions:
  - 新建 stations/skill-forge/README.md
  - 新建 stations/skill-forge/registry.md
  - 起草 AGENTS.md 总控文件
  - 起草 3 个核心 skill：longform-to-skill-card / route-update-sync / training-simulator-framework-builder
  - 设计低能力模型可执行的 checklist 与 prompt pack
---

# 当前研究归档：Skill 生态、自动化流程与 Digital Library / Digital Stage 技能化

这份文档用于归档本轮关于 Skill 生态系统、自动化流程、Digital Library / Digital Stage 技能化、控制论循环与 Agent 运维的阶段性研究判断。

它是继“Web-first / MR-optional 路线归档”之后的第二层应用化研究记录，主要回答：

- 如何把知识网络长成可调用的 Skill 生态
- 哪些流程最适合自动化
- 如何把高质量研究文本压成低能力模型也能执行的技能卡和清单
- 如何围绕 Digital Library / Digital Stage 建立可验证、可更新、可运维的 Agent 生产系统

---

## 1. 当前核心判断

当前最值得建设的，不是散乱的 prompt 收藏夹，而是一套：

**母本层 → Skill 层 → Runtime 层 → 发布层 → 运维层**

对应到当前仓库生态：

1. **母本层**：Research Laboratory
2. **Skill 层**：待建立的 Skill Forge
3. **Runtime 层**：SceneForge 等网页端工具仓
4. **发布层**：Newsroom
5. **运维层**：RepoForge + 私有 Forge

这意味着：

- Research Laboratory 继续负责方法论、源文档、长文判断
- Skill Forge 负责把长文压缩成可调用 skills、prompt、checklist、registry
- SceneForge 负责把值得运行时化的 skill 落成网页工具、训练器、推演器和阅读器
- Newsroom 负责公共摘要、版本更新和发布版文章
- RepoForge / Forge 负责扫描、验证、同步、归档、front matter 校验等自动化运维

---

## 2. Skill 生态的五层结构

### 2.1 母本层
位置：Research Laboratory / theory / notes

职责：
- 保存完整长文
- 保存路线判断
- 保存高质量研究文本
- 保存混合作者写作与阶段性归档

原则：
- 适合强模型与人类共同写作
- 不直接给低能力模型执行
- 是 source-of-truth

### 2.2 Skill 层
位置：待建立 `stations/skill-forge/`

职责：
- 把长文压成可执行的技能卡
- 提供 registry、taxonomy、protocol、prompt、checklist
- 让较弱模型也能完成稳定动作

### 2.3 Runtime 层
位置：SceneForge 及未来网页工具仓

职责：
- 让一部分高价值 skill 真正跑起来
- 形成阅读器、训练器、推演器、查看器
- 承担 web-first 的实现层

### 2.4 发布层
位置：Newsroom

职责：
- 把母本或 skill 更新写成可阅读、可传播、可引用的文章
- 形成公开版摘要与对外说明

### 2.5 运维层
位置：RepoForge + 私有 Forge

职责：
- 扫描仓库
- 检查链接和 front matter
- 构建 skill registry
- 生成更新 checklist
- 同步 README、索引和发布清单

---

## 3. 为什么现在需要 Skill Forge

当前仓库体系已经具备：
- 公共前台
- 研究容器
- 发布出口
- 产品仓
- 运维工具壳

但还缺一个中层：

**把研究与工具之间压成可调用单元的站点。**

因此，当前最适合新建的机构单元是：

`stations/skill-forge/`

它不是单纯目录，而是一个站点型单元，负责：

- 托管 skills
- 发布 skills
- 维护 skills
- 让 Agent 与协作者知道“现在有哪些技能可用”

---

## 4. 当前最值得先做的 6 类 Skill

### 4.1 Reading Skills
把高质量研究和知识网络压成可进入阅读系统。

适合：
- Research Reader
- 理论节点浏览器
- 港口内容分析阅读器
- Digital Library / Digital Stage 说明器

### 4.2 Training Skills
把课程和方法论压成关卡式训练。

适合：
- 10 天 10 关卡训练模拟器
- 新媒体艺术家模拟器 2.0
- 演出视觉训练器
- AI 短片工作流训练器

### 4.3 Scenario Skills
把真实项目逻辑压成推演器。

适合：
- 白天展览 / 晚上演出双模式空间推演
- 文旅项目推演
- 品牌空间内容推演
- 数字舞台项目推演

### 4.4 Production Skills
直接服务生产链。

适合：
- Blender 截图出效果图流程
- AI 抠像与样片流程
- 超宽网页 / 大屏内容输出流程
- 演出内容预演流程

### 4.5 Publishing Skills
服务 Newsroom、README、公开发布。

适合：
- Longform → Newsroom article
- Longform → README light update
- Progress archive → public summary
- 路线更新同步包

### 4.6 Agent Ops Skills
专门给低能力模型 / 轻量 Agent 用。

适合：
- front matter 补全
- 目录扫描
- registry 更新
- 版本比对
- checklist 执行
- README 链接修补

---

## 5. 当前最值得自动化的流程

### 5.1 路线更新同步
当路线变化时，自动生成：
- SpacePort 主文更新建议
- Newsroom 发布版草稿
- portfolio 轻更新建议
- Collective 轻更新建议

### 5.2 Longform → Skill Card
把 Research Laboratory 长文压成可执行 skill。

### 5.3 Longform → Public Summary
把方法论文档压成对外文章、摘要和 README 轻入口。

### 5.4 Registry 维护
自动扫描：
- 当前有哪些 skills
- 哪些是 active / deprecated
- 哪些缺 front matter
- 哪些 source_of_truth 已改变

### 5.5 Progress Archive → Checklist
把阶段性归档自动转成：
- 下一步动作清单
- 相关仓库更新清单
- 需要补 memory 的点

### 5.6 README / 入口页轻更新
自动检查：
- 是否缺新入口
- 是否存在孤立页面
- 是否缺对首次访问者友好的入口

---

## 6. 如何让较弱模型也能参与运维

当前关键判断：

**不要让弱模型直接读母本。**

应采用三层压缩：

### 第一层：母本
位置：Research Laboratory / theory / notes  
特点：完整、深、适合人类与强模型协作

### 第二层：Skill Card
位置：Skill Forge  
特点：短、结构化、明确输入输出、可调用

### 第三层：Checklist / Prompt Pack
位置：Skill Forge / prompts / checklists  
特点：步骤化、傻瓜化、适合弱模型执行

因此，低能力模型不负责思辨，不负责路线收束，只负责：
- front matter 校验
- registry 更新
- checklist 执行
- README 轻修补
- 长文转摘要草稿

---

## 7. Skill 文件的标准结构

每个 skill 文件应至少包含：

- title
- skill_id
- skill_type
- status
- priority
- human_owner
- ai_assisted
- source_of_truth
- input_type
- output_type
- runtime_target
- updated

正文只保留六段：

1. What this skill does
2. When to use it
3. Required input
4. Steps
5. Good output
6. Failure modes

这样可以确保：
- 强模型可以审核
- 弱模型可以执行
- Agent 可以扫描与路由
- RepoForge / Forge 可做自动化校验

---

## 8. Skill Forge 的最小目录建议

```text
stations/
└── skill-forge/
    ├── README.md
    ├── registry.md
    ├── taxonomy.md
    ├── publishing-protocol.md
    ├── maintenance-protocol.md
    ├── skills/
    │   ├── reading/
    │   ├── training/
    │   ├── scenario/
    │   ├── production/
    │   ├── publishing/
    │   └── agent-ops/
    ├── prompts/
    ├── checklists/
    └── logs/
```

---

## 9. 当前最值得先起的 7 个核心 Skill

### P0
1. `longform-to-skill-card`
2. `route-update-sync`
3. `training-simulator-framework-builder`

### P1
4. `research-reader-builder`
5. `project-scenario-engine-builder`
6. `newsroom-publication-packager`
7. `repo-update-light`

这些 skill 的排序依据是：
- 能否直接把当前研究转成应用层
- 能否减少重复劳动
- 能否帮助弱模型进入生产链
- 能否让自动化真正跑起来

---

## 10. 控制论视角下的循环设计

当前目标不是“多做几个自动化脚本”，而是建立一个可验证的循环：

### 输入
- 聊天记录
- 长文研究
- 项目复盘
- 新的 brief / 项目需求

### 压缩
- route judgment
- skill cards
- checklist / prompt pack

### 输出
- 阅读器
- 训练器
- 推演器
- README 更新
- Newsroom 摘要

### 反馈
- 复盘
- 失败模式记录
- skill 升级
- memory 文件补充
- registry 更新

### 再部署
- SceneForge runtime
- RepoForge / Forge 运维脚本
- 新一轮 prompt / checklist 调整

这个循环的关键在于：

**每完成一轮任务，都要能反哺 skill / memory / script，而不是只完成一次性输出。**

---

## 11. Digital Library / Digital Stage 如何技能化

当前最值得被转成 skills 的，不是整个 Library 本身，而是围绕它的几个动作：

### 11.1 Library Entry Builder
把一个复杂目录压成对首次访问者可读的入口页。

### 11.2 Archive Structurer
把聊天、会议纪要、草稿、作品判断整理成结构化归档。

### 11.3 Stage Scenario Packager
把演出、舞台、场景、版本切换与 cue/event 逻辑压成可展示、可推演材料。

### 11.4 Route Summary Generator
把长研究压成公共摘要和 README 入口。

### 11.5 Versioned Checkpoint Maker
在每轮更新后自动记录：
- 做了什么
- 改了哪些文件
- 下一步是什么
- 哪些经验值得进 memory

---

## 12. 当前阶段最重要的不是写更多 prompt

当前阶段最重要的是：

1. 建立 `AGENTS.md` 总控文件
2. 建立 `stations/skill-forge/README.md`
3. 建立 `stations/skill-forge/registry.md`
4. 先写 3 个 P0 skill
5. 建立一套低能力模型也能执行的 checklist 和 prompt pack

如果这五步成立，Skill 生态就开始可运转；否则仍然只是零散的高质量聊天记录。

---

## 13. 一句话总结

当前研究的重点，不是让 Agent 更聪明，而是让仓库体系、长文母本、skills、runtime 和运维层之间形成一个：

**可压缩、可调用、可验证、可反馈、可持续升级的控制论循环。**

Skill Forge 将是这个循环中最关键的中间层。
