# 从 Node Library 到 Digital Stage
## Digital Library / Digital Stage 公开说明 01 会后整理版

## 核心推进

这次分享把这条线从“为什么要整理内容”推进到了“怎样让它真正可执行”。

当前可以把整体结构压缩成三层：

1. `Node Library`
   - 本地优先的节点式内容整理器
   - 接住图片、视频、项目记录、场地、人物、说明与规格
   - 把素材整理成可继续调用的对象

2. `Content System`
   - 本地与线上之间的中间层
   - 负责对象关系、ownership、context、relation 与导出格式
   - 让个人、团队、共享与外部对象可以被不同前台读取

3. `Digital Stage`
   - 读取 library 的高阶前台
   - 不只是网页，也可以是节点查看器、场地预演器、屏幕模拟器和阅读界面

## 本次分享补充出来的长期判断

### 页面不是中心，对象才是中心
页面继续存在，但页面应该读取对象，而不是反过来成为内容真相。

### Node Library 不是图库
它不是传统 CMS，也不是看图文件夹，而是把素材变成对象的整理器。

### Content System 是媒介层
它负责把本地对象接到线上，把个人、团队和共享对象之间的关系固定下来。

### Digital Stage 是高阶视图
它建立在 library 之上，用于组织展示、预演、模拟与再阅读。

## 这次逐字稿里最值得保留的新增点

- 图片后面不只是文件，还应有 owner / context / contribution / usage
- 视频也应该进入同一套节点整理链
- venue / screen / UV / mapping / simulation 可以逐步进入 stage 数据库
- 对象应该能导出为 clean JSON、review CSV 和 markdown brief pack
- 本地整理器应该支持图片 id 快速复制与细粒度说明

## 阶段结论

这次分享真正证明的，不是系统已经完成，而是这条线已经从概念阶段进入了可以持续生产和迭代的阶段。

`Node Library → Content System → Digital Stage`

这条链已经足够作为后续研究、工具开发、会中阅读页与节点查看器的共同框架。
