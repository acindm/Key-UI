---
title: Tab 标签页
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Tab 标签页

## 使用场景

将内容分组并以标签的形式展示，允许用户通过点击标签在不同的内容区域之间切换。

## 样式：type = line

默认选中第一项，type = line 的页签。
<code src="./demo/base.tsx"></code>

## 样式：type = card

默认选中第一项，type = card 的页签。
<code src="./demo/type.tsx"></code>

## 禁用状态

禁用某个 Tab。
<code src="./demo/disabled.tsx"></code>

## API

| Name             | Description    | Type            | Default  |
| ---------------- | -------------- | --------------- | -------- |
| className        | 自定义类名     | `string`        | `--`     |
| style            | 自定义样式     | `CSSProperties` | `--`     |
| defaultActiveKey | 默认激活标签项 | `string`        | `number` |
| type             | Tabs 类型      | `TabsType`      | `--`     |
| item             | 未选中 文字    | `TabItemType[]` | `--`     |
