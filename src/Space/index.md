---
title: Space 间距
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Space 间距

设置组件之间的距离。

## 使用场景

避免组件初始时紧贴在一起，设置组件之间的距离。

- 适用于行内元素的水平间距。可以设置各种水平对齐方式。

## 默认用法

相邻组件水平间距。
<code src="./demo/base.tsx"></code>

## 垂直间距

垂直方向排列的间距。
<code src="./demo/direction.tsx"></code>

## 间距大小

size 默认为 small。通过设置 size 为 large middle 分别把间距设为大、中间距。
<code src="./demo/size.tsx"></code>

## API

| 属性名      | 描述                                                                                                                                                  | 类型                                         | 默认值       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------ |
| `children`  | 需要展示的子元素                                                                                                                                      | `ReactNode`                                  | -            |
| `style`     | 自定义容器的行内样式                                                                                                                                  | `React.CSSProperties`                        | -            |
| `className` | 容器额外的 `className`                                                                                                                                | `string`                                     | -            |
| `direction` | 布局方向，可选值：<br/>- `horizontal` (水平排列)<br/>- `vertical` (垂直排列)                                                                          | `'horizontal' \| 'vertical'`                 | `horizontal` |
| `size`      | 间距大小，可传入：<br/>- 预设字符串：`mini` / `small` / `medium` / `large`<br/>- 数值(单位 px)<br/>- 元组 `[number, number]` 表示横向与纵向的不同间距 | `SizeType \| number \| [number, number]`     | `small`      |
| `align`     | 子元素在横向布局时的对齐方式，可选值：<br/>- `start` / `center` / `end` / `baseline`                                                                  | `'start' \| 'center' \| 'end' \| 'baseline'` | `center`     |
