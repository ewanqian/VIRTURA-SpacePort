# Unity 轻量化实操指引 Unity Basics Guide

> 英文版本：[unity-basics-guide-en.md](unity-basics-guide-en.md)

重点强调"Unity实操门槛极低，无需复杂配置，全程拖拽+插件辅助即可完成第一个Demo"。

---

## 前置准备

### 1. 软件安装

下载并安装 Unity Hub 和 Unity Editor：
- [Unity 官网下载](https://unity.com/download)

### 2. 推荐插件

**VR Interaction Framework**
- 插件链接：[https://assetstore.unity.com/packages/templates/systems/vr-interaction-framework-161066](https://assetstore.unity.com/packages/templates/systems/vr-interaction-framework-161066)
- 适配设备：✅ Meta Quest（完全适配），⚠️ Apple Vision Pro（兼容性较差）

---

## 基础操作步骤

### 步骤 1：创建新项目

1. 打开 Unity Hub
2. 点击 "New Project"
3. 选择 "3D" 模板
4. 输入项目名称
5. 点击 "Create"

### 步骤 2：导入插件

1. 在 Unity Editor 中打开 Package Manager
2. 搜索 "VR Interaction Framework"
3. 点击 "Install"

### 步骤 3：快速配置场景

**核心技巧：无需手动配置，直接拖拽预制体！**

1. 在 Project 窗口找到插件的 Prefabs 文件夹
2. 将角色控制预制体（Player Controller / Character Controller）直接拖拽到 Hierarchy 窗口
3. **无需额外配置！**

### 步骤 4：添加场景内容

1. 创建或导入你的 3D 模型
2. 将模型拖拽到 Hierarchy 窗口
3. 调整位置和大小

### 步骤 5：保存场景

1. File → Save
2. 输入场景名称
3. 点击 "Save"

---

## 常见问题

### Q: 插件导入失败怎么办？

A: 检查网络连接，确保能访问 Unity Asset Store。

### Q: 预制体拖拽后无法正常显示？

A: 检查预制体是否正确导入，尝试重新拖拽。

---

## 下一步

完成基础操作后，继续制作你的第一个 Demo：

[你的第一个 Demo →](../04-first-demo/exercises.md)

---

*Unity 实操 - 拖拽即可完成，快速做出第一个 Demo！*
