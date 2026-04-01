# Skill Forge Taxonomy

> 当前 Skill Forge 的技能分类、状态体系与优先级规则

---

## 这份文件的作用

这个文件用于统一 Skill Forge 中 skill 的分类方式。  
它不是技能正文，也不是 registry，而是定义：

- skill 有哪些类型
- skill 当前处于什么状态
- skill 的优先级怎么判断
- skill 未来会不会进入运行时层

---

## 一、Skill 类型

当前统一分为 6 类：

### 1. Reading
用于把长文、知识网络、研究节点转成可进入的阅读系统。

适合：
- Research Reader
- 节点化理论图谱
- 港口内容分析阅读器
- Digital Library / Digital Stage 说明器

### 2. Training
用于把知识和方法论转成训练器、关卡式模拟器和认知练习系统。

适合：
- 10 天 10 关卡训练模拟器
- 新媒体艺术家模拟器 2.0
- 演出视觉训练器
- AI 短片流程训练器

### 3. Scenario
用于把真实项目逻辑转成推演器、方案比较器和路径模拟系统。

适合：
- 演出项目推演器
- 展览推演器
- 文旅方案推演器
- 品牌空间内容推演器

### 4. Production
用于直接服务生产链和执行链路。

适合：
- Blender 截图出效果图流程
- AI 抠像与样片流程
- 大屏输出流程
- 场景预演输出流程

### 5. Publishing
用于把内部内容转成 README、Newsroom、摘要、入口页和公开文档。

适合：
- Longform → Newsroom article
- Longform → README light update
- Progress archive → summary
- 项目入口页生成

### 6. Agent Ops
用于较弱模型、轻量 Agent 和自动化运维。

适合：
- front matter 补全
- registry 更新
- route update sync
- checklist 执行
- 命名规范检查
- README 链接修补

---

## 二、Skill 状态

每个 skill 当前应至少属于以下一种状态：

### bootstrap
刚建立的初版，结构已明确，但还未经过多轮验证。

### draft
已形成初步内容，但流程或输出还不稳定。

### active
已经可稳定调用，适合进入 registry 公开使用。

### experimental
适合继续测试，但暂不建议大范围依赖。

### deprecated
旧版本或已被替代的 skill，保留仅用于历史参考。

---

## 三、优先级

### P0
必须优先建设，直接影响整个 Skill Forge 是否可运转。

当前建议：
- longform-to-skill-card
- route-update-sync
- training-simulator-framework-builder

### P1
高价值扩展，能直接支撑发布、训练和项目应用。

### P2
有价值，但不应在系统初期优先投入。

### P3
长期探索或展示增强层。

---

## 四、运行时目标

skill 当前可能对应以下运行目标：

- `none`：只作为技能卡存在
- `repo-update`：主要服务仓库更新
- `newsroom`：主要服务公开发布
- `web-tool`：未来适合变成网页工具
- `sceneforge`：未来适合进入 SceneForge 运行时层

---

## 五、当前原则

- 先保证 skill 可执行，再谈运行时化
- 先保证 source-of-truth 清楚，再谈扩张数量
- 先让较弱模型能跑通，再谈复杂抽象能力
- 不把 taxonomy 写成概念堆叠，而要让后续 registry 和运维脚本可直接引用
