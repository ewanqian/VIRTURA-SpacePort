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

---

## 下一批待起 skills

### P0
- `longform-to-skill-card`
- `route-update-sync`
- `training-simulator-framework-builder`

### P1
- `research-reader-builder`
- `project-scenario-engine-builder`
- `newsroom-publication-packager`
- `repo-update-light`

---

## 当前判断

当前 registry 还只是最小启动版本。

重点不是数量，而是：
- 名称清楚
- source-of-truth 清楚
- 能被较弱模型稳定执行
- 后续能被 Skill Forge taxonomy 与 RepoForge 扫描接住
