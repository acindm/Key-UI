---
title: Tabs 标签页
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Tab 标签页

用于组织内容区域，便于用户快速切换和查看不同的内容。

## 使用场景

- **多视图切换**：在有限的空间内展示不同的内容。
- **模块分组**：将信息分组并通过标签页进行切换。
- **节省空间**：避免在页面上展示过多内容，保持界面整洁。

## 默认样式：type = line

Tabs 的默认样式为`line`，适用于常规场景，默认选中第一项：
<code src="./demo/base.tsx"></code>

## 样式：type = card

通过`type = card`切换到卡片风格的标签页，更适合模块化内容展示：
<code src="./demo/type.tsx"></code>

## 禁用状态

通过`disabled`属性禁用某个标签页，用户无法切换到该标签页：
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
