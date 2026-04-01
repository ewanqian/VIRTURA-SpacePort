# Skill Forge Registry

> 当前可见 skills 的最小索引

---

## 使用说明

这个文件不是研究主文，而是 Skill Forge 当前可调用技能的索引。

每条 skill 至少应说明：
- 名称
- 类型
- 当前状态
- source-of-truth
- 适用场景
- 输出物

---

## 当前 skills

| Skill | Type | Status | Source of Truth | Best For | Output |
|---|---|---|---|---|---|
| `doc-archive` | publishing / agent-ops | bootstrap | `skills/doc-archive/SKILL.md` | 把聊天、会议纪要、草稿整理成结构化归档 | archive-ready note |
| `salon-publish` | publishing | bootstrap | `skills/salon-publish/SKILL.md` | 把 salon 记录拆成内部记录与公开摘要 | updated salon page + summary |
| `project-checkpoint` | agent-ops / production | bootstrap | `skills/project-checkpoint/SKILL.md` | 保存阶段进度、版本差异与 handoff 状态 | checkpoint note |
| `longform-to-skill-card` | publishing | active | `stations/skill-forge/skills/longform-to-skill-card.md` | 把长文母本压成 skill card | reusable skill card |
| `route-update-sync` | agent-ops | active | `stations/skill-forge/skills/route-update-sync.md` | 把路线更新同步到不同仓库层 | sync pack |
| `training-simulator-framework-builder` | training | active | `stations/skill-forge/skills/training-simulator-framework-builder.md` | 把课程 / 工作流转成训练模拟器框架 | simulator framework |
| `research-reader-builder` | reading | active | `stations/skill-forge/skills/research-reader-builder.md` | 把理论/研究块转成可进入阅读器结构 | reader structure |
| `project-scenario-engine-builder` | scenario | active | `stations/skill-forge/skills/project-scenario-engine-builder.md` | 把项目逻辑转成推演器框架 | scenario framework |

---

## 下一批待起 skills

### P1
- `newsroom-publication-packager`
- `repo-update-light`
- `library-entry-builder`
- `stage-scenario-packager`

---

## 当前判断

当前 registry 还只是最小启动版本。

重点不是数量，而是：
- 名称清楚
- source-of-truth 清楚
- 能被较弱模型稳定执行
- 后续能被 Skill Forge taxonomy 与 RepoForge 扫描接住
