# Digital Library / Digital Stage 公开说明 01
## 会后执行清单（P0 / P1）
**日期**：2026-04-10  
**来源**：会后逐字稿整理版

## P0｜本周内必须推进
### 1. 固定核心定义
把这次分享里已经讲清楚的三个层级固定下来：

- `Node Library`：本地优先的节点式内容整理器
- `Content System`：对象关系、导出与多人引用的中间层
- `Digital Stage`：读取 library、组织对象、承接展示 / 预演 / 分享的高阶前台

### 2. 把 session 01 归档成长期资料
已进入这一轮归档的包括：
- cleaned transcript
- follow-up plan
- long-form share draft
- html reading version

### 3. 在本地工具里补两个立即可用的小功能
根据逐字稿，这两个点已经很明确：
- 图片 `id` 快速复制
- 图片详情里明确显示：owner / context / contribution / related project

### 4. 把当前“作品 / 节点 / 人 / 场地 / 规格”的输入格式固定下来
最低限度先统一：
- `id`
- `type`
- `title`
- `primaryOwner`
- `primaryContext`
- `visibility`
- `date`
- `relatedWorks`
- `relatedPeople`
- `relatedVenue`
- `notes`

### 5. 把“个人 / 团队 / 共享 / 外部”四种 context 固定成第一轮标准
不要继续自由发挥更多标签，先把这一层统一。

### 6. 把最小导出链条跑顺
先只保证三种导出真的能稳定存在：
- clean JSON
- review CSV
- markdown brief pack

## P1｜下一轮继续推进
### 1. 把长文继续升级成“图文会中阅读页”
建议补：
- 对象流动图
- local → content system → stage 的三段流程图
- stage 读取 library 的示意图
- 一个对象如何同时进入个人站 / 团队站 / media kit 的例子

### 2. 让 Node Library 支持更多媒体
逐字稿里已经明确提到：
- 视频切片
- GIF / 网页预览
- 语音输入后的结构化记录
- 场地资料与屏幕尺寸记录

这些适合进入第二轮。

### 3. 启动 venue / screen database
会中已经明确提出：
- 保存以前做过的屏幕尺寸
- 保存 UV / mapping / 场景比例
- 进一步接到 Unity / Blender 场景与 stage simulation

这条线建议作为 `Digital Stage` 的第一批真实延伸。

### 4. 把“作品基因”写成一条正式方法说明
这次分享里最有价值的新判断之一是：
- 一个对象不只是记录在哪里发生过
- 它还应该记录它的显性性状、隐性性状、方法与可复用部分

这值得单独扩成一篇方法说明。

### 5. 把 skills 和 node-based content workflow 正式打通
逐字稿里已经把技能包说得很明确：
- 新开一个窗口
- 丢一个资源包
- 它就知道如何对象化、导出、分类、更新

下一轮要把这件事变成真正可演示的 workflow。

## 需要同步的更新
### 同步到 `VIRTURA-SpacePort`
- session 01 records
- share draft
- html reading file

### 同步到 `virtura_content_system`
- 会后确认过的核心定义
- 节点对象字段
- local → content → stage 三层关系说明
- 如果适合，可新增一份 `session-01-derived-principles.md`

### 同步到本地 Node Library 工具
- 图片 id 快速复制
- 图片详情字段补全
- context / owner / contribution 标准化
- 空条目与未整理条目批量 review

## 这次逐字稿里最值得长期保留的新增点
1. `Node Library` 被讲成了“不是 CMS、不是图库，而是节点式内容整理器”
2. `Content System` 被明确成“对象关系与导出层”
3. `Digital Stage` 被明确成“读取 library 的前台和高阶视图”
4. 图片后面不只有文件，而是可被继续调用的对象信息
5. 每件作品都可以被理解成一个“文化基因”或“方法基因”
6. venue / screen / mapping / UV / simulation 这条线已经开始长出来
