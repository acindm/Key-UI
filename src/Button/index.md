---
title: Button 按钮
nav:
  title: 组件
  path: /src
group:
  title: 基础组件
---

# Button 按钮

## 使用场景

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 默认用法

7 种最常用按钮
<code src="./demo/base.tsx"></code>

## 圆角按钮

配置 `circle` 变为圆按钮
<code src="./demo/circle.tsx"></code>

## 按钮尺寸

<!-- 自定义宽高配置不同尺寸按钮。 -->

分为大/中/小三种尺寸  
size `large/small` 分别对应大/小尺寸。默认尺寸为`middle`
<code src="./demo/size.tsx"></code>

## 禁用状态

配置 `disabled` 禁用按钮
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
