# SpacePort Final-Stage Critique & Tasklist / 2026-04-16

## Current Assessment

这一轮二次收敛之后，`SpacePort` 已经从“可运行的站点总表”进入了“可以对外看的公众入口”阶段。

当前主观评估：

- 当前基础全站 demo 完成度约 `100 / 100`
- 如果以“最终品牌级前台 + 后续 3D 延展”来算，仍然属于下一阶段工作

当前已经成立的部分：

- 首页终于更像入口页，而不是 README 汇总页
- station 页已经有更冷静的主次关系
- 公众层文案开始脱离 `station-manifest.json` 的工作语言
- 首屏字级、留白、边框密度和按钮重量都明显收住了
- canonical 前台数据层已经开始真正驱动首页与 station 页
- event-driven station 已经有 `Current` 提示和更明确的首要入口
- 首页开始把核心 stations 作为固定基础设施来展示，而不是把活动层误当成主体
- 全部 station 页已经能以更稳定的公开语言与 references 结构完成演示
- 首页已经开始拥有更明确的图像信号层，而不只是设施列表
- type-led station 卡片开始具备更明显的视觉身份，而不再是空白占位

当前不再属于“基础 demo 缺口”，但仍可继续提升的部分：

- 首页图像系统仍可继续策展化
- 部分 public copy 仍可再压缩到更品牌化的极限状态
- 移动端还可以做更细的视觉级 polish

## Committee Round 02

本轮不再机械地做“十轮十次复述”，而是把批判拆成 10 条持续轨道。每一条都可以继续反复执行，直到足够接近最终版。

第二轮批判委员会的结论主要落在 3 个层面。

### 01. Visual Critique

委员会认为当前版本比前一版已经明显更接近目标，但仍未完全进入“最终品牌页”状态。

高优先级判断：

- 首页首屏仍带一点“展示页”气质，还没有完全进入“定调页”气质
- 首页右侧图像现在是好的视觉锚点，但还没有和整页形成更强的一体关系
- MOVA 等长标题 station 仍会形成比较重的块面
- 右侧 status rail 已经变轻，但仍然偏平均，重点不够强
- 全站边框已经减少，但仍可继续依赖留白而不是分隔线来建立层级

### 02. Copy Critique

委员会对文字的要求非常明确：标题只说名词，副标题只说一句话，按钮只说结果，不说流程。

本轮已经执行的文字修正：

- 首页主句压成 `VIRTURA 的公众入口。`
- 首页 section title 收成 `Routes` 与 `Stations`
- 顶部导航 `Repository` 改成 `Source`
- station 主按钮改成更结果导向的标签
  - `Open Series`
  - `View Exhibition`
  - `Open Research`
  - `Open Registry`
- 首页和 station 页开始优先读取 `stations/frontstage-manifest.json`

仍需继续处理的文字问题：

- `Archive / Platform / Program / Spatial` 仍偏内部 taxonomy
- `Source Documents` 仍然不像完全公开层的命名
- 部分链接标签和 source 文档名还保留 repo 语感

### 03. User Journey Critique

委员会要求必须用真实访客状态来判断，而不是只看静态版式。

主要结论：

- 首次公共访客：
  - 现在已经能知道“这是什么”
  - 但还不完全知道“第一步为什么该点这个”
- 活动链接进入者：
  - 现在进入 MOVA 后会被 `View Current` 和 `Current` 模块正确接住
  - 但这一层还可以继续更具体，例如 `Current Exhibition` 或 `Latest Viewing Route`
- 研究协作者：
  - 现在已经可以更顺地找到入口、source 与 related stations
  - 但 source 层的可读性仍弱于 public overview

## User Entry Simulation

本轮实际模拟了 3 种进入状态，并以本地浏览器截图复查。

### 01. First-Time Public Visitor

路径：

- 打开首页
- 阅读 hero
- 点击 `Browse Stations`
- 继续进入具体 station

结果：

- 首页已经能在第一屏建立单句承诺
- `SpacePort` 作为入口品牌已经比上一版稳定
- `Routes` 和 `Stations` 之间的关系变清楚了

剩余问题：

- `Routes` 仍更像结构分类，而不是访客自我认领路径

### 02. Event-Driven Visitor

路径：

- 直接打开 `#/stations/mova`
- 判断是不是正确页面
- 点击主按钮进入当前展映入口

结果：

- 主按钮已经进一步收成 `View Current`
- 页面已经优先把人送去展映索引，而不是 README 根页
- station 头部现在已经有明确的 `Current` 提示，不再只是系统壳

剩余问题：

- 页面顶部还缺一个更直接的“现在看什么”信号

### 03. Research Collaborator

路径：

- 直接打开 `#/stations/research-laboratory`
- 判断当前状态
- 查 overview、threads、source

结果：

- 这一类用户现在已经能比较快地判断当前站点的位置
- related stations 与 source 路径已经可用

剩余问题：

- source 文档名仍然偏 repo 语法，不够像 public source layer

### 04. Mobile Quick Entry

本轮实际做了移动端首屏截图复查。

当前判断：

- 首页在手机上仍能保持明确的主标题和单句承诺
- 首屏按钮没有失控堆叠
- 图像模块在手机上仍有存在感，但不会压死标题

仍需继续检查：

- 下半区 routes 与 station list 在长滚动中的疲劳感
- station 页在手机上的 rail 与 link list 节奏

## Accepted Changes This Turn

- 把首页 hero 从“功能说明”进一步压成“品牌入口”
- 把 route cards 改成更轻的 line-based routes
- 把 station list 改成更安静的目录结构
- 把 station 页主视觉从大黑盒收成更干净的开放布局
- 把公众层 summary 从 `station-manifest.json` 内部工作语感里剥离出来
- 为各个 station 配了更结果导向的 primary CTA
- 把前台正式接到 `stations/frontstage-manifest.json`
- 给重点 station 补上 `page.current_feature`
- 把首页核心结构改成 `Core Stations / Operational Layers / Station Index`
- 把 `Space Salon`、`Teahouse Forest Pavilion` 与 `Research Laboratory` 拉回核心基础设施层
- 把 station status、tracker status 与 references 命名进一步公众化
- 做了桌面端首页、桌面端 MOVA、桌面端 Research、移动端首页、移动端 MOVA 和全站 station hash 的本地浏览器验证
- 给首页补回 `Current Signals` 图像策展层
- 把没有海报图的 featured station 收成 typography-led signal cards

## 10-Track Final Tasklist

### 01. Brand Language

- 继续统一首页、station 页、按钮、导航的最终版口吻
- 再清掉一轮剩余的系统字段词
- 为每个 station 继续压缩到一句 publishable summary
- 决定中英双语在不同模块中的稳定规则

### 02. Hero Precision

- 继续判断首页 hero 是否还需要更少的文字
- 决定右侧图像是否保留当前尺寸，或进一步缩成更轻的信号
- 检查首屏是否真的只保留了必要动作

### 03. Route Logic

- 把 `Routes` 从结构分类进一步改成访客路径
- 判断是否要加入 `First Visit / Programs / Research` 这种更直接的入口命名
- 检查 route 与 station list 是否存在重复信息

### 04. Station Index

- 继续压缩 station row 的信息密度
- 判断 zone 与 status 是否都需要同时可见
- 检查长标题 station 的行高和换行质量
- 统一 `View` 的动作语义

### 05. Station Hero

- 继续打磨 `Current` 提示的命名、密度和优先级
- 判断是否要为 MOVA、Space Salon 等站点提供不同 hero template
- 检查 CTA 数量是否还能继续减

### 06. Status Language

- 把 `Archive / Platform / Program / Spatial` 改成更面向公众的语义
- 判断是继续保留 4 轨，还是压成 `Current / Archive / Next`
- 让 status 真正帮助进入，而不是只是展示结构

### 07. Public Source Layer

- 把 `Source Documents` 改成更像公开引用层的命名
- 判断 README 名称是否需要转译成可读标题
- 区分 public links 和 repo source 的显示权重

### 08. Image System

- 检查首页图像是否还需要更强的策展感
- 给重点 station 设代表图或当前图像策略
- 避免图像仅作为装饰出现

### 09. Mobile Refinement

- 专门检查 routes、station list、station detail 在手机上的长滚动节奏
- 调整移动端按钮换行与 rail 堆叠
- 处理长标题在手机上的断行质量

### 10. Final QA

- 做一轮纯视觉审查
- 做一轮纯文案审查
- 做一轮纯入口路径审查
- 做一轮移动端审查
- 做一轮链接、标题、按钮、状态语义统一审查

## Suggested Next Execution Order

1. 先做首页与 core stations 的图像策略收尾
2. 再压缩一轮 brand copy
3. 然后做一次纯视觉移动端 polish
4. 再评估 3D frontstage 的共享字段
5. 最后进入下一阶段 QA
