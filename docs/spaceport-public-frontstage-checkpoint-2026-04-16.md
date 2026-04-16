# SpacePort 公众前台 Checkpoint / 2026-04-16

## Purpose

记录这一轮 `SpacePort` 公众前台上线的最小可用状态，避免实现只留在终端会话里。

## Context

这轮工作的目标不是继续补 README 汇总，而是把现有 `stations` 结构真正翻译成一个公众可进入、可点击、可继续扩展的网页前台。

本 checkpoint 已补记第二轮收敛后的状态，避免“已经改到哪一步”只留在终端里。

参考判断：

- 首页需要有明确的公众形象，而不是仓库目录感
- 每个 `station` 都要有自己的独立前台视图
- 网页层要继续站在现有 `station-manifest` 之上，而不是另起一套内容系统

## What Changed

- 新增根目录 [index.html](../index.html)
  - 作为 `SpacePort` 的公众首页与 hash-route 入口
- 新增 [assets/spaceport.js](../assets/spaceport.js)
  - 负责读取 `stations/station-manifest.json`
  - 负责首页与 `#/stations/<slug>` 详情页路由
- 新增 [assets/spaceport.css](../assets/spaceport.css)
  - 建立数字港口式视觉语言、dock registry、signal cards 与 station detail UI
- 新增 [assets/spaceport-frontstage.json](../assets/spaceport-frontstage.json)
  - 作为运行时视觉层，只补充视觉 token、框架层标签与表现层辅助字段
- 新增 [assets/favicon.svg](../assets/favicon.svg)
  - 让静态前台在本地与部署时更完整
- 第二轮继续收敛首页与 station 页
  - 把首页英雄句、导航和 section title 收成更正式的公众语言
  - 把 route cards 改成更轻的 line-based 结构
  - 把 station 页主按钮改成 result-oriented CTA
  - 把公众层 summary 从 `stations/station-manifest.json` 的工作语言里分离出来
  - 把整体边框密度、字级和模块重量进一步压低
- 前台开始正式接入 [stations/frontstage-manifest.json](../stations/frontstage-manifest.json)
  - 首页 paths、station card title / summary、station hero copy 与 public routes 现在优先从 canonical frontstage data 读取
  - `assets/spaceport-frontstage.json` 退回到视觉 token 和表现层辅助
  - 新增 `page.current_feature`，让 event-driven station 可以直接提示“现在先看这个”
- 第三轮继续把首页改成基础设施优先
  - 首页首屏开始直接突出核心 stations，而不是把活动或分类放在最前面
  - `Space Salon`、`Teahouse Forest Pavilion` 与 `Research Laboratory` 被重新拉回核心基础设施层
  - 发布、协议、审阅与归档被明确收进 operational layers
- 第四轮把全站 demo 收成完整可演示状态
  - station 状态、tracker 状态和 source reference 命名继续收成更公开的语言
  - `Current` 标签和主按钮进一步按 station 类型细化
  - station references 开始优先从 frontstage route label 派生可读标题
  - 移动端首页与 station 页做了一轮长滚动和按钮节奏校正
  - `assets` 运行时层不再承担第二份 station registry，只保留视觉运行时字段
- 第五轮开始进入下一阶段 polish
  - 首页加入 `Current Signals` 图像信号层，让演出、展映与研究三条图像线显性出现
  - typography-led 的 featured cards 不再是空白占位，而是改成带 dock code 和 current cue 的设计化 type 卡
  - 首页副标题和 core section copy 再压缩了一轮，更接近公众太空港语气

## Current Usable State

当前已经可以直接做到：

- 进入首页就看见全部 `stations`
- 首页先展示核心基础设施，再进入完整 station index
- 通过首页 dock / card 进入任意 `station`
- 每个 `station` 都有自己的独立详情视图
- 首页已经具备更稳定的公众入口气质，而不只是目录页
- 首页现在更明确地把 `MOVA`、`Baloon Live Space`、`Space Salon`、`Teahouse Forest Pavilion` 与 `Research Laboratory` 当作固定设施来展示
- 基础版全站 demo 已经成立，首页、所有 station 页和关键支持层都能完整演示
- 详情页里可以看到：
  - 站点角色
  - 当前重点
  - tracker
  - 相关站点
  - source-of-truth 文档入口
- 所有站点前台继续复用 [stations/station-manifest.json](../stations/station-manifest.json)

当前已验证：

- 本地桌面端首页
- 本地桌面端 `#/stations/mova`
- 本地桌面端 `#/stations/research-laboratory`
- 本地移动端首页首屏
- 本地移动端 `#/stations/mova`
- 9 个 `station` hash 路由逐个跳转无报错
- canonical frontstage data 与静态前台已完成一轮联调

当前基础 demo 已完成，当前这轮公众前台工作可以视为 `100%` 收口。

后续不再属于“基础 demo 缺口”，而属于下一阶段 polish：

- 更强的首页图像策展节奏
- 更强的图像策展策略
- 更细的 brand-level 文案与 3D 前台衔接

## Related Links

- [SpacePort 网页化与 3D 升维准备路线图](./spaceport-web-3d-preparation-roadmap.md)
- [Stations Manifest](../stations/station-manifest.json)
- [Stations 总览 README](../stations/README.md)

## Next Step

1. 如果继续做下一阶段，就把图像系统从“可用”推进到“策展级”
2. 再继续压一轮 brand-level copy，而不是基础结构修补
3. 再评估 canonical frontstage data 与运行时 snapshot 的派生流程
4. 再评估 GitHub Pages 的实际部署路径与后续 3D frontstage 共用数据方式
