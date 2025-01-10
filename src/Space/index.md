---
title: Space 间距
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Space 间距

用于设置组件之间的统一间距。

## 使用场景

- **排列布局**：为组件之间提供固定间距，避免元素紧贴。
- **灵活对齐**：支持水平、垂直两种方向以及不同的对齐方式。
- **统一间距**：使得布局更简洁美观，统一组件间的间距。

## 默认用法

以下展示了默认的水平排列间距，适用于行内元素的水平间距：
<code src="./demo/base.tsx"></code>

## 垂直间距

组件垂直排列间距：
<code src="./demo/direction.tsx"></code>

## 间距大小

使用`size`属性自定义间距大小，支持`small`、`middle`和`large`：
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
