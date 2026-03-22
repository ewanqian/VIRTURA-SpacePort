# AI 实时演出研究

> 艺术、技术与认知科学交叉实验室 · 感知接口研究方向

---

## 定位

本目录承载 VIRTURA Research Laboratory 在**感知接口**方向的核心研究：AI 实时演出系统。

AI 实时演出是"感知迁移"从理论走向实践的关键通道——它研究的是如何在演出现场，让 AI 理解音频、视觉、身体状态，并把这些信号转化为可感知的空间结构变化。

---

## 三层架构

```
硬实时层（beat / onset / BPM）
    ↓
AI 语义层（段落 / 情绪 / 姿态）
    ↓
cue/state 决策层（状态切换 / 镜头调度）
    ↓
SceneForge viewer / 太空气球现场
```

---

## 工具选型

| 类别 | 工具 | 用途 |
|---|---|---|
| 音频实时分析 | aubio, librosa, madmom | beat / onset / downbeat / BPM |
| AI 语义识别 | Essentia, Demucs | auto-tagging / stems 分离 / embedding |
| 视觉识别 | MediaPipe Pose/Face/Gesture | 身体姿态 / 表情 / 手势 |
| 同步通信 | python-osc, Ableton Link | OSC / tempo 同步 |
| 网页推理 | TensorFlow.js, ONNX Runtime Web | 浏览器端模型推理 |
| 实验台 | ComfyUI | 预演分析 / 离线特征抽取 / 接生成流程 |

详细技术选型：[research/ai-modules-research.md](./research/ai-modules-research.md)

---

## 三个优先实验

### 实验一：音频 → state

不做大模型，先做：
- beat / BPM / section / energy / low-mid-high band
- 映射到 SceneForge 的 3~5 个视觉状态

### 实验二：摄像头 → cue

用 MediaPipe 检测：
- head yaw/pitch / mouth open / arms up / one-hand gesture
- 接成 cue 触发、状态切换

### 实验三：离线曲库分析

对 20 首常演曲目提前生成 `track-profile.json`：
- BPM / section / tags / embedding
- 演出时只做实时校正

详细实验方案：[experiments/](experiments/)

---

## 与其他仓库的关系

| 仓库 | 关系 |
|---|---|
| **SceneForge** | AI 模块的产品实现层（本目录提供研究引用） |
| **太空气球** | AI 系统的应用层（具体演出实践） |
| **Newsroom** | 发布层（实验室公告与研究成果发布） |

---

## 导航

- [研究主入口](../README.md)
- [研究主线脉络](../research-threads.md)
- [核心阅读清单](../reading-list.md)
- [AI 模块详细技术选型](./research/ai-modules-research.md)
- [SceneForge AI 路线图](https://github.com/ewanqian/SceneForge/blob/main/docs/ai-modules-roadmap.md)
