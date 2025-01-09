#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 项目根目录
const rootDir = path.resolve(__dirname, '../src');

// 模板内容
const templates = {
  demoBasic: `import {  } from 'keyui';
import React, { FC } from 'react';

const App: FC = () => {
  return (

  );
};

export default App;`,

  scss: `@import '/style/common.scss';
@import '/style/mix.scss';`,

  component: `import classNames from 'classnames';
import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import './button.scss';

export default Button;`,

  markdown: `---
title:
nav:
  title:
  path: /src
group:
  title:
---

# Button

## 使用场景

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 默认用法


## API`,

  test: `import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './button';`,

  indexTs: `import Button from './button';

export default Button;`,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content.trim());
    console.log(`✅ Created: ${filePath}`);
  } else {
    console.log(`⚠️ File already exists: ${filePath}`);
  }
};

const createComponent = (name) => {
  const componentDir = path.join(rootDir, name);
  const demoDir = path.join(componentDir, 'demo');

  // 创建目录
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
    console.log(`✅ Created directory: ${componentDir}`);
  } else {
    console.log(`⚠️ Directory already exists: ${componentDir}`);
  }

  if (!fs.existsSync(demoDir)) {
    fs.mkdirSync(demoDir);
    console.log(`✅ Created directory: ${demoDir}`);
  }

  // 创建文件
  createFile(path.join(demoDir, 'basic.tsx'), templates.demoBasic);
  createFile(
    path.join(componentDir, `${name.toLowerCase()}.scss`),
    templates.scss,
  );
  createFile(
    path.join(componentDir, `${name.toLowerCase()}.tsx`),
    templates.component,
  );
  createFile(path.join(componentDir, 'index.md'), templates.markdown);
  createFile(path.join(componentDir, 'index.test.tsx'), templates.test);
  createFile(path.join(componentDir, 'index.ts'), templates.indexTs);
};

// CLI 交互
rl.question('请输入组件名称(如 Button)：', (name) => {
  if (!name) {
    console.log('❌ 组件名称不能为空！');
    rl.close();
    return;
  }

  // 创建组件
  createComponent(name);

  rl.close();
});
