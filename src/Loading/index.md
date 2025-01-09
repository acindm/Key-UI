---
title: Loading 加载
nav:
  title: 组件
  path: /src
group:
  title: 反馈型组件
---

# Loading 加载

网页处于加载过程时显示的动画。

## 使用场景

加载过程中显示的动画。或在等待加载的位置提供一个占位图。

## 常见加载图标

最基础的加载图标，直接在标签内设置大小与颜色（图标默认颜色为主题色）。
<code src="./demo/circle.tsx"></code>

## 骨架屏

适用于整个网页的加载，相比传统加载图标，视觉效果和用户体验更好。
<code src="./demo/skeleton.tsx"></code>

## API

## SkeletonProps

| 属性名      | 描述                                          | 类型                      | 默认值 |
| ----------- | --------------------------------------------- | ------------------------- | ------ |
| `className` | 额外的样式类名                                | `string`                  | -      |
| `loading`   | 是否处于加载状态，`true` 时显示骨架屏         | `boolean`                 | `true` |
| `title`     | 是否显示标题骨架                              | `boolean`                 | -      |
| `avatar`    | 是否显示头像骨架                              | `boolean`                 | -      |
| `row`       | 显示行数                                      | `number`                  | `3`    |
| `width`     | 每行骨架的宽度，可传入字符串如 `'50%'` 或数字 | `Array<string \| number>` | `[]`   |
| `size`      | 头像骨架的大小（像素）                        | `number`                  | `40`   |

## LoadingProps

| 属性名      | 描述                                         | 类型                  | 默认值 |
| ----------- | -------------------------------------------- | --------------------- | ------ |
| `show`      | 是否显示 Loading 图标                        | `boolean`             | `true` |
| `className` | 额外的样式类名                               | `string`              | -      |
| `style`     | 自定义行内样式（可用于控制宽高、颜色等）     | `React.CSSProperties` | -      |
| `color`     | Loading 图标的颜色，优先级高于 `style.color` | `string`              | -      |
