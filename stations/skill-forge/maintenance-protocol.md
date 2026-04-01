# Skill Forge Maintenance Protocol

> Skill 如何维护、更新、归档与下线

---

## 目的

Skill Forge 不是文档堆场。  
这个文件用于规定：

- 谁维护
- 何时更新
- 何时归档
- 何时标记 deprecated
- 如何让后续 Agent 继续接手

---

## 一、维护原则

- registry 永远比数量更重要
- active skill 必须有 source-of-truth
- deprecated skill 不删除，但必须标记
- skill 改动后应更新 registry
- skill 如果反复出错，应进入 `agent-mistakes` 或 logs

---

## 二、维护动作

### 1. 新增 skill
要求：
- 写好 skill file
- 写明 source-of-truth
- 加入 registry
- 指明 status 与 priority

### 2. 更新 skill
要求：
- 修改正文
- 补更新时间
- 如果输入输出发生变化，同步 registry

### 3. 降级 skill
适用：
- 当前不稳定
- 有更好替代
- 已经不符合路线

动作：
- status 改为 `experimental` 或 `deprecated`
- 在 registry 中注明原因

### 4. 删除 skill
当前原则：不做硬删除。  
如果不再使用，先标记 `deprecated`。

---

## 三、维护频率建议

### 高频
- registry 检查
- 链接检查
- front matter 检查

### 中频
- skill 状态更新
- failure modes 补充
- prompt / checklist 同步

### 低频
- taxonomy 调整
- 目录重构
- 大规模归档

---

## 四、日志要求

每次重要变更后，至少应记录：

- 改了什么
- 为什么改
- 哪些输出更稳定了
- 哪些错误仍在重复

日志先放在：
- `stations/skill-forge/logs/`

---

## 五、后续自动化方向

这一层未来可由 RepoForge / Forge 接手的动作包括：

- 扫描 registry 完整性
- 检查 source-of-truth 是否失效
- front matter 校验
- 命名规范检查
- README / 索引的轻更新提示
