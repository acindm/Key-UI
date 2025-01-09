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

| 属性名             | 描述                                                                       | 类型                                             | 默认值 |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| `className`        | 自定义容器额外的类名                                                       | `string`                                         | -      |
| `style`            | 行内样式                                                                   | `React.CSSProperties`                            | -      |
| `defaultActiveKey` | 默认选中的标签 `key`，应与 `items` 数组中某个 `key` 对应才能展示对应的内容 | `string \| number`                               | -      |
| `type`             | 标签样式类型，可选 `line`（线下划样式）或 `card`（卡片式）                 | `'line' \| 'card'`                               | `line` |
| `items`            | 标签项数组，每个标签项包含 `key`, `label`, `children`, `disabled` 等信息   | `TabItemType[]`                                  | -      |
| `onTabClick`       | 点击标签时触发的回调，参数为被点击标签的 `key` 和鼠标事件对象 `MouseEvent` | `(key: string \| number, e: MouseEvent) => void` | -      |
