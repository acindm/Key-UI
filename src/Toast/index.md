---
title: Toast 全局通知
nav:
  title: 组件
  path: /src
group:
  title: 反馈型组件
---

# Toast 全局通知

## 使用场景

用户点击触发。

## 默认用法

弹窗时长默认 3s，可自行定义。
弹窗类型如下四种：
<code src="./demo/base.tsx"></code>

## API

| 属性名     | 描述                                                       | 类型                                          | 默认值 |
| ---------- | ---------------------------------------------------------- | --------------------------------------------- | ------ |
| `type`     | 消息类型，可选值：`info` / `success` / `error` / `warning` | `'info' \| 'success' \| 'error' \| 'warning'` | `info` |
| `open`     | 是否显示 Toast                                             | `boolean`                                     | -      |
| `content`  | 消息内容                                                   | `string`                                      | -      |
| `duration` | 显示时长（单位：秒），到达时间后自动关闭                   | `number`                                      | `3`    |
