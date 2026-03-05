# 3D重建/可视化 3D Reconstruction / Visualization

> 英文版本：[README-en.md](README-en.md)

目标：从扫描到AI生成到高斯点云

---

## 知识领域概述

3D重建/可视化是沉浸式体验的内容来源，从实物→扫描→AI生成→高斯点云。

---

## 子领域

### 物体扫描
- **最短路径**：iPhone LiDAR扫描
- **多种实现方法**：
  - LiDAR扫描
  - Photogrammetry照片重建
  - AI生成
- **工具对比**：Scaniverse/Polycam/Reality Capture对比

[进入 物体扫描 →](./object-scanning/README.md)

---

### AI生成3D
- **最短路径**：图片→3D模型
- **多种实现方法**：
  - Meshy/TripoSR
  - Point-E
  - DreamFusion
- **AI效果对比**：中等偏下vs精益求精

[进入 AI生成3D →](./ai-3d-generation/README.md)

---

### 高斯点云
- **最短路径**：图片→Gaussian Splatting
- **多种实现方法**：
  - Apple Shapr
  - ComfyUI Gaussian Splatting
  - COLMAP + 3DGS
- **效果对比**：质量vs速度

[进入 高斯点云 →](./gaussian-splatting/README.md)

---

## 特色内容

### AI vs 人工
- AI生成：中等偏下效果 → 快速原型
- 我们追求：精益求精的中上效果 → 精细化生产

---

## 最短路径（零基础）

| 目标 | 预计时间 | 路径 |
|-----|---------|------|
| 图片→3D模型 | 30分钟 | AI生成3D快速入门 |
| 图片→高斯场景 | 1天 | 高斯点云快速入门 |

---

## 困境预设

| 可能遇到的问题 | 预设解决方案 |
|--------------|------------|
| 扫描效果差 | 增加照片/换工具 |
| AI生成质量差 | 换工具/后期处理 |
| 高斯点云太卡 | 降低精度/优化参数 |

---

*3D重建/可视化 - 沉浸式体验的内容来源！*
