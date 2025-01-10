---
title: Switch 开关
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Switch 开关

用于在两种状态之间切换，常见于表单开关、功能启用/关闭等场景。

## 使用场景

- **功能开关**：切换某个功能的启用状态。
- **状态选择**：在两种状态之间快速切换。
- **表单组件**：与其他表单组件结合使用。

## 默认用法

最基本的开关用法：
<code src="./demo/base.tsx"></code>

## 开关尺寸

通过`size`属性调整开关尺寸，支持`default` 和 `small`两种：
<code src="./demo/size.tsx"></code>

## 按钮字体

`checkedChildren` 自定义选中内容，`unCheckedChildren` 自定义未选中内容。
<code src="./demo/font.tsx"></code>

## 禁用状态

通过`disabled`属性禁用开关，用户无法进行切换，但可以看到 switch 状态。
<code src="./demo/disabled.tsx"></code>

## API

| 属性名              | 描述                                                                    | 类型                         | 默认值  |
| ------------------- | ----------------------------------------------------------------------- | ---------------------------- | ------- |
| `className`         | 自定义容器额外的类名                                                    | `string`                     | -       |
| `children`          | 自定义子元素（通常无需手动传入，内部也不会用到）                        | `ReactNode`                  | -       |
| `style`             | 行内样式                                                                | `React.CSSProperties`        | -       |
| `disabled`          | 是否禁用当前开关                                                        | `boolean`                    | -       |
| `small`             | 是否为小尺寸开关                                                        | `boolean`                    | -       |
| `defaultChecked`    | 开关的默认选中状态                                                      | `boolean`                    | `false` |
| `checkedChildren`   | 选中状态下显示的内容                                                    | `ReactNode`                  | -       |
| `unCheckedChildren` | 未选中状态下显示的内容                                                  | `ReactNode`                  | -       |
| `loading`           | 是否为加载状态，加载时不可点击                                          | `boolean`                    | -       |
| `onChange`          | 状态变化回调，参数为当前开关新状态（`true` 表示选中，`false` 表示未选） | `(checked: boolean) => void` | -       |
