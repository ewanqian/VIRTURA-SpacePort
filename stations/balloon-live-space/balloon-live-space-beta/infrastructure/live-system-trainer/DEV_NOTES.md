# DEV NOTES / 研发笔记

## 这个练习器目前已经验证出的价值

### 1. 它适合拿来解释“分层”

很多时候别人听你讲 Chataigne、Arena、Unity、Blender，会觉得是一堆软件名。

但一旦把它们拆成：

- 总控层
- 演出层
- 空间层
- 资产层

理解速度会快很多。

### 2. 它适合做“练顺顺序”

真实演出里很多出问题的地方，不是不会某个软件，而是顺序和角色混了。

这个练习器最大的好处，是让人先练：

- 谁发 clock
- 谁收 state
- 谁出 live
- 谁兜底

### 3. 它适合做“故障意识训练”

panic、blackout、fallback、tap/resync 这些东西，本来就应该被练。

### 4. 它不能只停留在软件概念卡片

第一版的问题就是太概念化。

改成更像真实窗口之后，用户会更快进入状态，也更容易把练习结果迁移回真实工程。

---

## 当前几个关键判断

### 关于 Chataigne

它更像：

- 总控脑子
- 状态机 / 路由中枢
- clock / state / panic 的管理层

它不应该被误写成“主要视觉引擎”。

### 关于 Arena

它更像：

- clip trigger
- live 层
- BPM / tap / resync
- 音频反应层
- 稳定表演层

### 关于 Unity

它更像：

- 舞台壳
- 空间容器
- 最终演出窗口

### 关于 Blender

它更像：

- 资产实验室
- 可视化源
- 机制研究层

而不是短期内就让它扛全场 live。

### 关于 TouchDesigner

它在当前版本更多是“参考窗口”角色，提醒后续可以往 node graph / perform shell / signal tools 发展，但不必在这个 beta 阶段强行复刻。

---

## 当前版本暴露出的主要问题

1. 关卡完成状态同步不稳定
2. 缺少更强的前情提要
3. 失败机制太弱
4. Notes 的价值还没完全发挥
5. 还没有明确区分“模拟逻辑”和“真实工程逻辑”

---

## Notes 节点为什么很重要

Notes 不是装饰。

它应该承担：

- patch note
- 演出前 checklist
- show profile（club / ambient / hybrid）
- fail-safe 说明
- 与协作者共享语境

也就是说，Notes 节点以后甚至可以长成半个“show memory”。

---

## 这项目值得继续做的原因

它能把“日常练习”变成有结构的事情。

不是随便开软件听歌，而是：

- 开局先同步
- 再开 shell
- 再接 live source
- 再设 fallback
- 再做 section / hand feel 训练

这很适合长期积累。
