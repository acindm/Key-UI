---
title: Slide 轮播图
nav:
  title: 组件
  path: /src
group:
  title: 数据型组件
---

# Slide 轮播

## 使用场景

- **图片广告**：在网站或应用首页轮播展示多张焦点图、广告横幅等。
- **信息展示**：可轮播文字、卡片等，减少页面切换，提高信息的可阅读性。
- **产品展示**：在同一组件中，分多屏幕展示产品的不同角度或功能点。

## 默认用法

默认开启自动播放。可自定义切换速度、图片大小等。
<code src="./demo/base.tsx"></code>

## API

| 属性名         | 描述                                                               | 类型                                      | 默认值 |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------- | ------ |
| `duration`     | 自动轮播间隔（单位：秒），设置为 0 或小于 0 时表示不自动播放       | `number`                                  | `2`    |
| `dots`         | 是否显示指示点                                                     | `boolean`                                 | `true` |
| `className`    | 自定义容器额外的 `className`                                       | `string`                                  | -      |
| `style`        | 容器的行内样式                                                     | `React.CSSProperties`                     | -      |
| `beforeChange` | 切换前的回调函数，参数分别为当前索引 `from` 和目标索引 `to`        | `(from: number, to: number) => void`      | -      |
| `afterChange`  | 切换后的回调函数，参数分别为当前索引 `current` 和上一个索引 `from` | `(current: number, from: number) => void` | -      |
| `children`     | 轮播的子元素（通常是若干包含图片或内容的 `<div>` 等）              | `React.ReactNode`                         | -      |
