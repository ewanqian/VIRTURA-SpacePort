# AI 模块技术选型研究报告

> VIRTURA Research Laboratory · 感知接口方向 · 2026-03-23

---

## 核心结论

### 1. 定位

**AI 在 SceneForge 和太空气球中最适合的角色：不是主控脑，而是分析层、识别层和辅助决策层。**

### 2. 架构：三层混合系统

```
音频/视频输入
    ↓
特征提取（规则层）
    ↓
AI 语义识别（AI 层）
    ↓
置信度过滤
    ↓
cue/state 引擎（决策层）
    ↓
SceneForge viewer / previs
```

---

## 技术选型清单

### 低层实时分析器（非 AI）

| 工具 | 用途 | 说明 |
|---|---|---|
| **aubio** | onset、pitch、beat、notes、MFCC | 老牌开源库，命令行和 Python 模块 |
| **librosa** | tempo、beat、onset、频谱 | 更适合原型和离线/轻实时原型 |
| **madmom** | downbeat/bar | RNNDownBeatProcessor 输出 beat 和 downbeat 概率 |

### AI 语义识别层

| 工具 | 用途 | 说明 |
|---|---|---|
| **Essentia** | 高层音乐描述、auto-tagging、embedding、音频事件识别 | 开源音频分析/MIR 库，支持 C++/Python/JS，有 TensorFlow.js/ONNX 模型 |
| **Demucs** | stems 分离（vocals/drums/bass/other） | 最实用的本地开源选择 |
| **Basic Pitch (Spotify)** | 音频转 MIDI | 轻量、多音多乐器，适合预演分析 |

### 视觉识别层

| 工具 | 用途 | 说明 |
|---|---|---|
| **MediaPipe Face Landmarker** | 3D face landmarks、blendshape scores | 识别人脸表情，做特效和虚拟头像 |
| **MediaPipe Pose Landmarker** | 身体关键点、3D 世界坐标姿态点 | web 端建议用 web workers 避免阻塞主线程 |
| **MediaPipe Gesture Recognizer** | 手势分类、手部 landmarks | 支持实时流 |

### 同步与通信层

| 工具 | 用途 | 说明 |
|---|---|---|
| **python-osc** | OSC client/server | 纯 Python，支持 UDP/TCP |
| **Ableton Link** | 同步 beat/tempo/phase | 局域网自动发现，多人可独立启停改 tempo |

### 网页推理层

| 工具 | 用途 | 说明 |
|---|---|---|
| **TensorFlow.js** | 浏览器和 Node.js 跑模型 | — |
| **ONNX Runtime Web** | 网页推理 | 可运行在 cloud/edge/mobile/web browsers |

---

## 模块认知框架：6 类模块

| 模块类型 | 内容 |
|---|---|
| 1. 信号模块 | beat / onset / loudness / bands / downbeat |
| 2. 分离模块 | drums / bass / vocals / other |
| 3. 语义模块 | tags / embeddings / mood / audio events |
| 4. 音符模块 | pitch / MIDI / note density |
| 5. 传输模块 | OSC / Link / JSON / WebSocket |
| 6. 输出模块 | 切状态、切镜头、切预设、驱动生成 |

---

## ComfyUI 角色定位

**ComfyUI 更适合当"实验台"和"拼装台"，不适合直接当整套实时演出的核心分析中枢。**

建议用法：
- 预演分析
- 离线抽特征
- 接生成流程
- 但不作为 show-critical 的唯一数据源

社区生态：ComfyAudio、comfyui-audio-processing、Fill-Nodes（带 BPM/鼓点检测）、Demucs 接入节点。

---

## 三个最实际的方向

### 方向 1：AI 做"理解器"

理解当前音乐段落、表演姿态、观众/表演者状态、空间情绪，然后给更高层信号：
- `state=build_up`
- `state=drop`
- `performer=arms_open`
- `face=tense`
- `energy=0.82`

### 方向 2：AI 做"预演标注器"

- 曲目分段
- 视觉版本建议
- cue 草案
- 镜头巡游建议
- 演出前远程沟通注释

### 方向 3：AI 做"第二感官"

不直接替决策，给额外可见层：
- 当前 beat confidence
- 当前 drop probability
- 当前 face expression score
- 当前 motion intensity
- 当前推荐视觉 preset

---

## 五个核心模块设计

### 模块 1：Input Adapters
本地音频文件 / 系统音频 loopback / 麦克风 / line in / playlist metadata / 摄像头视频流

### 模块 2：Fast Analysis（硬实时优先）
onset / BPM / beat/downbeat / RMS / low-mid-high band / section boundary

### 模块 3：AI Semantics
MusiCNN / VGGish / Effnet embedding / auto-tagging / face landmarks + blendshapes / pose landmarks / hand gesture categories

### 模块 4：Cue / State Engine
`if beat_confidence > x and energy > y then pulse`
`if section_change then transition`
`if face_mouth_open > z then trigger voice layer`
`if gesture=raise_hand then advance cue`

### 模块 5：Viewer / Web Preview
版本切换 / 镜头浏览 / 自动巡游 / 网页分享 / 远程确认

---

## 参考文献

| 类别 | 链接 |
|---|---|
| aubio | https://aubio.org |
| librosa beat tracking | https://librosa.org/doc/latest/generated/librosa.beat.beat_track.html |
| madmom downbeats | https://madmom.readthedocs.io/en/v0.16/modules/features/downbeats.html |
| Essentia | https://essentia.upf.edu |
| Essentia 实时 auto-tagging | https://essentia.upf.edu/tutorial_tensorflow_real-time_auto-tagging.html |
| Demucs | https://github.com/facebookresearch/demucs |
| Basic Pitch | https://github.com/spotify/basic-pitch |
| MediaPipe Face Landmarker | https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker/web_js |
| MediaPipe Pose Landmarker | https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/web_js |
| MediaPipe Gesture Recognizer | https://ai.google.dev/edge/mediapipe/solutions/vision/gesture_recognizer |
| python-osc | https://github.com/attwad/python-osc |
| TensorFlow.js | https://www.tensorflow.org/js |

---

## 导航

- [返回 AI 实时演出研究主入口](../README.md)
- [实验方案](../experiments/)
