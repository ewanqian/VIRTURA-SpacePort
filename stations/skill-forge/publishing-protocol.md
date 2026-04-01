# Skill Forge Publishing Protocol

> Skill 如何从母本进入 Skill Forge，再进入公开发布层

---

## 目的

这个文件用于规定：  
一个新的 skill，应该怎样从 Research Laboratory 的母本长出来，并在需要时进入 Newsroom、README 或其他公开层。

---

## 一、基本路径

当前统一采用这条路径：

**母本层 → Skill Card → 发布版**

具体对应：

- Research Laboratory：母本、长文、路线、归档
- Skill Forge：skill card、prompt、checklist、registry
- Newsroom / README：公开可读版本

---

## 二、什么内容适合发布为 skill

适合：
- 高频重复动作
- 已经稳定出现的工作流
- 明确输入输出的任务
- 已经有 2 次以上验证价值的模式
- 可以被较弱模型执行的结构化动作

不适合：
- 纯概念宣言
- 一次性灵感
- 尚未收束的路线争论
- 只依赖强模型抽象判断的长文
- 没有明确输入输出的模糊任务

---

## 三、发布步骤

### 1. 确认 source-of-truth
先确认对应母本路径。

### 2. 压缩为 skill card
把长文压成：
- What this skill does
- When to use it
- Required input
- Steps
- Good output
- Failure modes

### 3. 补 registry
把 skill 加入 `registry.md`

### 4. 判断是否需要公开说明
如果这个 skill 对外部协作者、首次访问者或后续公开工作有帮助，则写一份公开说明。

### 5. 判断是否进入 Newsroom
如果这次更新具有阶段性意义、路线意义或公开传播价值，再进入 Newsroom。

---

## 四、公开发布判断标准

一个 skill 适合被写入公开层，至少满足下列条件中的 3 条：

- 已经服务过真实任务
- 适合第一次接触的人理解
- 能代表当前路线判断
- 有助于协作者理解工作方式
- 对后续项目或课程具有可见价值

---

## 五、不要做的事

- 不要把母本直接当 skill 发布
- 不要把内部 rough notes 直接当公开说明
- 不要在 registry 之外偷偷新增大量 skill
- 不要把尚未收束的理论段落直接包装成“已稳定 skill”
