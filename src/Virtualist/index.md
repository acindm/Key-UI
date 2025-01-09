---
title: Virtualist 虚拟列表
nav:
  title: 组件
  path: /components
group:
  title: 数据型组件
---

# VirtualList - 虚拟列表

根据滚动容器元素的可视区域来渲染长列表数据中某一部分数据。

## 使用场景

在长列表场景下，使用虚拟列表可以有效减少 DOM 元素的渲染，从而优化性能。

## 常规列表和虚拟列表

<code src="./demo/base.tsx"></code>
通过控制台，可以看到：

- 普通列表一次性渲染 1000 个 DOM 元素，耗时较长，约 36 ms。
- 虚拟列表通过计算，只渲染可视区域部分 DOM 元素，约 1.3 ms。
- 后续滚动列表时，普通列表不会再次触发视图更新；而虚拟列表由于需要重新计算可视区域元素，因此会频繁触发视图更新。

## 简易实现虚拟列表

后续实现了两个虚拟列表：元素定高 & 元素不定高。

## 元素定高：FixedSize

<code src="./demo/fs.tsx"></code>

## 元素不定高：VarSize

<code src="./demo/vs.tsx"></code>

## API
