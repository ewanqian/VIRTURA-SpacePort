# AI 实时演出实验方案

> VIRTURA Research Laboratory · 感知接口方向 · 2026-03-23

---

## 实验一：音频 → state

**目标：** 建立从音频特征到视觉状态的最小可用映射

**步骤：**
1. 接入本地音频或系统 audio loopback
2. 用 aubio 提取 beat / onset / RMS / band energy
3. 用 madmom 提取 downbeat
4. 定义 3~5 个视觉状态（如：`idle` / `pulse` / `build_up` / `drop` / `cooldown`）
5. 写规则映射：`if RMS > threshold and beat_confidence > x then drop`
6. 输出 JSON / OSC 到 SceneForge viewer

**预期产出：**
- `experiments/exp01-audio-to-state/run.sh` 或 `.py`
- `experiments/exp01-audio-to-state/states.json`
- `experiments/exp01-audio-to-state/results.md`（测试记录）

**优先级：高**（最早可闭环）

---

## 实验二：摄像头 → cue

**目标：** 用 MediaPipe 检测表演者姿态，驱动 cue 触发

**步骤：**
1. 接入摄像头流
2. 用 MediaPipe Pose Landmarker 提取关键点
3. 定义触发规则：
   - `head yaw > threshold` → 切换镜头
   - `mouth_open > threshold` → 触发 voice layer
   - `arms_up` → advance cue
   - `one_hand_gesture` → 切换状态
4. 通过 OSC 发送到 SceneForge

**预期产出：**
- `experiments/exp02-camera-to-cue/results.md`
- 测试视频片段（本地存档，不上传 GitHub）

**优先级：中**（需要真实表演场景测试）

---

## 实验三：离线曲库分析

**目标：** 对 20 首常演曲目生成结构化 profile，演出时只做实时校正

**步骤：**
1. 收集 20 首曲目的音频文件
2. 批量运行：
   - BPM 检测（librosa）
   - 段落结构分析（Essentia）
   - auto-tagging（Essentia）
   - embedding 抽取
3. 生成 `track-profile.json`
4. 演出时加载 profile + 实时 BPM 校正

**预期产出：**
- `experiments/exp03-track-library/profiles/` 目录
- `track-profile.schema.json`（数据格式规范）
- `experiments/exp03-track-library/batch-analysis.py`

**优先级：中**（可在日常练习中逐步积累）

---

## 状态记录模板

每次实验后填写：

```markdown
## [日期] 实验 [编号]：[名称]

### 结果
- 成功点：
- 失败点：
- 待解决：

### 数据
（截图 / JSON 输出 / 关键参数）

### 下一步
```

---

## 导航

- [返回 AI 实时演出研究主入口](../README.md)
- [AI 模块技术选型](./research/ai-modules-research.md)
