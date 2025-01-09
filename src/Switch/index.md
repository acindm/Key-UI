---
title: Switch 开关
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Switch 开关

两种状态选择切换。

## 使用场景

用于两种状态的切换、某项功能的开关。会直接触发状态改变。

## 默认用法

最基本的使用方法。
<code src="./demo/base.tsx"></code>

## 开关尺寸

右侧为默认大小，通过`small` 切换到小开关
<code src="./demo/size.tsx"></code>

## 按钮字体

`checkedChildren` 自定义选中内容，`unCheckedChildren` 自定义未选中内容。
<code src="./demo/font.tsx"></code>

## 禁用状态

通过`disabled`开启禁用。
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
