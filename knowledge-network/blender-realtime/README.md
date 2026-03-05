# Blender实时引擎 Blender Realtime Engine

> 英文版本：[README-en.md](README-en.md)

目标：把Blender当实时引擎用，Eevee渲染快

---

## 知识领域概述

Blender实时引擎是我们的核心竞争力，Eevee渲染快，比Houdini生产流程快。

---

## 子领域

### Eevee快速渲染
- **最短路径**：5分钟快速渲染
- **多种实现方法**：Eevee/Cycles/eevee-next
- **官方资源**：Blender 4.x Eevee文档

[进入 Eevee快速渲染 →](./eevee-rendering/README.md)

---

### 几何节点
- **最短路径**：基础几何节点上手
- **多种实现方法**：
  - 音频作为Value输入
  - BPM分析驱动
  - MIDI信号驱动
- **官方资源**：Blender Geometry Nodes文档

[进入 几何节点 →](./geometry-nodes/README.md)

---

### 模拟节点 ⚠️ 特色内容
- **最短路径**：粒子系统基础
- **多种实现方法**：
  - 物理模拟
  - 流体模拟
  - cloth模拟
- **与音画互动交叉** → 特色内容
- **官方资源**：Blender Physics文档

[进入 模拟节点 →](./simulation-nodes/README.md)

---

### 光影/材质基础
- 基础材质设置
- 多种实现方法：principled BSDF/emit/glass
- 光照方案：HDRI/区域光/体积光

[进入 光影/材质基础 →](./lighting-materials/README.md)

---

## 特色内容

### 模拟节点与音画互动交叉
这是我们这个库里面的特点：用模拟节点做音画互动，思考更多的音画互动可能性。

---

## 最短路径（零基础）

| 目标 | 预计时间 | 路径 |
|-----|---------|------|
| 快速渲染 | 5分钟 | Eevee快速渲染 |
| 几何节点上手 | 1天 | 几何节点基础 |
| 模拟节点上手 | 1天 | 模拟节点基础 |

---

## 困境预设

| 可能遇到的问题 | 预设解决方案 |
|--------------|------------|
| 渲染太慢 | 切换到Eevee |
| 几何节点太复杂 | 从基础节点开始 |
| 模拟不稳定 | 调低精度/优化参数 |

---

*Blender实时引擎 - 我们的核心竞争力！*
