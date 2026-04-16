# Stations

这里是 `VIRTURA` 当前全部 `stations` 的前台总览页。

这页优先解决三件事：

- 一次把全部 `station` 看全
- 知道每个 `station` 现在处在什么状态
- 知道下一步应该从哪里进入

如果后续为了网页前台把这里写得更短，完整信息不会直接丢掉，而是继续保留在下面两层：

- 完整字稿备份：[Stations Sourcebook](./stations-sourcebook.md)
- 结构化底稿：[station-manifest.json](./station-manifest.json)

对应基础工程路线：

- [SpacePort 网页化与 3D 升维准备路线图](../docs/spaceport-web-3d-preparation-roadmap.md)

---

## 当前读取方式

| 层 | 作用 | 入口 |
|---|---|---|
| Frontstage | 快速看全站点、当前状态和进入路径 | [本页](./README.md) |
| Sourcebook | 保留更长的说明、时间线和原始文字材料 | [stations-sourcebook.md](./stations-sourcebook.md) |
| Manifest | 给网页前台、tracker 和后续 `3D` 用的结构化底稿 | [station-manifest.json](./station-manifest.json) |
| Roadmap | 网页化、统一规范和 `3D` 升维准备路线 | [spaceport-web-3d-preparation-roadmap.md](../docs/spaceport-web-3d-preparation-roadmap.md) |

---

## Station Board

| Station | 作用 | 当前状态 | 最佳入口 |
|---|---|---|---|
| `Space Salon` | 交流客厅、系列活动与公共分享入口 | `运行中` | [space-salon](./space-salon/README.md) |
| `Baloon Live Space` | 线上演出空间、音画实验与 live workflow 积累站 | `运行中` | [baloon-live-space](./baloon-live-space/README.md) |
| `MOVA` | 线上展映、观看室、数字展览生产与观看入口组织站 | `生长中` | [mova](./mova/README.md) |
| `在制内容审计会` | 页面、场景、版本与前台结构的问题拆解线 | `运行中` | [content-audit](./content-audit/README.md) |
| `Digital Library / Digital Stage` | 仓库、归档、前台和内容分发的公开说明线 | `运行中` | [digital-library-stage](./digital-library-stage/README.md) |
| `Research Laboratory` | 研究问题、实验过程与方法沉淀的基础层 | `运行中` | [research-laboratory](./research-laboratory/README.md) |
| `Skill Forge` | 把研究母本压成可调用 skill 的中间层 | `生长中` | [skill-forge](./skill-forge/README.md) |
| `Seleiumeaves` | 较早期数字茶屋方向的档案保留页 | `归档保留` | [seleiumeaves](./seleiumeaves/README.md) |
| `Teahouse Forest Pavilion` | 高保真茶屋 demo、空间导出与观看路线方向页 | `生长中` | [teahouse-forest-pavilion](./teahouse-forest-pavilion/README.md) |

---

## Tracker Board

| Station | Archive | Web | System | 3D |
|---|---|---|---|---|
| `space-salon` | `已建立` | `md-only` | `运行中` | `待准备` |
| `baloon-live-space` | `已建立` | `md-only` | `运行中` | `准备中` |
| `mova` | `已建立` | `md-only` | `生长中` | `准备中` |
| `content-audit` | `已开始` | `md-only` | `运行中` | `待准备` |
| `digital-library-stage` | `已建立` | `md-only` | `运行中` | `准备中` |
| `research-laboratory` | `已建立` | `md-only` | `运行中` | `待准备` |
| `skill-forge` | `已建立` | `md-only` | `生长中` | `待准备` |
| `seleiumeaves` | `已保留` | `md-only` | `归档保留` | `待准备` |
| `teahouse-forest-pavilion` | `已开始` | `md-only` | `生长中` | `准备中` |

---

## 现在从哪里进入

- 想先跟公共活动和现实发生：看 [Space Salon](./space-salon/README.md)、[Baloon Live Space](./baloon-live-space/README.md)、[在制内容审计会](./content-audit/README.md)
- 想先看线上展映和观看入口：看 [MOVA](./mova/README.md)
- 想先看内容整理、前台结构和公开说明：看 [Digital Library / Digital Stage](./digital-library-stage/README.md)
- 想先看研究母本和技能系统：看 [Research Laboratory](./research-laboratory/README.md)、[Skill Forge](./skill-forge/README.md)
- 想先看茶屋与空间方向：看 [Teahouse Forest Pavilion](./teahouse-forest-pavilion/README.md)，再回看 [Seleiumeaves](./seleiumeaves/README.md)

---

## 当前工作项

- 继续把每个 `station` 收成统一的文字界面和 tracker
- 补一版真正可被网页读取的 `station card` 数据层
- 让后续网页前台和 `3D frontstage` 共用同一份 `manifest`
- 逐步把这页从“README 汇总”推进成真正的前台索引
