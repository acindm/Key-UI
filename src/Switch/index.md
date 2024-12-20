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

- 下文提供了 4 种开关用法。
- 禁用：功能处于开启/关闭状态，需要告知用户但不可以被用户更改。

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

| Name              | Description  | Type            | Default |
| ----------------- | ------------ | --------------- | ------- |
| className         | 自定义类名   | `string`        | `--`    |
| style             | 自定义样式   | `CSSProperties` | `--`    |
| disabled          | 禁用         | `boolean`       | `false` |
| small             | 小型按钮     | `boolean`       | `false` |
| defaultChecked    | 默认选中     | `boolean`       | `false` |
| checkedChildren   | 选中 文字    | `ReactNode`     | `--`    |
| unCheckedChildren | 未选中 文字  | `ReactNode`     | `--`    |
| handleChange      | 改变回调函数 | `Function`      | `--`    |
