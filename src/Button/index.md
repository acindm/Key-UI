---
title: Button 按钮
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Button 按钮

用于标记操作命令，响应用户点击行为并触发相应的业务逻辑。

## 使用场景

- **表单提交**：用作提交或重置操作。
- **页面跳转**：点击后跳转到目标页面。
- **功能触发**：触发页面中的特定功能，如弹窗、菜单。

## 默认用法

以下展示了 7 种最常用按钮样式，包含基础样式和主题样式等：
<code src="./demo/base.tsx"></code>

## 圆角按钮

通过配置 `circle` 属性可将按钮变为圆形。
<code src="./demo/circle.tsx"></code>

## 按钮尺寸

提供大、中、小三种尺寸。使用 `size` 属性设置按钮大小，默认值为 `middle`：
<code src="./demo/size.tsx"></code>

## 禁用状态

通过配置 `disabled` 属性禁用按钮，禁用状态下按钮无法被点击。
<code src="./demo/disabled.tsx"></code>

## API

| 属性名      | 描述                                                           | 类型                                                                              | 默认值    |
| ----------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------- |
| `style`     | 自定义行内样式                                                 | `React.CSSProperties`                                                             | -         |
| `className` | 额外的样式类名                                                 | `string`                                                                          | -         |
| `disabled`  | 是否禁用按钮；若类型为 `link` 时，会给链接添加 `disabled` 样式 | `boolean`                                                                         | `false`   |
| `size`      | 按钮尺寸                                                       | `'small' \| 'middle' \| 'large'`                                                  | `middle`  |
| `type`      | 按钮类型                                                       | `'primary' \| 'default' \| 'danger' \| 'link' \| 'warning' \| 'info' \| 'dashed'` | `default` |
| `children`  | 按钮内容（可传入文本、图标或任意 `ReactNode`）                 | `ReactNode`                                                                       | -         |
| `href`      | 当 `type='link'` 时，按钮会被渲染为 `<a>`，此属性为链接地址    | `string`                                                                          | -         |
| `circle`    | 是否为圆形按钮；仅当 `type !== 'link'` 时生效                  | `boolean`                                                                         | -         |
| `onClick`   | 点击事件回调                                                   | `MouseEventHandler<HTMLElement>`                                                  | -         |
